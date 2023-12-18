<template>
  <div class="background">
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.6.1/font/bootstrap-icons.css"
    />

    <div>
      <nav-bar />
    </div>

    <div class="box2"></div>

    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.6.1/font/bootstrap-icons.css"
    />

    <div class="two-column-layout">
      <div class="column-left">
        <div class="search-bar">
          <!-- Placeholder for the search bar -->
          <div class="search-input">
            <input type="text" placeholder="Search..." />
            <button><i class="bi bi-search"></i></button>
          </div>

          <!-- Filter icon and dropdown -->
          <div class="filter">
            <div class="filter-icon">
              <button @click="toggleDropdown">
                <i class="bi bi-funnel"></i>
                {{ showDropdown ? "Close Filter" : "Filter City" }}
              </button>
              <div class="city-dropdown" v-show="showDropdown">
                <!-- Add your city names here as dropdown items -->
                <div class="city-item">Anuradhapura</div>
                <div class="city-item">Colombo</div>
                <div class="city-item">Hputhale</div>
                <div class="city-item">Mannaram</div>
                <div class="city-item">Sigiriya</div>
                <div class="city-item">Trinco</div>
                <!-- Add more city items as needed -->
              </div>
            </div>
          </div>
          <div class="filter2">
            <div class="filter-icon">
              <button @click="toggleDropdown">
                <i class="bi bi-funnel"></i>
                {{ showDropdown ? "Close Filter" : "Filter Age" }}
              </button>
              <div class="city-dropdown" v-show="showDropdown">
                <!-- Add your city names here as dropdown items -->
                <div class="city-item">0 - 1</div>
                <div class="city-item">1 - 5</div>
                <div class="city-item">5 - 15</div>
                <div class="city-item">15 - 30</div>
                <div class="city-item">30 - 50</div>
                <div class="city-item">50 to up</div>
                <!-- Add more city items as needed -->
              </div>
            </div>
          </div>
          <div class="filter3">
            <div class="filter-icon">
              <button @click="toggleDropdown">
                <i class="bi bi-funnel"></i>
                {{ showDropdown ? "Close Filter" : "Filter Category" }}
              </button>
              <div class="city-dropdown" v-show="showDropdown">
                <!-- Add your city names here as dropdown items -->
                <div class="city-item">Elders home</div>
                <div class="city-item">Childrens home</div>

                <!-- Add more city items as needed -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="column-right">
<div class="row">
  <div class="col">
    <q-card class="my-card" flat bordered>
      <q-img src="../../public/h1.jpeg"  height="200px"/>

      <q-card-section>
        <q-btn
          fab
          color="green"
          icon="place"
          class="absolute"
          style="top: 0; right: 12px; transform: translateY(-50%)"
          href="https://maps.app.goo.gl/vmotaq8gCRSmiQDR8"
        />

        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">
            
          </div>
          <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
            <q-icon name="place" />
            130km
          </div>
        </div>

        <q-rating v-model="stars" :max="5" size="32px" />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">
         
        </div>
        <div class="text-caption text-grey">
          Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
          porttitor rhoncus libero justo laoreet sit amet vitae.
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat round icon=" " />
        <q-btn flat color="green">
          More
        </q-btn>
      </q-card-actions>
    </q-card>
  </div>
  <div class="col">
    <q-card class="my-card" flat bordered>
      <q-img src="../../public/h2.png" height="200px" />

      <q-card-section>
        <q-btn
          fab
          color="green"
          icon="place"
          class="absolute"
          style="top: 0; right: 12px; transform: translateY(-50%);"
          href="https://maps.app.goo.gl/iUkKvVfgU7NkknpV7"
        />

        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">
           
          </div>
          <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
            <q-icon name="place" />
            124m
          </div>
        </div>

        <q-rating v-model="stars" :max="5" size="32px" />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">
       
        </div>
        <div class="text-caption text-grey">
          Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
          porttitor rhoncus libero justo laoreet sit amet vitae.
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat round icon=" " />
        <q-btn flat color="green">
          More
        </q-btn>
      </q-card-actions>
    </q-card>
  </div>
  <div class="col">
    <q-card class="my-card" flat bordered>
      <q-img src="../../public/h3.jpeg" height="200px" />

      <q-card-section>
        <q-btn
          fab
          color="green"
          icon="place"
          class="absolute"
          style="top: 0; right: 12px; transform: translateY(-50%);"
          href="https://maps.app.goo.gl/GozpFWK6wrosXYxCA"
        />

        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">
           
          </div>
          <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
            <q-icon name="place" />
            115km
          </div>
        </div>

        <q-rating v-model="stars" :max="5" size="32px" />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">
        
        </div>
        <div class="text-caption text-grey">
          Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
          porttitor rhoncus libero justo laoreet sit amet vitae.
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat round icon=" " />
        <q-btn flat color="green">
          More
        </q-btn>
      </q-card-actions>
    </q-card>
  </div>
