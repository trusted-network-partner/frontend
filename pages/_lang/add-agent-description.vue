<template>
  <div class="container hire-professional-wrap">
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
              {{ $t('hello_member') }}
            </div>
            <div class="estate-general__descr">
              <p>
                {{ $t('describe_yourself') }}
              </p>
            </div>
          </div>
        </div>
        <AddAgentLinks
          :step="2"
        />
      </div>
      <div class="hire-professional-content">
        <div class="auth-wrap-item__container">
          <div class="default-title medium-margin_bottom">{{ $t('add_agent_descr_info') }}</div>
          <form
            class="auth-identification__form"
            @submit.prevent=""
          >
            <div class="info-default info-default__textarea-wrap mb-30">
              <label for="skills-descr" class="info-default__label">
                {{ $t('description') }}
              </label>
              <textarea
                class="info-default__value info-default__textarea"
                id="skills-descr"
                :placeholder="$t('description')"
              >
              </textarea>
            </div>
          </form>
        </div>
        <div class="hire-professional-budget__buttons">
          <nuxt-link to="/" class="btn-default hire-professional-budget__button">{{ $t('skip_now') }}</nuxt-link>
          <nuxt-link to="add-agent-skills"
            class="btn-default hire-professional-budget__button black"
          >
            {{ $t('next_step') }}
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AddAgentLinks from '@/components/agent/add-agent-links'
export default {
  layout: 'sidebar',
  name: 'add-agent-description',

  head: {
    title: 'Add Agent'
  },

  components: {
    AddAgentLinks
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
