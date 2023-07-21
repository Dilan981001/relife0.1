import { createRouter, createWebHistory } from 'vue-router'

import SigninSignup from "@/views/SigninSignup.vue";
import SignUp from "@/views/SignUp.vue";
import FullDashBoard from "@/views/FullDashBoard.vue";
import MarketPlace from "@/views/MarketPlace.vue";
import HomePage from "@/views/HomePage.vue"
import NotificationPage from "@/views/Notification-Page.vue";
import AboutUs from '@/components/Home/AboutUs.vue';
import ChildrenHomeCards from '@/components/Home/ChildrenHomeCards.vue';
import PageFooter from '@/components/PageFooter.vue';

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
  },
  {
    path: '/AboutUs',
    name: 'AboutUs',
    component: AboutUs
  },
  {
    path: '/PageFooter',
    name: 'PageFooter',
    component: PageFooter
  },
  {
    path: '/ChildrenHomeCards',
    name: 'ChildrenHomeCards',
    component: ChildrenHomeCards
  }


  // other routes...
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
