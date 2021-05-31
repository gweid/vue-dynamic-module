export default [
  {
    name: 'moduleH-a',
    path: '/moduleH/a',
    component: () => import(/* webpackChunkName: "moduleH-a" */ './views/a.vue'),
    meta: { title: 'moduleH-a编译' }
  },
  {
    name: 'moduleH-b',
    path: '/moduleH/b',
    component: () => import(/* webpackChunkName: "moduleH-b" */ './views/b.vue'),
    meta: { title: 'moduleH-b编译' }
  },
  {
    name: 'moduleH-c',
    path: '/moduleH/c',
    component: () => import(/* webpackChunkName: "moduleH-c" */ './views/c.vue'),
    meta: { title: 'moduleH-c编译' }
  },
  {
    name: 'moduleH-d',
    path: '/moduleH/d',
    component: () => import(/* webpackChunkName: "moduleH-d" */ './views/d.vue'),
    meta: { title: 'moduleH-d编译' }
  },
  {
    name: 'moduleH-index',
    path: '/moduleH/index',
    component: () => import(/* webpackChunkName: "moduleH-index" */ './views/index.vue'),
    meta: { title: 'moduleH-index编译' }
  }
]
