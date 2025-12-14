// 儿童识字小报 - 提示词生成器
// 基于模板和主题词汇生成完整的 AI 绘图提示词

class PromptGenerator {
  constructor() {
    // 提示词模板
    this.template = `请生成一张儿童识字小报《{{主题/场景}}》，竖版 A4，学习小报版式，适合 5–9 岁孩子 认字与看图识物。

# 一、小报标题区（顶部）

**顶部居中大标题**：《{{标题}}》
* **风格**：十字小报 / 儿童学习报感
* **文本要求**：大字、醒目、卡通手写体、彩色描边
* **装饰**：周围添加与 {{主题/场景}} 相关的贴纸风装饰，颜色鲜艳

# 二、小报主体（中间主画面）

画面中心是一幅 **卡通插画风的「{{主题/场景}}」场景**：
* **整体气氛**：明亮、温暖、积极
* **构图**：物体边界清晰，方便对应文字，不要过于拥挤。

**场景分区与核心内容**
1.  **核心区域 A（主要对象）**：表现 {{主题/场景}} 的核心活动。
2.  **核心区域 B（配套设施）**：展示相关的工具或物品。
3.  **核心区域 C（环境背景）**：体现环境特征（如墙面、指示牌等）。

**主题人物**
* **角色**：1 位可爱卡通人物（职业/身份：与 {{主题/场景}} 匹配）。
* **动作**：正在进行与场景相关的自然互动。

# 三、必画物体与识字清单（Generated Content）

**请务必在画面中清晰绘制以下物体，并为其预留贴标签的位置：**

**1. 核心角色与设施：**
{{核心词汇}}

**2. 常见物品/工具：**
{{物品词汇}}

**3. 环境与装饰：**
{{环境词汇}}

*(注意：画面中的物体数量不限于此，但以上列表必须作为重点描绘对象)*

# 四、三语识字标注规则

对上述清单中的物体，贴上**三语识字标签**（中文、拼音、英语）：
* **格式**：三行制
  - 第一行：拼音带声调
  - 第二行：简体汉字
  - 第三行：英文翻译
* **样式**：彩色小贴纸风格，白底黑字或深色字，清晰可读
* **字体大小**：适中，确保儿童能清楚辨认
* **排版**：标签靠近对应的物体，不遮挡主体，用细线连接物体和标签
* **重要性**：每个主要物体都必须有对应的三语标签

# 五、画风参数
* **风格**：儿童绘本风 + 识字小报风
* **色彩**：高饱和、明快、温暖 (High Saturation, Warm Tone)
* **质量**：8k resolution, high detail, vector illustration style, clean lines
* **标签设计**：标签边框使用不同颜色区分不同类型的物品（如：人物-蓝色、物品-绿色、环境-橙色）`;
  }

  /**
   * 生成完整的提示词
   * @param {string} theme - 主题/场景
   * @param {string} title - 小报标题
   * @param {Array} vocabulary - 词汇数组
   * @returns {string} 完整的提示词
   */
  generate(theme, title, vocabulary) {
    if (!theme || !title) {
      throw new Error('主题和标题不能为空');
    }

    // 格式化词汇
    const formattedVocab = VocabularyManager.formatVocabularyForPrompt(vocabulary);

    // 替换模板中的占位符
    let prompt = this.template
      .replace(/\{\{主题\/场景\}\}/g, theme)
      .replace(/\{\{标题\}\}/g, title);

    // 填充词汇部分
    prompt = prompt
      .replace(/\{\{核心词汇\}\}/g, formattedVocab[0] || '无')
      .replace(/\{\{物品词汇\}\}/g, formattedVocab[1] || '无')
      .replace(/\{\{环境词汇\}\}/g, formattedVocab[2] || '无');

    return prompt;
  }

  /**
   * 获取提示词预览（不包含完整的模板）
   * @param {string} theme - 主题
   * @param {string} title - 标题
   * @returns {string} 简短的预览
   */
  getPreview(theme, title) {
    return `儿童识字小报《${title}》- ${theme}主题，包含${this.getVocabularyCount(theme)}个核心词汇`;
  }

  /**
   * 获取指定主题的词汇数量
   * @param {string} theme - 主题
   * @returns {number} 词汇数量
   */
  getVocabularyCount(theme) {
    const vocab = VocabularyManager.getVocabularyByTheme(theme);
    return vocab ? vocab.length : 0;
  }

  /**
   * 验证主题是否支持
   * @param {string} theme - 主题
   * @returns {boolean} 是否支持
   */
  isThemeSupported(theme) {
    return VocabularyManager.getAllThemes().includes(theme);
  }

  /**
   * 获取所有支持的主题
   * @returns {Array} 主题列表
   */
  getSupportedThemes() {
    return VocabularyManager.getAllThemes();
  }

