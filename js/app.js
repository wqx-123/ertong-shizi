// 儿童识字小报 - 应用主逻辑
// 协调各个模块，处理核心业务逻辑

class App {
  constructor() {
    this.currentTaskId = null;
    this.isGenerating = false;
    this.init();
  }

  /**
   * 初始化应用
   */
  async init() {
    try {
      // 加载保存的数据
      uiManager.loadSavedData();

      // 绑定生成事件
      document.addEventListener('generateStart', (e) => this.handleGenerateStart(e.detail));

      // 添加键盘快捷键
      this.bindKeyboardShortcuts();

      // 检查 URL 参数
      this.checkUrlParams();

      console.log('应用初始化完成');
    } catch (error) {
      console.error('应用初始化失败:', error);
      uiManager.showToast('应用初始化失败', 'error');
    }
  }

  /**
   * 绑定键盘快捷键
   */
  bindKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
      // Ctrl/Cmd + Enter 生成
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        if (!this.isGenerating) {
          uiManager.handleGenerateClick();
        }
      }

      // Esc 取消生成
      if (e.key === 'Escape' && this.isGenerating) {
        this.cancelGeneration();
      }
    });
  }

  /**
   * 检查 URL 参数
   */
  checkUrlParams() {
    const urlParams = new URLSearchParams(window.location.search);

    // 预填主题
    const theme = urlParams.get('theme');
    if (theme) {
      const themeSelect = uiManager.elements.themeSelect;
      const customInput = uiManager.elements.customThemeInput;

      if (VocabularyManager.getAllThemes().includes(theme)) {
        themeSelect.value = theme;
      } else {
        themeSelect.value = 'custom';
        customInput.value = theme;
        customInput.style.display = 'block';
      }
    }

    // 预填标题
    const title = urlParams.get('title');
    if (title) {
      uiManager.elements.titleInput.value = decodeURIComponent(title);
    }

    // 预填 API 密钥
    const apiKey = urlParams.get('api_key');
    if (apiKey) {
      const decodedKey = decodeURIComponent(apiKey);
      uiManager.elements.apiKeyInput.value = decodedKey;
      storageManager.saveApiKey(decodedKey);
      nanoBananaAPI.setApiKey(decodedKey);

      // 清理 URL 参数（安全考虑）
      const url = new URL(window.location);
      url.searchParams.delete('api_key');
      window.history.replaceState({}, document.title, url);
    }

    uiManager.validateForm();
  }

  /**
   * 处理生成开始事件
   */
  async handleGenerateStart(params) {
    try {
      // 设置生成状态
      this.isGenerating = true;
      uiManager.setGenerating(true);

      // 设置 API 密钥
      nanoBananaAPI.setApiKey(params.apiKey);

      // 获取词汇
      let vocabulary = VocabularyManager.getVocabularyByTheme(params.theme);

      // 如果是自定义主题且没有词汇，生成基础词汇
      if (!vocabulary || vocabulary.length === 0) {
        vocabulary = promptGenerator.generateCustomVocabulary(params.theme);
      }

      // 生成提示词
      const prompt = promptGenerator.generate(params.theme, params.title, vocabulary);
      console.log('生成的提示词:', prompt);

      // 显示进度
      uiManager.showProgress();

      // 创建任务
      const createResult = await nanoBananaAPI.createTask(prompt, {
        aspect_ratio: params.aspectRatio,
        resolution: params.resolution,
        output_format: params.format
      });

      this.currentTaskId = createResult.data.taskId;
      uiManager.showProgress(this.currentTaskId);

      // 轮询结果
      await this.pollForResult();

    } catch (error) {
      console.error('生成失败:', error);
      this.handleGenerationError(error);
    }
  }

  /**
   * 轮询任务结果
   */
  async pollForResult() {
    try {
      const result = await nanoBananaAPI.pollForResult(
        this.currentTaskId,
        {
          interval: 2000,
          maxRetries: 60,
          onProgress: (progress) => {
            uiManager.updateProgress(progress.state, progress.retryCount);
          }
        }
      );

      // 解析图片 URL
      const imageUrls = nanoBananaAPI.parseImageUrls(result);

      if (imageUrls.length > 0) {
        // 显示结果
        uiManager.showResult(imageUrls[0], result.data);
        uiManager.showToast('生成成功！', 'success');
      } else {
        throw new Error('未找到生成的图片');
      }

    } catch (error) {
      console.error('轮询结果失败:', error);
      this.handleGenerationError(error);
    } finally {
      this.resetGenerationState();
    }
  }

  /**
   * 处理生成错误
   */
  handleGenerationError(error) {
    let errorMessage = '生成失败，请重试';

    // 根据错误类型显示不同的消息
    if (error.message.includes('API 密钥')) {
      errorMessage = 'API 密钥无效，请检查后重新输入';
    } else if (error.message.includes('余额不足')) {
      errorMessage = '账户余额不足，请充值后重试';
    } else if (error.message.includes('过于频繁')) {
      errorMessage = '请求过于频繁，请稍后重试';
    } else if (error.message.includes('网络')) {
      errorMessage = '网络连接失败，请检查网络设置';
    } else if (error.message.includes('参数验证')) {
      errorMessage = '参数错误，请检查输入内容';
    } else if (error.message.includes('超时')) {
      errorMessage = '生成超时，请稍后重试';
    }

    uiManager.showError(errorMessage);
    uiManager.showToast(errorMessage, 'error');
    this.resetGenerationState();
  }

  /**
   * 重置生成状态
   */
  resetGenerationState() {
    this.isGenerating = false;
    this.currentTaskId = null;
    uiManager.setGenerating(false);
  }

  /**
   * 取消生成
   */
  cancelGeneration() {
    if (this.currentTaskId) {
      // 注意：Nano Banana Pro API 可能不提供取消任务的接口
      // 这里只是重置本地状态
      uiManager.showToast('已取消生成', 'info');
      this.resetGenerationState();
      uiManager.hideAllSections();
    }
  }

  /**
   * 分享生成结果
   */
  shareResult(imageUrl, title) {
    // 创建分享链接
    const shareUrl = new URL(window.location);
    shareUrl.searchParams.set('theme', uiManager.getSelectedTheme());
    shareUrl.searchParams.set('title', title);

    // 尝试使用 Web Share API
    if (navigator.share) {
      navigator.share({
        title: `儿童识字小报 - ${title}`,
        text: `查看我生成的识字小报：${title}`,
        url: shareUrl.toString()
      }).catch(() => {
        // 用户取消或分享失败
      });
    } else {
      // 复制链接到剪贴板
      navigator.clipboard.writeText(shareUrl.toString()).then(() => {
        uiManager.showToast('分享链接已复制到剪贴板', 'success');
      }).catch(() => {
        uiManager.showToast('分享功能暂不可用', 'error');
      });
    }
  }

  /**
   * 导出生成历史
   */
  exportHistory() {
    const history = storageManager.getGenerationHistory();
    const dataStr = JSON.stringify(history, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });

    const link = document.createElement('a');
    link.href = URL.createObjectURL(dataBlob);
    link.download = `generation_history_${new Date().toISOString().split('T')[0]}.json`;
    link.click();

    uiManager.showToast('历史记录已导出', 'success');
  }

  /**
   * 批量生成
   */
  async batchGenerate(themes, titlePrefix) {
    const results = [];

    for (const theme of themes) {
      try {
        const title = `${titlePrefix}${theme}`;

        // 触发单个生成
        const params = {
          theme,
          title,
          aspectRatio: uiManager.elements.aspectRatioSelect.value,
          resolution: uiManager.elements.resolutionSelect.value,
          format: uiManager.elements.formatSelect.value,
          apiKey: uiManager.elements.apiKeyInput.value
        };

        // 等待生成完成
        await this.handleGenerateStart(params);

        // 短暂延迟，避免请求过于频繁
        await new Promise(resolve => setTimeout(resolve, 3000));

      } catch (error) {
        console.error(`批量生成 ${theme} 失败:`, error);
        uiManager.showToast(`${theme} 生成失败`, 'error');
      }
    }

    return results;
  }
}

// 创建应用实例
window.app = new App();

// 导出类供其他模块使用
window.App = App;