<template>
  <div
    v-if="isShown"
    class="customer__popup"
  >
    <div class="customer__popup-default customer-registered__popup">
      <div class="customer__popup-title">
        <div class="customer__popup-icon">
          <InfoSuccessIcon />
        </div>
       <span>
         {{ $t('customer_successfully_registered') }}
       </span>
      </div>
      <div class="customer__popup-subtitle">
        {{ $t('register_customer_descr') }}
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
import InfoSuccessIcon from '~/components/icons/common/info-success';

export default {
  name: 'customer-registered-pop-up',

  components: {
    InfoSuccessIcon
  },

  data() {
    return {
      isShown: true
    }
  },

  methods: {
    open() {
      this.isShown = true
    },
    close() {
      this.isShown = false
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~/assets/css/default/pop-ups";
</style>
