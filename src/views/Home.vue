<template>
  <div class="card">
    <div class="card-body">
      <h1>Trade of View your portofolio</h1>
      <h6>You may Save & Load your data</h6>
      <h6>Click on 'End Day' to begin a New Day!</h6>
      <hr />
      <p>Your funds: {{ funds | currency }}</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";

export default {
  name: "Home",
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
  },
  created() {
    const credential = this.$store.getters.getCredential;
    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyAFXOZr_wOfYwbuOiCBOn3lkwfa5OMypu4",
        { idToken: credential.idToken }
      )
      .then((res) => {
        this.$store.dispatch("setUser", res.data.users[0]);
      });
  },
};
</script>
