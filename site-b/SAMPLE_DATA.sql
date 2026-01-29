-- ==========================================
-- Site-B (电子烟官网) 数据模型示例
-- ==========================================
-- 使用 Thymeleaf 模板引擎
-- 这是 SQL 示例，实际使用中可能采用 JPA/Mybatis 等

-- 网站基本信息
INSERT INTO site (id, name, logo, description, icp_number)
VALUES (1, 'Smoant', 'images/logo.png', '专业电子烟研发制造商', '粤ICP备XXXXX号');

-- SEO信息
INSERT INTO site_seo (id, page_type, title, description, keywords)
VALUES
  (1, 'home', 'Smoant - 专业电子烟制造商', '专业电子烟研发制造，提供Pod、MOD等产品', '电子烟,vape,pod,mod,smoant'),
  (2, 'products', '产品中心 - Smoant', '查看Smoant全部电子烟产品', '电子烟产品,pod,mod,配件'),
  (3, 'about', '关于我们 - Smoant', '了解Smoant品牌发展历程', 'Smoant,电子烟品牌'),
  (4, 'news', '新闻资讯 - Smoant', '最新产品新闻和行业资讯', '电子烟新闻,行业动态');

-- 导航菜单
INSERT INTO menu (id, site_id, menu_name, target_url, sort_order, lang)
VALUES
  (1, 1, '首页', '', 1, 'zh'),
  (2, 1, '产品中心', 'products', 2, 'zh'),
  (3, 1, '新品上市', 'products?category=new', 3, 'zh'),
  (4, 1, '小烟套装', 'products?category=pod', 4, 'zh'),
  (5, 1, '主机套装', 'products?category=mod', 5, 'zh'),
  (6, 1, '配件中心', 'products?category=accessory', 6, 'zh'),
  (7, 1, '关于我们', 'about', 7, 'zh'),
  (8, 1, '社区', 'community', 8, 'zh'),
  (9, 1, '技术支持', 'support', 9, 'zh'),
  (10, 1, '新闻资讯', 'news', 10, 'zh'),
  (11, 1, '联系我们', '', 11, 'zh'),

  (12, 1, 'Home', '', 1, 'en'),
  (13, 1, 'Products', 'products', 2, 'en'),
  (14, 1, 'New Arrivals', 'products?category=new', 3, 'en'),
  (15, 1, 'Pod Kits', 'products?category=pod', 4, 'en'),
  (16, 1, 'MOD Kits', 'products?category=mod', 5, 'en'),
  (17, 1, 'Accessories', 'products?category=accessory', 6, 'en'),
  (18, 1, 'About Us', 'about', 7, 'en'),
  (19, 1, 'Community', 'community', 8, 'en'),
  (20, 1, 'Support', 'support', 9, 'en'),
  (21, 1, 'News', 'news', 10, 'en'),
  (22, 1, 'Contact', '', 11, 'en');

-- 轮播Banner
INSERT INTO banner (id, site_id, title, subtitle, image_url, link_url, sort_order, lang)
VALUES
  (1, 1, '创新科技，卓越体验', '探索最新Pod系统', 'images/banner1.jpg', '/products?category=pod', 1, 'zh'),
  (2, 1, '强劲性能，精准控制', 'MOD主机全新升级', 'images/banner2.jpg', '/products?category=mod', 2, 'zh'),
  (3, 1, '品质精选，全球热销', '超过50个国家和地区热销', 'images/banner3.jpg', '/products', 3, 'zh'),

  (4, 1, 'Innovation Technology, Superior Experience', 'Explore Our Latest Pod Systems', 'images/banner1.jpg', '/products?category=pod', 1, 'en'),
  (5, 1, 'Powerful Performance, Precise Control', 'MOD Host New Upgrade', 'images/banner2.jpg', '/products?category=mod', 2, 'en'),
  (6, 1, 'Quality Selection, Global Hot Sales', 'Popular in Over 50 Countries', 'images/banner3.jpg', '/products', 3, 'en');

-- 产品分类
INSERT INTO product_category (id, site_id, name, description, sort_order, lang)
VALUES
  (1, 1, '小烟套装', 'Pod Kit System', 1, 'zh'),
  (2, 1, '主机套装', 'MOD Kit System', 2, 'zh'),
  (3, 1, '配件', 'Accessories', 3, 'zh'),
  (4, 1, '一次性电子烟', 'Disposable Vapes', 4, 'zh'),

  (5, 1, 'Pod Kits', 'Pod Kit System', 1, 'en'),
  (6, 1, 'MOD Kits', 'MOD Kit System', 2, 'en'),
  (7, 1, 'Accessories', 'Accessories', 3, 'en'),
  (8, 1, 'Disposable', 'Disposable Vapes', 4, 'en');

