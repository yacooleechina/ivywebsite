IVY WEBSITE
===========

李惟祎个人艺术作品集网站，展示精选作品、作品详情、归档作品及艺术家介绍。

在线地址：
https://yacooleechina.github.io/ivywebsite/


项目类型
--------

本项目是使用 HTML、CSS 和原生 JavaScript 编写的静态网站，无需安装依赖或执行构建命令。


本地预览
--------

可以直接在浏览器中打开 index.html。

也可以在项目目录启动本地服务器：

python3 -m http.server 8000

然后访问：

http://localhost:8000/


主要文件
--------

index.html             网站首页
work.html              作品详情页
archive.html           作品归档页
data/works.js          艺术家资料及全部作品数据
css/style.css          网站样式
js/main.js             首页交互逻辑
js/work.js             作品详情页逻辑
js/archive.js          归档页逻辑
images/artist.jpg      艺术家照片
images/works/          作品图片
GUIDE.md               详细的网站内容维护指南

preview-*.html         不同视觉风格的设计预览页面


更新网站内容
------------

1. 在 data/works.js 中修改艺术家资料、作品标题、说明及图片路径。
2. 将新增作品图片放入 images/works/。
3. 首页作品需设置 featured: true。
4. 归档作品需设置 featured: false 和 archived: true。

字段格式、图片处理和归档分组方式请参阅 GUIDE.md。


发布到 GitHub
-------------

git status
git add .
git commit -m "Update portfolio content"
git push origin main

推送成功后，GitHub Pages 通常会在几分钟内完成更新。


维护提示
--------

- 作品图片建议压缩至每张 500 KB 以下。
- 图片文件名建议只使用英文字母、数字和连字符。
- 修改 data/works.js 后，应检查首页、详情页和归档页。
- 不要重复使用作品 id，否则作品详情链接可能显示错误内容。
