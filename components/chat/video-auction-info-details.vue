<template>
  <div class="video__conference">
    <div class="chat-info video__info">
      <div class="chat-info__header">
        <div class="chat-info__header-tabs">
          <button
            v-for="(tab, index) in tabs"
            @click="currentTab = index"
            :key="index"
            class="chat-info__header-tab"
            :class="{'chat-info__tab_active': currentTab === index}"
          >
            {{ $t(tab.label) }}
          </button>
        </div>
        <div class="chat-info__media">
          <div class="swiper-button-prev">
            <ArrowBack />
          </div>
          <div class="swiper-button-next">
            <ArrowBack />
          </div>
        </div>
      </div>
      <client-only>
        <!-- <swiper
          ref="mySwiper"
          :options="swiperOption"
        >
          <swiper-slide>
            <div  v-if="currentTab === 0">
              <div class="video__conference-details__body">
                <div class="video__conference-details__item">
                  <div class="video__conference-details__title">{{ $t('details_about_auction') }}</div>
                  <div class="video__conference-details__table">
                    <div class="video__conference-details__column video__conference-details__column-first">
                      <span>{{ $t('ref') }}</span>
                      <span>{{ $t('year_of_build') }}</span>
                      <span>{{ $t('price') }}</span>
                      <span>{{ $t('features') }}</span>
                    </div>
                    <div class="video__conference-details__column video__conference-details__column-second">
                      <span>TN2021</span>
                      <span>2012</span>
                      <span>303.000€</span>
                      <span>Pool, garage, garden</span>
                    </div>

                  </div>
                </div>
                <div class="video__conference-details__item pb_less">
                  <div class="video__conference-details__title">
                    {{ $t('contact_information') }}
                  </div>
                  <div class="user-info">
                    <nuxt-link to="agent-info" class="user-info__img">
                      <img src="~/assets/img/agent/user-big.jpg" alt="">
                    </nuxt-link>
                    <div class="user-info__details">
                      <nuxt-link to="agent-info" class="user-info__name">
                        Pepe Guardiola
                      </nuxt-link>
                      <div class="user-info__descr">
                        {{ $t('agent.position') }}
                      </div>
                      <div class="user-info__contacts">
                        <div class="user-info__contacts-phone">+34 677 130 650</div>
                        <div class="user-info__contacts-email">ruben.bothman@gmail.com</div>
                      </div>
                    </div>
                  </div>
                  <div class="video__conference-details-interactions">
                    <button class="btn-default black">{{ $t('send_message') }}</button>
                    <a href="#" class="video__conference-details__link">
                      <TelegramIcon />
                    </a>
                    <a href="#" class="video__conference-details__link">
                      <TelIcon />
                    </a>
                    <a href="#" class="video__conference-details__link">
                      <ViberIcon />
                    </a>
                  </div>
                </div>
                <div class="video__conference-details__item">
                  <div class="video__conference-details__title">{{ $t('completed') }}</div>
                  <div class="video__conference-details__progressbar">
                    <div class="video__conference-details__progressbar-line"></div>
                    <span class="video__conference-details__progressbar-value">91%</span>
                  </div>
                  <div class="video__conference-details-info">
                    <div class="video__conference-details-text">
                      Calle Finlandia 10 3ºB Torrevieja 03183
                    </div>
                    <div class="video__conference-details-users">
                      <div class="video__conference-details-users-wrap">
                        <nuxt-link
                          to="agent-info"
                          class="video__conference-details-user"
                        >
                          <img
                            src="~/assets/img/calendar/pic1.png"
                            alt=""
                          >
                        </nuxt-link>
                        <nuxt-link
                          to="agent-info"
                          class="video__conference-details-user"
                        >
                          <img
                            src="~/assets/img/calendar/pic2.png"
                            alt=""
                          >
                        </nuxt-link>
                        <nuxt-link
                          to="agent-info"
                          class="video__conference-details-user"
                        >
                          <img
                            src="~/assets/img/calendar/pic3.jpg"
                            alt=""
                          >
                        </nuxt-link>
                        <nuxt-link
                          to="agent-info"
                          class="video__conference-details-user"
                        >
                          <img
                            src="~/assets/img/calendar/pic4.png"
                            alt=""
                          >
                        </nuxt-link>
                        <button type="button" class="video__conference-details-more">
                          <span>
                            +8
                          </span>
                        </button>
                      </div>
                      <div class="video__conference-details-users-count">
                        12 {{ $t('participants') }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              v-if="currentTab === 1"
              class="chat-details"
            >
              <div class="video__conference-feed__item">
                <div class="video__conference-feed__banner">
                  Buy now: 303.000€  <span>+ fees</span>
                </div>
                <div class="video__conference-feed__auction">
                  <div class="video__conference-feed__auction-item">
                    <span class="video__conference-feed__auction-item__text">{{ $t('current_bid') }}:</span>
                    <span class="video__conference-feed__auction-item__value">23.000€</span>
                  </div>
                  <div class="video__conference-feed__auction-item">
                    <span class = "video__conference-feed__auction-item__text">{{ $t('your_bid') }}:</span>
                    <form action="#" class="video__conference-feed__form">
                      <div class="video__conference-feed__form-item">
                        <input type="text" class="video__conference-feed__form-input" value="15.000€">
                      </div>
                      <button class="video__conference-feed__form-button"> {{ $t('bid') }}</button>
                    </form>
                  </div>
                </div>
                <button class="btn-default blank video__conference-feed__auction-button">{{ $t('buy_now') }}</button>
              </div>
              <div class="video__conference-feed__item">
                <div class="video__conference-details__title">{{ $t('sale_information') }}:</div>
                <div class="video__conference-details__table">
                  <div class="video__conference-details__column video__conference-details__column-first">
                    <span>{{ $t('ref') }}</span>
                    <span>{{ $t('year_of_build') }}</span>
                    <span>{{ $t('sale_end') }}</span>

                  </div>
                  <div class="video__conference-details__column video__conference-details__column-second">
                    <span>TN2021</span>
                    <span>2012</span>
                    <span>Jun 23, 2021 02:55 PM</span>
                  </div>
                </div>
              </div>
              <div class="video__conference-feed__item">
                <div class="video__conference-details__title">{{ $t('purchased') }}:</div>
                <div class="video__conference-feed__purchased-item">
                  <div class="user-info">
                    <div class="user-info__img">
                      <img src="~/assets/img/agent/user-big.jpg" alt="">
                    </div>
                    <div class="user-info__details">
                      <div class="user-info__number">
                        <span class="user-info__number-name">#1  Kyle Fisher</span>
                        <span class="user-info__number-time">4:30 PM</span>
                      </div>
                      <div class="user-info__bet">
                        PUT 15.000€
                      </div>
                    </div>
                  </div>
                </div>
                <div class="video__conference-feed__purchased-item">
                  <div class="user-info">
                    <div class="user-info__img">
                      <img src="~/assets/img/agent/user-big.jpg" alt="">
                    </div>
                    <div class="user-info__details">
                      <div class="user-info__number">
                        <span class="user-info__number-name">#2 Theresa Steward</span>
                        <span class="user-info__number-time">4:30 PM</span>
                      </div>
                      <div class="user-info__bet">
                        PUT 15.000€
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            slide 2
          </swiper-slide>
        </swiper> -->
      </client-only>
    </div>
    <div class="video__conference-image">
      <img src="~/assets/img/video-conference/video-conference.png" alt="" class="video__conference-img">
    </div>
  </div>
</template>

<script>
import FileIcon from '~/components/icons/upload/file'
import SendIcon from '~/components/icons/upload/send'
import ArrowBack from '~/components/icons/common/arrow-back'
import TelegramIcon from '~/components/icons/social/telegram'
import TelIcon from '~/components/icons/social/tel'
import ViberIcon from '~/components/icons/social/viber'
export default {
  name: 'video-auction-info',

  components: {
    FileIcon,
    SendIcon,
    ArrowBack,
    TelegramIcon,
    TelIcon,
    ViberIcon
  },

  data() {
    return {
      tabs: [
        {
          label: 'details',
        },
        {
          label: 'news feed',
        }
      ],
      currentTab: 0,
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
    }
  },

  computed: {
    swiper() {
      return this.$refs.$swiper
    }
  },

  methods: {
    handleClick() {
      console.log('success');
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~/assets/css/chat/chat";
  .chat-info__media {
    display: flex;
    align-items: center;
  }
  .swiper {
    &-container {
      width: 100%;
    }
    &-button-prev, &-button-next {
      width: 35px;
      height: 35px;
      border-radius: 3px;
      background: $thirdlyGray;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      svg {
        width: 15px;
        height: 15px;
        fill: $baseBlack;
        path {
          fill: $baseBlack;
        }
      }
    }
    &-button-prev {
      margin: 0 10px;
    }
    &-button-next {
      transform: rotate(180deg);
    }
    &-container, &-slide {
      width: 100%;
    }
  }
</style>
