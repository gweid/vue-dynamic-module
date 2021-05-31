export default [
  {
    name: 'moduleM-a',
    path: '/moduleM/a',
    component: () => import(/* webpackChunkName: "moduleM-a" */ './views/a.vue'),
    meta: { title: 'moduleM-a编译' }
  },
  {
    name: 'moduleM-b',
    path: '/moduleM/b',
    component: () => import(/* webpackChunkName: "moduleM-b" */ './views/b.vue'),
    meta: { title: 'moduleM-b编译' }
  },
  {
    name: 'moduleM-c',
    path: '/moduleM/c',
    component: () => import(/* webpackChunkName: "moduleM-c" */ './views/c.vue'),
    meta: { title: 'moduleM-c编译' }
  },
  {
    name: 'moduleM-d',
    path: '/moduleM/d',
    component: () => import(/* webpackChunkName: "moduleM-d" */ './views/d.vue'),
    meta: { title: 'moduleM-d编译' }
  },
  {
    name: 'moduleM-index',
    path: '/moduleM/index',
    component: () => import(/* webpackChunkName: "moduleM-index" */ './views/index.vue'),
    meta: { title: 'moduleM-index编译' }
  }
]
