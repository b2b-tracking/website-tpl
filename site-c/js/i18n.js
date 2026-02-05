// 国际化管理
class I18n {
  constructor() {
    this.currentLang = 'zh';
    this.translations = null;
  }

  async init() {
    try {
      // 从 URL 路径中获取语言，如 /zh/ 或 /en/
      const pathParts = window.location.pathname.split('/').filter(p => p);
      const lang = pathParts[0] || 'zh';

      // 验证语言是否有效
      if (lang === 'zh' || lang === 'en') {
        this.currentLang = lang;
      } else {
        this.currentLang = 'zh';
      }

      // 加载翻译文件
      const response = await fetch(`/data/translations.json`);
      this.translations = await response.json();

      // 设置语言
      this.setLanguage(this.currentLang);

      console.log(`✅ Language initialized: ${this.currentLang}`);
    } catch (error) {
      console.error('Failed to load translations:', error);
    }
  }

  setLanguage(lang) {
    this.currentLang = lang;
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
      const btnLang = btn.getAttribute('data-lang');
      if (btnLang === this.currentLang) {
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
