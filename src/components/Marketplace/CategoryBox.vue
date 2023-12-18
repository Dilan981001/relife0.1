<template>
    <div
      v-for="category in categories"
      :key="category.id"
      class="cursor-pointer image-container q-ma-sm bg-white"
    >
      <q-img
        :src="category.imageUrl"
        style="height: 200px; width: 200px"
        @click="ClickProduct(product.id)"
      />
      <div class="product-details text-center">
        <p class="text-weight-bold text-black text-center">{{ category.categoryName }}</p>
        <p style="color: black">RS {{category.description }}</p>
        
     
        <q-btn
        v-if="$route.name === 'AddCategory'"
          color="primary"
          icon="add_circle"
          label="Edit"
          @click="EditProduct(product.id)"
        />
      
        <q-btn
        v-if="$route.name === 'CategoryPage'"
              color="primary"
              icon="add_circle"
              label="EDIT"
              @click="EditCategory(category.id)"
            />
     
    
      </div>
    </div>
  </template>
  
  <script>

  import axios from "axios";  
 
  export default {
    name: "CategoryBox",
    data() {
      return {
        categories:[]
      };
    },
    methods: {
        async getCategories(){
            await axios.get(`http://localhost:8081/category/list`)
            .then(res=>{
                this.categories=res.data;
                console.log(res.data);
            })
            .catch(err=>{
                console.log(err);
            })
        },
        EditCategory(id){
          this.$router.push({ name: "AdminEditProduct", params: { id: id } });
        }
    },
    mounted(){
        this.getCategories();
    }
  };
  </script>
  
  <style>
  .image-container {
    border: 10px solid white;
    width: 220px;
    border-radius: 10px;
  }
  </style>
  