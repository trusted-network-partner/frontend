<template>
  <div
    v-if="isShown"
    class="pop-up-wrap"
  >
    <div
      class="overlay"
      @click="popUpClose"
    />
    <div class="pop-up pop-up-member">
      <div class="pop-up__header">
        <div class="default-title">
          {{ $t('add_member') }}
        </div>
      </div>
      <div
        class="pop-up__info-wrapper"
      >
        <div class="pop-up__info-list">
          <div
            class="search expanded"
          >
            <form class="search__form" @submit.prevent="handleSubmit">
              <div class="search__btn-wrap">
                <button
                  class="search__btn"
                  type="button"
                  :class="{'active-input': searchValue}"
                >
                  <SearchIcon />
                </button>
              </div>
              <div class="search__form-input">
                <input
                  v-model="searchValue"
                  class="search__input"
                  type="text"
                  name="search-items"
                  placeholder="Name Surname, company"
                >
              </div>
            </form>
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
                    {{$t(user.descr)}}
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
              </div>
            </div>
          </div>
          <div class="pop-up__info-list-btn">
            <button class="btn-default black">{{ $t('confirm') }}</button>
          </div>
        </div>
        <div class="pop-up__info-details">
          <div class="default-title">
            {{ $t('invitation_for_workers') }}
          </div>
          <p class="pop-up__info-details-sub">
            <span class="bold">{{ $t('send_link') }}</span> {{ $t('for_workers') }}
          </p>
          <div class="info-default">
            <label for="user-info" class="info-default__label">{{ $t('email_phone_number') }}</label>
            <input
              type="text"
              name="Email or phone number"
              id="user-info"
              value="podolyanko.s@gmail.com"
              class="info-default__value"
            >
          </div>
          <button type="button" class="add-more">
            <AddIcon />
            <span class="add-more__title">
              {{ $t('add_more') }}
            </span>
          </button>
          <div class="pop-up__info-btns">
            <button class="btn-default black">{{ $t('send_invite') }}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckIcon from '~/components/icons/common/check'
import CloseBigIcon from '~/components/icons/common/close-big'
import SearchIcon from '~/components/icons/header/search'
import AddIcon from '~/components/icons/common/add'
export default {
  name: 'add-member-pop-up',

  components: {
    CheckIcon,
    CloseBigIcon,
    SearchIcon,
    AddIcon
  },

  data() {
    return {
      isShown: false,
      searchValue: '',
      users: [
        { id: 0, img: 'user1.jpg', name: 'Theresa Steward', descr: 'agent.position', checked: false },
        { id: 1, img: 'trusted1.jpg', name: 'Cooper Vaccaro', descr: 'agent.position', checked: false }
      ]
    }
  },

  methods: {
    open() {
      this.isShown = true
    },
    popUpClose() {
      this.isShown = false
    },
    handleSubmit() {
      console.log('success');
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/css/default/pop-ups";
  .pop-up {
    max-width: 1227px;
    width: 100%;
    padding: 35px 44px 63px;
    &-member {
      min-width: 1100px;
    }
    &__info-wrapper {
      display: flex;
      justify-content: space-between;
    }
    &__info-list {
      margin-top: 29px;
      &-btn  {
        display: flex;
        justify-content: center;
      }
      .btn-default {
        min-width: 235px;
        text-transform: uppercase;
      }
    }
    &__info-details-sub {
      margin: 12px 0 20px;
      color: $defaultGray;
      font-size: 14px;
      .bold {
        font-weight: bold;
      }
    }
    &__info-btns {
      display: flex;
      justify-content: center;
      .btn-default {
        min-width: 235px;
      }
    }
  }
  .search {
    margin-bottom: 30px;
    &__form-input {
      border-left: 0;
      padding-left: 0;
    }
  }
  .user {
    &-item {
      padding-bottom: 22px;
      margin-bottom: 22px;
      &:last-child {
        border-bottom: 1px solid $thirdlyGray;
      }
    }
  }
  .users-items {
    margin-bottom: 76px;
  }
  .add-more {
    margin: 18px 0 42px;
    svg {
      margin-right: 5px;
    }
    &__title {
      color: $baseOrange;
      font-weight: 500;
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
    &__icon {
      transition: all .3s ease;
      display: inline-block;
    }
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
      &-bottom {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex: 1 1 auto;
      }
    }
    &__tel, &__email {
      width: 25%;
      padding-right: 5px;
      a {
        transition: all .3s ease;
        display: inline-flex;
        color: $baseGray;
        &:hover {
          color: $baseOrange;
        }
      }
    }
    &__btn-wrap {
      width: 15%;
      display: flex;
      justify-content: flex-end;
      margin-bottom: 3px;
    }
    &__btn {
      color: $baseOrange;
      opacity: 0;
      .user-item__btn-label {
        font-weight: bold;
        margin-right: 10px;
      }
      &:hover {
        .user-item__icon {
          transform: translateX(8px);
        }
      }
    }
    &__status {
      margin-left: 13px;
      padding-left: 20px;
      position: relative;
      &:before {
        content: '';
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background: $baseGray;
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
      }
    }
    &:hover {
      .user-item__btn {
        opacity: 1;
      }
    }
  }
</style>
