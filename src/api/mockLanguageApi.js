import delay from './delay';

const languages = [
  { id: 'en-AU', des: 'English(AU)' },
  { id: 'zh-CN', des: '中文（简体）' }
];

class LanguageApi {
  static getAllLanguages() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign([], languages));
      }, delay);
    });
  }
}

export default LanguageApi;
