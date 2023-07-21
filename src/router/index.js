import { createRouter, createWebHistory } from 'vue-router'

import SigninSignup from "@/views/SigninSignup.vue";
import SignUp from "@/views/SignUp.vue";
import FullDashBoard from "@/views/FullDashBoard.vue";
import MarketPlace from "@/views/MarketPlace.vue";
import HomePage from "@/views/HomePage.vue"
import NotificationPage from "@/views/Notification-Page.vue";

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/signin',
    name: 'SigninSignup',
    component: SigninSignup
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/fulldashboard',
    name: 'FullDashboard',
    component: FullDashBoard
  },
  {
    path: '/marketplace',
    name: 'MarketPlace',
    component: MarketPlace
  },
  {
    path:'/home',
    name:'HomePage',
    component:HomePage
  },
  {
    path: '/notificationpage',
    name: 'NotificationPage',
    component: NotificationPage
  }


  // other routes...
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
