<template>
  <q-layout view="lHh Lpr lFf" >
    <q-page-container>
      <SideBar />
      <DashBoard/>
      
    </q-page-container>
  </q-layout>
</template>

<script>
import SideBar from "./SideBar.vue";

import DashBoard from "./DashBoard.vue";

export default {
  components: {
    SideBar,
    DashBoard,

  },
  setup () {
    return {

    }
  }
}
</script>



