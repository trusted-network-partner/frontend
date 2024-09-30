<template>
    <div class="catalogue">
        <div class="catalogue__items">
            <div
              v-for="(country, index) in countries"
              :key="index"
              class="catalogue__item-wrap"
            >
              <div class="catalogue__item">
                <div class="catalogue__img">
                    <div
                        v-if="country.img"
                    >
                        <img
                            :src="require(`~/assets/img/info/catalogue/${country.img}`)" alt=""
                        />
                    </div>
                </div>
                <div class="catalogue__info">
                    <nuxt-link to="catalogue" class="catalogue__country">
                        {{country.country || ''}}
                    </nuxt-link>
                    <div class="catalogue__views">
                        <VisitorsIcon />
                        {{country.views}}
                    </div>
                </div>
                <div class="catalogue__btn-wrap">
                    <nuxt-link to="catalogue" class="btn-default black"> {{ $t('btn.load_more') }}</nuxt-link>
                </div>
              </div>
            </div>
        </div>
        <div class="catalogue__btn">
            <button type="button" class="btn-default">
              {{ $t('btn.load_more') }}
            </button>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex"
import VisitorsIcon from '~/components/icons/common/visitors'

export default {
  name: 'catalogue',

  components: {
   VisitorsIcon
  },

  computed: {
    ...mapGetters("catalogue",["countries"]),
  },

  beforeCreate() {
    this.locale = this.$cookies.get('locale')
  },

  async fetch() {
     await this.$store.dispatch('catalogue/getCountries', this.locale)
   }
}
</script>

<style lang="scss" scoped>
@import "~/assets/css/info/catalogue";
</style>
