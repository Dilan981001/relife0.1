<template>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.6.1/font/bootstrap-icons.css">
  <div class="background">
    
   
    <div>
      <nav-bar/>
    </div>



<div class="form1" >
        <br />
        <form>
          
          <div class="rw1 row ">
            <div class="col-md-6">
              <div class="txt1">
                <p1 class="text1">Fundraise for a 
great cause</p1><br />
          <p4 class="text2">Help us build a better tomorrow today.</p4
          >
              </div>
              <div class="btn">
                <center><q-btn class="rec3" href="/paymentsecure" role="button">Donate</q-btn></center> 
              </div>
             
            
          <div class="box4">
            <div class="text3">
              <p4>Let's Get You Started</p4>
            <h5>Join our awesome giving community</h5>
            </div>
            
          </div>  
            </div>
            <div class="col-md-6 col-sm-12">
              
              <div class="image5">
                <img src="MaskGroup.png"  alt="img5" />
              </div>
            </div>
          </div>  
        </form>
      </div>





<div>
  <page-footer/>
</div>
</div>

</template>

<script>
import NavBar from "@/components/NavBar.vue"
import PageFooter from "@/components/PageFooter.vue"

export default {
  components: {
    NavBar,
    PageFooter,
   
    
  },
  // other component options
}
</script>

<style scope>
.background {
  background-color: #284b36;
  position: relative; /* Ensure relative positioning */
  background-image: url('/public/Vector 40.png'),url('/public/Vector 7.png'),url('/public/Vector 8.png'),url('/public/Vector 14.png'),url('/public/Vector 19.png'),url('/public/Vector 18.png'); /* Set the path to your background image */
  background-position: 25px 100px,10px 1268px,12px 1554px,14px 2287px,12px 3604px,10px 3883px; /* Center the background image */
  background-repeat: no-repeat; /* Prevent the background image from repeating */
}
.form1 {
  height: 80%;
  width: 80%;
  background: #1d402b;
  border-color: white;
  border-radius: 30px 30px 30px 30px;
  padding: 30px;
  position: relative;
  top: 50%;
  left: 50%;
  padding-top: 50px;
  margin-bottom: 100px;
  transform: translate(-50%, 5%);
  @media (max-width: 768px) {
    width: 100%;
  }
}

.box4 {
  
  background-color: white;
  height: 195px;
  border-radius: 0px 0px 0px 50px;
  margin-top: 0px;
}


p1 {
  font-family: "Montserrat";
  font-size: 60px;
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


.text2{
  color: white;
  font-size: 35px;
  font-weight: bold;
  text-align: center;
  align-content: center;
  padding-left: 10px;
  padding-right: 10px;
  font-family: "Montserrat";
  margin-bottom: 500px;
}
.text3{
  padding-top: 30px;
  text-align: center;
  font-family: "Montserrat";
  font-weight: bold;

}

.txt1{

  text-align: center;
  padding-left: 50px;
  padding-right: 50px;
}
p4{
  font-weight: bold;
  font-size: 40px;
}
.btn {
  padding: 10px;
  font-family: "Montserrat";
  font-size: 15px;
  font-weight: bold;
  color: rgb(255, 255, 255);
  align-content: center;

}

.rw1{
  padding-left: 50px;
  padding-top: 10px;
}
</style>