<template>
  <div class="settings-section">
    <div class="settings-section__title">
      {{$t('skills')}}
    </div>
    <div class="settings-options-items">
      <div
        v-for="(option, index) in settingsOptions"
        :key="index"
        class="settings-options-item"
      >
        <div
          class="settings-options-item__inner"
        >
          <div class="settings-options-item__option">
            {{ $t(option.option) }}
          </div>
          <div class="settings-options-item__right">
            <button
              type="button"
              class="settings-edit__item-btn"
              @click="togglePopup"
            >
              <PenIcon />
              <span>{{ $t('edit') }}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PenIcon from '~/components/icons/profile/pen'
  export default {
    name: 'settings-options',

    components: {
      PenIcon
    },

    data() {
      return {
        settingsOptions:  [
          { option: 'languages' },
          { option: 'business_knowledge' },
          { option: 'services' },
          { option: 'personal_quality' },
          { option: 'listings' }
        ]
      }
    },

    methods: {
      togglePopup() {
        this.$emit('togglePopUp')
      }
    }
  }
</script>

<style scoped>
  .settings-section {
    padding-bottom: 20px;
    margin-bottom: 69px;
  }
</style>