-- 产品信息
INSERT INTO product (id, site_id, category_id, name, short_description, description, main_image,
                     sku, status, created_at, lang)
VALUES
  (1, 1, 1, 'Smoant Pasito III', '25W输出功率，可调气流系统',
   '采用最新RDTA雾化结构，兼容多种雾化芯，支持快速充电...',
   'images/products/pasito3.jpg', 'SMT-PS3-001', 1, NOW(), 'zh'),

  (2, 1, 2, 'Smoant Naboo', '80W大功率，温度控制',
   '搭载高端芯片，支持TC/VW/CCW多种模式，钛合金外壳...',
   'images/products/naboo.jpg', 'SMT-NB-001', 1, NOW(), 'zh'),

  (3, 1, 3, 'Smoant 雾化芯套装', '多种型号，四颗装',
   '原厂正品雾化芯，质量稳定，口感出众...',
   'images/products/coil.jpg', 'SMT-COIL-001', 1, NOW(), 'zh'),

  (4, 1, 1, 'Smoant Pasito III', '25W output power, adjustable airflow system',
   'Latest RDTA atomization structure, compatible with multiple coils, supports fast charging...',
   'images/products/pasito3.jpg', 'SMT-PS3-001', 1, NOW(), 'en'),

  (5, 1, 2, 'Smoant Naboo', '80W high power, temperature control',
   'Equipped with high-end chip, supports TC/VW/CCW modes, titanium alloy shell...',
   'images/products/naboo.jpg', 'SMT-NB-001', 1, NOW(), 'en'),

  (6, 1, 3, 'Smoant Coil Set', 'Multiple types, 4-pack',
   'Original factory coils, stable quality, excellent taste...',
   'images/products/coil.jpg', 'SMT-COIL-001', 1, NOW(), 'en');

-- 产品规格参数
INSERT INTO product_specification (id, product_id, spec_key, spec_value)
VALUES
  (1, 1, 'capacity', '4ml'),
  (2, 1, 'battery', '1100mAh'),
  (3, 1, 'power', '5-25W'),
  (4, 1, 'resistance', '0.4Ω-3.0Ω'),
  (5, 1, 'charging', 'Type-C'),
  (6, 1, 'material', '锌合金 + PCTG'),
  (7, 1, 'dimensions', '98mm × 30mm × 18mm'),
  (8, 1, 'weight', '68g'),

  (9, 2, 'capacity', '5000mAh'),
  (10, 2, 'battery', '双18650'),
  (11, 2, 'power', '5-80W'),
  (12, 2, 'resistance', '0.1Ω-3.0Ω'),
  (13, 2, 'charging', 'Type-C'),
  (14, 2, 'material', '钛合金'),
  (15, 2, 'dimensions', '125mm × 45mm × 30mm'),
  (16, 2, 'weight', '280g');

-- 新闻资讯
INSERT INTO news (id, site_id, title, summary, content, cover_image, category,
                  publish_time, author, status, lang)
VALUES
  (1, 1, 'Smoant推出全新Pod系统', '创新设计，卓越体验',
   '我们很高兴地宣布，全新的Pasito III Pod系统已上市...详细内容...',
   'images/news/news1.jpg', 'product', NOW(), 'admin', 1, 'zh'),

  (2, 1, '电子烟行业发展新趋势', '市场前景光明',
   '根据最新行业报告，全球电子烟市场持续增长...详细分析...',
   'images/news/news2.jpg', 'industry', NOW(), 'admin', 1, 'zh'),

  (3, 1, 'Smoant获得国际认证', '品质得到认可',
   'Smoant所有产品已获得CE、FCC、RoHS等国际认证...',
   'images/news/news3.jpg', 'company', NOW(), 'admin', 1, 'zh'),

  (4, 1, 'Smoant Launches New Pod System', 'Innovative design, superior experience',
   'We are pleased to announce that the new Pasito III Pod system is now available...',
   'images/news/news1.jpg', 'product', NOW(), 'admin', 1, 'en'),

  (5, 1, 'New Trends in Vaping Industry', 'Bright market prospects',
   'According to the latest industry report, the global vaping market continues to grow...',
   'images/news/news2.jpg', 'industry', NOW(), 'admin', 1, 'en'),

  (6, 1, 'Smoant Obtains International Certification', 'Quality Recognized',
   'All Smoant products have obtained CE, FCC, RoHS and other international certifications...',
   'images/news/news3.jpg', 'company', NOW(), 'admin', 1, 'en');

