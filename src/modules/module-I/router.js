export default [
  {
    name: 'moduleI-a',
    path: '/moduleI/a',
    component: () => import(/* webpackChunkName: "moduleI-a" */ './views/a.vue'),
    meta: { title: 'moduleI-a编译' }
  },
  {
    name: 'moduleI-b',
    path: '/moduleI/b',
    component: () => import(/* webpackChunkName: "moduleI-b" */ './views/b.vue'),
    meta: { title: 'moduleI-b编译' }
  },
  {
    name: 'moduleI-c',
    path: '/moduleI/c',
    component: () => import(/* webpackChunkName: "moduleI-c" */ './views/c.vue'),
    meta: { title: 'moduleI-c编译' }
  },
  {
    name: 'moduleI-d',
    path: '/moduleI/d',
    component: () => import(/* webpackChunkName: "moduleI-d" */ './views/d.vue'),
    meta: { title: 'moduleI-d编译' }
  },
  {
    name: 'moduleI-index',
    path: '/moduleI/index',
    component: () => import(/* webpackChunkName: "moduleI-index" */ './views/index.vue'),
    meta: { title: 'moduleI-index编译' }
  }
]
