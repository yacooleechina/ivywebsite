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
    tagline:   "My work explores how the gaze and pressure of the outside world are internalized and transformed into bodily and psychological experiences.",
    taglineZh: "我的创作试图赋予那些由目光、评价与规训所形成的内部压力以可见的形状。",

    // About 页的完整介绍
    bio: "My work grows from my inner response to the world around me, especially the gaze, judgment, and pressure that come from outside. As I grew up, how others saw me, and how I absorbed, resisted, and released that pressure, became one of the central questions in my life.\nThrough realism, abstraction, relief, and installation, I explore how pressure is formed, felt, and released. I use reconstruction, concealment, enlargement, and material translation to make familiar forms unstable, moving beyond narrative toward an internal experience of being watched, shaped, and confined.\nFocusing on the self is not the end of my practice. In recent work, I have begun to extend this gaze from myself to my family, the city, and society. My work does not aim to give answers, but to give visible form to feelings that persist and are often overlooked.",
    bioZh: "我的创作大多来自内心对周围世界的感受，尤其是那些来自外部的目光、评价与规训。在成长过程中，别人如何看待我，以及我如何消解和释放这些由他人带来的压力，一直是我需要面对的问题。\n因此，在创作中，无论是写实还是抽象，无论是浮雕还是装置，我都围绕这些压力如何形成、如何被感知、又如何被释放展开。我通过重构、覆盖、放大和材料转译，让熟悉的形象变得不再稳定，使作品保留现实的痕迹，却不完全停留在叙事层面，而更接近一种被观看、被塑形、被困住的内部经验。\n关注自我并不是我艺术表达的终点。近来的创作中，我也开始将这种来自外界的目光与凝视，从自身延伸到身边的人、城市与社会。我的作品不是为了给出答案，而是为了让那些持续存在却常被忽略的感受，获得一种可见的形状。",

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
      series:     "Who Is Watching Me？",
      medium:     "Charcoal on paper",           // 待填写
      mediumZh:   "炭笔画",           // 待填写

      // ⚠️ 将图片放入 images/works/ 目录后修改路径
      heroImage:  "images/works/watching-01.jpg",
      images: [
        "images/works/watching-01.jpg",
        "images/works/watching-02.jpg",
      ],

      statement:   "A corner of the art studio.I was drawing a self-portrait in front of the mirror,with my tutor standing against the wall",          // 待填写
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
      series:     "Who Is Watching Me？",
      medium:     "charcoal and gesso on paper",           // 待填写
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

      statement:   "I transform a classroom observation drawing into a psychological space. Starting from a realistic scene—myself working while the teacher stands nearby—I repaint, cover, and reorganize the image to show what I felt rather than what I saw: pressure, surveillance, and the constant need to “perform” under someone’s gaze. Layers of marks and partially erased forms create a sense of resistance, as if my thoughts are trying to break through the original picture. By shifting from documentation to distortion, I turn an ordinary classroom moment into a portrait of discipline, anxiety, and my attempt to reclaim control of how I am seen.",          // 待填写
      statementZh: "我将一张关于画室场景的观察绘画转化为一个心理空间。作品从写实场景出发，但我通过重绘、覆盖与重组，表达我所感受到的被监视感，以及在他人目光下的压力。我通过层层叠加的痕迹与被部分擦除的形体制造出一种抵抗感，仿佛我的思想正试图冲破原有画面。通过从写实到抽象，我将一个普通的课堂瞬间转化为关于规训、焦虑，以及我试图重新夺回自我观看权的一次表达。",          // 待填写

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
      medium:     "Superlight clay，Aluminum foil,white latex adhesive ,acrylic paint and gesso on canvas s",
      mediumZh:   "超轻粘土，铝箔，白色乳胶胶粘剂，丙烯漆和石膏帆布",

      heroImage:  "images/works/relief-01.jpg",
      images: [
        "images/works/relief-02.jpg",
        "images/works/relief-03.jpg", 
        "images/works/relief-04.jpg",
      ],

      statementZh:   "目光无处不在。即使在独处时，它们仍然跟随着你——注视、衡量、评判。它们不仅来自身边的人，也来自社交媒体、广告，甚至来自内心不断自我审视的声音。",
      statement: "Eyes are everywhere. They follow you even in solitude—watching, measuring, judging. They are not only the eyes of people around you, but also the invisible gaze of social media, advertisements, and even the critical voice within your own mind.",


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
      medium:     "Clay · Mixed media · Red velvet",
      mediumZh:   "粘土 · 混合媒介 · 红色天鹅绒",

      heroImage:  "images/works/trapped-02.jpg",
      images: [
        "images/works/trapped-01.jpg",
        "images/works/trapped-03.jpg",
        "images/works/trapped-04.jpg",
      ],

      statement:   "This work comes from my experience of dental deformity, which once made me afraid to laugh out loud. As a child, I was mocked for my crooked teeth, and I learned to hide them.\n\nThe sculpture takes the shape of a mouth, with distorted faces crowded inside. Viewers can clearly see each of my irregular, misshapen teeth, confronting the source of my anxiety directly. Each face represents a different gaze, together forming the pressure of appearance anxiety.\n\nAs I have grown, however, I have begun to make peace with my teeth. Through this work, I reimagine them as a group of playful spirits, each with its own character. Their shapes are inspired by my close friends—people who accept me without ridicule and remind me that flaws can carry warmth, humor, and even joy.",
      statementZh: "这件作品源于我对牙齿问题的亲身体验——它曾让我不敢放声大笑。小时候，我因为歪斜的牙齿被嘲笑，学会了刻意掩藏它们。\n\n雕塑以口腔的形状呈现，内部挤满了变形的面孔。观者可以清楚地看到我每一颗不规则、形状各异的牙齿，直面我焦虑的根源。每张面孔代表一种不同的凝视，共同构成外貌焦虑的压力。\n\n然而，随着成长，我开始与自己的牙齿和解。通过这件作品，我将它们重新想象为一群顽皮的精灵，各自拥有独特的性格。它们的形态灵感来自我亲近的朋友——那些不加嘲笑地接纳我的人，他们提醒我，缺陷也可以蕴含温暖、幽默，乃至欢乐。",

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
      medium:     "Acrylic on canvas · Multiple panels",
      mediumZh:   "布面丙烯 · 多联",

      heroImage:  "images/works/home-01.jpg",
      images: [
        "images/works/home-02.jpg",
        "images/works/home-03.jpg",
        "images/works/home-04.jpg",
      ],

      statement:   "This work explores the emotional parallel between a girl and her dog at home. As an only child, I often felt home as both intimate and marked by absence. The dog waiting alone became a reflection of my own emotional state. Through painting and installation, I transform this domestic scene into a portrait of companionship, projection, waiting, and quiet loneliness.",
      statementZh: "这件作品关注一个女孩与一只狗在家中的情感对应。作为独生子女，我常常感到家既亲密，又带有缺席感。那只独自在家等待的狗，成为我自身情感状态的映照。通过绘画与装置，我将这一家庭场景转化为关于陪伴、投射、等待与安静孤独的表达。",

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
    

      heroImage:  "images/works/drawing-00.jpg",
      images: [
        "images/works/drawing-01.jpg",
        "images/works/drawing-02.jpg",
        "images/works/drawing-03.jpg",
      ],

      statement:   "These observational drawings mainly reflect the development and display of Weiyi Li’s recent painting skills. Their central theme is the relationship between observing and being observed: the most honest act of observation is to acknowledge that looking changes the object being looked at. Two people observe each other, forming a closed loop with no outside.",
      statementZh: "观察绘画主要是李惟祎近期绘画技术能力的积累与展示。它们的主题是观察与被观察之间的关系：最诚实的观察行为是承认观看改变了被观看的对象。两个人相互观看——一个没有外部的闭环。",

      featured: true,
    },

    {
      id:         "sagittarius",
      title:      "Sagittarius",
      titleZh:    "射手座",
      year:       2024,
      category:   "digital illustration",
      categoryZh: "数字插画",
      series:     "",
      medium:     "Digital Illustration",
      mediumZh:   "数字插画",

      heroImage:  "images/works/深海守望者.jpg",
      images:     ["images/works/深海守望者.jpg"],

      statement:   "Li Weiyi, Self-Portrait, Sagittarius.",
      statementZh: "李惟祎自画像，射手座",

      featured: false,
      archived: true,
      collection: "Early Works",
      collectionZh: "早期作品",
      era: "2024",
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
      collection:   "Summer 2024 · Li Jing Studio",
      collectionZh: "24年夏 · 李靖画室",
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
      collection:   "Summer 2024 · Li Jing Studio",
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
        "images/works/studio24-05.jpg",
        "images/works/studio24-06.jpg",
        "images/works/studio24-07.jpg",
        "images/works/studio24-08.jpg",
      ],
      statement:   "",
      statementZh: "",
      featured: false,
      archived: true,
      collection:   "Summer 2024 · Li Jing Studio",
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
        "images/works/studio24-09.jpg",
        "images/works/studio24-10.jpg",
      ],
      statement:   "",
      statementZh: "",
      featured: false,
      archived: true,
      collection:   "Summer 2024 · Li Jing Studio",
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
      heroImage:  "images/works/studio24-12.jpg",
      images: [
        "images/works/studio24-11.jpg",
        "images/works/studio24-12.jpg",
        "images/works/studio24-13.jpg",
        "images/works/studio24-14.jpg",
        "images/works/studio24-15.jpg",
        "images/works/studio24-16.jpg",
        "images/works/studio24-17.jpg",
        "images/works/studio24-18.jpg",
        "images/works/studio24-19.jpg",
      ],
      statement:   "",
      statementZh: "",
      featured: false,
      archived: true,
      collection:   "Summer 2024 · Li Jing Studio",
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
      medium:     "Mixed · Charcoal · Gouache",
      mediumZh:   "综合 · 炭笔 · 水粉",
      heroImage:  "images/works/studio24-22.jpg",
      images: [
        "images/works/studio24-20.jpg",
        "images/works/studio24-21.jpg",
        "images/works/studio24-22.jpg",
        "images/works/studio24-23.jpg",
      ],
      statement:   "",
      statementZh: "",
      featured: false,
      archived: true,
      collection:   "Summer 2024 · Li Jing Studio",
      collectionZh: "24年夏 · 李靖画室",
      era: "2024",
    },

  ],

};