</div>
<br/>
<br/>

<div class="row">
  <div class="col">
    <q-card class="my-card" flat bordered>
      <q-img src="../../public/h4.jpg" height="200px" />

      <q-card-section>
        <q-btn
          fab
          color="green"
          icon="place"
          class="absolute"
          style="top: 0; right: 12px; transform: translateY(-50%);"
          href="https://maps.app.goo.gl/vmotaq8gCRSmiQDR8"
        />

        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">
        
          </div>
          <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
            <q-icon name="place" />
            13km
          </div>
        </div>

        <q-rating v-model="stars" :max="5" size="32px" />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">
    
        </div>
        <div class="text-caption text-grey">
          Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
          porttitor rhoncus libero justo laoreet sit amet vitae.
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat round icon=" " />
        <q-btn flat color="green">
          More
        </q-btn>
      </q-card-actions>
    </q-card>
  </div>
  <div class="col">
    <q-card class="my-card" flat bordered>
      <q-img src="../../public/h2.png" height="200px" />

      <q-card-section>
        <q-btn
          fab
          color="green"
          icon="place"
          class="absolute"
          style="top: 0; right: 12px; transform: translateY(-50%);"
          href="https://maps.app.goo.gl/GozpFWK6wrosXYxCA"
        />

        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">
        
          </div>
          <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
            <q-icon name="place" />
            95km
          </div>
        </div>

        <q-rating v-model="stars" :max="5" size="32px" />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">
         
        </div>
        <div class="text-caption text-grey">
          Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
          porttitor rhoncus libero justo laoreet sit amet vitae.
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat round icon=" " />
        <q-btn flat color="green">
          More
        </q-btn>
      </q-card-actions>
    </q-card>
  </div>
  <div class="col">
    <q-card class="my-card" flat bordered>
      <q-img src="../../public/h1.jpeg" height="200px" />

      <q-card-section>
        <q-btn
          fab
          color="green"
          icon="place"
          class="absolute"
          style="top: 0; right: 12px; transform: translateY(-50%);"
          href="https://maps.app.goo.gl/ixVcHNX9TSnypgFFA"
        />

        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">
       
          </div>
          <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
            <q-icon name="place" />
            235km
          </div>
        </div>

        <q-rating v-model="stars" :max="5" size="32px" />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">
         
        </div>
        <div class="text-caption text-grey">
          Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
          porttitor rhoncus libero justo laoreet sit amet vitae.
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat round icon="  " />
        <q-btn flat color="green">
          More
        </q-btn>
      </q-card-actions>
    </q-card>
  </div>
</div>


   

    

      </div>
    </div>

    <div>
      <page-footer />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import NavBar from "@/components/NavBar.vue";
import PageFooter from "@/components/PageFooter.vue";
export default {

    setup () {
    return {
      stars: ref(4)
    }
  },

  components: {
    NavBar,
    PageFooter,
  },
};
</script>

<style scoped>

.my-card{
  width: 100%;
  max-width: 300px;
}
.filter {
  flex: 1;
  margin-top: 50px;
}

.filter2 {
  padding-right: 0px;
  justify-content: flex;
  margin-top: 50px;
}
.filter3 {
  padding-right: 0px;
  justify-content: flex;
  margin-top: 50px;
}
.filter-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-right: 10px; /* Adjust the spacing as needed */
}

/* Filter icon and button styles */
/* Filter icon and button styles */
.filter-icon,
.filter2-icon {
  display: flex;
  align-items: center;
  position: relative;
}

.filter-icon button,
.filter2-icon button {
  background-color: #284b3600;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 10px; /* Adjust the spacing as needed */
}

.filter-icon i,
.filter2-icon i {
  margin-right: 5px;
}

