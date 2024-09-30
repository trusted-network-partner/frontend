<template>
  <div class="container">
    <div class="auth-wrap-items margin-offset">
      <div class="auth-wrap-item general">
        <div class="auth-wrap-general">
          <AuthGeneral>
            <div class="auth-general__content-pretitle short-text">
              {{ $t('auth.type_digital') }}
              <span> {{ $t('auth.type_bold') }}</span> {{ $t('auth.type_text') }}
            </div>
            <div class="auth-general__content-title">{{ $t('auth.aside_title') }}</div>
          </AuthGeneral>
        </div>
      </div>
      <div class="auth-wrap-item auth-type_less-padd">
        <div class="auth-type__steps">
          <div class="auth-type__step active_step">1</div>
          <div class="auth-type__step-text"> <span> {{ $t('auth.type_step') }} </span></div>
          <nuxt-link to="auth-identification" class="auth-type__step">2</nuxt-link>
          <nuxt-link to="auth-contact-info" class="auth-type__step">3</nuxt-link>
          <nuxt-link to="auth-company" class="auth-type__step">4</nuxt-link>
          <nuxt-link to="auth-application" class="auth-type__step">5</nuxt-link>
        </div>
        <div class="auth-wrap-item__container">
          <div class="default-title auth__title auth-type_big-margin">{{ $t('auth.type_title') }}</div>
          <div class="auth-type__class-items">
            <div
              v-for="(type, index) in  authType"
              :key="index"
              class="auth-type__class-item"
              :class="{'active': type.chosen}"
              @click="chooseType(type.id, type.type)"
            >
              <div class="auth__class-item__top">
                <MultipleUsersIcon />
              </div>
              <div class="auth__class-item__bottom">
                {{ $t(type.label) }}
              </div>
            </div>
          </div>
          <nuxt-link
            :to="routePath"
            class="btn-default black auth__btn-login"
          >{{ $t('continue') }}
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AuthGeneral from '~/components/auth/auth-general'
import MultipleUsersIcon from '~/components/icons/profile/multiple-users'

export default {
  layout: 'auth',
  name: 'auth-type',

  components: {
    AuthGeneral,
    MultipleUsersIcon
  },

  head: {
    title: 'Authentication user'
  },

  data() {
    return {
      route: '',
      authType: [
        { id: 1,
          label: 'association',
          type: 'association',
          chosen: false
        },
        { id: 2,
          label: 'company',
          type: 'company',
          chosen: false },
        { id: 3,
          label: 'sole_trader',
          type: 'trader',
          chosen: false
        },
      ]
    }
  },

  computed: {
    routePath() {
      if(this.route === 'company') {
        return 'auth-business'
      }
      return 'auth-identification'
    }
  },

  methods: {
    chooseType(id, type) {
      this.authType.map(item => {
        item.chosen = item.id === id;
        this.route = type
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~/assets/css/auth/auth-general";
</style>
