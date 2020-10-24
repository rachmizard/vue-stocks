<template>
  <div>
    <div class="col-md-4 justify-content-center">
      <ul>
        <li v-for="(errorMessage, index) in errorMessages" :key="index">
          {{ errorMessage.message }}
        </li>
      </ul>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            :class="{ danger: $v.form.email.$error }"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            v-model="form.email"
            @input="$v.form.email.$touch"
          />
          <small id="emailHelp" class="form-text text-muted"
            >We'll never share your email with anyone else.</small
          >
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            :class="{ danger: $v.form.password.$error }"
            id="exampleInputPassword1"
            v-model="form.password"
          />
        </div>
        <small class="form-text text-muted">
          <router-link to="/register">Register here</router-link>
        </small>
        <div class="mt-3">
        <button type="submit" class="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";

export default {
  name: "Login",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      errorMessages: [],
    };
  },
  validations: {
    form: {
      email: { required, email },
      password: { required },
    },
  },
  methods: {
    async login() {
      this.$v.form.$touch();
      if (this.$v.form.$invalid) return;
      const payload = {
        email: this.form.email,
        password: this.form.password,
      };
      await this.$http
        .post(
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAFXOZr_wOfYwbuOiCBOn3lkwfa5OMypu4",
          payload
        )
        .then((res) => {
          this.errorMessages = [];
          this.$store.dispatch("login", res.body);
          this.$router.replace("/");
        })
        .catch((err) => {
          if (err.status === 400) {
            this.errorMessages = err.body.error.errors;
          }
        });
    },
  },
};
</script>

<style scoped>
.danger {
  border: 1px solid red;
}
</style>