export default [
  {
    name: 'moduleW-a',
    path: '/moduleW/a',
    component: () => import(/* webpackChunkName: "moduleW-a" */ './views/a.vue'),
    meta: { title: 'moduleW-a编译' }
  },
  {
    name: 'moduleW-b',
    path: '/moduleW/b',
    component: () => import(/* webpackChunkName: "moduleW-b" */ './views/b.vue'),
    meta: { title: 'moduleW-b编译' }
  },
  {
    name: 'moduleW-c',
    path: '/moduleW/c',
    component: () => import(/* webpackChunkName: "moduleW-c" */ './views/c.vue'),
    meta: { title: 'moduleW-c编译' }
  },
  {
    name: 'moduleW-d',
    path: '/moduleW/d',
    component: () => import(/* webpackChunkName: "moduleW-d" */ './views/d.vue'),
    meta: { title: 'moduleW-d编译' }
  },
  {
    name: 'moduleW-index',
    path: '/moduleW/index',
    component: () => import(/* webpackChunkName: "moduleW-index" */ './views/index.vue'),
    meta: { title: 'moduleW-index编译' }
  }
]
