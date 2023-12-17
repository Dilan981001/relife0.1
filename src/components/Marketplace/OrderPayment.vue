<template>
  <div class="q-pa-md row justify-center item-center">
    <div class="col-lg-6 col-md-8 col-sm-10">
      <q-card class="my-card text-black q-mt-lg">
        <q-card-section class="q-pa-md">
          <div class="text-h5 text-primary q-mb-md">Order Completed!</div>
          <div class="q-mb-md">
            <div class="text-subtitle">Total Quantity:</div>
            <div class="text-h6">{{ totalQuantity }}</div>
          </div>
          <div>
            <div class="text-subtitle">Grand Total:</div>
            <div class="text-h6">Rs {{ totalcost }}</div>
          </div>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn
            label="Continue Shopping"
            dense
            color="primary"
            @click="continueShopping"
          />
        </q-card-actions>
      </q-card>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      token: null,
      totalcost: 0,
      totalQuantity: 0,
    };
  },
  methods: {
    listCartItems() {
      axios.get(`http://localhost:8081/cart/?token=${this.token}`)
        .then(res => {
          const result = res.data;
          this.cartItems = result.cartItems;
          this.totalcost = result.totalCost;
          this.totalQuantity = result.cartItems.reduce((total, item) => total + item.quantity, 0);
        })
        .catch(err => {
          console.error(err);
        });
    },
    clearCart() {
    axios.delete(`http://localhost:8081/cart/clear/?token=${this.token}`)
      .then((res) => {
        if (res.status === 200) {
          this.$router.go(0); // Refresh the page or update the cart data as needed
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
  continueShopping() {
      // Call the clearCart method before navigating to the marketplace
      this.clearCart();
      this.$router.push('/marketplace');
    },
  },
  mounted() {
    this.token = localStorage.getItem("token");
    this.listCartItems();
    
  },
};
</script>

<style scoped>
/* Add your custom styles here */
.my-card {
  max-width: 400px;
  margin: 0 auto;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.text-primary {
  color: #2196f3;
}

.q-mb-md {
  margin-bottom: 15px;
}
</style>
