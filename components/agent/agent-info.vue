<template>
  <div class="agent-info">
    <div class="info-content">
      <div class="info-content__section">
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
            {{ $t('skills') }}
          </h2>
          <button type="button" class="info-content__show-all btn-default">
            {{ $t('show_all') }}
            <span>
              (12)
            </span>
          </button>
        </div>
        <div class="info-content__items">
          <div class="info-content__item">
            <div class="info-content__item-inner">
              <div class="info-content__item-header">
                <div class="info-content__item-title">
                  {{ $t('languages') }}
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
                  {{ $t('services_business_process') }}
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
      <div class="info-content__section">
        <div class="info-content__section-info">
          <h2 class="info-content__title mb">
            {{ $t('experience') }}
          </h2>
          <nuxt-link to="experience" class="info-content__add-btn">
            <AddIcon />
          </nuxt-link>
        </div>
        <div class="info-experience__section">
          <div class="info-experience">
            <div class="info-experience__header">
              <div class="info-experience__img">
                <img src="~/assets/img/agent/exp1.jpg" alt="">
              </div>
              <div class="info-experience__info">
                <div class="info-experience__title">
                  Sole trader as a real estate agent
                </div>
                <div class="info-experience__details">
                  <div class="info-experience__item">
                    <UserIcon />
                    <div class="info-experience__item-label">
                      {{ $t('self_employed') }}
                    </div>
                  </div>
                  <div class="info-experience__item">
                    <AddressIcon />
                    <div class="info-experience__item-label">
                      {{ $t('around_world') }}
                    </div>
                  </div>
                  <div class="info-experience__item">
                    <CalendarIcon />
                    <div class="info-experience__item-label">
                      Jun 2016 —  {{ $t('present') }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="info-content__descr">
              <p>{{ $t('experience.text') }}</p>
            </div>
          </div>
        </div>
        <div class="info-experience__section">
          <div class="info-experience">
            <div class="info-experience__header">
              <div class="info-experience__img">
                <img src="~/assets/img/agent/exp2.jpg" alt="">
              </div>
              <div class="info-experience__info">
                <div class="info-experience__title">
                  Sole trader as a real estate agent
                </div>
                <div class="info-experience__details">
                  <div class="info-experience__item">
                    <UserIcon />
                    <div class="info-experience__item-label">
                      {{ $t('self_employed') }}
                    </div>
                  </div>
                  <div class="info-experience__item">
                    <AddressIcon />
                    <div class="info-experience__item-label">
                      {{ $t('around_world') }}
                    </div>
                  </div>
                  <div class="info-experience__item">
                    <CalendarIcon />
                    <div class="info-experience__item-label">
                      Jun 2016 — {{ $t('present') }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="info-content__descr">
              <p>{{ $t('experience.text') }}</p>
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
import AddIcon from  '~/components/icons/property/add'
  export default {
    name: 'agent-info-section',

    components: {
      UserIcon,
      CalendarIcon,
      AddressIcon,
      LikesIcon,
      CommentsIcon,
      AddIcon
    }

  }
</script>

<style lang="scss" scoped>
@import "~/assets/css/posts/posts-list";
.info-content {
  &__add-btn {
    width: 75px;
    height: 48px;
    border-radius: $border-5;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all .3s ease;
    margin-left: 35px;
    margin-bottom: 29px;
    border: 1px solid $baseBlack;
    &:hover {
      transform: translateY(-2px);
    }
  }
  &__section-info {
    display: flex;
    align-items: center;
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
