<template>
  <div
    v-if="isOpen"
    class="pop-up-wrap"
  >
    <div class="pop-up-wrap__inner">
      <div
        class="overlay"
        @click="popUpClose"
      />
      <div class="pop-up pop-up-type-inquiry">
        <div class="pop-up__header">
          <div class="default-title">
            {{ $t('type_inquiry') }}
          </div>
          <div  @click="popUpClose">
            <CloseBigIcon />
          </div>
        </div>
        <div class="pop-uop__btns">
          <button type="button" class="btn-default black">
            {{ $t('more_details') }}
          </button>
          <button type="button" class="btn-default">
            {{ $t('make_offer') }}
          </button>
        </div>
        <div class="default-title">
          {{ $t('more_details') }}
        </div>
        <form
          class="pop-up__form"
          @submit.prevent="formSubmit"
        >
          <div class="info-default-items">
            <div class="info-default">
              <label for="user-name" class="info-default__label">
                {{ $t('auth.name') }}
              </label>
              <input id="user-name" type="text" :placeholder="$t('auth.name')" class="info-default__value" value="Ruben">
            </div>
            <div class="info-default">
              <label for="user-surname" class="info-default__label">
                {{ $t('auth.surname') }}
              </label>
              <input id="user-surname" type="text" :placeholder="$t('auth.surname')" class="info-default__value" value="Bothman">
            </div>
            <div class="info-default">
              <label for="user-phone" class="info-default__label">
                {{ $t('auth.contact_phone') }}
              </label>
              <input id="user-phone" type="text" :placeholder="$t('auth.contact_phone')" class="info-default__value" value="+380000000000">
            </div>
            <div class="info-default">
              <label for="user-email" class="info-default__label">
                {{ $t('auth.email') }}
              </label>
              <input id="user-email" type="email" :placeholder="$t('auth.email')" class="info-default__value" value="ruben.bothman@gmail.com">
            </div>
            <div class="info-default">
              <label for="user-price" class="info-default__label">
                {{ $t('your_price') }}
              </label>
              <input id="user-price" type="text" :placeholder="$t('your_price')" class="info-default__value" value="700000$">
            </div>
          </div>
          <button type="submit" class="btn-default black pop-up-main">
            {{ $t('leave_inquiry') }}
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import CloseBigIcon from '~/components/icons/common/close-big'
export default {
  name: 'type-inquiry-price-pop-up',

  components: {
    CloseBigIcon
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
    popUpClose() {
      this.isOpen = false
    },
    formSubmit() {
      this.$emit('formSubmit')
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~/assets/css/default/pop-ups";
</style>
