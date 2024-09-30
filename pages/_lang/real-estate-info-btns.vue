<template>
  <main class="main-info">
    <div class="real-estate-wrap real-estate-wrap-info">
      <nuxt-link to="real-estate" class="section-back">
        <ArrowLeftIcon/>
        <span class="section-back__text">
          {{ $t('back_listing') }}
        </span>
      </nuxt-link>
      <div class="real-estate__info-wrap">
        <RealEstateGallery />
        <div class="real-estate__details-wrap">
          <div class="real-estate__details">
            <RealEstateDetails />
          </div>
          <div class="real-estate__aside">
            <RealEstateGeneral
              @paymentPopUp="paymentPopUp"
              @togglePopUp="inquiryPopUp"
              @datePopUp="datePopUp"
              @calendarPopUp="calendarPopUp"
              @partnerCommissionPopUp="partnerCommissionPopUp"
              @registerCustomerPopUp="registerCustomerPopUp"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="pop-ups">
      <DatePopup
        ref="datePopUp"
      />
      <InquiryPopup
        ref="inquiryPopUp"
        @formSubmit="formSubmit"
      />
      <SuccessPopup
        :successText="successText"
        ref="successPopUp"
      />
      <PaymentPopup
        ref="paymentPopUp"
        @paymentSubmit="paymentSubmit"
      />
      <RegisterCustomerPopUp
        ref="registerCustomerPopUp"
      />
      <CalendarPopup
        ref="calendarPopup"
      />
      <PartnerCommissionPopUp
        ref="partnerCommissionPopUp"
      />
    </div>
  </main>
</template>

<script>
import RealEstateList from '~/components/property/real-estate-list'
import ArrowLeftIcon from '~/components/icons/common/arrow-left'
import RealEstateGallery from '~/components/property/real-estate-gallery'
import RealEstateDetails from '~/components/property/real-estate-details'
import RealEstateGeneral from '~/components/property/real-estate-general'
import InquiryPopup from '~/components/pop-ups/type-inquiry-pop-up'
import PaymentPopup from '~/components/pop-ups/payment-pop-up'
import SuccessPopup from '~/components/pop-ups/pop-up-success'
import DatePopup from '~/components/pop-ups/date-pop-up'
import RegisterCustomerPopUp from '~/components/pop-ups/register-customer-pop-up'
import CalendarPopup from '~/components/pop-ups/calendar-pop-up'
import PartnerCommissionPopUp from '~/components/pop-ups/partner-comision-value'
export default {
  layout: 'default',
  name: 'real-estate-info-btns',

  components: {
    RealEstateList,
    ArrowLeftIcon,
    RealEstateGallery,
    RealEstateDetails,
    RealEstateGeneral,
    InquiryPopup,
    PaymentPopup,
    SuccessPopup,
    DatePopup,
    RegisterCustomerPopUp,
    CalendarPopup,
    PartnerCommissionPopUp
  },

  head: {
    title: 'Real estate'
  },

  data() {
    return {
      successText: '',
      isInquiryPopUpShown: false,
      isSuccessPopUp: false,
      isPaymentPopUp: false,
      isCalendarPopUp: false,
    }
  },

  methods: {
    inquiryPopUp() {
      this.$refs.inquiryPopUp.open()
    },
    datePopUp() {
      this.$refs.datePopUp.open()
    },
    popUpClose() {
      this.successText = ''
    },
    formSubmit() {
      this.$refs.successPopUp.open()
      this.$refs.inquiryPopUp.close()
      this.successText = this.$t('application_submitted_title')
    },
    registerCustomerPopUp() {
      this.$refs.registerCustomerPopUp.open()
    },
    paymentPopUp() {
      this.$refs.paymentPopUp.open()
    },
    calendarPopUp() {
      this.$refs.calendarPopup.open()
    },
    partnerCommissionPopUp() {
      this.$refs.partnerCommissionPopUp.open()
    },
    paymentSubmit() {
      this.$refs.successPopUp.open()
      this.successText = this.$t('payment_submitted_title')
    }
  }
}
</script>

<style lang="scss" scoped>
  .real-estate-wrap {
    margin-bottom: 147px;
    position: relative;
  }
  .main-info {
    margin-top: 35px;
  }
</style>
