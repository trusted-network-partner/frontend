<template>
  <div class="listing-services__section services">
    <div class="listing-services__header">
      <div class="listing-services__header-info">
        <div class="listing-services__title">
          {{ $t("listing.shop_services") }}
        </div>
        <button type="button" class="listing-services__add-btn">
          <AddIcon />
        </button>
      </div>
      <div class="listing-services__btn">
        <nuxt-link to="shop-services" class="btn-default listing-services-btn">
          {{ $t("show_all") }}
          <span> (12)</span>
        </nuxt-link>
        <div class="listing-service__slide-switchers">
          <div class="swiper-button-prev">
            <ArrowBack />
          </div>
          <div class="swiper-button-next">
            <ArrowBack />
          </div>
        </div>
      </div>
    </div>
    <client-only>
      <swiper
        ref="mySwiper"
        :options="swiperOption"
        class="listing-services__list"
      >
        <swiper-slide
          v-for="(item, index) in shopServices"
          :key="index"
          class="listing-services__item"
        >
          <div class="listing-services__item-inner">
            <div class="listing-services__img-wrap">
              <nuxt-link
                to="real-estate-info"
                v-if="item.img"
                class="listing-services__img-"
              >
                <img
                  :src="require(`~/assets/img/shop-services/${item.img}`)"
                  alt=""
                />
              </nuxt-link>
              <nuxt-link to="real-estate-info" class="listing-services__edit">
                <PenIcon />
              </nuxt-link>
            </div>
            <nuxt-link to="real-estate-info" class="listing-services__name">
              {{ item.name }}
            </nuxt-link>
            <div class="listing-services__footer">
              <div class="listing-services__address-wrap">
                <AddressIcon />
                <div class="listing-services__address">
                  {{ item.address }}
                </div>
              </div>
              <div class="listing-services__date-wrap">
                <CalendarIcon />
              </div>
              <div class="listing-services__date">
                {{ item.date }}
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </client-only>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PenIcon from "~/components/icons/profile/pen";
import AddressIcon from "~/components/icons/common/address";
import CalendarIcon from "~/components/icons/profile/calendar";
import ArrowBack from "~/components/icons/common/arrow-back";
import AddIcon from "~/components/icons/property/add";
export default {
  name: "shop-services",

  components: {
    PenIcon,
    AddressIcon,
    CalendarIcon,
    ArrowBack,
    AddIcon
  },

  computed: {
    ...mapGetters("shop-services", ["shopServices"]),
    swiper() {
      return this.$refs.$swiper;
    }
  },

  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
          nextEl: ".services .swiper-button-next",
          prevEl: ".services .swiper-button-prev"
        },
        breakpoints: {
          1250: {
            spaceBetween: 20
          },
          800: {
            slidesPerView: 1
          }
        }
      }
    };
  },

  async fetch() {
    const locale = this.$cookies.get("locale");
    await this.$store.dispatch("shop-services/getShopServices", locale);
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/agent/listing-services";
.listing-services {
  &-btn {
    text-transform: uppercase;
  }
  &__add-btn {
    width: 75px;
    height: 48px;
    border-radius: $border-5;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    border: 1px solid $baseBlack;
    &:hover {
      transform: translateY(-2px);
    }
  }
  &__header-info {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 35px;
    @include maxMedia($breakpoint-sm) {
      gap: 10px;
      flex-direction: column;
      align-items: flex-start;
    }
  }
}
.listing-services__item {
  padding: 0;
}
.swiper-button-prev,
.swiper-button-next {
  width: 35px;
  height: 35px;
  border-radius: 3px;
  background: $thirdlyGray;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  svg {
    width: 15px;
    height: 15px;
    fill: $baseBlack;
    path {
      fill: $baseBlack;
    }
  }
}
.swiper-button-prev {
  margin: 0 10px;
}
.swiper-button-next {
  transform: rotate(180deg);
}
</style>
