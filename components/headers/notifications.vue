<template>
  <div>
    <transition name="slide-fade">
      <div
        v-if="isNotificationsShown"
        class="notifications__items select-dropdown"
      >
        <div
          v-for="(notification, index) in notifications"
          :key="index"
          class="notification__item select-dropdown__item"
        >
          {{ notification.text }}
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import locales from '~/mixins/locales'

export default {
   name: 'notifications',

   props: ['isNotificationsShown'],

   mixins: [locales],

   computed: {
      ...mapGetters("notifications",["notifications"]),
    },

    async fetch() {
      await this.$store.dispatch('notifications/getNotifications', this.getLocale)
    }
}
</script>

<style lang="scss" scoped>
  .notifications {
    &__icon {
       cursor: pointer;
       position: relative;
    svg {
      transition: all .3s ease;
    &:hover {
       transform: translateY(-2px);
     }
    }
  }
  &__new {
     position: absolute;
     width: 7px;
     height: 7px;
     border-radius: 50%;
     background: $baseOrange;
     top: -7px;
     right: -7px;
   }
  }
</style>
