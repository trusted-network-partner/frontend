<template>
  <div class="container">
    <div class="auth-wrap-items margin-offset">
      <div class="auth-wrap-item general">
        <div class="auth-wrap-general">
          <AuthGeneral>
            <div class="auth-general__content-pretitle short-text">
              <span>{{ $t('auth.business_descr') }} </span>
              {{ $t('auth.application_text') }}
            </div>
            <div class="auth-general__content-title">{{ $t('auth.application_aside_title') }}</div>
          </AuthGeneral>
        </div>
      </div>
      <div class="auth-wrap-item auth-type_less-padd">
        <div class="auth-type__steps">
          <nuxt-link to="auth-type" class="auth-type__step">1</nuxt-link>
          <nuxt-link to="auth-identification" class="auth-type__step">2</nuxt-link>
          <nuxt-link to="auth-contact-info" class="auth-type__step">3</nuxt-link>
          <nuxt-link to="auth-company" class="auth-type__step">4</nuxt-link>
          <div class="auth-type__step active_step">5</div>
          <div class="auth-type__step-text"> <span> {{ $t('auth.application_step_documents') }} </span></div>

        </div>
        <div class="auth-wrap-item__container">
          <div class="default-title auth__title">{{ $t('auth.application_title') }}</div>
          <div class="auth-wrap-item__subtitle auth__subtitle">{{ $t('auth.application_descr') }}</div>
          <form
            class="auth-identification__form"
            @submit.prevent="handleSubmit"
          >
            <ul class="auth-application__list">
              <li class="auth-application__item">{{ $t('auth.passport') }}
                <label class="auth-application__label">{{ $t('upload') }}<input type="file" accept="image/jpg,image/jpeg,image/png,image/gif,image/svg" class="auth-application__input"> </label>
              </li>
              <li class="auth-application__item">{{ $t('auth.number_crn') }}
                <label class="auth-application__label">{{ $t('upload') }}<input type="file" accept="image/jpg,image/jpeg,image/png,image/gif,image/svg" class="auth-application__input"> </label>
              </li>
              <li class="auth-application__item">{{ $t('auth.company_status') }}
                <label class="auth-application__label">{{ $t('upload') }}<input type="file" accept="image/jpg,image/jpeg,image/png,image/gif,image/svg" class="auth-application__input"> </label>
              </li>
              <li class="auth-application__item">{{ $t('auth.sic_code') }}
                <label class="auth-application__label">{{ $t('upload') }}<input type="file" accept="image/jpg,image/jpeg,image/png,image/gif,image/svg" class="auth-application__input"> </label>
              </li>
            </ul>
            <button class="btn-default black auth__btn-login">{{ $t('complete') }}</button>
        </form>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import AuthGeneral from '~/components/auth/auth-general'

export default {
  layout: 'auth',
  name: 'auth-application',

  components: {
    AuthGeneral,
  },

  head: {
    title: 'Authentication user'
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
    margin-bottom: 55px;
  }
  .auth-application__label {
    transition: all .3s ease;
    cursor: pointer;
    &:hover {
      font-weight: 500;
    }
  }
</style>
