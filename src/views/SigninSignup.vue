<template>
  <q-page class="login-page">
    <div class="left-panel">
      <div class="login-form">
        <div class="login-label">
          <span class="label-text">RELIFE</span>
        </div>

        <div class=" row1 form-actions">
      <q-btn class="q-mr-md-d" type="submit" label="Finder " />
      <q-btn class="q-mr-md-d" to="/signinprovider" label="Provider " />
    </div>

       <form @submit.prevent="LoginData" method="post">
    <div class="form-group">
      <label for="email" >Finder Email</label>
      <input type="email" id="email" v-model="user.email" required/>
    </div>
    <div class="form-group">
      <label for="password">Finder Password</label>
      <input type="password" id="password" v-model="user.password"  required/>
    </div>
    <div class="form-actions">
     <q-btn class="q-mr-md-d" type="submit" label="Sign In" />
     <q-btn class="q-mr-md-d" to="/signup" label="Sign Up" />
    </div>
  </form>
      </div>
   
    </div>
   
    <div class="right-panel">
      <div class="top-panel">
        <q-btn-group flat  >
          <q-img src="relife3.ico" width="60px" height="35px" class="q-mr-md" />
          <div class="form-actions">
            <q-btn to="/home" label="HOME" class="q-mr-md" />
          </div>
          <div class="form-actions">
            <q-btn label="ABOUT US" class="q-mr-md" to="/aboutus" />
          </div>
          <div class="form-actions">
            <q-btn label="NOTIFICATIONS" class="q-mr-md"/>
          </div>
          <div class="form-actions">
            <q-btn label="DONATE" class="q-mr-md" />
          </div>
          <div class="form-actions">
            <q-btn to="/marketplace" label="MarketPlace" class="q-mr-md" />
          </div>

        </q-btn-group>
      </div>
      <div class="middle-panel">
        <q-img src="s2.jpg" width="500px" height="600px" class="rounded-borders" />
      </div>
    </div>
  </q-page>
</template>

<script>
      
       import axios from 'axios';
       import Swal from 'sweetalert2';
    
export default {
  name: 'SigninSignup',
  data() {
    return {
      result: {},
           user:{
              email: '',
              password: ''
           }
    };
  },
  created() { 
       },
       mounted() {
             console.log("mounted() called.......");
         },
  methods: {
    
    LoginData() {
      const dataToSend = {
        email: this.user.email,
        password: this.user.password
      };
      

 
axios.post("http://localhost:8081/user/login", dataToSend)
        .then(response => {
          const status = response.data.status;
          // const msg= response.data.message;
        //  alert(status);
          if (status === false) {
            Swal.fire({
          text:"Incorrect Email and Password not match",
          icon:"error",
         })
           // alert("Incorrect Email and Password not match");
          } else {
            Swal.fire({
          text:"Login Success",
          icon:"success",
         })
            this.$router.push('/finderdashf');
            localStorage.setItem("token",response.data.token);
          }
        })
        .catch(error => {
          console.error(error);
          //alert(error);
        });
              },
    submitForm() {
      // Perform sign-in logic here
      this.goToFullDashboard();
    },
    goToFullDashboard() {
      this.$router.push('/fulldashboard');
    }
  
  }
}
</script>

<style scoped>
.login-page {
  display: flex;
  height: 100vh;
}

.login-label {
  text-align: center;
}

.label-text {
  color: #284b36; /* change color to desired color */
  font-size: 50px; /* change font size to desired size */
  font-weight: bold; /* make the text bold */
}

.left-panel {
  flex: 1;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}


.login-form {
  max-width: 400px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
}

.form-group input {
  display: block;
  width: 100%;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
}

.form-actions {
  display: flex;
  justify-content: space-between;
}

.right-panel {
  flex: 1;
  background-color: #284b36;
  display: flex;
  flex-direction: column;

}

.top-panel {
  color: #cccccc;
  display: flex;
  justify-content: flex-start;
  padding: 20px;
  font-weight: bold;
  height: 20px;

}

.profile-pic {
  width: 100%;
  max-width: 200px;
  border-radius: 50%;
  margin: 0 auto;
  display: block;
}

.middle-panel {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
}
.rounded-borders{
  border-top-right-radius: 70px;
  border-bottom-right-radius: 300px;
  border-bottom-left-radius: 70px;
  border-top-left-radius: 300px;
}
.q-mr-md{
  left-margin:10px;
}
.q-mr-md-d{
  font-weight: bold;
  color: #ffffff;
  background: #284b36;
}
@media (max-width: 768px) {
  .right-panel {
    display: none;
  }

  .top-links {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    background-color: #284b36;
    color: #ffffff;
    border-radius: 10px;
    position: absolute;
    top: 70px;
    right: 20px;
    z-index: 1;
  }

  .menu-button {
    display: block;
    background-color: transparent;
    border: none;
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 2;
  }

  .bar {
    display: block;
    width: 20px;
    height: 3px;
    background-color: #ffffff;
    margin: 4px 0;
  }
}

</style>