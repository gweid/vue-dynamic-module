export default [
  {
    name: 'moduleE-a',
    path: '/moduleE/a',
    component: () => import(/* webpackChunkName: "moduleE-a" */ './views/a.vue'),
    meta: { title: 'moduleE-a编译' }
  },
  {
    name: 'moduleE-b',
    path: '/moduleE/b',
    component: () => import(/* webpackChunkName: "moduleE-b" */ './views/b.vue'),
    meta: { title: 'moduleE-b编译' }
  },
  {
    name: 'moduleE-c',
    path: '/moduleE/c',
    component: () => import(/* webpackChunkName: "moduleE-c" */ './views/c.vue'),
    meta: { title: 'moduleE-c编译' }
  },
  {
    name: 'moduleE-d',
    path: '/moduleE/d',
    component: () => import(/* webpackChunkName: "moduleE-d" */ './views/d.vue'),
    meta: { title: 'moduleE-d编译' }
  },
  {
    name: 'moduleE-index',
    path: '/moduleE/index',
    component: () => import(/* webpackChunkName: "moduleE-index" */ './views/index.vue'),
    meta: { title: 'moduleE-index编译' }
  }
]
