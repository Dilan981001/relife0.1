import { ProductService } from "@/services/ProductService";
export default {
    namespaced:true,
    state:{
        cart:[],
        cartCount:0
    },
    mutations:{
        // SET_ITEM: (state, item) => {
        //     let result = state.cart;
                
        //     let resObj = result.find(resObj => resObj.id === item.id);
        //     resObj ? resObj.count++ : result.push({'id':item.id, 'name': item.name, 'img':item.img, "price":item.price, 'count': 1});
        //     state.cart = result
        // },
        DEL_ITEM:(state,id)=>{
          state.cart.forEach((element,index) => {
                element.id===id ? state.cart.splice(index,1) : ''
          })
        },
        GET_CART_SUCCESS : function (state,payload){
            state.cart =payload
            state.cartCount=payload.length
            
          //  console.log(state.productsList.products);
           
        },
    },
    actions:{
        getCartItems: async function({commit},token){
            try {
                let response =await ProductService.getAllCartItems(token);
               
                commit("GET_CART_SUCCESS",response.data.cartItems)
               
            } catch (error) {
                console.log(error);
            }
        },
        ResetCartCount: function(){
        this.state.cartCount=0
    }
    //    setCart:function({commit},payload){
    //     return commit("SET_ITEM",payload);
    //    }
    // },

    // setCart({commit},payload){
    //     axios.post(`https://limitless-lake-55070.herokuapp.com/cart/add?token=${this.token}`,{
    //       productId:payload.id,
    //       quantity:payload.quantity,
  
    //     })
    //     .then(res=>{
    //       if(res.status==201){
    //         Swal.fire({
    //           text:"product has added in cart",
    //           icon:'success'
    //         })
    //       }
    //     }).catch(err=>{
    //       console.log(err);
    //     })
    // },

    }
}


// export default {
//     namespaced:true,
//     state:{
//         cart:[]
//     },
//     mutations:{
//         SET_ITEM: (state, item) => {
//             let result = state.cart;
                
//             let resObj = result.find(resObj => resObj.id === item.id);
//             resObj ? resObj.count++ : result.push({'id':item.id, 'name': item.name, 'img':item.img, "price":item.price, 'count': 1});
//             state.cart = result
//         },
//         DEL_ITEM:(state,id)=>{
//           state.cart.forEach((element,index) => {
//                 element.id===id ? state.cart.splice(index,1) : ''
//           })
//         },
       
//     },
//     actions:{
//        setCart:function({commit},payload){
//         return commit("SET_ITEM",payload);
//        }
//     }
// }