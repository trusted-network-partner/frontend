<template>
  <div class="communities-events__wrap">
    <h2 class="communities-events__name">
      {{ $t('communities') }}
    </h2>
    <div class="communities-events__items">
      <div
        v-for="(community, index) in communitiesList"
        :key="index"
        class="communities-events__items-wrap"
      >
        <div class="communities-events__item">
          <div class="communities-events__img-wrap">
            <nuxt-link
              to="group"
              v-if="community.img"
              class="communities-events__img"
            >
              <img :src="require(`~/assets/img/communities-events/${community.img}`)" alt="">
            </nuxt-link>
            <nuxt-link to="group" class="communities-events__edit">
              <PenIcon />
            </nuxt-link>
          </div>
        </div>
        <nuxt-link to="group" class="communities-events__link">
          {{community.name || ''}}
        </nuxt-link>
        <div class="communities-events__descr">
          <p>
            {{community.description}}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import PenIcon from "@/components/icons/profile/pen";

  export default {
    name: 'communities-list-edit',

    components: {
      PenIcon
    },

    computed: {
      ...mapGetters("communities-list",["communitiesList"]),
    },

    async fetch() {
      const locale = this.$cookies.get('locale')
      await this.$store.dispatch('communities-list/getCommunitiesList', locale)
    }
  }
</script>

<style scoped>
  .communities-events__img:after {
    display: none;
  }
</style>
