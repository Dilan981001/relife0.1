<template>
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
        <div>
          <q-btn label="Submit" type="submit" color="primary" />
        </div>
      </q-form>
    </div>
  </div>
</template>

<script >
import axios from 'axios';



export default{
data(){
  return {
    categoryName:'',
    categoryDescription:''
  }
},
methods:{
 async addCategory(){
    const newCategory={
      categoryName: "asdasd",
      categoryDescription: "asdasd",
      imageUrl: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80"
    }
    
    const baseURL = "https://limitless-lake-55070.herokuapp.com";
      axios({
        method: "post",
        url: `${baseURL}/category/create`,
        data: JSON.stringify(newCategory),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
         console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    
  }
}
//   computed: {
//   categoryName: {
//     get(){
//       return this.$store.state.categoryState.name
//     },
//     set (value) {
//       this.$store.commit('categoryModule/SET_CATEGORY_NAME', value)
//     }
//   },
//   categoryDescription: {
//     get(){
//       return this.$store.state.categoryState.description
//     },
//     set (value) {
//       this.$store.commit('categoryModule/SET_CATEGORY_DESCRIPTION', value)
//     }
//   },
// }

}
</script>

<style scoped></style>
