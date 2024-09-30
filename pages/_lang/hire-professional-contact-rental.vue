<template>
  <div class="container hire-professional-wrap">
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
        <div class="hire-professional-rental__item">
          <div class="default-title hire-professional-preference__title"> {{ $t('rental_details') }}</div>
          <div class="customer__info-category__container">
            <label class="content-form__item-label customer__info-single-category">
              <input type="radio" name="category" >
              <span class="content-form__item-check customer__custom-radiobox">
                <CheckIcon />
              </span>
              <span class="customer__single-category__text"> {{ $t('resale') }}</span>
            </label>
          </div>
          <div class="customer__info-category__container">
            <label class="content-form__item-label customer__info-single-category">
              <input type="radio" name="category" >
              <span class="content-form__item-check customer__custom-radiobox">
                <CheckIcon />
              </span>
              <span class="customer__single-category__text"> {{ $t('resale') }}</span>
            </label>


          </div>
        </div>
        <div class="info-default hire-professional-rental__info-default">
          <label for="hire-professional-place" class="info-default__label">{{ $t('where') }}</label>
          <input type="text" class="info-default__value" id="hire-professional-place" value="NY" placeholder="Where">
        </div>
        <div class="hire-professional-rental__items">
          <div class="estate-info__item">
            <div class="hire-professional-preference__title">
              {{ $t('bedrooms')}}
            </div>
            <Counter />
          </div>
          <div class="estate-info__item">
            <div class="hire-professional-preference__title">
              {{ $t('bathrooms') }}
            </div>
            <Counter />
          </div>
        </div>
        <div class="hire-professional__filters filter__popup">
          <div class="default-title hire-professional-preference__title">
            {{ $t('features') }}
          </div>
          <div class="hire-professional-preference__list">
            <div class="hire-professional-preference__object">
              <span>{{ $t('pool') }}</span>
            </div>
            <div class="hire-professional-preference__object">
              <span>{{ $t('condo') }}</span>
            </div>
            <div class="hire-professional-preference__object">
              <span>{{ $t('parking') }}</span>
            </div>
            <a href="#" class="hire-professional-preference__item-link"> {{ $t('add_more') }}</a>
          </div>
          <div class="hire-professional__filters-item">
            <div class="estate-info__item-subject">
              <div class="estate-info__item-left">
                {{ $t('garden') }}
              </div>
              <div class="estate-info__item-right">
                <div class="measurement">
                  <div class="measurement__switcher">
                    <label class="measurement__check">
                      <input type="checkbox" class="measurement__check-input">
                      <span class="measurement__check-span"></span>
                      <span class="measurement__check-background"></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="hire-professional__filters-item">
            <div class="estate-info__item-subject">
              <div class="estate-info__item-left">
                {{ $t('pool') }}
              </div>
              <div class="estate-info__item-right">
                <div class="measurement">
                  <div class="measurement__switcher">
                    <label class="measurement__check">
                      <input type="checkbox" class="measurement__check-input">
                      <span class="measurement__check-span"></span>
                      <span class="measurement__check-background"></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="hire-professional__filters-item">
            <div class="estate-info__item-subject">
              <div class="estate-info__item-left">
                {{ $t('garage') }}
              </div>
              <div class="estate-info__item-right">
                <div class="measurement">
                  <div class="measurement__switcher">
                    <label class="measurement__check">
                      <input type="checkbox" class="measurement__check-input">
                      <span class="measurement__check-span"></span>
                      <span class="measurement__check-background"></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="hire-professional__filters-item">
            <div class="estate-info__item-subject">
              <div class="estate-info__item-left">
                {{ $t('terrace') }}
              </div>
              <div class="estate-info__item-right">
                <div class="measurement">
                  <div class="measurement__switcher">
                    <label class="measurement__check">
                      <input type="checkbox" class="measurement__check-input">
                      <span class="measurement__check-span"></span>
                      <span class="measurement__check-background"></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="hire-professional__filters-item">
            <div class="estate-info__item-subject">
              <div class="estate-info__item-left">
                {{ $t('community_parking') }}
              </div>
              <div class="estate-info__item-right">
                <div class="measurement">
                  <div class="measurement__switcher">
                    <label class="measurement__check">
                      <input type="checkbox" class="measurement__check-input">
                      <span class="measurement__check-span"></span>
                      <span class="measurement__check-background"></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="hire-professional__filters-item">
            <div class="estate-info__item-subject">
              <div class="estate-info__item-left">
                {{ $t('community_pool') }}
              </div>
              <div class="estate-info__item-right">
                <div class="measurement">
                  <div class="measurement__switcher">
                    <label class="measurement__check">
                      <input type="checkbox" class="measurement__check-input">
                      <span class="measurement__check-span"></span>
                      <span class="measurement__check-background"></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="hire-professional__filters-item">
            <div class="estate-info__item-subject">
              <div class="estate-info__item-left">
                {{ $t('lift')}}
              </div>
              <div class="estate-info__item-right">
                <div class="measurement">
                  <div class="measurement__switcher">
                    <label class="measurement__check">
                      <input type="checkbox" class="measurement__check-input">
                      <span class="measurement__check-span"></span>
                      <span class="measurement__check-background"></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="hire-professional__filters-item">
            <div class="estate-info__item-subject">
              <div class="estate-info__item-left">
                {{ $t('storage') }}
              </div>
              <div class="estate-info__item-right">
                <div class="measurement">
                  <div class="measurement__switcher">
                    <label class="measurement__check">
                      <input type="checkbox" class="measurement__check-input">
                      <span class="measurement__check-span"></span>
                      <span class="measurement__check-background"></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="hire-professional__filters-item">
            <div class="estate-info__item-subject">
              <div class="estate-info__item-left">
                {{ $t('see_views') }}
              </div>
              <div class="estate-info__item-right">
                <div class="measurement">
                  <div class="measurement__switcher">
                    <label class="measurement__check">
                      <input type="checkbox" class="measurement__check-input">
                      <span class="measurement__check-span"></span>
                      <span class="measurement__check-background"></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="hire-professional__filters-item">
            <div class="estate-info__item-subject">
              <div class="estate-info__item-left">
                {{ $t('equipped_kitchen') }}
              </div>
              <div class="estate-info__item-right">
                <div class="measurement">
                  <div class="measurement__switcher">
                    <label class="measurement__check">
                      <input type="checkbox" class="measurement__check-input">
                      <span class="measurement__check-span"></span>
                      <span class="measurement__check-background"></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button class="btn-default black"> {{ $t('confirm') }}</button>
      </div>
    </div>
  </div>
</template>

<script>
import HireInfoLinks from '~/components/hire-professional/hire-info-links-rental'
import CheckIcon from '~/components/icons/common/check'
import Counter from '~/components/property/counter'

export default {
  layout: 'sidebar',
  name: 'hire-professional-contact-rental',

  head: {
    title: 'Hire professional contact'
  },

  components: {
    HireInfoLinks,
    CheckIcon,
    Counter,

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
