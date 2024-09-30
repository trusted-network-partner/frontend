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
            <div class="estate-general__title customer__general-title">
              {{ $t('new_customer') }}
            </div>
            <div class="estate-general__descr">
              <p>
                {{ $t('customer_type_descr') }}
              </p>
            </div>
          </div>
        </div>

        <CustomerInfoLinks
          :step="1"
        />
      </div>
      <form class="estate-info ">
        <div class="default-title">
         {{ $t('customer_type') }}
        </div>
        <div class="estate-info__descr">
          <p>
            {{ $t('customer_type_info') }}
          </p>
        </div>
        <div class="customer__type-container">
          <div class="content-form__item customer__form-item">
            <div class="content-form__item-info">
              <div class="content-form__item-title">{{ $t('buyer') }}</div>
              <p class="content-form__item-descr">{{ $t('buyer_descr') }}</p>
            </div>
            <label  class="content-form__item-label absolute">
              <input type="checkbox" class="">
              <span class="content-form__item-check">
                <CheckIcon />
              </span>
            </label>
          </div>
          <div class="content-form__item customer__form-item">
            <div class="content-form__item-info">
              <div class="content-form__item-title">{{ $t('seller') }}</div>
              <p class="content-form__item-descr">{{ $t('seller_descr') }}</p>
            </div>
            <label  class="content-form__item-label absolute">
              <input type="checkbox" class="">
              <span class="content-form__item-check">
                <CheckIcon />
              </span>
            </label>
          </div><div class="content-form__item customer__form-item">
          <div class="content-form__item-info">
            <div class="content-form__item-title">{{ $t('leases') }}</div>
            <p class="content-form__item-descr">{{ $t('leases_descr') }}</p>
          </div>
          <label  class="content-form__item-label absolute">
            <input type="checkbox" class="">
            <span class="content-form__item-check">
                <CheckIcon />
              </span>
          </label>
        </div>
          <div class="content-form__item customer__form-item">
            <div class="content-form__item-info">
              <div class="content-form__item-title">{{ $t('catcher') }} </div>
              <p class="content-form__item-descr">{{ $t('catcher_descr') }}</p>
            </div>
            <label  class="content-form__item-label absolute">
              <input type="checkbox" class="">
              <span class="content-form__item-check">
                <CheckIcon />
              </span>
            </label>
          </div>
        </div>
        <div class="estate-info__btns">
          <nuxt-link to="/" class = "btn-default"> {{ $t('skip_now') }} </nuxt-link>
          <nuxt-link to="customer-category"  class = "btn-default black"> {{ $t('next_step') }} </nuxt-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import CustomerInfoLinks from '~/components/customer/new-customer-links';
import CheckIcon from '~/components/icons/common/check';
export default {
  layout: 'sidebar',
  name: 'customer-type',

  head: {
    title: 'New customer'
  },

  components: {
    CustomerInfoLinks,
    CheckIcon,
  },

  data() {
    return {
      sidebarOffset: 0
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
    margin-bottom: 40px;
  }
</style>
