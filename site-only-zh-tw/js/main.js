// 主要交互功能
document.addEventListener('DOMContentLoaded', function() {
  // UTC時間轉換爲本地時間
  convertUTCDates();

  // 移動端菜單切換
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      this.textContent = navMenu.classList.contains('active') ? '✕' : '☰';
    });
  }

  // 標記當前頁面對應的導航項爲選中狀態
  const currentPath = window.location.pathname.replace(/\/$/, '');
  document.querySelectorAll('.nav-link').forEach(link => {
    const linkPath = link.getAttribute('href').replace(/\/$/, '');
    if (linkPath && currentPath.endsWith(linkPath)) {
      link.classList.add('active');
    }
  });

  // 點擊導航鏈接時關閉移動菜單
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

  // 語言切換
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const lang = this.dataset.lang;
      i18n.setLanguage(lang);
    });
  });

  // 平滑滾動
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

  // 滾動時導航欄效果
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

    // 顯示/隱藏返回頂部按鈕
    const backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
      if (currentScroll > 300) {
        backToTop.classList.add('show');
      } else {
        backToTop.classList.remove('show');
      }
    }
  });

  // 返回頂部功能
  const backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // 產品卡片點擊 - 只在點擊卡片空白區域時跳轉
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

  // 添加滾動動畫
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

  // 觀察所有產品卡片和關於卡片
  document.querySelectorAll('.product-card, .about-card').forEach(el => {
    observer.observe(el);
  });

  // 表單驗證
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
        alert(i18n.currentLang === 'zh' ? '請填寫所有必填字段' : 'Please fill in all required fields');
        return;
      }

      if (!isValidEmail(email)) {
        alert(i18n.currentLang === 'zh' ? '請輸入有效的郵箱地址' : 'Please enter a valid email address');
        return;
      }

      const formData = new FormData(this);

      fetch(this.action, {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          alert(i18n.currentLang === 'zh' ? '詢價已提交，我們會盡快聯繫您！' : 'Inquiry submitted! We will contact you soon!');
          this.reset();
        } else {
          alert(i18n.currentLang === 'zh' ? '提交失敗，請稍後重試' : 'Submission failed, please try again later');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert(i18n.currentLang === 'zh' ? '提交失敗，請稍後重試' : 'Submission failed, please try again later');
      });
    });
  }

  // 郵箱驗證函數
  function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  // 產品詳情頁：獲取URL參數
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');

  if (productId && window.location.pathname.includes('product-detail')) {
    loadProductDetail(productId);
  }
});

// 加載產品詳情
function loadProductDetail(productId) {
  // 示例產品數據
  const products = {
    '1': {
      name: { zh: '智能設備 Pro', en: 'Smart Device Pro' },
      price: '$299',
      description: {
        zh: '這是一款革命性的智能設備，集成了最新的技術創新，爲用戶提供卓越的使用體驗。',
        en: 'This is a revolutionary smart device that integrates the latest technological innovations to provide users with an excellent experience.'
      },
      specs: {
        zh: {
          '尺寸': '150 x 75 x 8mm',
          '重量': '180g',
          '材質': '航空級鋁合金',
          '顏色': '銀色/黑色/金色',
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
        zh: ['高性能處理器', '長續航電池', '精美外觀設計', '智能AI助手'],
        en: ['High-performance processor', 'Long-lasting battery', 'Elegant design', 'Smart AI assistant']
      }
    },
    '2': {
      name: { zh: '便攜設備 Mini', en: 'Portable Device Mini' },
      price: '$199',
      description: {
        zh: '小巧便攜，功能強大。完美適合日常使用和隨身攜帶。',
        en: 'Compact and portable, yet powerful. Perfect for daily use and on-the-go.'
      },
      specs: {
        zh: {
          '尺寸': '120 x 60 x 10mm',
          '重量': '120g',
          '材質': '聚碳酸酯',
          '顏色': '白色/藍色',
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
        zh: ['輕量化設計', '快速充電', '防水防塵', '一鍵操作'],
        en: ['Lightweight design', 'Fast charging', 'Water and dust resistant', 'One-touch operation']
      }
    },
    '3': {
      name: { zh: '專業設備 Ultra', en: 'Professional Device Ultra' },
      price: '$499',
      description: {
        zh: '專爲專業人士打造，提供最強大的性能和最全面的功能。',
        en: 'Designed for professionals, offering the most powerful performance and comprehensive features.'
      },
      specs: {
        zh: {
          '尺寸': '180 x 90 x 7mm',
          '重量': '220g',
          '材質': '鈦合金',
          '顏色': '深空灰',
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
        zh: ['旗艦級性能', '專業級攝像', '5G連接', '無線充電'],
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

    // 更新規格
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

// 頁面切換時的淡入效果
window.addEventListener('load', function() {
  document.body.style.opacity = '0';
  setTimeout(() => {
    document.body.style.transition = 'opacity 0.3s ease';
    document.body.style.opacity = '1';
  }, 100);
});

// Banner輪播功能
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
    // 顯示第一張幻燈片
    this.showSlide(0);

    // 綁定點擊事件
    if (this.prevBtn) {
      this.prevBtn.addEventListener('click', () => this.prevSlide());
    }

    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', () => this.nextSlide());
    }

    // 綁定導航點擊事件
    this.dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        this.showSlide(index);
        this.resetAutoPlay();
      });
    });

    // 開始自動播放
    this.startAutoPlay();

    // 鼠標懸停時暫停自動播放
    const bannerSlider = document.querySelector('.banner-slider');
    if (bannerSlider) {
      bannerSlider.addEventListener('mouseenter', () => this.stopAutoPlay());
      bannerSlider.addEventListener('mouseleave', () => this.startAutoPlay());
    }

    // 鍵盤導航
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        this.prevSlide();
        this.resetAutoPlay();
      } else if (e.key === 'ArrowRight') {
        this.nextSlide();
        this.resetAutoPlay();
      }
    });

    // 觸摸滑動支持
    this.addTouchSupport();
  }

  showSlide(index) {
    // 移除所有active類
    this.slides.forEach(slide => slide.classList.remove('active'));
    this.dots.forEach(dot => dot.classList.remove('active'));

    // 添加active類到當前幻燈片
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
    }, 5000); // 每5秒切換一次
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
          // 向左滑動
          this.nextSlide();
        } else {
          // 向右滑動
          this.prevSlide();
        }
        this.resetAutoPlay();
      }
    };

    this.handleSwipe = handleSwipe;
  }
}

// 初始化Banner輪播
document.addEventListener('DOMContentLoaded', function() {
  const bannerSlider = new BannerSlider();
});

// UTC時間轉換爲本地時間
function convertUTCDates() {
  document.querySelectorAll('.utc-date').forEach(element => {
    const utcDateStr = element.getAttribute('data-utc');
    const format = element.getAttribute('data-format') || 'yyyy-MM-dd';

    if (utcDateStr) {
      try {
        const utcDate = new Date(utcDateStr);
        const localDateStr = formatDate(utcDate, format);
        element.textContent = localDateStr;
      } catch (error) {
        console.error('Date conversion error:', error);
      }
    }
  });
}

function formatDate(date, format) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  if (format === 'yyyy.MM.dd') {
    return `${year}.${month}.${day}`;
  }

  return `${year}-${month}-${day}`;
}
