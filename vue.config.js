const path = require('path')
const resolve = (dir) => path.join(__dirname, dir)
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  pluginOptions: {
    windicss: {
      // 具体配置请查看 https://github.com/windicss/vite-plugin-windicss/blob/main/packages/plugin-utils/src/options.ts
    },
  },
  configureWebpack: {
    name: 'vue Element Admin',
    resolve: {
      alias: {
        '@': resolve('src'),
      },
    },
  },
  transpileDependencies: true,
  lintOnSave: false, //关闭语法检查
})
