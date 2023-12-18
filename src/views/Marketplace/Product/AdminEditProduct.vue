<template>
<div class="row">
 <NavBar/>
</div>

    <div class="column items-center justify-center q-mt-lg">
      Edit Product
      <div class="q-pa-md bg-green q-mt-lg" style="width: 600px; border-radius: 10px;">
        <q-form class="q-gutter-md" @submit="editProduct()">
         
          <select v-model="product.categoryId"  >
            <option v-for="category in categoryState" :key="category.id" :value="category.id">{{
              category.categoryName
            }}</option>
          </select>
  
          <q-input
          v-model="product.name"
            class="bg-white"
            dense
            filled
            label="Name "
          />
          <q-input
          v-model="product.description"
            class="bg-white"
            dense
            filled
            label="Description "
          />
          <q-input
          v-model="product.imageURL"
            class="bg-white"
            dense
            filled
            label="Image URL "
          />
          <q-input
          v-model="product.price"
              type="number"
            class="bg-white"
            dense
            filled
            label="Price "
          />
          <div class="row">
        <div class="col-6">
        <div>
          <q-btn label="Submit" type="submit" color="primary" to="/admin/product"/>
        </div>

        </div>

        <div class="col-6">

        <div style="margin-left:-150px;"  >
          <q-btn label="Cancel" type="submit" color="red" to="/admin/product"/>
        </div>

        </div>

       </div>
        </q-form>
      </div>

    </div>
  </template>
  
  <script>
  
import axios from 'axios';
import { mapGetters } from 'vuex';
import NavBar from "@/components/Marketplace/NavBar.vue";
  export default {

    components: {
        NavBar
    },

      data(){
          return {
              product:{},
              id:null,
          }
      },
    methods:{
     async editProduct(){
         await axios.post(`https://limitless-lake-55070.herokuapp.com/product/update/${this.id}`,this.product)
         .then(
            this.$router.push({name:'AdminProduct'})
        )
        .catch(error=>{
            console.log(error);
        })
      }
    },
  
    mounted() {
        this.$store.dispatch("productModule/getProducts")
        this.$store.dispatch("categoryModule/getCategories")
        this.id= this.$route.params.id;
        this.product= this.productState.products.find(product=>product.id==this.id)
      
  },
  computed: mapGetters({
  productState:"getProdutsState",
  categoryState: "getCategoryState",
})
}
  </script>
  
  
  <style scoped>
  .label,.select{
      padding: 10px 20px 10px 20px;
  }
  </style>
  