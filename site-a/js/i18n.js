// 国际化管理
class I18n {
  constructor() {
    this.currentLang = localStorage.getItem('language') || 'zh';
    this.translations = null;
  }

  async init() {
    try {
      const lang = window.location.pathname.split('/')[1] || 'zh';
      const response = await fetch(`/${lang}/data/translations.json`);
      this.translations = await response.json();
      this.setLanguage(this.currentLang);
    } catch (error) {
      console.error('Failed to load translations:', error);
    }
  }

  setLanguage(lang) {
    this.currentLang = lang;
    localStorage.setItem('language', lang);
    this.updatePageText();
    this.updateActiveButton();
    document.documentElement.lang = lang;
  }

  translate(key) {
    const keys = key.split('.');
    let value = this.translations[this.currentLang];

    for (const k of keys) {
      if (value && value[k]) {
        value = value[k];
      } else {
        return key;
      }
    }

    return value;
  }

  updatePageText() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      const translation = this.translate(key);

      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.placeholder = translation;
      } else {
        element.textContent = translation;
      }
    });
  }

  updateActiveButton() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.remove('active');
      if (btn.dataset.lang === this.currentLang) {
        btn.classList.add('active');
      }
    });
  }
}

// 创建全局实例
const i18n = new I18n();

// 页面加载时初始化
document.addEventListener('DOMContentLoaded', () => {
  i18n.init();
});

// 导出供其他模块使用
if (typeof module !== 'undefined' && module.exports) {
  module.exports = i18n;
}
