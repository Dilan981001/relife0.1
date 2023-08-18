<template>
  <div class="column items-center justify-center q-mt-lg">
    <h2>Sign Up</h2>

    <div class="q-pa-md bg-red q-mt-lg" style="max-width: 400px">
      <q-form @submit.prevent="SignUp" class="q-gutter-md">
        <q-input
          filled
          dense
          class="bg-white"
          v-model="fname"
          label=" Enter First name "
        />
        <q-input
          filled
          dense
          class="bg-white"
          v-model="lname"
          label=" Enter Last name "
        />
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
          v-model="password"
          type="password"
          label=" Enter Your password "
        />
        <q-input
          filled
          dense
          class="bg-white"
          v-model="cpassword"
          type="password"
          label=" Confirm Your password "
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
        <p><router-link to='/login'>LogIn</router-link></p>
      </q-form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "app",
  data() {
    return {
      fname: "",
      lname: "",
      email: "",
      password: "",
      cpassword:""
    };
  },
  methods: {
    async SignUp() {
      
      if(this.password === this.cpassword){
        const user = {
          fname: this.fname,
          lname:this.lname,
          email:this.email,
          password:this.password
        }

       await axios.post('https://limitless-lake-55070.herokuapp.com/user/signup',user)
       .then(()=>{
        localStorage.setItem("user-info",JSON.stringify(user))
        this.$router.push({name:"login"})
       })
       .catch(err=>{
        console.log(err);
       })
      }else{
        //error
      }
      this.name='';
      this.email='';
      this.password='';
     
    },
  },
  // mounted(){
  //     let user = localStorage.getItem("user-info");
  //     if(user){
  //       this.$router.push({name:"home"})
  //     }
  // }
};
</script>
