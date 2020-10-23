<template>
  <div>
      <app-alert v-if="isSuccess" className="success" :text="successMessage" ></app-alert>
    <form ref="form" @submit.prevent="addStock">
      <div class="form-group" :class="{ hasError: $v.form.name.$error }">
        <label for="inputName">Name</label>
        <input
          type="text"
          class="form-control"
          id="inputName"
          v-model="form.name"
          aria-describedby="nameHelp"
        />
        <small
          v-if="$v.form.name.$error"
          id="nameHelp"
          class="form-text text-muted"
          >Please input the name.</small
        >
      </div>
      <div class="form-group" :class="{ hasError: $v.form.price.$error }">
        <label for="inputPrice">Price</label>
        <input
          type="number"
          class="form-control"
          v-model="form.price"
          id="inputPrice"
        />
      </div>
      <button
        type="submit"
        class="btn btn-success"
      >
        Add Stock
      </button>
    </form>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import AlertVue from '../../components/Alert.vue';

export default {
  name: "AddStock",
  components: {
      appAlert: AlertVue
  },
  data() {
    return {
        successMessage: '',
        isSuccess: false,
      form: {
        name: "",
        price: "",
      },
    };
  },
  validations: {
    form: {
      name: { required },
      price: { required },
    },
  },
  methods: {
    addStock() {
      if (this.$v.form.$error) {
          this.$v.$touch;
          return
      }
      // to form submit after this
      const payload = {
          name: this.form.name,
          price: this.form.price
      }
      this.$store.dispatch('addStock', payload).then(() => {
          this.successMessage = 'Successfully added!';
          this.isSuccess = true;
          this.$refs.form.reset();
        //   this.$router.replace('/stocks');
      })
    },
  },
};
</script>