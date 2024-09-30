<template>
  <div
    v-if="isOpen"
    class="pop-up-wrap"
  >
    <div
      class="overlay"
      @click="popUpClose"
    />
    <div class="pop-up pop-up-lang">
      <div class="pop-up__header">
        <div class="default-title">
          {{ $t('skills') }}
        </div>
        <div  @click="popUpClose">
          <CloseBigIcon />
        </div>
      </div>
      <div class="pop-up__label">
        {{ $t('languages') }}
      </div>
      <form
        class="pop-up__form"
        @submit.prevent="handleSubmit"
      >
        <div class="content__form-options">
          <div class="content__form-option">
            <label class="content-form__item-label">
              <input
                type="checkbox"
                value="russian"
                >
              <span class="content-form__item-check">
                <CheckIcon />
              </span>
              <span class="content__form-option-text">
                 {{ $t('russian') }}
              </span>
            </label>
          </div>
          <div class="content__form-option">
            <label class="content-form__item-label">
              <input
                type="checkbox"
                value="spanish"
                checked>
              <span class="content-form__item-check">
                <CheckIcon />
              </span>
              <span class="content__form-option-text">
                {{ $t('spanish') }}
              </span>
            </label>
          </div>
          <div class="content__form-option">
            <label class="content-form__item-label">
              <input
                type="checkbox"
                value="english"
                >
              <span class="content-form__item-check">
                <CheckIcon />
              </span>
              <span class="content__form-option-text">
                {{ $t('english') }}
              </span>
            </label>
          </div>
          <div class="content__form-option">
            <label class="content-form__item-label">
              <input
                type="checkbox"
                value="french"
              >
              <span class="content-form__item-check">
                <CheckIcon />
              </span>
              <span class="content__form-option-text">
                 {{ $t('french') }}
              </span>
            </label>
          </div>
          <div class="content__form-option">
            <label class="content-form__item-label">
              <input
                type="checkbox"
                value="deutschland"
              >
              <span class="content-form__item-check">
                <CheckIcon />
              </span>
              <span class="content__form-option-text">
                 {{ $t('german') }}
              </span>
            </label>
          </div>
        </div>
        <button type="button" class="btn-default black">
          {{ $t('header.estate_btn') }}
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import CheckIcon from '~/components/icons/common/check'
import CloseBigIcon from '~/components/icons/common/close-big'
  export default {
    name: 'lang-pop-up',

    components: {
      CheckIcon,
      CloseBigIcon
    },

    data() {
      return {
        isOpen: false
      }
    },

    methods: {
      handleSubmit() {
        console.log('submit')
      },
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
  .content__form-options {
    display: block;
  }
  .content__form-option {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 30px;
    }
  }
  .content__form-option-text {
    margin-left: 10px;
  }
  .btn-default  {
    margin: 44px auto 0;
  }
</style>