/* Dropdown styles */
.city-dropdown,
.age-dropdown {
  position: absolute;
  top: 100%; /* Place it below the filter icon */
  left: 0;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: none;
}

.city-item,
.age-item {
  padding: 5px 10px;
  cursor: pointer;
}

/* Show the dropdown when the button is clicked */
.filter-icon button:focus + .city-dropdown,
.filter2-icon button:focus + .age-dropdown,
.city-dropdown:hover,
.age-dropdown:hover {
  display: block;
}

.search-bar {
  margin-left: 50px;
  text-align: center;
  margin-top: 70px;
  display: block;
  align-items: center;
  justify-content: space-between;
}

.search-input {
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 100px;
  padding: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  flex: 1; /* Allow it to grow and take available space */
  max-width: 300px; /* Adjust the maximum width as needed */
  margin-right: 10px; /* Adjust the spacing as needed */
}

input[type="text"] {
  border: 2px solid #ffffff; /* Change the border style and color here */
  outline: none;
  flex: 1;
  padding: 10px;
  border-radius: 100px;
  margin-right: 10px; /* Adjust the spacing as needed */
}

button {
  border: none;
  background-color: #ffffff;
  color: rgb(68, 68, 68);
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 100px;
}

.background {
  background-color: #284b36;
  position: relative;
  /* Ensure relative positioning */
  background-image: url("/public/Vector 40.png"), url("/public/Vector 7.png"),
    url("/public/Vector 8.png"), url("/public/Vector 14.png"),
    url("/public/Vector 19.png"), url("/public/Vector 18.png");
  /* Set the path to your background image */
  background-repeat: no-repeat;
  /* Prevent the background image from repeating */
}
.two-column-layout {
  display: flex;
  justify-content: space-between;
}

.column-left {
  flex: 1;
  padding: 20px;
  background-color: #284b36;
  color: white;
}

.column-right {
  flex: 3;
  padding: 20px;
  background-color: #284b36;
  color: white;
}

.card-img-top {
  border-radius: 10%;
  border: 4px solid #284b36;
  width: 90%;
  height: 90%;

  @media (max-width: 768px) {
    width: 100%;
  }
}
.card-main-body {
  margin-top: -40px;
}
.card-body {
  display: flex;
  flex-direction: row;
}
.card {
  height: 250px;
  width: 90%;
  background: radial-gradient(
    ellipse at center,
    #ffffff3d,
    #346045,
    rgb(17, 35, 24)
  );
  border-radius: 30px 30px 30px 30px;
  padding-top: 30px;
  padding-bottom: 30px;
  display: grid;
  margin-bottom: 10px;
  margin-top: 10px;
  @media (max-width: 768px) {
    width: 100%;
  }
}
.card-text {
  margin-top: -30px;
}
.shadow {
  margin-left: 10px;
  margin-right: 10px;
}
.column-left-1 {
  flex: 2;
  padding: 10px;
  color: white;
}

.column-right-1 {
  flex: 1;
  padding: 20px;
  color: white;
  margin-top: 25px;
}
.column-middle-1 {
  flex: 2;
  padding: 10px;
  color: white;
  margin-top: 140px;
}

.box2 {
  margin-bottom: 30px;
  /* Adds margin space at the bottom of the box */
  padding: 20px;
  /* Adds padding space inside the box */
}

.notification-page {
  background-color: #284b36;
}

.post-item {
  border: 10px solid rgba(45, 89, 63, 0.44);
  border-radius: 35px;
  padding: 10px;
  margin-bottom: 10px;
  margin-right: 100px;
  margin-left: 25px;
  background-color: #ffffff;
}
.box2 {
  margin-bottom: 50px; /* Adds margin space at the bottom of the box */
  padding: 20px; /* Adds padding space inside the box */
}
.box1 {
  /* Adds margin space at the bottom of the box */
  padding: 5px;
}
.post-item h3 {
  color: #333;
  font-weight: bold;
  font-size: medium;
  justify-content: center;
}

.post-item p {
  margin: 5px 0;
  font-size: small;
  justify-content: center;
}

.loading-posts,
.loadingChildrenHomePosts,
.loadingElderHomePosts {
  color: #555;
}

.no-posts-message {
  color: #888;
  font-style: italic;
}

h2 {
  margin-top: 20px;
  font-size: 40px;
  margin-left: 30px;
  color: white;
  font-weight: lighter;
  text-align: justify;
}


</style>
