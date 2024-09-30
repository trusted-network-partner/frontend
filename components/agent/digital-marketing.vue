<template>
  <div class="digital-marketing">
    <div class="info-content">
      <div class="info-content__section item-custom">
        <div class="info-content__section-header">
          <h2 class="info-content__title">
            {{ $t('marketing_tools') }}
          </h2>
          <button type="button" class="btn-default">
            {{ $t('show_all') }}
            <span>
              (12)
            </span>
          </button>
        </div>
        <div class="marketing-tools">
          <div class="marketing-tools__items">
            <div class="marketing-tools__item">
              <div class="marketing-tools__item-inner">
                <img src="~assets/img/social/google.png" alt="">
              </div>
            </div>
            <div class="marketing-tools__item">
              <div class="marketing-tools__item-inner">
                <img src="~assets/img/social/insta.png" alt="">
              </div>
            </div>
            <div class="marketing-tools__item">
              <div class="marketing-tools__item-inner">
                <img src="~assets/img/social/fb.png" alt="">
              </div>
            </div>
            <div class="marketing-tools__item">
              <div class="marketing-tools__item-inner">
                <img src="~assets/img/social/vk.png" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="info-content__section">
        <h2 class="info-content__title mb-30">
          {{ $t('listing_review') }}
        </h2>
        <div class="post">
          <div class="posts__item">
            <div class="post">
              <div class="company">
                <div class="company__img">
                  <img src="~/assets/img/company/pic1.png" alt="">
                </div>
                <div class="company__info">
                  <nuxt-link to="#" class="company__name">
                    DOM RIA
                  </nuxt-link>
                  <div class="company__details">
                    <div class="company__address-wrap">
                      <AddressIcon />
                      <div class="company__address">
                        {{ $t('ukraine') }}
                      </div>
                    </div>
                    <div class="company__date-wrap">
                      <CalendarIcon />
                      <span class="company__date">
                         {{ $t('on_market') }}
                        <span class="bold">1975</span>
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
          <div class="posts__item">
            <div class="post">
              <div class="company">
                <div class="company__img">
                  <img src="~/assets/img/company/pic2.png" alt="">
                </div>
                <div class="company__info">
                  <nuxt-link to="#" class="company__name">
                    ZILLOW
                  </nuxt-link>
                  <div class="company__details">
                    <div class="company__address-wrap">
                      <AddressIcon />
                      <div class="company__address">
                        {{ $t('ukraine') }}
                      </div>
                    </div>
                    <div class="company__date-wrap">
                      <CalendarIcon />
                      <span class="company__date">
                        {{ $t('on_market') }}
                        <span class="bold">1975</span>
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
export default {
  name: 'digital-marketing-section',

  components: {
    UserIcon,
    CalendarIcon,
    AddressIcon,
    LikesIcon,
    CommentsIcon,
  }

}
</script>

<style lang="scss" scoped>
@import "~/assets/css/posts/posts-list";
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
