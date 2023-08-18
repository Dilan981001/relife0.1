import axios from 'axios';

export class ProductService{

   // static serverURL = `https://dummyjson.com/products`;
   static serverURL = `https://limitless-lake-55070.herokuapp.com`;


    static getAllProducts(){
        let dataURL = `https://limitless-lake-55070.herokuapp.com/product/`;
        return axios.get(dataURL)
    }

    static getProduct(productId){
        let dataURL =`${this.serverURL}/product/${productId}`
        return axios.get(dataURL)
    }

    static getAllCategories(){
        let dataURL = `https://limitless-lake-55070.herokuapp.com/category/`;
        return axios.get(dataURL)
    }

    static getAllCartItems(token){
        let dataURL = `https://limitless-lake-55070.herokuapp.com/cart/?token=${token}`;
        return axios.get(dataURL)
    }
}