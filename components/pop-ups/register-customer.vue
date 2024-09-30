<template>
  <div
    v-if="isOpen"
    class="customer__popup"
  >
    <div class="customer__popup-default customer-registered__popup register-customer__popup">
      <div class="customer__popup-title">
        <div class="customer__popup-icon">
          <InfoWarningIcon />
        </div>
       <span>
         {{ $t('register_customer') }}
       </span>
      </div>
      <div class="customer__popup-subtitle">
        {{ $t('register_customer_descr') }}
      </div>
      <button class="btn-default black">{{ $t('close') }}</button>
    </div>
  </div>
</template>

<script>
import InfoWarningIcon from  '~/components/icons/common/info-warning'
export default {
  name: 'register-customer-pop-up',

  components: {
    InfoWarningIcon
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
