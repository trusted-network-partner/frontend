<template>
  <main
    class="main settings-advanced"
  >
    <div class="content-wrap-full-width">
      <div class="container relative">
        <div class="content-wrap__details">
          <div class="content-wrap-details">
            <div class="settings-back">
              <nuxt-link to="settings" class="settings-back__link">
                <ArrowBack />
              </nuxt-link>
              <div class="settings-back__info">
                <div class="settings-back__title">
                  Association/Company/Sole trade
                </div>
                <div class="settings-back__descr">
                  {{ $t('settings_general') }}
                </div>
              </div>
            </div>
            <div class="user-info">
              <div class="user-info__img">
                <img src="~/assets/img/agent/user-big.jpg" alt="">
                <nuxt-link to="#" class="user-info__img-edit">
                  <PenIcon />
                </nuxt-link>
              </div>
              <div class="user-info__details">
                <nuxt-link
                  to="agent-info"
                  class="user-info__name"
                >
                  Ruben Bothman
                </nuxt-link>
                <div class="user-info__descr">
                  Remax
                </div>
              </div>
            </div>
          </div>
          <SettingsEdit />
          <div class="settings-section">
            <div class="settings-section__title">
              {{ $t('core_audience') }}
            </div>
            <SettingsTypeAudience />
            <SettingsSelectCountry :isBtn="isBtn"/>
          </div>
          <div class="settings-section customer-profile">
            <div class="settings-section__title">
              {{ $t('customer_profile') }}
            </div>
            <div class="settings-sub-section">
              <SettingsTypeCustomer />
            </div>
            <div class="settings-sub-section">
              <div class="settings-subtitle">
                {{ $t('location') }}
              </div>
              <div class="settings-sub-description">
                {{ $t('location_text') }}
              </div>
              <div class="settings-select__items">
                <SettingsSelectFrom />
                <SettingsSelectTo />
              </div>
            </div>
            <div class="settings-sub-section">
              <div class="settings-subtitle">
                {{ $t('budget') }}
              </div>
              <div class="settings-sub-description">
                {{ $t('budget.descr') }}
              </div>
              <SettingsBudget />
            </div>
            <div class="settings-sub-section">
              <div class="settings-subtitle">
                {{ $t('interesting_listing') }}
              </div>
              <div class="settings-sub-description">
                {{ $t('interesting_listing_text') }}
              </div>
              <div class="settings-sub-items">
                <div class="content__form-option">
                  <label class="content-form__item-label">
                    <input
                      type="checkbox"
                      value="real-estate"
                      checked>
                    <span class="content-form__item-check">
                      <CheckIcon />
                    </span>
                    <span class="content__form-option-text">
                      {{ $t('invert_real_estate') }}
                    </span>
                  </label>
                </div>
                <div class="content__form-option">
                  <label class="content-form__item-label">
                    <input
                      type="checkbox"
                      value="luxury-real-estate"
                      >
                    <span class="content-form__item-check">
                      <CheckIcon />
                    </span>
                    <span class="content__form-option-text">
                       {{ $t('luxury_real_estate') }}
                    </span>
                  </label>
                </div>
                <div class="content__form-option">
                  <label class="content-form__item-label">
                    <input
                      type="checkbox"
                      value="reo"
                      >
                    <span class="content-form__item-check">
                      <CheckIcon />
                    </span>
                    <span class="content__form-option-text">
                      {{ $t('reo_estate') }}
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <SettingsOptions
            @togglePopUp="togglePopUp"
          />
        </div>
        <Widgets />
      </div>
    </div>
    <LangPopup
      v-if="isPopUpShown"
      @popUpClose="popUpClose"
    />
  </main>
</template>

<script>
import Widgets from '~/components/widgets/widgets'
import ArrowBack from '~/components/icons/common/arrow-back'
import PenIcon from '~/components/icons/profile/pen'
import SettingsEdit from '~/components/settings/setting-edit'
import SettingsOptions from '~/components/settings/settings-options'
import LangPopup from '~/components/pop-ups/lang-pop-up'
import SettingsTypeAudience from '~/components/settings/settings-type-audience'
import SettingsTypeCustomer from '~/components/settings/settings-type-customer'
import SettingsSelectCountry from '~/components/settings/settings-select-country'
import SettingsSelectFrom from '~/components/settings/settings-select-from'
import SettingsSelectTo from '~/components/settings/settings-select-to'
import SettingsBudget from '~/components/settings/settings-budget'
import CheckIcon from '~/components/icons/common/check'
export default {

  layout: 'header-underline',

  name: 'settings-advanced',

  head: {
    title: 'Settings advanced'
  },

  components: {
    Widgets,
    ArrowBack,
    PenIcon,
    SettingsEdit,
    SettingsOptions,
    LangPopup,
    SettingsTypeAudience,
    SettingsSelectFrom,
    SettingsSelectTo,
    SettingsSelectCountry,
    CheckIcon,
    SettingsTypeCustomer,
    SettingsBudget
  },

  data() {
    return {
      isPopUpShown: false,
      isBtn: true
    }
  },

  methods: {
    togglePopUp() {
      this.isPopUpShown = !this.isPopUpShown
    },
    popUpClose() {
      this.isPopUpShown = false
    }
  },
}
</script>

<style scoped>
  .settings-section {
    margin-bottom: 60px;
  }
  .content-wrap__details {
    max-width: 1074px;
  }
  .content-wrap-full-width {
    margin-bottom: 31px;
    width: 100%;
  }
  .widgets {
    position: absolute;
    right: -152px;
    top: 5%;
  }
  .content__form-option-text {
    margin-left: 10px;
    color:  #434343;
  }
</style>
