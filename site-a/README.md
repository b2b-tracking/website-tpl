# ManufacturePro 制造业官网模板

一个功能完整、专业的制造业企业官网模板，支持中英文切换，包含轮播Banner、产品展示、新闻资讯等模块。

## ✨ 功能特点

### 核心功能
- ✅ **轮播Banner** - 3张全屏轮播图，支持自动播放、手动切换、触摸滑动
- ✅ **产品展示系统** - 产品列表、产品详情、分类筛选
- ✅ **新闻资讯系统** - 新闻列表、新闻详情、分类管理
- ✅ **客户案例展示** - 行业案例、客户评价
- ✅ **在线询价表单** - B2B专业询价功能
- ✅ **中英文切换** - 完整的国际化支持
- ✅ **响应式设计** - 完美适配PC、平板、手机

### 制造业特色
- 📋 ISO质量认证展示
- 🏭 生产能力数据展示
- 📊 准时交付率等关键指标
- 🔧 OEM/ODM定制服务说明
- ⚙️ 技术参数详细展示
- 📦 MOQ、交货期等B2B信息

## 📁 项目结构

```
tpl-website-1/
├── index.html              # 首页（轮播Banner + 产品预览 + 新闻预览）
├── products.html           # 产品列表页（带筛选）
├── product-detail.html     # 产品详情页
├── about.html              # 关于我们页
├── cases.html              # 客户案例页
├── news.html               # 新闻资讯列表
├── news-detail.html        # 新闻详情页
├── css/
│   └── style.css          # 全局样式（含轮播、新闻、响应式）
├── js/
│   ├── i18n.js           # 国际化功能
│   └── main.js           # 主要交互功能（含轮播类）
├── data/
│   └── translations.json  # 中英文翻译数据
├── images/                # 图片目录（待添加真实图片）
├── index-old.html         # 原首页备份
└── README.md              # 本文档
```

## 🚀 快速开始

### 方法一：直接打开
双击 `index.html` 文件即可在浏览器中查看完整网站

### 方法二：使用本地服务器（推荐）
```bash
# 使用 Python
python -m http.server 8000

# 使用 Node.js
npx http-server

# 使用 PHP
php -S localhost:8000
```

然后访问：`http://localhost:8000`

## 📄 页面说明

### 1. 首页 (index.html)
- **轮播Banner区** - 3张全屏轮播，展示公司核心优势
- **制造优势** - 6个核心优势展示
- **产品展示** - 精选6款产品预览
- **新闻资讯** - 最新3条新闻动态
- **数据展示** - 关键业务数据
- **询价表单** - 在线询价功能

### 2. 产品列表 (products.html)
- 12款产品展示
- 分类筛选（智能设备、便携设备、专业设备）
- 网格布局
- 查看详情和获取报价按钮

### 3. 产品详情 (product-detail.html)
- 产品大图展示
- 技术参数表格
- 产品特点说明
- 应用领域
- 相关产品推荐

### 4. 关于我们 (about.html)
- 公司简介
- 企业愿景、使命、价值观
- 发展历程时间线
- 公司优势
- 团队介绍

### 5. 客户案例 (cases.html)
- 6个行业案例展示
- 项目数据详情
- 客户评价模块
- 按行业分类

### 6. 新闻资讯 (news.html)
- 新闻列表（公司新闻、行业动态、技术文章）
- 分类筛选
- 新闻卡片布局
- 分页功能

### 7. 新闻详情 (news-detail.html)
- 新闻标题和元信息
- 正文内容
- 相关新闻推荐

## 🎨 自定义指南

### 更换公司信息

#### 1. 修改公司名称和Logo
```html
<!-- 在所有HTML文件中查找替换 -->
ManufacturePro → 你的公司名称
```

**添加Logo图片：**
1. 将Logo图片放入 `images/` 目录，如 `logo.png`
2. 修改所有页面的导航栏：
```html
<!-- 原来的文字Logo -->
<a href="index.html" class="logo">ManufacturePro</a>

<!-- 改为图片Logo -->
<a href="index.html" class="logo">
  <img src="./images/logo.png" alt="公司Logo" style="height: 40px;">
</a>
```

#### 2. 修改联系方式
在所有HTML文件中查找并替换：
- 地址：`中国广东省深圳市宝安区工业园`
- 电话：`+86 755-1234-5678`
- 邮箱：`sales@manufacturepro.com`

#### 3. 修改轮播Banner
编辑 `index.html` 中的Banner内容：
```html
<!-- 修改文字 -->
<h1 data-i18n="banner.slide1Title">你的标题</h1>
<p data-i18n="banner.slide1Desc">你的描述</p>

<!-- 修改背景图片（在CSS中） -->
```

修改 `css/style.css` 中的背景：
```css
.banner-slide-1 {
  background: linear-gradient(135deg, rgba(37, 99, 235, 0.9) 0%, rgba(30, 64, 175, 0.9) 100%),
              url('../images/banner1.jpg');  /* 添加真实图片 */
  background-size: cover;
  background-position: center;
}
```

#### 4. 修改产品信息
编辑各页面中的产品信息，包括：
- 产品名称
- 产品描述
- 产品图片（替换emoji）
- 技术参数

