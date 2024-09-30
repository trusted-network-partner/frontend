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
            {{ $t('calendar_of_viewing') }}
          </div>
          <div @click="close">
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
          <button
            type="submit"
            class="btn-default black pop-up-main"
            @click="close"
          >
            {{ $t('close') }}
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
          <button
            type="submit"
            class="btn-default black pop-up-main"
            @click="close"
          >
            {{ $t('close') }}
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
      timeVideoValue: ''
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
