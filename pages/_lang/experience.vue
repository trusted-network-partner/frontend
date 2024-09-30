<template>
  <div class="container hire-professional-wrap experience-wrap">
    <div
      class="estate-info-element"
      :style="{'height': sidebarHeight + 'px' }"
    />
    <div class="estate-info-wrap">
      <div class="estate-general">
        <div
          ref="sidebar"
          class="estate-general__wrap"
        >
          <div class="estate-general__container">
            <div class="estate-general__title">
              {{ $t('profile_experience') }}
            </div>
            <div class="estate-general__descr">
              <p>
                {{ $t('main_experience_descr') }}
              </p>
            </div>
          </div>
        </div>
        <ExperienceTabs
          :step="activeStep"
          @chooseStep="chooseStep"
        />
      </div>
      <div class="hire-professional-content">
        <component
          :is="chosenComponent"
          @nextStep="nextStep"
        >
        </component>
      </div>
    </div>
  </div>
</template>

<script>
import ExperienceTabs from '~/components/experience/steps'
import ExperienceInfo from '~/components/experience/experience-info'
import ExperienceAdditional from '~/components/experience/experience-additional'
export default {
  layout: 'sidebar',
  name: 'experience',

  head: {
    title: 'Experience'
  },

  components: {
    ExperienceTabs,
    ExperienceInfo,
    ExperienceAdditional
  },

  data() {
    return {
      step: 1,
      sidebarOffset: 0,
      componentName: 'experienceInfo',
      components: [
        'experienceInfo', 'experienceAdditional'
      ]
    }
  },

  computed: {
    sidebarHeight() {
      return this.sidebarOffset
    },
    activeStep() {
      return this.step
    },
    chosenComponent() {
      return this.componentName
    }
  },

  methods: {
    chooseStep(id, path) {
      this.step = id
      this.componentName = path
    },
    nextStep() {
      this.step = this.step + 1
      this.componentName = this.components[this.step - 1]
    }
  },

  mounted() {
    this.sidebarOffset = this.$refs.sidebar.offsetHeight
  }
}
</script>

<style lang="scss">
  @import "~/assets/css/hire-professional/hire-professional";
  .estate-general__title {
    margin-bottom: 15px;
  }
  .experience-wrap {
    .estate-general__descr {
      max-width: 400px;
    }
  }
  .hire-professional-content {
    padding-top: 135px;
    padding-bottom: 50px;
  }
</style>
