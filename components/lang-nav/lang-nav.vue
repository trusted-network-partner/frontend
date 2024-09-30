<template>
  <div class="languages">
    <ul class="languages__list">
      <li
        v-for="(language, index) in languages"
        :key="index"
        class="languages__item"
        :class="{'active' : language.code === $i18n.locale}"
        @click="selectLang(language.code, index)"
      >
        {{language.name}}
      </li>
      <li class="languages__item">
        Português
      </li>
      <li class="languages__item">
        Français
      </li>
      <li class="languages__item">
        Deutsch
      </li>
      <li class="languages__item">
        Polski
      </li>
<!--      <li class="languages__item">-->
<!--        Українська-->
<!--      </li>-->
      <li class="languages__item">
        Русский
      </li>
      <li class="languages__item">
        Türkçe
      </li>
      <li class="languages__item">
        हिन्दी
      </li>
    </ul>
  </div>
</template>


<script src="~/components/lang-nav/index.js"></script>

<style lang="scss" scoped>
  .languages {
    &__list {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-left: auto;
    }
    &__item {
      transition: all .3s ease;
      cursor: pointer;
      margin-left: 5px;
      &:first-child {
        margin-left: 0;
      }
      &:hover {
        color: $baseOrange;
      }
    }
  }
  .languages__item.active {
    font-weight: 600;
  }
</style>
