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
              {{ $t('preference') }}
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
          :step="3"
        />
      </div>
      <div class="hire-professional-content">
        <div class="estate-info__item hire-professional-content__slider slider">
          <div class="default-title hire-professional-preference__title">
            {{ $t('category.type') }}
          </div>
          <client-only>
            <swiper
              ref="mySwiper"
              :options="swiperOption"
            >
              <swiper-slide>
                <div class="content-form__items hire-professional-reference__items flex">
                  <label class="content-form__item-label content-form__item-wrap">
                    <span class="auth-free__category-title">{{ $t('bungalow') }}</span>
                    <input type="checkbox">
                    <span class="content-form__item-check">
                      <CheckIcon/>
                    </span>
                  </label>
                  <label class="content-form__item-label content-form__item-wrap">
                    <span class="auth-free__category-title">{{ $t('condo') }}</span>
                    <input type="checkbox">
                    <span class="content-form__item-check">
                      <CheckIcon/>
                    </span>
                  </label>
                  <label class="content-form__item-label content-form__item-wrap">
                    <span class="auth-free__category-title">{{ $t('townhouse') }}</span>
                    <input type="checkbox">
                    <span class="content-form__item-check">
                      <CheckIcon/>
                    </span>
                  </label>
                  <label class="content-form__item-label content-form__item-wrap">
                    <span class="auth-free__category-title">{{ $t('townhouse') }}</span>
                    <input type="checkbox">
                    <span class="content-form__item-check">
                      <CheckIcon/>
                    </span>
                  </label>
                  <label class="content-form__item-label content-form__item-wrap">
                    <span class="auth-free__category-title">{{ $t('studio') }}</span>
                    <input type="checkbox">
                    <span class="content-form__item-check">
                      <CheckIcon/>
                    </span>
                  </label>
                  <label class="content-form__item-label content-form__item-wrap">
                    <span class="auth-free__category-title">{{ $t('penthouse') }}</span>
                    <input type="checkbox">
                    <span class="content-form__item-check">
                      <CheckIcon/>
                    </span>
                  </label>
                </div>
              </swiper-slide>
              <swiper-slide>
                slide 2
              </swiper-slide>
            </swiper>
            <div class="swiper-button-next">
              <ArrowBack/>
            </div>
            <div class="swiper-button-prev">
              <ArrowBack/>
            </div>
          </client-only>
        </div>
        <div class="estate-info__item">
          <div class="default-title hire-professional-preference__title">
            {{ $t('how_many_bedrooms') }}
          </div>
          <Counter/>
        </div>
        <div class="estate-info__item hire-professional-preference__item">
          <div class="default-title hire-professional-preference__title">
            {{ $t('type_bedrooms') }}
          </div>
          <div class="content-form__items hire-professional-reference__items flex">
            <label class="content-form__item-label content-form__item-wrap">
              <span class="auth-free__category-title">{{ $t('on_suite') }}</span>
              <input type="checkbox">
              <span class="content-form__item-check">
            <CheckIcon/>
          </span>
            </label>
            <label class="content-form__item-label content-form__item-wrap">
              <span class="auth-free__category-title">{{ $t('king') }}</span>
              <input type="checkbox">
              <span class="content-form__item-check">
            <CheckIcon/>
          </span>
            </label>
            <label class="content-form__item-label content-form__item-wrap">
              <span class="auth-free__category-title">{{ $t('children') }}</span>
              <input type="checkbox">
              <span class="content-form__item-check">
            <CheckIcon/>
          </span>
            </label>
            <label class="content-form__item-label content-form__item-wrap">
              <span class="auth-free__category-title">{{ $t('guests') }}</span>
              <input type="checkbox">
              <span class="content-form__item-check">
            <CheckIcon/>
          </span>
            </label>
          </div>
        </div>
        <div class="estate-info__item">
          <div class="default-title hire-professional-preference__title">
            {{ $t('how_many_bathrooms') }}
          </div>
          <Counter/>
        </div>
        <div class="estate-info__item hire-professional-preference__item">
          <div class="default-title hire-professional-preference__title">
            {{ $t('type_bathrooms') }}
          </div>
          <div class="content-form__items hire-professional-reference__items  flex">
            <label class="content-form__item-label content-form__item-wrap">
              <span class="auth-free__category-title">{{ $t('master') }}</span>
              <input type="checkbox">
              <span class="content-form__item-check">
            <CheckIcon/>
          </span>
            </label>
            <label class="content-form__item-label content-form__item-wrap">
              <span class="auth-free__category-title">{{ $t('full_bath') }}</span>
              <input type="checkbox">
              <span class="content-form__item-check">
            <CheckIcon/>
          </span>
            </label>
            <label class="content-form__item-label content-form__item-wrap">
              <span class="auth-free__category-title">{{ $t('on_street') }}</span>
              <input type="checkbox">
              <span class="content-form__item-check">
            <CheckIcon/>
          </span>
            </label>
          </div>
        </div>
        <div class="hire-professional__filters filter__popup">
          <div class="default-title hire-professional-preference__title">{{ $t('features') }}</div>
          <div class="hire-professional-preference__list">
            <div class="hire-professional-preference__object">
              <span>{{ $t('pool') }}</span>
              <span class="hire-professional__icon">
                <CloseSmall />
              </span>
            </div>
            <div class="hire-professional-preference__object">
              <span>{{ $t('condo') }}</span>
              <span class="hire-professional__icon">
                <CloseSmall />
              </span>
            </div>
            <div class="hire-professional-preference__object">
              <span>{{ $t('parking') }}</span>
              <span class="hire-professional__icon">
                <CloseSmall />
              </span>
            </div>
            <button type="button" class="hire-professional-preference__item-link">
              <span>
                <AddIcon />
              </span>
             {{ $t('add_more') }}
            </button>
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
import HireInfoLinks from '~/components/hire-professional/hire-info-links'
import CheckIcon from '~/components/icons/common/check'
import Counter from '~/components/property/counter'
import ArrowBack from '~/components/icons/common/arrow-back'
import CloseSmall from '~/components/icons/common/close-small'
import AddIcon from '~/components/icons/common/add'
export default {
  layout: 'sidebar',
  name: 'hire-professional-preference',

  head: {
    title: 'Hire professional preference'
  },

  components: {
    HireInfoLinks,
    CheckIcon,
    Counter,
    ArrowBack,
    CloseSmall,
    AddIcon

  },

  data() {
    return {
      sidebarOffset: 0,
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
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

.slider {
  position: relative;

  .swiper-button-prev, .swiper-button-next {
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 3px;
    background: $thirdlyGray;
    top: -10px;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    svg {
      width: 18px;
      height: 18px;
      fill: $baseBlack;

      path {
        fill: $baseBlack;
      }
    }
  }

  .swiper-button-prev {
    left: auto;
    right: 70px;
  }

  .swiper-button-next {
    transform: rotate(180deg);
  }
}
</style>
