<template>
  <q-page class="bg-grey-2">
    <q-form class="q-gutter-md" @submit="submitForm">
      <q-card class="q-pa-md">
        <q-card-section>
          <div class="text-h6 q-mb-md">Sign In</div>
          <q-input outlined v-model="email" label="Email" type="email" required />
          <q-input outlined v-model="password" label="Password" type="password" required />
        </q-card-section>
        <q-card-actions align="right">
          <q-btn class="q-mr-md" color="primary" type="submit" label="Sign In" />
          <q-btn color="secondary" to="/signup" label="Sign Up" />
        </q-card-actions>
      </q-card>
    </q-form>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    submitForm() {
      // Perform sign-in logic here
      if (this.email === "admin@example.com" && this.password === "admin") {
        // Route to Dashboard page
        this.$router.push("/dashboard");
      } else {
        this.$q.notify({
          color: "negative",
          message: "Invalid email or password",
        });
      }
    },
  },
};
</script>

<style scoped>
/* Set background color of page */
.bg-grey-2 {
  background-color: #315a2d;
}

/* Add margin to card */
.q-card {
  margin: 0 auto;
  max-width: 450px;
}

/* Style the Sign In header */
.text-h6 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
}

/* Add margin to form inputs */
.q-field {
  margin-bottom: 10px;
}
</style>
