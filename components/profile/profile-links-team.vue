<template>
  <div class="agent__profile">
    <div class="profile-info">
      <div class="profile-info__header">
        <div class="profile-info__left">
          <div class="profile-info__img">
            <img src="~/assets/img/profile/profile.jpg" alt="">
            <nuxt-link to="settings" class="profile-info__edit">
              <PenIcon />
            </nuxt-link>
          </div>
        </div>
        <div class="profile-info__right">
          <nuxt-link
            to="agent-info"
            class="profile-info__name"
          >
            Ruben Bothman
          </nuxt-link>
          <div class="profile-info__occupancy">
            {{ $t('agent.position') }}
          </div>
        </div>
      </div>
      <div class="profile-info__rate-wrap">
        <div class="profile-info__rate-item">
          <div class="profile-info__rate">
            5.0
          </div>
          <div class="profile-info__rate-elem">
            {{ $t('reputation') }}
          </div>
        </div>
        <div class="profile-info__rate-item">
          <div class="profile-info__rate">
            23
          </div>
          <div class="profile-info__rate-elem">
            {{ $t('clients') }}
          </div>
        </div>
      </div>
      <div class="profile-info__details">
        <div class="profile-info__item">
          <div class="profile-info__item-label">
            {{ $t('deals') }}
          </div>
          <div class="profile-info__item-value">
            456
          </div>
        </div>
        <div class="profile-info__item">
          <div class="profile-info__item-label">
            {{ $t('properties') }}
          </div>
          <div class="profile-info__item-value">
            602
          </div>
        </div>
        <div class="profile-info__item">
          <div class="profile-info__item-label">
            {{ $t('events') }}
          </div>
          <div class="profile-info__item-value">
            456
          </div>
        </div>
      </div>
      <div class="profile-info__nav">
        <ul class="profile-info__nav-list">
          <li class="profile-info__nav-item">
            <nuxt-link to="workspace" class="profile-info__nav-link">
              <span class="profile-info__nav-label">
                <CubeIcon class="profile-info__nav-elem" />
                {{ $t('workspace') }}
              </span>
              <span class="profile-info__nav-icon">
                <ArrowIcon />
              </span>
            </nuxt-link>
          </li>
          <li class="profile-info__nav-item">
            <nuxt-link to="team-chat" class="profile-info__nav-link">
              <span class="profile-info__nav-label">
                <CommentIcon class="profile-info__nav-elem"/>
               {{ $t('teamChat') }}
              </span>
              <span class="profile-info__nav-icon">
                <ArrowIcon />
              </span>
            </nuxt-link>
          </li>
          <li class="profile-info__nav-item">
            <nuxt-link to="team-view" class="profile-info__nav-link">
              <span class="profile-info__nav-label">
                <CalendarIcon class="profile-info__nav-elem"/>
                 {{ $t('operation') }}
              </span>
              <span class="profile-info__nav-icon">
                <ArrowIcon />
              </span>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import ArrowIcon from '~/components/icons/common/arrow'
import CubeIcon from '~/components/icons/profile/cube'
import CommentIcon from '~/components/icons/profile/comment'
import CalendarIcon from '~/components/icons/profile/calendar'
import UsersIcon from '~/components/icons/profile/users'
import PenIcon from '~/components/icons/profile/pen'

export default {
  name: 'info-profile-links-team',

  components: {
    ArrowIcon,
    CubeIcon,
    CommentIcon,
    CalendarIcon,
    UsersIcon,
    PenIcon,
  }
}
</script>

<style lang="scss" scoped>
.profile-info {
  padding-bottom: 20px;
  margin-bottom: 28px;
  &__rate {
    margin-bottom: 7px;
    font-weight: 500;
    font-size: 18px;
    &-wrap {
      display: flex;
      align-items: center;
      max-width: 250px;
      margin-bottom: 18px;
    }
    &-item {
      width: 50%;
      text-align: center;
      padding: 0 20px 0 10px;
      &:first-child {
        border-right: 1px solid $thirdlyGray;
      }
    }
    &-elem {
      font-weight: 500;
      color: $secondaryGray;
    }
  }
}
</style>
