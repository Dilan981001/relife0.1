<template>
    <q-layout view="hHh ppp fFf">
      <NavBar/>
        <router-view />
    </q-layout>
  </template>
 
  
<script>

import NavBar from "@/components/Marketplace/NavBar.vue";
export default {
name: 'LayoutPage',
components:{
    NavBar,
},
}
</script>

<style scoped>

q-page-container{
  padding-top: 0;
}
</style>
