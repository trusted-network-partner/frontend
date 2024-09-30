<template>
  <div class="real-estate__items-wrap">
    <div class="real-estate__items">
      <div
        v-for="item in realEstate"
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
              :src="require(`~/assets/img/info/communities-events/${item.img}`)"
              alt=""
            >
          </nuxt-link>
          <div class="real-estate__item-not">
            <div class="real-estate__notification">
              {{ $t('last_viewing') }}
            </div>
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
          <div class="real-estate__item-header">
            <nuxt-link to="real-estate-info" class="real-estate__title" >
             {{item.name || ''}}
            </nuxt-link>
            <button type="button"  class="real-estate-dots select-value-hidden">
              <SelectItem
                :selectOptions="optionsSelect"
              >
                <DotsIcon />
              </SelectItem>
            </button>
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
          <div class="real-estate__features-wrap">
            <div
              class="real-estate__features"
            >
              <div
                class="real-estate__feature"
              >
                <BedIcon />
                {{item.features.beds}} {{$t('bed')}}
              </div>
              <div
                class="real-estate__feature"
              >
                <BathIcon/>
                {{item.features.bath}} {{$t('bath')}}
              </div>
              <div
                class="real-estate__feature"
              >
                <AreaIcon />
                {{item.features.area}}m2
              </div>
            </div>
            <div class="real-estate__price">
              {{item.price}}€
            </div>
          </div>
          <div class="real-estate__seller-wrap">
            <div class="real-estate__seller-info">
              <div
                v-if="item.seller"
                class="real-estate__seller-details"
              >
                <nuxt-link to="agent-info"
                  v-if="item.seller.img"
                  class="real-estate__seller-img"
                >
                  <img :src="require(`~/assets/img/agent/${item.seller.img}`)" alt="">
                </nuxt-link>
                <div class="real-estate__seller-descr">
                  <nuxt-link to="agent-info" class="real-estate__seller-name">
                    {{item.seller.name}}/ {{ $t('seller') }}
                  </nuxt-link>
                  <div class="real-estate__seller-items">
                    <div class="real-estate__seller-item">
                      <a href="tel:+34677130650">
                        {{item.seller.phone}}
                      </a>
                    </div>
                    <div class="real-estate__seller-item">
                      <a href="mailto:Yana@gmail.com">
                        {{item.seller.email}}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <nuxt-link to="chat" class=" btn-default blank real-estate__seller-link">
                {{ $t('send_message') }}
              </nuxt-link>
            </div>
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
import  DotsIcon from '~/components/icons/posts/dots'
import AddressIcon from '~/components/icons/common/address'
import BedIcon from '~/components/icons/property/bed'
import BathIcon from '~/components/icons/property/bath'
import AreaIcon from '~/components/icons/property/area'
import SelectItem from '~/components/select/selectItem'
export default {
    name: 'real-estate-list',

    components: {
      DotsIcon,
      AddressIcon,
      BedIcon,
      BathIcon,
      AreaIcon,
      SelectItem
    },

    data() {
      return {
        optionsSelect: [
          { id: 1, name: 'Delete', value: 'delete', chosen: true },
          { id: 2, name: 'Flag', value: 'flag', chosen: false },
          { id: 3, name: 'Not interesting', value: 'not-interesting', chosen: false },
        ],
      }
    },

    computed: {
      ...mapGetters("real-estate",["realEstate"]),
    },

    async fetch() {
      const locale = this.$cookies.get('locale')
      await this.$store.dispatch('real-estate/getRealEstate', locale)
    }
  }
</script>

<style lang="scss" scoped>
  .info-content__item-elem {
    width: 35px;
    height: 35px;
    margin-left: -18px;
    img {
      width: 35px;
      height: 35px;
    }
  }
  .info-content__item-btn  {
    span {
      margin-right: 2px;
    }
  }
  .pagination-list-wrap {
    margin-top: 60px;
  }
</style>
