import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  // blog routes
  {
    path: '/blog',
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes,
})
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
export default router
