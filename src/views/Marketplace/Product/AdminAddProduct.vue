<template>
  <div class="column items-center justify-center q-mt-lg">
    Add Product
    <div class="q-pa-md bg-red q-mt-lg" style="max-width: 400px">
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
        <div>
          <q-btn label="Submit" type="submit" color="primary" />
        </div>
      </q-form>
    </div>
    {{ categoryState.categories }}
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
export default {
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

        axios.post('https://limitless-lake-55070.herokuapp.com/product/add',newProduct)
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
