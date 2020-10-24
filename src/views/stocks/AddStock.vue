<template>
  <div>
    <app-alert
      v-if="isSuccess"
      className="success"
      :text="successMessage"
    ></app-alert>
    <form @submit.prevent="addStock">
      <div class="form-group" :class="{ hasError: $v.form.name.$error }">
        <label for="inputName">Name</label>
        <input
          type="text"
          class="form-control"
          id="inputName"
          v-model="form.name"
          aria-describedby="nameHelp"
          :class="{danger: $v.form.name.$error}"
        />
        <small
          v-if="$v.form.name.$error"
          id="nameHelp"
          class="form-text text-danger"
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
          aria-describedby="priceHelp"
          :class="{danger: $v.form.price.$error}"
        />
        <small
          v-if="$v.form.price.$error"
          id="priceHelp"
          class="form-text text-danger"
          >Please input the price.</small
        >
      </div>
      <div class="form-group" :class="{ hasError: $v.form.quantity.$error }">
        <label for="inputQuantity">Quantity</label>
        <input
          type="number"
          class="form-control"
          v-model="form.quantity"
          id="inputQuantity"
          aria-describedby="quantityHelp"
          :class="{danger: $v.form.quantity.$error}"
        />
        <small
          v-if="$v.form.quantity.$error"
          id="quantityHelp"
          class="form-text text-danger"
          >Please input the Quantity.</small
        >
      </div>
      <div class="form-group" :class="{ hasError: $v.form.img.$error }">
        <label for="inputImg">Image (Link)</label>
        <input
          type="text"
          class="form-control"
          v-model="form.img"
          id="inputImg"
          aria-describedby="imgHelp"
          :class="{danger: $v.form.img.$error}"
        />
        <small
          v-if="$v.form.img.$error"
          id="imgHelp"
          class="form-text text-danger"
          >Please input the Image address.</small
        >
      </div>
      <button type="submit" class="btn btn-success">Add Stock</button>
    </form>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import AlertVue from "../../components/Alert.vue";

export default {
  name: "AddStock",
  components: {
    appAlert: AlertVue,
  },
  data() {
    return {
      successMessage: "",
      isSuccess: false,
      form: {
        name: "",
        price: "",
        quantity: "",
        img: ""
      },
    };
  },
  validations: {
    form: {
      name: { required },
      price: { required },
      quantity: { required },
      img: { required },
    },
  },
  methods: {
    addStock() {
      this.$v.form.$touch();
      // if its still pending or an error is returned do not submit
      if (this.$v.form.$pending || this.$v.form.$error) return;
      // to form submit after this
      const payload = {
        name: this.form.name,
        price: this.form.price,
        quantity: this.form.quantity,
        img: this.form.img
      };
      this.$store.dispatch("addStock", payload).then(() => {
        this.successMessage = "Successfully added!";
        this.isSuccess = true;
        this.$v.form.$reset();
        this.form.name = "";
        this.form.price = "";
        this.form.quantity = "";
        this.form.img = "";

        //   this.$router.replace('/stocks');
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