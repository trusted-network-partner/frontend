<template>
  <div class="settings-items">
    <div class="settings-section">
      <div class="settings-section__title">
        {{ $t('receive_requests') }}
      </div>
      <div class="content__form-options">
        <div class="content__form-option">
          <label class="content-form__item-label">
            <input
              type="radio"
              name="cooperation"
              value="1"
              checked
            >
            <span class="content-form__item-check">
                <CheckIcon />
              </span>
            <span class="content__form-option-text">
                {{ $t('yes') }}
              </span>
          </label>
        </div>
        <div class="content__form-option">
          <label class="content-form__item-label">
            <input
              type="radio"
              name="cooperation"
              value="0"
            >
            <span class="content-form__item-check">
                <CheckIcon />
              </span>
            <span class="content__form-option-text">
                {{ $t('no') }}
              </span>
          </label>
        </div>
      </div>
    </div>
    <div class="settings-section">
      <div class="settings-section__title">
        {{ $t('display_company') }}
      </div>
      <div class="content__form-options">
        <div class="content__form-option">
          <label class="content-form__item-label">
            <input
              type="radio"
              name="real-estate-display"
              value="1"
              checked
            >
            <span class="content-form__item-check">
                <CheckIcon />
              </span>
            <span class="content__form-option-text">
                {{ $t('yes') }}
              </span>
          </label>
        </div>
        <div class="content__form-option">
          <label class="content-form__item-label">
            <input
              type="radio"
              name="real-estate-display"
              value="0"
            >
            <span class="content-form__item-check">
                <CheckIcon />
              </span>
            <span class="content__form-option-text">
              {{ $t('no') }}
            </span>
          </label>
        </div>
      </div>
    </div>
    <div class="settings-section">
    <div class="settings-section__title">
      {{ $t('display_people') }}
    </div>
    <div class="content__form-options">
      <div class="content__form-option">
        <label class="content-form__item-label">
          <input
            type="radio"
            name="profile-display"
            value="1"
            checked
          >
          <span class="content-form__item-check">
                <CheckIcon />
              </span>
          <span class="content__form-option-text">
             {{ $t('yes') }}
          </span>
        </label>
      </div>
      <div class="content__form-option">
        <label class="content-form__item-label">
          <input
            type="radio"
            name="profile-display"
            value="0"
          >
          <span class="content-form__item-check">
                <CheckIcon />
              </span>
          <span class="content__form-option-text">
            {{ $t('no') }}
          </span>
        </label>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import CheckIcon from '~/components/icons/common/check'
  export default {
    name: 'notifications-privacy-info',

    components: {
      CheckIcon
    }
  }
</script>

<style lang="scss" scoped>
    .content-form__item-check {
      border-radius: 50%;
    }
    .settings-section {
      padding-bottom: 40px;
      margin-bottom: 38px;
    }
    .content__form-option {
      margin-right: 82px;
    }
</style>
