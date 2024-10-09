<template>
  <div class="real-estate-wrapper">
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
          <div class="estate-general__title">
            {{ $t('customer_product') }}
          </div>
          <div class="estate-general__descr">
            <p>
              {{ $t('customer_product_descr') }}
            </p>
          </div>

        </div>
        <div class="estate-general__links"></div>

      </div>
      <form class="estate-info customer__info">
        <div class="default-title">
          {{ $t('customer_product') }}
        </div>
        <div class="estate-info__descr">
          <p>
            {{ $t('customer_product_info') }}
          </p>
        </div>
        <div class="customer__product-content">
          <div class="info-default">
            <label for="customer-name" class="info-default__label">
              {{ $t('auth.name') }}
            </label>
            <input type="text" id="customer-name"  class="info-default__value" placeholder="Name">
          </div>
          <div class="info-default">
            <label for="customer-number" class="info-default__label">
              {{ $t('price') }}
            </label>
            <input type="number" id="customer-number" class="info-default__value" placeholder="Price">
          </div>
          <div class="info-default textarea__default customer__product-textarea">
            <label for="product-descr" class="info-default__label">
              {{ $t('description') }}
            </label>
            <textarea id="product-descr" placeholder="Description" name="description" cols="1" rows="1"
              class="info-default__value textarea_big"></textarea>
          </div>
        </div>
        <div class="customer__product-upload">
          <h2 class="content-form__section-title">
            {{ $t('customer_product_file') }}
          </h2>
          <div class="content-form__upload">
            <div class="content-form__upload-item">
              <div class="content-form__upload-inner">
                <label class="content-form__upload-label">
                  <input type="file" accept='image/jpg,image/jpeg,image/png,image/svg,image/gif'>
                  <PlusIcon/>
                </label>
                <div class="content-form__upload-title">
                  {{ $t('upload_picture') }}
                </div>
                <div class="content-form__upload-descr">
                  {{ $t('size') }} 500 х 500 px
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="estate-info__btns">
          <button class="btn-default black"> {{ $t('clear') }}</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import PlusIcon from '~/components/icons/common/plus'

export default {
  layout: 'sidebar',
  name: 'customer-product',

  head: {
    title: 'New customer'
  },
  components: {
    PlusIcon,
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
    margin-bottom: 20px;
  }
</style>
