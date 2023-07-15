<template>
  <q-layout view="lHh Lpr lFf" style="height: 100vh;">
    <router-view>
      <SideBar />
      <RightSideBar />
      <DashBoard />
    </router-view>
  </q-layout>
</template>

<script>
import SideBar from "@/components/SideBar.vue";
import RightSideBar from "@/components/RightSideBar.vue";
import DashBoard from "@/components/DashBoard.vue";

export default {
  components: {
    SideBar,
    RightSideBar,
    DashBoard
  }
};
</script>
