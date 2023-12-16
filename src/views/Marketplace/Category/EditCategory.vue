<template>
    <div class="column items-center justify-center q-mt-lg">
    Edit Category
    <div class="q-pa-md bg-red q-mt-lg" style="max-width: 400px">
      <q-form class="q-gutter-md" @submit="editCategory()">
    
        <q-input v-model='category.categoryName'
          class="bg-white"
          dense
          filled
          label="Category "
        />
        <q-input v-model='category.description'
          class="bg-white"
          dense
          filled
          label="Description "
        />
        <q-input v-model='category.imageUrl'
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


<script>
import { mapGetters } from 'vuex';
import Swal from 'sweetalert2';
import axios from 'axios';
export default{
    data(){
        return{
            category:{},
            id:null
        }
    },
    methods:{
        async editCategory(){
          console.log(this.category);
         await axios.post(`http://localhost:8081/category/update/${this.id}`,this.category)
         .then(()=>{
            this.$router.push({name:'CategoryPage'})
            Swal.fire({
          text:"Category Edited successfully",
          icon:"success",
         })
         }
        )
        .catch(error=>{
            console.log(error);
        })
      },

    },
    mounted(){
     
        this.$store.dispatch("categoryModule/getCategories");
        this.id= this.$route.params.id;
        this.category= this.categoryState.find(category=>category.id==this.id);
       
    },
    computed: mapGetters({
      categoryState: "getCategoryState",
})
}

</script>