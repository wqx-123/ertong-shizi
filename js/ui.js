// 儿童识字小报 - UI 交互控制
// 处理用户界面交互和状态显示

class UIManager {
  constructor() {
    this.elements = {};
    this.isGenerating = false;
    this.initElements();
    this.bindEvents();
  }

  /**
   * 初始化 DOM 元素引用
   */
  initElements() {
    // API 密钥相关
    this.elements.apiKeyInput = document.getElementById('apiKey');
    this.elements.toggleApiKeyBtn = document.getElementById('toggleApiKey');
    this.elements.saveApiKeyBtn = document.getElementById('saveApiKey');

    // 表单元素
    this.elements.themeSelect = document.getElementById('theme');
    this.elements.customThemeInput = document.getElementById('customTheme');
    this.elements.titleInput = document.getElementById('title');
    this.elements.aspectRatioSelect = document.getElementById('aspectRatio');
    this.elements.resolutionSelect = document.getElementById('resolution');
    this.elements.formatSelect = document.getElementById('format');
    this.elements.generateBtn = document.getElementById('generateBtn');

    // 进度和结果区域
    this.elements.progressSection = document.getElementById('progressSection');
    this.elements.progressFill = document.getElementById('progressFill');
    this.elements.progressStatus = document.getElementById('progressStatus');
    this.elements.taskIdElement = document.getElementById('taskId');
    this.elements.resultSection = document.getElementById('resultSection');
    this.elements.resultImage = document.getElementById('resultImage');
    this.elements.errorSection = document.getElementById('errorSection');
    this.elements.errorMessage = document.getElementById('errorMessage');

    // 按钮元素
    this.elements.downloadBtn = document.getElementById('downloadBtn');
    this.elements.newGenerationBtn = document.getElementById('newGenerationBtn');
    this.elements.retryBtn = document.getElementById('retryBtn');
  }

  /**
   * 绑定事件监听器
   */
  bindEvents() {
    // API 密钥相关
    this.elements.toggleApiKeyBtn?.addEventListener('click', () => this.toggleApiKeyVisibility());
    this.elements.saveApiKeyBtn?.addEventListener('click', () => this.saveApiKey());

    // 主题选择相关
    this.elements.themeSelect?.addEventListener('change', (e) => this.handleThemeChange(e));
    this.elements.customThemeInput?.addEventListener('input', (e) => this.handleCustomThemeInput(e));

    // 生成按钮
    this.elements.generateBtn?.addEventListener('click', () => this.handleGenerateClick());

    // 结果页面按钮
    this.elements.downloadBtn?.addEventListener('click', () => this.downloadImage());
    this.elements.newGenerationBtn?.addEventListener('click', () => this.resetToNewGeneration());
    this.elements.retryBtn?.addEventListener('click', () => this.retryGeneration());

    // 表单输入验证
    this.elements.titleInput?.addEventListener('input', () => this.validateForm());
    this.elements.customThemeInput?.addEventListener('input', () => this.validateForm());
  }

  /**
   * 切换 API 密钥可见性
   */
  toggleApiKeyVisibility() {
    const input = this.elements.apiKeyInput;
    const btn = this.elements.toggleApiKeyBtn;

    if (input.type === 'password') {
      input.type = 'text';
      btn.textContent = '🙈';
      btn.title = '隐藏密钥';
    } else {
      input.type = 'password';
      btn.textContent = '👁️';
      btn.title = '显示密钥';
    }
  }

  /**
   * 保存 API 密钥
   */
  saveApiKey() {
    const apiKey = this.elements.apiKeyInput.value.trim();

    if (!apiKey) {
      this.showToast('请输入 API 密钥', 'warning');
      return;
    }

    storageManager.saveApiKey(apiKey);
    nanoBananaAPI.setApiKey(apiKey);
    this.showToast('API 密钥已保存', 'success');
  }

  /**
   * 处理主题选择变化
   */
  handleThemeChange(e) {
    const value = e.target.value;
    const customInput = this.elements.customThemeInput;

    if (value === 'custom') {
      customInput.style.display = 'block';
      customInput.required = true;
      customInput.focus();
    } else {
      customInput.style.display = 'none';
      customInput.required = false;
      customInput.value = '';
    }

    this.validateForm();
  }

  /**
   * 处理自定义主题输入
   */
  handleCustomThemeInput(e) {
    const value = e.target.value.trim();
    if (value) {
      // 如果用户输入了自定义主题，自动更新下拉框选择
      this.elements.themeSelect.value = 'custom';
    }
    this.validateForm();
  }

  /**
   * 验证表单
   */
  validateForm() {
    const theme = this.getSelectedTheme();
    const title = this.elements.titleInput.value.trim();
    const btn = this.elements.generateBtn;

    const isValid = theme && title && this.elements.apiKeyInput.value.trim();

    if (btn) {
      btn.disabled = !isValid || this.isGenerating;
    }

    return isValid;
  }

  /**
   * 获取当前选择的主题
   */
  getSelectedTheme() {
    const selectedValue = this.elements.themeSelect.value;
    if (selectedValue === 'custom') {
      return this.elements.customThemeInput.value.trim();
    }
    return selectedValue;
  }

