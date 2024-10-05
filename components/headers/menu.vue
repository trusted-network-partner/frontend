<template>
  <div class="select-container account-wrap " :class="{ active: isMenuShown }">
    <div class="account" @click="isMenuShown = !isMenuShown">
      <div class="account__name">
        RB
      </div>
      <div class="account__icon select-trigger-icon">
        <TriangleIcon />
      </div>
    </div>
    <transition name="slide-fade">
      <div v-if="isMenuShown" class="menu select-dropdown">
        <ul class="menu__list">
          <li
            v-for="(menuItem, index) in menu"
            :key="index"
            class="menu__item"
            @click="selectClick"
          >
            <nuxt-link
              :to="menuItem.route"
              class="menu__link select-dropdown__item"
            >
              <span class="select-icon">
                <component :is="menuItem.icon" />
              </span>
              <span class="menu__link-item">
                {{ $t(menuItem.name) }}
              </span>
            </nuxt-link>
          </li>
          <li class="menu__item">
            <div class="menu__link select-dropdown__item">
              <span class="select-icon">
                <LogOutIcon />
              </span>
              <span class="menu__link-item">
                {{ $t("menu.logout") }}
              </span>
            </div>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import AccountIcon from "~/components/icons/common/account";
import NewsIcon from "~/components/icons/common/news";
import VisitorsIcon from "~/components/icons/common/visitors";
import CommunityIcon from "~/components/icons/common/community";
import SettingsIcon from "~/components/icons/common/settings";
import LogOutIcon from "~/components/icons/common/logout";
import TriangleIcon from "~/components/icons/common/triangle";
export default {
  name: "account-select",

  components: {
    AccountIcon,
    NewsIcon,
    VisitorsIcon,
    CommunityIcon,
    SettingsIcon,
    LogOutIcon,
    TriangleIcon
  },

  data() {
    return {
      isMenuShown: false,
      menu: [
        {
          route: "settings-general",
          name: "menu.account",
          icon: AccountIcon
        },
        {
          route: "news",
          name: "menu.news",
          icon: NewsIcon
        },
        {
          route: "search",
          name: "menu.opportunities",
          icon: VisitorsIcon
        },
        {
          route: "general-group-events",
          name: "menu.community_events",
          icon: CommunityIcon
        },
        {
          route: "settings",
          name: "menu.settings",
          icon: SettingsIcon
        }
      ]
    };
  },

  methods: {
    selectClick(e) {
      this.isMenuShown = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.account-wrap .account {
  cursor: pointer;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: $border-5;
  background: $fifthlyGray;
  position: relative;
}

.account {
  &__name {
    font-weight: 600;
    font-size: 18px;
  }
  &__icon {
    background: $baseWhite;
    border-radius: 2px;
    width: 15px;
    height: 15px;
    position: absolute;
    bottom: 0px;
    right: -2px;
    display: flex;
    align-items: center;
    justify-content: center;
    svg path {
      fill: $baseBlack;
    }
  }
}
.nuxt-link-exact-active {
  font-weight: bold;
  color: $baseOrange;
}
</style>
