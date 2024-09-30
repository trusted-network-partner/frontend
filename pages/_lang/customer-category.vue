<template>
  <div class="container">
    <div
      class="estate-info-element"
      :style="{'height': sidebarHeight + 'px' }"
    />
    <div class="estate-info-wrap customer">
      <div class="estate-general">
        <div
          ref="sidebar"
          class="estate-general__wrap"
        >
          <div class="estate-general__container">
            <div class="estate-general__title">
              {{ $t('timeManagement') }}
            </div>
            <div class="estate-general__descr">
              <p>
                {{ $t('customer_descr') }}
              </p>
            </div>
          </div>
        </div>
        <CustomerInfoLinks
          :step="2"
        />
      </div>
      <form class="estate-info customer__info">
        <div class="default-title">
          {{ $t('category.type') }}
        </div>
        <div class="estate-info__descr customer__info-descr">
          <p>
            {{ $t('customer_info_descr') }}
          </p>
        </div>
        <div class="customer__info-categories">
          <div class="customer__info-category">
            <div class="customer__info-category__title">{{ $t('stage') }}</div>
            <div class="customer__info-category__container">
              <label class="content-form__item-label customer__info-single-category">
                <input type="radio" name='category1'>
                <span class=" content-form__item-check customer__custom-radiobox">
                  <CheckIcon/>
                </span>
                <span class="customer__single-category__text">{{ $t('lead') }}</span>
              </label>
            </div>
            <div class="customer__info-category__container"><label
              class="content-form__item-label customer__info-single-category">
              <input type="radio" name='category1'>
              <span class=" content-form__item-check customer__custom-radiobox">
                  <CheckIcon/>
                </span>
              <span class="customer__single-category__text">{{ $t('appointment') }}</span>
            </label></div>
            <div class="customer__info-category__container">
              <label class="content-form__item-label customer__info-single-category">
                <input type="radio" name='category1'>
                <span class=" content-form__item-check customer__custom-radiobox">
                  <CheckIcon/>
                </span>
                <span class="customer__single-category__text">{{ $t('under_contract') }}</span>
              </label>
            </div>
          </div>
          <div class="customer__info-category">
            <div class="customer__info-category__title">{{ $t('type_buyer') }}</div>
            <div class="customer__info-category__container">
              <label class="content-form__item-label customer__info-single-category">
                <input type="radio" name='category2'>
                <span class=" content-form__item-check customer__custom-radiobox">
                  <CheckIcon/>
                </span>
                <span class="customer__single-category__text">{{ $t('passive_buyer') }}</span>
              </label>
            </div>
            <div class="customer__info-category__container">
              <label class="content-form__item-label customer__info-single-category">
                <input type="radio" name='category2'>
                <span class=" content-form__item-check customer__custom-radiobox">
                  <CheckIcon/>
                </span>
                <span class="customer__single-category__text">{{ $t('active_searching') }}</span>
              </label>
            </div>
            <div class="customer__info-category__container">
              <label class="content-form__item-label customer__info-single-category">
                <input type="radio" name='category2'>
                <span class=" content-form__item-check customer__custom-radiobox">
                  <CheckIcon/>
                </span>
                <span class="customer__single-category__text">{{ $t('want_buy') }}y</span>
              </label>
            </div>
          </div>
          <div class="customer__info-category">
            <div class="customer__info-category__title">{{ $t('type_seller') }}</div>
            <div class="customer__info-category__container">
              <label class="content-form__item-label customer__info-single-category">
                <input type="radio" name='category3'>
                <span class=" content-form__item-check customer__custom-radiobox">
                  <CheckIcon/>
                </span>
                <span class="customer__single-category__text">{{ $t('passive_seller') }}r</span>
              </label>
            </div>
            <div class="customer__info-category__container">
              <label class="content-form__item-label customer__info-single-category">
                <input type="radio" name='category3'>
                <span class=" content-form__item-check customer__custom-radiobox">
                  <CheckIcon/>
                </span>
                <span class="customer__single-category__text">{{ $t('negotiation') }}</span>
              </label>
            </div>
            <div class="customer__info-category__container">
              <label class="content-form__item-label customer__info-single-category">
                <input type="radio" name='category3'>
                <span class=" content-form__item-check customer__custom-radiobox">
                  <CheckIcon/>
                </span>
                <span class="customer__single-category__text">{{ $t('want_sell') }}</span>
              </label>
            </div>
          </div>
        </div>
        <div class="estate-info__btns">
          <nuxt-link to="/" class="btn-default"> {{ $t('skip_now') }}</nuxt-link>
          <nuxt-link to="customer-details" class="btn-default black"> {{ $t('next_step') }}</nuxt-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import CustomerInfoLinks from '~/components/customer/new-customer-links'
import CheckIcon from '~/components/icons/common/check';

export default {
  layout: 'sidebar',
  name: 'customer-category',

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
