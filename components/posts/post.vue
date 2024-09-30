<template>
  <div class="posts__item">
    <div class="post">
      <div class="post__header">
        <div class="post__likes-info">
          <LikesIcon />
          <div class="post__likes-users">
            <nuxt-link to="agent-info" class="post__likes-user">
              Ted Bell,
            </nuxt-link>
            <nuxt-link to="agent-info" class="post__likes-user">
              Annette Nguyen
            </nuxt-link>
            {{ $t('and') }}
            <nuxt-link to="agent-info" class="post__likes-user">
              Cody Hawkins
            </nuxt-link>
            {{ $t('post.looked_this') }}
          </div>
        </div>
      </div>
      <div class="post__author">
        <div class="author">
          <nuxt-link to="agent-info"
           class="author__img"
          >
            <img src="~/assets/img/posts/author1.jpg" alt="">
          </nuxt-link>
          <div class="author__info">
            <nuxt-link to="agent-info" class="author__name">
              Theresa Steward
            </nuxt-link>
            <div class="author__descr">
              Developer
            </div>
          </div>
        </div>
        <button type="button" class="post__author-btn select-value-hidden">
          <SelectItem
            :selectOptions="optionsSelect"
          >
            <DotsIcon />
          </SelectItem>
        </button>
      </div>
      <div class="post__body">
        <p class="post__text">
          What did the Dursleys care if Harry lost his place on the House Quidditch team because he hadn’t practiced all summer? What was it to the Dursleys if Harry went back to school without any of his homework done? The Dursleys were what wizards called Muggles (not a drop of magical blood in their veins).
          <button type="button" class="post__more-btn">
           {{ $t('read_more') }}
          </button>
        </p>
      </div>
      <div class="post__footer">
        <div class="post__stats">
          <div class="post__likes">
            <label class="post__likes-label">
              <input type="checkbox" name="likes" class="post__likes-input">
              <LikesIcon />
              <span class="post__likes-count">
                45
              </span>
            </label>
          </div>
          <div class="post__comments">
            <button
              type="button"
              class="post__comments-link"
              :class="{'active': isCommentShown}"
            >
              <CommentsIcon />
              <span class="post__comments-count">
                45
              </span>
            </button>
          </div>
        </div>
        <div class="post__share">
          <div class="cursor">
            <ShareSocial>
              <ShareIcon />
              <span class="post__share-text">
                {{ $t('post.share') }}
              </span>
            </ShareSocial>
          </div>
        </div>
      </div>
      <Comments
        v-if="isCommentShown"
      />
    </div>
  </div>
</template>

<script>
import LikesIcon from '~/components/icons/posts/likes'
import CommentsIcon from '~/components/icons/posts/comments'
import ShareIcon from '~/components/icons/posts/share'
import DotsIcon from '~/components/icons/posts/dots'
import SelectItem from '~/components/select/selectItem'
import ShareSocial from '~/components/share-social/share-social'
import Comments from '~/components/posts/comments'

export default {
  name: 'post',

  components: {
    LikesIcon,
    CommentsIcon,
    ShareIcon,
    DotsIcon,
    SelectItem,
    ShareSocial,
    Comments
  },

  data() {
    return {
      isCommentShown: true,
      optionsSelect: [
        { id: 1, name: 'Delete', value: 'delete', chosen: true },
        { id: 2, name: 'Flag', value: 'flag', chosen: false },
        { id: 3, name: 'Not interesting', value: 'not-interesting', chosen: false },
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/css/posts/posts-list";
</style>
