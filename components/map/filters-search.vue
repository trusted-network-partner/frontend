<template>
  <div class="filters">
    <div class="filters__search">
      <form>
        <div class="search-form__item">
          <div class="search-form__img">
            <SearchIcon />
          </div>
          <input type="text" placeholder="Search here" class="search-form__input">
        </div>
      </form>
    </div>
    <div class="filters__btns-wrap">
      <div class="filters__btns">
        <button type="button" class="filters__btn btn-default">
          Type
        </button>
        <button type="button" class="filters__btn btn-default">
          Price
        </button>
        <button type="button" class="filters__btn btn-default">
          STATUS
        </button>
        <div class="filters__btn btn-default btn_short">
          <DotsIcon />
        </div>
      </div>
      <div class="filters-select">
        <SelectItem
          :selectOptions="optionsFilter"
          @change="selectedOption"
        />
      </div>
    </div>
  </div>
</template>

<script>
import DotsIcon from '~/components/icons/posts/dots'
import SearchIcon from '~/components/icons/header/search'
import SelectItem from '~/components/select/selectItem'

  export default {
    name: 'filters-search',

    components: {
      DotsIcon,
      SearchIcon,
      SelectItem
    },

    data() {
      return {
        optionsFilter: [
          {
            id: 1,
            name: this.$t('sortBy'),
            value: 'sort-by',
            chosen: true
          },
          {
            id: 2,
            name: this.$t('luxuryRealEstate'),
            value: 'luxuryRealEstate',
            chosen: false
          },
          {
            id: 3,
            name: this.$t('investmentRealEstate'),
            value: 'investmentRealEstate',
            chosen: false
          },
        ],
      }
    },

    methods: {
      selectedOption(value) {

      }
    }
  }
</script>

<style lang="scss" scoped>
  .filters {
    &__search {
      max-width: 827px;
      margin-bottom: 20px;
    }
    &__btns-wrap {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 27px;
    }
    &__btns {
      display: flex;
      align-items: center;
    }
    &__btn:not(.btn_short) {
      margin-right: 18px;
      min-width: 145px;
    }
    &__btn {
      cursor: pointer;
      &.btn_short {
        padding: 10px 14px;
      }
    }
  }
  .search-form__input {
    height: 50px;
    border: 1px solid $thirdlyGray;
    padding: 15px 20px 15px 41px;
    &::-webkit-input-placeholder {
      color: $baseBlack;
    }

    &::-moz-placeholder {
      color: $baseBlack;
    }

    &-ms-input-placeholder {
      color: $baseBlack;
    }
  }
</style>
