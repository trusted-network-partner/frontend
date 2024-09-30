<template>
  <div class="container">
    <div class="auth-wrap-items margin-offset">
      <div class="auth-wrap-item general">
        <div class="auth-wrap-general">
          <AuthGeneral>
            <div class="auth-general__content-pretitle">{{ $t('welcome') }}</div>
            <div class="auth-general__content-title">{{ $t('auth.free_aside_title') }} </div>
          </AuthGeneral>
        </div>
      </div>
      <div class="auth-wrap-item auth-type_less-padd auth-free__ai_start auth-free__max_width">
        <div class="auth-free__container">
          <form
            class="auth-free__form"
            @submit.prevent="handleSubmit"
          >
            <div class="auth-free__block auth-free-block__type">
              <div class="default-title auth-free__title">{{ $t('type_real_estate') }}</div>
              <SelectPropertyType />
            </div>
            <div class="auth-free__block auth-free-block__category">
              <div class="default-title auth-free__title">{{ $t('category.type') }}</div>
              <div class="auth-free-category__list">
                <label class="content-form__item-label auth__remember-label auth-free-category__item">
                  <span class="auth-free__category-title">{{ $t('bungalow') }}</span>
                  <input type="checkbox" class="">
                  <span class="content-form__item-check">
                    <CheckIcon />
                  </span>
                </label>
                <label class="content-form__item-label auth__remember-label auth-free-category__item">
                  <span class="auth-free__category-title">{{ $t('condo') }}</span>
                  <input type="checkbox" class="">
                  <span class="content-form__item-check">
                    <CheckIcon />
                  </span>
                </label>
                <label class="content-form__item-label auth__remember-label auth-free-category__item">
                  <span class="auth-free__category-title">{{ $t('townhouse') }}</span>
                  <input type="checkbox" class="">
                  <span class="content-form__item-check">
                    <CheckIcon />
                  </span>
                </label>
                <label class="content-form__item-label auth__remember-label auth-free-category__item">
                  <span class="auth-free__category-title">{{ $t('townhouse') }}</span>
                  <input type="checkbox" class="">
                  <span class="content-form__item-check">
                    <CheckIcon />
                  </span>
                </label>
                <label class="content-form__item-label auth__remember-label auth-free-category__item">
                  <span class="auth-free__category-title">{{ $t('studio') }}</span>
                  <input type="checkbox" class="">
                  <span class="content-form__item-check">
                    <CheckIcon />
                  </span>
                </label>
                <label class="content-form__item-label auth__remember-label auth-free-category__item">
                  <span class="auth-free__category-title">{{ $t('penthouse') }}</span>
                  <input type="checkbox" class="">
                  <span class="content-form__item-check">
                    <CheckIcon />
                  </span>
                </label>
              </div>
            </div>
            <div class="auth-free__block auth-free-block__work">
              <div class="default-title auth-free__title">{{ $t('where_work') }}</div>
              <div class="settings-select__items">
                <SettingsSelectFrom />
                <SettingsSelectTo />
              </div>
            </div>
            <div class="auth-free__block auth-free-block__budget">
              <div class="default-title auth-free__title">{{ $t('budget') }}</div>
              <div class="auth-wrap-item__subtitle auth__subtitle">{{ $t('budget.descr') }}</div>
              <SettingsBudget />
            </div>
            <div class="auth-free__block auth-free-block__listings">
              <div class="default-title auth-free__title">{{ $t('interesting_listing') }}</div>
              <div class="auth-wrap-item__subtitle auth-free__subtitle">{{ $t('interesting_listing_text') }}</div>
              <div class="auth-free__listings-options">
                <div class="auth-free__listings-option">
                  <label class="content-form__item-label auth-free__listings-label">
                    <input
                      type="checkbox"
                      value="reo"
                    >
                    <span class="content-form__item-check">
                      <CheckIcon />
                    </span>
                    <span class="content__form-option-text">
                      {{ $t('invert_real_estate') }}
                    </span>
                  </label>
                </div>
                <div class="auth-free__listings-option">
                  <label class="content-form__item-label auth-free__listings-label">
                    <input
                      type="checkbox"
                      value="reo"
                    >
                    <span class="content-form__item-check">
                      <CheckIcon />
                    </span>
                    <span class="content__form-option-text">
                      {{ $t('luxury_real_estate') }}
                    </span>
                  </label>
                </div>
                <div class="auth-free__listings-option">
                  <label class="content-form__item-label auth-free__listings-label">
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
            <div class="auth-free__block auth-free-block__customer">
              <div class="default-title auth-free__title"> {{ $t('type_customer') }}</div>
              <div class="content-form__items">
                <div class="content-form__item">
                  <div class="content-form__item-img">
                    <MultipleUsersIcon />
                  </div>
                  <div class="content-form__item-info">
                    <div class="content-form__item-title">{{ $t('national') }}</div>
                    <div class="content-form__item-descr">{{ $t('national_service') }}</div>
                  </div>
                  <label class="content-form__item-label absolute">
                    <input type="radio" class="" name='customer-group'>
                    <span class="content-form__item-check">
                      <CheckIcon />
                    </span>
                  </label>
                </div>
                <div class="content-form__item mr-0">
                  <div class="content-form__item-img">
                    <MultipleUsersIcon />
                  </div>
                  <div class="content-form__item-info">
                    <div class="content-form__item-title">{{ $t('international') }}</div>
                    <div class="content-form__item-descr">{{ $t('internation_service') }}</div>
                  </div>
                  <label class="content-form__item-label absolute">
                    <input type="radio" class="" name='customer-group'>
                    <span class="content-form__item-check">
                      <CheckIcon />
                    </span>
                  </label>
                </div>
              </div>
            </div>
            <div class="auth-free__buttons">
              <nuxt-link to="/" class = "btn-default"> {{ $t('skip_now') }}</nuxt-link>
              <button type="submit" class = "btn-default black"> {{ $t('confirm') }}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AuthGeneral from '~/components/auth/auth-general'
import CheckIcon from '~/components/icons/common/check'
import MultipleUsersIcon from '~/components/icons/profile/multiple-users'
import SelectPropertyType from '~/components/settings/settings-select-housing-type'
import SettingsBudget from '~/components/settings/settings-budget'
import SettingsSelectFrom from '~/components/settings/settings-select-from'
import SettingsSelectTo from '~/components/settings/settings-select-to'
export default {
  layout: 'auth',
  name: 'registration-free',
  components: {
    AuthGeneral,
    CheckIcon,
    MultipleUsersIcon,
    SelectPropertyType,
    SettingsBudget,
    SettingsSelectFrom,
    SettingsSelectTo
  },
  head: {
    title: 'Registration'
  },
  methods: {
    handleSubmit() {
      console.log('success');
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~/assets/css/auth/auth-general";
  .auth-general__content-title {
    line-height: 55px;
    margin-bottom: 38px;
  }
  .auth-type_less-padd {
    margin: 20px 0;
  }
  .auth-wrap-item.general {
    align-items: baseline;
  }
  .auth-general {
    margin-top: 20%;
  }
  .settings-select__items .settings-select {
    &:first-child {
      margin-right: 23px;
    }
  }
  .auth__subtitle {
    margin-bottom: 30px;
  }
</style>
