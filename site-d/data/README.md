# Site-D 数据结构说明

本模板使用 Thymeleaf 模板引擎，支持动态数据和多语言切换。

## 数据结构

### 1. banners（轮播图）
```json
[
  {
    "image_url": "/images/banner1.jpg",
    "title": "轮播图标题",
    "subtitle": "轮播图副标题",
    "link_url": "/products"
  }
]
```

### 2. products（产品列表）
```json
[
  {
    "id": "1",
    "name": "产品名称",
    "mainImage": "/images/product1.jpg",
    "shortDescription": "产品简介"
  }
]
```

### 3. news（新闻列表）
```json
[
  {
    "id": "1",
    "title": "新闻标题",
    "summary": "新闻摘要",
    "cover_image": "/images/news1.jpg",
    "publish_time": "2024-01-01T00:00:00Z"
  }
]
```

### 4. site（网站基本信息）
```json
{
  "name": "网站名称",
  "logo": "/images/logo.png",
  "favicon": "/images/favicon.ico",
  "icpNumber": "备案号"
}
```

### 5. siteI18n（网站国际化信息）
```json
{
  "site_name": "网站名称（当前语言）",
  "description": "网站描述"
}
```

### 6. siteSeo（SEO信息）
```json
{
  "title": "页面标题",
  "description": "页面描述",
  "keywords": "关键词"
}
```

### 7. contact（联系信息）
```json
{
  "address": "公司地址",
  "phone": "联系电话",
  "email": "邮箱地址"
}
```

### 8. menus（导航菜单）
```json
[
  {
    "menu_name": "菜单名称",
    "target_url": "about"
  }
]
```

## 多语言支持

### 语言切换
- 中文：访问 `/zh/` 路径
- 英文：访问 `/en/` 路径

### 翻译文件位置
`data/translations.json`

### 翻译键说明

#### 产品中心 (products)
- `products.title` - 标题
- `products.more` - 了解更多按钮

#### 关于我们 (about)
- `about.title` - 标题
- `about.culture` - 企业文化
- `about.history` - 企业历程
- `about.team` - 专业团队
- `about.facility` - 生产环境

#### 新闻资讯 (news)
- `news.title` - 标题
- `news.more` - MORE 按钮
- `news.viewMore` - 了解更多按钮

#### 一站式服务 (service)
- `service.title` - 标题
- `service.scale` - 规模实力标题
- `service.scaleDesc` - 规模实力描述
- `service.tech` - 技术研发标题
- `service.techDesc` - 技术研发描述
- `service.quality` - 品质管控标题
- `service.qualityDesc` - 品质管控描述
- `service.support` - 售后服务标题
- `service.supportDesc` - 售后服务描述
- `service.hotline` - 咨询热线

#### 页脚 (footer)
- `footer.contactUs` - 联系我们
- `footer.address` - 地址
- `footer.phone` - 电话
- `footer.mobile` - 手机
- `footer.quickNav` - 快速导航
- `footer.followUs` - 关注我们
- `footer.wechat` - 微信扫码关注
- `footer.copyright` - 版权所有
- `footer.contactPhone` - 联系电话

## 使用说明

1. **添加新的翻译**：在 `data/translations.json` 中添加对应的中英文翻译
2. **HTML 中使用**：在元素上添加 `data-i18n="翻译键"` 属性
3. **自动加载**：页面加载时会自动读取当前语言并更新所有翻译文本

## 示例

```html
<!-- 静态文本 -->
<h3 data-i18n="products.title">产品中心</h3>

<!-- 输入框占位符 -->
<input type="text" data-i18n="contact.name" placeholder="姓名">

<!-- 带动态数据的文本 -->
<p th:text="${siteI18n.description}">默认描述</p>
```
