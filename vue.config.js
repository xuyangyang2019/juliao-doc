// vue.config.js
const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  // 使用运行时编译器的 Vue 构建版本
  runtimeCompiler: true,

  // 开启生产环境SourceMap，设为false打包时不生成.map文件
  productionSourceMap: false,

  // 关闭ESLint，如果你需要使用ESLint，把lintOnSave设为true即可
  lintOnSave: false,

  devServer: {
    open: true, // 是否自动打开浏览器页面
    host: '0.0.0.0', // 指定使用一个 host，默认是 localhost
    port: 8080, // 端口地址
    https: false, // 使用https提供服务
    // 这里写你调用接口的基础路径，来解决跨域，如果设置了代理，那你本地开发环境的axios的baseUrl要写为 '' ，即空字符串
    proxy: 'http://api.zhuishushenqi.com'
  },

  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
  },

  configureWebpack: () => {
    // 生产环境打包分析体积
    if (process.env.NODE_ENV === 'production') {
      return {
        plugins: [new BundleAnalyzerPlugin()]
      }
    }
  },
  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      sass: {
        // @/ 是 src/ 的别名
        // 所以这里假设你有 `src/variables.sass` 这个文件
        // 注意：在 sass-loader v7 中，这个选项名是 "data"
        prependData: `~@import "@/style/mixin.scss";
                    @import "~@/style/_var.scss";
                    `
      },
      // 默认情况下 `sass` 选项会同时对 `sass` 和 `scss` 语法同时生效
      // 因为 `scss` 语法在内部也是由 sass-loader 处理的
      // 但是在配置 `data` 选项的时候
      // `scss` 语法会要求语句结尾必须有分号，`sass` 则要求必须没有分号
      // 在这种情况下，我们可以使用 `scss` 选项，对 `scss` 语法进行单独配置
      scss: {
        prependData: `@import "@/style/mixin.scss";
        @import "@/style/_var.scss";`
      }
    }
  }
}
