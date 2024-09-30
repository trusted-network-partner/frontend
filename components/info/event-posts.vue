<template>
  <div class="posts">
    <EventPostForm />
    <SortSelect />
    <div class="posts__list">
      <Post />
      <Post />
    </div>
  </div>
</template>

<script>
import EventPostForm from '~/components/info/event-post-form'
import SortSelect from '~/components/posts/sortSelect'
import Post from '~/components/posts/post'
export default {
  name: 'event-posts',

  components: {
    EventPostForm,
    SortSelect,
    Post
  }
}
</script>

<style lang="scss" scoped>
  .posts__item {
    margin-bottom: 50px;
    &:last-child {
    margin-bottom: 0;
     }
  }
</style>
