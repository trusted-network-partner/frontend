<template>
  <div class="item-container">
    <div class="default-title">{{ $t('skills') }}</div>
    <div
      class="item-container__info"
    >
      <div
        v-for="skill in skills"
        :key="skill.id"
        class="item-info"
      >
        <div
          class="item-info__heading"
          :class="{'active': skill.active}"
          @click="skill.active = !skill.active"
        >
          <div class="item-info__title">
            {{ skill.title }}
          </div>
          <div class="item-info__count">
            {{ skill.count }}
          </div>
          <div
            v-if="skill.assets"
            class="item-info__icon"
          >
            <TriangleIcon />
          </div>
        </div>
        <div
          v-if="skill.assets && skill.active"
          class="item-info__dropdown"
        >
          <div
            v-for="item in skill.assets"
            :key="item.id"
            class="item-info__dropdown-item"
          >
            <div class="item-info__dropdown-content">
              <div class="item-info__dropdown-title">
                {{ item.title }}
              </div>
              <label class="content-form__item-label">
                <input
                  v-model="item.checked"
                  type="checkbox"
                >
                <span
                  class="content-form__item-check"
                >
                  <CheckIcon />
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TriangleIcon from '~/components/icons/common/triangle'
import CheckIcon from '~/components/icons/common/check'
export default {
  name: 'add-agent-skills-info',

  components: {
    TriangleIcon,
    CheckIcon
  },

  data() {
    return {
      skills: [
        {id: 0, title: 'languages', count: 6,
          assets: [
            {id: 0, title: 'Spanish', checked: false },
            {id: 1, title: 'Ukrainian', checked: false },
            {id: 2, title: 'Russian', checked: false },
            {id: 3, title: 'English', checked: false },
            {id: 4, title: 'French', checked: false },
            {id: 5, title: 'Deutschland', checked: false },
          ],
          active: false,
        },
        {id: 1, title: 'business_knowledge', count: 6, active: false, },
        {id: 2, title: 'services', count: 6, active: false, },
        {id: 3, title: 'personal_qualities', count: 6, active: false, },
        {id: 4, title: 'listings', count: 6, active: false, },
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
  .item {
    &-container {
      max-width: 590px;
      &__info {
        margin-top: 60px;
        margin-bottom: 30px;
      }
    }
    &-info {
      margin-bottom: 20px;
      &__dropdown-item {
        padding: 18px 5px 18px 0;
        border-bottom: 1px solid $thirdlyGray;
      }
      &__dropdown-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      &__dropdown-content {
        text-transform: uppercase;
      }
      &__icon {
        position: absolute;
        top: 50%;
        right: 30px;
        margin-top: -10px;
        transition: all .3s ease;
      }
      &__heading {
        display: flex;
        align-items: center;
        background: $baseWhite;
        border-radius: $border-5;
        padding: 22px 20px;
        height: 66px;
        position: relative;
        cursor: pointer;
      }
      &__title {
        text-transform: uppercase;
        font-weight: bold;
        font-size: 14px;
        margin-right: 30px;
      }
      &__count {
        font-weight: bold;
        font-size: 14px;
      }
    }
  }
  .item-info__heading.active .item-info__icon {
    transform: rotate(180deg);
  }
</style>
