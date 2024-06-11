import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }, 
    {
      path:'/auth',
      children:[
        {
          path:'login',
          name:'login.view',
          component: () => import('../views/Auth/Login.vue'),
        },
        {
          path:'register',
          name:'register.view',
          component: () => import('../views/Auth/Register.vue')
        }
      ]
    }
  ]
})

export default router
