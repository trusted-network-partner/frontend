<template>
  <div
    class="search"
    :class="{'expanded': isExpanded}"
  >
    <form class="search__form" @submit.prevent="handleSubmit">
      <div class="search__btn-wrap">
        <button
          class="search__btn"
          type="button"
          :class="{'active-input': searchValue}"
          @click="toggleExpanded"
        >
          <SearchIcon />
        </button>
      </div>
      <div class="search__form-select">
        <SelectItem
          :selectOptions="selectOptions"
          @change="selectedOption"
        />
      </div>
      <div class="search__form-input">
        <input
          v-model="searchValue"
          class="search__input"
          type="text"
          name="search-items"
          placeholder="Name Surname, company"
        >
        <div
          v-if="searchValue"
          class="search__input-icon"
          @click="searchValue = ''"
        >
          <InputClearIcon />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import SearchIcon from '~/components/icons/header/search'
import InputClearIcon from "~/components/icons/header/clear-input";
import TriangleIcon from '~/components/icons/common/triangle'
import SelectItem from '~/components/select/selectItem'
  export default {
    name: 'search-item',
    props: [
      'isExpanded'
    ],

    components: {
      SearchIcon,
      InputClearIcon,
      TriangleIcon,
      SelectItem
    },

    data() {
      return {
        searchValue: '',
        selectedValue: '',
        selectOptions: [
          {id: 1, name: this.$t('agent'), value: 'agent', chosen: true},
          {id: 2, name: this.$t('realEstate'), value: 'real-estate', chosen: false},
          {id: 3, name: this.$t('shop'), value: 'shop', chosen: false},
          {id: 4, name: this.$t('companies'), value: 'companies', chosen: false},
          {id: 5, name: this.$t('communitiesEvents'), value: 'communities-events', chosen: false},
        ],
      }
    },

    methods: {
      handleSubmit() {
        console.log('success');
      },
      toggleExpanded() {
        this.$emit('expanded')
      },
      selectedOption(value) {
        this.selectedValue = value
      }
    }
  }
</script>
