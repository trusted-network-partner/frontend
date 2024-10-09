<template>
  <div class="create-company">
    <div class="default-title">
      {{ $t("create_company") }}
    </div>
    <div class="create-company__items">
      <label
        v-for="company in companyType"
        :key="company.id"
        class="create-company__item"
      >
        <span class="create-company__item-inner">
          <input
            type="radio"
            name="company-type"
            class="create-company__input"
          />
          <span class="create-company__item-check">
            <CheckIcon />
          </span>
          <MultipleUsersIcon />
        </span>
        <span class="create-company__item-title">
          <span>
            {{ company.title }}
          </span>
        </span>
      </label>
    </div>
    <div class="create-company__btn">
      <button class="btn-default black" @click="handleClick">
        {{ $t("next_step") }}
      </button>
    </div>
  </div>
</template>

<script>
import CheckIcon from "@/components/icons/common/check";
import MultipleUsersIcon from "~/components/icons/profile/multiple-users";
export default {
  name: "create-company",

  components: {
    CheckIcon,
    MultipleUsersIcon
  },

  data() {
    return {
      companyType: [
        { id: 0, title: "Just me", value: "self-employed" },
        { id: 1, title: "Small team", value: "small-team" },
        { id: 2, title: "Large team", value: "large-team" }
      ]
    };
  },

  methods: {
    handleClick() {
      this.$emit("togglePopUp");
    }
  }
};
</script>

<style lang="scss" scoped>
.create-company {
  border-radius: 6px;
  background: $sixtyGray;
  width: 100%;
  max-width: 566px;
  margin: 0 auto 70px;
  padding: 74px 40px 70px;
  & > .default-title {
    margin-bottom: 78px;
    line-height: 120%;
    font-size: 26px;
  }
  &__items {
    display: flex;
    justify-content: space-between;
    margin-bottom: 44px;

    @include maxMedia($breakpoint-sm) {
      flex-direction: column;
    }
  }
  &__item {
    cursor: pointer;
    flex-direction: column;
    display: flex;
    align-items: center;
    &:hover {
      .create-company__item-title {
        color: $baseOrange;
      }
    }
    &-inner {
      width: 119px;
      height: 119px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      background: $baseWhite;
      border-radius: $border-5;
      margin-bottom: 14px;
      border: 2px solid $thirdlyGray;
    }
    &-title {
      text-align: center;

      span {
        transition: all 0.3s ease;
        font-weight: bold;
        text-transform: uppercase;
        display: block;
      }
    }
    &-check {
      position: absolute;
      background: $baseWhite;
      width: 24px;
      height: 24px;
      overflow: hidden;
      border-radius: 4px;
      cursor: pointer;
      border: 1px solid $thirdlyGray;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      top: 7px;
      right: 7px;
      svg {
        width: 17px;
        height: 17px;
        transition: all 0.3s ease;
        opacity: 0;
      }
    }
  }
  &__input {
    display: none;
  }
  &__btn {
    display: flex;
    justify-content: center;
    .btn-default {
      min-width: 226px;
    }
  }
}
.create-company__input:checked + .create-company__item-check {
  background: $baseOrange;
  svg {
    opacity: 1;
  }
}
</style>
