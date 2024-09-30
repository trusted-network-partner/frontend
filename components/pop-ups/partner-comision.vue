<template>
  <div
    v-if="isOpen"
    class="customer__popup"
  >
    <div class="customer__popup-default customer-registered__popup partner-comision__popup">
      <div class="customer__popup-title">
       <div class="customer__popup-icon">
         <InfoWarningIcon />
       </div>
       <span>
         {{ $t('partner_commission_title') }}
       </span>
      </div>
      <div class="customer__popup-subtitle">
        {{ $t('cant_view_commission') }}
      </div>
      <button
        class="btn-default black"
        @click="close"
      >
        {{ $t('close') }}
      </button>
    </div>
  </div>
</template>

<script>
import InfoWarningIcon from  '~/components/icons/common/info-warning'
export default {
  name: 'partner-commission-pop-up',

  components: {
    InfoWarningIcon
  },

  data() {
    return {
      isOpen: true
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
