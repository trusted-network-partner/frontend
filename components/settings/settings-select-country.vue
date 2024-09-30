<template>
  <div class="settings-select">
    <div
      v-if="isBtn"
      class="settings-section__header"
    >
      <div class="settings-subtitle">
        {{ $t('location') }}
      </div>
      <div class="settings-sub-description">
        {{ $t('location_text') }}
      </div>
    </div>
    <div
      class="settings-select__item select-container"
      :class="{ 'active': isShown }"
      v-click-outside="selectClick"
    >
      <div
        class="settings-edit__item-inner select-trigger"
        @click="isShown = !isShown"
      >
        <div class="settings-edit__item-left">
          <div class="settings-edit__item-label">
            {{isBtn ? $t('from') : $t('country') }}
          </div>
          <div class="settings-edit__item-value">
            {{ selectedOption }}
          </div>
        </div>
        <div class="settings-edit__item-right select-trigger-icon">
          <TriangleIcon />
        </div>
      </div>
      <div
        v-show="isShown"
        class="select-dropdown"
      >
        <div class="select-dropdown__items">
          <div
            v-for="(option, index) in options"
            :key="index"
            class="select-dropdown__item"
            :class="{'active': option.chosen}"
            @click="chooseOption($t(option.name), option.id)"
          >
            <div class="select-dropdown__option">
              {{ $t(option.name) }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <button
      v-if="isBtn"
      class="settings-btn-more">
      <span class="settings-btn-more__icon">
        <span>+</span>
      </span>
      <span class="settings-btn-more__text">
        {{ $t('add_more') }}
      </span>
    </button>
  </div>
</template>

<script>
import TriangleIcon from '~/components/icons/common/triangle'
  export default {
    name: 'settings-select-country',

    props: ['isBtn'],

    components: {
      TriangleIcon
    },

    data() {
      return {
        isShown: false,
        selectedOption: '',
        options: [
          {
            id: 1,
            name: 'spain',
            chosen: true
          },
          {
            id: 2,
            name: 'russia',
            chosen: false
          },
          {
            id: 3,
            name: 'germany',
            chosen: false
          },
        ]
      }
    },

    methods: {
      chooseOption(value, id) {
        this.selectedOption = value
        this.isShown = false
        this.options.map(item => {
          item.chosen = item.id === id;
        })
      },
      selectClick(e) {
        this.isShown = false
      }
    },

    created() {
      this.$nextTick(() => {
        this.selectedOption = this.options[0].name
      })
    }
  }
</script>

<style lang="scss" scoped>
  .settings-subtitle {
    margin-bottom: 10px;
  }
  .select-dropdown {
    width: 50%;
    padding: 20px 30px;
  }
  .settings-select__item {
    margin-bottom: 23px;
  }
</style>
