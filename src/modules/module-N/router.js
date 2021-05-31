export default [
  {
    name: 'moduleN-a',
    path: '/moduleN/a',
    component: () => import(/* webpackChunkName: "moduleN-a" */ './views/a.vue'),
    meta: { title: 'moduleN-a编译' }
  },
  {
    name: 'moduleN-b',
    path: '/moduleN/b',
    component: () => import(/* webpackChunkName: "moduleN-b" */ './views/b.vue'),
    meta: { title: 'moduleN-b编译' }
  },
  {
    name: 'moduleN-c',
    path: '/moduleN/c',
    component: () => import(/* webpackChunkName: "moduleN-c" */ './views/c.vue'),
    meta: { title: 'moduleN-c编译' }
  },
  {
    name: 'moduleN-d',
    path: '/moduleN/d',
    component: () => import(/* webpackChunkName: "moduleN-d" */ './views/d.vue'),
    meta: { title: 'moduleN-d编译' }
  },
  {
    name: 'moduleN-index',
    path: '/moduleN/index',
    component: () => import(/* webpackChunkName: "moduleN-index" */ './views/index.vue'),
    meta: { title: 'moduleN-index编译' }
  }
]
