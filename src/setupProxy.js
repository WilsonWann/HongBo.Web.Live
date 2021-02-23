const { createProxyMiddleware } = require("http-proxy-middleware");

const proxySelector = {
  api: {
    path: "/service/API",
    target: "http://uat-pc-hb.fastbet108.com",
  },
  png: {
    path: "**/*.png",
    target: "http://uat-files-hb.fastbet108.com",
  },
  jpg: {
    path: "**/*.jpg",
    target: "http://uat-files-hb.fastbet108.com",
  },
  js: {
    path: "**/*.js",
    target: "http://uat-files-hb.fastbet108.com",
  },
  css: {
    path: "**/*.css",
    target: "http://uat-files-hb.fastbet108.com",
  },
};

const createProxy = (target) =>
  createProxyMiddleware({
    target: target,
    changeOrigin: true,
    logLevel: "debug",
  });
const createCDNProxy = (target) =>
  createProxyMiddleware({
    target: target,
    changeOrigin: true,
    logLevel: "debug",
    pathRewrite: {
      "^/assets/images/Android": "/assets_newPC/images/Android",
    },
  });

module.exports = (app) => {
  console.log("proxySelector: ", proxySelector);
  app.use(proxySelector.api.path, createProxy(proxySelector.api.target));
  app.use(proxySelector.png.path, createCDNProxy(proxySelector.png.target));
  app.use(proxySelector.jpg.path, createCDNProxy(proxySelector.jpg.target));
  return app;
};
