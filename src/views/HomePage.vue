import Navbar from "@/components/NavBar.vue"

<template>
  
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.6.1/font/bootstrap-icons.css">
  <div class="background">
    <div class="box1"></div>
   
    <div>
      <nav-bar/>
    </div>

    <div class="box2"></div>

    <div class="p-3 mb-2 bg-success text-white">
      <div class="container text-left">
        <div class="row">
          <div class="col">
            <div class="r1 text-left ml-4">
              <p1 class="h1">Provide Refuge to</p1>
              <br />
              <p1 class="h1">The Abandoned People</p1>
            </div>
            <div class="row2">
              <div class="col2">
                <p2 class="text-left ml-4 mt-4 mb-0">
                  Help abandoned people to build their lives with your help by
                  providing refuge and a fresh start. Support them to succeed in
                  their future and let's create a better society by showing our
                  heartfelt love.
                </p2>
              </div>
            </div>
            <div class="row3">
              <div class="col3">
                <br /><br />
                <q-btn class="rec3" role="button">Join and help them</q-btn>



                  <i class="bi bi-arrow-right-circle" style="font-size: 34px"></i>

              </div>
            </div>
          </div>
          <div class="col">
            <img
              src="i1.jpeg" class="img1" alt="img1" width="400" height="300" />
          </div>
        </div>
        <br />
        <br />


        <div class="rec6 d-flex justify-content-center align-items-center">
          <div class="row">
            <div class="col4">
              <a class="rec" href="#!" role="button">
                <i class="bi bi-geo-alt"></i>
              </a>
              <p3>Pay Us a Visit</p3>
            </div>
            <div class="vertical-line"></div>
            <div class="col4">
              <div type="label">
                <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                  <i class="bi bi-telephone"></i>
                </a>
                <p3>Give Us a Call</p3><br>
                <p4>+94702516984</p4>
              </div>
            </div>
            <div class="vertical-line"></div>
            <div class="col4">
              <div type="label">
                <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                  <i class="bi bi-envelope"></i>
                </a>
                <p3>Send Us a Message</p3><br>
                <p4>reelife001@gmail.com</p4>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

  <br />
  <br />


  <div class="box1"></div>

  <div class="row">
    <!--left side of Introduction-->
    <div class="col">
      <div class="colrr">
      <h1>INTRODUCTION</h1>
      <div class="colr">
        <div class="c1">
      <h4>Re Life </h4>
    </div>
      <div class="c2" > <i class="bi bi-arrow-right" style="font-size: 34px" ></i>
      </div>
    </div>
      <img src="i2.jpeg" class="img2" alt="img1" width="400" height="400" />
    </div>
    </div>
