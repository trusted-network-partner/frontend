<template>
  <div class="events">
    <div class="events__items">
      <div
        v-for="(event, index) in events"
        :key="index"
        class="events__item"
      >
        <div class="event__info">
          <div class="event__img">
            <div v-if="event.img">
              <img
                :src="require(`~/assets/img/info/events/${event.img}`)" alt=""
              />
            </div>
          </div>
          <div class="event__details">
            <div class="event__name">
              {{event.name || ''}}
            </div>
            <div class="event__author">
              by {{event.author}}
            </div>
          </div>
        </div>
        <div class="event__timing-wrap">
          <ClockIcon />
          <span class="event__timing">
            {{event.time}}
          </span>
        </div>
        <div class="event__rating-wrap">
          <FireIcon />
          <span class="event__rating">
            {{event.rating}}
          </span>
        </div>
        <div class="event__btn-wrap">
          <nuxt-link to="event" class="event__btn btn-default blank">
            View  Event
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import ClockIcon from '~/components/icons/common/clock'
import FireIcon from '~/components/icons/common/fire'

export default {
  name: 'events',

  components: {
    ClockIcon,
    FireIcon
  },

  computed: {
    ...mapGetters("events",["events"]),
  },

  async fetch() {
    await this.$store.dispatch('events/getEvents')
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/css/info/events";
</style>
