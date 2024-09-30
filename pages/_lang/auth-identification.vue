<template>
  <div class="container">
    <div class="auth-wrap-items margin-offset">
      <div class="auth-wrap-item general">
        <div class="auth-wrap-general">
          <AuthGeneral>
            <div class="auth-general__content-pretitle short-text">
              {{ $t('auth.identification_text') }}
              <span>  {{ $t('auth.identification_bold') }} </span>
            </div>
            <div class="auth-general__content-title">{{ $t('auth.aside_title') }}</div>
          </AuthGeneral>
        </div>
      </div>
      <div class="auth-wrap-item auth-type_less-padd">
        <div class="auth-type__steps">
          <nuxt-link to="auth-type" class="auth-type__step ">1</nuxt-link>
          <div class="auth-type__step active_step">2</div>
          <div class="auth-type__step-text"> <span> {{ $t('auth.identification_step') }} </span></div>
          <nuxt-link to="auth-contact-info" class="auth-type__step">3</nuxt-link>
          <nuxt-link to="auth-company" class="auth-type__step">4</nuxt-link>
          <nuxt-link to="auth-application" class="auth-type__step">5</nuxt-link>
        </div>
        <div class="auth-wrap-item__container">
          <div class="default-title auth__title medium-margin_bottom">{{ $t('auth.identification_title') }}</div>
          <form
            class="auth-identification__form"
            @submit.prevent="handleSubmit"
          >
            <div class="auth-identification__form-double">
              <div class="info-default auth__default less_input">
                <label for="name" class="info-default__label">{{ $t('auth.username') }}</label>
                <input id="name" type="text" :placeholder="$t('auth.name')" class="info-default__value ">
              </div>
              <div class="info-default auth__default less_input">
                <label for="surname" class="info-default__label">{{ $t('auth.surname') }}</label>
                <input id="surname" type="text" :placeholder="$t('auth.surname')" class="info-default__value ">
              </div>
            </div>
              <div
                v-for="(password, index) in passwords"
                :key="index"
                class="info-default auth__default password"
              >
                <label :for="password.id" class="info-default__label">{{$t(password.label)}}</label>
                <input
                  :id="password.id"
                  :type="password.isShown ? 'text' : 'password'"
                  :placeholder="$t(password.label)"
                  class="info-default__value "
                >
                <span
                  @click="password.isShown = !password.isShown"
                  :class="{'active': password.isShown}"
                >
                 <EyeIcon />
                </span>
              </div>
              <div class="info-default auth__default">
                <label for="email" class="info-default__label">{{ $t('auth.login_access') }} </label>
                <input id="email" type="text" :placeholder="$t('auth.email_phone')" class="info-default__value ">
              </div>
              <div class="info-default auth__default">
                <label for="company-name" class="info-default__label">{{ $t('company') }}</label>
                <input id="company-name" type="text" :placeholder="$t('company')" class="info-default__value ">
              </div>
              <div class="info-default auth__default">
                <label for="vat-id" class="info-default__label">
                  {{ $t('auth.company_registration_label') }}
                </label>
                <input id="vat-id" type="text" :placeholder="$t('auth.company_vat')" class="info-default__value ">
              </div>
            <div class="auth-type__notification">
              <InfoIcon />
              <div class="auth-type__notification-text">{{ $t('careful_filling') }}</div>
            </div>
            <nuxt-link to="auth-contact-info" class="btn-default black auth__btn-login">{{ $t('continue') }}</nuxt-link>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AuthGeneral from '~/components/auth/auth-general'
import InfoIcon from '~/components/icons/common/info'
import EyeIcon from '~/components/icons/common/eye'

export default {
  layout: 'auth',
  name: 'auth-identification',

  components: {
    AuthGeneral,
    InfoIcon,
    EyeIcon
  },

  head: {
    title: 'Authentication user'
  },

  data() {
    return {
      passwords: [
        {
          id:'password',
          label: 'auth.password',
          isShown: false
        },
        {
          id:'repeat-password',
          label: 'auth.repeat_password',
          isShown: false
        }
      ]
    }
  },

  methods: {
    handleSubmit() {
      console.log('success');
    },
  }
}
</script>

<style lang="scss" scoped>
  @import "~/assets/css/auth/auth-general";
</style>
