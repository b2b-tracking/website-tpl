# Site-B 电子烟官网模板

基于 Smoant.com 风格的专业电子烟产品官网模板，使用 Thymeleaf 模板引擎，支持中英文切换。

## 📋 项目概述

这是一个面向电子烟/vaping产品的B2C官网模板，包含产品展示、新闻资讯、用户社区、技术支持等完整功能模块。

## 🎯 核心特点

- ✅ 电子烟行业专业设计
- ✅ Pod/MOD/配件多种产品分类
- ✅ 用户社区和技术支持功能
- ✅ 完整的中英文国际化支持
- ✅ 年龄验证和法律警告
- ✅ 响应式设计适配移动端
- ✅ 基于 Thymeleaf 后端渲染

## 📁 项目结构

```
site-b/
├── index.html              # 首页（轮播Banner + 热销产品）
├── products.html           # 产品列表页（支持分类筛选）
├── product.html            # 产品详情页
├── about.html              # 关于我们页
├── news.html               # 新闻资讯列表
├── community.html          # 用户社区页（新增）
├── support.html            # 技术支持页（新增）
├── css/
│   └── style.css          # 全局样式
├── js/
│   ├── i18n.js           # 国际化功能
│   └── main.js           # 主要交互功能
├── data/
│   └── translations.json  # 中英文翻译数据（已更新电子烟术语）
└── README.md              # 本文档
```

## 💾 数据模型

### 1. 网站基本信息 (site)

```java
{
  "name": "Smoant",              // 网站名称
  "logo": "images/logo.png",     // Logo路径
  "icpNumber": "粤ICP备XXXXX号"  // 备案号（可选）
}
```

### 2. SEO信息 (siteSeo)

```java
{
  "title": "Smoant - 专业电子烟制造商",
  "description": "专业电子烟研发制造，提供Pod、MOD等产品",
  "keywords": "电子烟,vape,pod,mod,smoant"
}
```

### 3. 导航菜单 (menus)

```java
[
  {
    "menu_name": "首页",
    "target_url": ""
  },
  {
    "menu_name": "产品中心",
    "target_url": "products"
  },
  {
    "menu_name": "小烟套装",
    "target_url": "products?category=pod"
  },
  {
    "menu_name": "主机套装",
    "target_url": "products?category=mod"
  },
  {
    "menu_name": "配件",
    "target_url": "products?category=accessory"
  },
  {
    "menu_name": "关于我们",
    "target_url": "about"
  },
  {
    "menu_name": "社区",
    "target_url": "community"
  },
  {
    "menu_name": "技术支持",
    "target_url": "support"
  },
  {
    "menu_name": "新闻资讯",
    "target_url": "news"
  }
]
```

### 4. 轮播Banner (banners)

```java
[
  {
    "title": "创新科技，卓越体验",
    "subtitle": "探索最新Pod系统",
    "image_url": "images/banner1.jpg",
    "link_url": "/products?category=pod"
  },
  {
    "title": "强劲性能，精准控制",
    "subtitle": "MOD主机全新升级",
    "image_url": "images/banner2.jpg",
    "link_url": "/products?category=mod"
  }
]
```

### 5. 产品分类 (categories)

```java
[
  {
    "id": "pod",
    "name": "小烟套装"
  },
  {
    "id": "mod",
    "name": "主机套装"
  },
  {
    "id": "accessory",
    "name": "配件"
  },
  {
    "id": "disposable",
    "name": "一次性电子烟"
  }
]
```

### 6. 产品信息 (products)

```java
[
  {
    "id": "1",
    "name": "Smoant Pasito III",
    "shortDescription": "25W输出功率，可调气流系统",
    "description": "采用最新RDTA雾化结构，兼容多种雾化芯...",
    "mainImage": "images/products/pasito3.jpg",
    "category": "pod",
    "sku": "SMT-PS3-001",

    // 产品规格（可选）
    "specifications": {
      "capacity": "4ml",
      "battery": "1100mAh",
      "power": "5-25W",
      "resistance": "0.4Ω - 3.0Ω",
      "charging": "Type-C",
      "material": "锌合金 + PCTG",
      "dimensions": "98mm × 30mm × 18mm",
      "weight": "68g",
      "colors": ["黑色", "银色", "蓝色"]
    },

    // 包装清单（可选）
    "includes": [
      "主机 × 1",
      "烟弹 × 2",
      "雾化芯 × 2",
      "Type-C充电线 × 1",
      "说明书 × 1"
    ],

    // 产品特点（可选）
    "features": [
      "25W最大输出功率",
      "1100mAh大容量电池",
      "可调气流控制",
      "0.96英寸彩色屏幕",
      "多重安全保护"
    ]
  }
]
```

### 7. 新闻资讯 (news)

```java
[
  {
    "id": "1",
    "title": "Smoant推出全新Pod系统",
    "summary": "全新Pod产品搭载先进技术...",
    "content": "详细内容...",
    "category": "product",  // product/company/industry
    "publishDate": "2026-01-27",
    "imageUrl": "images/news/news1.jpg"
  }
]
```

### 8. 关于我们 (about)

```java
{
  "company_intro": "Smoant成立于2014年，是一家专注于电子烟研发制造的创新企业...",
  "imageUrl": "images/about/company.jpg"
}
```

### 9. 联系方式 (contact)

```java
{
  "address": "中国广东省深圳市宝安区XX工业园",
  "phone": "+86 755-XXXX-XXXX",
  "email": "sales@smoant.com"
}
```

### 10. 用户评价 (reviews) - 社区页面使用

```java
[
  {
    "userName": "张三",
    "content": "产品质量很好，口感出色，续航给力！",
    "rating": 5,
    "productId": "1"
  }
]
```

