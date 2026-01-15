// 主要交互功能
document.addEventListener('DOMContentLoaded', function() {
  // 移动端菜单切换
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      this.textContent = navMenu.classList.contains('active') ? '✕' : '☰';
    });
  }

  // 点击导航链接时关闭移动菜单
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        navMenu.classList.remove('active');
        if (mobileMenuToggle) {
          mobileMenuToggle.textContent = '☰';
        }
      }
    });
  });

  // 语言切换
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const lang = this.dataset.lang;
      i18n.setLanguage(lang);
    });
  });

  // 平滑滚动
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href !== '#top') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          const offset = 70;
          const targetPosition = target.offsetTop - offset;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // 滚动时导航栏效果
  let lastScroll = 0;
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
      navbar.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
    } else {
      navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    }

    lastScroll = currentScroll;

    // 显示/隐藏返回顶部按钮
    const backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
      if (currentScroll > 300) {
        backToTop.classList.add('show');
      } else {
        backToTop.classList.remove('show');
      }
    }
  });

  // 返回顶部功能
  const backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // 产品卡片点击 - 只在点击卡片空白区域时跳转
  document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', function(e) {
      if (e.target.tagName === 'A' || e.target.closest('a')) {
        return;
      }

      const productId = this.dataset.productId;
      const lang = window.location.pathname.split('/')[1] || 'zh';
      if (productId) {
        window.location.href = `/${lang}/products/${productId}`;
      }
    });
  });

  // 添加滚动动画
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // 观察所有产品卡片和关于卡片
  document.querySelectorAll('.product-card, .about-card').forEach(el => {
    observer.observe(el);
  });

  // 表单验证
  const contactForm = document.querySelector('#contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();

      const name = this.querySelector('[name="name"]').value;
      const company = this.querySelector('[name="company"]').value;
      const email = this.querySelector('[name="email"]').value;
      const phone = this.querySelector('[name="phone"]').value;
      const message = this.querySelector('[name="message"]').value;

      if (!name || !company || !email || !phone || !message) {
        alert(i18n.currentLang === 'zh' ? '请填写所有必填字段' : 'Please fill in all required fields');
        return;
      }

      if (!isValidEmail(email)) {
        alert(i18n.currentLang === 'zh' ? '请输入有效的邮箱地址' : 'Please enter a valid email address');
        return;
      }

      // 提交表单数据
      const formData = new FormData(this);

      fetch(this.action, {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          alert(i18n.currentLang === 'zh' ? '询价已提交，我们会尽快联系您！' : 'Inquiry submitted! We will contact you soon!');
          this.reset();
        } else {
          alert(i18n.currentLang === 'zh' ? '提交失败，请稍后重试' : 'Submission failed, please try again later');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert(i18n.currentLang === 'zh' ? '提交失败，请稍后重试' : 'Submission failed, please try again later');
      });
    });
  }

  // 邮箱验证函数
  function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  // 产品详情页：获取URL参数
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');

  if (productId && window.location.pathname.includes('product-detail')) {
    loadProductDetail(productId);
  }
});

// 加载产品详情
function loadProductDetail(productId) {
  // 示例产品数据
  const products = {
    '1': {
      name: { zh: '智能设备 Pro', en: 'Smart Device Pro' },
      price: '$299',
      description: {
        zh: '这是一款革命性的智能设备，集成了最新的技术创新，为用户提供卓越的使用体验。',
        en: 'This is a revolutionary smart device that integrates the latest technological innovations to provide users with an excellent experience.'
      },
      specs: {
        zh: {
          '尺寸': '150 x 75 x 8mm',
          '重量': '180g',
          '材质': '航空级铝合金',
          '颜色': '银色/黑色/金色',
          '保修': '2年'
        },
        en: {
          'Dimensions': '150 x 75 x 8mm',
          'Weight': '180g',
          'Material': 'Aviation-grade aluminum',
          'Color': 'Silver/Black/Gold',
          'Warranty': '2 years'
        }
      },
      features: {
        zh: ['高性能处理器', '长续航电池', '精美外观设计', '智能AI助手'],
        en: ['High-performance processor', 'Long-lasting battery', 'Elegant design', 'Smart AI assistant']
      }
    },
    '2': {
      name: { zh: '便携设备 Mini', en: 'Portable Device Mini' },
      price: '$199',
      description: {
        zh: '小巧便携，功能强大。完美适合日常使用和随身携带。',
        en: 'Compact and portable, yet powerful. Perfect for daily use and on-the-go.'
      },
      specs: {
        zh: {
          '尺寸': '120 x 60 x 10mm',
          '重量': '120g',
          '材质': '聚碳酸酯',
          '颜色': '白色/蓝色',
          '保修': '1年'
        },
        en: {
          'Dimensions': '120 x 60 x 10mm',
          'Weight': '120g',
          'Material': 'Polycarbonate',
          'Color': 'White/Blue',
          'Warranty': '1 year'
        }
      },
      features: {
        zh: ['轻量化设计', '快速充电', '防水防尘', '一键操作'],
        en: ['Lightweight design', 'Fast charging', 'Water and dust resistant', 'One-touch operation']
      }
    },
    '3': {
      name: { zh: '专业设备 Ultra', en: 'Professional Device Ultra' },
      price: '$499',
      description: {
        zh: '专为专业人士打造，提供最强大的性能和最全面的功能。',
        en: 'Designed for professionals, offering the most powerful performance and comprehensive features.'
      },
      specs: {
        zh: {
          '尺寸': '180 x 90 x 7mm',
          '重量': '220g',
          '材质': '钛合金',
          '颜色': '深空灰',
          '保修': '3年'
        },
        en: {
          'Dimensions': '180 x 90 x 7mm',
          'Weight': '220g',
          'Material': 'Titanium alloy',
          'Color': 'Space Gray',
          'Warranty': '3 years'
        }
      },
      features: {
        zh: ['旗舰级性能', '专业级摄像', '5G连接', '无线充电'],
        en: ['Flagship performance', 'Professional camera', '5G connectivity', 'Wireless charging']
      }
    }
  };

  const product = products[productId];
  const lang = i18n.currentLang;

  if (product) {
    document.querySelector('.product-detail-info h1').textContent = product.name[lang];
    document.querySelector('.product-detail-info .price').textContent = product.price;
    document.querySelector('.product-detail-info .description').textContent = product.description[lang];

    // 更新规格
    const specsList = document.querySelector('.specs-list');
    if (specsList) {
      specsList.innerHTML = '';
      for (const [key, value] of Object.entries(product.specs[lang])) {
        const li = document.createElement('li');
        li.innerHTML = `<span class="spec-label">${key}</span><span class="spec-value">${value}</span>`;
        specsList.appendChild(li);
      }
    }
  }
}

