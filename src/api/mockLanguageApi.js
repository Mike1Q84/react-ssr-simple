import delay from './delay';

const languages = [
  { id: 'en-AU', name: 'English(AU)' },
  { id: 'zh-CN', name: '中文（简体）' }
];

class LanguageApi {
  static getAllLanguages() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign([], languages));
      }, delay);
    });
  }

  static getCurrentLang(lang) {
    return new Promise((resolve) => {
      setTimeout(() => {
        // resolve(Object.assign({}, languages.find(language => language.id === lang)));
        resolve(languages.find(language => language.id === lang));
      }, delay);
    });
  }
}

export default LanguageApi;
