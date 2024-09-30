<template>
  <div
    v-if="isShown"
    class="pop-up-wrap"
  >
    <div class="pop-up-wrap__inner">
      <div
        class="overlay"
        @click="close"
      />
      <div class="pop-up pop-up-type-inquiry pop-up-date">
        <div class="pop-up__header">
          <div class="default-title">
            {{ $t('appointment_type') }}
          </div>
          <div  @click="close">
            <CloseBigIcon />
          </div>
        </div>
        <div class="pop-uop__btns">
          <button
            v-for="(tab, index) in tabs"
            :key="tab.id"
            type="button"
            class="btn-default"
            :class="{'black': currentTab === index}"
            @click="currentTab = index"
          >
            {{ $t(tab.title) }}
          </button>
        </div>
        <form
          v-show="currentTab === 0"
          class="pop-up__form"
          @submit.prevent="formSubmit"
        >
          <div class="default-title">
            {{ $t('choose_date') }}
          </div>
          <client-only>
            <date-picker
              v-model="model.date"
              :inline="true"
              :disabled-date="(date) => date <= new Date()"
            >
            </date-picker>
          </client-only>
          <div class="time-wrap">
            <div class="default-title">
              {{ $t('choose_time') }}
            </div>
            <div class="time-items">
              <div
                v-for="(item, index) in time"
                :key="index"
                class="time-item"
              >
                <label class="time-label">
                  <input
                    type="radio"
                    name="time-option"
                    class="time-option"
                    :value="item.value"
                    @click="timeValue = item.value"
                  >
                  <span class="time-value">
                    <span>
                      {{ item.name }}
                    </span>
                  </span>
                </label>
              </div>
            </div>
          </div>
          <button
            type="submit" class="btn-default black pop-up-main"
          >
            {{ $t('bookingView') }}
          </button>
        </form>
        <form
          v-show="currentTab === 1"
          class="pop-up__form"
          @submit.prevent="formSubmit"
        >
          <div class="default-title">
            {{ $t('choose_date') }}
          </div>
          <client-only>
            <date-picker
              v-model="model.dateVideo"
              :inline="true"
              :disabled-date="(date) => date <= new Date()"
            >
            </date-picker>
          </client-only>
          <div class="time-wrap">
            <div class="default-title">
              {{ $t('choose_time') }}
            </div>
            <div class="time-items">
              <div
                v-for="(item, index) in timeVideo"
                :key="index"
                class="time-item"
              >
                <label class="time-label">
                  <input
                    type="radio"
                    name="time-option-video"
                    class="time-option"
                    :value="item.value"
                    @click="timeVideoValue = item.value"
                  >
                  <span class="time-value">
                    <span>
                       {{ item.name }}
                    </span>
                  </span>
                </label>
              </div>
            </div>
          </div>
          <button
            type="submit"
            class="btn-default black pop-up-main"
          >
            {{ $t('bookingView') }}
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import CloseBigIcon from '~/components/icons/common/close-big'
export default {
  name: 'date-pop-up',

  components: {
    CloseBigIcon
  },

  data() {
    return {
      currentTab: 0,
      isShown: false,
      tabs: [
        {id: 0, title: 'viewing'},
        {id: 1, title: 'video_show'},
      ],
      model: {
        date: "",
        dateVideo: ''
      },
      timeValue: '',
      timeVideoValue: '',
      time: [
        { value: new Date().getTime(), name: this.$t('now') },
        { value: '15:00', name:'3pm' },
        { value: '15:30', name:'3.30pm' },
        { value: '16:00', name:'4pm' },
        { value: '16:30', name:'4.30pm' },
        { value: '17:00', name:'5pm' },
        { value: '17:30', name:'5.30pm' },
        { value: '18:00', name:'6pm' },
      ],
      timeVideo: [
        { value: new Date().getTime(), name: this.$t('now') },
        { value: '15:00', name:'3pm' },
        { value: '15:30', name:'3.30pm' },
        { value: '16:00', name:'4pm' },
        { value: '16:30', name:'4.30pm' },
        { value: '17:00', name:'5pm' },
        { value: '17:30', name:'5.30pm' },
        { value: '18:00', name:'6pm' },
      ]
    }
  },

  methods: {
    open() {
      this.isShown = true
    },
    close() {
      this.isShown = false
    },
    formSubmit() {
      console.log('success');
    },
    selectDate (date) {
      this.value = date
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~/assets/css/default/pop-ups";
</style>
