<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import SigninSignup from "@/views/SigninSignup.vue";
import SignUp from "@/views/SignUp.vue";
import FullDashBoard from "@/views/FullDashBoard.vue";
import MarketPlace from "@/views/MarketPlace.vue";
import HomePage from "@/views/HomePage.vue";
import NotificationPage from "@/views/Notification-Page.vue";
import AboutUs from '@/components/Home/AboutUs';
import ChildrenHomeCards from '@/components/Home/ChildrenHomeCards'

export default {
  name: 'App',

  components: {
    // eslint-disable-next-line vue/no-unused-components
    SigninSignup,
    // eslint-disable-next-line vue/no-unused-components
    SignUp,
    // eslint-disable-next-line vue/no-unused-components
    FullDashBoard,
    // eslint-disable-next-line vue/no-unused-components
    MarketPlace,
    // eslint-disable-next-line vue/no-unused-components
   HomePage,
    // eslint-disable-next-line vue/no-unused-components
    NotificationPage,
     // eslint-disable-next-line vue/no-unused-components
    AboutUs,
     // eslint-disable-next-line vue/no-unused-components
     ChildrenHomeCards,
  }
}
</script>
