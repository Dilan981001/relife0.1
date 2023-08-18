<template>

    <div class="grid-container">
      <NavBar/>
      <Carousel />
      <ProductFilter />
      <ProductsContainer/>
     </div>
    

</template>

<script>
import NavBar from "@/components/Marketplace/NavBar.vue";
import Carousel from "../../components/Marketplace/Carousel.vue";
import ProductFilter from "../../components/Marketplace/ProductFilter.vue";
import ProductsContainer from "../../components/Marketplace/ProductsContainer.vue";

export default {
  name: "MarketPlace",
  components: {
    Carousel,
    ProductFilter,
    ProductsContainer,
    NavBar
},
  // mounted(){
  //     let user = localStorage.getItem("user-info");
  //     if(!user){
  //       this.$router.push({name:"signup"})
      
  //     }
  // }
  
};
</script>

<style scoped>

</style>
