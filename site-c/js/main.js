// ===== Swiper 轮播初始化 =====
document.addEventListener('DOMContentLoaded', function() {

  // 主视觉轮播
  if (document.querySelector('.hero-swiper')) {
    new Swiper('.hero-swiper', {
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      speed: 800,
    });
  }

  // 产品轮播
  if (document.querySelector('.products-swiper')) {
    new Swiper('.products-swiper', {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: false,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.products-swiper .swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.products-swiper .swiper-button-next',
        prevEl: '.products-swiper .swiper-button-prev',
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },
    });
  }

  // ===== 返回顶部按钮 =====
  const backToTopBtn = document.getElementById('backToTop');

  if (backToTopBtn) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    });

    backToTopBtn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // ===== 移动端菜单切换 =====
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mainNav = document.getElementById('mainNav');

  if (mobileMenuBtn && mainNav) {
    mobileMenuBtn.addEventListener('click', function() {
      this.classList.toggle('active');
      mainNav.classList.toggle('active');
      document.body.classList.toggle('menu-open');
    });

    // 点击导航链接后关闭菜单
    const navLinks = mainNav.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        mainNav.classList.remove('active');
        document.body.classList.remove('menu-open');
      });
    });
  }

  // ===== 头部滚动效果 =====
  const header = document.getElementById('siteHeader');
  let lastScroll = 0;

  if (header) {
    window.addEventListener('scroll', function() {
      const currentScroll = window.scrollY;

      // 添加阴影效果
      if (currentScroll > 10) {
        header.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
      } else {
        header.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
      }

      lastScroll = currentScroll;
    });
  }

  // ===== 数字滚动动画 =====
  const statNumbers = document.querySelectorAll('.stat-number');
  let hasAnimated = false;

  function animateNumbers() {
    if (hasAnimated) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const finalValue = parseInt(target.getAttribute('data-count'));
          const duration = 2000; // 2秒
          const step = finalValue / (duration / 16); // 60fps

          let currentValue = 0;

          const counter = setInterval(() => {
            currentValue += step;
            if (currentValue >= finalValue) {
              currentValue = finalValue;
              clearInterval(counter);
              hasAnimated = true;
            }

            // 格式化数字
            if (finalValue >= 1000000) {
              target.textContent = Math.floor(currentValue / 10000) + '万+';
            } else if (finalValue >= 1000) {
              target.textContent = Math.floor(currentValue).toLocaleString() + '+';
            } else if (finalValue <= 100) {
              target.textContent = Math.floor(currentValue) + '%';
            } else {
              target.textContent = Math.floor(currentValue) + '+';
            }
          }, 16);

          observer.unobserve(target);
        }
      });
    }, { threshold: 0.5 });

    statNumbers.forEach(stat => observer.observe(stat));
  }

  if (statNumbers.length > 0) {
    animateNumbers();
  }

  // ===== 平滑滚动到锚点 =====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#' || href === '#top') return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const headerHeight = header ? header.offsetHeight : 70;
        const targetPosition = target.offsetTop - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ===== 表单提交处理 =====
  const inquiryForm = document.querySelector('.inquiry-form');

  if (inquiryForm) {
    inquiryForm.addEventListener('submit', function(e) {
      // 表单验证
      const requiredFields = this.querySelectorAll('[required]');
      let isValid = true;

      requiredFields.forEach(field => {
        if (!field.value.trim()) {
          isValid = false;
          field.style.borderColor = '#ef4444';
        } else {
          field.style.borderColor = '';
        }
      });

      if (!isValid) {
        e.preventDefault();
        alert('请填写所有必填项');
        return false;
      }

      // 邮箱验证
      const emailField = this.querySelector('[type="email"]');
      if (emailField && emailField.value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailField.value)) {
          e.preventDefault();
          emailField.style.borderColor = '#ef4444';
          alert('请输入有效的邮箱地址');
          return false;
        }
      }

      // 可以在这里添加 AJAX 提交逻辑
      // e.preventDefault();
      // submitFormViaAjax(this);
    });

    // 输入时清除错误样式
    const formInputs = inquiryForm.querySelectorAll('.form-input, .form-textarea');
    formInputs.forEach(input => {
      input.addEventListener('input', function() {
        this.style.borderColor = '';
      });
    });
  }

  // ===== 新闻卡片点击处理 =====
  const newsCards = document.querySelectorAll('.news-card');
  newsCards.forEach(card => {
    card.addEventListener('click', function(e) {
      // 如果点击的是链接，让链接自己处理
      if (e.target.tagName === 'A') return;

      // 否则触发卡片内的链接
      const link = this.querySelector('.news-link');
      if (link) {
        window.location.href = link.href;
      }
    });
  });

  // ===== 产品卡片图片懒加载 =====
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
          }
          observer.unobserve(img);
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }

  // ===== 页面加载动画 =====
  window.addEventListener('load', function() {
    document.body.classList.add('loaded');
  });

  // ===== 控制台信息 =====
  console.log('%c网站模板已加载', 'color: #2563eb; font-size: 16px; font-weight: bold;');
  console.log('%cPowered by B2B Tracking System', 'color: #6b7280; font-size: 12px;');
});

// ===== 实用工具函数 =====

// 防抖函数
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// 节流函数
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// 元素是否在视口中
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// 获取元素距离文档顶部的距离
function getOffsetTop(element) {
  let offsetTop = 0;
  while (element) {
    offsetTop += element.offsetTop;
    element = element.offsetParent;
  }
  return offsetTop;
}
