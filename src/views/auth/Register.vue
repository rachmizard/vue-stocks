<template>
  <div>
    <div class="col-md-4 justify-content-center">
      <ul>
        <li v-for="(errorMessage, index) in errorMessages" :key="index">
          {{ errorMessage.message }}
        </li>
      </ul>
      <form @submit.prevent="signUp" autocomplete="off">
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
        <div class="form-group">
          <label for="exampleInputreTypePassword">Re-Password</label>
          <input
            type="password"
            class="form-control"
            :class="{
              danger:
                $v.form.reTypePassword.$error ||
                form.password !== form.reTypePassword,
            }"
            id="exampleInputreTypePassword"
            v-model="form.reTypePassword"
          />
          <small
            v-if="
              $v.form.reTypePassword.$touch &&
              form.password !== form.reTypePassword
            "
            class="form-text text-danger"
            >Re type password doesn't match with your password!</small
          >
        </div>
        <small class="form-text text-muted">
          <router-link to="/login">Already have account? Login</router-link>
        </small>
        <div class="mt-3">
          <button type="submit" class="btn btn-primary">Register</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";

export default {
  name: "Register",
  data() {
    return {
      form: {
        email: "",
        password: "",
        reTypePassword: "",
      },
      errorMessages: [],
    };
  },
  validations: {
    form: {
      email: { required, email },
      password: { required },
      reTypePassword: { required },
    },
  },
  methods: {
    async signUp() {
      this.$v.form.$touch();
      if (this.$v.form.$invalid) return;
      const payload = {
        email: this.form.email,
        password: this.form.password,
      };
      await this.$http
        .post(
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAFXOZr_wOfYwbuOiCBOn3lkwfa5OMypu4",
          payload
        )
        .then((signup) => {
          this.$store.dispatch("signUp", signup.data);
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