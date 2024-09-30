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
      <div class="pop-up pop-up-type-inquiry">
        <div class="pop-up__header">
          <div class="default-title">
            {{ $t('type_inquiry') }}
          </div>
          <div  @click="close">
            <CloseBigIcon />
          </div>
        </div>
        <div class="pop-uop__btns">
          <button
            v-for="(tab, index) in tabs"
            :key="index"
            type="button"
            class="btn-default"
            :class="{'black': currentTab === index}"
            @click="currentTab = index"
          >
            {{ tab.title }}
          </button>
        </div>
        <div v-if="currentTab === 0">
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
              <div class="info-default textarea">
                <label for="user-inquiry" class="info-default__label">
                  {{ $t('your_inquiry') }}
                </label>
                <textarea id="user-inquiry" :placeholder="$t('your_inquiry')" class="info-default__value">
              </textarea>
              </div>
            </div>
            <button
              type="submit" class="btn-default black pop-up-main"
            >
              {{ $t('leave_inquiry') }}
            </button>
          </form>
        </div>
        <div v-if="currentTab === 1">
          <div class="default-title">
            {{ $t('make_an_offer') }}
          </div>
          <form
            class="pop-up__form"
            @submit.prevent="formSubmit"
          >
            <div class="info-default-items">
              <div class="info-default">
                <label class="info-default__label">
                  {{ $t('auth.name') }}
                </label>
                <input type="text" :placeholder="$t('auth.name')" class="info-default__value" value="Ruben">
              </div>
              <div class="info-default">
                <label for="user-surname" class="info-default__label">
                  {{ $t('auth.surname') }}
                </label>
                <input type="text" :placeholder="$t('auth.surname')" class="info-default__value" value="Bothman">
              </div>
              <div class="info-default">
                <label for="user-phone" class="info-default__label">
                  {{ $t('auth.contact_phone') }}
                </label>
                <input type="text" :placeholder="$t('auth.contact_phone')" class="info-default__value" value="+380000000000">
              </div>
              <div class="info-default">
                <label class="info-default__label">
                  {{ $t('auth.email') }}
                </label>
                <input type="email" :placeholder="$t('auth.email')" class="info-default__value" value="ruben.bothman@gmail.com">
              </div>
              <div class="info-default">
                <label class="info-default__label">
                  {{ $t('user_price') }}
                </label>
                <input type="text" :placeholder="$t('user_price')" class="info-default__value" value="700000$">
              </div>
            </div>
            <button
              type="submit" class="btn-default black pop-up-main"
            >
              {{ $t('leave_inquiry') }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CloseBigIcon from '~/components/icons/common/close-big'
export default {
  name: 'type-inquiry-pop-up',

  components: {
    CloseBigIcon
  },

  data() {
    return {
      isOpen: false,
      currentTab: 0,
      tabs: [
        { id: 0, title: this.$t('more_details') },
        { id: 1, title: this.$t('make_offer') }
      ]
    }
  },

  methods: {
    open() {
      this.isOpen = true
    },
    close() {
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
