<template>
  <main
    class="main"
  >
    <div class="content-wrap-full-width">
      <div class="container relative">
        <div class="content-wrap-details notifications-wrap">
          <div class="settings-back">
            <nuxt-link to="settings" class="settings-back__link">
              <ArrowBack />
            </nuxt-link>
            <div class="settings-back__info">
              <div class="settings-back__title">
                {{ $t('notification_privacy') }}
              </div>
              <div class="settings-back__descr">
                {{ $t('settings_general') }}
              </div>
            </div>
          </div>
          <SettingsNotificationsPrivacy />
        </div>
        <Widgets />
      </div>
    </div>
  </main>
</template>

<script>
import Widgets from '~/components/widgets/widgets'
import ArrowBack from '~/components/icons/common/arrow-back'
import PenIcon from '~/components/icons/profile/pen'
import SettingsNotificationsPrivacy from '~/components/settings/settings-notifications'
export default {
  layout: 'header-underline',

  name: 'notification-privacy',

  head: {
    title: 'Notification Privacy'
  },

  components: {
    Widgets,
    ArrowBack,
    PenIcon,
    SettingsNotificationsPrivacy
  }
}
</script>

<style scoped>
  .content-wrap-full-width {
    margin-bottom: 90px;
    width: 100%;
  }
  .widgets {
    position: absolute;
    right: -152px;
    top: 16%;
  }
  .content-wrap-details {
    max-width: 824px;
  }
</style>
