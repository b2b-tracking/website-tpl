// 主要交互功能 - site-b
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

  // 返回顶部功能
  const backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });

    // 显示/隐藏返回顶部按钮
    window.addEventListener('scroll', function() {
      const currentScroll = window.pageYOffset;
      if (currentScroll > 300) {
        backToTop.classList.add('show');
      } else {
        backToTop.classList.remove('show');
      }
    });
  }

  // 产品卡片点击
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
});

// Banner 轮播功能
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
    this.showSlide(0);

    if (this.prevBtn) {
      this.prevBtn.addEventListener('click', () => this.prevSlide());
    }

    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', () => this.nextSlide());
    }

    this.dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        this.showSlide(index);
        this.resetAutoPlay();
      });
    });

    this.startAutoPlay();

    const bannerSlider = document.querySelector('.banner-slider');
    if (bannerSlider) {
      bannerSlider.addEventListener('mouseenter', () => this.stopAutoPlay());
      bannerSlider.addEventListener('mouseleave', () => this.startAutoPlay());
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        this.prevSlide();
        this.resetAutoPlay();
      } else if (e.key === 'ArrowRight') {
        this.nextSlide();
        this.resetAutoPlay();
      }
    });

    this.addTouchSupport();
  }

  showSlide(index) {
    this.slides.forEach(slide => slide.classList.remove('active'));
    this.dots.forEach(dot => dot.classList.remove('active'));

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
    }, 5000);
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

    this.handleSwipe = () => {
      const swipeThreshold = 50;
      const diff = touchStartX - touchEndX;

      if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
          this.nextSlide();
        } else {
          this.prevSlide();
        }
        this.resetAutoPlay();
      }
    };
  }
}

// 初始化Banner轮播
document.addEventListener('DOMContentLoaded', function() {
  const bannerSlider = new BannerSlider();
});
