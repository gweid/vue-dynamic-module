export default [
  {
    name: 'moduleC-a',
    path: '/moduleC/a',
    component: () => import(/* webpackChunkName: "moduleC-a" */ './views/a.vue'),
    meta: { title: 'moduleC-a编译' }
  },
  {
    name: 'moduleC-b',
    path: '/moduleC/b',
    component: () => import(/* webpackChunkName: "moduleC-b" */ './views/b.vue'),
    meta: { title: 'moduleC-b编译' }
  },
  {
    name: 'moduleC-c',
    path: '/moduleC/c',
    component: () => import(/* webpackChunkName: "moduleC-c" */ './views/c.vue'),
    meta: { title: 'moduleC-c编译' }
  },
  {
    name: 'moduleC-d',
    path: '/moduleC/d',
    component: () => import(/* webpackChunkName: "moduleC-d" */ './views/d.vue'),
    meta: { title: 'moduleC-d编译' }
  },
  {
    name: 'moduleC-index',
    path: '/moduleC/index',
    component: () => import(/* webpackChunkName: "moduleC-index" */ './views/index.vue'),
    meta: { title: 'moduleC-index编译' }
  }
]
