export default [
  {
    name: 'moduleK-a',
    path: '/moduleK/a',
    component: () => import(/* webpackChunkName: "moduleK-a" */ './views/a.vue'),
    meta: { title: 'moduleK-a编译' }
  },
  {
    name: 'moduleK-b',
    path: '/moduleK/b',
    component: () => import(/* webpackChunkName: "moduleK-b" */ './views/b.vue'),
    meta: { title: 'moduleK-b编译' }
  },
  {
    name: 'moduleK-c',
    path: '/moduleK/c',
    component: () => import(/* webpackChunkName: "moduleK-c" */ './views/c.vue'),
    meta: { title: 'moduleK-c编译' }
  },
  {
    name: 'moduleK-d',
    path: '/moduleK/d',
    component: () => import(/* webpackChunkName: "moduleK-d" */ './views/d.vue'),
    meta: { title: 'moduleK-d编译' }
  },
  {
    name: 'moduleK-index',
    path: '/moduleK/index',
    component: () => import(/* webpackChunkName: "moduleK-index" */ './views/index.vue'),
    meta: { title: 'moduleK-index编译' }
  }
]
