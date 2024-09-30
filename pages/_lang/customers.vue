<template>
  <main class="main">
    <div class="sidebar">
      <ProfileLinks />
    </div>
    <div class="content-wrap customers">
      <div class="content-wrap__header">
        <h2 class="customers__title">
          {{ $t('customers') }}
        </h2>
        <nuxt-link to="customer-type" class="btn-default blank">
          {{ $t('add_new') }}
        </nuxt-link>
      </div>
      <CustomersList
        @getCustomerDetails="getCustomerDetails"
      />
    </div>
    <CustomerPopUp
      ref="customerPopUp"
    />
  </main>
</template>

<script>
import ProfileLinks from '~/components/profile/profile-links'
import CustomersList from '~/components/customer/customers-list'
import CustomerPopUp from '~/components/pop-ups/customer-details'

export default {
  layout: 'default',
  name: 'customers',

  components: {
    ProfileLinks,
    CustomersList,
    CustomerPopUp
  },

  head: {
    title: 'Customers'
  },

  methods: {
    getCustomerDetails(id) {
      this.$refs.customerPopUp.open()
    }
  }
}
</script>

<style lang="scss" scoped>
  .content-wrap {
    padding-top: 10px;
    margin-bottom: 120px;
    position: relative;
    &__header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 29px;
    }
  }
  .customers__title {
    font-weight: bold;
    font-size: 16px;
  }
</style>
