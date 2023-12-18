<template >
<div class="container">
<div class="row">
 <NavBar/>
</div>

<div class="row">
<q-btn
          color="green"
          icon="chevron_left"
          label="Back to Dashboard"
          to="/fulldashboard"
          class="q-mt-xl q-mb-xl"
          style="margin-left:100px;"
        />
</div>

  <div class="container row justify-center q-pt-lg" >

  
    <q-btn
        v-if="$route.name === 'CategoryPage'"
              color="primary"
              icon="add_circle"
              label="ADD CATEGORY"
              to="/admin/category/add"
         />
        </div>
    <div class="container row justify-center q-pt-lg q-mt-lg ">
      
    

        <CategoryBox />
    
    </div>
  </div>
  </template>
  
  <script>
  import CategoryBox from '@/components/Marketplace/CategoryBox.vue';
  import NavBar from "@/components/Marketplace/NavBar.vue";

  export default {
    name: "CategoryPage",
    components: {
        CategoryBox,
        NavBar
    },
  };
  </script>
  
  <style scoped>
  
  
  .container{
  background-color: #284b36;
  
  margin-top: 0;
  }
  </style>
  
