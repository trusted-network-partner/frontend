<template>
  <div class="estate-info__item">
    <div class="default-title">
      rental  performance
    </div>
    <p class="mb-20">The apartment is rented out for 430 Euro/month.</p>
    <div
      v-for="(home, index) in homeDetails"
      :key="index"
      class="info-default__col-item"
    >
      <div class="info-default info-default__items select-inside">
        <div class="info-default__item flex">
          <div class="info-default__element">
            <label :for="home.id" class="info-default__label">
              {{ home.label }}
            </label>
            <input
              :id="home.id"
              type="number"
              class="info-default__value no-focus"
              :value="home.value"
              :placeholder="home.label"
            >
          </div>
          <SelectItem
            :selectOptions="home.optionsSize"
            @change="selectedOption"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SelectItem from '~/components/select/selectItem'
export default {
  name: 'real-estate-rental-selects',

  components: {
    SelectItem
  },

  data() {
    return {
      homeDetails: [
        {
          id: 'price-rental',
          label: 'Price',
          value: '430',
          optionsSize: [
            {
              id: 1,
              name: 'EUR',
              chosen: true
            },
            {
              id: 2,
              name: 'USD',
              chosen: false
            },
          ],
        },
        {
          id: 'projected-yield',
          label: 'The projected yield ',
          value: '5.8',
          optionsSize: [
            {
              id: 1,
              name: '%',
              chosen: true
            },
            {
              id: 2,
              name: '%',
              chosen: false
            },
          ],
        }
      ],
    }
  },

  methods: {
    selectedOption(value) {
    }
  }
}
</script>

<style scoped>
  .default-title {
    margin-bottom: 20px;
  }
  .info-default__col-item {
    max-width: 307px;
    margin-bottom: 20px;
  }
</style>
