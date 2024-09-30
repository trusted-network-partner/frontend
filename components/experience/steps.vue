<template>
  <div class="estate-general__links">
    <ul class="estate-general__links-inner">
      <li
        v-for="(item, index) in steps"
        :key="index"
        class="estate-general__links-item"
      >
        <div
          class="estate-general__link-wrap"
          :class="{ 'passed': item.isPassed, 'active': item.id === step }"
          @click="chooseStep(item.id, item.path)"
        >
          <span class="estate-general__link-elem"/>
          <span class="estate-general__link">
          {{ $t(item.title) }}
        </span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'experience-steps',
  props: {
    step: {
      type: Number,
      required: true
    }
  },

  data() {
    return {
      steps: [
        { id: 1, title: 'main_information', path: 'experienceInfo', isPassed: false },
        { id: 2, title: 'additional_information', path: 'experienceAdditional', isPassed: false },
      ],
    }
  },

  watch: {
    step(step) {
      this.changeStep()
    }
  },

  methods: {
    stepHandle(id) {
      this.steps.map(item => {
        if (item.id < id) {
          item.isPassed = true
          return
        }
        item.isPassed = false
      })
    },
    chooseStep(id, path) {
      this.$emit('chooseStep', id, path)
      this.stepHandle(id)
    },
    changeStep() {
      this.stepHandle(this.step)
    }
  }
}
</script>

<style lang="scss" scoped>
  .estate-general__link-wrap {
    cursor: pointer;
  }
</style>
