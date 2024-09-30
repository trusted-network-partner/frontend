<template>
  <div class="pop-ups">
    <RegisterCustomerPopUp />
    <CustomerRegistered />
    <RegisterCustomer />
    <PartnerCommission />
    <PartnerCommissionValue />
    <TimePicker/>
  </div>
</template>

<script>
import RegisterCustomerPopUp from '~/components/pop-ups/register-customer-pop-up'
import CustomerRegistered from '~/components/pop-ups/customer-registred'
import RegisterCustomer from '~/components/pop-ups/register-customer'
import PartnerCommission from '~/components/pop-ups/partner-comision'
import PartnerCommissionValue from '~/components/pop-ups/partner-comision-value'
import FilterPopup from '~/components/pop-ups/filter-popup'
import FilterPopupSecond from '~/components/pop-ups/filter-popup-second'
import TimePicker from '~/components/pop-ups/timepicker'
  export default {
    name: 'pop-ups',

    components: {
      RegisterCustomerPopUp,
      CustomerRegistered,
      RegisterCustomer,
      PartnerCommission,
      PartnerCommissionValue,
      FilterPopup,
      FilterPopupSecond,
      TimePicker,
    }
  }
</script>
