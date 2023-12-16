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

    <div class="search-bar">
      <!-- Placeholder for the search bar -->
      <div class="search-input">
        <input type="text" placeholder="Search..." />
        <button><i class="bi bi-search"></i></button>
      </div>

      <!-- Filter icon and dropdown -->
      <div class="filter">
        <div class="q-pa-md">
          <q-btn-dropdown outline style="color: white" label="Filter by Age">
            <q-list>
              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label>01-10</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label>10-18</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label>18-25</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </div>
      </div>
      <div class="filter2">
        <div class="q-pa-md">
          <q-btn-dropdown outline style="color: white" label="Filter by City">
            <q-list>
              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label>Anuradhapura</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label>Jaffna</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label>Colombo</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label>Galle</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </div>
      </div>
    </div>

    <div>
      <div class="full">
        <div class="row">
          <div class="left col-8">
            <div><elder-card /></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/PageFooter.vue";
import ElderCard from "./EldersChildrenCard/ElderCard.vue";

export default {
  components: {
    NavBar,
    Footer,
    ElderCard,
  },
  data() {
    return {
      showDropdown: false, // Initially hide the dropdown
      showAgeDropdown: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    toggleAgeDropdown() {
      this.showAgeDropdown = !this.showAgeDropdown;
    },
  },
};
</script>

<style scoped>
.filter {
  flex: 1;
  margin-right: 10px; /* Adjust the spacing as needed */
}

.filter2 {
 
  justify-content: flex;
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
  display: flex;
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

.box2 {
  margin-bottom: 30px;
  /* Adds margin space at the bottom of the box */
  padding: 20px;
  /* Adds padding space inside the box */
}

.full {
  display: flex;
  justify-content: center;
  margin-top: -150px;
  padding: 50px;
}

.left {
  height: 90%;
  margin-top: 70px;
}

.rights {
  color: white;
  height: 90%;
  font-family: "Montserrat";
  text-align: justify;
  padding-left: 10px;
  padding-right: 10px;
}
</style>
