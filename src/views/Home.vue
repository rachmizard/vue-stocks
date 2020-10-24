<template>
  <div class="card">
    <div class="card-body">
        <h1>Trade of View your portofolio</h1>
        <h6>You may Save & Load your data</h6>
        <h6>Click on 'End Day' to begin a New Day!</h6>
        <hr>
        <p>Your funds: {{ funds | currency }}</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  computed: {
    funds() {
      return this.$store.getters.funds
    }
  }
}
</script>