### 11. FAQ常见问题 (faqs) - 技术支持页面使用

```java
[
  {
    "question": "如何正确使用和保养设备？",
    "answer": "请按照产品说明书操作，定期清洁设备..."
  }
]
```

### 12. 下载资源 (downloads) - 技术支持页面使用

```java
[
  {
    "title": "Pasito III 用户手册",
    "description": "PDF格式，中文版",
    "url": "/static/downloads/pasito3-manual-zh.pdf"
  }
]
```

### 13. 质保政策 (warranty) - 技术支持页面使用

```java
{
  "content": "<p>我们为所有产品提供 <strong>6个月质保服务</strong>...</p>"
}
```

## 🌐 翻译数据结构

`data/translations.json` 包含所有界面文字的中英文翻译：

- `nav` - 导航菜单
- `products` - 产品相关
- `community` - 社区相关
- `support` - 技术支持相关
- `footer` - 页脚信息
- `error` - 错误提示

## 🎨 页面说明

### 1. 首页 (index.html)

- **轮播Banner区** - 展示核心产品和促销活动
- **品牌优势** - 展示技术创新、生产能力等优势
- **热销产品** - 精选产品展示
- **新闻动态** - 最新3条资讯
- **联系表单** - 在线咨询功能

### 2. 产品列表 (products.html)

- 产品分类筛选（Pod/MOD/配件等）
- 产品网格展示
- 分页功能
- 点击跳转到产品详情

### 3. 产品详情 (product.html)

- 产品图片展示
- 产品名称和描述
- 技术规格表
- 相关产品推荐

### 4. 社区 (community.html)

- 论坛讨论入口
- 用户评价展示
- 使用教程链接

### 5. 技术支持 (support.html)

- 质保政策说明
- 用户手册下载
- 常见问题FAQ（手风琴展开效果）
- 在线客服入口

### 6. 关于我们 (about.html)

- 公司简介
- 品牌优势
- 企业文化

### 7. 新闻资讯 (news.html)

- 新闻列表
- 分类筛选
- 分页功能

## 🚀 快速开始

### 数据准备

1. 准备后端数据模型，按照上述结构提供数据
2. 配置 Thymeleaf 模板引擎
3. 设置路由映射

### 内容定制

1. **修改品牌信息**
   - 在后端设置 `site.name`、`site.logo`
   - 替换产品图片和描述

2. **配置产品分类**
   - 根据实际产品线调整 `categories`
   - 更新导航菜单

3. **添加产品**
   - 准备产品图片
   - 填写产品详细信息（规格、特点等）
   - 设置产品分类

4. **定制翻译**
   - 修改 `data/translations.json`
   - 添加新的翻译键值

## ⚠️ 法律合规

### 年龄验证

电子烟产品网站需要实现年龄验证功能：

```html
<!-- 建议在首页添加年龄验证弹窗 -->
<div id="age-verification-modal">
  <h2 data-i18n="error.ageVerificationRequired">年龄验证</h2>
  <p data-i18n="error.ageVerificationMessage">
    本网站销售的产品仅供成年人使用，请确认您已年满21岁。
  </p>
  <button data-i18n="error.confirm">我已年满21岁</button>
  <button data-i18n="error.decline">未满21岁</button>
</div>
```

### 健康警告

所有页面footer已包含尼古丁警告：

```
本产品含有尼古丁，尼古丁是一种令人上瘾的化学物质
This product contains nicotine. Nicotine is an addictive chemical.
```

### 建议添加的法律页面

1. **隐私政策** - `/privacy-policy`
2. **服务条款** - `/terms-of-service`
3. **退换货政策** - 在support页面中说明

## 📱 响应式设计

- **桌面端**：> 768px
- **平板**：≤ 768px
- **手机**：≤ 480px

## 🔧 技术栈

- **后端模板**：Thymeleaf
- **前端**：HTML5 + CSS3 + JavaScript (ES6+)
- **样式**：CSS Grid + Flexbox
- **国际化**：自定义 i18n.js

## 📊 产品分类建议

根据 Smoant 官网风格，建议的产品分类：

1. **Pod Kits** (小烟套装)
   - 便携式Pod系统
   - 适合入门和日常使用

2. **MOD Kits** (主机套装)
   - 大功率主机
   - 适合进阶玩家

3. **Accessories** (配件)
   - 雾化芯 (Coils)
   - 烟弹 (Pods/Cartridges)
   - 电池 (Batteries)
   - 充电器

4. **Disposable** (一次性)
   - 一次性电子烟

## 🎯 SEO优化建议

1. 每个页面设置独特的 `title` 和 `description`
2. 使用语义化HTML标签
3. 产品图片添加 `alt` 属性
4. 生成产品sitemap
5. 实现面包屑导航

## 🌍 部署注意事项

1. **静态资源路径**：确保 `/static/` 路径正确映射
2. **图片优化**：使用 WebP 格式提升加载速度
3. **CDN加速**：建议使用CDN加速图片和静态资源
4. **HTTPS**：必须使用HTTPS协议
5. **年龄验证**：根据当地法律实现年龄验证

## 📄 许可证

MIT License - 可自由使用、修改和分发

## ⚖️ 免责声明

本模板仅用于学习和参考。使用本模板开展电子烟业务需遵守所在地区的相关法律法规，包括但不限于：

- 产品认证要求（CE/FCC/RoHS等）
- 年龄限制和验证要求
- 广告和营销限制
- 健康警告要求
- 在线销售许可

使用者需自行承担法律责任。

---

**提示**：这是基于 Smoant.com 风格设计的电子烟官网模板，请根据实际情况修改内容、图片和法律声明。
