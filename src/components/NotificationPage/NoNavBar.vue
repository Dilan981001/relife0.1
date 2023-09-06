<template>
    <div class="nonavbar">
      <div class="logo">
        <q-img src="relife3.ico" width="95px" height="54px" class="q-mr-md" />
      </div>
  
      <!-- "Hamburger" menu icon -->
      <div class="menu-icon" @click="toggleMenu" v-if="isResponsive">
        <i :class="menuOpen ? 'bi bi-x' : 'bi bi-list'"></i>
      </div>
  
      <div class="nav-items" :class="menuOpen ? 'active' : ''">
        <q-btn
          v-for="menuItem in menuItems"
          :key="menuItem.to"
          :to="menuItem.to"
          :label="menuItem.label"
          class="q-mr-md text-white"
          flat
          @click="closeMenu"
        />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        menuOpen: false,
        isResponsive: false,
        menuItems: [
          { to: '/home', label: 'HOME' },
          { to: '/EldersHome', label: "Elder's home" },
          { to: '/ChildrensHome', label: "children's home" },
          { to: '/donatefund', label: 'DONATE' },
          { to: '/marketplace', label: 'MarketPlace' },
          { to: '/signin', label: 'Sign in / Sign up' },
        ],
      };
    },
    methods: {
      toggleMenu(e) {
        e.stopPropagation();
        this.menuOpen = !this.menuOpen;
      },
      closeMenu() {
        if (this.menuOpen) {
          this.menuOpen = false;
        }
      },
      checkResponsive() {
        this.isResponsive = window.innerWidth <= 768;
      },
    },
    created() {
      this.checkResponsive();
      window.addEventListener('resize', this.checkResponsive);
      window.addEventListener('click', this.closeMenu);
    },
    beforeUnmount() {
      window.removeEventListener('resize', this.checkResponsive);
      window.removeEventListener('click', this.closeMenu);
    },
  };
  </script>
  
  <style scoped>
  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #3d7c5625;
    padding: 20px;
    position: fixed;
    z-index: 10;
    left: 0;
    right: 0;
    top: 0;
    backdrop-filter: blur(5px);
  }
  
  .logo {
    display: flex;
    align-items: center;
    margin-left: 100px;
  }
  
  .menu-icon {
    cursor: pointer;
    font-size: 30px;
    color: white;
  }
  
  /* Show the menu items on smaller screens */
  .nav-items {
    display: flex;
  }
  
  /* Media query for responsiveness */
  @media (max-width: 768px) {
    .menu-icon {
      order: 2;
    }
  
    .nav-items {
      display: none;
      position: absolute;
      top: 70px;
      right: 20px;
      background-color: #284b36;
      border-radius: 10px;
      padding: 10px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
  
    .nav-items.active {
      display: flex;
      flex-direction: column; /* Change flex-direction to column */
      align-items: center; /* Optional: Center the items horizontally */
    }
  }
  </style>
  