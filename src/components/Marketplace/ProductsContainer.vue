<template>
  <div class="container row justify-center q-pt-lg q-mt-lg ">
    
      <ProductBox />
  
  </div>

  <!-- <div class="row mobile-only q-pt-lg">
    <div class="col-xs-12">
      <ProductList />
      <ProductList />
      <ProductList />
      <ProductList />
      <ProductList />
      <ProductList />
      <ProductList />
    </div>
  </div> -->
</template>

<script>
import ProductBox from "./ProductBox.vue";

export default {
  name: "ProductsContainer",
  components: {
    ProductBox,
  },
};
</script>

<style scoped>


.container{
  background-color: #284b36;

margin-top: 0;
}
</style>
