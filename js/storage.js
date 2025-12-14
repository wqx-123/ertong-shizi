// 儿童识字小报 - 本地存储管理
// 处理浏览器本地存储相关功能

class StorageManager {
  constructor() {
    this.prefix = 'nanoBanana_';
    this.keys = {
      apiKey: 'apiKey',
      userPreferences: 'userPreferences',
      generationHistory: 'generationHistory',
      favoriteThemes: 'favoriteThemes'
    };
  }

  /**
   * 保存 API 密钥（带简单加密）
   * @param {string} apiKey - API 密钥
   */
  saveApiKey(apiKey) {
    if (!apiKey) {
      this.removeApiKey();
      return;
    }

    try {
      // 使用 Base64 进行简单编码（不是真正的加密）
      const encoded = btoa(apiKey);
      localStorage.setItem(this.getKey(this.keys.apiKey), encoded);
    } catch (error) {
      console.error('保存 API 密钥失败:', error);
    }
  }

  /**
   * 获取 API 密钥
   * @returns {string|null} API 密钥
   */
  getApiKey() {
    try {
      const encoded = localStorage.getItem(this.getKey(this.keys.apiKey));
      if (!encoded) return null;

      // 解码
      return atob(encoded);
    } catch (error) {
      console.error('读取 API 密钥失败:', error);
      return null;
    }
  }

  /**
   * 删除 API 密钥
   */
  removeApiKey() {
    try {
      localStorage.removeItem(this.getKey(this.keys.apiKey));
    } catch (error) {
      console.error('删除 API 密钥失败:', error);
    }
  }

  /**
   * 保存用户偏好设置
   * @param {Object} preferences - 偏好设置
   * @param {string} preferences.defaultAspectRatio - 默认画面比例
   * @param {string} preferences.defaultResolution - 默认分辨率
   * @param {string} preferences.defaultFormat - 默认输出格式
   * @param {Array} preferences.recentThemes - 最近使用的主题
   */
  saveUserPreferences(preferences) {
    try {
      const currentPrefs = this.getUserPreferences();
      const updatedPrefs = { ...currentPrefs, ...preferences };
      localStorage.setItem(this.getKey(this.keys.userPreferences), JSON.stringify(updatedPrefs));
    } catch (error) {
      console.error('保存用户偏好失败:', error);
    }
  }

  /**
   * 获取用户偏好设置
   * @returns {Object} 用户偏好设置
   */
  getUserPreferences() {
    try {
      const stored = localStorage.getItem(this.getKey(this.keys.userPreferences));
      if (!stored) {
        // 返回默认偏好
        return {
          defaultAspectRatio: '3:4',
          defaultResolution: '2K',
          defaultFormat: 'png',
          recentThemes: []
        };
      }
      return JSON.parse(stored);
    } catch (error) {
      console.error('读取用户偏好失败:', error);
      return {
        defaultAspectRatio: '3:4',
        defaultResolution: '2K',
        defaultFormat: 'png',
        recentThemes: []
      };
    }
  }

  /**
   * 添加最近使用的主题
   * @param {string} theme - 主题名称
   */
  addRecentTheme(theme) {
    if (!theme) return;

    try {
      const prefs = this.getUserPreferences();
      const recentThemes = prefs.recentThemes || [];

      // 移除已存在的
      const index = recentThemes.indexOf(theme);
      if (index > -1) {
        recentThemes.splice(index, 1);
      }

      // 添加到开头
      recentThemes.unshift(theme);

      // 最多保留10个
      if (recentThemes.length > 10) {
        recentThemes.pop();
      }

      this.saveUserPreferences({ recentThemes });
    } catch (error) {
      console.error('添加最近主题失败:', error);
    }
  }

  /**
   * 保存生成历史记录
   * @param {Object} record - 生成记录
   * @param {string} record.taskId - 任务ID
   * @param {string} record.theme - 主题
   * @param {string} record.title - 标题
   * @param {string} record.imageUrl - 图片URL
   * @param {Date} record.createdAt - 创建时间
   */
  saveGenerationRecord(record) {
    try {
      const history = this.getGenerationHistory();
      history.unshift(record);

      // 最多保留50条记录
      if (history.length > 50) {
        history.splice(50);
      }

      localStorage.setItem(this.getKey(this.keys.generationHistory), JSON.stringify(history));
    } catch (error) {
      console.error('保存生成记录失败:', error);
    }
  }

