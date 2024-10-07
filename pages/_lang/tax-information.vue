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
                {{ $t('text_information') }}
              </div>
              <div class="settings-back__descr">
                {{ $t('settings_general') }}
              </div>
            </div>
          </div>
          <div class="tax-wrap">
            <div class="settings-section__title">
              {{ $t('text_information') }}
            </div>
            <SettingsTax />
          </div>
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
import SettingsTax from '~/components/settings/settings-tax'
export default {
  layout: 'header-underline',

  name: 'tax-information',

  head: {
    title: 'Tax'
  },

  components: {
    Widgets,
    ArrowBack,
    PenIcon,
    SettingsTax
  }
}
</script>

<style scoped>
  .content-wrap-full-width {
    margin-bottom: 90px;
    width: 100%;
  }

  .content-wrap-details {
    max-width: 1071px;
  }
</style>
