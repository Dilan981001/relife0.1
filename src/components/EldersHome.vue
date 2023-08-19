<template>
  <div class="background">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.6.1/font/bootstrap-icons.css">
  
    
   
    <div>
      <nav-bar/>
   
    </div>
 

  <div class="box2"></div>
<div>
    <div class="full">
        <div class="row">
        <div class="left col-8">

            


            <div><elders-card/></div>
              
        </div>
        <div class="rights col-4">
            <h1>Elders Home</h1>
            <h6>Children's homes provide a safe and nurturing environment for children who are unable 
to live with their natural parents or guardians. These homes provide basic necessities 
such as food, clothing, shelter, education and medical care. They also offer emotional
 and social support for the children. The children living in these homes have access to 
recreational activities such as sports, outdoor activities, arts and crafts, and educational 
opportunities.</h6>
        </div>
        </div>
        
    </div>
   <Footer/>
  </div>
</div>
</template>

<script>

import NavBar from "@/components/NavBar.vue"
import EldersCard from "@/components/Home/EldersCard.vue"
import Footer from "@/components/PageFooter.vue"

export default {
  components: {
    NavBar,
    EldersCard,
    Footer,
    
    
  },
  // other component options
}
</script>


<style scoped>
.background {
  background-color: #284b36;
  position: relative; /* Ensure relative positioning */
  background-image: url('/public/Vector 40.png'),url('/public/Vector 7.png'),url('/public/Vector 8.png'),url('/public/Vector 14.png'),url('/public/Vector 19.png'),url('/public/Vector 18.png'); /* Set the path to your background image */
  /* Center the background image */
  background-repeat: no-repeat; /* Prevent the background image from repeating */
}
.box2 {
  margin-bottom: 30px; /* Adds margin space at the bottom of the box */
  padding: 20px; /* Adds padding space inside the box */
  
}
.full{
    display: flex;
}

.left{
   
    height: 90%;
    margin-top: 70px;
}
.rights{
    
    color: white;
   height: 90%;
    font-family: "Montserrat";
    text-align: justify;
    padding-left: 10px;
    padding-right: 10px;
}
</style>