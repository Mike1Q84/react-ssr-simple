import delay from './delay';

const urls = [
  '/en-AU/home',
  '/zh-CN/home',
  '/en-AU/about',
  '/zh-CN/about',
  '/en-AU/404',
  '/zh-CN/404',
  '/en-AU/services',
  '/zh-CN/services',
  '/en-AU/service/devops',
  '/zh-CN/service/devops',
  '/en-AU/service/sysadmin',
  '/zh-CN/service/sysadmin',
  '/en-AU/service/webdesign',
  '/zh-CN/service/webdesign'
];

class UrlApi {
  static getAllUrls() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign([], urls));
      }, delay);
    });
  }
}

export default UrlApi;
