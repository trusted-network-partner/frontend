<template>
  <form
    class="hire-professional-content-wrap"
    @submit.prevent=""
  >
    <div class="default-title hire-professional-content__title">
      {{ $t('experience') }}
    </div>
    <div class="heir-professional-content__subtitle">
      {{ $t('talk_experience') }}
    </div>
    <div class="info-default mb-30">
      <label for="experience-position" class="info-default__label">
        {{ $t('company') }}
      </label>
      <input
        v-model="company"
        type="text"
        class="info-default__value"
        id="experience-position"
        :placeholder="$t('company')"
      >
    </div>
    <div class="info-col-items flex mb-30">
      <div class="info-col-6x">
        <div class="info-default">
          <label for="experience-company" class="info-default__label">
            {{ $t('city') }}
          </label>
          <input
            v-model="city"
            type="text"
            class="info-default__value"
            id="experience-company"
            :placeholder="$t('city')"
          />
        </div>
      </div>
      <div class="info-col-6x">
        <SelectItem
          :selectOptions="optionsLocation"
          :selectClass="'select-full-info select-full auth__default ml-auto'"
        >
          <div class="info-default__label">{{ $t('location') }}</div>
        </SelectItem>
      </div>
    </div>
    <SelectItem
      :selectOptions="optionsEmployType"
      :selectClass="'select-full-info select-full auth__default mb-30'"
    >
      <div class="info-default__label">{{ $t('employment_type') }}</div>
    </SelectItem>
    <div class="default-title title_no-underline">
      {{ $t('period') }}
    </div>
    <div class="heir-professional-content__text bold">
      {{ $t('when_start_working') }}
    </div>
    <div class="info-col-items flex-inner flex">
      <div class="info-col-6x">
        <div class="info-col__title">
          {{ $t('start') }}
        </div>
        <div class="info-col-items flex">
          <div class="info-col-6x info-flex-items flex-items select-overflow">
            <SelectItem
              :selectOptions="selectStartMonth"
              :selectClass="'select-full-info select-full auth__default'"
            >
              <div class="info-default__label">{{ $t('month') }}</div>
            </SelectItem>
          </div>
          <div class="info-col-6x info-flex-items flex-items">
            <div class="info-default">
              <label for="experience-start-year" class="info-default__label">
                {{ $t('year') }}
              </label>
              <input
                v-model="startYear"
                type="number"
                class="info-default__value"
                id="experience-start-year"
                :placeholder="$t('year')"
              >
            </div>
          </div>
        </div>
      </div>
      <div
        v-if="isEndPeriodShown"
        class="info-col-6x ml-auto"
      >
        <div class="ml-auto">
          <div class="info-col__title">
            {{ $t('end') }}
          </div>
          <div class="info-col-items flex">
            <div class="info-col-6x info-flex-items flex-items select-overflow">
              <SelectItem
                :selectOptions="selectEndMonth"
                :selectClass="'select-full-info select-full auth__default'"
              >
                <div class="info-default__label">{{ $t('month') }}</div>
              </SelectItem>
            </div>
            <div class="info-col-6x info-flex-items flex-items">
              <div class="info-default">
                <label for="experience-end-year" class="info-default__label">
                  {{ $t('year') }}
                </label>
                <input
                  v-model="endYear"
                  type="number"
                  class="info-default__value"
                  id="experience-end-year"
                  :placeholder="$t('year')"
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content-form__item-info">
      <label
        class="content-form__item-label present-work"
      >
        <input
          type="checkbox"
          @change="isEndPeriodShown = !isEndPeriodShown"
        >
        <span class="content-form__item-check">
          <CheckIcon />
        </span>
        <span class="content-form__item-title"> {{ $t('present_working_here') }} </span>
      </label>
    </div>
    <div class="hire-professional-budget__buttons">
      <nuxt-link to="/" class="btn-default hire-professional-budget__button">{{ $t('skip_now') }}</nuxt-link>
      <div
        class="btn-default hire-professional-budget__button black"
        @click="nextStep"
      >
        {{ $t('next_step') }}
      </div>
    </div>
  </form>
</template>

