<template>
  <div
    v-if="isOpen"
    class="pop-up-wrap pop-up-payment"
  >
    <div
      class="overlay"
      @click="popUpClose"
    />
    <div class="pop-up">
      <div class="pop-up__header">
        <div class="default-title">
          {{ $t('finally_pay') }}
        </div>
        <div  @click="popUpClose">
          <CloseBigIcon />
        </div>
      </div>
      <form
        class="pop-up__form card"
        @submit.prevent="paymentSubmit"
      >
       <div class="card__wrap">
         <div class="card__header">
           <div class="card__header-item">
             <img src="~/assets/img/agent/visa.png" alt="">
           </div>
           <div class="card__header-item">
             <img src="~/assets/img/agent/visa.png" alt="">
           </div>
         </div>
         <div class="card__items">
           <div class="card__item">
             <div class="card__item-inner">
               <label for="card-number" class="card__item-label">{{ $t('card_number') }}</label>
               <input id="card-number" :placeholder="$t('card_number')" type="number" class="card__item-value" >
             </div>
           </div>
           <div class="card__item short">
             <div class="card__item-inner">
               <label for="card-expire" class="card__item-label">{{ $t('expire') }}</label>
               <input id="card-expire" :placeholder="$t('expire')" type="number" class="card__item-value" >
             </div>
           </div>
           <div class="card__item ">
             <div class="card__item-inner">
               <label for="card-holder" class="card__item-label">{{ $t('name_card') }}</label>
               <input id="card-holder" :placeholder="$t('card_holder')" type="text" class="card__item-value" >
             </div>
           </div>
           <div class="card__item short">
             <div class="card__item-inner">
               <label for="card-cvc" class="card__item-label">{{ $t('cvc') }}</label>
               <input id="card-cvc" :placeholder="$t('cvc')" type="number" class="card__item-value" >
             </div>
           </div>
         </div>
       </div>
        <button
          type="submit" class="btn-default black pop-up-main"
        >
          {{ $t('payment') }}
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import CloseBigIcon from '~/components/icons/common/close-big'
export default {
  name: 'pop-up-payment',

  components: {
    CloseBigIcon
  },

  props: {
    successText: {
      type: String
    }
  },

  data() {
    return {
      isOpen: false
    }
  },

  methods: {
    open() {
      this.isOpen = true
    },
    popUpClose() {
     this.isOpen = false
    },
    paymentSubmit() {
      this.popUpClose()
      this.$emit('paymentSubmit')
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~/assets/css/default/card";
  @import "~/assets/css/default/pop-ups";
</style>
