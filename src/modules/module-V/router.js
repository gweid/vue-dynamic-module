export default [
  {
    name: 'moduleV-a',
    path: '/moduleV/a',
    component: () => import(/* webpackChunkName: "moduleV-a" */ './views/a.vue'),
    meta: { title: 'moduleV-a编译' }
  },
  {
    name: 'moduleV-b',
    path: '/moduleV/b',
    component: () => import(/* webpackChunkName: "moduleV-b" */ './views/b.vue'),
    meta: { title: 'moduleV-b编译' }
  },
  {
    name: 'moduleV-c',
    path: '/moduleV/c',
    component: () => import(/* webpackChunkName: "moduleV-c" */ './views/c.vue'),
    meta: { title: 'moduleV-c编译' }
  },
  {
    name: 'moduleV-d',
    path: '/moduleV/d',
    component: () => import(/* webpackChunkName: "moduleV-d" */ './views/d.vue'),
    meta: { title: 'moduleV-d编译' }
  },
  {
    name: 'moduleV-index',
    path: '/moduleV/index',
    component: () => import(/* webpackChunkName: "moduleV-index" */ './views/index.vue'),
    meta: { title: 'moduleV-index编译' }
  }
]
