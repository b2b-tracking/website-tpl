# 网站内容配置模板

请根据此模板填写您的网站信息，然后可以批量替换到网站中。

## 🌐 网站基础信息

### 域名和标识
- **域名**: `www.your-company.com`
- **Logo文件**: `images/logo.png`（请将Logo图片放在images目录）
- **站点名称**: `ManufacturePro` → 替换为你的公司名称
- **默认语言**: `zh`（中文）/ `en`（英文）

### SEO信息（影响搜索引擎排名）
```html
<!-- 每个页面的<head>中 -->
<title>你的网站标题 - 公司名称</title>
<meta name="description" content="网站描述，建议150-160字，简要介绍公司业务">
<meta name="keywords" content="关键词1, 关键词2, 关键词3, 精密加工, CNC加工">
```

**示例：**
- **首页标题**: "精密制造专家 - ManufacturePro | 提供一站式制造解决方案"
- **描述**: "ManufacturePro是专业的精密制造企业，提供CNC加工、塑料注塑、五金冲压等服务，拥有ISO9001认证，10年制造经验，服务全球500+客户"
- **关键词**: "精密制造, CNC加工, 塑料注塑, 五金冲压, OEM代工, ODM定制"

### 备案信息（中国网站必须）
```html
<!-- 页脚添加 -->
<p>ICP备案号：京ICP备12345678号-1</p>
<p>公安备案号：京公网安备 11010802012345号</p>
```

---

## 📋 导航菜单配置

### 主导航（当前已实现）
```
├── 首页 (index.html) - 排序1
├── 产品中心 (products.html) - 排序2
│   └── [二级菜单可选]
│       ├── 精密机械零件
│       ├── 电子元器件
│       └── 塑料注塑件
├── 关于我们 (about.html) - 排序3
│   └── [二级菜单可选]
│       ├── 公司简介
│       ├── 企业文化
│       └── 资质认证
├── 新闻资讯 (news.html) - 排序4
├── 客户案例 (cases.html) - 排序5
└── 联系我们 (#contact) - 排序6
```

### 自定义菜单项模板
```json
{
  "name_zh": "菜单名称（中文）",
  "name_en": "Menu Name (English)",
  "url": "页面链接",
  "order": 排序号,
  "target": "_self" 或 "_blank",
  "children": [子菜单数组]
}
```

---

## 🎨 Banner轮播配置

### Banner 1
- **背景图片**: `images/banner1.jpg` (建议尺寸: 1920x800px)
- **标题（中文）**: "专业制造  品质为先"
- **标题（英文）**: "Professional Manufacturing, Quality First"
- **描述（中文）**: "10年制造经验，服务全球500+客户"
- **描述（英文）**: "10 Years Experience, Serving 500+ Global Customers"
- **按钮文字**: "获取报价" / "Get Quote"
- **跳转链接**: `#contact`

### Banner 2
- **背景图片**: `images/banner2.jpg`
- **标题（中文）**: "精密加工  严格品控"
- **标题（英文）**: "Precision Processing, Strict Quality Control"
- **描述（中文）**: "ISO9001认证，产品合格率99%+"
- **描述（英文）**: "ISO9001 Certified, 99%+ Product Pass Rate"
- **按钮文字**: "关于我们" / "About Us"
- **跳转链接**: `about.html`

### Banner 3
- **背景图片**: `images/banner3.jpg`
- **标题（中文）**: "定制服务  快速交付"
- **标题（英文）**: "Custom Service, Fast Delivery"
- **描述（中文）**: "支持OEM/ODM，98%准时交付率"
- **描述（英文）**: "OEM/ODM Available, 98% On-time Delivery"
- **按钮文字**: "联系我们" / "Contact Us"
- **跳转链接**: `#contact`

---

## 📦 产品信息模板

### 产品分类
1. 精密机械零件
2. 电子元器件
3. 塑料注塑件
4. 五金冲压件
5. 3D打印件
6. 组装代工服务

