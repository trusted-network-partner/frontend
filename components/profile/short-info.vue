<template>
  <div class="agent__profile">
    <div class="profile-info">
      <div class="profile-info__header">
        <div class="profile-info__left">
          <div class="profile-info__img">
            <img src="~/assets/img/profile/profile.jpg" alt="">
          </div>
        </div>
        <div class="profile-info__right">
          <nuxt-link
            to="agent-info"
            class="profile-info__name"
          >
            Ruben Bothman
          </nuxt-link>
          <div class="profile-info__occupancy">
            {{ $t('agent.position') }}
          </div>
        </div>
      </div>
      <div class="profile-info__details">
        <div class="profile-info__item">
          <div class="profile-info__item-label">
            {{ $t('favorite') }}
          </div>
          <div class="profile-info__item-value">
            602
          </div>
        </div>
        <div class="profile-info__item">
          <div class="profile-info__item-label">
            {{ $t('followers') }}
          </div>
          <div class="profile-info__item-value">
            290
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'short-info-profile'
  }
</script>
