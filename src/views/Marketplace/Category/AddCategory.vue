<template>
<div class="row">
 <NavBar/>
</div>

  <div class="column items-center justify-center q-mt-lg">
    Add Caregory
    <div class="q-pa-md bg-red q-mt-lg" style="max-width: 400px">
      <q-form class="q-gutter-md" @submit="addCategory()">
        <q-input
          class="bg-white"
          dense
          filled
          v-model="categoryName"
          label="Name "
        />
        <q-input v-model='categoryDescription'
          class="bg-white"
          dense
          filled
          label="Description "
        />
        <q-input v-model='categoryImage'
          class="bg-white"
          dense
          filled
          label="Category Image "
        />
        <div>
          <q-btn label="Submit" type="submit" color="primary" />
        </div>
      </q-form>
    </div>
  </div>
</template>

<script >
import axios from 'axios';
import Swal from 'sweetalert2';
import NavBar from "@/components/Marketplace/NavBar.vue";

export default {

components: {
        NavBar,
    },
data(){
  return {
    categoryName:'',
    categoryDescription:'',
    categoryImage:''
  }
},
methods:{
 async addCategory(){
    const newCategory={
      categoryName:this.categoryName,
      description: this.categoryDescription,
      imageUrl: this.categoryImage
    }
    
   
      axios({
        method: "post",
        url: `http://localhost:8081/category/create`,
        data: JSON.stringify(newCategory),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(() => {
         Swal.fire({
          text:"Category added successfully",
          icon:"success",
         })
         this.$router.push({ name: "CategoryPage" });
       
        })
        .catch((err) => {
          console.log(err);
        });
    
  }
}


}
</script>

<style scoped></style>
