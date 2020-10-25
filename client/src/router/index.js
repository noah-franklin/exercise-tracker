import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
//import store from '../store/index.js'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
   // beforeEnter: authGuard
  },
  {
    path:'/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  }
]
/*
function authGuard(to, from, next) {
 
  if ()  {
    next();
  }
  else {
    next('/login')
  }
}*/

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
