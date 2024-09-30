<template>
  <div class="map-real-estate-single">
    <div class="map-real-estate-pin"></div>
    <div class="real-estate-single">
      <nuxt-link to="real-estate-info" class="real-estate-single__features-wrap">
        <img src="~/assets/img/map/estate-single.jpg" alt="">
        <span class="real-estate-single__features">
          <span class="real-estate-single__feature">
            2 {{ $t('bath') }} / 2 {{ $t('bed') }}
          </span>
        </span>
      </nuxt-link>
      <div class="real-estate-single__descr">
        <nuxt-link to="real-estate-info" class="real-estate-single__title" >
          {{ $t('single_family_home') }}
        </nuxt-link>
        <div class="real-estate-single__price">
          350.000$
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'map-real-estate-single'
  }
</script>

<style lang="scss" scoped>
  .map-real-estate-single {
    position: absolute;
    top: 60%;
    left: 25%;
  }
  .map-real-estate-pin {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: $baseBlack;
    border: 3px solid $baseWhite;
    cursor: pointer;
    margin: 0 auto 10px;
  }
  .real-estate-single {
    display: flex;
    border-radius: $border-5;
    overflow: hidden;
    min-height: 78px;
    min-width: 291px;
    &__features-wrap {
      width: 45%;
      position: relative;
      height: 100%;
      min-height: 80px;
      display: flex;
      padding: 10px;
      color: $baseWhite;
      img {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        z-index: -1;
      }
    }
    &__features {
      display: flex;
    }
    &__feature {
      width: 100%;
      background: rgba(255, 255, 255, 0.3);
      border-radius: 15px;
      padding: 5px 17px 4px;
      font-size: 11px;
      line-height: 13px;
      margin-top: auto;
    }
    &__descr {
      width: 55%;
      background: $baseWhite;
      padding: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    &__title {
      font-weight: 600;
      font-size: 12px;
      letter-spacing: 0.07px;
      text-transform: uppercase;
      transition: all .3s ease;
      margin-bottom: 4px;
      &:hover {
        color: $baseOrange;
      }
    }
    &__price {
      font-weight: 600;
      font-size: 17px;
      letter-spacing: -0.41px;
    }
  }
</style>
