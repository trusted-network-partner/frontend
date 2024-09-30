<template>
  <div class="counter">
    <div
      class="counter__btn"
      @click="decrement"
    >
      <span>
        -
      </span>
    </div>
    <div class="counter__value-wrap">
      <input
        v-model="countValue"
        type="number"
        class="counter__value no-focus"
      >
    </div>
    <div
      class="counter__btn"
      @click="increment"
    >
      <span>
        +
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'counter',

    props: {
      value: {
        type: Number
      }
    },

    data() {
      return {
        countValue: 1
      }
    },

    computed: {
      count: {
        get() {
          return this.countValue
        },
        set() {
          return this.countValue
        }
      }
    },

    watch: {
      count() {
        this.setCount()
      }
    },

    methods: {
      increment() {
        this.countValue++
      },
      decrement() {
        if(this.countValue > 1) {
          this.countValue--
        }
      },
      setCount() {
        if(this.countValue < 0 || !this.countValue) {
          this.countValue = 1
        }
      }
    },
    mounted() {
      if(this.value) {
        this.countValue = this.value
      }
    }
  }
</script>

<style lang="scss" scoped>
  .counter {
    display: flex;
    align-items: center;
    height: 72px;
    border-radius: 8px;
    overflow: hidden;
    max-width: 215px;
    &__btn {
      height: 100%;
      min-width: 62px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: $thirdlyGray;
      cursor: pointer;
      span {
        font-weight: bold;
        font-size: 24px;
      }
    }
    &__value-wrap {
      width: 91px;
      background: $baseWhite;
      height: 100%;
      input {
        font-weight: bold;
        font-size: 16px;
        border: 0;
        text-align: center;
        max-width: 100%;
        height: 100%;
        background: $baseWhite;
      }
    }
  }
</style>
