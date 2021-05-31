export default (vue) => {
  // 获取虚拟模块 vue-dynamic-modules
  let dynamicModules = require('vue-dynamic-modules')

  for (const module of dynamicModules) {
    module.keys().forEach(key => {
      const { Router, Store } = module(key).default
      // 动态添加 router
      vue.$router.addRoutes(Router)

      // 动态添加 store
      Object.keys(Store).forEach(k => {
          vue.$store.registerModule(k, Store[k])
      })
    })
  }
}
