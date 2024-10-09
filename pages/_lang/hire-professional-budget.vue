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
              {{ $t('investment_process') }}
            </div>
            <div class="estate-general__descr">
              <p>
                Get independent, unbiased <span class="bold">advice for free of trusted agents and developers</span>
                worldwide
              </p>
            </div>
          </div>
        </div>
        <HireInfoLinks
          :step="2"
        />
      </div>
      <div class="hire-professional-content">
        <div class="default-title hire-professional-content__title">{{ $t('budget') }}</div>
        <div class="heir-professional-content__subtitle">
          {{ $t('budget_estate_descr') }}
        </div>
        <div class="hire-professional__location">
          <div class="info-default">
            <label for="hire-professional-where" class="info-default__label">{{ $t('where') }}</label>
            <input type="text" class="info-default__value" id="hire-professional-where" value="New York City">
          </div>
        </div>
       <div class="hire-professional__budget">
         <SettingsBudget />
       </div>
        <div class="default-title hire-professional-budget__title">
          {{ $t('budget_question') }}
        </div>
        <div class="hire-professional-budget__items">
          <div class="hire-professional-budget__item">
            <div class="hire-professional-budget__item-top">
              <label class="content-form__elem">
                <input type="radio" name="estate-type">
                <span class="content-form__elem-check">
            <CondoIcon/>
          </span>
                <span class="content-form__elem-title">
                  {{ $t('apartment') }}
                </span>
              </label>
            </div>
          </div>
          <div class="hire-professional-budget__item">
            <div class="hire-professional-budget__item-top">
              <label class="content-form__elem">
                <input type="radio" name="estate-type">
                <span class="content-form__elem-check">
            <HouseIcon/>
            </span>
                <span class="content-form__elem-title">{{ $t('house') }}</span>
              </label>
            </div>
          </div>
          <div class="hire-professional-budget__item">
            <div class="hire-professional-budget__item-top">
              <label class="content-form__elem">
                <input type="radio" name="estate-type">
                <span class="content-form__elem-check">
            <HouseIcon/>
          </span>
                <span class="content-form__elem-title">{{ $t('plot') }}</span>
              </label>
            </div>
          </div>
        </div>
        <nuxt-link to="hire-professional-preference"
         class="btn-default hire-professional-budget__button black"
        >
          {{ $t('next_step') }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import HireInfoLinks from '~/components/hire-professional/hire-info-links'
import CondoIcon from '~/components/icons/property/condo'
import HouseIcon from '~/components/icons/property/house'
import SettingsBudget from '~/components/settings/settings-budget'
export default {
  layout: 'sidebar',
  name: 'hire-professional-budget',

  head: {
    title: 'Hire professional budget'
  },

  components: {
    HireInfoLinks,
    SettingsBudget,
    CondoIcon,
    HouseIcon,

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

  methods: {},

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
.heir-professional-content__subtitle {
  margin-bottom: 20px;
}
.hire-professional__location {
  margin-bottom: 23px;
}
</style>
