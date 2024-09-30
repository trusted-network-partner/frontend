<template>
  <ul class="nav__list">
    <li class="nav__item">
      <nuxt-link to="agent-info" class="nav__link">
        {{ $t('nav.profile') }}
      </nuxt-link>
    </li>
    <li class="nav__item">
      <nuxt-link to="real-estate" class="nav__link">
        {{ $t('nav.real_estate') }}
      </nuxt-link>
    </li>
    <li class="nav__item">
      <nuxt-link to="partners" class="nav__link">
        {{ $t('nav.partners') }}
      </nuxt-link>
    </li>
    <li class="nav__item">
      <nuxt-link to="chat" class="nav__link flex">
        {{ $t('nav.chat') }}
        <span class="nav__link-element">
          <span class="nav__link-element-inner">
            3
          </span>
        </span>
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'nav-list'
  }
</script>

<style lang="scss" scoped>
  .flex {
     display: flex;
     align-items: center;
   }
  .nav {
    &__list {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &__item {
      margin-right: 5px;
      &:last-child {
        margin-right: 0;
      }
    }
    &__link {
      text-transform: uppercase;
      transition: all .3s ease;
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
        &-inner {
          font-weight: 600;
          color: $baseWhite;
        }
      }
    }
  }
</style>
