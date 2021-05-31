export default [
  {
    name: 'moduleP-a',
    path: '/moduleP/a',
    component: () => import(/* webpackChunkName: "moduleP-a" */ './views/a.vue'),
    meta: { title: 'moduleP-a编译' }
  },
  {
    name: 'moduleP-b',
    path: '/moduleP/b',
    component: () => import(/* webpackChunkName: "moduleP-b" */ './views/b.vue'),
    meta: { title: 'moduleP-b编译' }
  },
  {
    name: 'moduleP-c',
    path: '/moduleP/c',
    component: () => import(/* webpackChunkName: "moduleP-c" */ './views/c.vue'),
    meta: { title: 'moduleP-c编译' }
  },
  {
    name: 'moduleP-d',
    path: '/moduleP/d',
    component: () => import(/* webpackChunkName: "moduleP-d" */ './views/d.vue'),
    meta: { title: 'moduleP-d编译' }
  },
  {
    name: 'moduleP-index',
    path: '/moduleP/index',
    component: () => import(/* webpackChunkName: "moduleP-index" */ './views/index.vue'),
    meta: { title: 'moduleP-index编译' }
  }
]
