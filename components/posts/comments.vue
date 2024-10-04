<template>
  <div class="comments">
    <div class="comments__item">
      <nuxt-link to="agent-info" class="comments__item-img">
        <img src="~/assets/img/agent/user-big.jpg" alt="" />
      </nuxt-link>
      <div class="comments__item-details">
        <div class="comments__item-details-header">
          <nuxt-link to="agent-info" class="comments__item-title">
            Kyle Fisher
          </nuxt-link>
          <div class="comments__item-date">
            4:30 PM
          </div>
        </div>
        <div class="comments__item-text">
          Nope, they kicked me out of the office!
        </div>
      </div>
    </div>
    <div class="comments__item">
      <nuxt-link to="agent-info" class="comments__item-img">
        <img src="~/assets/img/agent/user1.jpg" alt="" />
      </nuxt-link>
      <div class="comments__item-details">
        <div class="comments__item-details-header">
          <nuxt-link to="agent-info" class="comments__item-title">
            Theresa Steward
          </nuxt-link>
          <div class="comments__item-date">
            4:30 PM
          </div>
        </div>
        <div class="comments__item-text">
          Perfect i pick you a shortly
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "comments"
};
</script>

<style lang="scss" scoped>
.comments {
  --margin-left-comments: 60px;

  margin-left: var(--margin-left-comments);
  margin-top: 30px;
  padding-left: 26px;
  border-left: 1px solid $thirdlyGray;
  width: calc(100% - var(--margin-left-comments));
  @include maxMedia($breakpoint-md) {
    --margin-left-comments: 10px;
  }
  &__item {
    margin-bottom: 30px;
    display: flex;
    align-items: flex-end;
    &-title {
      font-weight: 600;
      font-size: 14px;
      transition: all 0.3s ease;
      &:hover {
        color: $baseOrange;
      }
    }
    &-date {
      font-size: 12px;
      opacity: 0.5;
    }
    &-text {
      padding: 15px 20px;
      border-radius: $border-5;
      background: $lightWhite;
      font-size: 14px;
      line-height: 150%;
    }
    &-img {
      width: 60px;
      height: 60px;
      border-radius: $border-5;
      overflow: hidden;
      position: relative;
      display: block;
      margin-right: 13px;
      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    &-details {
      flex: 1 1 auto;
      width: calc(100% - 73px);
      &-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 5px;
      }
    }
  }
}
</style>
