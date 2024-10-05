<template>
  <transition name="slide-fade-long">
    <div
      @click.self="closeModal"
      v-show="isActive"
      :class="[type, { active: isActive }]"
      class="modal"
    >
      <transition :name="`slide-fade-long${type ? '-' + type : ''}`">
        <div v-show="isActive" class="modal__container">
          <div class="modal__header">
            <button
              @click="switchModal(false)"
              type="button"
              class="modal__close-btn"
            >
              <IconClose></IconClose>
            </button>
          </div>
          <div>
            <slot></slot>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
import IconClose from "~/components/icons/common/close.vue";

export default {
  components: {
    IconClose
  },
  model: {
    prop: "isActive",
    event: "update:isActive"
  },
  props: {
    isActive: {
      type: Boolean,
      required: true
    },
    type: {
      type: "left" | "default",
      required: false,
      default: "default"
    }
  },
  methods: {
    switchModal(value) {
      this.$emit("update:isActive", value);
    },
    closeModal() {
      if (this.isActive) {
        this.switchModal(false);
      }
    }
  }
};
</script>

<style lang="scss">
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100svh;
  z-index: 110;
  background: $overlayColor;
  display: flex;
  flex-direction: column;
  overscroll-behavior: contain;
  overflow: auto;

  &__container {
    align-self: center;
    margin: 30px;
    padding: 30px;
    border-radius: $border-5;
    max-width: 600px;
    width: 100%;
    height: fit-content;
    background: $baseWhite;
    @include maxMedia($breakpoint-lg) {
      padding: 20px;
      margin: 20px;
    }
  }

  &__header {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 20px;
    @include maxMedia($breakpoint-lg) {
      margin-bottom: 30px;
    }
  }

  &__close-btn {
    svg {
      stroke: #000000;
      g {
        opacity: 1;
      }
    }
  }

  &.left &__container {
    margin: 0;
    align-self: flex-start;
    border-radius: 0 $border-5 $border-5 0;
    max-width: 350px;
  }
}
</style>
