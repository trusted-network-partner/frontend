<template>
  <div
     v-if="isOpen"
     class="pop-up-wrap pop-up-performance"
  >
    <div
      class="overlay"
      @click="popUpClose"
    />
    <div class="pop-up">
      <div class="pop-up__header">
        <div class="default-title">
          {{ $t('performance') }}
        </div>
        <div  @click="popUpClose">
          <CloseBigIcon />
        </div>
      </div>
      <div class="pop-up__label">
        <div class="pop-up__label-inner">{{ $t('services') }} </div>
        <div class="pop-up__label-item">6</div>
      </div>
      <div
        v-for="(option, index) in popUpOptions"
        :key="index"
        class="content__form-option-text"
      >
        {{ $t(option.label) }}
      </div>
    </div>
  </div>
</template>

<script>
import CloseBigIcon from '~/components/icons/common/close-big'
export default {
  name: 'pop-up-performance',

  components: {
    CloseBigIcon
  },

  data() {
    return {
      isOpen: false,
      popUpOptions: [
        { id: 1, label: 'customer_service' },
        { id: 2, label: 'management_service' },
        { id: 3, label: 'verification_property_process' },
        { id: 4, label: 'digital_media' },
        { id: 5, label: 'consulting' },
        { id: 6, label: 'drone_photography' },
      ]
    }
  },

  methods: {
    open() {
      this.isOpen = true
    },
    popUpClose() {
      this.isOpen = false
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~/assets/css/default/pop-ups";
</style>