### 产品详细信息模板
```
【产品1】
- 产品名称（中文）: 精密机械零件
- 产品名称（英文）: Precision Mechanical Parts
- 产品分类: 精密机械
- 产品图片: images/products/product1.jpg (建议尺寸: 800x800px)
- 产品简介（中文）: CNC加工，精度可达±0.01mm，广泛应用于汽车、航空等领域
- 产品简介（英文）: CNC machining, accuracy up to ±0.01mm
- 产品详情（中文）: [详细描述，支持富文本]
- 产品详情（英文）: [详细描述，支持富文本]

【技术参数】
- 加工精度: ±0.01mm
- 材质: 铝合金、不锈钢、铜等
- 表面处理: 阳极氧化、喷砂、抛光等
- 起订量(MOQ): 100件
- 交货期: 7-15天
- 包装方式: 防震泡沫 + 纸箱

【应用领域】
- 汽车制造
- 航空航天
- 医疗器械
- 电子设备

【产品特点】
- 高精度CNC加工
- 多种材质可选
- 快速交付
- 支持定制
```

**复制以上模板为每个产品填写**

---

## 📰 新闻资讯模板

### 新闻分类
1. 公司新闻
2. 行业动态
3. 技术文章

### 新闻详细信息模板
```
【新闻1】
- 标题（中文）: 公司成功通过ISO 9001:2015质量管理体系认证
- 标题（英文）: Company Successfully Passed ISO 9001:2015 Certification
- 分类: 公司新闻
- 封面图: images/news/news1.jpg (建议尺寸: 1200x600px)
- 发布时间: 2026-01-10
- 作者: 管理员
- 阅读量: 1258

摘要（中文，100-150字）:
近日，我司顺利通过ISO 9001:2015质量管理体系认证审核，获得由权威认证机构颁发的认证证书。这标志着公司在质量管理方面达到国际先进水平...

摘要（英文）:
Recently, our company successfully passed the ISO 9001:2015 quality management system certification...

正文（中文，支持富文本、图片插入）:
[完整新闻内容...]

正文（英文）:
[Full content...]

标签: ISO认证, 质量管理, 企业新闻
```

---

## 🏢 关于我们 - 公司介绍

### 公司基本信息
```
公司全称（中文）: XX科技有限公司
公司全称（英文）: XX Technology Co., Ltd.
成立时间: 2015年
注册资本: 1000万元
员工人数: 150人
```

### 公司简介
```
【中文】(200-300字)
我们是一家专业的精密制造企业，成立于2015年，拥有完善的生产设施和质量管理体系。
公司拥有先进的CNC加工中心、注塑成型设备等生产设备，年产能超过100万件。
我们通过了ISO 9001质量管理体系认证，产品远销欧美、东南亚等地区。
致力于为全球客户提供高品质的产品和定制化服务。

【英文】
We are a professional precision manufacturing company established in 2015...
```

### 企业文化

#### 企业愿景
- **中文**: 成为全球领先的制造服务商
- **英文**: To be a world-leading manufacturing service provider

#### 企业使命
- **中文**: 以卓越品质和创新技术服务客户
- **英文**: Serve customers with excellent quality and innovative technology

#### 核心价值观
- **中文**: 品质第一、客户至上、持续改进
- **英文**: Quality First, Customer Oriented, Continuous Improvement

### 发展历程
```
2015年: 公司成立，建立研发中心
2017年: 首款产品上市，销量突破10万
2019年: 获得ISO 9001认证
2021年: 开拓国际市场
2023年: 推出AI智能系列
2026年: 持续创新发展
```

### 工厂图片
- `images/factory/factory1.jpg` - 工厂外景
- `images/factory/factory2.jpg` - 生产车间
- `images/factory/factory3.jpg` - 质检中心
- `images/factory/factory4.jpg` - 仓储物流
- `images/factory/factory5.jpg` - 研发中心

### 资质认证
- ISO 9001:2015 质量管理体系认证
  - 证书图片: `images/certificates/iso9001.jpg`
  - 证书编号: XXX-2024-001
  - 有效期: 2024-2027

- ISO 14001 环境管理体系认证
  - 证书图片: `images/certificates/iso14001.jpg`

