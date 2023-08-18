<template>
    <div class="column items-center justify-center q-mt-lg">
      <h2>Log In</h2>
  
      <div class="q-pa-md bg-red q-mt-lg" style="max-width: 400px">
        <q-form @submit.prevent="onSubmitLogin" class="q-gutter-md">
          <q-input
            filled
            dense
            class="bg-white"
            v-model="email"
            label=" Enter Your Email "
          />
          <q-input
            filled
            dense
            class="bg-white"
            type="password"
            v-model="password"
            label=" Enter Your password "
          />
  
          <div>
            <q-btn
              class="bg-white"
              text-color="black"
              label="Submit"
              type="submit"
              color="primary"
            />
          </div>
          <p><router-link to="/signup" >Sign Up</router-link></p>
        </q-form>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    name: "LogIn",
    data() {
      return {
        email: "",
        password: "",
      };
    },
    methods: {
   async  onSubmitLogin(){
    const body ={
        email:this.email,
        password:this.password
      }
           await axios.post(`https://limitless-lake-55070.herokuapp.com/user/signIn`,body)
          .then((res)=>{
            localStorage.setItem("token",res.data.token)
            this.$store.dispatch("cartModule/getCartItems",this.token);
            this.$router.push({name:'home'})
          //  this.$router.push({name:"home"})
          })
              
        }
    },
  //   mounted(){
  //     let user = localStorage.getItem("user-info");
  //     if(user){
  //       this.$router.push({name:"home"})
  //     }
  // }
  
  };
  </script>
  