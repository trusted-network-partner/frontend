<template>
  <div class="chat-info">
    <div class="chat-info__header">
      <div class="chat-info__header-user">
        <div class="chat-info__user">
          {{ $t('chat_with') }}
          <nuxt-link to="agent-info" class="bold">
            Cooper Vaccaro
          </nuxt-link>
        </div>
        <div class="chat-info__seen">
         {{$t('last_online')}}: 4 {{$t('hours')}} {{$t('ago')}}
        </div>
      </div>
      <div class="chat-info__media">
        <button type="button" class="chat-info__btn">
          <NotesIcon />
          <span>Notes</span>
        </button>
        <button type="button" class="chat-info__btn">
          <FileIcon />
          <span>{{ $t('shared_media') }} (12)</span>
        </button>
      </div>
    </div>
    <div class="chat-messages">
      <div class="chat-messages__date">
        {{ $t('yesterday') }}, 29 aug 4:20
      </div>
      <div class="chat-message__item owner">
        <div class="chat-message__item-list">
          <span class="chat-message">
            Hi, Kyle. How are you doing? Did you get that job yesterday?
          </span>
        </div>
      </div>
      <div class="chat-message__item">
        <div class="chat-message__item-list">
          <span class="chat-message">
            Nope, they kicked me out of the office!
          </span>
        </div>
        <div class="chat-message__user">
          <img src="~/assets/img/agent/user-big.jpg" alt="">
        </div>
      </div>
      <div class="chat-message__item owner">
        <div class="chat-message__item-list">
          <span class="chat-message">
            Wow! I can invite you in my new project. We need a product designer right now!
          </span>
        </div>
      </div>
      <div class="chat-message__item">
        <div class="chat-message__item-list">
          <span class="chat-message">
            Nope, they kicked me out of the office!
          </span>
          <span class="chat-message">
            Thanks!
          </span>
        </div>
        <div class="chat-message__user">
          <img src="~/assets/img/agent/user-big.jpg" alt="">
        </div>
      </div>
    </div>
    <div class="chat-post-message">
      <form class="create-post__form" @submit.prevent="handleClick">
        <div class="create-post__input-wrap">
          <input type="text" name="post-text" class="create-post__input" :placeholder="$t('write_message')">
          <label class="create-post__expand-icon">
            <input type="file" name="photos-file[]" multiple accept="image/jpg,image/jpeg,image/png,image/gif,image/svg">
            <FileIcon />
          </label>
        </div>
        <button type="submit" class="create-post__btn">
          <SendIcon />
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import FileIcon from '~/components/icons/upload/file'
import NotesIcon from '~/components/icons/common/notes'
import SendIcon from '~/components/icons/upload/send'
  export default {
    name: 'chat-info',

    components: {
      FileIcon,
      SendIcon,
      NotesIcon
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
 @import "~/assets/css/chat/chat";
</style>
