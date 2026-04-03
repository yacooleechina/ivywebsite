# 李惟祎个人网站 · 维护指南

网站地址：https://yacooleechina.github.io/ivywebsite/
代码位置：`/Users/lijuan/SynologyDrive/claude_code/ivywebsit/`

---

## 文件结构

```
index.html          首页
work.html           作品详情页（URL: ?id=作品id）
archive.html        归档页（早期/学生作品）
css/style.css       所有样式
js/main.js          首页脚本
js/work.js          详情页脚本
js/archive.js       归档页脚本
data/works.js       ★ 所有内容都在这里改
images/
  artist.jpg        艺术家照片
  works/            作品图片
```

**所有内容修改只需动 `data/works.js` 和 `images/works/` 这两个地方。**

---

## 一、添加/修改首页作品

在 `data/works.js` 的 `works: [ ]` 数组里添加对象，`featured: true` 的作品显示在首页。

```javascript
{
  id:         "作品英文id",          // 唯一，用于URL，不能有空格
  title:      "英文标题",
  titleZh:    "中文标题",
  year:       2025,
  category:   "Painting",           // 英文分类
  categoryZh: "绘画",               // 中文分类
  medium:     "Oil on canvas",      // 英文材质
  mediumZh:   "布面油画",           // 中文材质

  heroImage:  "images/works/xxx-01.jpg",   // 首页背景图（也是详情页第一张）
  images: [
    "images/works/xxx-01.jpg",
    "images/works/xxx-02.jpg",
    // 2张: 左右并排  3张: 第一张全宽+下方两张  4张及以上: 分页浏览
  ],

  statement:   "英文作品描述",
  statementZh: "中文作品描述，支持用 \n\n 分段",

  size:   "100cm × 80cm",   // 可选
  sizeZh: "100厘米 × 80厘米",

  featured: true,   // true = 显示在首页
},
```

---

## 二、添加归档作品

归档作品显示在 archive.html 页面，按 `collection` 分组。

```javascript
{
  id:         "studio24-example",
  title:      "Still Life",
  titleZh:    "静物",
  year:       2024,
  category:   "Drawing",
  categoryZh: "素描",
  medium:     "Charcoal on paper",
  mediumZh:   "纸本炭笔",

  heroImage:  "images/works/xxx-01.jpg",   // 归档列表缩略图
  images: [
    "images/works/xxx-01.jpg",
    "images/works/xxx-02.jpg",
  ],

  statement:   "",
  statementZh: "",

  featured: false,          // 归档作品必须是 false
  archived: true,           // 必须是 true
  collection:   "Summer 2024 · Li Jing Studio",   // 英文合集名（分组用）
  collectionZh: "24年夏 · 李靖画室",               // 中文合集名
  era: "2024",              // 时期描述（显示在合集标题旁边）
},
```

---

## 三、处理图片

### 图片放哪里
所有图片放在 `images/works/` 目录下，文件名用英文/数字，如 `work-01.jpg`。

### 从 PDF 提取图片
用 Python 脚本提取（需要安装 pymupdf：`pip3 install pymupdf`）：

```python
import fitz, os

pdf_path = "路径/文件.pdf"
out_dir = "/Users/lijuan/SynologyDrive/claude_code/ivywebsit/images/works"

doc = fitz.open(pdf_path)
for i, page in enumerate(doc):
    for j, img in enumerate(page.get_images(full=True)):
        xref = img[0]
        base_img = doc.extract_image(xref)
        with open(f"{out_dir}/作品名-{i+1}-{j+1}.{base_img['ext']}", "wb") as f:
            f.write(base_img["image"])
doc.close()
```

### 压缩图片（上传前必做）
图片过大会导致页面加载慢和推送超时，上传前统一压缩：

```python
from PIL import Image
import glob

for fp in glob.glob("images/works/*.jpg"):
    img = Image.open(fp)
    img.thumbnail((1600, 1600), Image.LANCZOS)
    img.save(fp, "JPEG", quality=82, optimize=True)
    print(fp)
```

目标：每张图片不超过 500KB。

---

## 四、推送到 GitHub

每次修改完后，在终端执行：

```bash
cd /Users/lijuan/SynologyDrive/claude_code/ivywebsit

# 1. 查看有哪些改动
git status

# 2. 添加要上传的文件
git add data/works.js
git add images/works/新图片.jpg
# 或者一次性添加所有改动
git add .

# 3. 提交
git commit -m "说明做了什么改动"

# 4. 推送（图片多时用这个，避免超时）
GIT_HTTP_LOW_SPEED_LIMIT=0 GIT_HTTP_LOW_SPEED_TIME=999 git push origin main
```

推送成功后等 1-3 分钟，GitHub Pages 自动部署。**浏览器按 Cmd+Shift+R 强制刷新**才能看到最新内容。

---

## 五、常见操作速查

| 要做什么 | 改哪里 |
|---|---|
| 修改作品标题/描述 | `data/works.js` 对应作品的 `title`/`statement` |
| 修改作品图片 | `data/works.js` 的 `heroImage`/`images[]`，同时把图片放入 `images/works/` |
| 调整首页作品顺序 | `data/works.js` 里调整 `featured:true` 作品的排列顺序 |
| 把作品移到归档 | `featured: false` + `archived: true` + 加 `collection` 字段 |
| 修改艺术家简介 | `data/works.js` 的 `SITE_DATA.artist.bio` |
| 修改艺术家照片 | 替换 `images/artist.jpg` |
| 新增归档合集 | 新增作品时用同一个 `collection` 字段值，自动归为一组 |

---

## 六、gallery 图片数量与显示规则

| 图片数量 | 详情页布局 |
|---|---|
| 1张 | 仅 hero 大图，无 gallery |
| 2张 | 左右并排，原始比例不裁剪 |
| 3张 | 第一张全宽，下方两张并排 |
| 4张及以上 | 分页浏览（← Prev / Next →） |

---

## 七、颜色主题参考

```css
背景黑：  #0c0a08
主文字：  #e8eaed
次要文字：#8a9099（muted）
最暗色：  #4a5058（dim）
```
