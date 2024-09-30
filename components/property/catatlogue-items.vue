<template>
  <div class="profile__items">
    <div
      v-for="(item, index) in profileItems"
      :key="index"
      class="profile__item-wrap"
    >
      <nuxt-link to="/"
        class="profile__item"
      >
        <span class="profile__item-pic">
          <span v-if="item.img">
            <img :src="require(`~/assets/img/catalogue/${item.img}`)" alt="">
          </span>
        </span>
        <div class="profile__item-title">
          {{ $t(item.name) || ''}}
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'catalogue-items',

  data() {
    return {
      profileItems: [
        {
          id: 0,
          img: 'pic1.jpg',
          name: 'Alegria Group Real Estate'
        },
        {
          id: 1,
          img: 'pic2.jpg',
          name: 'Movistar'
        },
        {
          id: 2,
          img: 'pic3.jpg',
          name: 'Lpa Asociation Marbella'
        },
        {
          id: 3,
          img: 'pic4.jpg',
          name: 'Fiabci España'
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .profile__item {
    &-pic {
      display: block;
    }
    &-title {
      transition: all .3s ease;
    }
    &:hover {
      .profile__item-title {
        color: $baseOrange;
      }
    }
  }
</style>
