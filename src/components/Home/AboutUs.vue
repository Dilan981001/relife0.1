<template>
  <div class="background">
  <div>
    <NavBar/>
  </div>
  <div class="box1"></div>
  <div class="box1"></div>
    <div class="row">
      <div class="col">
        <h1>INTRODUCTION</h1>
        <h2>Re Life 1.0</h2>
  
        <img src="i2.jpeg" class="img2" alt="img1" width="400" height="400" />
      </div>
  
      <div class="col">
        <h6>
          This system is designed to help abandoned people such as children who engage in labor work without completing their studies at an early age, elders who are forsaken by their own children, disabled people, and also beggars who don't have a place to live, work, or food to eat. All these people are suffering. Here, users can ask for refuge. On the other hand, they can provide refuge.
        </h6>
  
        <div class="row">
          <div class="col">
            <h1>ABOUT</h1>
            <h2>Re Life 1.0</h2>
          </div>
        </div>
        <br />
        <div class="row">
          <h6>
            This system helps monitor individuals who have been abandoned and helps determine their needs to provide necessary assistance. It also provides timely assistance and the necessary support and information to these individuals. The Abandoned People Management System is designed to provide the necessary support and guidance to abandoned people. It helps identify individuals who require assistance and provide necessary help to them. The system also helps track the progress of abandoned people and monitor their development.
          </h6>
        </div>
        <div class="row">
          <div class="row">
            <div class="col"></div>
            <div class="col">
              <br />
              <button type="button" class="rec3">LET’S GET IN TOUCH</button>
            </div>
            <div class="col"></div>
          </div>
        </div>
      </div>
     
    </div>
    <div>
      <PageFooter/>
    </div>
  </div>
  </template>

  <script>
import PageFooter from '../PageFooter.vue';
import NavBar from '../NavBar.vue';

export default {
  components: {
    PageFooter,
    NavBar,
},
  // other component options
}
</script>
  
  <style scoped>
  .background {
    background-color: #284b36;
    position: relative; /* Ensure relative positioning */
    background-image: url('/public/Vector 40.png'),url('/public/Vector 7.png'),url('/public/Vector 8.png'),url('/public/Vector 14.png'),url('/public/Vector 19.png'),url('/public/Vector 18.png'); /* Set the path to your background image */
    background-position: 25px 100px,10px 1268px,12px 1554px,14px 2287px,12px 3604px,10px 3883px; /* Center the background image */
    background-repeat: no-repeat; /* Prevent the background image from repeating */
  }

  .rec3 {
    border-radius: 25px;
    background: rgba(255, 255, 255, 0.238);
    padding: 10px;
    width: 250px;
    height: 50px;
    font-family: "Montserrat";
    font-size: 15px;
    font-weight: bold;
    color: rgb(255, 255, 255);
    align-content: center;

  }

  .box1 {
    /* Adds margin space at the bottom of the box */
    padding: 5px;
  }

  .col {
    padding-left: 100px;
    padding-right: 50px;
  }



  .img2 {
    display: inline-block;
    width: 70%;
    height: auto;
    height: auto;
    border-top-right-radius: 70px;
    border-bottom-right-radius: 250px;
    border-bottom-left-radius: 70px;
    border-top-left-radius: 250px;
    border: 25px solid #00000040; /* Replace #000 with your desired border color */
  }

  h1 {
    color: white;
    font-size: 40px;
    font-weight: bold;
    text-align: justify;
  }
  h2 {
    color: white;
    font-size: 40px;
    font-weight: lighter;
    text-align: justify;
  }
  


    @media (max-width: 768px) {
      width: 100%;
    }

    @media (max-width: 768px) {
      width: 100%;

  }
    @media (max-width: 768px) {
      width:

    100%;


      h6 {
        font-family: "Montserrat";
        font-size: 20px;
        text-align: left;
        color: white;
      }

      p1 {
        font-family: "Montserrat";
        font-size: 40px;
        font-weight: bold;
        text-align: left;
        background-image: linear-gradient(
            to right,
            white,
            green
        ); /* Adjust the gradient colors */
        background-clip: text;
        -webkit-background-clip: text; /* For Safari */
        color: transparent;
      }

      p2 {
        font-family: "Montserrat";
        font-size: 20px;
        font-weight: normal;
        text-align: left;
        color: white;
      }

      p3 {
        font-family: "Montserrat";
        font-size: 20px;
        font-weight: bold;
        text-align: left;
        color: white;
      }

      p4 {
        font-family: "Montserrat";
        font-size: 15px;
        font-weight: normal;
        text-align: left;
        color: white;
      }
    }
  </style>
  