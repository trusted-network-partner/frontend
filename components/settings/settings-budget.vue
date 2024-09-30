<template>
  <div class="settings-budget-wrap range">
    <div class="info-default info-default__items">
      <div class="info-default__item">
        <label for="budget-min" class="info-default__label">
          {{ $t('min') }}
        </label>
        <input
          id="budget-min"
          type="number"
          value='10000'
          :placeholder="$t('min')"
          class="info-default__value"
        >
      </div>
      <div class="info-default__item">
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
                  {{ $t('max') }}
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
      </div>
    </div>
    <div class="settings-balance__range-wrap balance-range">
      <div class="settings-balance__range">
        <client-only>
          <vue-slider
            v-model="value"
            :enable-cross="false"
            :min="10000"
            :max="1000000"
            :interval="100"
            :tooltip-formatter="formatter2"
          ></vue-slider>
        </client-only>
    </div>
    </div>
  </div>
</template>

<script>
import TriangleIcon from '~/components/icons/common/triangle'
import 'vue-slider-component/theme/antd.css'
  export default {
    name: 'settings-budget',

    components: {
      TriangleIcon,
    },

    data() {
      return {
        isShown: false,
        selectedOption: 10000,
        value: [10000, 900000],
        marks: [10000, 50000, 100000, 200000, 500000, 1000000],
        formatter2: v => `$${('' + v).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`,
        options: [
          {id: 1, name: 10000, chosen: true},
          {id: 2, name: 20000, chosen: false},
          {id: 3, name: 30000, chosen: false},
          {id: 4, name: 40000, chosen: false},
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
  .settings-select .select-trigger {
    padding: 0 0 0 20px;
    height: auto;
    border: 0;
    border-left: 1px solid $thirdlyGray;
    border-radius: 0;
  }
  .settings-select .settings-edit__item-label {
    margin-bottom: 0;
  }
  .info-default__items {
    display: flex;
    overflow: visible;
    height: auto;
    max-width: 493px;
    margin-bottom: 55px;
  }
  .settings-subtitle {
    margin-bottom: 10px;
  }
  .select-dropdown {
    width: 100%;
    padding: 20px 30px;
  }
  .info-default__item {
    width: 50%;
  }
</style>
