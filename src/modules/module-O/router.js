export default [
  {
    name: 'moduleO-a',
    path: '/moduleO/a',
    component: () => import(/* webpackChunkName: "moduleO-a" */ './views/a.vue'),
    meta: { title: 'moduleO-a编译' }
  },
  {
    name: 'moduleO-b',
    path: '/moduleO/b',
    component: () => import(/* webpackChunkName: "moduleO-b" */ './views/b.vue'),
    meta: { title: 'moduleO-b编译' }
  },
  {
    name: 'moduleO-c',
    path: '/moduleO/c',
    component: () => import(/* webpackChunkName: "moduleO-c" */ './views/c.vue'),
    meta: { title: 'moduleO-c编译' }
  },
  {
    name: 'moduleO-d',
    path: '/moduleO/d',
    component: () => import(/* webpackChunkName: "moduleO-d" */ './views/d.vue'),
    meta: { title: 'moduleO-d编译' }
  },
  {
    name: 'moduleO-index',
    path: '/moduleO/index',
    component: () => import(/* webpackChunkName: "moduleO-index" */ './views/index.vue'),
    meta: { title: 'moduleO-index编译' }
  }
]
