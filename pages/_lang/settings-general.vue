<template>
  <main
    class="main"
  >
    <div class="content-wrap-full-width">
      <div class="container relative">
        <div class="content-wrap-details">
          <div class="settings-back">
            <nuxt-link to="settings" class="settings-back__link">
              <ArrowBack />
            </nuxt-link>
            <div class="settings-back__info">
              <div class="settings-back__title">
                {{ $t('general') }}
              </div>
              <div class="settings-back__descr">
                {{ $t('settings_general') }}
              </div>
            </div>
          </div>
          <div class="user-info">
            <div class="user-info__img">
              <img src="~/assets/img/agent/user-big.jpg" alt="">
              <nuxt-link to="#" class="user-info__img-edit">
                <PenIcon />
              </nuxt-link>
            </div>
            <div class="user-info__details">
              <nuxt-link
                to="agent-info"
                class="user-info__name"
              >
                Ruben Bothman
              </nuxt-link>
              <div class="user-info__descr">
                {{ $t('agent.position') }}
              </div>
            </div>
          </div>
          <SettingsEdit />
          <SettingsOptions
            @togglePopUp="togglePopUp"
          />
        </div>
        <Widgets />
      </div>
    </div>
    <LangPopup
      ref="langPopUp"
    />
  </main>
</template>

<script>
import Widgets from '~/components/widgets/widgets'
import ArrowBack from '~/components/icons/common/arrow-back'
import PenIcon from '~/components/icons/profile/pen'
import SettingsEdit from '~/components/settings/setting-edit'
import SettingsOptions from '~/components/settings/settings-options'
import LangPopup from '~/components/pop-ups/lang-pop-up'
export default {
  layout: 'header-underline',

  name: 'settings-default',

  head: {
    title: 'Settings default'
  },

  components: {
    Widgets,
    ArrowBack,
    PenIcon,
    SettingsEdit,
    SettingsOptions,
    LangPopup
  },

  data() {
    return {
      isPopUpShown: false
    }
  },

  methods: {
    togglePopUp() {
      this.$refs.langPopUp.open()
    },
    popUpClose() {
      this.isPopUpShown = false
    }
  },
}
</script>

<style scoped>
  .content-wrap-full-width {
    margin-bottom: 51px;
    width: 100%;
  }

</style>
