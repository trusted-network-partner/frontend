<template>
  <div class="select-wrap" :class="selectClass">
    <div
      class="select-container search"
      :class="{
        active: isOptionsShown,
        'open-up': isOpenUp,
        'align-right': isAlignRight
      }"
      v-click-outside="selectClick"
    >
      <div class="select-trigger" @click="toggleOptions" ref="trigger">
        <slot></slot>
        <div class="select-trigger__inner">
          <div class="select-value-item" :class="{ default: isDefaultOption }">
            {{ selectedOption }}
          </div>
          <div class="select-trigger-icon">
            <TriangleIcon />
          </div>
        </div>
      </div>
      <transition name="slide-fade">
        <div v-if="isOptionsShown" class="select-dropdown" ref="dropdown">
          <div
            v-for="option in selectOptions"
            :key="option.id"
            class="select-dropdown__item"
            :class="{ active: option.chosen }"
            @click="chooseOption(option)"
          >
            {{ option.name }}
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import TriangleIcon from "~/components/icons/common/triangle";

export default {
  name: "selectItem",

  props: {
    selectOptions: {
      type: Array,
      required: true
    },
    selectClass: {
      type: String,
      required: false
    }
  },

  components: {
    TriangleIcon
  },

  data() {
    return {
      isDefaultOption: false,
      isOptionsShown: false,
      isOpenUp: false,
      isAlignRight: false,
      selectedOption: ""
    };
  },

  methods: {
    toggleOptions() {
      this.isOptionsShown = !this.isOptionsShown;
      if (this.isOptionsShown) {
        this.calculateDropdownPosition();
      }
    },
    chooseOption(option) {
      this.selectedOption = option.name;
      this.isOptionsShown = false;
      this.selectOptions.forEach(item => {
        item.chosen = item.id === option.id;
      });
      this.$emit("change", option.value);
      this.isDefaultOption = !!option.isDefault;
    },
    selectClick() {
      this.isOptionsShown = false;
    },
    calculateDropdownPosition() {
      this.$nextTick(() => {
        const trigger = this.$refs.trigger;
        const dropdown = this.$refs.dropdown;
        if (trigger && dropdown) {
          const triggerRect = trigger.getBoundingClientRect();
          const dropdownHeight = dropdown.offsetHeight;
          const dropdownWidth = dropdown.offsetWidth;

          const spaceBelow = window.innerHeight - triggerRect.bottom;
          const spaceAbove = triggerRect.top;
          const spaceRight = window.innerWidth - triggerRect.right;
          const spaceLeft = triggerRect.left;

          // Определяем, в каком направлении открывать меню (вверх или вниз)
          if (spaceBelow < dropdownHeight && spaceAbove > dropdownHeight) {
            this.isOpenUp = true;
          } else {
            this.isOpenUp = false;
          }

          // Определяем, в каком направлении выровнять меню (влево или вправо)
          if (spaceRight < dropdownWidth && spaceLeft > dropdownWidth) {
            this.isAlignRight = true;
          } else {
            this.isAlignRight = false;
          }
        }
      });
    },
    handleResize() {
      if (this.isOptionsShown) {
        this.calculateDropdownPosition();
      }
    }
  },

  mounted() {
    if (this.selectOptions) {
      this.selectedOption = this.selectOptions[0].name;
      if (this.selectOptions[0].isDefault) {
        this.isDefaultOption = true;
      }
    }
    window.addEventListener("resize", this.handleResize);
    window.addEventListener("scroll", this.handleResize);
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
    window.removeEventListener("scroll", this.handleResize);
  }
};
</script>

<style lang="scss">
.select-container {
  position: relative;
}

.select-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
}

.select-container.open-up .select-dropdown {
  top: auto;
  bottom: 100%;
}

.select-container.align-right .select-dropdown {
  left: auto;
  right: 0;
}
</style>
