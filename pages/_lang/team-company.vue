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
                {{ $t('company') }}
              </div>
              <div class="settings-back__descr">
                {{ $t('company_descr') }}
              </div>
            </div>
          </div>
          <div class="team-wrap">
            <div class="team">
              <div class="team__header">
                <div class="settings-section__title">
                  {{ $t('company_members') }}
                </div>
                <div class="team__btn">
                  <button class="btn-default blank">
                    {{ $t('add_member') }}
                  </button>
                </div>
              </div>
              <div class="users-items">
                <div
                  v-for="user in users"
                  class="user-item"
                >
                  <div class="user-item__details">
                    <div class="user-item__img">
                      <nuxt-link
                        to="agent-info"
                        v-if="user.img"
                      >
                        <img
                          :src="require(`~/assets/img/agent/${user.img}`)" alt=""
                        />
                      </nuxt-link>
                    </div>
                    <div class="user-item__info">
                      <nuxt-link to="agent-info" class="user-item__name">
                        {{user.name || ''}}
                      </nuxt-link>
                      <div class="user-item__descr">
                        {{user.descr}}
                      </div>
                    </div>
                  </div>
                  <div class="user-btns-wrap">
                    <label class="content-form__item-label">
                      <input
                        v-model="user.checked"
                        type="checkbox"
                      >
                      <span
                        class="content-form__item-check"
                      >
                        <CheckIcon
                          v-if="user.checked"
                        />
                      </span>
                    </label>
                    <div class="user-btn__more">
                      <DotsIcon />
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
import CheckIcon from '~/components/icons/common/check'
import DotsIcon from '~/components/icons/common/dots'
export default {
  layout: 'header-underline',

  name: 'team-company',

  head: {
    title: 'Team company'
  },

  components: {
    Widgets,
    ArrowBack,
    PenIcon,
    CheckIcon,
    DotsIcon
  },

  data() {
    return {
      users: [
        { id: 0, img: 'user1.jpg', name: 'Theresa Steward', descr: 'Real estate agent', checked: false },
        { id: 1, img: 'trusted1.jpg', name: 'Cooper Vaccaro', descr: 'Real estate agent', checked: false },
        { id: 2, img: 'trusted3.jpg', name: 'Jordyn Lipshutz', descr: 'Real estate agent', checked: false },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .content-wrap {
    &-full-width {
      margin-bottom: 90px;
      width: 100%;
    }
    &-details {
      max-width: 706px;
    }
  }
  .widgets {
    position: absolute;
    right: -152px;
    top: 16%;
  }
  .content-form__item-label {
    margin-right: 20px;
  }
  .user {
    &-btns-wrap {
      display: flex;
      align-items: center;
    }
    &-btn__more {
      transform: rotate(270deg);
      transition: all .3s ease;
      cursor: pointer;
      &:hover {
        transform:  rotate(270deg) translateY(-2px);
      }
    }
  }
  .user-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 35px;
    border-bottom: 1px solid $thirdlyGray;
    margin-bottom: 30px;
    &:last-child {
      padding-bottom: 25px;
      margin-bottom: 20px;
      border-bottom: 0;
    }
  }
  .user-item__details {
    display: flex;
    align-items: center;
  }
  .user-item__img {
    width: 60px;
    height: 60px;
    border-radius: 8px;
    position: relative;
    margin-right: 20px;
    overflow: hidden;
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .user-item__name {
    transition: all .3s ease;
    display: inline-block;
    font-weight: 600;
    margin-bottom: 6px;
    &:hover {
      color: $baseOrange;
    }
  }
  .user-item__descr {
    font-size: 14px;
    color: $baseGray;
  }
  .user-item {
    padding-bottom: 20px;
    margin-bottom: 20px;
    &__name {
      margin-top: 8px;
    }
    &__img {
      border-radius: 8px;
      overflow: hidden;
    }
    &__details {
      align-items: flex-start;
      width: 100%;
    }
    &__info {
      width: calc(100% - 80px);
      font-size: 14px;
      color: $baseGray;
      &-wrap  {
        width: 35%;
        padding-right: 5px;
      }
    }
  }
</style>
