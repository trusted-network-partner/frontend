<template>
  <div
    v-if="isOpen"
    class="timepicker videoconference"
  >
    <div class="timepicker-content">
      <div class="default-title">
        {{ $t('timepicker') }}
      </div>
      <div class="timepicker-descr">
        {{ $t('timepicker_descr') }}
      </div>
      <div class="timepicker-items">
        <div class="info-default timepicker-item info-default_dark">
          <div class="timepicker-item__title">{{ $t('data') }}</div>
          <div class="timepicker-item__value">May, 2 - May,21</div>
        </div>
        <div class="info-default timepicker-item info-default_dark">
          <div class="timepicker-item__title">
            {{ $t('from') }}
          </div>
          <div class="timepicker-item__value">07:00 AM</div>
        </div>
        <div class="info-default timepicker-item info-default_dark">
          <div class="timepicker-item__title">
            {{ $t('to') }}
          </div>
          <div class="timepicker-item__value">12:00 AM</div>
        </div>
      </div>
      <a href="#" class="btn-default blank timepicker-btn">
        {{ $t('check') }}
      </a>
    </div>
    <div class="videoconference__popup">
      <div class="videoconference__popup-content">
        <div class="videoconference__popup-title">{{ $t('yesterday') }}, May 2</div>
        <div class="videoconference__items">
          <div class="info-default videoconference__item info-default_dark videoconference__item_waiting">
            <div class=" videoconference__item-title">
              {{ $t('video_show') }}
            </div>
            <div class=" videoconference__item-value">9:00 AM — 10:00 AM</div>
            <div class="videoconference__item-members"></div>
          </div>
          <div class="info-default videoconference__item info-default_dark videoconference__item_cancel">
            <div class=" videoconference__item-title">
              {{ $t('viewing_with_belgium') }}
            </div>
            <div class=" videoconference__item-value">10:00 AM — 10:30 AM</div>
            <div class="videoconference__item-members"></div>
          </div>
          <div class="info-default videoconference__item info-default_dark videoconference__item_accept">
            <div class=" videoconference__item-title">{{ $t('viewing_remax') }}</div>
            <div class=" videoconference__item-value">11:00 AM — 12:00 AM</div>
            <div class="videoconference__item-members"></div>
          </div>
        </div>
        <a href="#" class="btn-default black videoconference__popup-btn">
          {{ $t('show_all') }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import TriangleIcon from '~/components/icons/common/triangle'
import SettingsBudget from '~/components/settings/settings-budget'
import CheckIcon from '~/components/icons/common/check'

export default {
  name: 'time-picker-popup',

  components: {
    TriangleIcon,
    SettingsBudget,
    CheckIcon,
  },

  data() {
    return {
      isOpen: false
    }
  },

  methods: {
    open() {
      this.isOpen = true
    },
    close() {
      this.isOpen = false
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~/assets/css/default/pop-ups";
</style>

