<template class="container">
<div class="row">
 <NavBar/>
</div>
<div>
    <div class="q-pa-md">
      <div class="row items-start">
        <div class="col-12 col-md-6">
          <q-img :src="product.imageURL" />
        </div>
        <div class="column items-center justify-center col-12 col-md-6  ">
          <h2 class="text-h5">{{ this.product.name }}</h2>
          <div class="text-subtitle1">{{ product.description }}</div>
          <div class="text-subtitle1">Category : {{ product.category }}</div>
          <div class="text-h6 font-weight-bold">Rs:{{ product.price }}</div>
          <!-- <q-rating
            v-model="product.rating"
            color="orange"
            icon="star"
            readonly
          /> -->
          <q-input
            filled
            dense
            class="bg-white"
            v-model="quantity"
            label=" Quantity "
            type="number"
            min="1"
          />
          <q-btn
            class="q-mt-md"
            color="white"
            text-color="black"
            label="ADD TO CART"
            @click="addToCart(product.id)"
          />

        </div>
      </div>
    </div>
</div>

</template>


<script>
import axios from 'axios';
import { mapGetters } from 'vuex';
import Swal from 'sweetalert2'
import NavBar from "@/components/Marketplace/NavBar.vue";


export default {
    name: "ViewProductPage",
    components: {
      NavBar,
    },
    data(){
        return {
            productId :this.$route.params.productId,
            product:{},
            quantity:1,
            token:null
        }
    },
   
    methods:{
  //     addToCart(id,name,image,price){
  //   const product = {
  //           id: id,
  //           name :name,
  //           img:image,
  //           price:price,
  //       } ;
  //    this.$store.dispatch('cartModule/setCart',product)
  // }
  addToCart(id){
      // const product = {
      //   id: id,
      //   quantity:this.quantity
      // };
      if (!this.token) {
        // user is not logged in
        // show some error
        Swal.fire({
          text: "please login to add item in cart",
          icon: "error",
        });
        return;
      }
      axios.post(`http://localhost:8081/cart/add?token=${this.token}`,{
        productId:id,
        quantity:this.quantity,
      })
      .then(res=>{
        if(res.status==201){
        
          Swal.fire({
            text:"product has added in cart",
            icon:'success'
          })
          this.$store.dispatch("cartModule/getCartItems",this.token);
        }
      }).catch(err=>{
        console.log(err);
      })
      
  },
    },
    
    mounted(){
  //this.getProducts();
  this.token = localStorage.getItem("token")
  this.$store.dispatch("productModule/getProducts")
  this.product= this.productState.products.find(product=>product.id == this.productId)

},
computed: mapGetters({
  productState:"getProdutsState"
})

}
</script>

<style scoped>
.container{
  background-color:#284b36;
}
</style>

