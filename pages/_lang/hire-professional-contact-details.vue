<template>
  <div class="real-estate-wrapper hire-professional-wrap">
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
              {{ $t('hire_professional') }}
            </div>
            <div class="estate-general__descr">
              <p>
                {{ $t('hire_professional_descr') }}
              </p>
            </div>
          </div>
        </div>
        <HireInfoLinks
          :step="1"
        />
      </div>
      <div class="hire-professional-content">
        <div class="default-title hire-professional-content__title">
          {{ $t('contact_details') }}
        </div>
        <div class="hire-professional-content__subtitle">
          {{ $t('contact_details_descr') }}
        </div>
        <div class="hire-professional-content__items">
          <div class="info-default">
            <label for="hire-professional-name" class="info-default__label">
              {{ $t('full_name') }}
            </label>
            <input type="text" class="info-default__value" id="hire-professional-name" placeholder="Full name" value="Andriy Drobenyuk">
          </div>
          <div class="info-default">
            <label for="hire-professional-phone" class="info-default__label">
              {{ $t('phone') }}
            </label>
            <input type="number" class="info-default__value" id="hire-professional-phone" value="35301563728" placeholder="Phone">
          </div>
        </div>
        <div class="info-default mb_30">
          <label for="hire-professional-email" class="info-default__label">
            {{ $t('email_address') }}
          </label>
          <input type="email" class="info-default__value" id="hire-professional-email" placeholder="E-mail address" value="Drobenyuk.A@gmail.com">
        </div>
        <button class="btn-default black">{{ $t('next_step') }} </button>
      </div>
    </div>
  </div>
</template>

<script>
import HireInfoLinks from '~/components/hire-professional/hire-info-links-extended'
export default {
  layout: 'sidebar',
  name: 'hire-professional-contact-details',

  head: {
    title: 'Hire professional contact'
  },

  components: {
    HireInfoLinks,
  },

  data() {
    return {
      sidebarOffset: 0
    }
  },

  computed: {
    sidebarHeight() {
      return this.sidebarOffset
    }
  },

  methods: {
  },

  mounted() {
    this.sidebarOffset = this.$refs.sidebar.offsetHeight
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/css/hire-professional/hire-professional";
.estate-general__title {
  margin-bottom: 15px;
}
</style>
