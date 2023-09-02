<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <SideBar />

      <DashBoard/>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import SideBar from "./SideBar.vue";

import DashBoard from "./DashBoard.vue";

export default {
  components: {
    DashBoard,
    SideBar,

  },
  setup () {
    return {

    }
  }
}
</script>
