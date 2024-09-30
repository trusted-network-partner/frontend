<template>
  <div class="event-info">
    <div class="event-info__banner">
      <img src="~/assets/img/profile/banner.jpg" alt="">
      <button class="event-info__banner-edit">
        <PenIcon />
      </button>
    </div>
    <div class="event-info__header">
      <div class="event-info__left">
        <div class="event-info__img">
          <img src="~assets/img/info/events/event.jpg" alt="">
        </div>
        <div class="event-info__main">
          <h2 class="event-info__name">
            {{ $t('community_name') }}
          </h2>
        </div>
      </div>
      <div class="event-info__right">
        <div class="event-info__btns">
          <button
            type="button"
            class="btn-default"
            :class="{'black': !isFollow}"
            @click="isFollow = !isFollow"
          >
            {{isFollow ?  $t('unfollowing') : $t('following')}}
          </button>
        </div>
      </div>
    </div>
    <div class="event-info__about">
      <div class="event-info__about-title">
        {{ $t('about') }}
      </div>
      <p class="event-info__descr">
        {{ $t('event.about_descr') }}
      </p>
      <button type="button" class="post__more-btn"> {{ $t('read_more') }}</button>
    </div>
    <PostEvent />
  </div>
</template>

<script>
import PenIcon from '~/components/icons/profile/pen'
import CalendarIcon from '~/components/icons/profile/calendar'
import PostEvent from '~/components/info/event-posts'

export default {
  name: 'group-details',

  components: {
    PenIcon,
    CalendarIcon,
    PostEvent
  },

  data() {
    return {
      isFollow: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/css/info/events";
</style>
