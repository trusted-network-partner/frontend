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
      <div class="profile-info__details">
        <div class="profile-info__item">
          <div class="profile-info__item-label">
            {{ $t('tabs.events') }}
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
            {{ $t('followers') }}
          </div>
          <div class="profile-info__item-value">
            290
          </div>
        </div>
      </div>
      <div class="profile-info__nav">
        <ul class="profile-info__nav-list">
          <li class="profile-info__nav-item">
            <nuxt-link to="looking-seller" class="profile-info__nav-link">
              <span class="profile-info__nav-label">
                <CubeIcon class="profile-info__nav-elem" />
                {{ $t('looking_seller') }}
              </span>
              <span class="profile-info__nav-icon">
                <ArrowIcon />
              </span>
            </nuxt-link>
          </li>
          <li class="profile-info__nav-item">
            <nuxt-link to="digital-marketing" class="profile-info__nav-link">
              <span class="profile-info__nav-label">
                <CommentIcon class="profile-info__nav-elem"/>
               {{ $t('digital_marketing') }}
              </span>
                <span class="profile-info__nav-icon">
                <ArrowIcon />
              </span>
            </nuxt-link>
          </li>
          <li class="profile-info__nav-item">
            <nuxt-link to="calendar" class="profile-info__nav-link">
              <span class="profile-info__nav-label">
                <CalendarIcon class="profile-info__nav-elem"/>
                 {{ $t('calendar') }}
              </span>
                <span class="profile-info__nav-icon">
                <ArrowIcon />
              </span>
            </nuxt-link>
          </li>
          <li class="profile-info__nav-item">
            <nuxt-link to="customers" class="profile-info__nav-link">
              <span class="profile-info__nav-label">
                <UsersIcon class="profile-info__nav-elem"/>
                {{ $t('customers') }}
              </span>
                <span class="profile-info__nav-icon">
                <ArrowIcon />
              </span>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
    <PopUpDate
      v-if="isDateShown"
      @popUpClose="popUpClose"
    />
  </div>
</template>

<script>
import ArrowIcon from '~/components/icons/common/arrow'
import CubeIcon from '~/components/icons/profile/cube'
import CommentIcon from '~/components/icons/profile/comment'
import CalendarIcon from '~/components/icons/profile/calendar'
import UsersIcon from '~/components/icons/profile/users'
import PenIcon from '~/components/icons/profile/pen'
import PopUpDate from '~/components/pop-ups/date-pop-up'
export default {
  name: 'info-profile-links',

  components: {
    ArrowIcon,
    CubeIcon,
    CommentIcon,
    CalendarIcon,
    UsersIcon,
    PenIcon,
    PopUpDate
  },

  data() {
    return {
      isDateShown: false
    }
  },

  methods: {
    popUpClose() {
      this.isDateShown = false
    }
  }
}
</script>

<style scoped>
  .profile-info {
    padding-bottom: 20px;
  }
</style>
