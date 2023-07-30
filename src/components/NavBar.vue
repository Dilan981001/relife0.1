<template>
    <div class="top-panel">
        <q-btn-group flat>
          <div class="left-panel">
            <q-img src="relife3.ico" width="95px" height="54px" class="q-mr-md" />
          </div>
  
          <div class="right-panel">
            <div class="form-actions">
              <q-btn to="/home" label="HOME" class="q-mr-md" />
            </div>
            <div class="form-actions">
              <q-btn to="/EldersHome" label="Elder's home" class="q-mr-md" />
            </div>
            <div class="form-actions">
              <q-btn to="/ChildrensHome" label="children's home" class="q-mr-md" />
            </div>
  
            <div class="form-actions">
              <q-btn to="/notificationpage" label="NOTIFICATIONS" class="q-mr-md" />
            </div>
            <div class="form-actions">
              <q-btn to="/donatefund" label="DONATE" class="q-mr-md" />
            </div>
            <div class="form-actions">
              <q-btn to="/marketplace" label="MarketPlace" class="q-mr-md" />
            </div>
            <div class="form-actions">
              <q-btn to="/signin" label="Sign in / Sign up " class="q-mr-md" />
            </div>
          </div>
        </q-btn-group>
      </div>
</template>

<style scoped>
.background {
  background-color: #284b36;
  position: relative; /* Ensure relative positioning */
  background-image: url('/public/Vector 40.png'),url('/public/Vector 7.png'),url('/public/Vector 8.png'),url('/public/Vector 14.png'),url('/public/Vector 19.png'),url('/public/Vector 18.png'); /* Set the path to your background image */
  background-position: 25px 100px,10px 1268px,12px 1554px,14px 2287px,12px 3604px,10px 3883px; /* Center the background image */
  background-repeat: no-repeat; /* Prevent the background image from repeating */
  
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
  margin-left: 300px;
  display: flex;
}
.left-panel{
  margin-left: 70px;
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
  height: 40px;
  background-color: #284b36;
  padding-bottom: 70px;
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