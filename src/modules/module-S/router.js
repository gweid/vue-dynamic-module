export default [
  {
    name: 'moduleS-a',
    path: '/moduleS/a',
    component: () => import(/* webpackChunkName: "moduleS-a" */ './views/a.vue'),
    meta: { title: 'moduleS-a编译' }
  },
  {
    name: 'moduleS-b',
    path: '/moduleS/b',
    component: () => import(/* webpackChunkName: "moduleS-b" */ './views/b.vue'),
    meta: { title: 'moduleS-b编译' }
  },
  {
    name: 'moduleS-c',
    path: '/moduleS/c',
    component: () => import(/* webpackChunkName: "moduleS-c" */ './views/c.vue'),
    meta: { title: 'moduleS-c编译' }
  },
  {
    name: 'moduleS-d',
    path: '/moduleS/d',
    component: () => import(/* webpackChunkName: "moduleS-d" */ './views/d.vue'),
    meta: { title: 'moduleS-d编译' }
  },
  {
    name: 'moduleS-index',
    path: '/moduleS/index',
    component: () => import(/* webpackChunkName: "moduleS-index" */ './views/index.vue'),
    meta: { title: 'moduleS-index编译' }
  }
]
