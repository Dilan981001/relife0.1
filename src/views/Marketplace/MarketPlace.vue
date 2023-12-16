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
import Swal from 'sweetalert2';
export default {
  name: "MarketPlace",
  components: {
    Carousel,
    ProductFilter,
    ProductsContainer,
    NavBar
},
mounted(){
    this.token = localStorage.getItem("token");
    if (!this.token) {
        // user is not logged in
        // show some error
        Swal.fire({
          text: "please login",
          icon: "error",
        });
        this.$router.push({ name: "SigninSignup" });
      }
  }
  
};
</script>

<style scoped>
.grid-container{
  background-color:#284b36 ;
}
</style>
