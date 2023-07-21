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

            


            <div class="card">
                <div class="leftside col-2"><img src="h4.jpg" class="card-img-top" alt="Skyscrapers" /></div>
           <div class="middle1 col2">dgh</div>
           <div class="middle2 col-2">dfgh</div>
           <div class="rightside col-2">fvdb</div>
                
                    
                  
                  <div class="card-body">
            
                    <h5 class="card-title">Thudawa girls ...</h5>
                    <h7>Wadduwa</h7>
                    <p class="card-text">
                      “Tudawe” Home is incharge of a committee of All Ceylon
                      Buddhist Congress. We support them by providing the needs of
                      the childrend
                    </p>
                  </div>
                  <div class="card-footer">
                    <button type="button" href="#" class="rec4">
                      More Details..
                    </button>
                  </div>
                
              </div>
              <div class="card">
                <div class="shadow shadow-offset-left-xs">
                  <center>
                    <img src="h4.jpg" class="card-img-top" alt="Skyscrapers" />
                  </center>
                  <div class="card-body">
                    <h5 class="card-title">Thudawa girls ...</h5>
                    <h7>Wadduwa</h7>
                    <p class="card-text">
                      “Tudawe” Home is incharge of a committee of All Ceylon
                      Buddhist Congress. We support them by providing the needs of
                      the childrend
                    </p>
                  </div>
                  <div class="card-footer">
                    <button type="button" href="#" class="rec4">
                      More Details..
                    </button>
                  </div>
                </div>
              </div>
        </div>
        <div class="right col-4">
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
   

</template>>

<script>

import NavBar from "@/components/NavBar.vue"


export default {
  components: {
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

.full{
    display: flex;
}

.left{
    background-color: white;
    height: 100%;
    margin-top: 70px;
}
.right{
    background-color: #284b36;
    color: white;
    height: 100%;
    font-family: "Montserrat";
    text-align: justify;
    padding-left: 10px;
    padding-right: 10px;
}

.card-img-top {
    border-radius: 50%;
    border: 8px solid #284b36;
    width: 150px;
    height: 150px;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
  .card {
    height: 250px;
    width: 100%;
    background: #1d402b;
    border-radius: 30px 30px 30px 30px;
    padding-top: 30px;
    padding-bottom: 30px;
    display: grid;
    margin-bottom: 50px;
    display: flex;
    color: white;
    @media (max-width: 768px) {
      width: 100%;
    
    }
  }
</style>