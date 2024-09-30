<template>
  <div class="listing-services__section real-estate-list">
    <div class="listing-services__header">
      <div class="listing-services__title">
        {{ $t('listing_real_estate') }}
      </div>
      <div class="listing-services__btn">
        <nuxt-link to="listing-services-info" class="btn-default listing-services-btn">
          {{ $t('show_all') }}
          <span> (12)</span>
        </nuxt-link>
        <div class="swiper-button-prev">
          <ArrowBack />
        </div>
        <div class="swiper-button-next">
          <ArrowBack />
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
        v-for="(item,index) in realEstate"
        :key="index"
        class="listing-services__item"
      >
        <div class="listing-services__item-inner">
          <div class="listing-services__img-wrap">
            <nuxt-link
              to="real-estate-info"
              v-if="item.img"
              class="listing-services__img"
            >
              <img :src="require(`~/assets/img/info/communities-events/${item.img}`)" alt="">
            </nuxt-link>
            <nuxt-link to="real-estate-info" class="listing-services__edit">
              <PenIcon/>
            </nuxt-link>
          </div>
          <nuxt-link to="real-estate-info" class="listing-services__name">
            {{item.name}}
          </nuxt-link>
          <div class="listing-services__footer">
            <div class="listing-services__address-wrap">
              <AddressIcon />
              <div class="listing-services__address">
                {{item.address}}
              </div>
            </div>
            <div class="listing-services__date-wrap">
              <CalendarIcon />
            </div>
            <div class="listing-services__date">
              {{item.date}}
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
    </client-only>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import PenIcon from '~/components/icons/profile/pen'
import AddressIcon from '~/components/icons/common/address'
import CalendarIcon from '~/components/icons/profile/calendar'
import ArrowBack from '~/components/icons/common/arrow-back'

  export default {
    name: 'real-estate-list',

    components: {
      PenIcon,
      AddressIcon,
      CalendarIcon,
      ArrowBack
    },

    computed: {
      ...mapGetters("real-estate",["realEstate"]),
      swiper() {
        return this.$refs.$swiper
      }
    },

    data() {
      return {
        swiperOption: {
          slidesPerView: 3,
          spaceBetween: 30,
          navigation: {
            nextEl: '.real-estate-list .swiper-button-next',
            prevEl: '.real-estate-list .swiper-button-prev'
          }
        },
      }
    },

    async fetch() {
      const locale = this.$cookies.get('locale')
      await this.$store.dispatch('real-estate/getRealEstate', locale)
    }
  }
</script>

<style lang="scss" scoped>
@import "~/assets/css/agent/listing-services";
  .listing-services {
    &-btn {
      text-transform: uppercase;
    }
    &__btn {
      display: flex;
      align-items: center;
      .btn-default {
        margin-right: 25px;
      }
    }
  }
  .listing-services__item {
    padding: 0;
  }
  .swiper-button-prev,  .swiper-button-next {
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
