<template>
  <div class="agent-info">
    <div class="info-content">
      <div class="info-content__section mb-30">
        <h2 class="info-content__title">
          {{ $t('about') }}
        </h2>
        <div class="info-content__descr">
          <p>{{ $t('event.about_descr') }}</p>
          <button type="button" class="info-content__more-btn">
            {{ $t('read_more') }}
          </button>
        </div>
      </div>
      <div class="info-content__section item-custom">
        <div class="info-content__section-header">
          <h2 class="info-content__title">
            {{ $t('performance') }}
          </h2>
          <button
            type="button"
            class="btn-default"
            @click="togglePopUp"
          >
            {{ $t('show_all') }}
            <span>
              (12)
            </span>
          </button>
        </div>
        <div class="info-content__items">
          <div class="info-content__item dropdown">
            <div
              class="info-content__item-inner"
              @click="isDropdownExpanded = !isDropdownExpanded"
            >
              <div class="info-content__item-header">
                <div class="info-content__header-item-inner">
                  <div class="info-content__item-title">
                    {{ $t('languages') }}
                  </div>
                  <div class="info-content__item-amount">
                    6
                  </div>
                </div>
                <div
                  class="info-content__item-icon"
                  :class="{'active': isDropdownExpanded}"
                >
                  <TriangleIcon />
                </div>
              </div>
              <div class="info-content__item-elems">
                <div class="info-content__item-elem">
                  <img src="~/assets/img/agent/pic1.jpg" alt="">
                </div>
                <div class="info-content__item-elem">
                  <img src="~/assets/img/agent/pic2.jpg" alt="">
                </div>
                <div class="info-content__item-elem">
                  <img src="~/assets/img/agent/pic3.jpg" alt="">
                </div>
                <div class="info-content__item-elem">
                  <img src="~/assets/img/agent/pic4.jpg" alt="">
                </div>
                <div class="info-content__item-elem">
                  <img src="~/assets/img/agent/pic5.jpg" alt="">
                </div>
                <button type="button" class="info-content__item-btn info-content__item-elem">
                    <span>
                      +1
                    </span>
                </button>
              </div>
            </div>
            <div
              v-if="isDropdownExpanded"
              class="info-content__dropdown"
            >
              <div
                v-for="language in languages"
                :key="language.id"
                class="info-content__dropdown-item"
              >
                <div class="info-content__dropdown-title">
                  {{ language.title }}
                </div>
                <div class="info-content__dropdown-level">
                  <div
                    v-for="langLevel in langLevels"
                    :key="langLevel.id"
                    class="info-content__dropdown-icon"
                    :class="{'active': language.value === langLevel.value}"
                  >
                   <component
                     :class="langLevel.value"
                     :is="langLevel.icon"
                   />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="info-content__item">
            <div class="info-content__item-inner">
              <div class="info-content__item-header">
                <div class="info-content__item-title">
                  {{ $t('business_knowledge') }}
                </div>
                <div class="info-content__item-amount">
                  6
                </div>
              </div>
              <div class="info-content__item-elems">
                <div class="info-content__item-elem">
                  <img src="~/assets/img/agent/pic1.jpg" alt="">
                </div>
                <div class="info-content__item-elem">
                  <img src="~/assets/img/agent/pic3.jpg" alt="">
                </div>
                <div class="info-content__item-elem">
                  <img src="~/assets/img/agent/pic4.jpg" alt="">
                </div>
                <div class="info-content__item-elem">
                  <img src="~/assets/img/agent/pic5.jpg" alt="">
                </div>
                <button type="button" class="info-content__item-btn info-content__item-elem">
                    <span>
                      +1
                    </span>
                </button>
              </div>
            </div>
          </div>
          <div class="info-content__item">
            <div class="info-content__item-inner">
              <div class="info-content__item-header">
                <div class="info-content__item-title">
                  {{ $t('employees_quality') }}
                </div>
                <div class="info-content__item-amount">
                  6
                </div>
              </div>
              <div class="info-content__item-elems">
                <div class="info-content__item-elem">
                  <img src="~/assets/img/agent/pic4.jpg" alt="">
                </div>
                <div class="info-content__item-elem">
                  <img src="~/assets/img/agent/pic5.jpg" alt="">
                </div>
                <button type="button" class="info-content__item-btn info-content__item-elem">
                    <span>
                      +1
                    </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="info-content__section flex-items">
        <div class="info-content__section-header">
          <h2 class="info-content__title">
            {{ $t('views_members') }}
          </h2>
          <button type="button" class="btn-default">
            {{ $t('show_all') }}
            <span>
              (12)
            </span>
          </button>
        </div>
        <div class="members">
          <div class="members__items">
            <div class="members__item">
              <div class="members__item-inner">
                <nuxt-link
                  to="agent-info"
                  class="members__img"
                >
                  <img src="~/assets/img/agent/member1.jpg" alt="">
                </nuxt-link>
                <div class="members__item-details">
                  <nuxt-link to="agent-info" class="members__item-title">
                    Audrey Alexander
                  </nuxt-link>
                  <div class="members__item-descr">
                    {{ $t('agent.position') }}
                  </div>
                </div>
              </div>
            </div>
            <div class="members__item">
              <div class="members__item-inner">
                <nuxt-link
                  to="agent-info"
                  class="members__img"
                >
                  <img src="~/assets/img/agent/member1.jpg" alt="">
                </nuxt-link>
                <div class="members__item-details">
                  <nuxt-link to="agent-info" class="members__item-title">
                    Audrey Alexander
                  </nuxt-link>
                  <div class="members__item-descr">
                    {{ $t('agent.position') }}
                  </div>
                </div>
              </div>
            </div>
            <div class="members__item">
              <div class="members__item-inner">
                <nuxt-link
                  to="agent-info"
                  class="members__img"
                >
                  <img src="~/assets/img/agent/member1.jpg" alt="">
                </nuxt-link>
                <div class="members__item-details">
                  <nuxt-link to="agent-info" class="members__item-title">
                    Audrey Alexander
                  </nuxt-link>
                  <div class="members__item-descr">
                    {{ $t('agent.position') }}
                  </div>
                </div>
              </div>
            </div>
            <div class="members__item">
              <div class="members__item-inner">
                <nuxt-link
                  to="agent-info"
                  class="members__img"
                >
                  <img src="~/assets/img/agent/member1.jpg" alt="">
                </nuxt-link>
                <div class="members__item-details">
                  <nuxt-link to="agent-info" class="members__item-title">
                    Audrey Alexander
                  </nuxt-link>
                  <div class="members__item-descr">
                    {{ $t('agent.position') }}
                  </div>
                </div>
              </div>
            </div>
            <div class="members__item">
              <div class="members__item-inner">
                <nuxt-link
                  to="agent-info"
                  class="members__img"
                >
                  <img src="~/assets/img/agent/member1.jpg" alt="">
                </nuxt-link>
                <div class="members__item-details">
                  <nuxt-link to="agent-info" class="members__item-title">
                    Audrey Alexander
                  </nuxt-link>
                  <div class="members__item-descr">
                    {{ $t('agent.position') }}
                  </div>
                </div>
              </div>
            </div>
            <div class="members__item">
              <div class="members__item-inner">
                <nuxt-link
                  to="agent-info"
                  class="members__img"
                >
                  <img src="~/assets/img/agent/member1.jpg" alt="">
                </nuxt-link>
                <div class="members__item-details">
                  <nuxt-link to="agent-info" class="members__item-title">
                    Audrey Alexander
                  </nuxt-link>
                  <div class="members__item-descr">
                    {{ $t('agent.position') }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="info-content__section">
        <h2 class="info-content__title mb-30">
          {{ $t('reviews') }}
        </h2>
        <div class="post">
          <div class="posts__item">
            <div class="post">
              <div class="post__author">
                <div class="author">
                  <nuxt-link
                    to="agent-info"
                    class="author__img"
                  >
                    <img src="~/assets/img/agent/review1.jpg" alt="">
                  </nuxt-link>
                  <div class="author__info">
                    <nuxt-link to="agent-info" class="author__name">
                      Theresa Steward
                    </nuxt-link>
                    <div class="author__date-wrap">
                      <CalendarIcon />
                      <span class="author__date">
                        01/01/2021
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="post__body">
                <p class="post__text">
                  {{ $t('experience.text') }}
                </p>
              </div>
              <div class="post__footer">
                <div class="post__stats">
                  <div class="post__likes">
                    <label class="post__likes-label">
                      <input type="checkbox" name="likes" class="post__likes-input">
                      <LikesIcon />
                      <span class="post__likes-count">
                  45
                </span>
                    </label>
                  </div>
                  <div class="post__comments">
                    <button type="button" class="post__comments-link">
                      <CommentsIcon />
                      <span class="post__comments-count">
                  45
                </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserIcon from  '~/components/icons/posts/user'
import AddressIcon from  '~/components/icons/common/address'
import CalendarIcon from  '~/components/icons/profile/calendar'
import LikesIcon from "~/components/icons/posts/likes"
import CommentsIcon from '~/components/icons/posts/comments'
import TriangleIcon from '~/components/icons/common/triangle'
import SmileIcon from '~/components/icons/levels/good'
import FaceIcon from '~/components/icons/levels/normal'
import AngryIcon from '~/components/icons/levels/bad'
export default {
  name: 'about-company-section',

  components: {
    UserIcon,
    CalendarIcon,
    AddressIcon,
    LikesIcon,
    CommentsIcon,
    TriangleIcon,
    SmileIcon,
    FaceIcon,
    AngryIcon
  },

  data() {
    return {
      isDropdownExpanded: false,
      langLevels: [
        {id: 0, icon: 'SmileIcon', value: 'good'},
        {id: 1, icon: 'FaceIcon', value: 'normal'},
        {id: 2, icon: 'AngryIcon', value: 'bad'}
      ],
      languages: [
        {id: 0, title: 'Spanish', value: 'good'},
        {id: 1, title: 'Ukrainian', value: 'normal'},
        {id: 2, title: 'English', value: 'normal'},
        {id: 3, title: 'Russian', value: 'good'},
        {id: 4, title: 'French', value: 'good'},
        {id: 5, title: 'Deutschland', value: 'bad'},
      ]
    }
  },

  methods: {
    togglePopUp() {
      this.$emit('togglePopUp')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/css/posts/posts-list";
.dropdown {
  .info-content {
    &__item-inner {
      cursor: pointer;
    }
    &__header-item-inner {
      display: flex;
      align-items: center;
    }
    &__item-title {
      margin-right: 30px;
    }
    &__item-icon {
      padding: 7px;
      margin-top: -4px;
      margin-right: -4px;
      cursor: pointer;
      transition: all .3s ease;
      &:hover {
        transform: scale(1.5);
      }
      &.active {
        transform: rotate(180deg);
      }
      svg {
        width: 10px;
      }
      svg path {
        fill: $defaultBlack;
      }
    }
    &__dropdown {
      &-title {
        text-transform: uppercase;
      }
      &-level {
        display: flex;
        align-items: center;
      }
      &-icon {
        margin-right: 20px;
        &:last-child {
          margin-right: 0;
        }
      }
      &-item {
        padding: 20px 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid $thirdlyGray;
        &:last-child {
          border-bottom: 0;
        }
      }
    }
  }
}
.post__text {
  font-size: 14px;
  line-height: 180%;
}
.author__date {
  font-size: 14px;
  margin-left: 8px;
  color: $baseGray;
  &-wrap {
    svg {
      height: 14px;
      width: 12px;
    }
  }
}
</style>
