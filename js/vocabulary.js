// 儿童识字小报 - 场景词汇库
// 包含各常见场景的核心词汇，每个词包含汉字、拼音、英语和类型分类

const VOCABULARY = {
  "超市": [
    // 核心角色与设施
    { word: "收银员", pinyin: "shōu yín yuán", english: "Cashier", type: "人物" },
    { word: "货架", pinyin: "huò jià", english: "Shelf", type: "设施" },
    { word: "购物车", pinyin: "gòu wù chē", english: "Shopping cart", type: "工具" },
    { word: "购物篮", pinyin: "gòu wù lán", english: "Shopping basket", type: "工具" },
    { word: "收银台", pinyin: "shōu yín tái", english: "Checkout counter", type: "设施" },
    { word: "入口", pinyin: "rù kǒu", english: "Entrance", type: "标识" },
    { word: "出口", pinyin: "chū kǒu", english: "Exit", type: "标识" },
    { word: "促销海报", pinyin: "cù xiāo hǎi bào", english: "Promotion poster", type: "装饰" },

    // 蔬菜区
    { word: "胡萝卜", pinyin: "hú luó bo", english: "Carrot", type: "蔬菜" },
    { word: "白菜", pinyin: "bái cài", english: "Cabbage", type: "蔬菜" },
    { word: "西红柿", pinyin: "xī hóng shì", english: "Tomato", type: "蔬菜" },
    { word: "黄瓜", pinyin: "huáng guā", english: "Cucumber", type: "蔬菜" },
    { word: "土豆", pinyin: "tǔ dòu", english: "Potato", type: "蔬菜" },
    { word: "洋葱", pinyin: "yáng cōng", english: "Onion", type: "蔬菜" },
    { word: "青椒", pinyin: "qīng jiāo", english: "Green pepper", type: "蔬菜" },

    // 水果区
    { word: "苹果", pinyin: "píng guǒ", english: "Apple", type: "水果" },
    { word: "香蕉", pinyin: "xiāng jiāo", english: "Banana", type: "水果" },
    { word: "橙子", pinyin: "chéng zi", english: "Orange", type: "水果" },
    { word: "葡萄", pinyin: "pú táo", english: "Grapes", type: "水果" },
    { word: "西瓜", pinyin: "xī guā", english: "Watermelon", type: "水果" },
    { word: "草莓", pinyin: "cǎo méi", english: "Strawberry", type: "水果" },

    // 乳制品区
    { word: "牛奶", pinyin: "niú nǎi", english: "Milk", type: "乳制品" },
    { word: "酸奶", pinyin: "suān nǎi", english: "Yogurt", type: "乳制品" },
    { word: "奶酪", pinyin: "nǎi lào", english: "Cheese", type: "乳制品" },
    { word: "黄油", pinyin: "huáng yóu", english: "Butter", type: "乳制品" },

    // 肉类区
    { word: "鸡肉", pinyin: "jī ròu", english: "Chicken", type: "肉类" },
    { word: "猪肉", pinyin: "zhū ròu", english: "Pork", type: "肉类" },
    { word: "牛肉", pinyin: "niú ròu", english: "Beef", type: "肉类" },
    { word: "鱼", pinyin: "yú", english: "Fish", type: "肉类" },

    // 烘焙区
    { word: "面包", pinyin: "miàn bāo", english: "Bread", type: "烘焙" },
    { word: "蛋糕", pinyin: "dàn gāo", english: "Cake", type: "烘焙" },
    { word: "饼干", pinyin: "bǐng gān", english: "Cookies", type: "烘焙" },
    { word: "蛋挞", pinyin: "dàn tà", english: "Egg tart", type: "烘焙" },

    // 零食饮料
    { word: "薯片", pinyin: "shǔ piàn", english: "Potato chips", type: "零食" },
    { word: "巧克力", pinyin: "qiǎo kè lì", english: "Chocolate", type: "零食" },
    { word: "糖果", pinyin: "táng guǒ", english: "Candy", type: "零食" },
    { word: "果汁", pinyin: "guǒ zhī", english: "Juice", type: "饮料" },
    { word: "可乐", pinyin: "kě lè", english: "Cola", type: "饮料" },
    { word: "矿泉水", pinyin: "kuàng quán shuǐ", english: "Mineral water", type: "饮料" },

    // 日用品
    { word: "洗发水", pinyin: "xǐ fà shuǐ", english: "Shampoo", type: "日用品" },
    { word: "牙膏", pinyin: "yá gāo", english: "Toothpaste", type: "日用品" },
    { word: "纸巾", pinyin: "zhǐ jīn", english: "Tissue", type: "日用品" },
    { word: "垃圾袋", pinyin: "lā jī dài", english: "Trash bag", type: "日用品" },

    // 标识与环境
    { word: "价签", pinyin: "jià qiān", english: "Price tag", type: "标识" },
    { word: "促销牌", pinyin: "cù xiāo pái", english: "Sale sign", type: "标识" },
    { word: "购物袋", pinyin: "gòu wù dài", english: "Shopping bag", type: "包装" },
    { word: "冷藏柜", pinyin: "lěng cáng guì", english: "Refrigerator", type: "设施" },
    { word: "冰柜", pinyin: "bīng guì", english: "Freezer", type: "设施" }
  ],

  "医院": [
    // 核心角色与设施
    { word: "医生", pinyin: "yī shēng", english: "Doctor", type: "人物" },
    { word: "护士", pinyin: "hù shi", english: "Nurse", type: "人物" },
    { word: "病人", pinyin: "bìng rén", english: "Patient", type: "人物" },
    { word: "救护员", pinyin: "jiù hù yuán", english: "Paramedic", type: "人物" },
    { word: "病床", pinyin: "bìng chuáng", english: "Hospital bed", type: "设施" },
    { word: "挂号处", pinyin: "guà hào chù", english: "Registration desk", type: "设施" },
    { word: "药房", pinyin: "yào fáng", english: "Pharmacy", type: "设施" },
    { word: "急诊室", pinyin: "jí zhěn shì", english: "Emergency room", type: "设施" },
    { word: "手术室", pinyin: "shǒu shù shì", english: "Operating room", type: "设施" },
    { word: "病房", pinyin: "bìng fáng", english: "Ward", type: "设施" },
    { word: "候诊室", pinyin: "hòu zhěn shì", english: "Waiting room", type: "设施" },
    { word: "护士站", pinyin: "hù shì zhàn", english: "Nurse station", type: "设施" },
    { word: "轮椅", pinyin: "lún yǐ", english: "Wheelchair", type: "工具" },
    { word: "担架", pinyin: "dān jià", english: "Stretcher", type: "工具" },
    { word: "输液架", pinyin: "shū yè jià", english: "IV stand", type: "设施" },

    // 医疗设备
    { word: "听诊器", pinyin: "tīng zhěn qì", english: "Stethoscope", type: "医疗设备" },
    { word: "体温计", pinyin: "tǐ wēn jì", english: "Thermometer", type: "医疗设备" },
    { word: "血压计", pinyin: "xuè yā jì", english: "Blood pressure monitor", type: "医疗设备" },
    { word: "针筒", pinyin: "zhēn tǒng", english: "Syringe", type: "医疗设备" },
    { word: "注射器", pinyin: "zhù shè qì", english: "Injector", type: "医疗设备" },
    { word: "心电图机", pinyin: "xīn diàn tú jī", english: "ECG machine", type: "医疗设备" },
    { word: "X光机", pinyin: "X guāng jī", english: "X-ray machine", type: "医疗设备" },
    { word: "显微镜", pinyin: "xiǎn wēi jìng", english: "Microscope", type: "医疗设备" },
    { word: "呼吸机", pinyin: "hū xī jī", english: "Ventilator", type: "医疗设备" },

    // 药品与耗材
    { word: "药片", pinyin: "yào piàn", english: "Medicine tablets", type: "药品" },
    { word: "胶囊", pinyin: "jiāo náng", english: "Capsules", type: "药品" },
    { word: "药水", pinyin: "yào shuǐ", english: "Liquid medicine", type: "药品" },
    { word: "绷带", pinyin: "bēng dài", english: "Bandage", type: "医疗耗材" },
    { word: "纱布", pinyin: "shā bù", english: "Gauze", type: "医疗耗材" },
    { word: "创可贴", pinyin: "chuàng kě tiē", english: "Band-aid", type: "医疗耗材" },
    { word: "口罩", pinyin: "kǒu zhào", english: "Face mask", type: "医疗耗材" },
    { word: "手套", pinyin: "shǒu tào", english: "Gloves", type: "医疗耗材" },
    { word: "棉签", pinyin: "mián qiān", english: "Cotton swab", type: "医疗耗材" },
    { word: "酒精", pinyin: "jiǔ jīng", english: "Alcohol", type: "消毒用品" },
    { word: "消毒水", pinyin: "xiāo dú shuǐ", english: "Disinfectant", type: "消毒用品" },
    { word: "碘伏", pinyin: "diǎn fú", english: "Iodine", type: "消毒用品" },

    // 标识与指示
    { word: "急救", pinyin: "jí jiù", english: "First aid", type: "标识" },
    { word: "急诊", pinyin: "jí zhěn", english: "Emergency", type: "标识" },
    { word: "门诊", pinyin: "mén zhěn", english: "Outpatient", type: "标识" },
    { word: "住院部", pinyin: "zhù yuàn bù", english: "Inpatient department", type: "标识" },
    { word: "儿科", pinyin: "ér kē", english: "Pediatrics", type: "标识" },
    { word: "内科", pinyin: "nèi kē", english: "Internal medicine", type: "标识" },
    { word: "外科", pinyin: "wài kē", english: "Surgery", type: "标识" },
    { word: "药房", pinyin: "yào fáng", english: "Pharmacy", type: "标识" },
    { word: "化验科", pinyin: "huà yán kē", english: "Laboratory", type: "标识" },

    // 环境与装饰
    { word: "走廊", pinyin: "zǒu láng", english: "Corridor", type: "环境" },
    { word: "电梯", pinyin: "diàn tī", english: "Elevator", type: "设施" },
    { word: "楼梯", pinyin: "lóu tī", english: "Stairs", type: "设施" },
    { word: "窗户", pinyin: "chuāng hu", english: "Window", type: "环境" },
    { word: "门", pinyin: "mén", english: "Door", type: "设施" },
    { word: "等候椅", pinyin: "děng hòu yǐ", english: "Waiting chair", type: "设施" },
    { word: "垃圾桶", pinyin: "lā jī tǒng", english: "Trash can", type: "设施" },
    { word: "消防栓", pinyin: "xiāo fáng shuān", english: "Fire hydrant", type: "安全设施" }
  ],

  "公园": [
    // 核心角色与设施
    { word: "小朋友", pinyin: "xiǎo péng yǒu", english: "Children", type: "人物" },
    { word: "老爷爷", pinyin: "lǎo yé ye", english: "Grandpa", type: "人物" },
    { word: "老奶奶", pinyin: "lǎo nǎi nai", english: "Grandma", type: "人物" },
    { word: "爸爸", pinyin: "bà ba", english: "Father", type: "人物" },
    { word: "妈妈", pinyin: "mā ma", english: "Mother", type: "人物" },
    { word: "长椅", pinyin: "cháng yǐ", english: "Bench", type: "设施" },
    { word: "凉亭", pinyin: "liáng tíng", english: "Pavilion", type: "设施" },
    { word: "花坛", pinyin: "huā tán", english: "Flower bed", type: "设施" },
    { word: "喷泉", pinyin: "pēn quán", english: "Fountain", type: "设施" },
    { word: "小路", pinyin: "xiǎo lù", english: "Path", type: "设施" },
    { word: "石子路", pinyin: "shí zi lù", english: "Stone path", type: "设施" },
    { word: "木桥", pinyin: "mù qiáo", english: "Wooden bridge", type: "设施" },
    { word: "路灯", pinyin: "lù dēng", english: "Street lamp", type: "设施" },
    { word: "垃圾桶", pinyin: "lā jī tǒng", english: "Trash can", type: "设施" },
    { word: "指示牌", pinyin: "zhǐ shì pái", english: "Sign", type: "标识" },

    // 儿童游乐设施
    { word: "秋千", pinyin: "qiū qiān", english: "Swing", type: "游乐设施" },
    { word: "滑梯", pinyin: "huá tī", english: "Slide", type: "游乐设施" },
    { word: "跷跷板", pinyin: "qiāo qiāo bǎn", english: "Seesaw", type: "游乐设施" },
    { word: "旋转木马", pinyin: "xuán zhuǎn mù mǎ", english: "Carousel", type: "游乐设施" },
    { word: "沙坑", pinyin: "shā kēng", english: "Sandpit", type: "游乐设施" },
    { word: "攀爬架", pinyin: "pān pá jià", english: "Climbing frame", type: "游乐设施" },

    // 植物
    { word: "大树", pinyin: "dà shù", english: "Big tree", type: "植物" },
    { word: "松树", pinyin: "sōng shù", english: "Pine tree", type: "植物" },
    { word: "柳树", pinyin: "liǔ shù", english: "Willow tree", type: "植物" },
    { word: "枫树", pinyin: "fēng shù", english: "Maple tree", type: "植物" },
    { word: "花朵", pinyin: "huā duǒ", english: "Flowers", type: "植物" },
    { word: "玫瑰", pinyin: "méi guī", english: "Rose", type: "植物" },
    { word: "向日葵", pinyin: "xiàng rì kuí", english: "Sunflower", type: "植物" },
    { word: "郁金香", pinyin: "yù jīn xiāng", english: "Tulip", type: "植物" },
    { word: "小草", pinyin: "xiǎo cǎo", english: "Grass", type: "植物" },
    { word: "树叶", pinyin: "shù yè", english: "Leaves", type: "植物" },
    { word: "灌木", pinyin: "guàn mù", english: "Bushes", type: "植物" },
    { word: "竹子", pinyin: "zhú zi", english: "Bamboo", type: "植物" },

    // 动物
    { word: "小鸟", pinyin: "xiǎo niǎo", english: "Little bird", type: "动物" },
    { word: "麻雀", pinyin: "má què", english: "Sparrow", type: "动物" },
    { word: "蝴蝶", pinyin: "hú dié", english: "Butterfly", type: "动物" },
    { word: "蜜蜂", pinyin: "mì fēng", english: "Bee", type: "动物" },
    { word: "蜻蜓", pinyin: "qīng tíng", english: "Dragonfly", type: "动物" },
    { word: "松鼠", pinyin: "sōng shǔ", english: "Squirrel", type: "动物" },
    { word: "猫咪", pinyin: "māo mī", english: "Cat", type: "动物" },
    { word: "小狗", pinyin: "xiǎo gǒu", english: "Dog", type: "动物" },

    // 自然环境
    { word: "蓝天", pinyin: "lán tiān", english: "Blue sky", type: "环境" },
    { word: "白云", pinyin: "bái yún", english: "White cloud", type: "环境" },
    { word: "太阳", pinyin: "tài yáng", english: "Sun", type: "环境" },
    { word: "月亮", pinyin: "yuè liang", english: "Moon", type: "环境" },
    { word: "星星", pinyin: "xīng xing", english: "Stars", type: "环境" },
    { word: "彩虹", pinyin: "cǎi hóng", english: "Rainbow", type: "环境" },
    { word: "池塘", pinyin: "chí táng", english: "Pond", type: "环境" },
    { word: "小河", pinyin: "xiǎo hé", english: "River", type: "环境" },
    { word: "石头", pinyin: "shí tou", english: "Stone", type: "环境" },
    { word: "山坡", pinyin: "shān pō", english: "Hillside", type: "环境" }
  ],

  "学校": [
    // 核心角色与设施
    { word: "老师", pinyin: "lǎo shī", english: "Teacher", type: "人物" },
    { word: "学生", pinyin: "xué shēng", english: "Student", type: "人物" },
    { word: "校长", pinyin: "xiào zhǎng", english: "Principal", type: "人物" },
    { word: "校工", pinyin: "xiào gōng", english: "Janitor", type: "人物" },
    { word: "黑板", pinyin: "hēi bǎn", english: "Blackboard", type: "设施" },
    { word: "白板", pinyin: "bái bǎn", english: "Whiteboard", type: "设施" },
    { word: "课桌", pinyin: "kè zhuō", english: "Desk", type: "设施" },
    { word: "椅子", pinyin: "yǐ zi", english: "Chair", type: "设施" },
    { word: "讲台", pinyin: "jiǎng tái", english: "Podium", type: "设施" },
    { word: "书柜", pinyin: "shū guì", english: "Bookcase", type: "设施" },
    { word: "储物柜", pinyin: "chǔ wù guì", english: "Locker", type: "设施" },
    { word: "窗户", pinyin: "chuāng hu", english: "Window", type: "设施" },
    { word: "门", pinyin: "mén", english: "Door", type: "设施" },
    { word: "风扇", pinyin: "fēng shàn", english: "Fan", type: "设备" },
    { word: "空调", pinyin: "kōng tiáo", english: "Air conditioner", type: "设备" },
    { word: "投影仪", pinyin: "tóu yǐng yí", english: "Projector", type: "设备" },
    { word: "电脑", pinyin: "diàn nǎo", english: "Computer", type: "设备" },

    // 学习用品
    { word: "书包", pinyin: "shū bāo", english: "Schoolbag", type: "物品" },
    { word: "铅笔", pinyin: "qiān bǐ", english: "Pencil", type: "文具" },
    { word: "钢笔", pinyin: "gāng bǐ", english: "Pen", type: "文具" },
    { word: "圆珠笔", pinyin: "yuán zhū bǐ", english: "Ballpoint pen", type: "文具" },
    { word: "橡皮", pinyin: "xiàng pí", english: "Eraser", type: "文具" },
    { word: "课本", pinyin: "kè běn", english: "Textbook", type: "文具" },
    { word: "作业本", pinyin: "zuò yè běn", english: "Notebook", type: "文具" },
    { word: "尺子", pinyin: "chǐ zi", english: "Ruler", type: "文具" },
    { word: "蜡笔", pinyin: "là bǐ", english: "Crayon", type: "文具" },
    { word: "水彩笔", pinyin: "shuǐ cǎi bǐ", english: "Marker", type: "文具" },
    { word: "字典", pinyin: "zì diǎn", english: "Dictionary", type: "文具" },
    { word: "文具盒", pinyin: "wén jù hé", english: "Pencil case", type: "文具" },
    { word: "书包带", pinyin: "shū bāo dài", english: "Backpack strap", type: "物品" },
    { word: "便利贴", pinyin: "biàn lì tiē", english: "Sticky notes", type: "文具" },
    { word: "胶水", pinyin: "jiāo shuǐ", english: "Glue", type: "文具" },
    { word: "剪刀", pinyin: "jiǎn dāo", english: "Scissors", type: "文具" },
    { word: "地球仪", pinyin: "dì qiú yí", english: "Globe", type: "教具" },
    { word: "地图", pinyin: "dì tú", english: "Map", type: "教具" },
    { word: "算盘", pinyin: "suàn pán", english: "Abacus", type: "教具" },

    // 校园环境
    { word: "操场", pinyin: "cāo chǎng", english: "Playground", type: "场所" },
    { word: "篮球场", pinyin: "lán qiú chǎng", english: "Basketball court", type: "场所" },
    { word: "足球场", pinyin: "zú qiú chǎng", english: "Football field", type: "场所" },
    { word: "跑道", pinyin: "pǎo dào", english: "Running track", type: "设施" },
    { word: "秋千", pinyin: "qiū qiān", english: "Swing", type: "游乐设施" },
    { word: "滑梯", pinyin: "huá tī", english: "Slide", type: "游乐设施" },
    { word: "图书馆", pinyin: "tú shū guǎn", english: "Library", type: "场所" },
    { word: "阅览室", pinyin: "yuè lǎn shì", english: "Reading room", type: "场所" },
    { word: "教室", pinyin: "jiào shì", english: "Classroom", type: "场所" },
    { word: "音乐教室", pinyin: "yīn yuè jiào shì", english: "Music room", type: "场所" },
    { word: "美术教室", pinyin: "měi shù jiào shì", english: "Art room", type: "场所" },
    { word: "实验室", pinyin: "shí yàn shì", english: "Laboratory", type: "场所" },
    { word: "食堂", pinyin: "shí táng", english: "Cafeteria", type: "场所" },
    { word: "医务室", pinyin: "yī wù shì", english: "Nurse's office", type: "场所" },
    { word: "校门", pinyin: "xiào mén", english: "School gate", type: "设施" },
    { word: "旗杆", pinyin: "qí gān", english: "Flagpole", type: "设施" },
    { word: "国旗下", pinyin: "guó qí xià", english: "Under the flag", type: "标识" },
    { word: "校牌", pinyin: "xiào pái", english: "School sign", type: "标识" },
    { word: "宣传栏", pinyin: "xuān chuán lán", english: "Bulletin board", type: "设施" },
    { word: "花坛", pinyin: "huā tán", english: "Flower bed", type: "环境" },
    { word: "校车", pinyin: "xiào chē", english: "School bus", type: "交通工具" }
  ],

  "动物园": [
    // 核心角色与设施
    { word: "饲养员", pinyin: "sì yǎng yuán", english: "Zookeeper", type: "人物" },
    { word: "游客", pinyin: "yóu kè", english: "Visitor", type: "人物" },
    { word: "小朋友", pinyin: "xiǎo péng yǒu", english: "Children", type: "人物" },
    { word: "笼子", pinyin: "lóng zi", english: "Cage", type: "设施" },
    { word: "围栏", pinyin: "wéi lán", english: "Fence", type: "设施" },
    { word: "玻璃墙", pinyin: "bō li qiáng", english: "Glass wall", type: "设施" },
    { word: "指示牌", pinyin: "zhǐ shì pái", english: "Sign board", type: "标识" },
    { word: "入口", pinyin: "rù kǒu", english: "Entrance", type: "标识" },
    { word: "出口", pinyin: "chū kǒu", english: "Exit", type: "标识" },
    { word: "售票处", pinyin: "shòu piào chù", english: "Ticket office", type: "设施" },
    { word: "地图", pinyin: "dì tú", english: "Map", type: "工具" },
    { word: "长椅", pinyin: "cháng yǐ", english: "Bench", type: "设施" },
    { word: "垃圾桶", pinyin: "lā jī tǒng", english: "Trash can", type: "设施" },
    { word: "小卖部", pinyin: "xiǎo mài bù", english: "Gift shop", type: "场所" },
    { word: "餐厅", pinyin: "cān tīng", english: "Restaurant", type: "场所" },
    { word: "卫生间", pinyin: "wèi shēng jiān", english: "Restroom", type: "设施" },

    // 哺乳动物
    { word: "大象", pinyin: "dà xiàng", english: "Elephant", type: "动物" },
    { word: "狮子", pinyin: "shī zi", english: "Lion", type: "动物" },
    { word: "老虎", pinyin: "lǎo hǔ", english: "Tiger", type: "动物" },
    { word: "猴子", pinyin: "hóu zi", english: "Monkey", type: "动物" },
    { word: "大猩猩", pinyin: "dà xīng xīng", english: "Gorilla", type: "动物" },
    { word: "熊猫", pinyin: "xióng māo", english: "Panda", type: "动物" },
    { word: "长颈鹿", pinyin: "cháng jǐng lù", english: "Giraffe", type: "动物" },
    { word: "斑马", pinyin: "bān mǎ", english: "Zebra", type: "动物" },
    { word: "河马", pinyin: "hé mǎ", english: "Hippopotamus", type: "动物" },
    { word: "犀牛", pinyin: "xī niú", english: "Rhinoceros", type: "动物" },
    { word: "袋鼠", pinyin: "dài shǔ", english: "Kangaroo", type: "动物" },
    { word: "熊", pinyin: "xióng", english: "Bear", type: "动物" },
    { word: "狼", pinyin: "láng", english: "Wolf", type: "动物" },
    { word: "狐狸", pinyin: "hú li", english: "Fox", type: "动物" },

    // 鸟类
    { word: "孔雀", pinyin: "kǒng què", english: "Peacock", type: "动物" },
    { word: "鹦鹉", pinyin: "yīng wǔ", english: "Parrot", type: "动物" },
    { word: "老鹰", pinyin: "lǎo yīng", english: "Eagle", type: "动物" },
    { word: "猫头鹰", pinyin: "māo tóu yīng", english: "Owl", type: "动物" },
    { word: "企鹅", pinyin: "qǐ é", english: "Penguin", type: "动物" },
    { word: "火烈鸟", pinyin: "huǒ liè niǎo", english: "Flamingo", type: "动物" },
    { word: "天鹅", pinyin: "tiān é", english: "Swan", type: "动物" },
    { word: "鸳鸯", pinyin: "yuān yāng", english: "Mandarin duck", type: "动物" },
    { word: "鸵鸟", pinyin: "tuó niǎo", english: "Ostrich", type: "动物" },

    // 爬行动物
    { word: "鳄鱼", pinyin: "è yú", english: "Crocodile", type: "动物" },
    { word: "蛇", pinyin: "shé", english: "Snake", type: "动物" },
    { word: "乌龟", pinyin: "wū guī", english: "Turtle", type: "动物" },
    { word: "蜥蜴", pinyin: "xī yì", english: "Lizard", type: "动物" },
    { word: "变色龙", pinyin: "biàn sè lóng", english: "Chameleon", type: "动物" },

    // 两栖动物
    { word: "青蛙", pinyin: "qīng wā", english: "Frog", type: "动物" },
    { word: "蛤蟆", pinyin: "há ma", english: "Toad", type: "动物" },

    // 海洋动物
    { word: "海豚", pinyin: "hǎi tún", english: "Dolphin", type: "动物" },
    { word: "海狮", pinyin: "hǎi shī", english: "Sea lion", type: "动物" },
    { word: "海豹", pinyin: "hǎi bào", english: "Seal", type: "动物" },
    { word: "企鹅", pinyin: "qǐ é", english: "Penguin", type: "动物" },
    { word: "北极熊", pinyin: "běi jí xióng", english: "Polar bear", type: "动物" },

    // 环境与装饰
    { word: "水池", pinyin: "shuǐ chí", english: "Pool", type: "环境" },
    { word: "假山", pinyin: "jiǎ shān", english: "Rockery", type: "环境" },
    { word: "树木", pinyin: "shù mù", english: "Trees", type: "植物" },
    { word: "草坪", pinyin: "cǎo píng", english: "Lawn", type: "环境" },
    { word: "花朵", pinyin: "huā duǒ", english: "Flowers", type: "植物" },
    { word: "灌木", pinyin: "guàn mù", english: "Bushes", type: "植物" },
    { word: "岩石", pinyin: "yán shí", english: "Rocks", type: "环境" },
    { word: "洞穴", pinyin: "dòng xué", english: "Cave", type: "环境" },
    { word: "栏杆", pinyin: "lán gān", english: "Railing", type: "设施" },
    { word: "喂食区", pinyin: "wèi shí qū", english: "Feeding area", type: "标识" },
    { word: "表演场", pinyin: "biǎo yǎn chǎng", english: "Performance arena", type: "场所" },
    { word: "观光车", pinyin: "guān guāng chē", english: "Sightseeing car", type: "交通工具" }
  ],

  "水果店": [
    // 核心角色与设施
    { word: "店主", pinyin: "diàn zhǔ", type: "人物" },
    { word: "柜台", pinyin: "guì tái", type: "设施" },
    { word: "货架", pinyin: "huò jià", type: "设施" },
    { word: "电子秤", pinyin: "diàn zǐ chèng", type: "工具" },
    { word: "价目表", pinyin: "jià mù biǎo", type: "标识" },

    // 水果
    { word: "苹果", pinyin: "píng guǒ", type: "水果" },
    { word: "香蕉", pinyin: "xiāng jiāo", type: "水果" },
    { word: "橙子", pinyin: "chéng zi", type: "水果" },
    { word: "葡萄", pinyin: "pú táo", type: "水果" },
    { word: "西瓜", pinyin: "xī guā", type: "水果" },
    { word: "草莓", pinyin: "cǎo méi", type: "水果" },
    { word: "桃子", pinyin: "táo zi", type: "水果" },
    { word: "梨子", pinyin: "lí zi", type: "水果" },
    { word: "樱桃", pinyin: "yīng táo", type: "水果" },
    { word: "芒果", pinyin: "máng guǒ", type: "水果" },
    { word: "菠萝", pinyin: "bō luó", type: "水果" },
    { word: "柠檬", pinyin: "níng méng", type: "水果" },

    // 环境与装饰
    { word: "水果篮", pinyin: "shuǐ guǒ lán", type: "工具" },
    { word: "塑料袋", pinyin: "sù liào dài", type: "包装" },
    { word: "招牌", pinyin: "zhāo pái", type: "标识" },
    { word: "灯箱", pinyin: "dēng xiāng", type: "装饰" }
  ],

  "水果店": [
    // 核心角色与设施
    { word: "店主", pinyin: "diàn zhǔ", english: "Shop owner", type: "人物" },
    { word: "店员", pinyin: "diàn yuán", english: "Shop assistant", type: "人物" },
    { word: "顾客", pinyin: "gù kè", english: "Customer", type: "人物" },
    { word: "柜台", pinyin: "guì tái", english: "Counter", type: "设施" },
    { word: "货架", pinyin: "huò jià", english: "Shelf", type: "设施" },
    { word: "水果架", pinyin: "shuǐ guǒ jià", english: "Fruit stand", type: "设施" },
    { word: "电子秤", pinyin: "diàn zǐ chèng", english: "Electronic scale", type: "工具" },
    { word: "收银机", pinyin: "shōu yín jī", english: "Cash register", type: "设备" },
    { word: "价目表", pinyin: "jià mù biǎo", english: "Price list", type: "标识" },
    { word: "招牌", pinyin: "zhāo pái", english: "Shop sign", type: "标识" },

    // 热带水果
    { word: "芒果", pinyin: "máng guǒ", english: "Mango", type: "水果" },
    { word: "菠萝", pinyin: "bō luó", english: "Pineapple", type: "水果" },
    { word: "椰子", pinyin: "yē zi", english: "Coconut", type: "水果" },
    { word: "榴莲", pinyin: "liú lián", english: "Durian", type: "水果" },
    { word: "山竹", pinyin: "shān zhú", english: "Mangosteen", type: "水果" },
    { word: "火龙果", pinyin: "huǒ lóng guǒ", english: "Dragon fruit", type: "水果" },

    // 温带水果
    { word: "苹果", pinyin: "píng guǒ", english: "Apple", type: "水果" },
    { word: "梨", pinyin: "lí", english: "Pear", type: "水果" },
    { word: "桃子", pinyin: "táo zi", english: "Peach", type: "水果" },
    { word: "李子", pinyin: "lǐ zi", english: "Plum", type: "水果" },
    { word: "杏子", pinyin: "xìng zi", english: "Apricot", type: "水果" },
    { word: "枣子", pinyin: "zǎo zi", english: "Jujube", type: "水果" },

    // 柑橘类
    { word: "橙子", pinyin: "chéng zi", english: "Orange", type: "水果" },
    { word: "橘子", pinyin: "jú zi", english: "Mandarin", type: "水果" },
    { word: "柠檬", pinyin: "níng méng", english: "Lemon", type: "水果" },
    { word: "柚子", pinyin: "yòu zi", english: "Pomelo", type: "水果" },
    { word: "西柚", pinyin: "xī yòu", english: "Grapefruit", type: "水果" },

    // 浆果类
    { word: "草莓", pinyin: "cǎo méi", english: "Strawberry", type: "水果" },
    { word: "蓝莓", pinyin: "lán méi", english: "Blueberry", type: "水果" },
    { word: "葡萄", pinyin: "pú táo", english: "Grapes", type: "水果" },
    { word: "樱桃", pinyin: "yīng táo", english: "Cherry", type: "水果" },
    { word: "桑葚", pinyin: "sāng shèn", english: "Mulberry", type: "水果" },
    { word: "覆盆子", pinyin: "fù pén zi", english: "Raspberry", type: "水果" },

    // 瓜类
    { word: "西瓜", pinyin: "xī guā", english: "Watermelon", type: "水果" },
    { word: "哈密瓜", pinyin: "hā mì guā", english: "Hami melon", type: "水果" },
    { word: "香瓜", pinyin: "xiāng guā", english: "Muskmelon", type: "水果" },
    { word: "木瓜", pinyin: "mù guā", english: "Papaya", type: "水果" },

    // 其他水果
    { word: "香蕉", pinyin: "xiāng jiāo", english: "Banana", type: "水果" },
    { word: "猕猴桃", pinyin: "mí hóu táo", english: "Kiwi", type: "水果" },
    { word: "石榴", pinyin: "shí liu", english: "Pomegranate", type: "水果" },
    { word: "柿子", pinyin: "shì zi", english: "Persimmon", type: "水果" },

    // 工具与包装
    { word: "水果篮", pinyin: "shuǐ guǒ lán", english: "Fruit basket", type: "工具" },
    { word: "塑料袋", pinyin: "sù liào dài", english: "Plastic bag", type: "包装" },
    { word: "纸袋", pinyin: "zhǐ dài", english: "Paper bag", type: "包装" },
    { word: "保鲜膜", pinyin: "bǎo xiān mó", english: "Plastic wrap", type: "包装" },
    { word: "水果刀", pinyin: "shuǐ guǒ dāo", english: "Fruit knife", type: "工具" },
    { word: "砧板", pinyin: "zhēn bǎn", english: "Cutting board", type: "工具" },
    { word: "榨汁机", pinyin: "zhà zhī jī", english: "Juicer", type: "设备" }
  ],

  "图书馆": [
    // 核心角色与设施
    { word: "图书管理员", pinyin: "tú shū guǎn lǐ yuán", english: "Librarian", type: "人物" },
    { word: "读者", pinyin: "dú zhě", english: "Reader", type: "人物" },
    { word: "学生", pinyin: "xué shēng", english: "Student", type: "人物" },
    { word: "研究员", pinyin: "yán jiū yuán", english: "Researcher", type: "人物" },
    { word: "书架", pinyin: "shū jià", english: "Bookshelf", type: "设施" },
    { word: "借书台", pinyin: "jiè shū tái", english: "Checkout counter", type: "设施" },
    { word: "还书处", pinyin: "huán shū chù", english: "Book return", type: "设施" },
    { word: "阅览桌", pinyin: "yuè lǎn zhuō", english: "Reading table", type: "设施" },
    { word: "椅子", pinyin: "yǐ zi", english: "Chair", type: "设施" },
    { word: "沙发", pinyin: "shā fā", english: "Sofa", type: "设施" },
    { word: "电脑", pinyin: "diàn nǎo", english: "Computer", type: "设备" },
    { word: "打印机", pinyin: "dǎ yìn jī", english: "Printer", type: "设备" },
    { word: "复印机", pinyin: "fù yìn jī", english: "Photocopier", type: "设备" },
    { word: "扫描仪", pinyin: "sǎo miáo yí", english: "Scanner", type: "设备" },
    { word: "台灯", pinyin: "tái dēng", english: "Desk lamp", type: "设施" },

    // 图书类型
    { word: "图书", pinyin: "tú shū", english: "Books", type: "物品" },
    { word: "故事书", pinyin: "gù shi shū", english: "Storybook", type: "图书" },
    { word: "童话书", pinyin: "tóng huà shū", english: "Fairy tale", type: "图书" },
    { word: "漫画书", pinyin: "màn huà shū", english: "Comic book", type: "图书" },
    { word: "百科全书", pinyin: "bǎi kē quán shū", english: "Encyclopedia", type: "图书" },
    { word: "字典", pinyin: "zì diǎn", english: "Dictionary", type: "图书" },
    { word: "词典", pinyin: "cí diǎn", english: "Thesaurus", type: "图书" },
    { word: "杂志", pinyin: "zá zhì", english: "Magazine", type: "图书" },
    { word: "报纸", pinyin: "bào zhǐ", english: "Newspaper", type: "图书" },
    { word: "期刊", pinyin: "qī kān", english: "Journal", type: "图书" },
    { word: "地图册", pinyin: "dì tú cè", english: "Atlas", type: "图书" },
    { word: "相册", pinyin: "xiàng cè", english: "Photo album", type: "图书" },
    { word: "绘本", pinyin: "huì běn", english: "Picture book", type: "图书" },
    { word: "科普书", pinyin: "kē pǔ shū", english: "Science book", type: "图书" },

    // 文具用品
    { word: "借书卡", pinyin: "jiè shū kǎ", english: "Library card", type: "证件" },
    { word: "书签", pinyin: "shū qiān", english: "Bookmark", type: "文具" },
    { word: "笔记本", pinyin: "bǐ jì běn", english: "Notebook", type: "文具" },
    { word: "铅笔", pinyin: "qiān bǐ", english: "Pencil", type: "文具" },
    { word: "钢笔", pinyin: "gāng bǐ", english: "Pen", type: "文具" },
    { word: "放大镜", pinyin: "fàng dà jìng", english: "Magnifying glass", type: "工具" },
    { word: "订书机", pinyin: "dìng shū jī", english: "Stapler", type: "文具" },

    // 环境与标识
    { word: "安静标志", pinyin: "ān jìng biāo zhì", english: "Quiet sign", type: "标识" },
    { word: "目录柜", pinyin: "mù lù guì", english: "Card catalog", type: "设施" },
    { word: "电子检索", pinyin: "diàn zǐ jiǎn suǒ", english: "Digital search", type: "设备" },
    { word: "时钟", pinyin: "shí zhōng", english: "Clock", type: "设施" },
    { word: "日历", pinyin: "rì lì", english: "Calendar", type: "设施" },
    { word: "通知栏", pinyin: "tōng zhī lán", english: "Notice board", type: "设施" },
    { word: "消防出口", pinyin: "xiāo fáng chū kǒu", english: "Fire exit", type: "安全设施" },
    { word: "灭火器", pinyin: "miè huǒ qì", english: "Fire extinguisher", type: "安全设施" },
    { word: "紧急电话", pinyin: "jǐn jí diàn huà", english: "Emergency phone", type: "安全设施" }
  ],

  "交通": [
    // 交通工具
    { word: "汽车", pinyin: "qì chē", english: "Car", type: "交通工具" },
    { word: "公交车", pinyin: "gōng jiāo chē", english: "Bus", type: "交通工具" },
    { word: "出租车", pinyin: "chū zū chē", english: "Taxi", type: "交通工具" },
    { word: "地铁", pinyin: "dì tiě", english: "Subway", type: "交通工具" },
    { word: "火车", pinyin: "huǒ chē", english: "Train", type: "交通工具" },
    { word: "高铁", pinyin: "gāo tiě", english: "High-speed rail", type: "交通工具" },
    { word: "飞机", pinyin: "fēi jī", english: "Airplane", type: "交通工具" },
    { word: "自行车", pinyin: "zì xíng chē", english: "Bicycle", type: "交通工具" },
    { word: "摩托车", pinyin: "mó tuō chē", english: "Motorcycle", type: "交通工具" },
    { word: "船", pinyin: "chuán", english: "Boat", type: "交通工具" },
    { word: "轮船", pinyin: "lún chuán", english: "Ship", type: "交通工具" },
    { word: "直升机", pinyin: "zhí shēng jī", english: "Helicopter", type: "交通工具" },

    // 交通设施
    { word: "红绿灯", pinyin: "hóng lǜ dēng", english: "Traffic light", type: "交通设施" },
    { word: "斑马线", pinyin: "bān mǎ xiàn", english: "Crosswalk", type: "交通设施" },
    { word: "人行道", pinyin: "rén xíng dào", english: "Sidewalk", type: "交通设施" },
    { word: "马路", pinyin: "mǎ lù", english: "Road", type: "交通设施" },
    { word: "高速公路", pinyin: "gāo sù gōng lù", english: "Highway", type: "交通设施" },
    { word: "天桥", pinyin: "tiān qiáo", english: "Overpass", type: "交通设施" },
    { word: "隧道", pinyin: "suì dào", english: "Tunnel", type: "交通设施" },
    { word: "路标", pinyin: "lù biāo", english: "Road sign", type: "标识" },
    { word: "指示牌", pinyin: "zhǐ shì pái", english: "Direction sign", type: "标识" },
    { word: "停车场", pinyin: "tíng chē chǎng", english: "Parking lot", type: "设施" },
    { word: "加油站", pinyin: "jiā yóu zhàn", english: "Gas station", type: "设施" },
    { word: "公交站", pinyin: "gōng jiāo zhàn", english: "Bus stop", type: "设施" },
    { word: "火车站", pinyin: "huǒ chē zhàn", english: "Train station", type: "设施" },
    { word: "机场", pinyin: "jī chǎng", english: "Airport", type: "设施" },
    { word: "码头", pinyin: "mǎ tóu", english: "Dock", type: "设施" }
  ],

  "家庭": [
    // 家庭成员
    { word: "爸爸", pinyin: "bà ba", english: "Father/Dad", type: "人物" },
    { word: "妈妈", pinyin: "mā ma", english: "Mother/Mom", type: "人物" },
    { word: "爷爷", pinyin: "yé ye", english: "Grandfather", type: "人物" },
    { word: "奶奶", pinyin: "nǎi nai", english: "Grandmother", type: "人物" },
    { word: "哥哥", pinyin: "gē ge", english: "Older brother", type: "人物" },
    { word: "姐姐", pinyin: "jiě jie", english: "Older sister", type: "人物" },
    { word: "弟弟", pinyin: "dì di", english: "Younger brother", type: "人物" },
    { word: "妹妹", pinyin: "mèi mei", english: "Younger sister", type: "人物" },
    { word: "婴儿", pinyin: "yīng ér", english: "Baby", type: "人物" },

    // 客厅
    { word: "沙发", pinyin: "shā fā", english: "Sofa", type: "家具" },
    { word: "茶几", pinyin: "chá jī", english: "Coffee table", type: "家具" },
    { word: "电视", pinyin: "diàn shì", english: "Television", type: "家电" },
    { word: "电视柜", pinyin: "diàn shì guì", english: "TV stand", type: "家具" },
    { word: "空调", pinyin: "kōng tiáo", english: "Air conditioner", type: "家电" },
    { word: "窗帘", pinyin: "chuāng lián", english: "Curtains", type: "装饰" },
    { word: "地毯", pinyin: "dì tǎn", english: "Carpet", type: "装饰" },
    { word: "花瓶", pinyin: "huā píng", english: "Vase", type: "装饰" },
    { word: "相框", pinyin: "xiàng kuàng", english: "Photo frame", type: "装饰" },
    { word: "钟表", pinyin: "zhōng biǎo", english: "Clock", type: "物品" },

    // 餐厅
    { word: "餐桌", pinyin: "cān zhuō", english: "Dining table", type: "家具" },
    { word: "餐椅", pinyin: "cān yǐ", english: "Dining chair", type: "家具" },
    { word: "冰箱", pinyin: "bīng xiāng", english: "Refrigerator", type: "家电" },
    { word: "微波炉", pinyin: "wēi bō lú", english: "Microwave", type: "家电" },
    { word: "餐具", pinyin: "cān jù", english: "Tableware", type: "用品" },
    { word: "碗", pinyin: "wǎn", english: "Bowl", type: "餐具" },
    { word: "盘子", pinyin: "pán zi", english: "Plate", type: "餐具" },
    { word: "杯子", pinyin: "bēi zi", english: "Cup", type: "餐具" },
    { word: "筷子", pinyin: "kuài zi", english: "Chopsticks", type: "餐具" },
    { word: "勺子", pinyin: "sháo zi", english: "Spoon", type: "餐具" },

    // 卧室
    { word: "床", pinyin: "chuáng", english: "Bed", type: "家具" },
    { word: "枕头", pinyin: "zhěn tou", english: "Pillow", type: "用品" },
    { word: "被子", pinyin: "bèi zi", english: "Quilt", type: "用品" },
    { word: "床垫", pinyin: "chuáng diàn", english: "Mattress", type: "家具" },
    { word: "衣柜", pinyin: "yī guì", english: "Wardrobe", type: "家具" },
    { word: "床头柜", pinyin: "chuáng tóu guì", english: "Nightstand", type: "家具" },
    { word: "台灯", pinyin: "tái dēng", english: "Desk lamp", type: "照明" },
    { word: "闹钟", pinyin: "nào zhōng", english: "Alarm clock", type: "用品" },
    { word: "镜子", pinyin: "jìng zi", english: "Mirror", type: "用品" },

    // 书房
    { word: "书桌", pinyin: "shū zhuō", english: "Desk", type: "家具" },
    { word: "书架", pinyin: "shū jià", english: "Bookshelf", type: "家具" },
    { word: "电脑", pinyin: "diàn nǎo", english: "Computer", type: "设备" },
    { word: "键盘", pinyin: "jiàn pán", english: "Keyboard", type: "设备" },
    { word: "鼠标", pinyin: "shǔ biāo", english: "Mouse", type: "设备" },
    { word: "椅子", pinyin: "yǐ zi", english: "Chair", type: "家具" },

    // 厨房
    { word: "灶台", pinyin: "zào tái", english: "Stove", type: "设备" },
    { word: "抽油烟机", pinyin: "chōu yóu yān jī", english: "Range hood", type: "家电" },
    { word: "水槽", pinyin: "shuǐ cáo", english: "Sink", type: "设施" },
    { word: "橱柜", pinyin: "chú guì", english: "Cabinet", type: "家具" },
    { word: "锅", pinyin: "guō", english: "Pot", type: "厨具" },
    { word: "铲子", pinyin: "chǎn zi", english: "Spatula", type: "厨具" },
    { word: "勺子", pinyin: "sháo zi", english: "Ladle", type: "厨具" },
    { word: "菜刀", pinyin: "cài dāo", english: "Kitchen knife", type: "厨具" },
    { word: "砧板", pinyin: "zhēn bǎn", english: "Cutting board", type: "厨具" },
    { word: "电饭煲", pinyin: "diàn fàn bāo", english: "Rice cooker", type: "家电" },
    { word: "烤箱", pinyin: "kǎo xiāng", english: "Oven", type: "家电" },
    { word: "洗衣机", pinyin: "xǐ yī jī", english: "Washing machine", type: "家电" },

    // 卫生间
    { word: "马桶", pinyin: "mǎ tǒng", english: "Toilet", type: "设施" },
    { word: "洗手池", pinyin: "xǐ shǒu chí", english: "Sink", type: "设施" },
    { word: "淋浴", pinyin: "lín yù", english: "Shower", type: "设施" },
    { word: "浴缸", pinyin: "yù gāng", english: "Bathtub", type: "设施" },
    { word: "毛巾", pinyin: "máo jīn", english: "Towel", type: "用品" },
    { word: "牙刷", pinyin: "yá shuā", english: "Toothbrush", type: "用品" },
    { word: "牙膏", pinyin: "yá gāo", english: "Toothpaste", type: "用品" },
    { word: "洗发水", pinyin: "xǐ fà shuǐ", english: "Shampoo", type: "用品" },
    { word: "沐浴露", pinyin: "mù yù lù", english: "Body wash", type: "用品" },
    { word: "镜子", pinyin: "jìng zi", english: "Mirror", type: "用品" },

    // 其他
    { word: "门", pinyin: "mén", english: "Door", type: "设施" },
    { word: "窗户", pinyin: "chuāng hu", english: "Window", type: "设施" },
    { word: "地板", pinyin: "dì bǎn", english: "Floor", type: "环境" },
    { word: "天花板", pinyin: "tiān huā bǎn", english: "Ceiling", type: "环境" },
    { word: "墙壁", pinyin: "qiáng bì", english: "Wall", type: "环境" },
    { word: "楼梯", pinyin: "lóu tī", english: "Stairs", type: "设施" },
    { word: "电梯", pinyin: "diàn tī", english: "Elevator", type: "设施" },
    { word: "阳台", pinyin: "yáng tái", english: "Balcony", type: "环境" },
    { word: "盆栽", pinyin: "pén zāi", english: "Potted plant", type: "植物" },
    { word: "宠物", pinyin: "chǒng wù", english: "Pet", type: "动物" }
  ]
};

