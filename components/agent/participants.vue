<template>
  <div class="agent__profile items">
    <div class="profile-info__header">
      <div class="default-title">
        {{ $t('the_participants') }}
      </div>
      <div class="profile-info__icon">
        <AddUserIcon />
      </div>
    </div>
    <div class="profile-info__section">
      <div class="profile-info__section-title">
        {{ $t('cooperation_team') }}
      </div>
      <div class="item-users__list">
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
                <span
                  v-if="agent.isOnline"
                  class="item-status"
                />
              </nuxt-link>
          </div>
          <div class="item__info">
            <nuxt-link to="agent-info"
              class="item__name"
            >
              {{agent.name || ''}}
            </nuxt-link>
            <div class="item__position">
              {{agent.position}}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="profile-info__section">
      <div class="profile-info__section-title">
        {{ $t('notaries')}}
      </div>
      <div class="item-users__list">
        <div class="item">
          <div
            class="item__img-wrap"
          >
            <nuxt-link to="agent-info" class="item__img">
              <img
                src="~/assets/img/trusted/trusted11.jpg" alt=""
              />
              <span class="item-status" />
            </nuxt-link>
          </div>
          <div class="item__info">
            <nuxt-link to="agent-info" class="item__name">
              Corey Westervelt
            </nuxt-link>
            <div class="item__position">
              {{ $t('notary') }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="profile-info__section">
      <div class="profile-info__section-title">
        {{ $t('banks') }}
      </div>
      <div class="item-users__list">
        <div class="item">
          <div
            class="item__img-wrap"
          >
            <nuxt-link to="agent-info" class="item__img">
              <img
                src="~/assets/img/trusted/trusted12.jpg" alt=""
              />
            </nuxt-link>
          </div>
          <div class="item__info">
            <nuxt-link to="agent-info" class="item__name">
              Cooper Press
            </nuxt-link>
            <div class="item__position">
              Bank Manager
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="profile-info__section">
      <div class="profile-info__section-title">
        Lawyer
      </div>
      <div class="item-users__list">
        <div class="item no-border">
          <div
            class="item__img-wrap"
          >
            <nuxt-link to="agent-info" class="item__img">
              <img
                src="~/assets/img/trusted/trusted13.jpg" alt=""
              />
            </nuxt-link>
          </div>
          <div class="item__info">
            <nuxt-link to="agent-info" class="item__name">
              Maren Levin
            </nuxt-link>
            <div class="item__position">
              Lawyer
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AddUserIcon from '~/components/icons/common/add-user'
export default {
  name: 'info-profile-participants',

  components: {
    AddUserIcon
  },

  data() {
    return {
      agents: [
        { id: 1, img: "trusted1", name : "Cooper Vaccaro", position: 'Real estate agent', isOnline : true },
        { id: 2, img: "trusted10", name : "Ruben Bothman", position: 'Real estate agent', isOnline : true },
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
  @import  '~/assets/css/sidebar/items.scss';
  .profile-info {
    &__header {
      justify-content: space-between;
      align-items: center;
    }
    &__icon {
      width: 50px;
      height: 50px;
      border-radius: $border-5;
      display: flex;
      align-items: center;
      justify-content: center;
      background: $baseWhite;
      cursor: pointer;
      transition: all .3s ease;
      &:hover {
        transform: translateY(-2px);
      }
    }
    &__section {
      &-title {
        font-weight: 600;
        margin-bottom: 28px;
      }
    }
  }
  .item {
    &-status {
      position: absolute;
      bottom: -2px;
      right: -1px;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: $baseGreen;
      border: 2px solid $lightWhite;
    }
    &__img-wrap {
      position: relative;
    }
    &__position {
      font-weight: normal;
      font-size: 13px;
      color: $defaultGray;
    }
  }
  .agent__profile {
    &.items .item:last-child {
      padding-bottom: 20px;
      border-bottom: 1px solid $thirdlyGray;
      margin-bottom: 20px;
    }
    &.items .item.no-border {
      border: 0;
      padding-bottom: 0;
      margin-bottom: 0;
    }
  }
</style>
