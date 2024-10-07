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
                {{ $t('billing_methods') }}
              </div>
              <div class="settings-back__descr">
                {{ $t('settings_general') }}
              </div>
            </div>
          </div>
          <div class="billing-methods-wrap">
            <div class="settings-section__title">
              {{ $t('billing_methods') }}
            </div>
            <SettingsBilling />
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
import SettingsBilling from '~/components/settings/settings-type-billing'
export default {
  layout: 'header-underline',

  name: 'billing-methods',

  head: {
    title: 'Billing methods'
  },

  components: {
    Widgets,
    ArrowBack,
    SettingsBilling
  }
}
</script>

<style scoped>
  .content-wrap-full-width {
    margin-bottom: 90px;
    width: 100%;
  }

  .content-wrap-details {
    max-width: 1045px;
  }
  .settings-subtitle {
    margin-bottom: 12px;
  }
</style>
