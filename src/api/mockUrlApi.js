import delay from './delay';

const urls = [
  '/en-AU/home',
  '/zh-CN/home',
  '/en-AU/about',
  '/zh-CN/about',
  '/en-AU/blogs',
  '/zh-CN/blogs',
  '/en-AU/blog',
  '/zh-CN/blog',
  '/en-AU/blog/1',
  '/zh-CN/blog/1',
  '/en-AU/blog/2',
  '/zh-CN/blog/2',
  '/en-AU/blog/3',
  '/zh-CN/blog/3',
  '/en-AU/services',
  '/zh-CN/services',
  '/en-AU/service/devops',
  '/zh-CN/service/devops',
  '/en-AU/service/sysadmin',
  '/zh-CN/service/sysadmin',
  '/en-AU/service/webdesign',
  '/zh-CN/service/webdesign',
  '/en-AU/404',
  '/zh-CN/404'
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
