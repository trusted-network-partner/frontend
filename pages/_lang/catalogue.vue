<template>
  <main class="main">
    <div class="sidebar mobile-full">
      <ShortInfoProfile />
    </div>
    <div class="content-wrap">
      <div class="profile-details">
        <div class="profile__banner">
          <img src="~/assets/img/profile/banner.jpg" alt="">
        </div>
        <div class="profile__bar">
          <div class="profile__country">
            <div class="profile__country-img">
              <img src="~/assets/img/profile/flag.jpg" alt="">
            </div>
            <div class="profile__country-name">
              {{ $t('spain') }}
            </div>
          </div>
          <ProfileBar />
        </div>
        <CatalogueItems />
        <div class="profile__content">
          <ContentList />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import ShortInfoProfile from '~/components/profile/short-info'
import ProfileBar from '~/components/profile/profile-bar'
import CatalogueItems from '~/components/property/catatlogue-items'
import ContentList from '~/components/profile/content-list'

export default {
  layout: 'default',
  name: 'agent-profile',

  components: {
    ShortInfoProfile,
    ProfileBar,
    CatalogueItems,
    ContentList
  },

  head: {
    title: 'Agent profile'
  },
}
</script>

<style scoped>
  .content-wrap {
    margin-bottom: 125px;
  }
</style>
