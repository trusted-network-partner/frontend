<template>
  <div class="search">
    <form class="search-form" @submit.prevent="handleSubmit">
      <div class="users__title">
        {{ $t('search.query') }}
      </div>
      <div class="search-form__item">
        <div class="search-form__img">
          <SearchIcon />
        </div>
        <input type="text" :placeholder="$t('name_surname_company')">
      </div>
      <div class="search-form__item">
        <div class="search-form__img">
          <AddressIcon />
        </div>
        <input type="text" :placeholder="$t('country')">
      </div>
      <div class="search-form__item">
        <div class="search-form__img">
          <AddressIcon />
        </div>
        <input type="text" :placeholder="$t('city')">
      </div>
      <div class="search-form-btn">
        <button type="button" class="btn-default black">{{ $t('search.query') }}</button>
      </div>
    </form>
  </div>
</template>

<script>
import SearchIcon from '~/components/icons/header/search'
import AddressIcon from '~/components/icons/common/address'

  export default {
    name: 'search-form',

    components: {
      SearchIcon,
      AddressIcon,
    },

    methods: {
      handleSubmit() {
        console.log('success');
      }
    }
  }
</script>

<style lang="scss" scoped>
  .users {
    &__title {
      padding-top: 37px;
      font-weight: bold;
      font-size: 16px;
      text-transform: uppercase;
      position: relative;
      padding-bottom: 7px;
      margin-bottom: 30px;
      &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 36px;
        height: 4px;
        background: $baseOrange;
      }
    }
  }
  .users__query {
    margin-bottom: 35px;
  }
</style>