<!-- right side of the introduction -->
    <div class="col">
      <div class="coll">
      <h6>
        This system is designed to help abandoned people such as children who engage in labor work without completing their studies at an early age, elders who are forsaken by their own children, disabled people, and also beggars who don't have a place to live, work, or food to eat. All these people are suffering. Here, users can ask for refuge. On the other hand, they can provide refuge.
      </h6>
      <div class="row">
        <div class="coll2">
          <h1>ABOUT</h1>
          <div class="c3">
          <h4>Re Life</h4>
        </div>
        </div>
      </div>
      <!--childeren home part-->
      <br />
      <div class="row">
        <div class="c4">
        <h6>
          This system helps monitor individuals who have been abandoned and helps determine their needs to provide necessary assistance. It also provides timely assistance and the necessary support and information to these individuals. The Abandoned People Management System is designed to provide the necessary support and guidance to abandoned people. It helps identify individuals who require assistance and provide necessary help to them. The system also helps track the progress of abandoned people and monitor their development.
        </h6>
        </div>
      </div>
      <div class="row">
        <div class="row">
        
          <div class="col">
            <br />
            <q-btn type="button" class="rec5">LET’S GET IN TOUCH</q-btn>
          </div>
        
        </div>
      </div>
    </div>
    </div>
   
  </div>

 
  <div class="box1"></div>

  <div>
    <children-home-cards/>
  </div>


  <div class="box1"></div>

  <div class="p-3 mb-2 bg-success text-white">
    <div class="container text-center">
      <!-- 2 column grid layout with text inputs for the first and last names -->
      <div class="form1">
        <br />
        <form>
          <p1 class="text-uppercase">JOIN WITH US</p1><br />
          <p1 class="text-uppercase">Let’s Build Better Life For Them</p1
          ><br /><br />
          <div class="row mb-4">
            <div class="col">
              <div class="form-outline">
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputFirstName"
                  placeholder="First Name"
                />
              </div>
            </div>
            <div class="col">
              <div class="form-outline">
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputLastName"
                  placeholder="Last Name"
                />
              </div>
            </div>
          </div>

          <div class="row mb-4">
            <div class="col">
              <div class="form-outline">
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  placeholder="Email"
                />
              </div>
            </div>
            <div class="col">
              <div class="form-outline">
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPhoneNumber"
                  placeholder="Phone Number"
                />
              </div>
            </div>
          </div>

          <!-- Message input -->
          <div class="form-outline mb-4">
            <textarea
              class="form-control"
              id="form6Example7"
              rows="4"
              placeholder="Additional Information"
            ></textarea>
          </div>
          <!-- Submit button -->
          <a class="form-control" href="#!" role="button">Join and help them</a
          ><br /><br />
        </form>
      </div>
    </div>
  </div>

  <hr class="horizontal-line" />
<div>
  <page-footer/>
</div>
  
  </div>
</template>

<script>
import ChildrenHomeCards from '@/components/Home/ChildrenHomeCards'
import NavBar from "@/components/NavBar.vue"
import PageFooter from "@/components/PageFooter.vue"


export default {
  components: {
    ChildrenHomeCards,
    NavBar,
    PageFooter,

    

  },
  // other component options
}
</script>


