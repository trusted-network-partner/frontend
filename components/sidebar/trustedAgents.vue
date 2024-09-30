<template>
  <div class="items">
    <div class="items__title">
      {{ $t('info.trusted_agents') }}
    </div>
    <div
      v-for="(agent, index) in agents"
      :key="index"
      class="item"
    >
      <nuxt-link to="agent-info"
        class="item__img-wrap"
      >
        <span
          v-if="agent.img"
          class="item__img"
        >
          <img
            :src="require(`~/assets/img/trusted/${agent.img}`)" alt=""
          />
        </span>
      </nuxt-link>
      <div class="item__info">
        <nuxt-link to="agent-info"
          class="item__name"
        >
          {{agent.name || ''}}
        </nuxt-link>
        <div class="item__rating">
          {{ $t('trust_rating') }}  {{agent.rating}}
        </div>
      </div>
      <nuxt-link to="agent-info"
        class="item__icon"
      >
        <ArrowIcon />
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import ArrowIcon from '~/components/icons/common/arrow'
  export default {
    name: 'trusted-agents',
    components: {
      ArrowIcon
    },

    computed: {
      ...mapGetters("trustedAgents",["agents"]),
    },

    async fetch() {
      await this.$store.dispatch('trustedAgents/getAgents')
    }
  }
</script>

<style lang="scss" scoped>
  @import "~/assets/css/sidebar/items";
</style>
