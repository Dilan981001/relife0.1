import {
    createStore
} from "vuex"
import categoryModule from "./modules/category.module"
import productModule from "@/store/modules/products.module"
import cartModule from "./modules/cart.module"


export default createStore({
    state: {
        productState: productModule.state,
        cartState: cartModule.state,
        categoryState: categoryModule.state
    },
    actions: {},
    mutations: {},
    modules: {
        productModule,
        cartModule,
        categoryModule
    },
    getters: {
        getProdutsState: function (state) {
        
            return state.productState.productsList;
        },
        getCartState: function (state) {
            return state.cartState.cart;
        },
        getCartCountState: function (state) {
            
            return state.cartState.cartCount;
        }
        ,
        getCartTotalCount: function (state) {
            // let sum = 0;
            // state.cartState.cart.forEach((each) => {
            //     sum = sum + each;
            // });
            return state.cartState.cart.length;
        },
        getTotalPrice: (state) => {
            let total = 0;
            state.cartState.cart.forEach((each) => {
                total = total + each.price * each.count;
            });
            return parseFloat(total).toFixed(2);
        },
        getCategoryName:(state)=>{
            return state.categoryState.name
        },
        getCategoryDescription:(state)=>{
            return state.categoryState.description
        },
        getCategoryState:(state)=>{
            return state.categoryState.categoriesList.categories
        }

    }
})