<template>
  <form class="filters">
    <div class="filters__inner">
      <div class="default-title">
        {{ $t('filters') }}
      </div>
      <div class="filters__section">
        <div class="filters__search default-input">
          <SearchIcon />
          <input type="text" placeholder="Los Europeos, torrevieja">
        </div>
      </div>
      <div class="filters__section">
        <div class="filters__section-title">
          {{ $t('typeProperty') }}
        </div>
        <div class="filters__type">
          <label
            v-for="type in filterType"
            :key="type.id"
            class="filters__type-label"
          >
            <span class="filters__type-inner">
              <component
                :is="type.icon"
              />
            </span>
            <input
              type="radio"
              name="filter-type"
              :value="type.value"
              class="filters__type-input"
            >
            <span class="filters__type-text">
              {{ $t(type.text) }}
            </span>
          </label>
        </div>
        <div class="filters__type-select-wrap">
          <SelectItem
            :select-options="optionsFilterSelect"
            :selectClass="'filters__type-select'"
          />
        </div>
      </div>
      <div class="filters__section">
        <div class="filters__section-header flex">
          <div class="filters__section-title">
            {{ $t('price') }}
          </div>
          <SelectItem
            :select-options="optionsPriceSelect"
            :selectClass="'filters__price-select'"
          />
        </div>
        <div class="filters__section-columns">
          <div class="filters__section-column">
            <input type="number" class="default-input" :placeholder="$t('min')">
          </div>
          <div class="filters__section-column">
            <input type="number" class="default-input" :placeholder="$t('max')">
          </div>
        </div>
      </div>
      <div class="filters__section">
        <div class="filters__section-title">
          {{ $t('bedrooms') }}
        </div>
        <div class="filters__bedrooms filters__select-option">
          <label
            v-for="item in filterBedrooms"
            :key="item.id"
            class="filters__type-label default-input"
          >
            <input
              type="radio"
              name="filter-bedrooms"
              :value="item.value"
              :checked="item.checked"
              class="filters__type-input"
            >
            <span class="filters__type-text">
              {{ $t(item.text) }}
            </span>
          </label>
          <button
            type="button"
            class="filters__type-label default-input"
          >
            <span class="filters__type-text">
              {{ $t('more') }}
            </span>
          </button>
        </div>
      </div>
      <div class="filters__section">
        <div class="filters__section-title">
          {{ $t('bathrooms') }}
        </div>
        <div class="filters__bathrooms filters__select-option">
          <label
            v-for="item in filterBathrooms"
            :key="item.id"
            class="filters__type-label default-input"
          >
            <input
              type="radio"
              name="filter-bathrooms"
              :value="item.value"
              :checked="item.checked"
              class="filters__type-input"
            >
            <span class="filters__type-text">
              {{ $t(item.text) }}
            </span>
          </label>
          <button
            type="button"
            class="filters__type-label default-input"
          >
            <span class="filters__type-text">
              {{ $t('more') }}
            </span>
          </button>
        </div>
      </div>
      <div class="filters__section">
        <div class="filters__section-header flex">
          <div class="filters__section-title">
            {{ $t('size') }}
          </div>
          <SelectItem
            :select-options="optionsSizeSelect"
            :selectClass="'filters__price-select'"
          />
        </div>
        <div class="filters__section-columns">
          <div class="filters__section-column">
            <input type="number" class="default-input" :placeholder="$t('min')">
          </div>
          <div class="filters__section-column">
            <input type="number" class="default-input" :placeholder="$t('max')">
          </div>
        </div>
      </div>
    </div>
    <button
      type="button"
      class="filters__btn"
      @click="isPartnerShown = !isPartnerShown"
    >
      {{ $t('partnerSearch') }}
    </button>
    <transition name="slide-fade">
      <div
        v-if="isPartnerShown"
        class="filters__inner"
      >
        <div class="filters__search default-input mb-15">
          <SearchIcon />
          <input type="text" placeholder="REF">
        </div>
        <div class="filters__section">
          <div class="filters__section-title">
            {{ $t('typeViewing') }}
          </div>
          <div class="filters__select-option auto">
            <label
              v-for="item in filterViewing"
              :key="item.id"
              class="filters__type-label default-input filters__type-expanded"
            >
              <input
                type="radio"
                name="filter-viewing"
                :value="item.value"
                :checked="item.checked"
                class="filters__type-input"
              >
              <span class="filters__type-text">
              {{ $t(item.text) }}
            </span>
            </label>
          </div>
        </div>
        <div class="filters__section">
          <div class="filters__section-title mb-10">
            {{ $t('commission') }}
          </div>
          <button type="button" class="default-input w-full">
            {{ $t('includedCommission') }}
          </button>
          <div class="filters__section-columns">
            <div class="filters__section-column">
              <input type="text" class="default-input" :placeholder="$t('min')">
            </div>
            <div class="filters__section-column">
              <input type="text" class="default-input" :placeholder="$t('max')">
            </div>
          </div>
        </div>
      </div>
    </transition>
    <div class="filters__section">
      <button
        type="button"
        class="filters__btn"
        @click="isDetailsShown = !isDetailsShown"
      >
        {{ $t('details') }}
      </button>
      <transition name="slide-fade">
        <div
        v-if="isDetailsShown"
        class="filters__inner"
      >
        <div class="filters__section-title">
          {{ $t('market') }}
        </div>
        <div class="filters__section-options flex">
          <div class="filters__select-option">
            <label
              v-for="item in filterMarkets"
              :key="item.id"
              class="filters__type-label filters__type-expanded default-input"
            >
              <input
                type="radio"
                name="filter-market"
                :value="item.value"
                class="filters__type-input"
              >
              <span class="filters__type-text">
                {{ $t(item.text) }}
              </span>
            </label>
          </div>
        </div>
        <div class="filters__section-title">
          {{ $t('category.type') }}
        </div>
        <div class="filters__section-options flex">
          <div class="filters__select-option">
            <label
              v-for="item in filterCategory"
              :key="item.id"
              class="filters__type-label filters__type-expanded default-input"
            >
              <input
                type="radio"
                name="filter-category"
                :value="item.value"
                class="filters__type-input"
              >
              <span class="filters__type-text">
              {{ $t(item.text) }}
            </span>
            </label>
          </div>
        </div>
        <div class="filters__section-title">
          {{ $t('class') }}
        </div>
        <div class="filters__section-options flex">
          <div class="filters__select-option">
            <label
              v-for="item in filterClass"
              :key="item.id"
              class="filters__type-label filters__type-expanded default-input"
            >
              <input
                type="radio"
                name="filter-class"
                :value="item.value"
                class="filters__type-input"
              >
              <span class="filters__type-text">
                {{ $t(item.text) }}
              </span>
            </label>
          </div>
        </div>
        <div class="filters__section-title">
          {{ $t('features') }}
        </div>
        <div class="filters__section-options flex">
          <div class="filters__select-option">
            <label
              v-for="item in filterFeatures"
              :key="item.id"
              class="filters__type-label filters__type-expanded default-input"
            >
              <input
                type="radio"
                name="filter-features"
                :value="item.value"
                class="filters__type-input"
              >
              <span class="filters__type-text">
               {{ $t(item.text) }}
              </span>
            </label>
          </div>
        </div>
        <div class="filters__section-title">
          {{ $t('extra') }}
        </div>
        <div class="filters__section-options flex">
          <div class="filters__select-option">
            <label
              v-for="item in filterExtra"
              :key="item.id"
              class="filters__type-label filters__type-expanded default-input"
            >
              <input
                type="checkbox"
                :value="item.value"
                class="filters__type-input"
              >
              <span class="filters__type-text">
               {{ $t(item.text) }}
              </span>
            </label>
          </div>
        </div>
      </div>
      </transition>
    </div>
  </form>
