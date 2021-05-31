export default [
  {
    name: 'moduleD-a',
    path: '/moduleD/a',
    component: () => import(/* webpackChunkName: "moduleD-a" */ './views/a.vue'),
    meta: { title: 'moduleD-a编译' }
  },
  {
    name: 'moduleD-b',
    path: '/moduleD/b',
    component: () => import(/* webpackChunkName: "moduleD-b" */ './views/b.vue'),
    meta: { title: 'moduleD-b编译' }
  },
  {
    name: 'moduleD-c',
    path: '/moduleD/c',
    component: () => import(/* webpackChunkName: "moduleD-c" */ './views/c.vue'),
    meta: { title: 'moduleD-c编译' }
  },
  {
    name: 'moduleD-d',
    path: '/moduleD/d',
    component: () => import(/* webpackChunkName: "moduleD-d" */ './views/d.vue'),
    meta: { title: 'moduleD-d编译' }
  },
  {
    name: 'moduleD-index',
    path: '/moduleD/index',
    component: () => import(/* webpackChunkName: "moduleD-index" */ './views/index.vue'),
    meta: { title: 'moduleD-index编译' }
  }
]
