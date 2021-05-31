export default [
  {
    name: 'moduleA-a',
    path: '/moduleA/a',
    component: () => import(/* webpackChunkName: "moduleA-a" */ './views/a.vue'),
    meta: { title: 'moduleA-a编译' }
  },
  {
    name: 'moduleA-b',
    path: '/moduleA/b',
    component: () => import(/* webpackChunkName: "moduleA-b" */ './views/b.vue'),
    meta: { title: 'moduleA-b编译' }
  },
  {
    name: 'moduleA-c',
    path: '/moduleA/c',
    component: () => import(/* webpackChunkName: "moduleA-c" */ './views/c.vue'),
    meta: { title: 'moduleA-c编译' }
  },
  {
    name: 'moduleA-d',
    path: '/moduleA/d',
    component: () => import(/* webpackChunkName: "moduleA-d" */ './views/d.vue'),
    meta: { title: 'moduleA-d编译' }
  },
  {
    name: 'moduleA-index',
    path: '/moduleA/index',
    component: () => import(/* webpackChunkName: "moduleA-index" */ './views/index.vue'),
    meta: { title: 'moduleA-index编译' }
  }
]
