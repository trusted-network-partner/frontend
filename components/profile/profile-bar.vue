<template>
  <div class="profile__info">
    <div class="profile__info-item">
      <div class="profile__info-label">
        {{ $t('tabs.events') }}
      </div>
      <div class="profile__info-value">
        456
      </div>
    </div>
    <div class="profile__info-item">
      <div class="profile__info-label">
        {{ $t('properties') }}
      </div>
      <div class="profile__info-value">
        602
      </div>
    </div>
    <div class="profile__info-item">
      <div class="profile__info-label">
        {{ $t('followers') }}
      </div>
      <div class="profile__info-value">
        290
      </div>
    </div>
    <div class="profile__btn-wrap">
      <button
        type="button"
        class="btn-default"
        :class="{'black': !isFollow}"
        @click="isFollow = !isFollow"
      >
        {{isFollow ?  $t('unfollowing') : $t('following')}}
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'profile-bar',

    data() {
      return {
        isFollow: true
      }
    }
  }
</script>
