export default [
  {
    name: 'moduleG-a',
    path: '/moduleG/a',
    component: () => import(/* webpackChunkName: "moduleG-a" */ './views/a.vue'),
    meta: { title: 'moduleG-a编译' }
  },
  {
    name: 'moduleG-b',
    path: '/moduleG/b',
    component: () => import(/* webpackChunkName: "moduleG-b" */ './views/b.vue'),
    meta: { title: 'moduleG-b编译' }
  },
  {
    name: 'moduleG-c',
    path: '/moduleG/c',
    component: () => import(/* webpackChunkName: "moduleG-c" */ './views/c.vue'),
    meta: { title: 'moduleG-c编译' }
  },
  {
    name: 'moduleG-d',
    path: '/moduleG/d',
    component: () => import(/* webpackChunkName: "moduleG-d" */ './views/d.vue'),
    meta: { title: 'moduleG-d编译' }
  },
  {
    name: 'moduleG-index',
    path: '/moduleG/index',
    component: () => import(/* webpackChunkName: "moduleG-index" */ './views/index.vue'),
    meta: { title: 'moduleG-index编译' }
  }
]
