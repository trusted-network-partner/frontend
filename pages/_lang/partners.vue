<template>
  <main class="main">
    <div class="sidebar">
      <ProfileLinks />
    </div>
    <div class="content-wrap users">
      <div class="content-wrap__inner">
        <div class="partners users">
          <h2 class="users__title">
            {{ $t('nav.partners') }}
          </h2>
          <PartnersList />
        </div>
        <SearchForm/>
      </div>
      <Widgets />
    </div>
  </main>
</template>

<script>
import ProfileLinks from '~/components/profile/profile-links'
import PartnersList from '~/components/partners/partners'
import SearchForm from '~/components/partners/search-form'
import Widgets from '~/components/widgets/widgets'
export default {
  layout: 'default',
  name: 'partners',

  components: {
    ProfileLinks,
    PartnersList,
    SearchForm,
    Widgets
  },

  head: {
    title: 'Partners'
  },
}
</script>

<style lang="scss" scoped>
@import "~/assets/css/partners/partners";
  .content-wrap {
    margin-bottom: 120px;
    position: relative;
  }
  .widgets {
    position: absolute;
    right: -152px;
    top: 13%;
  }
  .pagination-list{
    margin-left: 10px;
  }
</style>
