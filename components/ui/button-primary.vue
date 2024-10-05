<template>
  <component
    :is="to ? 'nuxt-link' : 'button'"
    :to="to"
    class="btn-default  black"
    v-on="$listeners"
  >
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: false,
      default: ""
    }
  }
};
</script>

<style scoped>
@import "../../assets/css/default/btns.scss";
</style>
