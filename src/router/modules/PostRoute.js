const postRoute = [
  {
    path: 'posts',
    name: 'PostHome',
    component: () => import('@/views/post/PostHome.vue')
  },
  {
    path: 'posts/create',
    name: 'PostCreate',
    component: () => import('@/views/post/PostCreate.vue')
  },
  {
    path : 'posts/:id',
    name : 'PostRead',
    component: () => import('@/views/post/PostRead.vue')
  },
  {
    path: 'posts/:id/update',
    name : 'PostUpdate',
    component: () => import('@/views/post/PostUpdate.vue')
  }
]

export default postRoute
