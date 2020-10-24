<template>
  <div>
    <div class="mt-2">
      <div v-if="isSuccess" class="progress">
        <div
          class="progress-bar progress-bar-striped progress-bar-animated"
          role="progressbar"
          v-bind:style="{ width: valueNow }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["isSuccess", "valueNow"]
};
</script>