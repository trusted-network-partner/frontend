<template>
  <main class="main">
    <div class="content-wrap-full-width">
      <div class="container relative">
        <div class="content-wrap-inner">
          <div class="settings-main">
            <div class="settings-main__user">
              <div class="user-info">
                <nuxt-link
                  to="agent-info"
                  class="user-info__img"
                >
                  <img src="~/assets/img/agent/user-big.jpg" alt="">
                </nuxt-link>
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
                  <nuxt-link to="agent-info" class="btn-default blank">
                    {{ $t('public_profile') }}
                  </nuxt-link>
                </div>
              </div>
            </div>
            <SettingsItems />
          </div>
        </div>
        <Widgets />
      </div>
    </div>
  </main>
</template>

<script>
import Widgets from '~/components/widgets/widgets'
import SettingsItems from '~/components/settings/settings-main-items'
export default {
  layout: 'header-underline',

  name: 'settings',

  components: {
    Widgets,
    SettingsItems
  },

  head: {
    title: 'Settings'
  },
}
</script>

<style scoped>
  .content-wrap-full-width {
    margin-bottom: 120px;
    width: 100%;
  }
  .widgets {
    position: absolute;
    right: -152px;
    top: 16%;
  }
</style>
