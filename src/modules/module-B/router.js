export default [
  {
    name: 'moduleB-a',
    path: '/moduleB/a',
    component: () => import(/* webpackChunkName: "moduleB-a" */ './views/a.vue'),
    meta: { title: 'moduleB-a编译' }
  },
  {
    name: 'moduleB-b',
    path: '/moduleB/b',
    component: () => import(/* webpackChunkName: "moduleB-b" */ './views/b.vue'),
    meta: { title: 'moduleB-b编译' }
  },
  {
    name: 'moduleB-c',
    path: '/moduleB/c',
    component: () => import(/* webpackChunkName: "moduleB-c" */ './views/c.vue'),
    meta: { title: 'moduleB-c编译' }
  },
  {
    name: 'moduleB-d',
    path: '/moduleB/d',
    component: () => import(/* webpackChunkName: "moduleB-d" */ './views/d.vue'),
    meta: { title: 'moduleB-d编译' }
  },
  {
    name: 'moduleB-index',
    path: '/moduleB/index',
    component: () => import(/* webpackChunkName: "moduleB-index" */ './views/index.vue'),
    meta: { title: 'moduleB-index编译', requireAuth: true }
  }
]
