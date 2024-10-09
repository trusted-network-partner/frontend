<template>
  <div class="real-estate-wrapper hire-professional-wrap">
    <div
      class="estate-info-element"
      :style="{'height': sidebarHeight + 'px' }"
    />
    <div class="estate-info-wrap">
      <div class="estate-general">
        <div
          ref="sidebar"
          class="estate-general__wrap"
        >
          <div class="estate-general__container">
            <div class="estate-general__title">
              {{ $t('what_ability') }}
            </div>
            <div class="estate-general__descr">
              <p>
                {{ $t('agent_skills_descr') }}
              </p>
            </div>
          </div>
        </div>
        <AddAgentLinks
          :step="3"
        />
      </div>
      <div class="hire-professional-content">
        <AgentSkillsInfo />
        <div class="hire-professional-budget__buttons">
          <nuxt-link to="/" class="btn-default hire-professional-budget__button">{{ $t('skip_now') }}</nuxt-link>
          <nuxt-link to="add-agent-skills"
            class="btn-default hire-professional-budget__button black"
          >
            {{ $t('finish') }}
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AddAgentLinks from '@/components/agent/add-agent-links'
import AgentSkillsInfo from '@/components/agent/add-agent-skills-info'
export default {
  layout: 'sidebar',
  name: 'add-agent-skills',

  head: {
    title: 'Add Agent'
  },

  components: {
    AddAgentLinks,
    AgentSkillsInfo
  },

  data() {
    return {
      sidebarOffset: 0,
    }
  },

  computed: {
    sidebarHeight() {
      return this.sidebarOffset
    }
  },

  methods: {},

  mounted() {
    this.sidebarOffset = this.$refs.sidebar.offsetHeight
  }
}
</script>

<style lang="scss" scoped>
  @import "~/assets/css/hire-professional/hire-professional";
  @import "~/assets/css/auth/auth-general";
  .estate-general__title {
    margin-bottom: 15px;
  }
  .heir-professional-content__subtitle {
    margin-bottom: 20px;
  }
  .hire-professional__location {
    margin-bottom: 23px;
  }
  .auth-wrap-item__container {
    max-width: 100%;
  }
  .info-default__textarea-wrap {
    height: 284px;
  }
</style>
