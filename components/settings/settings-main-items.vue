<template>
  <div class="settings-main__items">
    <div class="settings-main__item">
      <div class="settings-main__item-inner">
        <div class="settings-main__img">
          <SettingsUserIcon />
        </div>
        <div class="settings-main__item-info">
          <div class="settings-main__item-title">
            {{ $t('general') }}
          </div>
          <div class="settings-main__item-descr">
            {{ $t('settings_general') }}
          </div>
        </div>
        <nuxt-link to="settings-general" class="settings-main__link">
          <ArrowIcon />
        </nuxt-link>
      </div>
    </div>
    <div class="settings-main__item">
      <div class="settings-main__item-inner">
        <div class="settings-main__img">
          <SettingsUserIcon />
        </div>
        <div class="settings-main__item-info">
          <div class="settings-main__item-title">
            {{ $t('company') }}
          </div>
          <div class="settings-main__item-descr">
            {{ $t('settings_general') }}
          </div>
        </div>
        <nuxt-link to="settings-company" class="settings-main__link">
          <ArrowIcon />
        </nuxt-link>
      </div>
    </div>
    <div class="settings-main__item">
      <div class="settings-main__item-inner">
        <div class="settings-main__img">
          <SettingsUserIcon />
        </div>
        <div class="settings-main__item-info">
          <div class="settings-main__item-title">
            {{ $t('teams') }}
          </div>
          <div class="settings-main__item-descr">
            {{ $t('settings_general') }}
          </div>
        </div>
        <nuxt-link to="team" class="settings-main__link">
          <ArrowIcon />
        </nuxt-link>
      </div>
    </div>
    <div class="settings-main__item">
      <div class="settings-main__item-inner">
        <div class="settings-main__img">
          <SettingsUserIcon />
        </div>
        <div class="settings-main__item-info">
          <div class="settings-main__item-title">
            {{ $t('billing_methods') }}
          </div>
          <div class="settings-main__item-descr">
            {{ $t('settings_general') }}
          </div>
        </div>
        <nuxt-link to="billing-methods" class="settings-main__link">
          <ArrowIcon />
        </nuxt-link>
      </div>
    </div>
    <div class="settings-main__item">
      <div class="settings-main__item-inner">
        <div class="settings-main__img">
          <SettingsUserIcon />
        </div>
        <div class="settings-main__item-info">
          <div class="settings-main__item-title">
            {{ $t('tax_information') }}
          </div>
          <div class="settings-main__item-descr">
            {{ $t('settings_general') }}
          </div>
        </div>
        <nuxt-link to="tax-information" class="settings-main__link">
          <ArrowIcon />
        </nuxt-link>
      </div>
    </div>
    <div class="settings-main__item">
      <div class="settings-main__item-inner">
        <div class="settings-main__img">
          <SettingsUserIcon />
        </div>
        <div class="settings-main__item-info">
          <div class="settings-main__item-title">
            {{ $t('connected_services') }}
          </div>
          <div class="settings-main__item-descr">
            {{ $t('settings_general') }}
          </div>
        </div>
        <nuxt-link to="settings-general" class="settings-main__link">
          <ArrowIcon />
        </nuxt-link>
      </div>
    </div>
    <div class="settings-main__item">
      <div class="settings-main__item-inner">
        <div class="settings-main__img">
          <SettingsUserIcon />
        </div>
        <div class="settings-main__item-info">
          <div class="settings-main__item-title">
            {{ $t('visitors') }}
          </div>
          <div class="settings-main__item-descr">
            {{ $t('settings_general') }}
          </div>
        </div>
        <nuxt-link to="visitors" class="settings-main__link">
          <ArrowIcon />
        </nuxt-link>
      </div>
    </div>
    <div class="settings-main__item">
      <div class="settings-main__item-inner">
        <div class="settings-main__img">
          <SettingsUserIcon />
        </div>
        <div class="settings-main__item-info">
          <div class="settings-main__item-title">
            {{ $t('notification_privacy') }}
          </div>
          <div class="settings-main__item-descr">
            {{ $t('settings_general') }}
          </div>
        </div>
        <nuxt-link to="notification-privacy" class="settings-main__link">
          <ArrowIcon />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import SettingsUserIcon from '~/components/icons/profile/settings-user'
import ArrowIcon  from '~/components/icons/common/arrow'
  export default {
    name: 'settings-main-items',

    components: {
      SettingsUserIcon,
      ArrowIcon
    },
  }
</script>
