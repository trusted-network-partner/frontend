<template>
  <div
    v-if="isOpen"
    class="pop-up-wrap pop-up-success"
  >
    <div
      class="overlay"
      @click="popUpClose"
    />
    <div class="pop-up">
      <div class="pop-up__icon">
        <CheckBigIcon />
      </div>
        <div class="default-title">
          {{ successText }}
        </div>
      <div class="pop-up-descr">
        {{ $t('application_submitted_descr') }}
      </div>
      <nuxt-link to="/" type="button" class="btn-default black main">
        {{ $t('go_home') }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import CheckBigIcon from '~/components/icons/common/check-big'
export default {
  name: 'pop-up-success',

  components: {
    CheckBigIcon
  },

  props: {
    successText: {
      type: String
    }
  },

  data() {
    return {
      isOpen: false
    }
  },

  methods: {
    open() {
      this.isOpen = true
    },
    popUpClose() {
      this.isOpen = false
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~/assets/css/default/pop-ups";
</style>
