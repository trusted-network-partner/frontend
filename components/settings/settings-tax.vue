<template>
  <div class="settings-tax settings-edit">
    <form class="settings-edit__items">
      <div class="settings-edit__item-col">
        <div class="settings-edit__item">
          <SettingsSelectCountry
             :isBtn="isBtn"
          />
        </div>
        <div class="settings-edit__item">
          <SettingsSelectCity />
        </div>
      </div>
      <div class="settings-edit__item-col">
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
      </div>
    </form>
  </div>
</template>

<script>
import SettingsSelectCountry from '~/components/settings/settings-select-country'
import PenIcon from  '~/components/icons/profile/pen'
import SettingsSelectCity from '~/components/settings/settings-select-from'
   export default {
     name: 'settings-tax',

     components: {
       SettingsSelectCountry,
       PenIcon,
       SettingsSelectCity
     },

     data() {
      return {
        isBtn: false,
        userData:  [
          {
            id: '1',
            label: 'auth.address_label',
            type: 'text',
            value: 'Calle Noruega 11 PO4D',
            edit: false
          },
          {
            id: '2',
            label: 'postal_code',
            type: 'number',
            value: '03183',
            edit: false},
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
     }
   }
</script>

<style lang="scss" scoped>
  .settings-edit__items {
    align-items: flex-start;
    margin: 0;
  }

  .settings-edit__item  {
    width: 100%;
    padding: 0;
    border-color: transparent;
  }

  .settings-edit__item-col {
    width: 50%;
    padding: 0 13px;
  }
  .settings-edit {
    padding: 30px 17px 0;
  }
</style>
