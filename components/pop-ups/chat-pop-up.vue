<template>
  <div
    v-if="isShown"
    class="pop-up-wrap"
  >
    <div class="pop-up-wrap__inner">
      <div
        class="overlay"
        @click="popUpClose"
      />
      <div class="pop-up pop-up-type-inquiry">
        <div class="pop-up__header">
          <div class="default-title">
           {{ $t('create_room') }}
          </div>
          <div
            @click="popUpClose"
          >
            <CloseBigIcon />
          </div>
        </div>
        <div class="search expanded">
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
        <div class="chat-users__list items">
          <div
            v-for="(agent, index) in agents"
            :key="index"
            class="item"
          >
            <div
              class="item__img-wrap"
            >
              <nuxt-link to="agent-info"
                v-if="agent.img"
                class="item__img"
              >
                <img
                  :src="require(`~/assets/img/trusted/${agent.img}.jpg`)" alt=""
                />
              </nuxt-link>
            </div>
            <div class="item__info">
              <nuxt-link to="agent-info"
                class="item__name"
              >
                {{agent.name || ''}}
              </nuxt-link>
              <div class="item__message">
                {{$t(agent.position)}}
              </div>
            </div>
            <label class="content-form__item-label">
              <input
                type="checkbox"
                :checked="agent.checked"
                @click="agent.checked = !agent.checked"
              >
              <span class="content-form__item-check">
                <CheckIcon />
              </span>
            </label>
          </div>
        </div>
        <div class="pop-up-btn">
          <div class="btn-default black">{{ $t('add') }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CloseBigIcon from '~/components/icons/common/close-big'
import CheckIcon from '~/components/icons/common/check'
import SearchIcon from '~/components/icons/header/search'
export default {
  name: 'create-room-pop-up',

  components: {
    CloseBigIcon,
    CheckIcon,
    SearchIcon
  },

  data() {
    return {
      isShown: false,
      searchValue: '',
      agents: [
        { id: 1, img: "trusted4", name : "Theresa Steward", position: 'agent.position', checked: false },
        { id: 2, img: "trusted1", name : "Cooper Vaccaro", position: 'agent.position', checked: false },
        { id: 3, img: "trusted3", name : "Jordyn Lipshutz", position: 'agent.position', checked: false },
        { id: 4, img: "trusted2", name : "Livia Mango", position: 'agent.position', checked: false },
        { id: 6, img: "trusted6", name : "Audrey Alexander", position: 'developer_manager', checked: false },
        { id: 7, img: "trusted7", name : "Idealista", position: 'estate_listing',  checked: false }
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
  @import  '~/assets/css/sidebar/items.scss';
  @import "~/assets/css/default/pop-ups";
  .pop-up {
    &-wrap__inner {
      z-index: 10;
    }
    &-type-inquiry {
      padding: 40px 55px;
    }
    &-btn {
      max-width: 235px;
      margin: 35px auto 0;
    }
  }
  .items {
    padding: 0;
    background: transparent;
  }
  .item {
    transition: all .3s ease;
    &__name {
      transition: all .3s ease;
      padding-right: 0;
      &:hover {
        color: $baseOrange;
      }
    }
    &:hover {
      transform: scale(.98);
    }
  }
  .search.expanded {
    max-width: 100%;
    margin-bottom: 30px;
    .search__btn {
      margin-right: 0;
      svg {
        width: 15px;
        height: 15px;
      }
    }
    .search__form-input {
      border-left: 0;
    }
  }
  .btn-default {
    cursor: pointer;
    width: 100%;
    max-width: 100%;
  }
</style>
