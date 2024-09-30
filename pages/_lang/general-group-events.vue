<template>
  <main class="main">
    <div class="sidebar">
      <Filters />
    </div>
    <div class="content-wrap">
      <div class="real-estate-wrap">
        <h2 class="default-title">
          {{ $t('communities_events') }} 1 of 12
        </h2>
        <GroupEventsList />
      </div>
    </div>
  </main>
</template>

<script>
import Filters from '~/components/filter/filters'
import GroupEventsList from '~/components/info/general-group-events'
export default {
  layout: 'default',
  name: 'general-group-events',

  components: {
    GroupEventsList,
    Filters
  },

  head: {
    title: 'General group events'
  },
}
</script>

<style scoped>
  .btn-filter {
    margin-bottom: 34px;
  }
  .main {
    margin-top: 32px;
  }
  .content-wrap {
    margin-bottom: 147px;
    position: relative;
  }
  .pagination-list{
    margin-left: 10px;
  }
</style>
