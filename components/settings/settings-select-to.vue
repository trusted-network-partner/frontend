<template>
  <div class="settings-select">
    <div
      class="settings-select__item select-container"
      :class="{'active': isShown }"
      v-click-outside="selectClick"
    >
      <div
        class="settings-edit__item-inner select-trigger"
        @click="isShown = !isShown"
      >
        <div class="settings-edit__item-left">
          <div class="settings-edit__item-label">
            {{ $t('to') }}
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
            v-for="option in options"
            :key="option.id"
            class="select-dropdown__item"
            :class="{'active': option.chosen}"
            @click="chooseOption(option.name, option.id)"
          >
            <div class="select-dropdown__option">
              {{ option.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TriangleIcon from '~/components/icons/common/triangle'
export default {
  name: 'settings-select-from',

  components: {
    TriangleIcon
  },

  data() {
    return {
      isShown: false,
      selectedOption: 'Alicante',
      options: [
        {id: 1, name: 'Alicante', chosen: true},
        {id: 2, name: 'item3', chosen: false},
        {id: 3, name: 'item4', chosen: false},
        {id: 4, name: 'item5', chosen: false},
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
    margin-bottom: 30px;
  }
</style>
