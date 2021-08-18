const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '/',
        component: () => import('pages/HomePage.vue')
      },
      {path: '/auth', component: () => import('pages/LoginPage.vue')},
      {path: 'line-items', component: () => import('pages/LineItemsPage.vue')},
      {
        path: '/:catchAll(.*)*',
        component: () => import('pages/Error404.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
