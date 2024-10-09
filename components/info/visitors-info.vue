<template>
  <div class="team">
    <div class="team__header">
      <div class="settings-section__title">
        {{ $t('my_visitors') }}
      </div>
    </div>
    <div class="users-items">
      <div
        v-for="visitor in users"
        :key="visitor.id"
        class="user-item"
      >
        <div class="user-item__details">
          <div class="user-item__img">
            <nuxt-link
              to="agent-info"
              v-if="visitor.img"
            >
              <img
                :src="require(`~/assets/img/agent/${visitor.img}`)" alt=""
              />
            </nuxt-link>
          </div>
          <div class="user-item__info">
            <nuxt-link to="agent-info" class="user-item__name">
              {{visitor.name || ''}}
            </nuxt-link>
            <div class="user-item__descr">
              {{visitor.descr}}
            </div>
          </div>
        </div>
        <div class="user-btn-wrap">
          <nuxt-link to="agent-info" class="btn-default blank">
            Go to Profile
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  name: 'visitors-info',

  computed: {
    ...mapGetters("users",["users"]),
  },

  async fetch() {
    await this.$store.dispatch('users/getUsers')
  }

}
</script>

<style lang="scss" scoped>
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
  .user-btn-wrap {
    button, a {
      text-transform: uppercase;
      white-space: nowrap;
    }
  }
</style>