**替换产品图片：**
```html
<!-- 原来的emoji占位 -->
<div class="product-image">
  <span>🔩</span>
</div>

<!-- 改为真实图片 -->
<div class="product-image" style="background-image: url('./images/product1.jpg'); background-size: cover;">
</div>
```

#### 5. 修改颜色主题
编辑 `css/style.css` 中的颜色变量：
```css
:root {
  --primary-color: #2563eb;      /* 主色调 - 改为你的品牌色 */
  --secondary-color: #1e40af;    /* 辅助色 */
  --text-color: #1f2937;         /* 文字颜色 */
  --text-light: #6b7280;         /* 浅色文字 */
}
```

### 修改翻译内容
编辑 `data/translations.json`：
```json
{
  "zh": {
    "nav": {
      "home": "首页",
      "products": "产品中心",
      ...
    }
  },
  "en": {
    "nav": {
      "home": "Home",
      "products": "Products",
      ...
    }
  }
}
```

## 🎯 轮播Banner使用说明

### Banner功能
- **自动播放**：每5秒自动切换
- **手动控制**：点击左右箭头切换
- **导航点**：点击底部圆点跳转到指定幻灯片
- **键盘控制**：使用左右方向键切换
- **触摸滑动**：在移动设备上左右滑动切换
- **悬停暂停**：鼠标悬停时暂停自动播放

### 修改轮播速度
编辑 `js/main.js` 中的 `BannerSlider` 类：
```javascript
startAutoPlay() {
  this.autoPlayInterval = setInterval(() => {
    this.nextSlide();
  }, 5000); // 修改这里的数字（毫秒）
}
```

### 添加更多幻灯片
在 `index.html` 中添加新的幻灯片：
```html
<!-- 幻灯片 4 -->
<div class="banner-slide banner-slide-4">
  <div class="banner-content">
    <h1>你的标题</h1>
    <p>你的描述</p>
    <div class="banner-buttons">
      <a href="#" class="btn">按钮</a>
    </div>
  </div>
</div>
```

同时在导航点中添加：
```html
<div class="banner-dots">
  <span class="banner-dot active"></span>
  <span class="banner-dot"></span>
  <span class="banner-dot"></span>
  <span class="banner-dot"></span>  <!-- 新增 -->
</div>
```

在CSS中添加样式：
```css
.banner-slide-4 {
  background: linear-gradient(...), url('...');
  background-size: cover;
}
```

## 📱 响应式断点

- **桌面端**：> 768px
- **平板**：≤ 768px
- **手机**：≤ 480px

## 🌐 浏览器支持

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)
- 移动端浏览器

## 📝 待添加内容清单

### 必须添加
- [ ] 公司真实Logo图片
- [ ] 产品真实图片
- [ ] Banner背景图片
- [ ] 新闻配图
- [ ] 公司联系方式
- [ ] 公司简介文字

### 建议添加
- [ ] 资质认证证书图片
- [ ] 生产车间照片
- [ ] 团队照片
- [ ] 客户Logo墙
- [ ] 视频介绍
- [ ] 在线客服功能

## 🔧 技术栈

- **HTML5** - 语义化标签
- **CSS3** - Flexbox + Grid + 动画
- **JavaScript (ES6+)** - 原生JS，无依赖
- **响应式设计** - Mobile First

## 📊 性能优化建议

1. **图片优化**
   - 使用WebP格式
   - 压缩图片大小
   - 使用CDN加速

2. **代码优化**
   - 压缩CSS和JS文件
   - 合并请求
   - 启用GZIP压缩

3. **加载优化**
   - 图片懒加载
   - 异步加载JS
   - 使用浏览器缓存

## 🚢 部署建议

### GitHub Pages
```bash
git init
git add .
git commit -m "Initial commit"
git push -u origin main
```
在仓库设置中启用 GitHub Pages

### Vercel / Netlify
直接拖拽项目文件夹或连接Git仓库

### 传统服务器
将所有文件上传到服务器的web目录即可

## 💡 常见问题

**Q: 如何修改网站标题？**
A: 修改各页面 `<title>` 标签中的内容

**Q: 轮播不工作怎么办？**
A: 检查 `js/main.js` 是否正确加载，浏览器控制台是否有错误

**Q: 如何添加更多语言？**
A: 在 `translations.json` 中添加新的语言键，并在页面中添加对应的语言切换按钮

**Q: 移动端菜单不显示？**
A: 检查CSS文件是否正确加载，查看响应式媒体查询是否生效

**Q: 表单提交后数据去哪了？**
A: 当前表单只有前端验证，需要添加后端API接口来处理表单数据

## 📞 技术支持

如需进一步定制或有技术问题，请提供：
1. 参考网站截图
2. 公司Logo和产品图片
3. 具体需求说明

## 📄 许可证

MIT License - 可自由使用、修改和分发

## 🎉 更新日志

### v1.0.0 (2026-01-12)
- ✅ 完整的7个页面
- ✅ 轮播Banner功能
- ✅ 新闻资讯系统
- ✅ 客户案例展示
- ✅ 中英文切换
- ✅ 响应式设计
- ✅ 制造业专业功能

---

**提示**：这是一个模板项目，请根据实际情况修改内容和图片。建议在正式上线前添加真实的公司信息、产品图片和联系方式。
