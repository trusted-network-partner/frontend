<template>
  <ul :class="type" class="nav__list">
    <li class="nav__item">
      <nuxt-link to="agent-info" class="nav__link">
        {{ $t("nav.profile") }}
      </nuxt-link>
    </li>
    <li class="nav__item">
      <nuxt-link to="real-estate" class="nav__link">
        {{ $t("nav.real_estate") }}
      </nuxt-link>
    </li>
    <li class="nav__item">
      <nuxt-link to="partners" class="nav__link">
        {{ $t("nav.partners") }}
      </nuxt-link>
    </li>
    <li class="nav__item">
      <nuxt-link to="chat" class="nav__link flex">
        {{ $t("nav.chat") }}
        <span class="nav__link-element">
          <span class="nav__link-element-inner"> 3 </span>
        </span>
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "nav-list",
  props: {
    type: {
      type: "desktop" | "mobile",
      required: true
    }
  },
  setup() {}
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/default/utils/mixins.scss";
@import "../../assets/css/default/utils/vars.scss";

.flex {
  display: flex;
  align-items: center;
}

.nav {
  &__list {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &.desktop {
      @include maxMedia($breakpoint-lg) {
        display: none;
      }
    }

    &.mobile {
      flex-direction: column;
      align-items: flex-start;
      gap: 30px;
      margin-top: 100px;
    }
  }
  &__item {
    margin-right: 5px;
    &:last-child {
      margin-right: 0;
    }
  }

  &__list.mobile &__link {
    font-size: 40px;
  }
  &__link {
    text-transform: uppercase;
    transition: all 0.3s ease;
    font-weight: 500;
    &:hover:not(.nuxt-link-active) {
      color: $baseOrange;
    }
    &.nuxt-link-active {
      font-weight: bold;
    }
    &-element {
      width: 24px;
      height: 24px;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: $baseOrange;
      margin-left: 14px;
      @include maxMedia($breakpoint-lg) {
        width: 30px;
        height: 30px;
        font-size: 20px;
      }
      &-inner {
        font-weight: 600;
        color: $baseWhite;
      }
    }
  }
}
</style>