  /**
   * 处理生成按钮点击
   */
  async handleGenerateClick() {
    if (this.isGenerating) return;

    if (!this.validateForm()) {
      this.showToast('请填写所有必需的参数', 'error');
      return;
    }

    const theme = this.getSelectedTheme();
    const title = this.elements.titleInput.value.trim();
    const apiKey = this.elements.apiKeyInput.value.trim();

    // 生成参数
    const params = {
      theme,
      title,
      aspectRatio: this.elements.aspectRatioSelect.value,
      resolution: this.elements.resolutionSelect.value,
      format: this.elements.formatSelect.value
    };

    // 触发生成事件
    const event = new CustomEvent('generateStart', { detail: { ...params, apiKey } });
    document.dispatchEvent(event);
  }

  /**
   * 显示生成进度
   */
  showProgress(taskId) {
    this.hideAllSections();
    this.elements.progressSection.style.display = 'block';
    this.elements.progressFill.style.width = '0%';
    this.elements.progressStatus.textContent = '正在创建任务...';

    if (taskId) {
      this.elements.taskIdElement.style.display = 'block';
      this.elements.taskIdElement.querySelector('span').textContent = taskId;
    }
  }

  /**
   * 更新进度
   */
  updateProgress(state, retryCount = 0) {
    const maxRetries = 60;
    const percentage = Math.min((retryCount / maxRetries) * 100, 90);

    this.elements.progressFill.style.width = `${percentage}%`;

    switch (state) {
      case 'waiting':
        this.elements.progressStatus.textContent = '任务已提交，等待处理...';
        break;
      case 'processing':
      case undefined:
        this.elements.progressStatus.textContent = '正在生成图像，请稍候...';
        break;
      default:
        this.elements.progressStatus.textContent = `任务状态: ${state}`;
    }
  }

  /**
   * 显示生成结果
   */
  showResult(imageUrl, taskData) {
    this.hideAllSections();
    this.elements.resultSection.style.display = 'block';
    this.elements.resultImage.src = imageUrl;

    // 保存到历史记录
    storageManager.saveGenerationRecord({
      taskId: taskData.taskId,
      theme: this.getSelectedTheme(),
      title: this.elements.titleInput.value.trim(),
      imageUrl: imageUrl,
      createdAt: new Date()
    });

    // 添加到最近使用的主题
    storageManager.addRecentTheme(this.getSelectedTheme());
  }

  /**
   * 显示错误信息
   */
  showError(message) {
    this.hideAllSections();
    this.elements.errorSection.style.display = 'block';
    this.elements.errorMessage.textContent = message;
  }

  /**
   * 隐藏所有结果区域
   */
  hideAllSections() {
    this.elements.progressSection.style.display = 'none';
    this.elements.resultSection.style.display = 'none';
    this.elements.errorSection.style.display = 'none';
  }

  /**
   * 下载图片
   */
  downloadImage() {
    const imgUrl = this.elements.resultImage.src;
    const title = this.elements.titleInput.value.trim() || '识字小报';

    // 创建下载链接
    const link = document.createElement('a');
    link.href = imgUrl;
    link.download = `${title}_${Date.now()}.png`;
    link.target = '_blank';

    // 触发下载
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    this.showToast('图片下载已开始', 'success');
  }

  /**
   * 重置到新的生成
   */
  resetToNewGeneration() {
    this.hideAllSections();
    this.elements.titleInput.value = '';
    this.elements.themeSelect.value = '';
    this.elements.customThemeInput.value = '';
    this.elements.customThemeInput.style.display = 'none';
    this.validateForm();

    // 滚动到表单
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /**
   * 重试生成
   */
  retryGeneration() {
    this.hideAllSections();
    this.handleGenerateClick();
  }

  /**
   * 设置生成状态
   */
  setGenerating(isGenerating) {
    this.isGenerating = isGenerating;
    const btn = this.elements.generateBtn;
    const btnText = btn?.querySelector('.btn-text');
    const btnLoading = btn?.querySelector('.btn-loading');

    if (isGenerating) {
      btn?.setAttribute('disabled', 'true');
      if (btnText) btnText.style.display = 'none';
      if (btnLoading) btnLoading.style.display = 'inline';
    } else {
      btn?.removeAttribute('disabled');
      if (btnText) btnText.style.display = 'inline';
      if (btnLoading) btnLoading.style.display = 'none';
      this.validateForm();
    }
  }

  /**
   * 显示提示消息
   */
  showToast(message, type = 'info') {
    // 创建 toast 元素
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;

    // 添加到页面
    document.body.appendChild(toast);

    // 显示动画
    setTimeout(() => toast.classList.add('show'), 10);

    // 自动隐藏
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => document.body.removeChild(toast), 300);
    }, 3000);
  }

  /**
   * 加载保存的数据
   */
  loadSavedData() {
    // 加载 API 密钥
    const savedApiKey = storageManager.getApiKey();
    if (savedApiKey) {
      this.elements.apiKeyInput.value = savedApiKey;
      nanoBananaAPI.setApiKey(savedApiKey);
    }

    // 加载用户偏好
    const prefs = storageManager.getUserPreferences();
    if (prefs.defaultAspectRatio) {
      this.elements.aspectRatioSelect.value = prefs.defaultAspectRatio;
    }
    if (prefs.defaultResolution) {
      this.elements.resolutionSelect.value = prefs.defaultResolution;
    }
    if (prefs.defaultFormat) {
      this.elements.formatSelect.value = prefs.defaultFormat;
    }

    this.validateForm();
  }

  /**
   * 添加加载动画
   */
  showLoading(element) {
    if (element) {
      element.classList.add('loading');
    }
  }

  /**
   * 移除加载动画
   */
  hideLoading(element) {
    if (element) {
      element.classList.remove('loading');
    }
  }
}

// 创建全局实例
window.uiManager = new UIManager();

// 导出类供其他模块使用
window.UIManager = UIManager;