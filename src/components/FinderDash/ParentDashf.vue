<template>
  <q-layout view="lHh Lpr lFf" >
    <q-page-container>
      <LeftBarf />
      <DashFinderLeft/>
    </q-page-container>
  </q-layout>
</template>

<script>
import LeftBarf from "./LeftBarf.vue";

import DashFinderLeft from "./DashFinderLeft.vue";

export default {
  components: {
    LeftBarf,
    DashFinderLeft,

  },
  setup () {
    return {

    }
  }
}
</script>



