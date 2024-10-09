<template>
  <form class="estate-info">
    <div class="estate-info__item">
      <div class="default-title">
        {{ $t("market") }}
      </div>
      <div class="content-form__items flex">
        <label class="content-form__item-label content-form__item-wrap">
          <span class="auth-free__category-title">{{ $t("newHomes") }}</span>
          <input type="radio" name="market-estate" />
          <span class="content-form__item-check rounded">
            <CheckIcon />
          </span>
        </label>
        <label class="content-form__item-label content-form__item-wrap">
          <span class="auth-free__category-title">{{
            $t("resalesHomes")
          }}</span>
          <input type="radio" name="market-estate" />
          <span class="content-form__item-check rounded">
            <CheckIcon />
          </span>
        </label>
        <label class="content-form__item-label content-form__item-wrap">
          <span class="auth-free__category-title">{{ $t("lands") }}</span>
          <input type="radio" name="market-estate" />
          <span class="content-form__item-check rounded">
            <CheckIcon />
          </span>
        </label>
      </div>
    </div>
    <div class="estate-info__item">
      <div class="default-title">
        {{ $t("classification") }}
      </div>
      <div class="content-form__items flex">
        <label class="content-form__item-label content-form__item-wrap">
          <span class="auth-free__category-title">{{ $t("residential") }}</span>
          <input type="radio" name="classification-estate" />
          <span class="content-form__item-check rounded">
            <CheckIcon />
          </span>
        </label>
        <label class="content-form__item-label content-form__item-wrap">
          <span class="auth-free__category-title">{{ $t("commercial") }}</span>
          <input type="radio" name="classification-estate" />
          <span class="content-form__item-check rounded">
            <CheckIcon />
          </span>
        </label>
        <label class="content-form__item-label content-form__item-wrap">
          <span class="auth-free__category-title">{{ $t("rustic") }}</span>
          <input type="radio" name="classification-estate" />
          <span class="content-form__item-check rounded">
            <CheckIcon />
          </span>
        </label>
      </div>
    </div>
    <div class="estate-info__item">
      <div class="default-title">
        {{ $t("property_sell") }}
      </div>
      <div class="content-form__items">
        <label class="content-form__elem">
          <input type="radio" name="estate-type" />
          <span class="content-form__elem-check">
            <CondoIcon />
          </span>
          <span class="content-form__elem-title">{{ $t("condo") }}</span>
        </label>
        <label class="content-form__elem">
          <input type="radio" name="estate-type" />
          <span class="content-form__elem-check">
            <HouseIcon />
          </span>
          <span class="content-form__elem-title">{{ $t("house") }}</span>
        </label>
      </div>
    </div>
    <div class="estate-info__item slider">
      <div class="default-title">
        {{ $t("category.type") }}
      </div>
      <client-only>
        <swiper ref="mySwiper" :options="swiperOption">
          <swiper-slide>
            <div class="content-form__items flex">
              <label class="content-form__item-label content-form__item-wrap">
                <span class="auth-free__category-title">{{
                  $t("bungalow")
                }}</span>
                <input type="checkbox" />
                <span class="content-form__item-check">
                  <CheckIcon />
                </span>
              </label>
              <label class="content-form__item-label content-form__item-wrap">
                <span class="auth-free__category-title">{{ $t("condo") }}</span>
                <input type="checkbox" />
                <span class="content-form__item-check">
                  <CheckIcon />
                </span>
              </label>
              <label class="content-form__item-label content-form__item-wrap">
                <span class="auth-free__category-title">{{
                  $t("townhouse")
                }}</span>
                <input type="checkbox" />
                <span class="content-form__item-check">
                  <CheckIcon />
                </span>
              </label>
              <label class="content-form__item-label content-form__item-wrap">
                <span class="auth-free__category-title">{{
                  $t("townhouse")
                }}</span>
                <input type="checkbox" />
                <span class="content-form__item-check">
                  <CheckIcon />
                </span>
              </label>
              <label class="content-form__item-label content-form__item-wrap">
                <span class="auth-free__category-title">{{
                  $t("studio")
                }}</span>
                <input type="checkbox" />
                <span class="content-form__item-check">
                  <CheckIcon />
                </span>
              </label>
              <label class="content-form__item-label content-form__item-wrap">
                <span class="auth-free__category-title">{{
                  $t("penthouse")
                }}</span>
                <input type="checkbox" />
                <span class="content-form__item-check">
                  <CheckIcon />
                </span>
              </label>
            </div>
          </swiper-slide>
          <swiper-slide>
            slide 2
          </swiper-slide>
        </swiper>
        <div class="swiper-button-next">
          <ArrowBack />
        </div>
        <div class="swiper-button-prev">
          <ArrowBack />
        </div>
      </client-only>
    </div>
    <div class="estate-info__item">
      <div class="default-title">
        {{ $t("how_many_bedrooms") }}
      </div>
      <Counter />
    </div>
    <div class="estate-info__item">
      <div class="default-title">
        {{ $t("type_bedrooms") }}
      </div>
      <div class="content-form__items flex">
        <label class="content-form__item-label content-form__item-wrap">
          <span class="auth-free__category-title">{{ $t("on_suite") }}</span>
          <input type="checkbox" />
          <span class="content-form__item-check">
            <CheckIcon />
          </span>
        </label>
        <label class="content-form__item-label content-form__item-wrap">
          <span class="auth-free__category-title">{{ $t("king") }}</span>
          <input type="checkbox" />
          <span class="content-form__item-check">
            <CheckIcon />
          </span>
        </label>
        <label class="content-form__item-label content-form__item-wrap">
          <span class="auth-free__category-title">{{ $t("children") }}</span>
          <input type="checkbox" />
          <span class="content-form__item-check">
            <CheckIcon />
          </span>
        </label>
        <label class="content-form__item-label content-form__item-wrap">
          <span class="auth-free__category-title">{{ $t("guests") }}</span>
          <input type="checkbox" />
          <span class="content-form__item-check">
            <CheckIcon />
          </span>
        </label>
      </div>
    </div>
    <div class="estate-info__item">
      <div class="default-title">
        {{ $t("how_many_bathrooms") }}
      </div>
      <Counter />
    </div>
    <div class="estate-info__item">
      <div class="default-title">
        {{ $t("type_bathrooms") }}
      </div>
      <div class="content-form__items flex">
        <label class="content-form__item-label content-form__item-wrap">
          <span class="auth-free__category-title">{{ $t("master") }}</span>
          <input type="checkbox" />
          <span class="content-form__item-check">
            <CheckIcon />
          </span>
        </label>
        <label class="content-form__item-label content-form__item-wrap">
          <span class="auth-free__category-title">{{ $t("full_bath") }}</span>
          <input type="checkbox" />
          <span class="content-form__item-check">
            <CheckIcon />
          </span>
        </label>
        <label class="content-form__item-label content-form__item-wrap">
          <span class="auth-free__category-title">{{ $t("on_street") }}</span>
          <input type="checkbox" />
          <span class="content-form__item-check">
            <CheckIcon />
          </span>
        </label>
      </div>
    </div>
    <div class="estate-info__btns">
      <nuxt-link to="/" class="btn-default"> {{ $t("skip_now") }} </nuxt-link>
      <nuxt-link to="real-estate-details" class="btn-default black">
        {{ $t("next_step") }}
      </nuxt-link>
    </div>
  </form>
</template>

<script>
import CheckIcon from "~/components/icons/common/check";
import CondoIcon from "~/components/icons/property/condo";
import HouseIcon from "~/components/icons/property/house";
import Counter from "~/components/property/counter";
import ArrowBack from "~/components/icons/common/arrow-back";
export default {
  name: "real-estate-main-info",

  components: {
    CheckIcon,
    CondoIcon,
    HouseIcon,
    Counter,
    ArrowBack
  },

  computed: {
    swiper() {
      return this.$refs.$swiper;
    }
  },

  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        allowTouchMove: false,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.default-title {
  margin-bottom: 30px;
}
.content-form__items.flex {
  justify-content: space-between;
}
.content-form__item-wrap {
  background: $baseWhite;
  border: 0;
}
.slider {
  position: relative;
  .swiper-button-prev,
  .swiper-button-next {
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
.estate-info {


  @include minMedia($breakpoint-xl) {
    padding: 121px 0 0 61px;
  }
}
.content-form__items {
  flex-wrap: wrap;
}
</style>
