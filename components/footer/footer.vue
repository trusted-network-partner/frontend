<template>
  <footer class="footer">
    <div class="footer__top">
      <div class="container">
        <div class="footer__top-left">
          <ul class="footer__menu-list">
            <li class="footer__menu-item">
              <nuxt-link to="#" class="footer__menu-link">
                {{ $t("policy") }}
              </nuxt-link>
            </li>
            <li class="footer__menu-item">
              <nuxt-link to="#" class="footer__menu-link">
                {{ $t("terms") }}
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="footer__top-right">
          <Langs @changeLang="changeLang" />
        </div>
      </div>
    </div>
    <div class="footer__bottom">
      <div class="copyright">
        Copyright 2021 Air-State Global S.L
      </div>
    </div>
  </footer>
</template>

<script>
import Langs from "~/components/lang-nav/lang-nav";
export default {
  name: "footer-items",

  components: {
    Langs
  },

  methods: {
    changeLang() {
      this.$emit("changeLang");
    }
  }
};
</script>

<style lang="scss" scoped>
.footer {
  font-size: 12px;
  color: $secondaryGray;
  margin-top: auto;
  &__top {
    padding: 14px 0;
    background: $sixtyGray;
    .container {
      display: flex;
      align-items: center;
      justify-content: space-between;

      @include maxMedia($breakpoint-md) {
        flex-direction: column;
        align-items: flex-start;
      }
    }
    &-right {
      // width: 70%;
      max-width: 944px;
    }
  }
  &__menu-list {
    display: flex;
    align-items: center;
    @include maxMedia($breakpoint-md) {
      justify-content: space-between;
    }
  }
  &__menu-item {
    margin-right: 60px;
    &:last-child {
      margin-right: 0;
    }
  }
  &__menu-link {
    transition: all 0.3s ease;
    color: $secondaryGray;
    &:hover {
      color: $baseOrange;
    }
  }
  &__bottom {
    text-align: center;
    padding: 15px 0 14px;
    background: $baseWhite;
  }
}
</style>
