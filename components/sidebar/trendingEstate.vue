<template>
  <div class="items">
    <div class="items__title">
      {{ $t('info.real_estate') }}
    </div>
    <div
      v-for="(estate, index) in estate"
      :key="index"
      class="item"
    >
      <nuxt-link to="real-estate-info"
                 class="item__img-wrap"
      >
        <span
          v-if="estate.img"
          class="item__img"
        >
          <img
            :src="require(`~/assets/img/estate/${estate.img}`)" alt=""
          />
        </span>
      </nuxt-link>
      <div class="item__info">
        <nuxt-link to="real-estate-info"
           class="item__name"
        >
          {{estate.name || ''}}
        </nuxt-link>
        <div class="item__views">
          <VisitorsIcon />
          {{estate.views}} {{ $t('viewers') }}
        </div>
      </div>
      <nuxt-link to="real-estate-info"
        class="item__icon"
      >
        <ArrowIcon />
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import ArrowIcon from '~/components/icons/common/arrow'
import VisitorsIcon from '~/components/icons/common/visitors'
export default {
  name: 'trending-real-estate',
  components: {
    ArrowIcon,
    VisitorsIcon
  },

  computed: {
    ...mapGetters("trendingEstate",["estate"]),
  },

  async fetch() {
    const locale = this.$cookies.get('locale')
    await this.$store.dispatch('trendingEstate/getEstate', locale)
  }
}
</script>

<style lang="scss" scoped>
  @import "~/assets/css/sidebar/items";
</style>
