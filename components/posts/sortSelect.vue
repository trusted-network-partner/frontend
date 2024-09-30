<template>
  <div
    class="select-container sort"
    :class="{'active': isOptionsShown}"
    v-click-outside="selectClick"
  >
    <div class="select-header-wrap">
      <div class="select-header">
        <div class="select-item">
          {{ $t('select.sort_by') }}
        </div>
        <div
          class="select-trigger"
          @click="isOptionsShown = !isOptionsShown"
        >
          <div class="select-value-item">
            {{selectedOption}}
          </div>
          <div class="select-trigger-icon">
            <TriangleIcon />
          </div>
        </div>
      </div>
    </div>
    <transition name="slide-fade">
      <div
        v-if="isOptionsShown"
        class="select-dropdown"
      >
        <div
          v-for="option in selectOptions"
          :key="option.id"
          class="select-dropdown__item"
          :class="{'active': option.chosen}"
          @click="chooseOption(option.name, option.id)"
        >
          {{option.name}}
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import TriangleIcon from '~/components/icons/common/triangle'
  export default {
    name: 'sort-select',

    components: {
      TriangleIcon
    },

    data() {
      return {
        isOptionsShown: false,
        selectedOption: 'Popular',
        searchValue: '',
        selectOptions: [
          { id: 1, name: this.$t('popular'), chosen: true },
          { id: 2, name: this.$t('recent'), chosen: false },
          { id: 3, name: this.$t('mention'), chosen: false },
          { id: 4, name: this.$t('important'), chosen: false },
        ],
      }
    },

    methods: {
      chooseOption(value, id) {
        this.selectedOption = value
        this.isOptionsShown = false
        this.selectOptions.map(item => {
          item.chosen = item.id === id;
        })
      },
      selectClick(e) {
        this.isOptionsShown = false
      }
    }
  }
</script>
