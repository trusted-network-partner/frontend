<template>
  <div
    class="select-container currency"
    :class="{ active: isCurrencyShown, 'open-up': openUp }"
    v-click-outside="selectClick"
  >
    <div class="select-trigger" @click="toggleDropdown">
      <div class="select-value-item">
        {{ selectedCurrency }}
      </div>
      <div class="select-trigger-icon">
        <TriangleIcon />
      </div>
    </div>
    <transition name="slide-fade">
      <div
        v-show="isCurrencyShown"
        ref="selectDropdown"
        class="select-dropdown"
      >
        <div class="select-dropdown__header">
          <div class="measurement">
            <div class="measurement__item">
              m2
            </div>
            <div class="measurement__switcher">
              <label class="measurement__check">
                <input
                  class="measurement__check-input"
                  type="checkbox"
                  name="check-measurement"
                />
                <span class="measurement__check-span" />
              </label>
            </div>
            <div class="measurement__item">
              ft2
            </div>
          </div>
        </div>
        <div class="select-dropdown__items">
          <div
            v-for="currency in currencies"
            :key="currency.id"
            class="select-dropdown__item"
            :class="{ active: currency.chosen }"
            @click="choseOption(currency.name, currency.id)"
          >
            <div class="select-dropdown__option">
              {{ currency.symbol }} - ({{ currency.name }})
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import TriangleIcon from "~/components/icons/common/triangle";

export default {
  name: "currency-select",
  components: {
    TriangleIcon
  },
  data() {
    return {
      isCurrencyShown: false,
      openUp: false,
      selectedCurrency: "Eur",
      currencies: [
        { id: 1, symbol: "€", name: "EUR", chosen: true },
        { id: 2, symbol: "₴", name: "uan", chosen: false },
        { id: 3, symbol: "＄", name: "Usd", chosen: false },
        { id: 4, symbol: "£", name: "gbr", chosen: false },
        { id: 5, symbol: "Zł", name: "pln", chosen: false },
        { id: 6, symbol: "₣", name: "chf", chosen: false },
        { id: 7, symbol: "₽", name: "rub", chosen: false }
      ]
    };
  },
  methods: {
    toggleDropdown() {
      this.isCurrencyShown = !this.isCurrencyShown;
      this.$nextTick(() => {
        if (this.isCurrencyShown) {
          this.adjustDropdownPosition();
        }
      });
    },
    choseOption(value, id) {
      this.selectedCurrency = value;
      this.isCurrencyShown = false;
      this.currencies.map(item => {
        item.chosen = item.id === id;
      });
    },
    selectClick(e) {
      this.isCurrencyShown = false;
    },
    adjustDropdownPosition() {
      const dropdown = this.$refs.selectDropdown;
      const rect = this.$el.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      const dropdownHeight = dropdown.offsetHeight;

      this.openUp = spaceBelow < dropdownHeight;
    }
  }
};
</script>

<style scoped>
.select-container {
  position: relative;
}
.select-dropdown {
  position: absolute;
  width: 100%;
  z-index: 10;
}
.select-container.open-up .select-dropdown {
  bottom: 100%;
  top: auto;
  margin-bottom: 8px;
}
.select-container:not(.open-up) .select-dropdown {
  top: 100%;
  margin-top: 8px;
}
</style>
