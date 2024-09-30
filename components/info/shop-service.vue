<template>
  <div class="real-estate__items-wrap">
    <div class="real-estate__items">
      <div
        v-for="item in shopServices"
        :key="item.id"
        class="real-estate__item"
      >
        <div class="real-estate__item-left">
          <nuxt-link
            to="real-estate-info"
            v-if="item.img"
          >
            <img
              class="real-estate__img"
              :src="require(`~/assets/img/shop-services/${item.img}`)"
              :alt="item.name"
            >
          </nuxt-link>
        </div>
        <div class="real-estate__item-info">
          <div class="real-estate__item-info-header">
            <div class="rating-wrap">
              <div class="rating-stars">
                <div
                  class="rating-stars__background"
                  :style="{'width': item.rating * 19 + '%'}"
                />
              </div>
              <div class="rating">
                {{ item.rating }}
              </div>
            </div>
            <button type="button"  class="real-estate-dots">
              <DotIcon />
            </button>
          </div>
          <div class="real-estate__item-header">
            <nuxt-link to="real-estate-info" class="real-estate__title" >
              {{item.name || ''}}
            </nuxt-link>
          </div>
          <div class="real-estate__address-info">
            <div class="real-estate__address-wrap">
              <AddressIcon />
              <span class="real-estate__address">
                {{item.address}}
              </span>
            </div>
            <div class="real-estate__location">
              <CalendarIcon />
              <span class="real-estate__address">
               {{item.date}}
              </span>
            </div>
          </div>
          <div class="real-estate__footer">
            <button type="button" class="btn-default blank">
              {{ $t('buyProduct') }}
            </button>
            <button type="button" class="btn-arrow">
              <span>{{ $t('learnMore') }}</span>
              <ArrowIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import  DotIcon from '~/components/icons/posts/dots'
import AddressIcon from '~/components/icons/common/address'
import ArrowIcon from '~/components/icons/common/arrow'
import CalendarIcon from '~/components/icons/profile/calendar'
export default {
  name: 'shop-services-list',

  components: {
    DotIcon,
    AddressIcon,
    ArrowIcon,
    CalendarIcon
  },

  computed: {
    ...mapGetters("shop-services",["shopServices"]),
  },

  async fetch() {
    const locale = this.$cookies.get('locale')
    await this.$store.dispatch('shop-services/getShopServices', locale)
  }
}
</script>

<style lang="scss" scoped>
.info-content__item {
  &-elem {
    width: 35px;
    height: 35px;
    margin-left: -18px;
    img {
      width: 35px;
      height: 35px;
    }
  }
  &-btn {
    span {
      margin-right: 2px;
    }
  }
}
.real-estate__item {
  &-info-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0 22px;
  }
}
.pagination-list-wrap {
  margin-top: 60px;
}
.rating {
  margin-left: 10px;
  font-size: 14px;
  letter-spacing: 0.1px;
  color: $baseGray;
  &-wrap {
    display: flex;
    align-items: center;
  }
}
.real-estate {
  &__location {
    svg {
      margin-bottom: 3px;
    }
  }
  &__footer {
    border-top: 1px solid $thirdlyGray;
    padding-top: 30px;
    display: flex;
    align-items: center;
    .btn-arrow {
      margin-left: 30px;
    }
  }
}
.btn-more {
  display: flex;
  align-items: center;
}
</style>
