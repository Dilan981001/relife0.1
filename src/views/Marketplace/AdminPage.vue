<template>
  <div class="container">


   
      <NavBar />
    
    <div class="box1"></div>

    <div class="box2"></div>

    <div class="row">
      <div class="col-5"></div>
      <div class="column q-mt-lg">
        <q-btn
          color="primary"
          icon="add_circle"
          label="Admin Category"
          to="/admin/category"
          class="q-mt-xl q-mb-xl"
        />
        <q-btn
          color="primary"
          icon="add_circle"
          label="Admin Product"
          to="/admin/product"
          class="q-mt-md"
        />
      </div>
      <div class="col-5"></div>
    </div>
  </div>
</template>

<script>

import NavBar from "@/components/NavBar.vue";
export default {
 components:{
  NavBar,
 },
};
</script>

<style scoped>

body, html {
  margin: 0;
  padding: 0;
  background-color: #284b36;
}

.container {
  position: relative;
  background-color: #284b36;
}

.box2 {
  margin-bottom: 50px; /* Adds margin space at the bottom of the box */
  padding: 20px; /* Adds padding space inside the box */
}
.box1 {
  /* Adds margin space at the bottom of the box */
  padding: 5px;
}
</style>
