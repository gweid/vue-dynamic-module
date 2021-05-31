export default [
  {
    name: 'moduleY-a',
    path: '/moduleY/a',
    component: () => import(/* webpackChunkName: "moduleY-a" */ './views/a.vue'),
    meta: { title: 'moduleY-a编译' }
  },
  {
    name: 'moduleY-b',
    path: '/moduleY/b',
    component: () => import(/* webpackChunkName: "moduleY-b" */ './views/b.vue'),
    meta: { title: 'moduleY-b编译' }
  },
  {
    name: 'moduleY-c',
    path: '/moduleY/c',
    component: () => import(/* webpackChunkName: "moduleY-c" */ './views/c.vue'),
    meta: { title: 'moduleY-c编译' }
  },
  {
    name: 'moduleY-d',
    path: '/moduleY/d',
    component: () => import(/* webpackChunkName: "moduleY-d" */ './views/d.vue'),
    meta: { title: 'moduleY-d编译' }
  },
  {
    name: 'moduleY-index',
    path: '/moduleY/index',
    component: () => import(/* webpackChunkName: "moduleY-index" */ './views/index.vue'),
    meta: { title: 'moduleY-index编译' }
  }
]
