<template>
  <div class="estate-info__item">
    <div class="default-title">
      {{ $t('property_data') }}
    </div>
    <div class="info-default mb-20">
      <label for="estate-number" class="info-default__label">
        {{ $t('cadastrial_number') }}
      </label>
      <input
        id="estate-number"
        type="number"
        placeholder="Cadastral number"
        class="info-default__value no-focus"
        value="152542453453"
      >
    </div>
    <div class="content-form__items flex">
      <div
        v-for="(home, index) in homeDetails"
        :key="index"
        class="info-default__col"
      >
        <div class="info-default info-default__items select-width select-inside">
          <div class="info-default__item flex">
            <div
              class="info-default__element"
              :class="{'period': home.period}"
            >
              <label :for="home.id" class="info-default__label">
                {{ home.label }}
              </label>
              <input
                v-show="!home.period"
                :id="home.id"
                type="number"
                class="info-default__value no-focus"
                :value="home.value"
                :placeholder="home.label"
              >
              <div
                v-if="home.period"
              >
                <SelectItem
                  :selectOptions="home.options"
                  @change="selectedOption"
                />
              </div>
            </div>
            <SelectItem
              v-if="home.options && !home.period"
              :selectOptions="home.options"
              @change="selectedOption"
            />
          </div>
        </div>
      </div>
    </div>
    <div
      class="info-default__select"
      :class="{'active': isOptionsShown}"
      v-click-outside="selectClick"
    >
      <div
        class="info-default select-trigger energy"
        @click="isOptionsShown = !isOptionsShown"
      >
        <div class="info-default__label">
          Energy performance
        </div>
        <div class="info-default__value">
          {{ selectedOptionValue }}
        </div>
        <div class="select-trigger-icon">
          <TriangleIcon />
        </div>
      </div>
      <transition name="slide-fade">
        <div
          v-if="isOptionsShown"
          class="select-dropdown"
        >
          <div
            v-for="option in selectOptions"
            :key="option.id"
            class="select-dropdown__item"
            :class="{'active': option.chosen}"
            @click="chooseOption(option.name, option.id)"
          >
            {{option.name}}
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import SelectItem from "~/components/select/selectItem";
import TriangleIcon from "~/components/icons/common/triangle";
  export default {
    name: 'real-estate-data',

    components: {
      SelectItem,
      TriangleIcon
    },

    data() {
      return {
        isOptionsShown: false,
        selectedOptionValue: 'A/B/C/D/E/F/ EXENT',
        selectOptions: [
          { id: 1, name: 'A/B/C/D/E/F/ EXENT', value: 'value', chosen: true },
          { id: 2, name: 'Item2', value: 'item2', chosen: false },
        ],
        homeDetails: [
          {
            id: 'light-reference',
            label: 'Light reference',
            value: 152542453453
          },
          {
            id: 'payment-item',
            label: 'Payment',
            value: 90,
            options: [
              { id: 1, name: 'EUR', value: 'EUR', chosen: true },
              { id: 2, name: 'Item2', value: 'item2', chosen: false },
            ],
          },
          {
            id: 'time-item',
            label: 'Time',
            period: true,
            options: [
              { id: 1, name: 'Time', value: 'year', chosen: true },
              { id: 2, name: 'Month', value: 'month', chosen: false },
              { id: 4, name: 'Day', value: 'day', chosen: false },
            ],
          },
          {
            id: 'water-reference',
            label: 'Water reference',
            value: 152542453453
          },
          {
            id: 'payment',
            label: 'Payment',
            value: 90,
            options: [
              { id: 1, name: 'EUR', value: 'EUR', chosen: true },
              { id: 2, name: 'Item2', value: 'item2', chosen: false },
            ],
          },
          {
            id: 'time',
            label: 'Time',
            period: true,
            options: [
              { id: 1, name: 'Time', value: 'year', chosen: true },
              { id: 2, name: 'Month', value: 'month', chosen: false },
              { id: 4, name: 'Day', value: 'day', chosen: false },
            ],
          },
          {
            id: 'council-tax',
            label: 'Council tax  (monthly/anual)',
            value: 152542453453
          },
          {
            id: 'condo-fees',
            label: 'Condo fees',
            value: 90,
            options: [
              { id: 1, name: 'EUR', value: 'EUR', chosen: true },
              { id: 2, name: 'Item2', value: 'item2', chosen: false },
            ],
          },
          {
            id: 'time-2',
            label: 'Time',
            period: true,
            options: [
              { id: 1, name: 'Time', value: 'year', chosen: true },
              { id: 2, name: 'Month', value: 'month', chosen: false },
              { id: 4, name: 'Day', value: 'day', chosen: false },
            ],
          }
        ],
      }
    },

    methods: {
      selectedOption(value) {
      },
      chooseOption(name, id) {
        this.selectedOptionValue = name
        this.isOptionsShown = false
        this.selectOptions.map(item => {
          item.chosen = item.id === id
        })
      },
      selectClick(e) {
        this.isOptionsShown = false
      },
    }
  }
</script>

<style lang="scss" scoped>
  .default-title {
    margin-bottom: 30px;
  }
  .content-form__items {
    margin: 0 -10px 20px;
    &.flex {
      flex-wrap: wrap;
      .info-default {
        margin-bottom: 20px;
      }
    }
    .info-default__col {
      width: 27%;
      .info-default__element {
        border-right: 0;
      }
      &:nth-child(3n+1) {
        width: 39%;
      }
      &:nth-child(3n+2) {
        width: 34%;
        .info-default__element {
          border-right: 1px solid $thirdlyGray;
        }
      }
    }
  }
  .info-default__select {
    position: relative;
    .info-default {
      display: block;
      position: relative;
    }
    .select-dropdown {
      width: 50%;
      padding: 0 10px;
    }
  }
</style>
