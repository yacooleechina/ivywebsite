/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║  Li Weiyi · 李惟祎 — Site Content Configuration             ║
 * ║                                                              ║
 * ║  新增作品：在 works 数组末尾添加一个新对象，参考已有格式。      ║
 * ║  新增图片：将图片放入 images/works/ 目录，在此填写文件名。      ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

const SITE_DATA = {

  // ── 艺术家基本信息 ──────────────────────────────────────────────
  artist: {
    name:       "Li Weiyi",
    nameZh:     "李惟祎",
    born:       "2008",
    location:   "Beijing",
    locationZh: "北京",

    // 首页右侧艺术家照片（将照片文件放入 images/ 目录，改此路径）
    artistPhoto: "images/artist.jpg",

    // 首页一句话
    tagline:   "My work explores how being watched and pressured by the outside world is absorbed into the body and transformed into psychological experience.",
    taglineZh: "我的创作探索外部世界的凝视与压力，是如何被身体所吸收、并转化为心理经验的。",

    // About 页的完整介绍
    bio: "I work across charcoal drawing, painting, relief, and installation. Through reconstruction, concealment, and material translation, I make familiar forms unstable—creating work that moves beyond observation toward an internal experience of pressure, confinement, and release.\n\nThough my practice begins with the self, it extends outward: to family, the city, and the forces that quietly shape a life. I don't aim to give answers, but to make visible what persists and is often overlooked.",
    bioZh: "我的创作跨越炭笔素描、绘画、浮雕与装置。通过重构、覆盖与材料转译，我让熟悉的形象变得不再稳定——使作品超越可见的表面，更接近一种被压制、被困住、又试图释放的内部经验。\n\n我的实践从自我出发，但不止于自我：它延伸至家庭、城市，以及那些悄然塑造一种生命的外部力量。我不试图给出答案，而是让那些持续存在却常被忽视的感受，获得一种可见的形状。",

    education: [
      { year: "2024-2027", en: "Beijing Huiwen Middle School", zh: "北京汇文中学" },
    ],

    contact: "1547149223@qq.com",  // 替换为真实邮箱
  },

  // ── 作品列表 ────────────────────────────────────────────────────
  // 顺序即网站上的展示顺序。
  // featured: true 的作品会显示在首屏作品区。
  works: [

    {
      id:         "who-is-watching-me",
      title:      "Who Is Watching Me?",
      titleZh:    "谁在看我？",
      year:       2025,
      category:   "Painting",           // 待填写，如 Installation / Painting 等
      categoryZh: "绘画",           // 待填写
      series:     "Who Is Watching Me?",
      medium:     "Charcoal on paper",           // 待填写
      mediumZh:   "炭笔画",           // 待填写

      // ⚠️ 将图片放入 images/works/ 目录后修改路径
      heroImage:  "images/works/watching-01.jpg",
      images: [
        "images/works/watching-01.jpg",
        "images/works/watching-02.jpg",
      ],

      statement:   "A corner of the art studio—I was drawing a self-portrait in front of the mirror, with my tutor standing against the wall.",
      statementZh: "画室一角，我在镜子前画自画像，导师站在墙边",          // 待填写

      size:"1.5m * 2m",
      sizeZh:"1.5米 * 2米",

      featured: true,
    },

    {
      id:         "who-is-watching-me-reconstructed",
      title:      "Who Is Watching Me? · Reconstructed",
      titleZh:    "谁在看我？· 重构",
      year:       2025,
      category:   "Painting",           // 待填写，如 Installation / Painting 等
      categoryZh: "绘画",           // 待填写
      series:     "Who Is Watching Me?",
      medium:     "Charcoal and gesso on paper",
      mediumZh:   "木炭、石膏底料，纸本",           // 待填写

      size:"2.5m * 3m",
      sizeZh:"2.5米 * 3米",

      // ⚠️ 将图片放入 images/works/ 目录后修改路径
      heroImage:  "images/works/watching-r-01.jpg",
      images: [
        "images/works/watching-r-03.jpg",
        "images/works/watching-r-04.jpg",
        "images/works/watching-r-01.jpg",      
      ],

      statement:   “Starting from a classroom drawing—myself working while the teacher stands nearby—I repaint, cover, and distort the image until it shows not what I saw but what I felt: pressure, surveillance, and the need to perform under someone’s gaze.”,
      statementZh: “从一张课堂写生出发，通过重绘、覆盖与重组，作品变成了一个心理空间——它记录的不是我看见了什么，而是我感受到的：被监视的压力，以及在他人目光下需要”表演”的焦虑。”,

      featured: true,
    },

    {
      id:         "memory",
      title:      "Memory",
      titleZh:    "记忆",
      year:       2025,
      category:   "Relief Sculpture",
      categoryZh: "浮雕",
      series:     "RISD Pre-College",
      medium:     "Superlight clay, aluminum foil, white latex, acrylic and gesso on canvas",
      mediumZh:   "超轻粘土，铝箔，白色乳胶胶粘剂，丙烯漆和石膏帆布",

      heroImage:      "images/works/relief-01.jpg",
      homeBgSize:     "85%",
      detailHeroSize: "85%",
      images: [
        "images/works/relief-02.jpg",
        "images/works/relief-03.jpg", 
        "images/works/relief-04.jpg",
      ],

      statementZh:   "目光无处不在——即使独处也跟随着你，注视、衡量、评判——不仅来自身边的人，也来自社交媒体、广告，乃至内心不断自我审视的声音。",
      statement: "Eyes are everywhere—following you even in solitude, watching, measuring, judging—not only from the people around you, but also from social media, advertising, and the critical voice within your own mind.",


      featured: true,
    },

    {
      id:         "trapped-in-the-smile",
      title:      "Trapped in the Smile",
      titleZh:    "困于微笑",
      year:       2025,
      category:   "Sculpture Installation",
      categoryZh: "雕塑装置",
      series:     "AW2",
      medium:     "Clay, mixed media, red velvet",
      mediumZh:   "粘土，混合媒介，红色天鹅绒",

      heroImage:  "images/works/trapped-02.jpg",
      images: [
        "images/works/trapped-01.jpg",
        "images/works/trapped-03.jpg",
        "images/works/trapped-04.jpg",
      ],

      statement:   "Growing up with crooked teeth that I learned to hide, I made this sculpture as an act of reclamation—reimagining each tooth as a playful spirit with its own character, inspired by the friends who taught me that flaws can carry warmth.",
      statementZh: "因歪斜的牙齿，我从小学会了掩藏笑容；这件作品是一次重新夺回——将每一颗牙齿想象为有个性的精灵，它们的形态来自那些接纳我的朋友，提醒我缺陷也可以蕴含温暖。",

      featured: true,
    },

    {
      id:         "one-girl-one-dog-one-home",
      title:      "One Girl · One Dog · One Home",
      titleZh:    "一个女孩 · 一只狗 · 一个家",
      year:       2024,
      category:   "Painting Installation",
      categoryZh: "绘画装置",
      series:     "AW1",
      medium:     "Acrylic on canvas, multiple panels",
      mediumZh:   "布面丙烯，多联",

      heroImage:  "images/works/home-01.jpg",
      images: [
        "images/works/home-02.jpg",
        "images/works/home-03.jpg",
        "images/works/home-04.jpg",
      ],

      statement:   "Through painting and installation, I trace the quiet parallel between a girl and her dog at home—both waiting, both reflecting what it means to be present in a space marked by absence.",
      statementZh: "通过绘画与装置，我描绘一个女孩与她的狗在家中的情感对应——两者都在等待，都映照出那种既亲密、又带着缺席感的家的状态。",

      featured: true,
    },

    {
      id:         "observational-drawing",
      title:      "Observational Drawing",
      titleZh:    "观察绘画",
      year:       2024,
      category:   "Large-Scale Drawing",
      categoryZh: "大尺幅素描、丙烯",
      series:     "SFK",
      medium:     "Charcoal and acrylic on paper",
      mediumZh:   "纸本炭笔、丙烯",

      heroImage:      "images/works/drawing-01.jpg",
      homeBgSize:     "80%",
      detailHeroSize: "80%",
      images: [
        "images/works/drawing-02.jpg",
        "images/works/drawing-03.jpg",
        "images/works/drawing-portrait.jpg",
        "images/works/drawing-food.jpg",
      ],

      statement:   "A series of large-scale observational drawings—portraits, objects, and still lifes—made from life through close, sustained looking.",
      statementZh: "一批大尺幅观察绘画，题材涵盖肖像、物件与静物，均从实物出发，在长期的近距离写生中积累而成。",

      featured: true,
    },

    {
      id:         "sagittarius",
      title:      "Sagittarius",
      titleZh:    "射手座",
      year:       2024,
      category:   "Digital Illustration",
      categoryZh: "数字插画",
      series:     "",
      medium:     "Digital illustration",
      mediumZh:   "数字插画",

      heroImage:  "images/works/深海守望者.jpg",
      images:     ["images/works/深海守望者.jpg"],

      statement:   "Li Weiyi, Self-Portrait, Sagittarius.",
      statementZh: "李惟祎自画像，射手座",

      featured: false,
      archived: true,
      collection: "Before This Portfolio",
      collectionZh: "早期作品",
      era: "2024",
    },

    // ── 24年夏 · 李靖画室 ─────────────────────────────────────────

    // ── RISD Pre-College 2024 ────────────────────────────────────────

    {
      id:         "risd24-sphere-series",
      title:      "Hand & Sphere",
      titleZh:    "手与球体",
      year:       2024,
      category:   "Digital Painting",
      categoryZh: "数字绘画",
      series:     "RISD Pre-College",
      medium:     "Digital (Procreate)",
      mediumZh:   "数字绘画（Procreate）",
      heroImage:  "images/works/risd24-sphere-01.jpg",
      images: [
        "images/works/risd24-sphere-01.jpg",
        "images/works/risd24-sphere-02.jpg",
        "images/works/risd24-sphere-03.jpg",
        "images/works/risd24-sphere-04.jpg",
        "images/works/risd24-sphere-05.jpg",
        "images/works/risd24-sphere-06.jpg",
        "images/works/risd24-sphere-07.jpg",
        "images/works/risd24-sphere-08.jpg",
      ],
      statement:   "The same gesture—a hand gripping a sphere—rendered across different materials and surface textures, each variation shifting the mood and meaning of the grip.",
      statementZh: "同一个动作——手握球体——以不同材质与表面反复呈现，每一次变化都在改变抓握的情绪与意义。",
      featured: false,
      archived: true,
      collection:       "RISD Summer Program · 2024",
      collectionZh:     "RISD夏校 2024",
      collectionDesc:   "An early stage of experimentation with digital painting, ink, and symbolic imagery.",
      collectionDescZh: "对数字绘画、水墨与象征性图像的早期实验阶段。",
      era: "2024",
    },

    {
      id:         "risd24-ink-studies",
      title:      "Ink Studies",
      titleZh:    "水墨实验",
      year:       2024,
      category:   "Ink & Watercolor",
      categoryZh: "水墨 · 水彩",
      series:     "RISD Pre-College",
      medium:     "Ink and watercolor on paper",
      mediumZh:   "纸本水墨、水彩",
      heroImage:  "images/works/risd24-ink-01.jpg",
      images: [
        "images/works/risd24-ink-01.jpg",
        "images/works/risd24-ink-02.jpg",
        "images/works/risd24-ink-03.jpg",
      ],
      statement:   "Experimental ink and watercolor studies using symmetry, layering, and gesture to explore abstract form.",
      statementZh: "利用对称、叠加与笔势探索抽象形式的水墨与水彩实验。",
      featured: false,
      archived: true,
      collection:   "RISD Summer Program · 2024",
      collectionZh: "RISD夏校 2024",
      era: "2024",
    },

    {
      id:         "risd24-digital-portrait",
      title:      "Digital Portrait",
      titleZh:    "数字肖像",
      year:       2024,
      category:   "Digital Illustration",
      categoryZh: "数字插画",
      series:     "RISD Pre-College",
      medium:     "Digital",
      mediumZh:   "数字绘画",
      heroImage:  "images/works/risd24-digital-02.jpg",
      images:     ["images/works/risd24-digital-02.jpg"],
      statement:   "",
      statementZh: "",
      featured: false,
      archived: true,
      collection:   "RISD Summer Program · 2024",
      collectionZh: "RISD夏校 2024",
      era: "2024",
    },

    // ── UAL Summer Program · 2023 ───────────────────────────────────────

    {
      id:         "ual23-drawing",
      title:      "Drawing Studies",
      titleZh:    "绘画练习",
      year:       2023,
      category:   "Drawing",
      categoryZh: "绘画",
      medium:     "Ink, charcoal, monoprint",
      mediumZh:   "水墨，炭笔，单版印刷",
      heroImage:  "images/works/ual23-01.jpg",
      images: [
        "images/works/ual23-01.jpg",
        "images/works/ual23-02.jpg",
        "images/works/ual23-04.jpg",
      ],
      statement:   "",
      statementZh: "",
      featured: false,
      archived: true,
      collection:       "UAL Summer Program · 2023",
      collectionZh:     "UAL夏校 2023",
      collectionDesc:   "Initial explorations of the body, drawing, and expressive form.",
      collectionDescZh: "对身体、绘画与表现性形式的最初探索。",
      era: "2023",
    },

    {
      id:         "ual23-sculpture",
      title:      "Sculpture",
      titleZh:    "雕塑",
      year:       2023,
      category:   "Sculpture",
      categoryZh: "雕塑",
      medium:     "Clay, mixed media",
      mediumZh:   "粘土，混合媒介",
      heroImage:  "images/works/ual23-05.jpg",
      images: [
        "images/works/ual23-05.jpg",
        "images/works/ual23-03.jpg",
      ],
      statement:   "",
      statementZh: "",
      featured: false,
      archived: true,
      collection:   "UAL Summer Program · 2023",
      collectionZh: "UAL夏校 2023",
      era: "2023",
    },

    // ── 24年夏 · 李靖画室 ─────────────────────────────────────────
    {
      id:         "studio24-charcoal-still-life",
      title:      "Charcoal Still Life",
      titleZh:    "素描静物",
      year:       2024,
      category:   "Drawing",
      categoryZh: "素描",
      medium:     "Charcoal on paper",
      mediumZh:   "纸本炭笔",
      heroImage:  "images/works/studio24-01.jpg",
      images: [
        "images/works/studio24-01.jpg",
        "images/works/studio24-02.jpg",
      ],
      statement:   "",
      statementZh: "",
      featured: false,
      archived: true,
      collection:       "Studio Practice · Summer 2024",
      collectionZh:     "24年夏 · 画室实践",
      collectionDesc:   "Focused on observational drawing, still life, and figure studies.",
      collectionDescZh: "专注于观察绘画、静物与人物速写。",
      era: "2024",
    },

    {
      id:         "studio24-ink-still-life",
      title:      "Ink Still Life",
      titleZh:    "水墨静物",
      year:       2024,
      category:   "Drawing",
      categoryZh: "素描",
      medium:     "Ink on paper",
      mediumZh:   "纸本水墨",
      heroImage:  "images/works/studio24-03.jpg",
      images: [
        "images/works/studio24-03.jpg",
        "images/works/studio24-04.jpg",
      ],
      statement:   "",
      statementZh: "",
      featured: false,
      archived: true,
      collection:   "Studio Practice · Summer 2024",
      collectionZh: "24年夏 · 李靖画室",
      era: "2024",
    },

    {
      id:         "studio24-color-still-life-1",
      title:      "Color Still Life I",
      titleZh:    "色彩静物（一）",
      year:       2024,
      category:   "Painting",
      categoryZh: "色彩",
      medium:     "Gouache on paper",
      mediumZh:   "纸本水粉",
      heroImage:  "images/works/studio24-05.jpg",
      images: [
        
        "images/works/studio24-06.jpg",
        "images/works/studio24-07.jpg",
        "images/works/studio24-08.jpg",
        
      ],
      statement:   "",
      statementZh: "",
      featured: false,
      archived: true,
      collection:   "Studio Practice · Summer 2024",
      collectionZh: "24年夏 · 李靖画室",
      era: "2024",
    },

    {
      id:         "studio24-color-still-life-2",
      title:      "Color Still Life II",
      titleZh:    "色彩静物（二）",
      year:       2024,
      category:   "Painting",
      categoryZh: "色彩",
      medium:     "Gouache on paper",
      mediumZh:   "纸本水粉",
      heroImage:  "images/works/studio24-09.jpg",
      images: [
        "images/works/studio24-10.jpg",
        "images/works/studio24-16.jpg",
      ],
      statement:   "",
      statementZh: "",
      featured: false,
      archived: true,
      collection:   "Studio Practice · Summer 2024",
      collectionZh: "24年夏 · 李靖画室",
      era: "2024",
    },

    {
      id:         "studio24-figure-studies",
      title:      "Figure Studies",
      titleZh:    "人物速写",
      year:       2024,
      category:   "Drawing",
      categoryZh: "速写",
      medium:     "Charcoal on paper",
      mediumZh:   "纸本炭笔",
      heroImage:  "images/works/studio24-17.jpg",
      images: [
        "images/works/studio24-11.jpg",
        "images/works/studio24-18.jpg",
        "images/works/studio24-19.jpg",
        "images/works/studio24-20.jpg",
        "images/works/studio24-21.jpg",
        "images/works/studio24-22.jpg",
        "images/works/studio24-23.jpg",
      ],
      statement:   "",
      statementZh: "",
      featured: false,
      archived: true,
      collection:   "Studio Practice · Summer 2024",
      collectionZh: "24年夏 · 李靖画室",
      era: "2024",
    },

    {
      id:         "studio24-sketches-landscape",
      title:      "Sketches & Landscape",
      titleZh:    "速写与风景",
      year:       2024,
      category:   "Drawing",
      categoryZh: "速写",
      medium:     "Charcoal, gouache, mixed media",
      mediumZh:   "炭笔，水粉，综合媒介",
      heroImage:  "images/works/studio24-12.jpg",
      images: [
        "images/works/studio24-13.jpg",
        "images/works/studio24-14.jpg",
        "images/works/studio24-15.jpg",
        "images/works/studio24-24.jpg",
      ],
      statement:   "",
      statementZh: "",
      featured: false,
      archived: true,
      collection:   "Studio Practice · Summer 2024",
      collectionZh: "24年夏 · 李靖画室",
      era: "2024",
    },

  ],

};
