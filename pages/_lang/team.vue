<template>
  <main
    class="main"
  >
    <div class="content-wrap-full-width">
      <div class="container relative">
        <div class="content-wrap-details">
          <div class="settings-back">
            <nuxt-link to="settings" class="settings-back__link">
              <ArrowBack />
            </nuxt-link>
            <div class="settings-back__info">
              <div class="settings-back__title">
                {{ $t('create_teams') }}
              </div>
              <div class="settings-back__descr">
                {{ $t('settings_general') }}
              </div>
            </div>
          </div>
          <div class="user-info">
            <div class="user-info__img">
              <img src="~/assets/img/agent/user-big.jpg" alt="">
              <nuxt-link to="agent-info" class="user-info__img-edit">
                <PenIcon />
              </nuxt-link>
            </div>
            <div class="user-info__details">
              <nuxt-link
                to="agent-info"
                class="user-info__name"
              >
                Ruben Bothman
              </nuxt-link>
              <div class="user-info__descr">
                {{ $t('agent.position') }}
              </div>
            </div>
          </div>
          <div class="team-wrap">
            <TeamInfo />
          </div>
        </div>
        <Widgets />
      </div>
    </div>
  </main>
</template>

<script>
import Widgets from '~/components/widgets/widgets'
import ArrowBack from '~/components/icons/common/arrow-back'
import PenIcon from '~/components/icons/profile/pen'
import TeamInfo from '@/components/team/team-info'
export default {
  layout: 'header-underline',

  name: 'team',

  head: {
    title: 'Team'
  },

  components: {
    Widgets,
    ArrowBack,
    PenIcon,
    TeamInfo
  }
}
</script>

<style scoped>
  .content-wrap-full-width {
    margin-bottom: 90px;
    width: 100%;
  }
  .widgets {
    position: absolute;
    right: -152px;
    top: 16%;
  }
  .content-wrap-details {
    max-width: 706px;
  }
</style>
