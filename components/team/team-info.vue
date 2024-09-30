<template>
  <div class="team">
    <div class="team__header">
      <div class="settings-section__title">
        {{ $t('my_team') }}
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
        <div class="user-btn-wrap">
          <button
            type="button"
            :class="{'btn-default' : user.isPartner , 'btn-default blank' : !user.isPartner }"
            @click="user.isPartner = !user.isPartner"
          >
            {{user.isPartner ? $t('remove') : $t('add_to_partner')}}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'team-info',

    data() {
      return {
        users: []
      }
    },

    async fetch() {
      this.users = await this.$store.dispatch('users/fetchUsers')
      // this.users = await this.$store.dispatch('users/getUsers')
    },

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
    min-width: 185px;
    button {
      text-transform: uppercase;
    }
  }
</style>
