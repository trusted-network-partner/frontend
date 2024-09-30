<template>
  <div class="posts">
    <CreatePost />
    <SortSelect />
    <PostsList />
  </div>
</template>

<script>
import CreatePost from '~/components/posts/createPost'
import SortSelect from '~/components/posts/sortSelect'
import PostsList  from '~/components/posts/posts-list'
  export default {
    name: 'posts',

    components: {
      CreatePost,
      SortSelect,
      PostsList
    }
  }
</script>