- CE 欧盟认证
  - 证书图片: `images/certificates/ce.jpg`

- RoHS 环保认证
  - 证书图片: `images/certificates/rohs.jpg`

---

## 📞 联系方式

### 公司信息
```
公司名称（中文）: XX科技有限公司
公司名称（英文）: XX Technology Co., Ltd.

总部地址（中文）: 中国广东省深圳市宝安区XX工业园XX号
总部地址（英文）: XX Industrial Park, Bao'an District, Shenzhen, Guangdong, China

邮政编码: 518000
```

### 联系方式
```
销售热线: +86 755-1234-5678
售后热线: +86 755-8765-4321
传真号码: +86 755-1234-5679

销售邮箱: sales@your-company.com
技术支持: support@your-company.com
合作邮箱: partner@your-company.com

营业时间: 周一至周六 8:00-18:00
客服时间: 7×24小时在线
```

### 社交媒体（可选）
```
微信公众号: your_wechat_id
官方微博: @your_weibo
LinkedIn: company-name
Facebook: company-name
YouTube: company-channel
```

### 地图信息
- 经度: 114.0579
- 纬度: 22.5431
- 百度地图POI: [公司名称]
- Google Maps链接: https://maps.google.com/...

---

## 📊 数据统计（首页展示）

```
10+   年制造经验
100万+ 年产能（件）
500+  合作客户
98%   准时交付率
150+  员工人数
5000+ 平方米厂房面积
```

---

## 🎯 SEO关键词建议

### 核心关键词（3-5个）
- 精密制造
- CNC加工
- 注塑加工
- OEM代工
- 定制加工

### 长尾关键词（10-20个）
- 深圳精密机械加工厂
- CNC数控加工定制
- 小批量精密加工
- 塑料注塑模具开发
- 五金冲压件生产
- OEM贴牌加工服务
- 铝合金CNC加工
- 医疗器械零件加工
- 汽车配件定制加工
- 精密模具制造商

---

## 📝 内容填写步骤

### 第一步：准备素材
- [ ] 公司Logo（PNG透明底，建议尺寸：300x100px）
- [ ] Banner图片3张（1920x800px）
- [ ] 产品图片（每个产品至少3张，800x800px）
- [ ] 工厂照片5-10张（1200x800px）
- [ ] 资质证书扫描件（清晰可读）
- [ ] 新闻配图（1200x600px）

### 第二步：文字内容
- [ ] 公司简介（中英文）
- [ ] 产品描述（每个产品）
- [ ] 新闻文章（至少5-10篇）
- [ ] 联系方式确认

### 第三步：批量替换
1. 使用文本编辑器的"查找替换"功能
2. 将`ManufacturePro`替换为您的公司名称
3. 将联系方式批量替换
4. 添加真实的备案号

### 第四步：图片上传
1. 将所有图片放入`images/`对应目录
2. 修改HTML中的图片路径
3. 优化图片大小（使用TinyPNG等工具压缩）

### 第五步：测试检查
- [ ] 检查所有链接是否正常
- [ ] 测试表单提交功能
- [ ] 测试中英文切换
- [ ] 测试移动端显示
- [ ] 检查SEO信息是否完整

---

## 💡 重要提示

1. **图片尺寸建议**：
   - Logo: 300x100px (透明PNG)
   - Banner: 1920x800px
   - 产品图: 800x800px
   - 新闻封面: 1200x600px

2. **文件命名规范**：
   - 使用英文或拼音
   - 小写字母
   - 用连字符分隔：`product-name.jpg`

3. **SEO优化**：
   - 每个页面都要有独特的title和description
   - 图片要添加alt属性
   - 合理使用H1-H6标签

4. **备案要求**（中国）：
   - 网站上线前必须完成ICP备案
   - 在页脚显著位置展示备案号
   - 备案号需链接到工信部网站

5. **法律信息**：
   - 添加隐私政策页面
   - 添加使用条款页面
   - 添加cookie使用说明

---

**下一步**: 请根据此模板填写您的真实信息，然后我可以帮您批量更新到网站中！
