// 国际化管理
class I18n {
  constructor() {
    this.currentLang = localStorage.getItem('language') || 'zh';
    this.translations = null;
    this.onLangChange = null; // 语言切换后的回调，供外部注册
  }

  async init() {
    try {
      const response = await fetch('data/translations.json');
      this.translations = await response.json();
      this.setLanguage(this.currentLang);
    } catch (error) {
      console.error('Failed to load translations:', error);
    }
  }

  setLanguage(lang) {
    this.currentLang = lang;
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    this.updatePageText();
    this.updateActiveButton();
    if (typeof this.onLangChange === 'function') {
      this.onLangChange(lang);
    }
  }

  translate(key) {
    if (!this.translations) return key;
    const keys = key.split('.');
    let value = this.translations[this.currentLang];
    for (const k of keys) {
      if (value && value[k] !== undefined) {
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
      if (btn.getAttribute('data-lang') === this.currentLang) {
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

if (typeof module !== 'undefined' && module.exports) {
  module.exports = i18n;
}
