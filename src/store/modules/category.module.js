import  {ProductService}  from "@/services/ProductService"
export default {

    namespaced:true,
    state:{
        name:'',
        description:'',
        categoriesList:{
            categories:[]
        }
    },
    mutations:{
     
    SET_CATEGORY_NAME:(state,val)=>{
        state.name=val;
    },
    SET_CATEGORY_DESCRIPTION:(state,val)=>{
        state.description=val;
    },
    GET_CATEGORY_SUCCESS : function (state,payload){
        state.categoriesList.categories =payload.categories
      //  console.log(state.productsList.products);
       
    }},
    actions:{
        getCategories: async function({commit}){
            try {
                let response =await ProductService.getAllCategories()
               
                commit("GET_CATEGORY_SUCCESS",{categories:response.data})
               
            } catch (error) {
                console.log(error);
            }
        }
    }
    }