</template>

<script>
import SearchIcon from '~/components/icons/header/search'
import CondoIcon from '~/components/icons/property/condo'
import HouseIcon from '~/components/icons/property/house'
import PlotIcon from '~/components/icons/property/plot'
import SelectItem from '~/components/select/selectItem'
  export default {
    name: 'filters-property',

    components: {
      SearchIcon,
      CondoIcon,
      HouseIcon,
      PlotIcon,
      SelectItem
    },

    data() {
      return {
        filterViewing: [
          {id: 0, text: 'any', value: 'any', checked: true},
          {id: 1, text: 'appointment', value: 'appointment', checked: false},
          {id: 2, text: 'keys', value: 'keys', checked: false},
        ],
        filterExtra: [
          {id: 0, text: 'garden', value: 'garden'},
          {id: 1, text: 'pool', value: 'pool'},
          {id: 2, text: 'parking', value: 'parking'},
          {id: 3, text: 'lift', value: 'lift'},
        ],
        filterFeatures: [
          {id: 0, text: 'furnished', value: 'furnished'},
          {id: 1, text: 'semiFurnished', value: 'semiFurnished'},
          {id: 2, text: 'unfurnished', value: 'unfurnished'},
        ],
        filterClass: [
          {id: 0, text: 'renovate', value: 'renovate'},
          {id: 1, text: 'underConstruction', value: 'underConstruction'},
          {id: 2, text: 'reo', value: 'reo'},
        ],
        filterCategory: [
          {id: 0, text: 'residential', value: 'residential'},
          {id: 1, text: 'commercial', value: 'commercial'},
          {id: 2, text: 'rustic', value: 'rustic'},
        ],
        isDetailsShown: false,
        isPartnerShown: false,
        filterMarkets: [
          {id: 0, text: 'new', value: 'new'},
          {id: 1, text: 'resale', value: 'resale'},
        ],
        filterType: [
          {id: 0, icon: 'CondoIcon', text: 'condo', value: 'condo'},
          {id: 1, icon: 'HouseIcon', text: 'house', value: 'house'},
          {id: 2, icon: 'PlotIcon',  text: 'plot', value: 'plot'},
        ],
        filterBedrooms: [
          {id: 0, text: 'any', value: 'any', checked: true},
          {id: 1, text: '1+', value: 1, checked: false},
          {id: 2, text: '2+', value: 2, checked: false},
          {id: 3, text: '3+', value: 3, checked: false},
          {id: 4, text: '4+', value: 4, checked: false},
        ],
        filterBathrooms: [
          {id: 0, text: 'any', value: 'any', checked: true},
          {id: 1, text: '1+', value: 1, checked: false},
          {id: 2, text: '2+', value: 2, checked: false},
          {id: 3, text: '3+', value: 3, checked: false},
        ],
        optionsSizeSelect: [
          {
            id: 1,
            name: 'm2',
            value: 'm2',
            chosen: true
          },
          {
            id: 2,
            name: 'ft2',
            value: 'ft2',
            chosen: false
          }
        ],
        optionsPriceSelect: [
          {
            id: 1,
            name: 'EUR',
            value: 'EUR',
            chosen: true
          },
          {
            id: 2,
            name: 'USD',
            value: 'USD',
            chosen: false
          }
        ],
        optionsFilterSelect: [
          {
            id: 1,
            name: this.$t('bungalow'),
            value: 'bungalow',
            chosen: true
          },
          {
            id: 2,
            name: this.$t('townhouse'),
            value: 'townhouse',
            chosen: false
          },
          {
            id: 3,
            name: this.$t('studio'),
            value: 'studio',
            chosen: false
          },
        ],
      }
    }
  }
