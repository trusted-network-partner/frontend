<template>
  <div class="settings-type">
    <div class="settings-subtitle">
      {{ $t('type') }}
    </div>
    <div class="content-form__items">
      <div class="content-form__item">
        <div class="content-form__item-img">
          <GroupIcon />
        </div>
        <div class="content-form__item-info">
          <div class="content-form__item-title">
            {{ $t('national') }}
          </div>
          <p class="content-form__item-descr">
            {{ $t('national_service') }}
          </p>
        </div>
        <label class="content-form__item-label absolute">
          <input
            type="radio"
            name="customer-group"
            value="national"
          >
          <span class="content-form__item-check">
                <CheckIcon />
              </span>
        </label>
      </div>
      <div class="content-form__item mr-0">
        <div class="content-form__item-img">
          <EventIcon />
        </div>
        <div class="content-form__item-info">
          <div class="content-form__item-title">
            {{ $t('international') }}
          </div>
          <p class="content-form__item-descr">
            {{ $t('internation_service') }}
          </p>
        </div>
        <label class="content-form__item-label absolute">
          <input
            type="radio"
            name="customer-group"
            value="international"
            checked
          >
          <span class="content-form__item-check">
                <CheckIcon />
              </span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import CheckIcon from '~/components/icons/common/check'
import GroupIcon from '~/components/icons/common/group'
import EventIcon from '~/components/icons/common/event'
export default {
  name: 'settings-type-audience',

  components: {
    CheckIcon,
    GroupIcon,
    EventIcon
  }
}
</script>

<style lang="scss" scoped>
.content-form__item {
  width: 50%;
  margin-right: 57px;
  &:nth-child(2n) {
    margin-right: 0;
  }
}
.content-form__items {
  max-width: 1045px;
}
</style>
