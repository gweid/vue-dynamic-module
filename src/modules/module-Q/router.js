export default [
  {
    name: 'moduleQ-a',
    path: '/moduleQ/a',
    component: () => import(/* webpackChunkName: "moduleQ-a" */ './views/a.vue'),
    meta: { title: 'moduleQ-a编译' }
  },
  {
    name: 'moduleQ-b',
    path: '/moduleQ/b',
    component: () => import(/* webpackChunkName: "moduleQ-b" */ './views/b.vue'),
    meta: { title: 'moduleQ-b编译' }
  },
  {
    name: 'moduleQ-c',
    path: '/moduleQ/c',
    component: () => import(/* webpackChunkName: "moduleQ-c" */ './views/c.vue'),
    meta: { title: 'moduleQ-c编译' }
  },
  {
    name: 'moduleQ-d',
    path: '/moduleQ/d',
    component: () => import(/* webpackChunkName: "moduleQ-d" */ './views/d.vue'),
    meta: { title: 'moduleQ-d编译' }
  },
  {
    name: 'moduleQ-index',
    path: '/moduleQ/index',
    component: () => import(/* webpackChunkName: "moduleQ-index" */ './views/index.vue'),
    meta: { title: 'moduleQ-index编译' }
  }
]
