<template>
  <div class="settings-section">
    <form class="settings-edit" @submit.prevent="">
      <div class="settings-edit__items">
        <div
          v-for="item in userData"
          :key="item.id"
          class="settings-edit__item"
        >
          <div class="settings-edit__item-inner">
            <div class="settings-edit__item-left">
              <div class="settings-edit__item-label">
                {{ $t(item.label) }}
              </div>
              <input
                :type="item.type"
                :disabled="!item.edit"
                :class="{'active': item.edit}"
                class="settings-edit__item-value"
                v-model="item.value"
              />
            </div>
            <div
              v-if="item.editIcon"
              class="settings-edit__item-right"

            >
              <button
                type="button"
                class="settings-edit__item-btn"
                @click="handleClick(item.id)"
              >
                <PenIcon />
                <span>{{ $t('edit') }}</span>
              </button>
            </div>
          </div>
        </div>
        <div
          class="settings-edit__item select-container"
          :class="{ 'active': isShown }"
          v-click-outside="selectClick"
        >
          <div
            class="settings-edit__item-inner select-trigger"
            @click="isShown = !isShown"
          >
            <div class="settings-edit__item-left">
              <div class="settings-edit__item-label">
                {{ $t('languages') }}
              </div>
              <div class="settings-edit__item-value">
                {{ selectedOption }}
              </div>
            </div>
            <div class="settings-edit__item-right select-trigger-icon">
              <TriangleIcon />
            </div>
          </div>
          <div
            v-show="isShown"
            class="select-dropdown"
          >
            <div class="select-dropdown__items">
              <div
                v-for="option in options"
                :key="option.id"
                class="select-dropdown__item"
                :class="{'active': option.chosen}"
                @click="chooseOption($t(option.name), option.id)"
              >
                <div class="select-dropdown__option">
                  {{ $t(option.name) }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
    <div class="settings-edit__delete">
      {{ $t('you_can') }}
      <button type="button"> {{ $t('delete_page') }}</button>
    </div>
  </div>
</template>

<script>
import PenIcon from '~/components/icons/profile/pen'
import TriangleIcon from '~/components/icons/common/triangle'
  export default  {
    name: 'settings-edit',

    components: {
      PenIcon,
      TriangleIcon
    },

    data() {
      return {
        isShown: false,
        selectedOption: '',
        userData: [
          {
            id: '1',
            label: 'auth.company_vat',
            type: 'text', value: 'X81555224', edit: false, editIcon: true
          },
          {
            id: '2',
            label:  'auth.password',
            type: 'text', value: '123456', edit: false, editIcon: true
          },
          {
            id: '3',
            label:  'auth.email',
            type: 'email', value: 'ruben.bothman@gmail.com', edit: false, editIcon: true
          },
          {
            id: '4',
            label:  'auth.contact_phone',
            type: 'number', value: +34667881124, edit: false, editIcon: true
          },
          {
            id: '5',
            label:  'personal_url',
            type: 'text', value: 'https//tnp/agent123', edit: false, editIcon: true
          },
          {
            id: '6',
            label:  'verification',
            type: 'text', value: this.$t('not_verified'), edit: false, editIcon: false
          }
        ],
        options: [
          { id: 1,
            name: 'english',
            chosen: true
          },
          { id: 2,
            name: 'spanish',
            chosen: false
          },
          { id: 3,
            name: 'russian',
            chosen: false
          },
          { id: 4,
            name: 'french',
            chosen: false
          },
          { id: 5,
            name: 'german',
            chosen: false
          },
        ]
      }
    },

     methods: {
      handleClick(id) {
        this.userData.map(item => {
          if(item.id === id) {
            item.edit = !item.edit
          }else {
            item.edit = false
          }
        })
      },

      chooseOption(value, id) {
        this.selectedOption = value
        this.isShown = false
        this.options.map(item => {
          item.chosen = item.id === id;
        })
      },
      selectClick(e) {
        this.isShown = false
      }
    }
  }
</script>

<style lang="scss" scoped>
  .settings-edit__items {
    .select-dropdown {
      width: 50%;
      padding: 10px 30px;
    }
  }
</style>
