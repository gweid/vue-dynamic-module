export default [
  {
    name: 'moduleJ-a',
    path: '/moduleJ/a',
    component: () => import(/* webpackChunkName: "moduleJ-a" */ './views/a.vue'),
    meta: { title: 'moduleJ-a编译' }
  },
  {
    name: 'moduleJ-b',
    path: '/moduleJ/b',
    component: () => import(/* webpackChunkName: "moduleJ-b" */ './views/b.vue'),
    meta: { title: 'moduleJ-b编译' }
  },
  {
    name: 'moduleJ-c',
    path: '/moduleJ/c',
    component: () => import(/* webpackChunkName: "moduleJ-c" */ './views/c.vue'),
    meta: { title: 'moduleJ-c编译' }
  },
  {
    name: 'moduleJ-d',
    path: '/moduleJ/d',
    component: () => import(/* webpackChunkName: "moduleJ-d" */ './views/d.vue'),
    meta: { title: 'moduleJ-d编译' }
  },
  {
    name: 'moduleJ-index',
    path: '/moduleJ/index',
    component: () => import(/* webpackChunkName: "moduleJ-index" */ './views/index.vue'),
    meta: { title: 'moduleJ-index编译' }
  }
]
