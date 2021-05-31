export default [
  {
    name: 'moduleX-a',
    path: '/moduleX/a',
    component: () => import(/* webpackChunkName: "moduleX-a" */ './views/a.vue'),
    meta: { title: 'moduleX-a编译' }
  },
  {
    name: 'moduleX-b',
    path: '/moduleX/b',
    component: () => import(/* webpackChunkName: "moduleX-b" */ './views/b.vue'),
    meta: { title: 'moduleX-b编译' }
  },
  {
    name: 'moduleX-c',
    path: '/moduleX/c',
    component: () => import(/* webpackChunkName: "moduleX-c" */ './views/c.vue'),
    meta: { title: 'moduleX-c编译' }
  },
  {
    name: 'moduleX-d',
    path: '/moduleX/d',
    component: () => import(/* webpackChunkName: "moduleX-d" */ './views/d.vue'),
    meta: { title: 'moduleX-d编译' }
  },
  {
    name: 'moduleX-index',
    path: '/moduleX/index',
    component: () => import(/* webpackChunkName: "moduleX-index" */ './views/index.vue'),
    meta: { title: 'moduleX-index编译' }
  }
]