</script>

<style lang="scss" scoped>
  .filters__select-option .filters__type-label.filters__type-expanded {
    margin-right: 7px;
    width: auto;
    &:last-child {
      margin-right: 0;
    }
  }
  .filters {
    border-radius: $border-5;
    padding: 34px 0 145px;
    background: $lightWhite;
    .default-input.w-full {
      width: 100%;
      font-weight: 600;
    }
    .mb-10 {
      margin-bottom: 10px;
    }
    .mb-15 {
      margin-bottom: 15px;
    }
    &__btn {
      width: 100%;
      font-weight: bold;
      font-size: 18px;
      padding: 5px;
      text-transform: uppercase;
      background: $baseWhite;
      text-align: center;
      transition: all .3s ease;
      margin-bottom: 15px;
      &:hover {
        color: $baseOrange;
      }
    }
    &__bdedrooms {
      justify-content: space-between;
    }
    &__section {
      margin-bottom: 20px;
      &-options.flex {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        margin-bottom: 14px;
      }
      &-header.flex {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      &-title {
        font-weight: bold;
        line-height: 24px;
        letter-spacing: -0.333333px;
        text-transform: capitalize;
      }
    }
    &__inner {
      padding: 0 15px;
      & > .default-title {
        font-size: 16px;
        margin-bottom: 20px;
        margin-left: 5px;
      }
    }
    .default-input {
      background: $baseWhite;
      border: 1px solid $thirdlyGray;
      border-radius: 8px;
      height: 35px;
      overflow: hidden;
      input {
        border: 0;
        outline: 0;
        width: 100%;
        &:focus {
          box-shadow: 0 0 0 0 rgb(0 0 0 / 8%);
        }
      }
    }
    &__search {
      padding: 9px 0 9px 20px;
      display: flex;
      align-items: center;
      svg {
        width: 15px;
        height: 15px;
        margin-right: 42px;
      }
    }
    &__type {
      margin: 34px auto 0;
      max-width: 220px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      &-input:checked + .filters__type-text {
        font-weight: 600;
      }
      &-input {
        display: none;
      }
      &-select {
        height: 35px;
        background: $baseWhite;
        border: 1px solid $thirdlyGray;
        border-radius: 8px;
        padding: 7px 24px 5px 24px;
        text-transform: capitalize;
        font-weight: 300;
        &-wrap {
          margin-top: 20px;
        }
      }
      &-label {
        cursor: pointer;
        &.filters__type-expanded {
          min-width: 80px;
          padding: 5px 5px;
        }
        &:hover {
          .filters__type-text {
            font-weight: 600;
          }
        }
      }
      &-text {
        text-align: center;
        font-weight: 300;
        line-height: 24px;
        text-transform: capitalize;
        transition: all .3s ease;
      }
      &-inner {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 62px;
        height: 62px;
        background: $baseWhite;
        border-radius: $border-5;
        margin-bottom: 8px;
        svg {
          max-height: 24px;
          max-width: 16px;
        }
      }
      &-label {
        display: flex;
        flex-direction: column;
      }
    }
    &__price-select {
      height: 17px;
      margin-right: 10px;
      background:$baseWhite;
      border: 1px solid $thirdlyGray;
      border-radius: 8px;
      padding: 0 5px 3px 7px;
      .select-value-item {
        font-size: 12px;
      }
    }
    &__section-columns {
      margin-top: 13px;
      display: flex;
      align-items: center;
    }
    &__section-column {
      width: 50%;
      margin-right: 10px;
      &:nth-child(2n) {
        margin-right: 0;
      }
      .default-input {
        width: 100%;
        padding: 3px 10px;
      }
    }
    &__select-option {
      margin-top: 8px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      &.auto {
       justify-content: center;
      }
      .filters__type-label {
        width: 46px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        margin-right: 3px;
        margin-bottom: 8px;
        &:last-child {
          margin-right: 0;
        }
        .filters__type-text {
          font-size: 12px;
        }
      }
    }
  }
</style>
