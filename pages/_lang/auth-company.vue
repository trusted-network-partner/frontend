<template>
  <div class="container">
    <div class="auth-wrap-items margin-offset">
      <div class="auth-wrap-item general">
        <div class="auth-wrap-general">
          <AuthGeneral>
            <div class="auth-general__content-pretitle short-text">
              {{ $t('auth.about_text') }}
            </div>
            <div class="auth-general__content-title">{{ $t('auth.aside_title') }}</div>
          </AuthGeneral>
        </div>
      </div>
      <div class="auth-wrap-item auth-type_less-padd">
        <div class="auth-type__steps">
          <nuxt-link to="auth-type" class="auth-type__step">1</nuxt-link>
          <nuxt-link to="auth-identification" class="auth-type__step">2</nuxt-link>
          <nuxt-link to="auth-contact-info" class="auth-type__step ">3</nuxt-link>
          <div class="auth-type__step active_step">4</div>
          <div class="auth-type__step-text"> <span>  {{ $t('auth.about_step') }} </span></div>
          <nuxt-link to="auth-application" class="auth-type__step">5</nuxt-link>
        </div>
        <div class="auth-wrap-item__container">
          <div class="default-title auth__title medium-margin_bottom">{{ $t('auth.about_title') }}</div>
          <form class="auth-identification__form">
            <div class="info-default textarea__default auth__default">
                <label for="company-descr" class="info-default__label">{{ $t('auth.short_description') }}</label>
                <textarea id="company-descr" name="description" cols="1" rows="1" class="info-default__value textarea_big"></textarea>
            </div>
            <div class="auth-type__notification">
              <InfoIcon />
              <div class="auth-type__notification-text">{{ $t('auth.notice') }}</div>
            </div>
            <nuxt-link to="auth-application" class="btn-default black auth__btn-login">{{ $t('continue') }}</nuxt-link>
        </form>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import AuthGeneral from '~/components/auth/auth-general'
import InfoIcon from '~/components/icons/common/info'
export default {
  layout: 'auth',
  name: 'auth-company',

  components: {
    AuthGeneral,
    InfoIcon
  },

  head: {
    title: 'Authentication user'
  },
}
</script>

<style lang="scss" scoped>
  @import "~/assets/css/auth/auth-general";
  .auth-type__notification-text {
    text-transform: lowercase;
    &:first-letter {
      text-transform: capitalize;
    }
  }
</style>