<style scoped>
.background {
  background-color: #284b36;
  position: relative;
  /* Ensure relative positioning */
  background-image: url('/public/Vector 40.png'), url('/public/Vector 7.png'), url('/public/Vector 8.png'), url('/public/Vector 14.png'), url('/public/Vector 19.png'), url('/public/Vector 18.png');
  /* Set the path to your background images */
  background-position: 25px 100px, 10px 1268px, 12px 1554px, 14px 2287px, 12px 3604px, 10px 3883px;
  /* Center the background images */
  background-repeat: no-repeat;
  /* Prevent the background images from repeating */
}
.rec5{
  border-radius: 25px;
  background:linear-gradient(to right, #284b36, rgba(255, 255, 255, 0.238));
  padding: 10px;
  width: 250px;
  height: 50px;
  font-family: "Montserrat";
  font-size: 15px;
  font-weight: bold;
  color: rgb(255, 255, 255);
  align-content: center;
  margin-left: -100px;
  margin-top: -50px;
}
.c1{
  margin-top: 10px;
}
.c3{
  margin-top: -50px;
}
.c4{
  margin-top: -70px;
}
.coll{
  margin-left: -200px;
  padding-right: 50px;
}
.coll2{
  margin-top: -70px;
}
.c2{
  margin-left: 50px;
  margin-top: 50px;
}
.colr{
  display: flex;
  margin-top: -80px;
}
.col2 {
  margin-top: 20px;
}
.bi-arrow-right-circle{
  margin-left: 20px;
  position: absolute;
  
}
.bi{
color: #ffffff;
align-items: center;
margin-right: 20px;
font-size: 20px;

}
.horizontal-line {
  border: none;
  margin: 50px 0; /* Adjust the margin as needed */
  background: #284b36;
}
.box2 {
  margin-bottom: 30px; /* Adds margin space at the bottom of the box */
  padding: 20px; /* Adds padding space inside the box */
  margin-top: 30px;
}
.box1 {
  /* Adds margin space at the bottom of the box */
  padding: 5px;
}
.form-actions {
  display: flex;
  justify-content: space-between;
}
.col {
  padding-left: 100px;
  padding-right: 50px;
}
.col4{

  padding-left: 100px;
  padding-right: 100px;
  text-align: center;
}
.q-mr-md-d-d {
  font-weight: bold;
  background: #284b36;
  color: #ffffff;
}
.vertical-line {
  width: 1px;
  height: 50px; /* Adjust the height as needed */
  background-color: rgb(255, 255, 255); /* Adjust the color as needed */
  margin: 0 0px; /* Adjust the margin as needed */
}
.rec1 {
  border-radius: 25px;
  background: #284b36;
  padding: 10px;
  width: 250px;
  height: 50px;
  font-family: "Montserrat";
  font-size: 15px;
  font-weight: bold;
  color: rgb(255, 255, 255);
  align-content: center;
}
.img1 {
  width: 75%;
  height: auto;
  border-top-right-radius: 150px;
  border-bottom-right-radius: 150px;
  border-bottom-left-radius: 370px;
  border-top-left-radius: 150px;
  border: 25px solid #00000040; /* Replace #000 with your desired border color */
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
.q-mr-md {
  margin-left: 5px;
}
.q-mr-md-d {
  font-weight: bold;
  color: #ffffff;
  background: #284b36;
}
.rec6 {
  border-radius: 70px;
  background: linear-gradient(to right, rgba(255, 255, 255, 0.255), rgba(21, 43, 21, 0.479));
  padding: 20px;
  height: 100px;
  font-family: "Montserrat";
  font-size: 25px;
  justify-content: center;
  margin-left: 100px;
  margin-right: 100px;

}
.h1 {
  border-left-width: 20px;
}
.horizontal-line {
  border: none;
  border-top: 1px solid black; /* Adjust the line style as needed */
  margin-top: 0px 0; /* Adjust the margin as needed */
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
h4{
  color: white;

  font-weight: lighter;
  text-align: justify;
}
h6{
  text-align: justify;
}

.rec3 {
  border-radius: 25px;
  background:linear-gradient(to right, #284b36, rgba(255, 255, 255, 0.238));
  padding: 10px;
  width: 250px;
  height: 50px;
  font-family: "Montserrat";
  font-size: 15px;
  font-weight: bold;
  color: rgb(255, 255, 255);
  align-content: center;

}
.card-img-top {
  border-radius: 50%;
  border: 8px solid #284b36;
  width: 200px;
  height: 200px;
  @media (max-width: 768px) {
    width: 100%;
  }
}
.card {
  height: 600px;
  width: 250px;
  background: #1d402b;
  border-radius: 30px 30px 30px 30px;
  padding-top: 30px;
  padding-bottom: 30px;
  display: grid;
  @media (max-width: 768px) {
    width: 100%;
  }
}
.rec4 {
  border-radius: 20px;
  background-image: linear-gradient(to right, green, white);
  padding: 20px;
  width: 150px;
  height: 10px;
  font-family: "Montserrat";
  font-size: 15px;
  color: white;
  align-content: center;
}
.form1 {
  height: auto;
  width: 80%;
  background: #1d402b;
  border-color: white;
  border-radius: 30px 30px 30px 30px;
  padding: 30px;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 5%);
  @media (max-width: 768px) {
    width: 100%;
  }
}
.form-control {
  background: #284b36;
  color: white;
  border-radius: 30px 30px 30px 30px;
  border-color: white;
  padding: 10px;
  margin: 15px 15px 15px 15px;
  width: 100%;
  height: auto;
}
.footer {
  background: #284b36;
}
.blank-space {
  margin-top: 100px; /* Adjust the top margin as needed */
  margin-bottom: 20px; /* Adjust the bottom margin as needed */
  background: #284b36;
}

.right-panel {
  margin-left: 270px;
  display: flex;
}

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

.top-panel {
  color: #cccccc;
  display: flex;
  justify-content: flex-start;
  padding: 20px;
  font-weight: bold;
  height: 20px;
}

.text-white {
  font-family: "Montserrat";
  font-size: 15px;
  font-weight: bold;
}

.img4 {
  border-radius: 10px 10px 10px 10px;
  width: 200px;
  height: 200px;
}
</style>
