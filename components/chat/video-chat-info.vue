<template>
  <div class="video__conference">
    <div class="chat-info video__info">
      <div class="chat-info__header">
        <div class="chat-info__header-tabs">
          <button
            v-for="(tab, index) in tabs"
            @click="currentTab = index"
            :key="index"
            class="chat-info__header-tab"
            :class="{'chat-info__tab_active': currentTab === index}"
          >
            {{ $t(tab.label) }}
          </button>
        </div>
        <div class="chat-info__media">
          <button type="button" class="chat-info__btn">
            <FileIcon/>
            <span>{{ $t('shared_media') }} (12)</span>
          </button>
        </div>
      </div>
      <div v-if="currentTab === 0">
        <div class="chat-messages video__messages">
          <div class="chat-message__item video__message-item">
            <div class="chat-message__item-list video__message-item__list">
          <span class="video__message-name">
            Kyle Fisher
          </span>
              <span class="video__message-time">
            4:30 PM
          </span>
              <span class="chat-message">
            Nope, they kicked me out of the office!
          </span>
            </div>
            <div class="chat-message__user video__message-user">
              <img src="~/assets/img/agent/user-big.jpg" alt="">
            </div>
          </div>
          <div class="chat-message__item owner video__message-item video__owner">
            <div class="chat-message__item-list video__message-item__list">
          <span class="chat-message">
            Hi, Kyle. How are you doing? Did you get that job yesterday?
          </span>
            </div>
          </div>
          <div class="chat-message__item owner video__message-item video__owner">
            <div class="chat-message__item-list video__message-item__list">
          <span class="chat-message">
            Hi, Kyle. How are you doing? Did you get that job yesterday?
          </span>
            </div>
          </div>
          <div class="chat-message__item video__message-item">
            <div class="chat-message__item-list video__message-item__list">
          <span class="video__message-name">
            Kyle Fisher
          </span>
              <span class="video__message-time">
            4:30 PM
          </span>
              <span class="chat-message">
            Nope, they kicked me out of the office!
          </span>
            </div>
            <div class="chat-message__user video__message-user">
              <img src="~/assets/img/agent/user-big.jpg" alt="">
            </div>
          </div>
          <div class="chat-message__item video__message-item">
            <div class="chat-message__item-list video__message-item__list">
              <span class="video__message-name">
                Kyle Fisher
              </span>
                  <span class="video__message-time">
                4:30 PM
              </span>
                  <span class="chat-message">
                Nope, they kicked me out of the office!
              </span>
            </div>
            <div class="chat-message__user video__message-user">
              <img src="~/assets/img/agent/user-big.jpg" alt="">
            </div>
          </div>
          <div class="chat-message__item owner video__message-item video__owner">
            <div class="chat-message__item-list video__message-item__list">
          <span class="chat-message">
            Hi, Kyle. How are you doing? Did you get that job yesterday?
          </span>
            </div>
          </div>
        </div>
        <div class="chat-post-message">
          <form class="create-post__form" @submit.prevent="handleClick">
            <div class="create-post__input-wrap">
              <input type="text" name="post-text" class="create-post__input" :placeholder="$t('write_message')">
              <label class="create-post__expand-icon">
                <input type="file" name="photos-file[]" multiple
                  accept="image/jpg,image/jpeg,image/png,image/gif,image/svg">
                <FileIcon/>
              </label>
            </div>
            <button type="submit" class="create-post__btn">
              <SendIcon/>
            </button>
          </form>
        </div>
      </div>
      <div v-if="currentTab === 1">
        {{ $t('participants') }}
      </div>
    </div>
    <div class="video__conference-image">
      <img src="~/assets/img/video-conference/video-conference.png" alt="" class="video__conference-img">
    </div>
  </div>
</template>

<script>
import FileIcon from '~/components/icons/upload/file'
import SendIcon from '~/components/icons/upload/send'

export default {
  name: 'video-chat-info',

  components: {
    FileIcon,
    SendIcon
  },

  data() {
    return {
      tabs: [
        {
          label: 'messages',
        },
        {
          label: 'participants',
        }
      ],
      currentTab: 0,
    }
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
