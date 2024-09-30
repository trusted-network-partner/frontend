<template>
  <div class="real-estate__general">
    <div class="real-estate__price">
      350.000€
    </div>
    <div class="real-estate__btn">
      <button
          type="button"
          class="btn-default black"
          @click="paymentPopUp"
      >
        {{ $t('purchase_deposit') }}
      </button>
    </div>
    <div class="real-estate__btns">
      <div class="real-estate__btn-item">
        <button
          class="btn-default blank"
          @click="datePopUp"
        >
          {{ $t('book_viewing') }}
        </button>
      </div>
      <div class="real-estate__btn-item">
        <button
            class="btn-default blank"
            @click="togglePopUp"
        >
          {{ $t('leave_inquiry') }}
        </button>
      </div>
    </div>
    <div class="real-estate__content">
      <div
        class="real-estate__content-item"
        @click="registerCustomerPopUp"
      >
        <button type="button">
          <span class="icon">
             <RegisterIcon />
          </span>
          <span class="real-estate__content-title">{{ $t('register_customer') }}</span>
        </button>
      </div>
      <div
        class="real-estate__content-item"
        @click="partnerCommissionPopUp"
      >
        <button type="button">
          <span class="icon">
             <PartnerIcon />
          </span>
          <span class="real-estate__content-title">{{ $t('partner_comision') }}</span>
        </button>
      </div>
      <div
        class="real-estate__content-item"
        @click="calendarPopUp"
      >
        <button type="button">
          <span class="icon">
            <CalendarIcon/>
          </span>
          <span class="real-estate__content-title">{{ $t('calendar_viewings') }}</span>
        </button>
      </div>
      <div class="real-estate__content-item">
        <button type="button">
          <span class="icon">
           <PrintIcon />
          </span>
          <span class="real-estate__content-title">{{ $t('print') }}</span>
        </button>
      </div>
    </div>
    <div class="real-estate__content-btns">
      <button type="button" class="btn-default black">{{ $t('virtual_tour') }}</button>
      <button type="button" class="btn-default blank">{{ $t('show_room') }}</button>
    </div>
    <div class="real-estate-agent">
      <div class="real-estate-agent__info">
        <nuxt-link
          to="agent-info"
          class="real-estate-agent__img"
        >
          <img src="~/assets/img/agent/user-big.jpg" alt="">
        </nuxt-link>
        <div class="real-estate-agent__details">
          <nuxt-link
            to="agent-info"
            class="real-estate-agent__name"
          >
            Ruben Bothman
          </nuxt-link>
          <div class="real-estate-agent__status">
            {{ $t('agent.position') }}
          </div>
          <div class="real-estate-agent__links">
            <div class="real-estate-agent__links-item">
              <a href="tel:+34677130650" class="real-estate-agent__link">+34 677 130 650</a>
            </div>
            <div class="real-estate-agent__links-item">
              <a href="mailto:ruben.bothman@gmail.com" class="real-estate-agent__link">ruben.bothman@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
      <div class="real-estate-agent__descr">
        <p>
          {{ $t('agent_exp') }}
        </p>
      </div>
      <nuxt-link
        to="chat"
        class="btn-default black"
      >
        {{ $t('send_message') }}
      </nuxt-link>
    </div>
    <div class="real-estate-history">
      <div class="real-estate-history__tabs">
        <button
          v-for="(tab, index) in tabs"
          :key="tab"
          type="button"
          class="real-estate-history__tab"
          :class="{'active' : currentTab === index}"
          @click="currentTab = index"
        >
          {{tab}}
        </button>
      </div>
      <div
        v-show="currentTab === 0"
        class="real-estate-history__tab-content"
      >
        <div class="real-estate-history__item">
          <div class="real-estate-history__item-left">
            <CalendarIcon />
            <div class="real-estate-history__item-elem">
              17/07/2020
            </div>
          </div>
          <div class="real-estate-history__item-title">
            {{ $t('update_price') }}
          </div>
        </div>
        <div class="real-estate-history__item">
          <div class="real-estate-history__item-left">
            <CalendarIcon />
            <div class="real-estate-history__item-elem">
              25/07/2020
            </div>
          </div>
          <div class="real-estate-history__item-title">
            {{ $t('show_customers') }}
          </div>
        </div>
        <div class="real-estate-history__item">
          <div class="real-estate-history__item-left">
            <CalendarIcon />
            <div class="real-estate-history__item-elem">
              02/08/2020
            </div>
          </div>
          <div class="real-estate-history__item-title">
            {{ $t('deposit_payed') }}
          </div>
        </div>
      </div>
      <div
        v-show="currentTab === 1"
        class="real-estate-history__tab-content"
      >
        <div class="real-estate-history__item">
          <div class="real-estate-history__item-left">
            <CalendarIcon />
            <div class="real-estate-history__item-elem">
              17/07/2020
            </div>
          </div>
          <div class="real-estate-history__item-title">
          </div>
        </div>
        <div class="real-estate-history__item">
          <div class="real-estate-history__item-left">
            <CalendarIcon />
            <div class="real-estate-history__item-elem">
              25/07/2020
            </div>
          </div>
          <div class="real-estate-history__item-title">
            {{ $t('show_customers') }}
          </div>
        </div>
        <div class="real-estate-history__item">
          <div class="real-estate-history__item-left">
            <CalendarIcon />
            <div class="real-estate-history__item-elem">
              02/08/2020
            </div>
          </div>
          <div class="real-estate-history__item-title">
            {{ $t('deposit_payed') }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RegisterIcon from '~/components/icons/common/register'
import PartnerIcon from '~/components/icons/common/partner'
import CalendarIcon from '~/components/icons/profile/calendar'
import PrintIcon from '~/components/icons/common/print'
  export default {
    name: 'real-estate-general',

    components: {
      RegisterIcon,
      PartnerIcon,
      CalendarIcon,
      PrintIcon
    },

    data() {
      return {
        tabs: [
          'Actions', 'History Price'
        ],
        currentTab: 0
      }
    },

    methods: {
      togglePopUp() {
        this.$emit('togglePopUp')
      },
      registerCustomerPopUp() {
        this.$emit('registerCustomerPopUp')
      },
      paymentPopUp() {
        this.$emit('paymentPopUp')
      },
      datePopUp() {
        this.$emit('datePopUp')
      },
      partnerCommissionPopUp() {
        this.$emit('partnerCommissionPopUp')
      },
      calendarPopUp() {
        this.$emit('calendarPopUp')
      }
    }
  }
</script>
