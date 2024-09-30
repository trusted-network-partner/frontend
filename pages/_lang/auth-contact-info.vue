<template>
  <div class="container">
    <div class="auth-wrap-items margin-offset">
      <div class="auth-wrap-item general">
        <div class="auth-wrap-general">
          <AuthGeneral>
            <div class="auth-general__content-pretitle short-text">
              {{ $t('auth.contact_text') }}
              <span>{{ $t('auth.contact.bold') }}</span>
            </div>
            <div class="auth-general__content-title">{{ $t('auth.aside_title') }}</div>
          </AuthGeneral>
        </div>
      </div>
      <div class="auth-wrap-item auth-type_less-padd">
        <div class="auth-type__steps">
          <nuxt-link to="auth-type" class="auth-type__step">1</nuxt-link>
          <nuxt-link to="auth-identification" class="auth-type__step">2</nuxt-link>
          <div class="auth-type__step  active_step">3</div>
          <div class="auth-type__step-text"> <span> {{ $t('auth.contact_step') }} </span></div>
          <nuxt-link to="auth-company" class="auth-type__step">4</nuxt-link>
          <nuxt-link to="auth-application" class="auth-type__step">5</nuxt-link>
        </div>
        <div class="auth-wrap-item__container">
          <div class="default-title auth__title medium-margin_bottom">{{ $t('auth.contact_step') }}</div>
          <form class="auth-identification__form">
            <div>
                <SelectItem
                  :selectOptions="optionsSelect"
                  :selectClass="'select-full-info select-full auth__default'"
                >
                  <div class="info-default__label">{{ $t('auth.select_country') }}</div>
                </SelectItem>
              </div>
              <div class="info-default auth__default">
                <label for="address" class="info-default__label">{{ $t('auth.address_label') }}</label>
                <input id="address" type="text" :placeholder="$t('auth.address_descr')" class="info-default__value ">
              </div>
              <div class="info-default auth__default">
                <label for="contact-phone" class="info-default__label">{{ $t('auth.contact_phone') }} </label>
                <input id="contact-phone" type="text" :placeholder="$t('auth.contact_phone')" class="info-default__value ">
              </div>
              <div class="info-default auth__default">
                <label for="contact-email" class="info-default__label">{{ $t('auth.contact_email') }}</label>
                <input id="contact-email" type="email" :placeholder="$t('auth.contact_email')" class="info-default__value ">
              </div>
              <div class="info-default auth__default">
                <label for="website" class="info-default__label">{{ $t('auth.website') }}</label>
                <input id="website" type="text" :placeholder="$t('auth.website')" class="info-default__value ">
              </div>
            <div class="auth-type__notification">
              <InfoIcon />
              <div class="auth-type__notification-text">{{ $t('auth.notice') }}</div>
            </div>
            <nuxt-link to="auth-company" class="btn-default black auth__btn-login">{{ $t('continue') }}</nuxt-link>
        </form>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import AuthGeneral from '~/components/auth/auth-general'
import InfoIcon from '~/components/icons/common/info'
import SelectItem from '~/components/select/selectItem'
export default {
  layout: 'auth',
  name: 'auth-contact-info',

  components: {
    AuthGeneral,
    InfoIcon,
    SelectItem
  },

  head: {
    title: 'Authentication user'
  },

  data() {
    return {
      optionsSelect: [
        { id: 1, name: 'Choose country', value: 'choose-country', chosen: true, isDefault: true },
        { id: 2, name: 'Spain', value: 'spain', chosen: false },
        { id: 3, name: 'Ukraine', value: 'ukraine', chosen: false },
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~/assets/css/auth/auth-general";
  .auth-type__notification-text {
    text-transform: lowercase;
    &:first-letter {
      text-transform: capitalize;
    }
  }
</style>
