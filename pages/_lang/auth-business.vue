<template>
  <div class="container">
    <div class="auth-wrap-items margin-offset">
      <div class="auth-wrap-item general">
        <div class="auth-wrap-general">
          <AuthGeneral>
            <div class="auth-general__content-pretitle short-text">
              {{ $t('auth.business_text') }}
              <span>  {{ $t('auth.business_bold') }}</span>
            </div>
            <div class="auth-general__content-title">{{ $t('auth.aside_title') }}</div>
          </AuthGeneral>
        </div>
      </div>
      <div class="auth-wrap-item auth-type_less-padd ">
        <div class="auth-type__steps">
          <div class="auth-type__step active_step">1</div>
          <div class="auth-type__step-text"> <span> {{ $t('auth.type_step') }} </span></div>
          <nuxt-link to="auth-identification" class="auth-type__step">2</nuxt-link>
          <nuxt-link to="auth-contact-info" class="auth-type__step">3</nuxt-link>
          <nuxt-link to="auth-company" class="auth-type__step">4</nuxt-link>
          <nuxt-link to="auth-application" class="auth-type__step">5</nuxt-link>
        </div>
        <div class="auth-wrap-item__container">
          <div class="default-title auth__title">{{ $t('auth.business_title') }}</div>
          <div class="auth-wrap-item__subtitle auth__subtitle">{{ $t('auth.business_descr') }}</div>
          <div class="auth-type__class-items">
            <div
              v-for="(type, index) in businessType"
              :key="index"
              class="auth-type__class-item"
              :class="{'active': type.chosen}"
              @click="chooseType(type.id)"
            >
              <div class="auth__class-item__top">
                <MultipleUsersIcon />
              </div>
              <div class="auth__class-item__bottom">
                {{ $t(type.type) }}
              </div>
            </div>
          </div>
          <div class="auth-type__notification">
            <InfoIcon />
            <div class="auth-type__notification-text">
              {{ $t('careful_filling') }}
            </div>
          </div>
          <div class="content-form__item-info auth_flex less-margin_bottom">
            <label class="content-form__item-label auth__remember-label">
              <input type="checkbox">
              <span class="content-form__item-check">
                <CheckIcon />
              </span>
            </label>
            <div class="auth__agree-container">
              <span> {{ $t('agree') }} </span>
              <nuxt-link to="#" class="auth__reset-link">{{ $t('terms_conditions') }}</nuxt-link>
            </div>
          </div>
          <nuxt-link to="auth-identification" class="btn-default black auth__btn-login">{{ $t('continue') }}</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AuthGeneral from '~/components/auth/auth-general'
import CheckIcon from '~/components/icons/common/check'
import MultipleUsersIcon from '~/components/icons/profile/multiple-users'
import InfoIcon from '~/components/icons/common/info'
export default {
  layout: 'auth',
  name: 'auth-business',

  components: {
    AuthGeneral,
    CheckIcon,
    MultipleUsersIcon,
    InfoIcon
  },

  head: {
    title: 'Authentication user'
  },

  data() {
    return {
      businessType: [
        {
          id: 1,
          type: 'real_estate',
          chosen: false
        },
        {
          id: 2,
          type: 'developer',
          chosen: false
        },
        { id: 3,
          type: 'real_estate_listing',
          chosen: false
        }
      ]
    }
  },

  methods: {
    chooseType(id) {
      this.businessType.map(item => {
        item.chosen = item.id === id;
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~/assets/css/auth/auth-general";
</style>
