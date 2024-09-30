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
                {{ $t('visitors') }}
              </div>
              <div class="settings-back__descr">
                {{ $t('settings_general') }}
              </div>
            </div>
          </div>
          <div class="visitors-wrap">
            <VisitorsInfo />
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
import VisitorsInfo from '@/components/info/visitors-info'

export default {
  layout: 'header-underline',

  name: 'visitors',

  head: {
    title: 'Visitors'
  },

  components: {
    Widgets,
    ArrowBack,
    VisitorsInfo
  }
}
</script>

<style lang="scss" scoped>
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
    max-width: 706px;
  }
</style>
