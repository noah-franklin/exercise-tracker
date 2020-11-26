import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register'
import Admin from '../views/Admin'
//import store from '../store' // your vuex store 
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
    path:'/admin',
    name: 'Admin',
    component: Admin,
    beforeEnter: authCheck
  },
  {
    path:'/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path:'/register',
    name: 'Register',
    component: Register
  }
]
//const axios = require('axios')
// const adminCheck = (to, from, next) => {
//   axios.get(process.env.VUE_APP_APIURL+"/users/"+this.currentUser.id+'/delete', {
//                 headers: {
//                     'Authorization': "Bearer "+ this.token
//                 }
//             })
// }
const authCheck = (to, from, next) => {
  console.log("Wtf")
  console.log("Login Status:" + this.$store.state.loggedIn)

  if (this.$store.state.loggedIn) {
       next()
  }
  else {
    next()
  } 
}

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
