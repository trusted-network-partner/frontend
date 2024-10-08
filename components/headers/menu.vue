<template>
  <div
    class="select-container account-wrap "
    :class="{
      active: isMenuShown,
      'open-up': isOpenUp,
      'align-right': isAlignRight
    }"
    v-click-outside="selectClick"
  >
    <div
      ref="trigger"
      class="account-dropdown select-trigger"
      @click="toggleOptions"
    >
      <div class="account-dropdown__name">
        RB
      </div>
      <div class="account-dropdown__icon select-trigger-icon">
        <TriangleIcon />
      </div>
    </div>
    <transition name="slide-fade">
      <div v-if="isMenuShown" ref="dropdown" class="menu select-dropdown">
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
      isOpenUp: false,
      isAlignRight: false,
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
    },
    calculateDropdownPosition() {
      this.$nextTick(() => {
        const trigger = this.$refs.trigger;
        const dropdown = this.$refs.dropdown;
        if (trigger && dropdown) {
          const triggerRect = trigger.getBoundingClientRect();
          const dropdownHeight = dropdown.offsetHeight;
          const dropdownWidth = dropdown.offsetWidth;

          const spaceBelow = window.innerHeight - triggerRect.bottom;
          const spaceAbove = triggerRect.top;
          const spaceRight = window.innerWidth - triggerRect.right;
          const spaceLeft = triggerRect.left;
          if (spaceBelow < dropdownHeight && spaceAbove > dropdownHeight) {
            this.isOpenUp = true;
          } else {
            this.isOpenUp = false;
          }

          if (spaceRight < dropdownWidth && spaceLeft > dropdownWidth) {
            this.isAlignRight = true;
          } else {
            this.isAlignRight = false;
          }
        }
      });
    },
    toggleOptions() {
      this.isMenuShown = !this.isMenuShown;
      if (this.isMenuShown) {
        this.calculateDropdownPosition();
      }
    },
    handleResize() {
      if (this.isMenuShown) {
        this.calculateDropdownPosition();
      }
    }
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
    window.addEventListener("scroll", this.handleResize);
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
    window.removeEventListener("scroll", this.handleResize);
  }
};
</script>

<style lang="scss"></style>
