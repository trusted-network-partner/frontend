<template>
  <div class="create-group-event">
    <form
      class="content-form"
      @submit.prevent="handleSubmit"
    >
      <div class="content-form__section">
        <h2 class="content-form__section-title">
          {{ $t('create_group_event') }}
        </h2>
        <div class="content-form__items">
          <div class="content-form__item">
            <div class="content-form__item-img">
              <GroupIcon />
            </div>
            <div class="content-form__item-info">
              <div class="content-form__item-title">
                {{ $t('group') }}
              </div>
              <p class="content-form__item-descr">
                {{ $t('create.group_event_descr') }}
              </p>
            </div>
            <label class="content-form__item-label absolute">
              <input
                type="radio"
                name="event-group"
                value="group"
                @click="isEvent = false"
              >
              <span class="content-form__item-check">
                <CheckIcon />
              </span>
            </label>
          </div>
          <div class="content-form__item mr-0">
            <div class="content-form__item-img">
              <EventIcon />
            </div>
            <div class="content-form__item-info">
              <div class="content-form__item-title">
                {{ $t('tabs.events') }}
              </div>
              <p class="content-form__item-descr">
                {{ $t('create.group_event_descr') }}
              </p>
            </div>
            <label class="content-form__item-label absolute">
              <input
                type="radio"
                name="event-group"
                value="event"
                checked
                @click="isEvent = true"
              >
              <span class="content-form__item-check">
                <CheckIcon />
              </span>
            </label>
          </div>
        </div>
      </div>
      <div class="content-form__section">
        <h2 class="content-form__section-title marginBottom">
          {{isEvent ? $t('choose_type_event') : $t('choose_type_group')}}
        </h2>
        <div class="content__form-options">
          <div class="content__form-option">
            <label class="content-form__item-label">
              <input
                type="radio"
                name="status"
                value="public"
                checked>
              <span class="content-form__item-check">
                <CheckIcon />
              </span>
              <span class="content__form-option-text">
                {{ $t('public') }}
              </span>
            </label>
          </div>
          <div class="content__form-option">
            <label class="content-form__item-label">
              <input
                type="radio"
                name="status"
                value="private"
                >
              <span class="content-form__item-check">
                <CheckIcon />
              </span>
              <span class="content__form-option-text">
                 {{ $t('Private') }}
              </span>
            </label>
          </div>
        </div>
      </div>
      <div class="content-form__section">
        <h2 class="content-form__section-title">
          {{isEvent ? $t('event_data') : $t('choose_type_group')}}
        </h2>
        <div class="content-form__data-items">
          <div class="content-form__data-item">
            <input type="text" :placeholder="placeHolder" name="name" class="content-form__data-input">
          </div>
          <div class="content-form__data-item">
            <div
              v-if="isEvent"
              class="date-input"
            >
              <input type="text" name="date" class="content-form__data-input" readonly>
              <div class="date-label">
                <CalendarIcon />
                <span>{{ $t('date') }}</span>
              </div>
            </div>
          </div>
        </div>
        <textarea name="description" :placeholder="$t('description')" class="content-form__data-input textarea" />
      </div>
      <div class="content-form__section mb-0">
        <h2 class="content-form__section-title">
          {{ $t('choose_background_picture') }}
        </h2>
        <div class="content-form__upload">
          <div class="content-form__upload-item">
            <div class="content-form__upload-inner">
              <label class="content-form__upload-label">
                <input type="file" name="photos-file[]" accept="image/jpg,image/jpeg,image/png,image/gif,image/svg">
                <PlusIcon/>
              </label>
              <div class="content-form__upload-title">
                {{ $t('upload_background') }}
              </div>
              <div class="content-form__upload-descr">
                {{ $t('image_size') }} 1590 х 400 px
              </div>
            </div>
          </div>
          <div class="content-form__upload-item">
            <div class="content-form__upload-inner">
              <label class="content-form__upload-label">
                <input type="file" name="photos-file[]" accept="image/jpg,image/jpeg,image/png,image/gif,image/svg">
                <PlusIcon/>
              </label>
              <div class="content-form__upload-title">
                {{ $t('upload_picture') }}
              </div>
              <div class="content-form__upload-descr">
                {{ $t('image_size') }} 500 х 500 px
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="content-form__btns">
        <button type="button" class="btn-default">{{ $t('preview') }}</button>
        <button type="submit" class="btn-default black">{{ $t('create_new') }}</button>
      </div>
    </form>
    <Widget />
  </div>
</template>

<script>
import Widget  from '~/components/widgets/widgets'
import CheckIcon from '~/components/icons/common/check'
import GroupIcon from '~/components/icons/common/group'
import EventIcon from '~/components/icons/common/event'
import PlusIcon from '~/components/icons/common/plus'
import CalendarIcon from '~/components/icons/profile/calendar'

  export default {
    name: 'create-content',

    components: {
      CheckIcon,
      GroupIcon,
      EventIcon,
      CalendarIcon,
      PlusIcon,
      Widget
    },

    data() {
      return {
        isEvent: true
      }
    },

    computed: {
      placeHolder() {
        return this.isEvent ? this.$t('event_name') : this.$t('group_name')
      }
    },

    methods: {
      handleSubmit() {

      }
    }
  }
</script>
<style lang="scss" scoped>
  .mr-0 {
    margin-right: 0;
  }
  .marginBottom {
    margin-bottom: 34px;
  }
  .create-group-event {
    position: relative;
  }
</style>
