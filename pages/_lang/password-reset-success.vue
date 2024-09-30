<template>
  <div class="container">
    <div class="auth-wrap-items margin-offset">
      <div class="auth-wrap-item general">
        <div class="auth-wrap-general">
          <AuthGeneral >
            <div class="auth-general__content-pretitle">{{ $t('success.aside_text') }}<span> {{ $t('success.aside_bold') }}</span></div>
            <div class="auth-general__content-title">{{ $t('success.aside_title') }}</div>
          </AuthGeneral>
        </div>
      </div>
      <div class="auth-wrap-item">
        <div class="auth-wrap-item__container">
          <div class="default-title auth__title">{{ $t('success.title') }}</div>
          <div class="auth-wrap-item__subtitle auth__subtitle auth__subtitle_less-margin">{{ $t('success.descr') }}</div>
          <nuxt-link to="login" class="btn-default black auth__btn-login"> {{ $t('success.home_page') }}</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AuthGeneral from '~/components/auth/auth-general'
export default {
  layout: 'auth',
  name: 'password-reset-success',

  components: {
    AuthGeneral
  },

  head: {
    title: 'Password reset success'
  },
}
</script>

<style lang="scss" scoped>
  @import "~/assets/css/auth/auth-general";
  .auth-general__content-pretitle {
    margin-bottom: 50px;
  }
</style>

