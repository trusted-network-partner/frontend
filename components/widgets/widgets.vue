<template>
  <div class="widgets">
<!--    <div-->
<!--      v-if="isVisitorsShown"-->
<!--      class="widgets__items-wrap"-->
<!--    >-->
<!--      <div-->
<!--        class="close r-5"-->
<!--        @click="isVisitorsShown =  false"-->
<!--      >-->
<!--        <CloseIcon />-->
<!--      </div>-->
<!--      <div class="widgets__item-title">-->
<!--        visitors-->
<!--      </div>-->
<!--      <div class="widgets__items">-->
<!--        <nuxt-link to="chat" class="widgets__item">-->
<!--          <img src="~/assets/img/trusted/trusted1.png" alt="">-->
<!--          <span class="widgets__item-element"></span>-->
<!--        </nuxt-link>-->
<!--        <nuxt-link to="chat" class="widgets__item">-->
<!--          <img src="~/assets/img/trusted/trusted2.png" alt="">-->
<!--        </nuxt-link>-->
<!--        <nuxt-link to="chat" class="widgets__item">-->
<!--          <img src="~/assets/img/trusted/trusted3.png" alt="">-->
<!--          <span class="widgets__item-element"></span>-->
<!--        </nuxt-link>-->
<!--      </div>-->
<!--    </div>-->
    <div
      v-if="isChatShown"
      class="widgets__items-wrap"
    >
      <div
        class="close"
        @click="isChatShown =  false"
      >
        <CloseIcon />
      </div>
      <div class="widgets__item-title">
        {{ $t('nav.chat') }}
      </div>
      <div class="widgets__items">
        <nuxt-link to="chat" class="widgets__item">
          <img src="~/assets/img/trusted/trusted1.png" alt="">
          <span class="widgets__item-element"></span>
        </nuxt-link>
        <nuxt-link to="chat" class="widgets__item">
          <img src="~/assets/img/trusted/trusted2.png" alt="">
        </nuxt-link>
      </div>
    </div>
  </div>

</template>

<script>
import CloseIcon from '~/components/icons/common/close'
  export default {
    name: 'widgets',

    components: {
      CloseIcon
    },

    data() {
      return {
        isVisitorsShown: true,
        isChatShown:  true
      }
    }
  }
</script>

<style lang="scss" scoped>
  .close.r-5 {
    right: 0;
  }
  .widgets {
    display: flex;
    flex-direction: column;
    max-width: 105px;
  &__items-wrap {
     border-radius: $border-5;
     background: $lightWhite;
     display: inline-block;
     padding: 15px 20px 22px;
     margin-bottom: 32px;
  &:last-child {
     margin-bottom: 0;
   }
  }
  &__items {
     display: flex;
     flex-direction: column;
     align-items: center;
   }
  &__item-title {
     text-align: center;
     font-weight: bold;
     font-size: 14px;
     text-transform: uppercase;
     margin-bottom: 18px;
   }
  }

  .widgets__item {
    position: relative;
    overflow: hidden;
    width: 60px;
    height: 60px;
    border-radius: $border-5;
    margin-bottom: 11px;
  &:last-child {
     margin-bottom: 0;
   }
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &-element {
     width: 12px;
     height: 12px;
     border-radius: 50%;
     background: $lightGreen;
     border: 2px solid $baseWhite;
     position: absolute;
     right: -1px;
     bottom: -1px;
   }
  }

  //.widgets {
    //  position: fixed;
    //  right: 100px;
    //  top: 50%;
    //  transform: translateY(-50%);
    //}

  .widgets__items-wrap {
    position: relative;
    .close {
      cursor: pointer;
      position: absolute;
      top: 13px;
      right: 6px;
      transition: all .3s ease;
      opacity: 0;
    }
    &:hover {
      .close {
        opacity: 1;
      }
    }
  }
</style>
