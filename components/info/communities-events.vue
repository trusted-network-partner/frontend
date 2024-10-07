<template>
  <div class="communities-events">
    <div class="communities-events__header">
      <h1 class="communities-events__title">
        {{ $t('communities_events') }}
      </h1>
      <nuxt-link to="create-group-event" class="btn-default blank">
        {{ $t('create_new') }}
      </nuxt-link>
    </div>
    <div class="communities-events__info">
      <CommunitiesList />
      <EventsList />
      <Widget />
    </div>
  </div>
</template>

<script>
import CommunitiesList from '~/components/info/community-edit'
import EventsList from '~/components/info/event-edit'
import Widget  from '~/components/widgets/widgets'
  export default {
    name: 'communities-events',

    components: {
      CommunitiesList,
      EventsList,
      Widget
    }
  }
</script>

<style lang="scss" scoped>
  .communities-events__info {
    position: relative;
  }

</style>
