export default [
  {
    name: 'moduleR-a',
    path: '/moduleR/a',
    component: () => import(/* webpackChunkName: "moduleR-a" */ './views/a.vue'),
    meta: { title: 'moduleR-a编译' }
  },
  {
    name: 'moduleR-b',
    path: '/moduleR/b',
    component: () => import(/* webpackChunkName: "moduleR-b" */ './views/b.vue'),
    meta: { title: 'moduleR-b编译' }
  },
  {
    name: 'moduleR-c',
    path: '/moduleR/c',
    component: () => import(/* webpackChunkName: "moduleR-c" */ './views/c.vue'),
    meta: { title: 'moduleR-c编译' }
  },
  {
    name: 'moduleR-d',
    path: '/moduleR/d',
    component: () => import(/* webpackChunkName: "moduleR-d" */ './views/d.vue'),
    meta: { title: 'moduleR-d编译' }
  },
  {
    name: 'moduleR-index',
    path: '/moduleR/index',
    component: () => import(/* webpackChunkName: "moduleR-index" */ './views/index.vue'),
    meta: { title: 'moduleR-index编译' }
  }
]
