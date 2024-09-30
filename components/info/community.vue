<template>
  <div class="community">
    <div class="community__items">
      <div
        v-for="(item, index) in community"
        :key="index"
        class="community__items-wrap"
      >
        <div class="community__item">
          <div class="community__img">
            <div v-if="item.img">
              <img :src="require(`~/assets/img/info/community/${item.img}`)" alt="">
            </div>
          </div>
          <div class="community__info">
            <div class="community__label">
              {{item.label}}
            </div>
            <div class="community__name">
              {{item.name || ''}}
            </div>
          </div>
          <p class="community__description">
            {{item.description || ''}}
          </p>
        </div>
        <nuxt-link to="communities" class="community__btn btn-default">
          <span class="community__btn-inner">
             {{ $t('post.read_more') }}
          </span>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  name: 'community',

  computed: {
    ...mapGetters("community",["community"]),
  },

  async fetch() {
    const locale = this.$cookies.get('locale')
    await this.$store.dispatch('community/getCommunity', locale)
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/css/info/community";
</style>
