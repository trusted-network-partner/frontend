<template>
  <div class="communities-events__wrap">
    <h2 class="communities-events__name">
      {{ $t('tabs.events') }}
    </h2>
    <div class="communities-events__items">
      <div
        v-for="(event, index) in eventsList"
        :key="index"
        class="communities-events__items-wrap"
      >
        <div class="communities-events__item">
          <div class="communities-events__img-wrap">
            <nuxt-link
              to="event"
              v-if="event.img"
              class="communities-events__img"
            >
              <img :src="require(`~/assets/img/communities-events/${event.img}`)" alt="">
            </nuxt-link>
            <nuxt-link to="event" class="communities-events__edit">
              <PenIcon />
            </nuxt-link>
          </div>
        </div>
        <nuxt-link to="event" class="communities-events__link">
          {{event.name || ''}}
        </nuxt-link>
        <div class="communities-events__descr">
          <p>
            {{event.description}}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import PenIcon from "~/components/icons/profile/pen";

export default {
  name: 'events-list-edit',

  components: {
    PenIcon
  },

  computed: {
    ...mapGetters("events-list",["eventsList"]),
  },

  async fetch() {
    const locale = this.$cookies.get('locale')
    await this.$store.dispatch('events-list/getEventsList', locale)
  }
}
</script>

<style scoped>
  .communities-events__img:after {
    display: none;
  }
</style>
