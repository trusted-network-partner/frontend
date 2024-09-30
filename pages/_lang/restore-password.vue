<template>
  <div class="container">
    <div class="auth-wrap-items margin-offset">
      <div class="auth-wrap-item general">
        <div class="auth-wrap-general">
          <AuthGeneral>
            <div class="auth-general__content-pretitle"><span>{{ $t('restore.aside_bold') }}</span> {{ $t('restore.aside_descr') }}</div>
            <div class="auth-general__content-title">{{ $t('restore.aside_title') }}</div>
          </AuthGeneral>
        </div>
      </div>
      <div class="auth-wrap-item">
        <div class="auth-wrap-item__container">
          <div class="default-title auth__title">{{ $t('restore.title') }}</div>
          <div class="auth-wrap-item__subtitle auth__subtitle">{{ $t('restore.descr') }}!</div>
          <div class="content-wrap-auth">
            <form
              class="content-wrap-form"
              @submit.prevent="handleSubmit"
            >
              <div class="info-default auth__default">
                <label for="email-password" class="info-default__label">{{ $t('auth.email') }}</label>
                <input id="email-password" type="email" placeholder="Email" class="info-default__value ">
              </div>
              <button type="submit" class="btn-default black auth__btn-login">{{ $t('auth.reset') }}</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AuthGeneral from '~/components/auth/auth-general'
export default {
  layout: 'auth',
  name: 'restore-password',

  components: {
    AuthGeneral
  },

  head: {
    title: 'Password restore'
  },

  methods: {
    handleSubmit() {
      console.log('success');
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~/assets/css/auth/auth-general";
  .auth-general__content-pretitle {
    margin-bottom: 50px;
  }
</style>
