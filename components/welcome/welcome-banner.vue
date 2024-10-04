<template>
  <div class="banner">
    <div class="banner__info">
      <div class="banner__title">
        {{ $t("news.banner_hello") }}, Ruben Bothman!
      </div>
      <p class="banner__text">
        {{ $t("news.banner_descr") }}
      </p>
    </div>
    <div class="banner__img">
      <img src="~/assets/img/welcome/welcome.png" alt="" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.banner {
  display: flex;
  justify-content: space-between;
  background: $lightWhite;
  border-radius: $border-5;
  padding: 50px 60px 0;
  margin-bottom: 63px;
  @include maxMedia($breakpoint-md) {
    padding: 30px;
    flex-direction: column;
  }
  &__img {
    width: 38%;
    margin-bottom: -8px;

    @include maxMedia($breakpoint-md) {
      width: 100%;
  }
    img {
    }
  }
  &__info {
    margin-top: 29px;
    max-width: 455px;
  }
  &__title {
    font-weight: bold;
    font-size: 36px;
    line-height: 130%;
    margin-bottom: 29px;
  }
  &__text {
    font-size: 14px;
    line-height: 180%;
    color: $baseGray;
  }
}
</style>
