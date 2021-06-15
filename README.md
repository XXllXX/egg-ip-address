# egg-ip-address

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-ip-address.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-ip-address
[travis-image]: https://img.shields.io/travis/eggjs/egg-ip-address.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-ip-address
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-ip-address.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-ip-address?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-ip-address.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-ip-address
[snyk-image]: https://snyk.io/test/npm/egg-ip-address/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-ip-address
[download-image]: https://img.shields.io/npm/dm/egg-ip-address.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-ip-address

<!--
Description here.
-->

## 开启插件

```js
// config/plugin.js
exports.ipAddress = {
  enable: true,
  package: 'egg-ip-address',
};
```

## 使用场景

- 根据ip获取ip所在的城市。

## 详细使用


```js
// {app_root}/app/controller/home.js
const Controller = require('egg').Controller
class HomeController extends Controller {

  ip(){
    console.log(this.ctx.ipAddress)
    this.ctx.body = { ...this.ctx.ipAddress}
  }

}
```

```js
// {app_root}/app/router.js.js
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  const {
    router,
    controller,
    config: { apiPrefix }
  } = app

  router.get('/ip', controller.home.ip)
}


## 提问交流

请到 [egg issues](https://github.com/XXllXX/egg/issues) 异步交流。

## License

[MIT](LICENSE)
