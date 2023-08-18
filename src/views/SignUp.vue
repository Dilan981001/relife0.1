<template>
  <q-page class="login-page">
    <div class="left-panel">
      <div class="left-top-panel">

       <!-- <q-btn label="SIGN IN" to="/signin" class="q-mr-md-e" />-->

      </div>

      
      <div class="login-form"   >
        <div class="login-label">
          <span class="label-text">RELIFE</span>
        </div>
        
      <form @submit.prevent="saveData" method="post">
  <div class="form-group">
    <label for="fullname">Full Name</label>
    <input type="text" name="fullname" id="fullname" v-model="user.fullname" />
  </div>
  <div class="form-group">
    <label for="email">Email</label>
    <input type="email" name="email" id="email" v-model="user.email" />
  </div>
  <div class="form-group">
    <label for="password">Password</label>
    <input type="password" name="password" id="password" v-model="user.password" />
  </div>
  <div class="form-group">
    <label for="confirmPassword">Confirm Password</label>
    <input type="password" id="confirmPassword" v-model="confirmpassword" />
  </div>
  <div class="form-actions">
    <q-btn class="q-mr-md-d" type="submit" label="CREATE ACCOUNT" />
  </div>
</form>


      </div>
    
    </div>

    <div class="right-panel">
      <div class="top-panel">
        <q-btn-group flat>
          <q-img src="relife3.ico" width="60px" height="35px" class="q-mr-md" />
          <div class="form-actions">
            <q-btn to="/home"  label="HOME" class="q-mr-md" />
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
        <q-img src="c1.jpg" width="500px" height="600px" class="rounded-borders" />
      </div>
    </div>
  </q-page>
</template>

<script>

  import axios from 'axios';
 

export default {
  
  data() {
    return {
      result:{},
      user:{
        fullname:"",
        email: "",
      password: ""
      }
      
    }
  },
  created(){

  },
  mounted() {
                 console.log("mounted() called.......");
             },

  methods: {
  
    saveData() {
    const dataToSend = {
      fullname: this.user.fullname,
      email: this.user.email,
      password: this.user.password
    };
    axios.post("http://localhost:8081/user/save", dataToSend)
      .then(response => {
        if (!response.data.success) {                 
          alert("User Registration Successful");
          this.$router.push('/signin');
        } else {
          console.log(response.data.error);
          alert("Failed to register user: " + response.data.message);
          
        }
      })
      .catch(error => {
        console.error(error);
        alert("An error occurred while registering user");
      });
  },
    submitForm() {
      // Perform sign-in logic here
      this.goToFullDashboard();
    },
    goToFullDashboard() {
      this.$router.push('/signin');
    },
  },
};
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

  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.q-mr-md-d
{
  font-weight: bold;
  background: #284b36;
  color: #ffffff;
}


.login-form {
  margin-top: 100px;
  margin-left: 180px;
  max-width: 350px;
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
.left-top-panel {
  color: #284b36;
  display: flex;
  justify-content: left;
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
.q-mr-md-e{
  color: #ffffff;
  background: #284b36;
}
@media (max-width: 768px) {
  .right-panel {
    display: none;
  }

  .login-form {
    margin: 20px;
  }

  .left-panel {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 60px;
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

  .top-links {
    position: absolute;
    top: 0;
    right: 0;
    background-color: #284b36;
    width: 300px;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
  }

  .left-top-panel {
    padding: 10px;
  }
}
</style>