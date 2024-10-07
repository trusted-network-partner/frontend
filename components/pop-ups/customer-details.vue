<template>
  <div class="pop-up-wrap" v-if="isOpen">
    <div class="pop-up-wrap__inner">
      <div class="overlay" @click="popUpClose" />
      <div class="pop-up pop-up-type-inquiry pop-up-date">
        <div class="pop-up__header">
          <div class="default-title">
            {{ $t("details") }}
          </div>
          <div @click="popUpClose">
            <CloseBigIcon />
          </div>
        </div>
        <div class="customer-info-wrap">
          <div class="customer-info">
            <nuxt-link to="agent-info" class="customer-info__img">
              <img src="~/assets/img/agent/member2.jpg" alt="" />
            </nuxt-link>
            <div class="customer-info__details">
              <nuxt-link to="agent-info" class="customer-info__title">
                Audrey Alexander
              </nuxt-link>
              <div class="customer-info__item">
                <div class="customer-info__item-icon">
                  <TelIcon />
                </div>
                <a href="tel:+380000000000" class="customer-info__item-link">
                  +380000000000
                </a>
              </div>
              <div class="customer-info__item">
                <div class="customer-info__item-icon">
                  <MailIcon />
                </div>
                <a
                  href="mailto:audrey@gmail.com"
                  class="customer-info__item-link"
                >
                  audrey@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div class="customer-property">
            <div class="customer-property__header">
              <div class="default-title">
                {{ $t("properties") }}
              </div>
              <button type="button" class="customer-info__btn">
                {{ $t("show_all") }}
              </button>
            </div>
            <div class="customer-property__item">
              <nuxt-link to="real-estate-info" class="customer-property__title">
                Villa in first line of the beach
              </nuxt-link>
              <div class="customer-property__info">
                <div class="customer-property__info-item">
                  <AddressIcon />
                  <div class="customer-property__info-text">
                    Torrevieja, Spain
                  </div>
                </div>
                <div class="customer-property__info-item">
                  <div class="customer-property__info-text">
                    Calle Finlandia 10 3ºB Torrevieja 03183
                  </div>
                </div>
              </div>
            </div>
            <div class="customer-property__item">
              <nuxt-link to="real-estate-info" class="customer-property__title">
                Penthouse in the center of the city h
              </nuxt-link>
              <div class="customer-property__info">
                <div class="customer-property__info-item">
                  <AddressIcon />
                  <div class="customer-property__info-text">
                    Torrevieja, Spain
                  </div>
                </div>
                <div class="customer-property__info-item">
                  <div class="customer-property__info-text">
                    Calle Finlandia 10 3ºB Torrevieja 03183
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="customer-agent">
            <div class="customer-agent__header">
              <div class="default-title">
                {{ $t("agent") }}
              </div>
            </div>
            <div class="customer-agent__item">
              <nuxt-link to="agent-info" class="customer-agent__img">
                <img src="~/assets/img/agent/user-big.jpg" alt="" />
              </nuxt-link>
              <div class="customer-agent__info">
                <nuxt-link to="agent-info" class="customer-agent__title">
                  Ruben Bothman
                </nuxt-link>
                <div class="customer-agent__details">
                  <div class="customer-agent__details-item">
                    <a
                      href="tel:+34677130650"
                      class="customer-agent__details-text"
                    >
                      +34 677 130 650
                    </a>
                  </div>
                  <div class="customer-agent__details-item">
                    <a
                      href="mailto:ruben.bothman@gmail.com"
                      class="customer-agent__details-text"
                    >
                      ruben.bothman@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              <nuxt-link to="agent-info" type="button">
                <ArrowIcon />
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CloseBigIcon from "~/components/icons/common/close-big";
import TelIcon from "~/components/icons/user/tel";
import MailIcon from "~/components/icons/user/mail";
import AddressIcon from "~/components/icons/common/address";
import ArrowIcon from "~/components/icons/common/arrow";
export default {
  name: "customer-details",

  components: {
    CloseBigIcon,
    TelIcon,
    MailIcon,
    AddressIcon,
    ArrowIcon
  },

  data() {
    return {
      isOpen: false
    };
  },

  methods: {
    open() {
      this.isOpen = true;
    },
    popUpClose() {
      this.isOpen = false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/default/pop-ups";
.customer-info {
  display: flex;
  align-items: center;
  padding-bottom: 33px;
  border-bottom: 1px solid $thirdlyGray;
  margin-bottom: 33px;
  &__btn {
    margin-bottom: 30px;
    font-weight: 600;
    font-size: 13px;
    text-transform: uppercase;
    text-decoration: underline;
    color: $baseOrange;
    transition: all 0.3s ease;
    &:hover {
      transform: translateY(-2px);
    }
  }
  &__img {
    border-radius: 8px;
    overflow: hidden;
    width: 115px;
    height: 115px;
    position: relative;
    margin-right: 30px;

    @include maxMedia($breakpoint-md) {
      margin-right: 15px;
    }
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &__details {
    flex: 1 1 auto;
  }
  &__title {
    font-weight: bold;
    font-size: 22px;
    transition: all 0.3s ease;
    display: inline-block;
    margin-bottom: 20px;
    @include maxMedia($breakpoint-md) {
      font-size: 16px;
    }
    &:hover {
      color: $baseOrange;
    }
  }
  &__item {
    display: flex;
    align-items: center;
    margin-bottom: 18px;
    &:last-child {
      margin-bottom: 0;
    }
    &-icon {
      width: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 20px;
    }
    &-link {
      transition: all 0.3s ease;
      letter-spacing: -0.1px;
      color: $secondaryGray;
      font-size: 16px;
      @include maxMedia($breakpoint-md) {
        font-size: 14px;
      }
      &:hover {
        color: $baseOrange;
      }
    }
  }
}
.customer-property {
  &__info {
    display: flex;
    align-items: center;
    &-text {
      font-size: 14px;
      color: $defaultGray;
    }
    &-item {
      display: flex;
      align-items: center;
      padding-right: 15px;
      margin-right: 15px;
      position: relative;
      svg {
        margin-right: 10px;
      }
      &:after {
        content: "";
        width: 4px;
        height: 4px;
        position: absolute;
        background: $defaultGray;
        border-radius: 50%;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
      }
      &:last-child {
        padding-right: 0;
        margin-right: 0;
        &:after {
          display: none;
        }
      }
    }
  }
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__item {
    padding-bottom: 25px;
    margin-bottom: 26px;
    border-bottom: 1px solid $thirdlyGray;
  }
  &__title {
    font-weight: bold;
    transition: all 0.3s ease;
    margin-bottom: 10px;
    display: inline-block;
    &:hover {
      color: $baseOrange;
    }
  }
}
.customer-agent {
  &__item {
    display: flex;
    align-items: center;
    position: relative;
  }
  &__img {
    position: relative;
    width: 60px;
    height: 60px;
    border-radius: 8px;
    overflow: hidden;
    margin-right: 20px;

    @include maxMedia($breakpoint-md) {
      margin-right: 15px;
    }

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &__info {
    flex: 1 1 auto;
  }
  &__title {
    transition: all 0.3s ease;
    margin-bottom: 8px;
    display: inline-block;
    font-weight: 600;

    @include maxMedia($breakpoint-md) {
      font-size: 16px;
    }
    &:hover {
      color: $baseOrange;
    }
  }
  &__details {
    display: flex;
    align-items: center;

    @include maxMedia($breakpoint-md) {
      flex-direction: column;
      align-items: flex-start;
    }
    &-text {
      font-size: 14px;
      color: $defaultGray;
      transition: all 0.3s ease;

      @include maxMedia($breakpoint-md) {
        font-size: 12px;
      }
      &:hover {
        color: $baseOrange;
      }
    }
    &-item {
      padding-right: 12px;
      margin-right: 12px;
      position: relative;
      &:after {
        content: "";
        position: absolute;
        width: 4px;
        height: 4px;
        background: $defaultGray;
        border-radius: 50%;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
      }
      &:last-child {
        padding-right: 0;
        margin-right: 0;
        &:after {
          display: none;
        }
      }
    }
  }
}
</style>
