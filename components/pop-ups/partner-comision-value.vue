<template>
  <div
    v-if="isOpen"
    class="pop-up-wrap"
  >
    <div class="pop-up-wrap__inner">
      <div
        class="overlay"
        @click="close"
      />
    </div>
    <div
      class="pop-up customer__popup"
    >
      <div class="customer__popup-default customer-registered__popup partner-comision-value__popup">
        <div class="default-title">
          {{ $t('partner_commission_title') }}
        </div>
        <form
          class="pop-up__form register-customer__form"
          @submit.prevent="formSubmit"
        >
          <div class="info-default-items">
            <div class="info-default">
              <label for="user-name-smth" class="info-default__label">
                {{ $t('commission') }}
              </label>
              <input id="user-name-smth" type="text" :placeholder="$t('auth.name')" class="info-default__value" value="3.000€">
            </div>
          </div>
          <button class="btn-default black">
            {{ $t('close') }}
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
 export default {
  name: 'partner-commission-pop-up',

   data() {
    return {
      isOpen: false
    }
   },

  methods: {
    formSubmit() {
      console.log('success')
      this.close()
    },
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
