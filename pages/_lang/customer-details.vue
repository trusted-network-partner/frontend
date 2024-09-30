<template>
  <div class="container">
    <div
      class="estate-info-element"
      :style="{'height': sidebarHeight + 'px' }"
    />
    <div class="estate-info-wrap">
      <div class="estate-general">
        <div
          ref="sidebar"
          class="estate-general__wrap"
        >
          <div class="estate-general__container">
            <div class="estate-general__title">
             {{ $t('focus_workflow') }}
            </div>
            <div class="estate-general__descr">
              <p>
                {{ $t('focus_descr') }}
              </p>
            </div>
          </div>
        </div>
        <CustomerInfoLinks
          :step="3"
        />
      </div>
      <form class="estate-info customer__info">
        <div class="default-title">
          {{ $t('details') }}
        </div>
        <div class="estate-info__descr customer__info-descr">
          <p>
            {{ $t('details_descr') }}
          </p>
        </div>
        <div class="customer__info-details">
          <div class="customer__info-details__top">
            <div class="info-default">
              <label
                for="customer-name"
                class="info-default__label">
                {{ $t('auth.name') }}
              </label>
              <input id="customer-name" type="text" class="info-default__value" placeholder="Name">
            </div>
            <div class="info-default">
              <label
                for="customer-surname"
                class="info-default__label"
              >
                {{ $t('auth.surname') }}
              </label>
              <input id="customer-surname" type="text" class="info-default__value" placeholder="Surname">
            </div>
            <div class="info-default-select">
              <SelectItem
                :selectOptions="optionsSelect"
                :selectClass="'select-full-info select-full auth__default'"
              >
                <div class="info-default__label">{{ $t('nationality') }}</div>
              </SelectItem>
            </div>
            <div class="info-default">
              <label
                for="customer-commission"
                class="info-default__label"
              >
                {{ $t('commission') }}
              </label>
              <input id="customer-commission" type="text" class="info-default__value" placeholder="Commission">
            </div>
          </div>
          <div class="customer__info-details__bottom">
            <div class="customer__details-bottom__title">{{ $t('contact_information') }}</div>
            <div class="info-default">
              <label
                for="customer-phone"
                class="info-default__label"
              > {{ $t('contact_phone') }}
              </label>
              <input id="customer-phone" type="text" class="info-default__value" placeholder="Phone">
            </div>
            <div class="info-default">
              <label for="customer-email" class="info-default__label"> {{ $t('contact_email') }}
              </label>
              <input id="customer-email" type="email" class="info-default__value" placeholder="Email">
            </div>
          </div>
        </div>
        <div class="estate-info__btns">
          <nuxt-link to="/" class="btn-default"> {{ $t('skip_now') }}</nuxt-link>
          <nuxt-link to="customer-documentation" class="btn-default black"> {{ $t('next_step') }}</nuxt-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import CustomerInfoLinks from '~/components/customer/new-customer-links'
import SelectItem from '~/components/select/selectItem'
export default {
  layout: 'sidebar',
  name: 'customer-details',

  head: {
    title: 'New customer'
  },

  components: {
    CustomerInfoLinks,
    SelectItem
  },

  data() {
    return {
      sidebarOffset: 0,
      optionsSelect: [
        { id: 1, name: 'Choose country', value: 'choose-country', chosen: true, isDefault: true },
        { id: 2, name: 'Spain', value: 'spain', chosen: false },
        { id: 3, name: 'Ukraine', value: 'ukraine', chosen: false },
      ],
    }
  },

  computed: {
    sidebarHeight() {
      return this.sidebarOffset
    }
  },

  methods: {
    handleSubmit() {
      console.log('success')
    }
  },

  mounted() {
    this.sidebarOffset = this.$refs.sidebar.offsetHeight
  }
}
</script>

<style lang="scss" scoped>
  @import "~/assets/css/new-customer/new-customer";
  .estate-general__title {
    margin-bottom: 15px;
  }

  .info-default {
    margin-bottom: 20px;
  }
</style>
