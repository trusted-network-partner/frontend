<template>
  <div class="calendar">
    <div class="calendar__header">
      <ul class="calendar__nav">
        <li
          v-for="(item, index) in nav"
          :key="item.id"
          @click="currentTab = index"
          class="calendar__nav-item"
        >
          <span
            class="calendar__nav-title"
            :class="{'active' : currentTab === index}"
          >
            {{ item.title }}
          </span>
        </li>
      </ul>
      <div class="calendar__header-btns">
        <div class="calendar__btn">
          <label class="content-form__item-label">
            <input type="checkbox">
            <span class="content-form__item-check">
              <CheckIcon />
            </span>
            <span class="content-form__item-text">
              {{ $t('only_personal') }}
            </span>
          </label>
        </div>
        <div class="calendar__btn">
          <div class="btn-default blank">
            {{ $t('add_new_task') }}
          </div>
        </div>
      </div>
    </div>
    <div class="calendar__wrap">
      <img src="~/assets/img/calendar/calendar.jpg" alt="">
    </div>
    <CalendarInfo />
  </div>
</template>

<script>
import CheckIcon from '~/components/icons/common/check';
import CalendarInfo from '~/components/calendar/calendar-info';
  export default {
    name: 'calendar-details',

    components: {
      CheckIcon,
      CalendarInfo
    },

    data() {
      return {
        nav: [
          { id: 0, title: 'my Calendar'},
          { id: 1, title: 'My team'},
          { id: 2, title: 'lead zone'},
        ],
        currentTab: 0
      }
    }
  }
</script>

<style lang="scss" scoped>
  .calendar {
    &__header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 34px;
    }
    &__nav {
      display: flex;
      &-item {
        margin-right: 40px;
        &:last-child {
          margin-right: 0;
        }
      }
      &-title {
        position: relative;
        text-transform: uppercase;
        font-weight: bold;
        transition: all .3s ease;
        opacity: .2;
        cursor: pointer;
        &.active {
          opacity: 1;
          &:before {
            content: '';
            position: absolute;
            width: 36px;
            height: 4px;
            background: $baseOrange;
            left: 0;
            top: calc(100% + 7px);
          }
        }
        &:hover {
          opacity: 1;
        }
      }
    }
    &__header-btns {
     display: flex;
     align-items: center;
    }
    &__btn .btn-default {
      cursor: pointer;
      min-width: 185px;
    }
    .content-form__item {
      &-label {
        display: inline-flex;
        margin-right: 15px;
        transition: all .3s ease;
        &:hover {
          transform: translateY(-2px);
        }
      }
      &-text {
        font-size: 14px;
        margin-left: 10px;
        margin-top: 3px;
      }
    }
    &__wrap {
      margin-bottom: 45px;
    }
  }
</style>
