import  {ProductService}  from "@/services/ProductService"

export default {
    namespaced:true,
    state:{
        productsList:{
            products:[]
        }
    },
    mutations:{
        GET_PRODUCT_SUCCESS : function (state,payload){
         
            state.productsList.products =payload.products
          //  console.log(state.productsList.products);
           
        }
    },
    actions:{
        getProducts: async function({commit}){
            try {
                let response =await ProductService.getAllProducts()
            
                commit("GET_PRODUCT_SUCCESS",{products:response.data})
               
            } catch (error) {
                console.log(error);
            }
        }
    }
}