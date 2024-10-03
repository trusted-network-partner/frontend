<template>
  <button @click="switchMenu" :class="{ active: value }">
    <span></span>
    <span></span>
    <span></span>
  </button>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:value"],
  methods: {
    switchMenu() {
      this.$emit("action", this.value);
      this.$emit("update:value", !this.value);
    }
  }
};
</script>

<style scoped>
@import "~assets/css/header/button-burger.scss";
</style>
