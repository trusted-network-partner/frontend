<template>
  <div class="listing-services__list">
    <div
      v-for="(item,index) in realEstate"
      :key="index"
      class="listing-services__item"
    >
      <div class="listing-services__item-inner">
        <div
          class="listing-services__img-wrap"
        >
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
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import PenIcon from '~/components/icons/profile/pen'
import AddressIcon from '~/components/icons/common/address'
import CalendarIcon from '~/components/icons/profile/calendar'
export default {
  name: 'real-estate-list',

  components: {
    PenIcon,
    AddressIcon,
    CalendarIcon
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
@import "~/assets/css/agent/listing-services";
</style>
