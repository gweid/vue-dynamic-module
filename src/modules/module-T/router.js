export default [
  {
    name: 'moduleT-a',
    path: '/moduleT/a',
    component: () => import(/* webpackChunkName: "moduleT-a" */ './views/a.vue'),
    meta: { title: 'moduleT-a编译' }
  },
  {
    name: 'moduleT-b',
    path: '/moduleT/b',
    component: () => import(/* webpackChunkName: "moduleT-b" */ './views/b.vue'),
    meta: { title: 'moduleT-b编译' }
  },
  {
    name: 'moduleT-c',
    path: '/moduleT/c',
    component: () => import(/* webpackChunkName: "moduleT-c" */ './views/c.vue'),
    meta: { title: 'moduleT-c编译' }
  },
  {
    name: 'moduleT-d',
    path: '/moduleT/d',
    component: () => import(/* webpackChunkName: "moduleT-d" */ './views/d.vue'),
    meta: { title: 'moduleT-d编译' }
  },
  {
    name: 'moduleT-index',
    path: '/moduleT/index',
    component: () => import(/* webpackChunkName: "moduleT-index" */ './views/index.vue'),
    meta: { title: 'moduleT-index编译' }
  }
]
