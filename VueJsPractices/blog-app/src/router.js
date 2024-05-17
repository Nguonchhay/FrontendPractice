import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/views/Login.vue'
import Signup from '@/views/Signup.vue'
import Home from '@/views/Home.vue'
import Article from '@/views/Article.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/signup',
      component: Signup
    },
    {
      path: '/article/:id',
      component: Article
    }
  ]
})

export default router;
