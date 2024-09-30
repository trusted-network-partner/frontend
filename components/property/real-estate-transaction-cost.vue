<template>
  <div class="estate-info__item">
    <div class="default-title">
      Transaction costs
    </div>
    <div class="content-form__items flex">
      <div
        v-for="(home, index) in homeDetails"
        :key="index"
        class="info-default__col"
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
  </div>
</template>

<script>
import SelectItem from '~/components/select/selectItem'
export default {
  name: 'real-estate-transactions-selects',

  components: {
    SelectItem
  },

  data() {
    return {
      homeDetails: [
        {
          id: 'notary',
          label: 'Notary',
          value: 1.5,
          optionsSize: [
            {
              id: 1,
              name: '%',
              chosen: true
            },
            {
              id: 2,
              name: 'item2',
              chosen: false
            },
          ],
        },
        {
          id: 'vat',
          label: 'VAT',
          value: 24,
          optionsSize: [
            {
              id: 1,
              name: '%',
              chosen: true
            },
            {
              id: 2,
              name: 'Item2',
              chosen: false
            },
          ],
        },
        {
          id: 'acquisition-tax',
          label: 'Acquisition tax',
          value: 3.09,
          optionsSize: [
            {
              id: 1,
              name: '%',
              chosen: true
            },
            {
              id: 2,
              name: 'Item2',
              chosen: false
            },
          ],
        },
        {
          id: 'legal-services',
          label: 'Legal services',
          value: 1.5,
          optionsSize: [
            {
              id: 1,
              name: '%',
              chosen: true
            },
            {
              id: 2,
              name: 'Item2',
              chosen: false
            },
          ],
        },
        {
          id: 'vat-service',
          label: 'VAT',
          value: 24,
          optionsSize: [
            {
              id: 1,
              name: '%',
              chosen: true
            },
            {
              id: 2,
              name: 'Item2',
              chosen: false
            },
          ],
        },
        {
          id: 'fee',
          label: 'Cadastral chamber fee',
          value: 0.7,
          optionsSize: [
            {
              id: 1,
              name: '%',
              chosen: true
            },
            {
              id: 2,
              name: 'Item2',
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

<style lang="scss" scoped>
  .default-title {
    margin-bottom: 30px;
  }
  .content-form__items.flex {
    flex-wrap: wrap;
    margin: 0 -10px;
    .info-default__items {
      margin-bottom: 20px;
    }
  }
  .info-default  {
    //padding: 15px 10px 17px 19px;
    .select-wrap {
      min-width: 56px;
    }
  }
</style>
