<template>
  <div class="filters-short-wrap">
    <nuxt-link to="map-real-estate-search" class="filters-btn btn-default">
      {{ $t('filtersPanel') }}
    </nuxt-link>
    <div class="filters-select">
      <SelectItem
        :selectOptions="optionsFilter"
        @change="selectedOption"
      />
    </div>
  </div>
</template>

<script>
import SelectItem from '~/components/select/selectItem'
  export default {
    name: 'filters-short',

    components: {
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
        console.log(value);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .filters-btn {
    min-height: 66px;
    background: $lightWhite;
    border-radius: $border-5;
    width: 100%;
    overflow: hidden;
    margin-bottom: 23px;
    font-weight: bold;
    font-size: 16px;
    max-width: 100%;
    color: $baseBlack;
  }
  .filters-select {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 27px;
  }
</style>