// 页面切换时的淡入效果
window.addEventListener('load', function() {
  document.body.style.opacity = '0';
  setTimeout(() => {
    document.body.style.transition = 'opacity 0.3s ease';
    document.body.style.opacity = '1';
  }, 100);
});

// Banner轮播功能
class BannerSlider {
  constructor() {
    this.currentSlide = 0;
    this.slides = document.querySelectorAll('.banner-slide');
    this.dots = document.querySelectorAll('.banner-dot');
    this.prevBtn = document.querySelector('.banner-arrow-left');
    this.nextBtn = document.querySelector('.banner-arrow-right');
    this.autoPlayInterval = null;

    if (this.slides.length > 0) {
      this.init();
    }
  }

  init() {
    // 显示第一张幻灯片
    this.showSlide(0);

    // 绑定点击事件
    if (this.prevBtn) {
      this.prevBtn.addEventListener('click', () => this.prevSlide());
    }

    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', () => this.nextSlide());
    }

    // 绑定导航点击事件
    this.dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        this.showSlide(index);
        this.resetAutoPlay();
      });
    });

    // 开始自动播放
    this.startAutoPlay();

    // 鼠标悬停时暂停自动播放
    const bannerSlider = document.querySelector('.banner-slider');
    if (bannerSlider) {
      bannerSlider.addEventListener('mouseenter', () => this.stopAutoPlay());
      bannerSlider.addEventListener('mouseleave', () => this.startAutoPlay());
    }

    // 键盘导航
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        this.prevSlide();
        this.resetAutoPlay();
      } else if (e.key === 'ArrowRight') {
        this.nextSlide();
        this.resetAutoPlay();
      }
    });

    // 触摸滑动支持
    this.addTouchSupport();
  }

  showSlide(index) {
    // 移除所有active类
    this.slides.forEach(slide => slide.classList.remove('active'));
    this.dots.forEach(dot => dot.classList.remove('active'));

    // 添加active类到当前幻灯片
    this.currentSlide = index;
    if (this.slides[index]) {
      this.slides[index].classList.add('active');
    }
    if (this.dots[index]) {
      this.dots[index].classList.add('active');
    }
  }

  nextSlide() {
    let next = this.currentSlide + 1;
    if (next >= this.slides.length) {
      next = 0;
    }
    this.showSlide(next);
  }

  prevSlide() {
    let prev = this.currentSlide - 1;
    if (prev < 0) {
      prev = this.slides.length - 1;
    }
    this.showSlide(prev);
  }

  startAutoPlay() {
    this.autoPlayInterval = setInterval(() => {
      this.nextSlide();
    }, 5000); // 每5秒切换一次
  }

  stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
      this.autoPlayInterval = null;
    }
  }

  resetAutoPlay() {
    this.stopAutoPlay();
    this.startAutoPlay();
  }

  addTouchSupport() {
    const bannerSlider = document.querySelector('.banner-slider');
    if (!bannerSlider) return;

    let touchStartX = 0;
    let touchEndX = 0;

    bannerSlider.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, false);

    bannerSlider.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      this.handleSwipe();
    }, false);

    const handleSwipe = () => {
      const swipeThreshold = 50;
      const diff = touchStartX - touchEndX;

      if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
          // 向左滑动
          this.nextSlide();
        } else {
          // 向右滑动
          this.prevSlide();
        }
        this.resetAutoPlay();
      }
    };

    this.handleSwipe = handleSwipe;
  }
}

// 初始化Banner轮播
document.addEventListener('DOMContentLoaded', function() {
  const bannerSlider = new BannerSlider();
});
