import { createRouter, createWebHistory } from 'vue-router'

import SigninSignup from "@/views/SigninSignup.vue";
import SignUp from "@/views/SignUp.vue";
import FullDashBoard from "@/views/FullDashBoard.vue";
import MarketPlace from "@/views/Marketplace/MarketPlace.vue";
import HomePage from "@/views/HomePage.vue"
import NotificationPage from "@/views/Notification-Page.vue";
import AboutUs from '@/components/Home/AboutUs.vue';
import ChildrenHomeCards from '@/components/Home/ChildrenHomeCards.vue';
import PageFooter from '@/components/PageFooter.vue';
import EldersHome from "@/components/EldersHome.vue"
import ChildrensHome from "@/components/ChildrensHome.vue"
import DonateFund from "@/components/DonateFund.vue"
import PaymentSecure from "@/components/PaymentSecure.vue"


import ViewProductPage from '@/views/Marketplace/ViewProductPage.vue';
import CartPage from '@/views/Marketplace/CartPage.vue';
// import SignUp from '@/components/Marketplace/SignUp.vue';
// import LogIn from '@/components/Marketplace/LogIn.vue';
import AddCategory from '@/views/Marketplace/Category/AddCategory.vue';
import AdminProductPage from '@/views/Marketplace/Product/AdminProductPage.vue';
import AdminAddProduct from '@/views/Marketplace/Product/AdminAddProduct.vue';
import AdminEditProduct from '@/views/Marketplace/Product/AdminEditProduct.vue';
import CategoryPage from '@/views/Marketplace/Category/CategoryPage.vue';
import AdminPage from '@/views/Marketplace/AdminPage.vue';
import Signinprovider from "@/views/Marketplace/signinprovider.vue"

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
  },
  {
    path: '/EldersHome',
    name: 'EldersHome',
    component: EldersHome
  },
  {
    path: '/ChildrensHome',
    name: 'ChildrenssHome',
    component: ChildrensHome
  },
  {
    path: '/donatefund',
    name: 'DonateFund',
    component: DonateFund
  },
  {
    path: '/paymentsecure',
    name: 'PaymentSecure',
    component: PaymentSecure
  },
  {
    path: '/products/:productId',
    name: 'ViewProduct',
    component: ViewProductPage
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartPage
  },
  {
    path: '/admin',
    name: 'Admin',
    component: AdminPage
  },
  {
    path: '/admin/category/add',
    name: 'AddCategory',
    component: AddCategory
  },
  {
    path: '/admin/category',
    name: 'CategoryPage',
    component: CategoryPage
  },
  {
    path: '/admin/product',
    name: 'AdminProduct',
    component: AdminProductPage
  },
  {
    path: '/admin/product/new',
    name: 'AdminAddProduct',
    component: AdminAddProduct
  },
  {
    path: '/admin/product/:id',
    name: 'AdminEditProduct',
    component: AdminEditProduct
  },
  {
    path: '/signinprovider',
    name: 'Signinprovider ',
    component: Signinprovider 
  },


 


  // other routes...
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
