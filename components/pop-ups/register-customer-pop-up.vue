<template>
  <div
    v-if="isShown"
    class="pop-up-wrap"
  >
    <div class="pop-up-wrap__inner">
      <div
        class="overlay"
        @click="popUpClose"
      >
      </div>
    </div>
    <div
      class="pop-up customer__popup"
    >
      <div class="customer__popup-default register-customer__popup">
        <div class="default-title">
          {{ $t('register_customer') }}
        </div>
        <div
          class="close__popup"
          @click="popUpClose"
        >
          <CloseBigIcon />
        </div>
        <form
          class="pop-up__form register-customer__form"
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
                {{ $t('contact_phone') }}
              </label>
              <input id="user-phone" type="text" :placeholder="$t('auth.contact_phone')" class="info-default__value" value="+380000000000">
            </div>
            <div class="info-default textarea textarea__default">
              <label for="user-notes" class="info-default__label">
                {{ $t('Notes') }}
              </label>
              <textarea id="user-notes" :placeholder="$t('Notes')" class="info-default__value">
              </textarea>
            </div>
          </div>
          <button
            type="submit" class="btn-default black pop-up-main"
          >
            {{ $t('Register') }}
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import CloseBigIcon from '~/components/icons/common/close-big';

export default {
    name: 'register-customer-pop-up',

    components: {
      CloseBigIcon
    },

    data() {
      return {
        isShown: false
      }
    },

    methods: {
      open() {
        this.isShown = true
      },
      popUpClose() {
        this.isShown = false
      },
      formSubmit() {
        console.log('success');
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~/assets/css/default/pop-ups";
</style>
