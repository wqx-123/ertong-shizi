// 儿童识字小报 - Nano Banana Pro API 封装
// 处理与 AI 图像生成 API 的所有交互

class NanoBananaAPI {
  constructor(apiKey = null) {
    this.apiKey = apiKey;
    this.baseUrl = 'https://api.kie.ai/api/v1/jobs';
    this.headers = {
      'Content-Type': 'application/json'
    };
  }

  /**
   * 设置 API 密钥
   * @param {string} apiKey - API 密钥
   */
  setApiKey(apiKey) {
    this.apiKey = apiKey;
    if (apiKey) {
      this.headers['Authorization'] = `Bearer ${apiKey}`;
    } else {
      delete this.headers['Authorization'];
    }
  }

  /**
   * 创建图像生成任务
   * @param {string} prompt - 提示词
   * @param {Object} options - 额外参数
   * @returns {Promise<Object>} 任务创建响应
   */
  async createTask(prompt, options = {}) {
    if (!this.apiKey) {
      throw new Error('请先设置 API 密钥');
    }

    if (!prompt) {
      throw new Error('提示词不能为空');
    }

    const requestBody = {
      model: 'nano-banana-pro',
      input: {
        prompt: prompt,
        image_input: options.image_input || [],
        aspect_ratio: options.aspect_ratio || '3:4',
        resolution: options.resolution || '2K',
        output_format: options.output_format || 'png'
      }
    };

    // 如果提供了回调 URL，添加到请求中
    if (options.callBackUrl) {
      requestBody.callBackUrl = options.callBackUrl;
    }

    try {
      const response = await fetch(`${this.baseUrl}/createTask`, {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify(requestBody)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw this.handleError(response.status, errorData);
      }

      const data = await response.json();

      if (data.code !== 200) {
        throw new Error(data.msg || '创建任务失败');
      }

      return data;
    } catch (error) {
      if (error.name === 'TypeError' && error.message.includes('fetch')) {
        throw new Error('网络连接失败，请检查网络设置');
      }
      throw error;
    }
  }

  /**
   * 查询任务状态
   * @param {string} taskId - 任务 ID
   * @returns {Promise<Object>} 任务状态响应
   */
  async queryTask(taskId) {
    if (!taskId) {
      throw new Error('任务 ID 不能为空');
    }

    try {
      const response = await fetch(`${this.baseUrl}/recordInfo?taskId=${taskId}`, {
        method: 'GET',
        headers: this.headers
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw this.handleError(response.status, errorData);
      }

      const data = await response.json();

      if (data.code !== 200) {
        throw new Error(data.msg || '查询任务状态失败');
      }

      return data;
    } catch (error) {
      if (error.name === 'TypeError' && error.message.includes('fetch')) {
        throw new Error('网络连接失败，请检查网络设置');
      }
      throw error;
    }
  }

  /**
   * 轮询任务直到完成或失败
   * @param {string} taskId - 任务 ID
   * @param {Object} options - 轮询选项
   * @param {number} options.interval - 轮询间隔（毫秒）
   * @param {number} options.maxRetries - 最大重试次数
   * @param {Function} options.onProgress - 进度回调函数
   * @returns {Promise<Object>} 最终结果
   */
  async pollForResult(taskId, options = {}) {
    const {
      interval = 2000,  // 2秒轮询一次
      maxRetries = 60,  // 最多轮询2分钟
      onProgress = null
    } = options;

    let retryCount = 0;

    while (retryCount < maxRetries) {
      try {
        const result = await this.queryTask(taskId);
        const { state, failCode, failMsg } = result.data;

        // 调用进度回调
        if (onProgress) {
          onProgress({
            state,
            retryCount,
            taskId,
            data: result.data
          });
        }

        // 检查任务状态
        if (state === 'success') {
          return result;
        } else if (state === 'fail') {
          throw new Error(failMsg || '任务执行失败');
        }

        // 如果仍在等待中，继续轮询
        await this.sleep(interval);
        retryCount++;
      } catch (error) {
        // 如果是查询失败，继续重试
        if (retryCount >= maxRetries - 1) {
          throw error;
        }
        await this.sleep(interval);
        retryCount++;
      }
    }

    throw new Error('任务超时，请稍后重试');
  }

  /**
   * 解析结果中的图片 URL
   * @param {Object} result - API 响应结果
   * @returns {Array<string>} 图片 URL 列表
   */
  parseImageUrls(result) {
    if (!result || !result.data || !result.data.resultJson) {
      return [];
    }

    try {
      const resultJson = JSON.parse(result.data.resultJson);
      return resultJson.resultUrls || [];
    } catch (error) {
      console.error('解析结果失败:', error);
      return [];
    }
  }

  /**
   * 处理 API 错误
   * @param {number} status - HTTP 状态码
   * @param {Object} errorData - 错误数据
   * @returns {Error} 格式化的错误
   */
  handleError(status, errorData) {
    let message = '未知错误';

    switch (status) {
      case 400:
        message = '请求参数错误';
        break;
      case 401:
        message = 'API 密钥无效，请检查您的密钥';
        break;
      case 402:
        message = '账户余额不足';
        break;
      case 404:
        message = '任务不存在';
        break;
      case 422:
        message = '参数验证失败';
        break;
      case 429:
        message = '请求过于频繁，请稍后重试';
        break;
      case 500:
        message = '服务器内部错误';
        break;
      default:
        message = errorData?.msg || `请求失败 (${status})`;
    }

    const error = new Error(message);
    error.status = status;
    error.code = errorData?.code;
    return error;
  }

  /**
   * 延时函数
   * @param {number} ms - 延时毫秒数
   * @returns {Promise} Promise 对象
   */
  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  /**
   * 测试 API 连接
   * @returns {Promise<boolean>} 是否连接成功
   */
  async testConnection() {
    try {
      // 使用一个简单的测试提示词
      const testPrompt = "测试连接";
      await this.createTask(testPrompt);
      return true;
    } catch (error) {
      console.error('API 连接测试失败:', error);
      return false;
    }
  }
}

// 创建全局实例
window.nanoBananaAPI = new NanoBananaAPI();

// 导出类供其他模块使用
window.NanoBananaAPI = NanoBananaAPI;