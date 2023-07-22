<template>
    
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.6.1/font/bootstrap-icons.css">
    <div class="background">
      
     
      <div>
        <nav-bar/>
      </div>
      </div>
      <div class="full">
          <div class="row">
          <div class="left col-8">
  
              
  
  
              <div><childrens-card/></div>
                
          </div>
          <div class="rights col-4">
              <h1>Children Home</h1>
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
  
  </template>
  
  <script>
  
  import NavBar from "@/components/NavBar.vue"
  import ChildrensCard from "@/components/ChildrensCard.vue"
  import Footer from "@/components/PageFooter.vue"
  
  export default {
    components: {
      NavBar,
      ChildrensCard,
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
    background-position: 25px 100px,10px 1268px,12px 1554px,14px 2287px,12px 3604px,10px 3883px; /* Center the background image */
    background-repeat: no-repeat; /* Prevent the background image from repeating */
  }
  
  .full{
      display: flex;
  }
  
  .left{
      background-color: white;
      height: 90%;
      margin-top: 70px;
  }
  .rights{
      background-color: #284b36;
      color: white;
     height: 90%;
      font-family: "Montserrat";
      text-align: justify;
      padding-left: 10px;
      padding-right: 10px;
  }
  </style>