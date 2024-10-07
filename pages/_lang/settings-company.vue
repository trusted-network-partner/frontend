<template>
  <main
    class="main settings-company"
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
                  {{ $t('company') }}
                </div>
                <div class="settings-back__descr">
                  {{ $t('company_descr') }}
                </div>
              </div>
            </div>
            <div class="content-wrap__inner">
              <CreateCompany
                @togglePopUp="togglePopUp"
              />
            </div>
          </div>
        </div>
        <Widgets />
      </div>
    </div>
    <AddMemberPopUp
      ref="addMemberPopUp"
    />
    <MemberPopUp
      ref="memberPopUp"
      @addMember="addMember"
    />
  </main>
</template>

<script>
import Widgets from '~/components/widgets/widgets'
import ArrowBack from '~/components/icons/common/arrow-back'
import CreateCompany from '~/components/company/create-company'
import MemberPopUp from '~/components/pop-ups/member-pop-up'
import AddMemberPopUp from '~/components/pop-ups/add-member-pop-up'
export default {

  layout: 'header-underline',

  name: 'settings-company',

  head: {
    title: 'Settings company'
  },

  components: {
    Widgets,
    ArrowBack,
    CreateCompany,
    MemberPopUp,
    AddMemberPopUp
  },

  methods: {
    togglePopUp() {
      this.$refs.memberPopUp.open()
    },
    addMember() {
      this.$refs.addMemberPopUp.open()
    }
  },
}
</script>

<style lang="scss" scoped>
.settings-section {
  margin-bottom: 60px;
}

.content-wrap {
  &__details {
    max-width: 1074px;
  }
  &-full-width {
    margin-bottom: 31px;
    width: 100%;
  }
  &__inner {
    margin-top: 65px;
  }
}
.settings-company {
  .content-wrap__details, .content-wrap-details {
    max-width: 100%;
  }
}
</style>
