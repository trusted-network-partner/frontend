<template>
  <div class="header-wrap">
    <header class="header">
      <div class="header__logo">
        <nuxt-link to="/" class="logo">
          TRUSTED NETWORK PARTNER
        </nuxt-link>
      </div>
      <div class="header__info">
        <div
          v-if="!isExpanded"
          class="header__nav"
        >
          <Nav />
        </div>
        <div
          class="header__info-right"
          :class="{'expanded': isExpanded}"
        >
          <div class="header__search">
            <HeaderSearch
              :isExpanded="isExpanded"
              @expanded="expanded"
            />
          </div>
          <div class="header__notifications">
            <div
              class="select-container notifications"
              :class="{ 'active': isNotificationsShown }"
              v-click-outside="selectClick"
            >
              <div
                class="notifications__icon"
                @click="isNotificationsShown = !isNotificationsShown"
              >
                <NotificationsIcon />
                <div class="notifications__new" />
              </div>
              <Notifications
                v-if="isNotificationsShown"
                :isNotificationsShown="isNotificationsShown"
              />
            </div>
          </div>
          <div class="header__currency">
            <currency />
          </div>
          <div class="header__btn">
            <nuxt-link to="real-estate-address"
              class="btn-default black"
            >
              {{ $t('header.estate_btn') }}
            </nuxt-link>
          </div>
          <div class="header__account">
            <Menu />
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import HeaderSearch from '~/components/headers/search'
import Notifications from '~/components/headers/notifications'
import Currency from '~/components/headers/currency'
import Menu from '~/components/headers/menu'
import Nav from '~/components/headers/nav'
import NotificationsIcon from '~/components/icons/header/notifications'
  export default {
    name: 'header-search',

    data() {
      return {
        isExpanded: false,
        isNotificationsShown: false
      }
    },

    components: {
      HeaderSearch,
      Notifications,
      Currency,
      Menu,
      Nav,
      NotificationsIcon
    },

    methods: {
      expanded() {
        this.isExpanded = !this.isExpanded
      },
      selectClick(e) {
        this.isNotificationsShown = false
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/css/header/header";
  .header__nav {
    transition: all .3s ease;
  }
  .header__info-right.expanded {
    width: 100%;
    max-width: 100%;
  }
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
  }

</style>