  /**
   * 为自定义主题生成基础词汇（包含英语翻译）
   * @param {string} theme - 自定义主题名称
   * @returns {Array} 基础词汇列表
   */
  generateCustomVocabulary(theme) {
    // 基础词汇，适用于大多数场景
    const baseVocabulary = [
      { word: "小朋友", pinyin: "xiǎo péng yǒu", english: "Children", type: "人物" },
      { word: "桌子", pinyin: "zhuō zi", english: "Table", type: "设施" },
      { word: "椅子", pinyin: "yǐ zi", english: "Chair", type: "设施" },
      { word: "门", pinyin: "mén", english: "Door", type: "设施" },
      { word: "窗户", pinyin: "chuāng hu", english: "Window", type: "设施" },
      { word: "灯", pinyin: "dēng", english: "Light", type: "设施" },
      { word: "墙", pinyin: "qiáng", english: "Wall", type: "环境" },
      { word: "地板", pinyin: "dì bǎn", english: "Floor", type: "环境" },
      { word: "标志", pinyin: "biāo zhì", english: "Sign", type: "标识" },
      { word: "装饰", pinyin: "zhuāng shì", english: "Decoration", type: "装饰" }
    ];

    // 根据主题名称推测可能的词汇
    const themeSpecificVocabulary = [];

    if (theme.includes("店") || theme.includes("商场")) {
      themeSpecificVocabulary.push(
        { word: "货架", pinyin: "huò jià", english: "Shelf", type: "设施" },
        { word: "商品", pinyin: "shāng pǐn", english: "Product", type: "物品" },
        { word: "价签", pinyin: "jià qiān", english: "Price tag", type: "标识" },
        { word: "收银台", pinyin: "shōu yín tái", english: "Checkout counter", type: "设施" },
        { word: "购物车", pinyin: "gòu wù chē", english: "Shopping cart", type: "工具" },
        { word: "顾客", pinyin: "gù kè", english: "Customer", type: "人物" }
      );
    } else if (theme.includes("学校") || theme.includes("教室")) {
      themeSpecificVocabulary.push(
        { word: "老师", pinyin: "lǎo shī", english: "Teacher", type: "人物" },
        { word: "学生", pinyin: "xué shēng", english: "Student", type: "人物" },
        { word: "黑板", pinyin: "hēi bǎn", english: "Blackboard", type: "设施" },
        { word: "课本", pinyin: "kè běn", english: "Textbook", type: "物品" },
        { word: "铅笔", pinyin: "qiān bǐ", english: "Pencil", type: "文具" },
        { word: "书包", pinyin: "shū bāo", english: "Schoolbag", type: "物品" }
      );
    } else if (theme.includes("公园") || theme.includes("花园")) {
      themeSpecificVocabulary.push(
        { word: "大树", pinyin: "dà shù", english: "Big tree", type: "植物" },
        { word: "花朵", pinyin: "huā duǒ", english: "Flowers", type: "植物" },
        { word: "小草", pinyin: "xiǎo cǎo", english: "Grass", type: "植物" },
        { word: "小鸟", pinyin: "xiǎo niǎo", english: "Little bird", type: "动物" },
        { word: "蝴蝶", pinyin: "hú dié", english: "Butterfly", type: "动物" },
        { word: "长椅", pinyin: "cháng yǐ", english: "Bench", type: "设施" }
      );
    } else if (theme.includes("医院") || theme.includes("诊所")) {
      themeSpecificVocabulary.push(
        { word: "医生", pinyin: "yī shēng", english: "Doctor", type: "人物" },
        { word: "护士", pinyin: "hù shi", english: "Nurse", type: "人物" },
        { word: "病床", pinyin: "bìng chuáng", english: "Hospital bed", type: "设施" },
        { word: "听诊器", pinyin: "tīng zhěn qì", english: "Stethoscope", type: "医疗设备" },
        { word: "药片", pinyin: "yào piàn", english: "Medicine", type: "药品" }
      );
    } else if (theme.includes("交通") || theme.includes("街道")) {
      themeSpecificVocabulary.push(
        { word: "汽车", pinyin: "qì chē", english: "Car", type: "交通工具" },
        { word: "红绿灯", pinyin: "hóng lǜ dēng", english: "Traffic light", type: "交通设施" },
        { word: "斑马线", pinyin: "bān mǎ xiàn", english: "Crosswalk", type: "交通设施" },
        { word: "路牌", pinyin: "lù pái", english: "Road sign", type: "标识" }
      );
    }

    return [...baseVocabulary, ...themeSpecificVocabulary];
  }
}

// 创建全局实例
window.promptGenerator = new PromptGenerator();

// 导出类供其他模块使用
window.PromptGenerator = PromptGenerator;