<template>
  <div class="auth-general">
    <div class="auth-general__image">
      <img src="~/assets/img/auth/auth-picture.png" alt="" class="auth-general__img">
    </div>
    <div class="auth-general__content">
      <slot></slot>
      <div class="auth-general__content-buttons">
        <nuxt-link to="login" class="btn-default blank">{{ $t('auth.login_btn') }}</nuxt-link>
        <nuxt-link to="auth-type" class="btn-default black">{{ $t('auth.register_btn') }}</nuxt-link>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'auth-general'
  }
</script>

<style lang="scss" scoped>
.auth-general {
  &__content-buttons {
    display: flex;
    align-items: center;

    & > .btn-default {
      margin-right: 30px;
    }
  }
  &__img {
    margin-bottom: 90px;
  }
}
</style>
