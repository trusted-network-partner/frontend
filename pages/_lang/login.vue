<template>
  <div class="container">
    <div class="auth-wrap-items">
      <div class="auth-wrap-item general">
        <div class="auth-wrap-general">
          <AuthGeneral>
            <div class="auth-general__content-pretitle">{{ $t('login.welcome') }}
              <span>{{ $t('login.application') }} </span>
            </div>
            <div class="auth-general__content-title">{{ $t('login.aside_title') }} </div>
          </AuthGeneral>
        </div>
      </div>
      <div class="auth-wrap-item">
        <div class="auth-wrap-item__container">
          <div class="default-title auth__title">{{ $t('login.title') }}</div>
          <div class="auth-wrap-item__subtitle auth__subtitle">{{ $t('login.descr') }}</div>
          <div class="content-wrap-auth">
            <form class="content-wrap-form" @submit.prevent="handleSubmit">
              <div class="info-default auth__default">
                <label for="user-name" class="info-default__label">{{ $t('auth.username') }}</label>
                <input type="text" id="user-name" :placeholder="$t('auth.name')" class="info-default__value ">
              </div>
              <div
                v-for="(password, index) in passwords"
                :key="index"
                class="info-default auth__default password"
              >
                <label :for="password.id" class="info-default__label">
                  {{ $t(password.label) }}
                </label>
                <input :id="password.id" :type="password.isShown ? 'text' : 'password'" :placeholder="$t(password.label)" class="info-default__value ">
                <span
                  @click="password.isShown = !password.isShown"
                  :class="{'active': password.isShown}"
                >
                 <EyeIcon />
                </span>
              </div>
              <div class="content-form__item-info less-margin_bottom">
                <label class="content-form__item-label auth__remember-label">
                  <input type="checkbox" class="">
                  <span class="content-form__item-check">
                    <CheckIcon />
                  </span>
                  <span class="auth__remember-text"> {{ $t('auth.remember') }}</span>
                </label>
              </div>
              <button type="submit" class="btn-default black auth__btn-login"> {{ $t('auth.login_btn') }}</button>
            </form>
            <div class="auth__reset-container">
              <span>{{ $t('auth.forgot_password') }} </span>
              <nuxt-link to="restore-password" class="auth__reset-link"> {{ $t('auth.reset') }}</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AuthGeneral from '~/components/auth/auth-general'
import CheckIcon from '~/components/icons/common/check'
import EyeIcon from '~/components/icons/common/eye'

export default {
  layout: 'auth',

  name: 'login',

  head: {
    title: 'Log in'
  },

  components: {
    AuthGeneral,
    CheckIcon,
    EyeIcon
  },


  data() {
    return {
      passwords: [
        {
          id:'password',
          label: 'auth.password',
          isShown: false
        }
      ]
    }
  },

  methods: {
    handleSubmit() {
      console.log('submit')
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~/assets/css/auth/auth-general";
</style>
