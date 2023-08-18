<template>
    <div class="column items-center justify-center q-mt-lg">
      Edit Product
      <div class="q-pa-md bg-red q-mt-lg" style="max-width: 400px">
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
          <div>
            <q-btn label="Submit" type="submit" color="primary" />
          </div>
        </q-form>
      </div>

    </div>
  </template>
  
  <script>
  
  import axios from 'axios';
import { mapGetters } from 'vuex';
  export default {
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
  