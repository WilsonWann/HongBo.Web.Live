const { createProxyMiddleware } = require("http-proxy-middleware");

const proxySelector = [
  {
    path: "/service/API",
    target: "http://uat-pc-hb.fastbet108.com",
  },
  {
    path: "**/*.png",
    target: "http://uat-files-hb.fastbet108.com",
  },
  {
    path: "**/*.jpg",
    target: "http://uat-files-hb.fastbet108.com",
  },
  // {
  //     path: '**/*.js',
  //     target: 'http://uat-files-hb.fastbet108.com'
  // },
  // {
  //     path: '**/*.css',
  //     target: 'http://uat-files-hb.fastbet108.com'
  // },
];

const createProxy = (target) =>
  createProxyMiddleware({
    target: target,
    changeOrigin: true,
    logLevel: "debug",
  });

module.exports = (app) =>
  proxySelector.forEach((proxy) =>
    app.use(proxy.path, createProxy(proxy.target))
  );
