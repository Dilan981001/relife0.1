import axios from 'axios';

export class ProductService{

   // static serverURL = `https://dummyjson.com/products`;
 //  static serverURL = `https://limitless-lake-55070.herokuapp.com`;
 static serverURL = `http://localhost:8081/`;

    static getAllProducts(){
        let dataURL = `http://localhost:8081/product/`;
       
        return axios.get(dataURL)
    }

    static getProduct(productId){
        let dataURL =`${this.serverURL}/product/${productId}`
        return axios.get(dataURL)
    }

    static getAllCategories(){
        let dataURL = `http://localhost:8081/category/list`;
        return axios.get(dataURL)
    }

    static getAllCartItems(token){
        let dataURL = `http://localhost:8081/cart/?token=${token}`;
        return axios.get(dataURL)
    }
}