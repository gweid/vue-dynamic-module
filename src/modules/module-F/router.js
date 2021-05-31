export default [
  {
    name: 'moduleF-a',
    path: '/moduleF/a',
    component: () => import(/* webpackChunkName: "moduleF-a" */ './views/a.vue'),
    meta: { title: 'moduleF-a编译' }
  },
  {
    name: 'moduleF-b',
    path: '/moduleF/b',
    component: () => import(/* webpackChunkName: "moduleF-b" */ './views/b.vue'),
    meta: { title: 'moduleF-b编译' }
  },
  {
    name: 'moduleF-c',
    path: '/moduleF/c',
    component: () => import(/* webpackChunkName: "moduleF-c" */ './views/c.vue'),
    meta: { title: 'moduleF-c编译' }
  },
  {
    name: 'moduleF-d',
    path: '/moduleF/d',
    component: () => import(/* webpackChunkName: "moduleF-d" */ './views/d.vue'),
    meta: { title: 'moduleF-d编译' }
  },
  {
    name: 'moduleF-index',
    path: '/moduleF/index',
    component: () => import(/* webpackChunkName: "moduleF-index" */ './views/index.vue'),
    meta: { title: 'moduleF-index编译' }
  }
]
