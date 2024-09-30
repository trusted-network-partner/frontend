<template>
  <div class="create-post">
    <div class="create-post__header">
      <div class="create-post__title">
        {{$t('whats_mind')}}
      </div>
      <div class="post-upload">
        <div class="post-upload__item">
          <label class="post-upload__label">
            <input type="file" name="files" accept="application/pdf,application/vnd.ms-excel">
            <FileIcon />
          </label>
        </div>
        <div class="post-upload__item">
          <label class="post-upload__label">
            <input type="file" name="photos-file[]" multiple accept="image/jpg,image/jpeg,image/png,image/gif,image/svg">
            <PhotoIcon />
          </label>
        </div>
        <div class="post-upload__item">
          <label class="post-upload__label">
            <input type="file" name="photos-file[]" accept="video/mp4,video/x-m4v,video/*">
            <VideoIcon />
          </label>
        </div>
      </div>
    </div>
    <form class="create-post__form" @submit.prevent="handleClick">
      <div class="create-post__input-wrap">
        <input type="text" name="post-text" class="create-post__input" :placeholder="$t('source_news')">
        <div class="create-post__expand-icon">
          <ExpandIcon />
        </div>
      </div>
      <button type="submit" class="create-post__btn">
        <SendIcon />
      </button>
    </form>
  </div>
</template>

<script>
import FileIcon from '~/components/icons/upload/file'
import PhotoIcon from '~/components/icons/upload/photo'
import VideoIcon from '~/components/icons/upload/video'
import ExpandIcon from '~/components/icons/upload/expand'
import SendIcon from '~/components/icons/upload/send'
export default {
  name: 'event-post-form',

  components: {
    FileIcon,
    PhotoIcon,
    VideoIcon,
    ExpandIcon,
    SendIcon
  },

  methods: {
    handleClick() {
      console.log('success');
    }
  }
}
</script>

<style lang="scss" scoped>
  @import  '~/assets/css/posts/create-post.scss';
</style>
