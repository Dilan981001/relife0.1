<template>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.6.1/font/bootstrap-icons.css"
  />
  <div class="background">
    <div>
      <nav-bar />
    </div>

    <div class="frm">
      <div class="row">
        <div class="col">
          <div class="form2">
            <br />
            <form>
              <p1 class="text-uppercase">Secure Donation</p1><br />

              <div class="row mb-4">
               <div class="set1">
                  <div class="col">
                  <div class="form-outline">
                    <a class="form-control" href=""  role="button">Rs.10,000.00</a>
                  </div>
                </div>
                <div class="col">
                  <div class="form-outline">
                    <a class="form-control" href=""  role="button">Rs.5,000.00</a>
                  </div>
                </div>
                <div class="col">
                  <div class="form-outline">
                    <a class="form-control" href=""  role="button">Rs.2,500.00</a>
                  </div>
                </div>
                </div>
              
                
              </div>

              <div class="row mb-4">
                <div class="set2">
                  <div class="col">
                  <div class="form-outline">
                    <a class="form-control" href=""  role="button">Rs.1,500.00</a>
                  </div>
                </div>
                <div class="col">
                  <div class="form-outline">
                    <a class="form-control" href=""  role="button">Rs.500.00</a>
                  </div>
                </div>
                <div class="col">
                  <div class="form-outline">
                    <a class="form-control" href=""  role="button">Rs.400.00</a>
                  </div>
                </div>
                </div>
               
              </div>

              <div class="col">
                  <div class="form-outline">
                  
                    <input
                    
                      type="text"
                      class="form-control"
                      id="Amount"
                      placeholder="Amount"
                      
                    />
                  </div>
                </div>
<div class="row">

  <div class="col">
    <div class="che1">
    <input type="checkbox" id="checkbox" v-model="checked" />
  </div></div>
  <div class="col">
    <div class="che2">
      Give in honor or in memory
    </div>
<label for="checkbox">{{ checked }}</label></div>
</div>

                
                
                
                <br /><br />
            </form>
          </div>
        </div>

        <div class="col">
          <div class="form2">
            <br />
            <form>
              <p1 class="text-uppercase">Payment Details</p1><br />

              <div class="payment">
                <center>
                  <div class="row">
                    <div class="col">
                    <div class="pay1">
      <input v-model="paymentOptions" 
           type="radio" 
           value="Data Structures" 
           name="ds" />
    <label for="ds">Visa</label>
    </div>
                  </div>
   
    <div class="col">
      <div class="pay2">
  <input v-model="paymentOptions" 
           type="radio" 
           value="Algorithms" 
           name="al" />
    <label for="al">Master Cards</label>
</div>
    </div>
                  </div> 
  </center>
              </div>
             

              <div class="row mb-4">
                <div class="col">
                  <div class="form-outline">
                    <p6>Card Number</p6>
                    <input
                      type="text"
                      class="form-control"
                      id="CardNumber"
                    />
                  </div>
                </div>
              </div>

              <div class="row mb-4">
                <div class="col">
                  <div class="form-outline">
                    <p6>Expiration Month</p6>
                    <input
                      type="text"
                      class="form-control"
                      id="expirationMonth"
                    />
                  </div>
                </div>
              </div>
              <div class="row mb-4">
                <div class="col">
                  <div class="form-outline">
                    <p6>Expiration Year</p6>
                    <input
                      type="text"
                      class="form-control"
                      id="expirationYear"
                    />
                  </div>
                </div>
              </div>

              <div class="row mb-4">
                <div class="col">
                  <div class="form-outline">
                    <p6>CVN</p6>
                    <input
                      type="text"
                      class="form-control"
                      id="CVN"
                    />
                  </div>
                </div>

                <div class="col"></div>
              </div>

              <!-- Submit button -->
              <div class="btn">
                <center>
                  <q-btn class="rec3" href="/paymentsecure" role="button"
                    >Donate</q-btn
                  >
                </center>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div>
    <page-footer />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import PageFooter from "@/components/PageFooter.vue";

export default {
  components: {
    NavBar,
    PageFooter,
  },
  data() {
    return {
      paymentOptions: '',
    }
  },
};
</script>

<style scope>
.background {
  background-color: #284b36;
  position: relative; /* Ensure relative positioning */
  background-image: url("/public/Vector 40.png"), url("/public/Vector 7.png"),
    url("/public/Vector 8.png"), url("/public/Vector 14.png"),
    url("/public/Vector 19.png"), url("/public/Vector 18.png"); /* Set the path to your background image */
  background-position: 25px 100px, 10px 1268px, 12px 1554px, 14px 2287px,
    12px 3604px, 10px 3883px; /* Center the background image */
  background-repeat: no-repeat; /* Prevent the background image from repeating */
}

.form2 {
  height: auto;
  width: 80%;
  background: #1d402b;
  border-color: white;
  border-radius: 30px 30px 30px 30px;
  padding: 30px;
  position: relative;
  padding-bottom: 50px;
  margin-top: -200px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 5%);
  @media (max-width: 768px) {
    width: 100%;
  }
}

.frm {
  padding-top: -250px;
  height: 1000px;
}

.form-control {
  background: #284b36;
  color: white;
  border-radius: 10px 10px 10px 10px;
  border-color: white;
  padding: 10px;
  margin: 15px 15px 15px 15px;
  width: 100%;
  height: auto;
}
p6 {
  color: white;
  font-family: "Montserrat";
  font-size: 20px;
}
.btn {
  padding: 10px;
  font-family: "Montserrat";
  font-size: 15px;
  font-weight: bold;
  color: rgb(255, 255, 255);
  align-content: center;
}

.radio {
  color: white;
  font-size: 20px;
  font-family: "Montserrat";
}
.payment{
  color: white;
  font-size: 20px;
  font-family: "Montserrat";
  display: flex;
  

}

.pay1{
  padding-right: 80px;
}

.pay2{
 padding-left: 80px;
}

.set1{
  display: flex;
  padding-bottom: 50px;
  padding-top: 50px;
  font-size: 20px;
  
}
.set2{
  display: flex;
  padding-bottom: 50px;
  padding-top: 50px;
  font-size: 20px;
}

.che2{
  color: white;

}

.che1{
  padding-left: 250px;
}
</style>