-- 关于我们
INSERT INTO about_us (id, site_id, company_intro, mission, vision, lang)
VALUES
  (1, 1, 'Smoant成立于2014年，是一家专注于电子烟研发、生产和销售的创新型企业。我们拥有一支经验丰富的研发团队和先进的生产设施，致力于为全球用户提供优质的电子烟产品。',
   '为全球消费者提供安全、优质、创新的电子烟产品',
   '成为电子烟行业的全球领导品牌',
   'zh'),

  (2, 1, 'Founded in 2014, Smoant is an innovative company focused on R&D, production and sales of e-cigarettes. We have an experienced R&D team and advanced production facilities, committed to providing quality vaping products to users worldwide.',
   'To provide safe, quality and innovative vaping products to global consumers',
   'To become a leading global vaping brand',
   'en');

-- 联系方式
INSERT INTO contact_info (id, site_id, address, phone, email, lang)
VALUES
  (1, 1, '中国广东省深圳市宝安区XX工业园', '+86 755-XXXX-XXXX', 'sales@smoant.com', 'zh'),
  (2, 1, 'XX Industrial Park, Bao\'an District, Shenzhen, Guangdong Province, China', '+86 755-XXXX-XXXX', 'sales@smoant.com', 'en');

-- 用户评价（社区页面）
INSERT INTO user_review (id, product_id, user_name, rating, content, created_at, lang)
VALUES
  (1, 1, '用户A', 5, '产品质量很好，口感出色，续航给力！', NOW(), 'zh'),
  (2, 1, '用户B', 5, '客服服务态度很好，物流速度快', NOW(), 'zh'),
  (3, 2, '用户C', 5, '主机性能稳定，做工精细', NOW(), 'zh');

-- 常见问题（技术支持页面）
INSERT INTO faq (id, site_id, question, answer, category, sort_order, lang)
VALUES
  (1, 1, '如何正确使用和保养设备？',
   '请按照产品说明书操作，定期清洁设备，及时更换雾化芯，使用原装充电器充电。',
   'usage', 1, 'zh'),

  (2, 1, '设备无法开机怎么办？',
   '请先检查电池是否有电，尝试充电后再开机。如果问题依然存在，请联系客服。',
   'troubleshooting', 2, 'zh'),

  (3, 1, '雾化芯多久需要更换？',
   '一般建议1-2周更换一次，具体取决于使用频率和烟油类型。当出现焦味或口感变差时应及时更换。',
   'maintenance', 3, 'zh'),

  (4, 1, '设备可以带上飞机吗？',
   '根据航空安全规定，电子烟设备必须随身携带，不能托运。烟油容量不得超过100ml。具体规定请咨询航空公司。',
   'travel', 4, 'zh');

-- 下载资源（技术支持页面）
INSERT INTO download_resource (id, site_id, title, description, file_url, file_type, lang)
VALUES
  (1, 1, 'Pasito III 用户手册', 'PDF格式，中文版', '/static/downloads/pasito3-manual-zh.pdf', 'pdf', 'zh'),
  (2, 1, 'Naboo 用户手册', 'PDF格式，中文版', '/static/downloads/naboo-manual-zh.pdf', 'pdf', 'zh'),
  (3, 1, 'Smoant 产品保修卡', 'PDF格式', '/static/downloads/warranty-card-zh.pdf', 'pdf', 'zh');

-- 质保政策
INSERT INTO warranty_policy (id, site_id, title, content, lang)
VALUES
  (1, 1, '质保政策',
   '<p>我们为所有产品提供 <strong>6个月质保服务</strong>，从购买日期起计算。</p><ul><li>质保期内因产品质量问题导致的故障，免费维修或更换</li><li>人为损坏、私自拆机或改装不在质保范围内</li><li>申请质保需提供有效购买凭证</li><li>质保不包括正常损耗部件（如雾化芯、烟嘴等）</li></ul>',
   'zh');

-- 备注：
-- 1. 在实际项目中，时间戳字段应使用数据库的 DATETIME 或 TIMESTAMP 类型
-- 2. 图片路径应根据实际项目的图片存储位置调整
-- 3. 需要根据 Spring Boot 项目的实际表结构调整字段名称
-- 4. 建议添加索引提升查询性能
-- 5. 敏感信息（如电话、邮箱）应在正式部署前替换为真实数据
