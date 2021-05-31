const fs = require('fs')
const path = require('path')
const VirtualModulePlugin = require('webpack-virtual-modules')

const isProd = process.env.NODE_ENV === 'production'

// 共有多少模块
const getModulesCount = fs.readdirSync('./src/modules/').length
// 需要编译的模块
const modules = process.env.npm_config_module || ''
// 需要生成的虚拟模块
let dynamicModules = []

if (modules && !isProd) {
  // 开发环境并且指定编译模块
  dynamicModules = modules.split(',').map((module, index) => {
    console.log(`编译模块(${index + 1})：${module}\n`)
    // 判断编译的模块是否存在
    fs.access(path.join(`./src/modules/${module}/index.js`), (err) => {
      if (err) {
        console.log(`\n！！！警告：${module}模块不存在！！！\n`)
        // 退出当前进程： 0 正常退出，1 非正常退出
        process.exit(0)
      }
    })
    // require.context(directory, useSubdirectories = false, regExp = /^\.\//);
    //  - directory：指定要打包的目录；
    //  - useSubdirectories ：是否搜寻子目录；
    //  - regExp ：匹配的正则
    return `require.context('@modules/${module}', false, /index\.js$/)`
  })
} else {
  console.log(`全部 ${getModulesCount} 个模块 \n`)
  // 注意：这里的 ../src/modules/ 路径是以 node_module 为目标
  dynamicModules.push(`require.context('../src/modules/', true, /index\.js$/)`)
}

// 创建虚拟模块
const virtualModules = new VirtualModulePlugin({
  'node_modules/vue-dynamic-modules.js': `module.exports = [${dynamicModules.join(',')}];`
})

module.exports = {
  configureWebpack: (config) => {
    config.plugins.push(virtualModules)
    if (isProd) {
      // 生产环境
    } else {
      config.resolve = {
        extensions: ['.js', '.vue', '.json'],
        alias: {
          '@': path.join(__dirname, './src'),
          '@modules': path.join(__dirname, './src/modules'),
          'assets': path.join(__dirname, './src/assets')
        }
      }
      config.optimization = {
        removeAvailableModules: false
      }
    }
  }
}