<script>
import SelectItem from '~/components/select/selectItem'
import CheckIcon from '~/components/icons/common/check'
  export default {
    name: 'experience-main-info',

    components: {
      SelectItem,
      CheckIcon
    },

    data() {
      return {
        isEndPeriodShown: true,
        company: '',
        city: '',
        country: '',
        employmentType: '',
        startMonth: '',
        startYear: '',
        endMonth: '',
        endYear: '',
        position: '',
        description: '',
        optionsLocation: [
          { id: 1, name: 'Choose country', value: 'choose-country', chosen: true, isDefault: true },
          { id: 2, name: 'Spain', value: 'spain', chosen: false },
          { id: 3, name: 'Ukraine', value: 'ukraine', chosen: false },
        ],
        optionsEmployType: [
          { id: 1, name: 'Full time', value: 'full-time', chosen: true },
          { id: 2, name: 'Part time', value: 'part-time', chosen: false },
          { id: 3, name: 'Self-employed', value: 'self-employed', chosen: false },
          { id: 4, name: 'Freelancer', value: 'freelancer', chosen: false },
          { id: 5, name: 'internship', value: 'internship', chosen: false },
        ],
        selectStartMonth: [
          { id: 1, name: 'Choose month', value: 'choose-month', chosen: true, isDefault: true },
          { id: 2, name: 'January', value: 'january', chosen: false },
          { id: 3, name: 'February', value: 'february', chosen: false },
          { id: 4, name: 'March', value: 'march', chosen: false },
          { id: 5, name: 'April', value: 'april', chosen: false },
          { id: 6, name: 'May', value: 'may', chosen: false },
          { id: 7, name: 'June', value: 'june', chosen: false },
          { id: 8, name: 'July', value: 'july', chosen: false },
          { id: 9, name: 'August', value: 'august', chosen: false },
          { id: 10, name: 'September', value: 'september', chosen: false },
          { id: 11, name: 'October', value: 'october', chosen: false },
          { id: 12, name: 'November', value: 'november', chosen: false },
          { id: 13, name: 'December', value: 'december', chosen: false },
        ],
        selectEndMonth: [
          { id: 1, name: 'Choose month', value: 'choose-month', chosen: true, isDefault: true },
          { id: 2, name: 'January', value: 'january', chosen: false },
          { id: 3, name: 'February', value: 'february', chosen: false },
          { id: 4, name: 'March', value: 'march', chosen: false },
          { id: 5, name: 'April', value: 'april', chosen: false },
          { id: 6, name: 'May', value: 'may', chosen: false },
          { id: 7, name: 'June', value: 'june', chosen: false },
          { id: 8, name: 'July', value: 'july', chosen: false },
          { id: 9, name: 'August', value: 'august', chosen: false },
          { id: 10, name: 'September', value: 'september', chosen: false },
          { id: 11, name: 'October', value: 'october', chosen: false },
          { id: 12, name: 'November', value: 'november', chosen: false },
          { id: 13, name: 'December', value: 'december', chosen: false },
        ],
      }
    },

    methods: {
      nextStep() {
        this.$emit('nextStep')
      }
    }
  }
</script>

<style lang="scss">
  .heir-professional {
    &-content__subtitle {
      margin-bottom: 65px;
    }
    &-content__text {
      font-size: 14px;
      margin-bottom: 20px;
    }
  }
  .title_no-underline {
    &:after {
      display: none;
    }
  }
  .select-overflow .select-dropdown {
    max-height: 132px;
    overflow-y: auto;
  }
  .flex-inner {
    & > .info-col-6x {
      max-width: 380px;
    }
  }
  .present-work {
    display: flex;
    align-items: center;
    margin-left: 5px;
    .content-form__item-title {
      margin-bottom: 0;
      margin-left: 10px;
      font-size: 14px;
      text-transform: capitalize;
    }
  }
  .hire-professional-budget__buttons {
    margin-top: 90px;
  }
  .info-col {
    &-6x {
      width: 50%;
      .flex-items {
        .select-full {
          max-width: 184px;
        }
        .info-default {
          max-width: 184px;
        }
      }
      .info-default {
        max-width: 375px;
        &:nth-child(2n) {
          margin-left: auto;
        }
      }
      .select-full {
        max-width: 375px;
      }
    }
    &__title {
      font-weight: bold;
      font-size: 14px;
      margin-bottom: 6px;
      text-transform: uppercase;
    }
  }
</style>
