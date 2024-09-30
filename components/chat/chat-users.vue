<template>
  <div class="chat-users-wrap items">
    <div class="chat-users__header">
      <div class="default-title">
        {{ $t('nav.chat') }}
      </div>
      <div class="chat-users__btns">
        <div class="chat-users__btn">
          <MessagesIcon />
        </div>
        <div
          @click="togglePopUp"
          class="chat-users__btn"
        >
          <AddUserIcon />
        </div>
      </div>
    </div>
    <div class="chat-users__list">
      <div
        v-for="(agent, index) in agents"
        :key="index"
        class="item"
      >
        <div
          class="item__img-wrap"
        >
        <span
          v-if="agent.img"
          class="item__img"
        >
          <img
            :src="require(`~/assets/img/trusted/${agent.img}.jpg`)" alt=""
          />
          <span
            v-if="agent.isOnline"
            class="item-status"
          />
        </span>
        </div>
        <div class="item__info">
          <div
            class="item__name"
          >
            {{agent.name || ''}}
            <span
              v-if="agent.isUnread"
              class="item-elem"
            />
          </div>
          <div class="item__message">
            {{agent.messages}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MessagesIcon from '~/components/icons/common/messages'
import AddUserIcon from '~/components/icons/common/add-user'
  export default {
    name: 'chat-users',

    components: {
      MessagesIcon,
      AddUserIcon
    },

    data() {
      return {
        agents: [
          { id: 1, img: "trusted1", name : "Cooper Vaccaro", messages: 'You: Hey, how is your project?', isUnread: false, isOnline : true },
          { id: 2, img: "trusted2", name : "Livia Mango", messages: 'You: Hey, how is your project?', isUnread: true, isOnline : false },
          { id: 3, img: "trusted3", name : "Jordyn Lipshutz", messages: 'You: Hey, how is your project?', isUnread: true, isOnline : true },
          { id: 4, img: "trusted4", name : "Theresa Steward", messages: 'You: Hey, how is your project?', isUnread: false, isOnline : false },
          { id: 5, img: "trusted5", name : "Andriy Koshelevich", messages: 'You: Hey, how is your project?', isUnread: true, isOnline : false },
          { id: 6, img: "trusted6", name : "Audrey Alexander", messages: 'You: Hey, how is your project?', isUnread: false, isOnline : false },
          { id: 7, img: "trusted7", name : "Idealista", messages: 'You: Hey, how is your project?', isUnread: false, isOnline : false }
        ]
      }
    },
    methods: {
      togglePopUp() {
        this.$emit('togglePopUp')
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~/assets/css/sidebar/items";
  @import "~/assets/css/chat/chat";
</style>
