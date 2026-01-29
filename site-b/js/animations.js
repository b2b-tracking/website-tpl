/**
 * 滚动触发动画系统
 * 使用 Intersection Observer API 检测元素进入视口
 */

(function() {
  'use strict';

  // 动画配置
  const config = {
    threshold: 0.1, // 元素10%可见时触发
    rootMargin: '0px 0px -50px 0px' // 提前50px触发
  };

  // 创建 Intersection Observer
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      // 当元素进入视口时
      if (entry.isIntersecting) {
        // 添加 animated 类触发动画
        entry.target.classList.add('animated');

        // 可选：动画完成后停止观察（节省性能）
        // observer.unobserve(entry.target);
      } else {
        // 可选：元素离开视口时移除动画类（重复动画）
        // entry.target.classList.remove('animated');
      }
    });
  }, config);

  // 初始化动画观察器
  function initAnimations() {
    // 选择所有需要动画的元素
    const animatedElements = document.querySelectorAll(
      '.fade-in, .slide-up, .slide-left, .slide-right, .zoom-in, .zoom-out, .rotate-in, .flip-in'
    );

    // 为每个元素添加观察
    animatedElements.forEach(function(element) {
      observer.observe(element);
    });

    console.log('Animation system initialized: ' + animatedElements.length + ' elements');
  }

  // 自动为常见模块添加动画类
  function autoAddAnimations() {
    // 如果已经手动添加了动画类，则不自动添加
    const hasManualAnimations = document.querySelectorAll('.slide-up, .fade-in, .slide-left, .slide-right').length > 0;

    if (hasManualAnimations) {
      console.log('Manual animations detected, skipping auto-add');
      return;
    }

    // 产品卡片
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(function(card, index) {
      card.classList.add('slide-up');
      if (index % 3 === 1) card.classList.add('delay-200');
      if (index % 3 === 2) card.classList.add('delay-400');
    });

    // 新闻卡片
    const newsCards = document.querySelectorAll('.elementor-post, .news-card');
    newsCards.forEach(function(card, index) {
      card.classList.add('slide-up');
      if (index % 3 === 1) card.classList.add('delay-200');
      if (index % 3 === 2) card.classList.add('delay-400');
    });

    // 信息卡片
    const infoCards = document.querySelectorAll('.info-card, .contact-info-card, .inquiry-form-container');
    infoCards.forEach(function(card, index) {
      card.classList.add('fade-in', 'delay-' + (index * 200));
    });

    // 内容区块
    const contentSections = document.querySelectorAll('.content-section > *:not(.slide-up):not(.fade-in)');
    contentSections.forEach(function(section) {
      section.classList.add('fade-in');
    });

    console.log('Auto-added animations to common elements');
  }

  // 页面加载完成后初始化
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      autoAddAnimations();
      initAnimations();
    });
  } else {
    autoAddAnimations();
    initAnimations();
  }

  // 暴露重新初始化方法（用于动态加载的内容）
  window.reinitAnimations = function() {
    initAnimations();
  };

})();
