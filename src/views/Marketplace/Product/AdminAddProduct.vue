<template>
<div class="row">
 <NavBar/>
</div>

  <div class="column items-center justify-center q-mt-lg">
    Add Product
    <div class="q-pa-md bg-green q-mt-lg" style="width: 600px; border-radius: 10px;" >
      <q-form class="q-gutter-md" @submit="addProduct()">
        <label>Category</label>
        <select v-model="categoryId" class="select" >
          <option v-for="category in categoryState" :key="category.id" :value="category.id">{{
            category.categoryName
          }}</option>
        </select>

        <q-input
        v-model="name"
          class="bg-white"
          dense
          filled
          label="Name "
        />
        <q-input
        v-model="description"
          class="bg-white"
          dense
          filled
          label="Description "
        />
        <q-input
        v-model="imageURL"
          class="bg-white"
          dense
          filled
          label="Image URL "
        />
        <q-input
        v-model="price"
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
    {{ categoryState.categories }}
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
import NavBar from "@/components/Marketplace/NavBar.vue";
export default {
  components: {
        NavBar
    },

    data(){
        return {
            id:null,
            categoryId:null,
            name:null,
            description:null,
            imageURL:null,
            price:null
        }
    },
  methods:{
    addProduct(){
        const newProduct ={
            categoryId: this.categoryId,
            description: this.description,
            name: this.name,
            imageURL:this.imageURL,
            price:this.price  
        }

        axios.post('http://localhost:8081/product/add',newProduct)
        .then(
            this.$router.push({name:'AdminProduct'})
        )
        .catch(error=>{
            console.log(error);
        })
    }
  },

  mounted() {
    //this.getProducts();
    this.$store.dispatch("categoryModule/getCategories");
  },
  computed: mapGetters({
    categoryState: "getCategoryState",
  })
};
</script>


<style scoped>
.label,.select{
    padding: 10px 20px 10px 20px;
}
</style>
