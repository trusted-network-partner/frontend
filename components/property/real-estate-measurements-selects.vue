<template>
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
              value="90"
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
    name: 'real-estate-measurements-selects',

    components: {
      SelectItem
    },

    data() {
      return {
        homeDetails: [
          {
            id: 'size-home',
            label: 'Size home',
            optionsSize: [
              { id: 1, name: 'm2', value: 'm2', chosen: true },
              { id: 2, name: 'Item2', value: 'item2', chosen: false },
              { id: 3, name: 'Item3', value: 'item3', chosen: false },
              { id: 4, name: 'Item4', value: 'item4', chosen: false },
            ],
          },
          {
            id: 'userfull',
            label: 'Userfull',
            optionsSize: [
              { id: 1, name: 'm2', value: 'm2', chosen: true },
              { id: 2, name: 'Item2', value: 'item2', chosen: false },
            ],
          },
          {
            id: 'plot',
            label: 'Plot',
            optionsSize: [
              { id: 1, name: 'm2', value: 'm2', chosen: true },
              { id: 2, name: 'Item2', value: 'item2', chosen: false },
              { id: 4, name: 'Item4', value: 'item3', chosen: false },
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
