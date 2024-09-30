<template>
  <div
    class="select-dropdown-wrap"
    :class="{'active': isOptionsShown}"
    v-click-outside="selectClick"
  >
    <div
      class="select-trigger"
      @click="isOptionsShown = !isOptionsShown"
    >
      <slot />
    </div>
    <transition name="slide-fade">
      <div
        v-if="isOptionsShown"
        class="select-dropdown"
      >
        <div
          v-for="option in socialItems"
          :key="option.id"
          class="select-dropdown__item-wrap cursor"
          :class="{'active': option.chosen}"
          @click="chooseOption"
        >
          <component
            :is="option.icon"
          />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import FbIcon from "~/components/icons/social-icons/fb"
import TwIcon from "~/components/icons/social-icons/tw"
import WhatsUpIcon from "~/components/icons/social-icons/whatsapp"
import TelIcon from "~/components/icons/social-icons/tel"
import InIcon from "~/components/icons/social-icons/in"
import MailIcon from "~/components/icons/social-icons/mail"
  export default {
    name: 'social-share',

    components: {
      FbIcon,
      TwIcon,
      WhatsUpIcon,
      TelIcon,
      InIcon,
      MailIcon
    },

    data() {
      return {
        isOptionsShown: false,
        socialItems: [
          { id: 1, icon:'FbIcon', link: 'fb' },
          { id: 2, icon:'TwIcon', link: 'tw' },
          { id: 3, icon:'WhatsUpIcon', link: 'whatsapp' },
          { id: 4, icon:'TelIcon', link: 'tel' },
          { id: 5, icon:'InIcon', link: 'in' },
          { id: 6, icon:'MailIcon', link: 'mail' },
        ]
      }
    },

    methods: {
      chooseOption() {
        this.isOptionsShown = false
      },
      selectClick(e) {
        this.isOptionsShown = false
      },
    }
  }
</script>

<style lang="scss" scoped>
  .select-dropdown {
    display: flex;
    align-items: center;
    padding: 19px;
    &-wrap {
      position: relative;
    }
    &__item-wrap {
      margin-right: 20px;
      transition: all .3s ease;
      &:hover {
        transform: translateY(-2px);
      }
      &:last-child {
        margin-right: 0;
      }
    }
    .cursor {
      cursor: pointer;
    }
  }
</style>