  /**
   * 获取生成历史记录
   * @param {number} limit - 限制返回数量
   * @returns {Array} 历史记录列表
   */
  getGenerationHistory(limit = null) {
    try {
      const stored = localStorage.getItem(this.getKey(this.keys.generationHistory));
      if (!stored) return [];

      const history = JSON.parse(stored);

      // 转换日期字符串为 Date 对象
      history.forEach(record => {
        if (record.createdAt && typeof record.createdAt === 'string') {
          record.createdAt = new Date(record.createdAt);
        }
      });

      return limit ? history.slice(0, limit) : history;
    } catch (error) {
      console.error('读取生成历史失败:', error);
      return [];
    }
  }

  /**
   * 清空生成历史
   */
  clearGenerationHistory() {
    try {
      localStorage.removeItem(this.getKey(this.keys.generationHistory));
    } catch (error) {
      console.error('清空生成历史失败:', error);
    }
  }

  /**
   * 保存收藏的主题
   * @param {Array} themes - 主题列表
   */
  saveFavoriteThemes(themes) {
    try {
      localStorage.setItem(this.getKey(this.keys.favoriteThemes), JSON.stringify(themes));
    } catch (error) {
      console.error('保存收藏主题失败:', error);
    }
  }

  /**
   * 获取收藏的主题
   * @returns {Array} 收藏的主题列表
   */
  getFavoriteThemes() {
    try {
      const stored = localStorage.getItem(this.getKey(this.keys.favoriteThemes));
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('读取收藏主题失败:', error);
      return [];
    }
  }

  /**
   * 添加收藏主题
   * @param {string} theme - 主题名称
   */
  addFavoriteTheme(theme) {
    if (!theme) return;

    try {
      const themes = this.getFavoriteThemes();
      if (!themes.includes(theme)) {
        themes.push(theme);
        this.saveFavoriteThemes(themes);
      }
    } catch (error) {
      console.error('添加收藏主题失败:', error);
    }
  }

  /**
   * 移除收藏主题
   * @param {string} theme - 主题名称
   */
  removeFavoriteTheme(theme) {
    if (!theme) return;

    try {
      const themes = this.getFavoriteThemes();
      const index = themes.indexOf(theme);
      if (index > -1) {
        themes.splice(index, 1);
        this.saveFavoriteThemes(themes);
      }
    } catch (error) {
      console.error('移除收藏主题失败:', error);
    }
  }

  /**
   * 获取存储的所有键
   * @returns {Array<string>} 键列表
   */
  getAllKeys() {
    const keys = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith(this.prefix)) {
        keys.push(key);
      }
    }
    return keys;
  }

  /**
   * 清空所有存储数据
   */
  clearAll() {
    try {
      const keys = this.getAllKeys();
      keys.forEach(key => localStorage.removeItem(key));
    } catch (error) {
      console.error('清空存储数据失败:', error);
    }
  }

  /**
   * 获取存储使用情况
   * @returns {Object} 存储信息
   */
  getStorageInfo() {
    try {
      let totalSize = 0;
      const keys = this.getAllKeys();

      keys.forEach(key => {
        const value = localStorage.getItem(key);
        if (value) {
          totalSize += new Blob([value]).size;
        }
      });

      // 获取总存储空间（大约值）
      const quotaEstimate = 5 * 1024 * 1024; // 假设5MB

      return {
        used: totalSize,
        total: quotaEstimate,
        percentage: (totalSize / quotaEstimate * 100).toFixed(2),
        keysCount: keys.length
      };
    } catch (error) {
      console.error('获取存储信息失败:', error);
      return {
        used: 0,
        total: 0,
        percentage: 0,
        keysCount: 0
      };
    }
  }

  /**
   * 获取完整的键名
   * @param {string} key - 键名
   * @returns {string} 带前缀的完整键名
   */
  getKey(key) {
    return this.prefix + key;
  }
}

// 创建全局实例
window.storageManager = new StorageManager();

// 导出类供其他模块使用
window.StorageManager = StorageManager;