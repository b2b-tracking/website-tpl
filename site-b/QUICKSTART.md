# Site-B 电子烟官网 - 快速开始指南

## 🚀 项目概述

Site-B 是一个基于 Smoant 风格的专业电子烟官网模板，采用 **Thymeleaf 后端渲染** + **中英文双语** 架构。

## 📂 项目结构

```
site-b/
├── index.html              # 首页
├── products.html           # 产品列表
├── product.html            # 产品详情
├── about.html              # 关于我们
├── news.html               # 新闻资讯
├── community.html          # 用户社区
├── support.html            # 技术支持
├── css/                    # 样式文件
├── js/                     # 脚本文件
├── data/
│   └── translations.json   # 中英文翻译
├── README.md               # 项目文档
├── BACKEND_INTEGRATION.md  # 后端集成指南
└── SAMPLE_DATA.sql         # 示例数据SQL
```

## 🛠️ 技术栈

| 技术          | 版本      | 用途             |
|--------------|---------|-----------------|
| HTML5        | -       | 页面结构         |
| CSS3         | -       | 样式设计         |
| JavaScript   | ES6+    | 交互功能         |
| Thymeleaf    | 3.0+    | 后端模板引擎      |
| Spring Boot  | 2.7+    | Java后端框架    |
| Spring Data JPA | -    | 数据访问         |
| MySQL        | 5.7+    | 数据库           |

## 📦 快速部署

### 方式一：纯前端查看（无后端）

1. 直接用浏览器打开 `index.html` 即可查看
2. 数据都是硬编码的示例数据
3. 适合快速预览设计

### 方式二：本地开发服务器

#### Python 3
```bash
cd site-b
python -m http.server 8000
# 访问 http://localhost:8000
```

#### Node.js
```bash
cd site-b
npx http-server
# 访问 http://localhost:8080
```

#### PHP
```bash
cd site-b
php -S localhost:8000
# 访问 http://localhost:8000
```

### 方式三：Spring Boot 后端集成

#### 1. 项目准备
```bash
# 克隆或下载项目
git clone <repo-url>
cd <project-path>
```

#### 2. 数据库设置
```bash
# 创建数据库
mysql -u root -p < site-b/SAMPLE_DATA.sql

# 或使用 MySQL Workbench 导入
```

#### 3. Maven 依赖
```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-thymeleaf</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>
<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <version>8.0.x</version>
</dependency>
```

#### 4. application.properties 配置
```properties
# 数据库
spring.datasource.url=jdbc:mysql://localhost:3306/smoant_site?characterEncoding=utf-8&serverTimezone=UTC
spring.datasource.username=root
spring.datasource.password=password
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

# JPA
spring.jpa.hibernate.ddl-auto=validate
spring.jpa.show-sql=false
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect

# Thymeleaf
spring.thymeleaf.prefix=classpath:/templates/site-b/
spring.thymeleaf.suffix=.html
spring.thymeleaf.mode=HTML5
spring.thymeleaf.encoding=UTF-8
spring.thymeleaf.cache=false

# 应用
server.port=8080
```

#### 5. 创建 Controller
```java
@Controller
@RequestMapping("/{lang}")
public class SiteController {

    @Autowired
    private ProductService productService;

    @GetMapping("/")
    public String index(@PathVariable String lang, Model model) {
        model.addAttribute("lang", lang);
        model.addAttribute("products", productService.getProducts(lang));
        return "index";
    }
}
```

#### 6. 启动应用
```bash
mvn spring-boot:run
# 或用IDE运行 Application.java

# 访问
# http://localhost:8080/zh/
# http://localhost:8080/en/
```

## 📝 文档说明

### README.md
- 项目整体概述
- 功能特点
- 数据模型说明
- 页面功能描述
- SEO优化建议

### BACKEND_INTEGRATION.md
- 详细的数据库表结构
- Spring Boot 集成步骤
- JPA Entity 示例
- Controller 示例代码
- 最佳实践指南

### SAMPLE_DATA.sql
- 完整的数据库初始化脚本
- 包含所有表的创建和示例数据
- 可直接导入使用

## 🎨 自定义配置

### 1. 修改网站名称
```html
<!-- 在所有页面中替换 Smoant 为你的品牌名 -->
<!-- 或在后端设置 site.name 变量 -->
```

### 2. 修改品牌色
```css
/* 在 CSS 中修改颜色变量 */
:root {
  --primary-color: #2563eb;      /* 主色 */
  --secondary-color: #1e40af;    /* 辅助色 */
  --accent-color: #fbbf24;       /* 强调色 */
}
```

### 3. 添加产品
```java
// 在后端数据库中插入产品
INSERT INTO product (name, description, category_id, lang)
VALUES ('产品名称', '产品描述', 1, 'zh');
```

