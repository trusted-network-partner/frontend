<template>
  <div
    class="select-wrap"
    :class="selectClass"
  >
    <div
      class="select-container search"
      :class="{'active': isOptionsShown}"
      v-click-outside="selectClick"
    >
      <div
        class="select-trigger"
        @click="isOptionsShown = !isOptionsShown"
      >
        <slot></slot>
        <div class="select-trigger__inner">
          <div
            class="select-value-item"
            :class="{'default': isDefaultOption}"
          >
            {{selectedOption}}
          </div>
          <div class="select-trigger-icon">
            <TriangleIcon />
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
            @click="chooseOption(option)"
          >
            {{option.name}}
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
  import TriangleIcon from "~/components/icons/common/triangle";

  export default {
    name: 'selectItem',

    props: {
      selectOptions: {
        type: Array,
        required: true
      },
      selectClass: {
        type: String,
        required: false
      }
    },

    components: {
      TriangleIcon
    },

    data() {
      return {
        isDefaultOption: false,
        isOptionsShown: false,
        selectedOption: '',
      }
    },

    methods: {
      chooseOption(option) {
        this.selectedOption = option.name
        this.isOptionsShown = false
        this.selectOptions.map(item => {
          item.chosen = item.id === option.id
        })
        this.$emit('change', option.value)
        if(option.isDefault) {
          this.isDefaultOption = true
          return
        }
        this.isDefaultOption = false
      },
      selectClick(e) {
        this.isOptionsShown = false
      },
      toggleExpanded() {
        this.$emit('expanded')
      },
    },

    mounted() {
      if(this.selectOptions) {
        this.selectedOption = this.selectOptions[0].name
        if(this.selectOptions[0].isDefault) {
          this.isDefaultOption = true
        }
      }
    }
  }
</script>
