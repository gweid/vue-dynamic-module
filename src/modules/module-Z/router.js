export default [
  {
    name: 'moduleZ-a',
    path: '/moduleZ/a',
    component: () => import(/* webpackChunkName: "moduleZ-a" */ './views/a.vue'),
    meta: { title: 'moduleZ-a编译' }
  },
  {
    name: 'moduleZ-b',
    path: '/moduleZ/b',
    component: () => import(/* webpackChunkName: "moduleZ-b" */ './views/b.vue'),
    meta: { title: 'moduleZ-b编译' }
  },
  {
    name: 'moduleZ-c',
    path: '/moduleZ/c',
    component: () => import(/* webpackChunkName: "moduleZ-c" */ './views/c.vue'),
    meta: { title: 'moduleZ-c编译' }
  },
  {
    name: 'moduleZ-d',
    path: '/moduleZ/d',
    component: () => import(/* webpackChunkName: "moduleZ-d" */ './views/d.vue'),
    meta: { title: 'moduleZ-d编译' }
  },
  {
    name: 'moduleZ-index',
    path: '/moduleZ/index',
    component: () => import(/* webpackChunkName: "moduleZ-index" */ './views/index.vue'),
    meta: { title: 'moduleZ-index编译' }
  }
]
