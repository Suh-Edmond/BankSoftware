import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect:'/auth/login'
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
    },
    {
      path:'/dashboard',
      children:[
        {
          path: '',
          name:'dashboard.view',
          component: () => import('../views/Dashboard/Dashboard.vue'),
        },
        {
          path:'/accounts/create',
          component: () => import('../views/Dashboard/CreateAccount.vue'),
          name:'create_account.view'
        },
        {
          path:'accounts/:id/transactions',
          component: () => import('../views/Dashboard/Transactions.vue'),
          name:'transactions.view'
        },
        {
          path:'accounts/:id/transactions',
          component: () => import('../views/Dashboard/Transactions.vue'),
          name:'transactions.view'
        },
        {
          path:'accounts/:id/details',
          component: () => import('../views/Dashboard/AccountDetail.vue'),
          name:'account_detail.view'
        },
        {
          path:'accounts/:id/balance',
          component: () => import('../views/Dashboard/AccountBalance.vue'),
          name:'account_balance.view'
        },
        
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
