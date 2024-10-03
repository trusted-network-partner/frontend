<template>
  <div  :class="{ active: isActive }" class="mobile-menu">
    <div class="mobile-menu__burger">
      <ButtonBurger :value="true" @action="closeMenu"></ButtonBurger>
    </div>
    <Nav type="mobile" />
    <div class="mobile-menu__another-content">
      <Currency></Currency>
      <ButtonPrimary @click="closeMenu" class="" to="real-estate-address">
        {{ $t("header.estate_btn") }}</ButtonPrimary
      >
    </div>
  </div>
</template>

<script>
import Nav from "./nav.vue";
import ButtonPrimary from "~/components/ui/button-primary.vue";
import Currency from "./currency.vue";
import ButtonBurger from "./button-burger.vue";

export default {
  components: {
    Nav,
    ButtonPrimary,
    Currency,
    ButtonBurger
  },
  props: {
    isActive: {
      type: Boolean,
      required: true
    }
  },
  emits: ["update:isActive"],
  methods: {
    closeMenu() {
      this.$emit("update:isActive", false);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/header/mobile-drop-down-menu.scss";
</style>
