<template>
  <main class="main">
    <div class="sidebar mobile-full">
      <ProfileLinks />
    </div>
    <div class="content-wrap users">
      <div class="content-wrap__inner">
        <div class="partners users">
          <h2 class="users__title">
            {{ $t('search.query') }}
          </h2>
          <div class="users__query">
            {{ $t('search.query_result') }}: Theresa Steward
          </div>
          <SearchList />
        </div>
        <SearchForm/>
      </div>
      <Widgets />
    </div>
  </main>
</template>

<script>
import ProfileLinks from '~/components/profile/profile-links'
import SearchForm from '~/components/partners/search-form'
import Widgets from '~/components/widgets/widgets'
import SearchList from '~/components/partners/searchList'

export default {
  layout: 'default',
  name: 'search',

  components: {
    ProfileLinks,
    SearchList,
    SearchForm,
    Widgets
  },

  head: {
    title: 'Search'
  },
}
</script>

<style lang="scss" scoped>
@import "~/assets/css/partners/partners";
  .content-wrap {
    margin-bottom: 120px;
    position: relative;
  }

  .pagination-list{
    margin-left: 10px;
  }
  .users__title {
    margin-bottom: 15px;
  }
</style>