### 4. 修改翻译
```json
// 在 data/translations.json 中修改文字
{
  "zh": {
    "products": {
      "title": "产品中心"
    }
  }
}
```

## 🌐 多语言支持

### URL 路由
```
/zh/              - 中文首页
/zh/products      - 中文产品页
/en/              - 英文首页
/en/products      - 英文产品页
```

### 语言识别
通过 URL 路径中的 `{lang}` 参数自动识别语言

```java
@GetMapping("/{lang}/")
public String index(@PathVariable String lang) {
    // lang = "zh" 或 "en"
}
```

## ✨ 核心功能说明

### 页面功能

| 页面              | 功能描述                          |
|-----------------|--------------------------------|
| 首页 (index)     | Banner轮播、品牌优势、热销产品、新闻、统计数据 |
| 产品列表 (products) | 分类筛选、产品网格、分页            |
| 产品详情 (product) | 产品信息、规格参数、相关产品          |
| 关于我们 (about)  | 公司简介、核心价值观、企业优势、发展历程 |
| 社区 (community) | 论坛入口、用户评价、教程链接         |
| 技术支持 (support) | 质保政策、FAQ、下载中心、在线客服    |
| 新闻资讯 (news)   | 新闻列表、分类筛选、分页            |

### 交互功能

- ✅ 轮播Banner自动播放和手动控制
- ✅ 分类筛选和搜索
- ✅ 在线咨询表单
- ✅ 返回顶部按钮
- ✅ 移动端响应式菜单
- ✅ FAQ手风琴展开

## 🔒 合规性提醒

### 年龄验证
建议在首次访问时添加年龄验证弹窗（需满21岁）

### 法律警告
所有页面footer已包含尼古丁警告标识

### 必要页面
建议添加：
- 隐私政策 (Privacy Policy)
- 服务条款 (Terms of Service)
- 退换货政策 (Return Policy)

## 🐛 常见问题

### Q: 如何切换语言？
A: 在导航栏上方有"中文/EN"按钮，点击即可切换

### Q: 产品图片在哪里修改？
A:
- 前端：替换 HTML 中的 img 标签
- 后端：在数据库 product 表中修改 main_image 字段

### Q: 如何添加新的产品分类？
A: 在数据库 product_category 表中插入新记录

### Q: 轮播速度怎么调整？
A: 在 js/main.js 中修改 BannerSlider 的 autoPlayInterval 参数

### Q: 如何改变页面颜色？
A: 修改 css/style.css 中的 CSS 变量

## 📞 技术支持

### 文件位置
- 模板文件：`site-b/*.html`
- 样式文件：`site-b/css/style.css`
- 脚本文件：`site-b/js/*.js`
- 翻译文件：`site-b/data/translations.json`

### 获取帮助
1. 查看 README.md 详细文档
2. 查看 BACKEND_INTEGRATION.md 集成指南
3. 查看 SAMPLE_DATA.sql 数据结构

## 🚢 生产部署

### 前置要求
- Java 11+
- MySQL 5.7+
- 充足的磁盘空间（存放图片）

### 部署步骤

1. **编译构建**
```bash
mvn clean package -DskipTests
```

2. **数据库初始化**
```bash
mysql -u root -p < site-b/SAMPLE_DATA.sql
```

3. **上传到服务器**
```bash
scp target/app.jar user@server:/opt/app/
```

4. **启动应用**
```bash
java -jar app.jar \
  --spring.datasource.url=jdbc:mysql://localhost:3306/smoant_site \
  --spring.datasource.username=root \
  --spring.datasource.password=password
```

5. **Nginx 反向代理**
```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:8080;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    # 静态资源缓存
    location /static/ {
        expires 30d;
        add_header Cache-Control "public, immutable";
    }
}
```

## 📊 SEO 检查清单

- [ ] 每个页面设置独特的 title 和 description
- [ ] 添加 robots.txt 和 sitemap.xml
- [ ] 使用 Schema.org 结构化数据
- [ ] 图片添加 alt 属性
- [ ] 确保页面加载速度 < 3秒
- [ ] 实现面包屑导航
- [ ] 提交到搜索引擎

## 📈 性能优化

- 启用 GZIP 压缩
- 使用 CDN 加速静态资源
- 实现图片懒加载
- 使用浏览器缓存
- 数据库查询优化
- 启用 Spring Boot 缓存

## ✅ 验收清单

- [ ] 所有页面在各浏览器中正常显示
- [ ] 响应式设计在手机/平板/电脑上完美展现
- [ ] 中英文切换正常工作
- [ ] 所有链接有效
- [ ] 表单可正常提交
- [ ] 图片加载正常
- [ ] 页面加载速度良好
- [ ] SEO 信息完整

---

**祝你使用愉快！如有问题，请查阅详细文档。** 🎉
