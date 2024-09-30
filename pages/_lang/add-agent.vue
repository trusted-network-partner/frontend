<template>
  <div class="container hire-professional-wrap">
    <div
      class="estate-info-element"
      :style="{'height': sidebarHeight + 'px' }"
    />
    <div class="estate-info-wrap">
      <div class="estate-general">
        <div
          ref="sidebar"
          class="estate-general__wrap"
        >
          <div class="estate-general__container">
            <div class="estate-general__title">
              {{ $t('hello_member') }}
            </div>
            <div class="estate-general__descr">
              <p>
                {{ $t('add_agent_descr') }}
              </p>
            </div>
          </div>
        </div>
        <AddAgentLinks
          :step="2"
        />
      </div>
      <div class="hire-professional-content">
        <div class="auth-wrap-item__container">
          <div class="default-title medium-margin_bottom">{{ $t('auth.identification_title') }}</div>
          <form
            class="auth-identification__form"
            @submit.prevent=""
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
          </form>
        </div>
        <nuxt-link to="add-agent-description"
          class="btn-default hire-professional-budget__button black"
        >
          {{ $t('next_step') }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import AddAgentLinks from '@/components/agent/add-agent-links'
import InfoIcon from "@/components/icons/common/info";
import EyeIcon from "@/components/icons/common/eye";
export default {
  layout: 'sidebar',
  name: 'add-agent',

  head: {
    title: 'Add Agent'
  },

  components: {
    InfoIcon,
    EyeIcon,
    AddAgentLinks
  },

  data() {
    return {
      sidebarOffset: 0,
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

  computed: {
    sidebarHeight() {
      return this.sidebarOffset
    }
  },

  methods: {},

  mounted() {
    this.sidebarOffset = this.$refs.sidebar.offsetHeight
  }
}
</script>

<style lang="scss" scoped>
  @import "~/assets/css/hire-professional/hire-professional";
  @import "~/assets/css/auth/auth-general";
  .estate-general__title {
    margin-bottom: 15px;
  }
  .heir-professional-content__subtitle {
    margin-bottom: 20px;
  }
  .hire-professional__location {
    margin-bottom: 23px;
  }
</style>
