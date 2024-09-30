<template>
  <form
    class="hire-professional-content-wrap"
    @submit.prevent="handleSubmit"
  >
    <div class="default-title hire-professional-content__title">
      {{ $t('additional_information') }}
    </div>
    <div class="heir-professional-content__subtitle">
      {{ $t('experience_additional') }}
    </div>
    <div class="info-default mb-30">
      <label for="experience-position" class="info-default__label">
        {{ $t('position') }}
      </label>
      <input
        v-model="position"
        type="text"
        class="info-default__value"
        id="experience-position"
        :placeholder="$t('position')"
      >
    </div>
    <div class="info-default info-default__textarea-wrap mb-30">
      <label for="experience-descr" class="info-default__label">
        {{ $t('care_share_more') }}
      </label>
      <textarea
        v-model="description"
        class="info-default__value info-default__textarea"
        id="experience-descr"
        :placeholder="$t('care_share_more')"
      >
      </textarea>
    </div>
    <div class="hire-professional-budget__buttons">
      <nuxt-link to="/" class="btn-default hire-professional-budget__button">{{ $t('skip_now') }}</nuxt-link>
      <button
        type="submit"
        class="btn-default hire-professional-budget__button black"
      >
        {{ $t('finish') }}
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'experience-additional',

  data() {
    return{
      position: '',
      description: ''
    }
  },

  methods: {
    handleSubmit() {
      const formData = {
        position: this.position,
        description: this.description
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .heir-professional-content__subtitle {
    margin-bottom: 65px;
  }
  .info-default__textarea-wrap, .info-default__textarea {
    min-height: 189px;
  }
</style>
