<template>
  <div
    v-if="isShown"
    class="pop-up-wrap"
  >
    <div
      class="overlay"
      @click="popUpClose"
    />
    <div class="pop-up pop-up-member">
      <div class="pop-up__header">
        <div class="default-title">
          {{ $t('member') }}
        </div>
        <div  @click="popUpClose">
          <CloseBigIcon />
        </div>
      </div>
      <div
        class="pop-up__info-wrapper"
      >
        <div class="content-form__item">
          <div class="content-form__item-img">
            <ManagerIcon />
          </div>
          <div class="content-form__item-info">
            <div class="content-form__item-title">
              {{ $t('real_estate_manager') }}
            </div>
            <p class="content-form__item-descr">
              {{ $t('user_role') }}
            </p>
          </div>
          <label class="content-form__item-label absolute">
            <input
              type="radio"
              name="member-group"
              value="manager"
            >
            <span class="content-form__item-check">
            <CheckIcon />
          </span>
          </label>
        </div>
        <div class="content-form__item">
          <div class="content-form__item-img">
            <AgentIcon />
          </div>
          <div class="content-form__item-info">
            <div class="content-form__item-title">
              {{ $t('real_estate_agent') }}
            </div>
            <p class="content-form__item-descr">
              {{ $t('user_role') }}
            </p>
          </div>
          <label class="content-form__item-label absolute">
            <input
              type="radio"
              name="member-group"
              value="agent"
            >
            <span class="content-form__item-check">
            <CheckIcon />
          </span>
          </label>
        </div>
        <div class="content-form__item-btn">
          <button
            @click="handleClick"
            type="button" class="btn-default black"
          >
            {{ $t('next_step') }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckIcon from '~/components/icons/common/check'
import CloseBigIcon from '~/components/icons/common/close-big'
import ManagerIcon from '~/components/icons/member/manager'
import AgentIcon from '~/components/icons/member/agent'

export default {
  name: 'member-pop-up',

  components: {
    CheckIcon,
    CloseBigIcon,
    ManagerIcon,
    AgentIcon
  },

  data() {
    return {
      isShown: false
    }
  },

  methods: {
    open() {
      this.isShown = true
    },
    popUpClose() {
      this.isShown = false
    },
    handleClick() {
      this.popUpClose()
      this.$emit('addMember')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/css/default/pop-ups";
  .pop-up {
    max-width: 663px;
    width: 100%;
    padding: 40px 40px 58px;
  }
  .content-form {
    &__item {
      padding: 20px;
      margin-right: 0;
      margin-bottom: 20px;
      &-img {
        width: 70px;
        height: 70px;
      }
      &-btn {
        display: flex;
        justify-content: center;
        margin-top: 30px;
        .btn-default {
          min-width: 235px;
        }
      }
    }
  }
</style>
