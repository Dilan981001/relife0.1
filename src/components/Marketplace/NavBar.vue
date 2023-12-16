<template>
  <div class="navbar">
    <q-header
      class="header-container full-width items-center justify-around text-white row q-pt-sm q-pb-sm"
    >
      <div class="logo">
        <q-btn class="btn" dense flat round icon="menu" @click="toggleList()" />
        <router-link to="/" class="text-weight-bold title text-h5 text-left"
          >Relife</router-link
        >
      </div>

      <ul v-bind:class="{ hide: hide }" class="my-list text-weight-bold">
        <li><router-link to="/">Home</router-link></li>
        <li>
          <router-link to="/ChildrensHome">Childrens Home</router-link>
        </li>
        <li>
          <router-link to="/about">Elders Home</router-link>
        </li>
        <li>
          <router-link to="/about">Notifications</router-link>
        </li>
        <li><router-link to="/about">Donate</router-link></li>
      </ul>

      <div class="btn-main self-center">
        <div
          v-bind:class="{ hide: hide }"
          class="row justify-center item-center"
        >
          <q-btn
            color="white"
            text-color="black"
            label="Admin"
            to="/admin"
            size="70%"
            class="text-weight-bold q-ml-md"
          />
          <q-btn
            v-if="!token"
            color="white"
            text-color="black"
            label="Log in / Sign Up"
            to="/signup"
            size="70%"
            class="text-weight-bold q-ml-md"
          />
          <q-btn
            v-if="token"
            @click="signout"
            color="white"
            text-color="black"
            label="Log out"
            to="/signin"
            size="70%"
            class="text-weight-bold q-ml-md"
          />
          <q-btn to="/cart" size="10px" class="q-ml-md" color="purple">
            <q-icon name="shopping_cart" />
            <transition name="cart-counter">
              <!-- <q-badge  color="purple" floating > {{ cartTotalState }}  </q-badge> -->
              <q-badge color="purple" floating> {{ cartCountState }} </q-badge>
            </transition>
          </q-btn>
        </div>
      </div>
    </q-header>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";
export default {
  data() {
    return {
      showMenu: false,
      hide: true,
      token: null,
    };
  },
  methods: {
    toggleList() {
      this.hide = !this.hide;
    },
    signout() {
      localStorage.removeItem("token");
      this.token = null;
      this.$store.dispatch("cartModule/ResetCartCount");
      this.$router.push({ name: "home" });
    },
    listCartItems() {
      axios
        .get(
          `https://limitless-lake-55070.herokuapp.com/cart/?token=${this.token}`
        )
        .then((res) => {
          const result = res.data;
          this.cartCount = result.cartItems.length;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },

  mounted() {
    this.token = localStorage.getItem("token");
    this.$store.dispatch("cartModule/getCartItems", this.token);
    //this.listCartItems();
  },
  computed: mapGetters({
    cartTotalState: "getCartTotalCount",
    cartCountState: "getCartCountState",
  }),
};
</script>

<style scoped>
.navbar {
  margin-top: -70px;
  background: #284b36;
}
.header-container {
  top: 0;
  left: 0;
  right: 0;
  position: sticky;
  background-color: #284b368e;
  position: fixed;
  backdrop-filter: blur(5px);
}

.button-container {
  display: inline-block;
  padding: 0 100px;
}

.my-list li {
  display: inline-block;
  margin: 0 10px;
}

a {
  text-decoration: none;
  color: white;
}
.my-list a {
  text-decoration: none;
  color: white;
  border-bottom: 2px solid transparent;
}

.my-list a:hover {
  border-bottom: 2px solid white;
}
.logo .btn {
  display: none;
}

.cart-counter-appear-active,
.cart-counter-enter-active {
  animation: pulse 0.5s;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

@media all and (max-width: 864px) {
  .header-container {
    flex-direction: column;
  }
  ul,
  .btn-main {
    display: block;
  }
  .my-list li {
    display: block;
    padding: 5px 0;
    text-align: center;
  }
  .logo {
    align-self: flex-start;
    margin-left: 20px;
  }
  .logo .btn {
    display: inline-block;
    margin-right: 5px;
  }
  .hide {
    display: none;
  }
}
</style>
