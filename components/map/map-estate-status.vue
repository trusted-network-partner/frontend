<template>
  <div class="estate-status">
    <div class="estate-status__section">
      <div class="default-title">
        STATUS
      </div>
      <div class="estate-status__info">
        <div
          v-for="item in status"
          :key="item.id"
          class="estate-status__item"
        >
          <span
            class="estate-status__element"
            :class="item.status"
          />
          <div class="estate-status__label">
            {{ item.label }}
          </div>
        </div>
      </div>
    </div>
    <div class="estate-status__section">
      <div class="default-title">
        TYPE STATUS
      </div>
      <form class="estate-status__form">
       <div class="estate-status__form-item">
         <label class="content-form__item-label content-form__item-wrap">
           <span class="auth-free__category-title">RESIDENCIAL</span>
           <input type="checkbox">
           <span class="content-form__item-check">
            <CheckIcon />
          </span>
         </label>
       </div>
       <div class="estate-status__form-bottom">
         <div class="estate-status__form-item">
           <label class="content-form__item-label content-form__item-wrap">
             <span class="auth-free__category-title">COMERCIAL</span>
             <input type="checkbox">
             <span class="content-form__item-check">
            <CheckIcon />
          </span>
           </label>
         </div>
         <div class="estate-status__form-items">
           <label class="estate-status__form-label">
             <input type="checkbox">
             <span class="auth-free__category-title">Bank</span>
           </label>
           <label class="estate-status__form-label">
             <input type="checkbox">
             <span class="auth-free__category-title">Social</span>
           </label>
           <label class="estate-status__form-label">
             <input type="checkbox">
             <span class="auth-free__category-title">Resale</span>
           </label>
         </div>
         <div class="estate-status__form-item">
           <label class="content-form__item-label content-form__item-wrap">
             <span class="auth-free__category-title">RESERVED</span>
             <input type="checkbox">
             <span class="content-form__item-check">
              <CheckIcon />
             </span>
           </label>
         </div>
       </div>
      </form>
    </div>
  </div>
</template>

<script>
import CheckIcon from "~/components/icons/common/check";

  export default {
    name: 'map-estate-status',

    data() {
      return {
        status: [
          { id: 1, label: 'Available', status: 'black' },
          { id: 2, label: 'New construction', status: 'orange' },
          { id: 3, label: 'Not started sales', status: 'gray' },
          { id: 4, label: 'Bank property - REO', status: 'green' },
          { id: 5, label: 'Resales', status: 'blue' },
          { id: 6, label: 'Social', status: 'red' },
          { id: 7, label: 'Plot', status: 'pale-black' },
          { id: 8, label: 'Events', status: 'pink' },
        ]
      }
    },

    components: {
      CheckIcon,
    }
  }
</script>

<style lang="scss" scoped>
  .estate-status {
    padding: 23px 20px 0 20px;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    max-width: 328px;
    background: $baseWhite;
    box-shadow: 0px 14px 104px rgba(24, 42, 64, 0.1);
    border-radius: 10px;
    &__info {
      margin-bottom: 24px;
    }
    &__item {
      margin-bottom: 10px;
      display: flex;
      align-items: center;
    }
    &__element {
      width: 24px;
      height: 24px;
      border: 3px solid $baseWhite;
      margin-right: 10px;
      display: block;
      border-radius: 50%;
      &.black {
        background: $secondaryBlack;
      }
      &.orange {
        background: $baseOrange;
      }
      &.gray {
        background: $eightGray;
      }
      &.green {
        background: $lightGreen;
      }
      &.blue {
        background: $paleBlue;
      }
      &.red {
        background: $paleRed;
      }
      &.pale-black {
        background: $paleBlack;
      }
      &.pink {
        background: $basePink;
      }
    }
    &__label {
      font-weight: 600;
      font-size: 13px;
    }
    &__form-bottom {
      margin-top: 60px;
    }
    &__form-items {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
    }
    &__form-label {
      min-height: 30px;
      .auth-free__category-title {
        min-height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px 11px;
        margin-right: 9px;
        cursor: pointer;
        border-radius: 5px;
        border: 1px solid $thirdlyGray;
        transition: all .3s ease;
      }
      input {
        display: none;
      }
      input:checked + .auth-free__category-title {
        border-color: $baseOrange;
      }
    }
  }
  .default-title {
    margin-bottom: 20px;
  }
  .content-form__item {
    &-wrap {
      width: 100%;
      max-width: 100%;
      min-height: 30px;
    }
    &-check {
      width: 16px;
      height: 16px;
      svg {
        width: 12px;
        height: 10px;
      }
    }
  }
  .auth-free__category-title {
    font-weight: 600;
    font-size: 13px;
  }
</style>