// 获取指定主题的词汇
function getVocabularyByTheme(theme) {
  return VOCABULARY[theme] || [];
}

// 获取所有主题列表
function getAllThemes() {
  return Object.keys(VOCABULARY);
}

// 按类型分组词汇
function groupVocabularyByType(vocabulary) {
  const groups = {
    "人物": [],
    "设施": [],
    "物品": [],
    "工具": [],
    "食物": [],
    "水果": [],
    "植物": [],
    "动物": [],
    "文具": [],
    "环境": [],
    "蔬菜": [],
    "肉类": [],
    "乳制品": [],
    "烘焙": [],
    "零食": [],
    "饮料": [],
    "日用品": [],
    "药品": [],
    "医疗设备": [],
    "医疗耗材": [],
    "消毒用品": [],
    "游乐设施": [],
    "标识": [],
    "包装": [],
    "图书": [],
    "证件": [],
    "设备": [],
    "场所": [],
    "安全设施": [],
    "其他": []
  };

  vocabulary.forEach(item => {
    const type = item.type || "其他";
    if (groups[type]) {
      groups[type].push(item);
    } else {
      groups["其他"].push(item);
    }
  });

  return groups;
}

// 格式化词汇为提示词字符串（带英语翻译）
function formatVocabularyForPrompt(vocabulary) {
  const groups = groupVocabularyByType(vocabulary);
  let result = [];

  // 核心角色与设施
  if (groups["人物"].length > 0 || groups["设施"].length > 0) {
    let coreItems = [];
    coreItems = coreItems.concat(groups["人物"].slice(0, 3));
    coreItems = coreItems.concat(groups["设施"].slice(0, 3));
    result.push(coreItems.map(item => `${item.pinyin} ${item.word} (${item.english})`).join(", "));
  }

  // 常见物品/工具
  const items = [
    ...groups["物品"],
    ...groups["工具"],
    ...groups["食物"],
    ...groups["水果"],
    ...groups["文具"],
    ...groups["蔬菜"],
    ...groups["肉类"],
    ...groups["乳制品"],
    ...groups["烘焙"],
    ...groups["零食"],
    ...groups["饮料"],
    ...groups["日用品"],
    ...groups["药品"],
    ...groups["医疗设备"],
    ...groups["医疗耗材"],
    ...groups["消毒用品"],
    ...groups["游乐设施"],
    ...groups["标识"],
    ...groups["包装"]
  ];
  if (items.length > 0) {
    result.push(items.slice(0, 10).map(item => `${item.pinyin} ${item.word} (${item.english})`).join(", "));
  }

  // 环境与装饰
  const env = [
    ...groups["植物"],
    ...groups["动物"],
    ...groups["环境"],
    ...groups["安全设施"],
    ...groups["其他"]
  ];
  if (env.length > 0) {
    result.push(env.slice(0, 8).map(item => `${item.pinyin} ${item.word} (${item.english})`).join(", "));
  }

  return result;
}

// 格式化词汇为三语标注（用于识字标签）
function formatVocabularyForLabels(vocabulary) {
  return vocabulary.map(item => ({
    chinese: item.word,
    pinyin: item.pinyin,
    english: item.english,
    type: item.type
  }));
}

// 导出函数供其他模块使用
window.VocabularyManager = {
  getVocabularyByTheme,
  getAllThemes,
  groupVocabularyByType,
  formatVocabularyForPrompt,
  formatVocabularyForLabels,
  VOCABULARY
};