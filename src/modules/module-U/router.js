export default [
  {
    name: 'moduleU-a',
    path: '/moduleU/a',
    component: () => import(/* webpackChunkName: "moduleU-a" */ './views/a.vue'),
    meta: { title: 'moduleU-a编译' }
  },
  {
    name: 'moduleU-b',
    path: '/moduleU/b',
    component: () => import(/* webpackChunkName: "moduleU-b" */ './views/b.vue'),
    meta: { title: 'moduleU-b编译' }
  },
  {
    name: 'moduleU-c',
    path: '/moduleU/c',
    component: () => import(/* webpackChunkName: "moduleU-c" */ './views/c.vue'),
    meta: { title: 'moduleU-c编译' }
  },
  {
    name: 'moduleU-d',
    path: '/moduleU/d',
    component: () => import(/* webpackChunkName: "moduleU-d" */ './views/d.vue'),
    meta: { title: 'moduleU-d编译' }
  },
  {
    name: 'moduleU-index',
    path: '/moduleU/index',
    component: () => import(/* webpackChunkName: "moduleU-index" */ './views/index.vue'),
    meta: { title: 'moduleU-index编译' }
  }
]
