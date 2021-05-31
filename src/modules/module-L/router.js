export default [
  {
    name: 'moduleL-a',
    path: '/moduleL/a',
    component: () => import(/* webpackChunkName: "moduleL-a" */ './views/a.vue'),
    meta: { title: 'moduleL-a编译' }
  },
  {
    name: 'moduleL-b',
    path: '/moduleL/b',
    component: () => import(/* webpackChunkName: "moduleL-b" */ './views/b.vue'),
    meta: { title: 'moduleL-b编译' }
  },
  {
    name: 'moduleL-c',
    path: '/moduleL/c',
    component: () => import(/* webpackChunkName: "moduleL-c" */ './views/c.vue'),
    meta: { title: 'moduleL-c编译' }
  },
  {
    name: 'moduleL-d',
    path: '/moduleL/d',
    component: () => import(/* webpackChunkName: "moduleL-d" */ './views/d.vue'),
    meta: { title: 'moduleL-d编译' }
  },
  {
    name: 'moduleL-index',
    path: '/moduleL/index',
    component: () => import(/* webpackChunkName: "moduleL-index" */ './views/index.vue'),
    meta: { title: 'moduleL-index编译' }
  }
]
