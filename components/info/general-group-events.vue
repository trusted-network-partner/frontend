<template>
  <div class="real-estate__items-wrap">
    <div class="real-estate__items">
      <div
        v-for="item in groupEventsList"
        :key="item.id"
        class="real-estate__item"
      >
        <div class="real-estate__item-left">
          <nuxt-link
            to="group"
            v-if="item.img"
          >
            <img
              class="real-estate__img"
              :src="require(`~/assets/img/info/group-communities/${item.img}`)"
              :alt="item.name"
            >
          </nuxt-link>
          <div class="real-estate__item-not">
            <div class="info-content__item-elems">
              <nuxt-link to="agent-info" class="info-content__item-elem">
                <img src="~/assets/img/agent/pic1.jpg" alt="">
              </nuxt-link>
              <nuxt-link to="agent-info" class="info-content__item-elem">
                <img src="~/assets/img/agent/pic4.jpg" alt="">
              </nuxt-link>
              <button type="button" class="info-content__item-btn info-content__item-elem">
                <span> +1 </span>
              </button>
            </div>
          </div>
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
            <nuxt-link to="group" class="real-estate__title" >
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
              {{item.location}}
            </div>
          </div>
          <div class="real-estate__footer">
            <button type="button" class="btn-default blank">
              Subscription
            </button>
            <button type="button" class="btn-arrow">
              <span>Learn More</span>
              <ArrowIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="pagination-list-wrap">
      <ul class="pagination-list">
        <li class="pagination-item active">
          <span>1</span>
        </li>
        <li class="pagination-item">
          <span>2</span>
        </li>
        <li class="pagination-item">
          <span>3</span>
        </li>
        <li class="pagination-item">
          <span>4</span>
        </li>
        <li class="pagination-item">
          <span>5</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import  DotIcon from '~/components/icons/posts/dots'
import AddressIcon from '~/components/icons/common/address'
import BedIcon from '~/components/icons/property/bed'
import BathIcon from '~/components/icons/property/bath'
import AreaIcon from '~/components/icons/property/area'
import ArrowIcon from '~/components/icons/common/arrow'
export default {
  name: 'group-event-list',

  components: {
    DotIcon,
    AddressIcon,
    BedIcon,
    BathIcon,
    AreaIcon,
    ArrowIcon
  },

  computed: {
    ...mapGetters("group-events-list",["groupEventsList"]),
  },

  async fetch() {
    const locale = this.$cookies.get('locale')
    await this.$store.dispatch('group-events-list/getGroupEventsList', locale)
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
    &-not {
      justify-content: flex-end;
    }
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
  .real-estate__footer {
    border-top: 1px solid $thirdlyGray;
    padding-top: 30px;
    display: flex;
    align-items: center;
    .btn-arrow {
      margin-left: 30px;
    }
  }
  .btn-more {
    display: flex;
    align-items: center;
  }
</style>
