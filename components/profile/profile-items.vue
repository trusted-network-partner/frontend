<template>
  <div class="profile__items">
    <div
      v-for="(item, index) in profileItems"
      :key="index"
      class="profile__item-wrap"
    >
      <div
        class="profile__item"
      >
        <div class="profile__item-pic">
          <div v-if="item.img">
            <img :src="require(`~/assets/img/profile/${item.img}`)" alt="">
          </div>
        </div>
        <div class="profile__item-title">
          {{ $t(item.name) || ''}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'profile-items',

    data() {
      return {
        profileItems: [
          {
            id: 0,
            img: 'blank.jpg',
            name: 'agency'
          },
          {
            id: 1,
            img: 'blank.jpg',
            name: 'speed_internet'
          },
          {
            id: 2,
            img: 'blank.jpg',
            name: 'speed_internet'
          },
          {
            id: 3,
            img: 'blank.jpg',
            name: 'speed_internet'
          },
        ]
      }
    }
  }
</script>
