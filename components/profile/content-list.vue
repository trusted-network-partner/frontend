<template>
  <div class="posts">
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
              {{ $t("and") }}
              <nuxt-link to="agent-info" class="post__likes-user">
                Cody Hawkins
              </nuxt-link>
              {{ $t("post.looked_this") }}
            </div>
          </div>
        </div>
        <div class="post__author">
          <div class="author">
            <nuxt-link to="agent-info" class="author__img">
              <img src="~/assets/img/posts/author2.jpg" alt="" />
            </nuxt-link>
            <div class="author__info">
              <nuxt-link to="agent-info" class="author__name">
                Drumelia Real Estate
              </nuxt-link>
              <div class="author__descr">
                Real estate agent
              </div>
            </div>
          </div>
          <div class="post__buttons">
            <button type="button" class="btn-default blank">
              {{ $t("show_all") }}
              <span> (12)</span>
            </button>
            <nuxt-link to="map-real-estate" class="btn-default">
              {{ $t("map_search") }}
            </nuxt-link>
          </div>
        </div>
        <div class="post__body">
          <div class="property__list">
            <div
              v-for="(property, index) in propertiesList"
              :key="index"
              class="property__item-wrap"
            >
              <div class="property__item">
                <nuxt-link to="real-estate-info" class="property__item-img">
                  <img
                    :src="
                      require(`~/assets/img/info/communities-events/${property.img}`)
                    "
                    alt=""
                  />
                  <span class="property__item-rating-wrap">
                    <StarIcon />
                    <span class="property__item-rating">
                      {{ property.rate }}
                    </span>
                  </span>
                </nuxt-link>
                <nuxt-link to="real-estate-info" class="property__item-title">
                  {{ property.name }}
                </nuxt-link>
                <div class="property__item-address">
                  <AddressIcon />
                  <span>{{ property.address }}</span>
                </div>
                <div class="property__item-price">${{ property.price }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="post__footer">
          <div class="post__stats">
            <div class="post__likes">
              <label class="post__likes-label">
                <input type="checkbox" name="likes" class="post__likes-input" />
                <LikesIcon />
                <span class="post__likes-count">
                  45
                </span>
              </label>
            </div>
            <div class="post__comments">
              <button type="button" class="post__comments-link">
                <CommentsIcon />
                <span class="post__comments-count">
                  45
                </span>
              </button>
            </div>
          </div>
          <div class="post__share">
            <button type="button" class="post__share__btn">
              <ShareIcon />
              <span class="post__share-text">
                {{ $t("post.share") }}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
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
              {{ $t("and") }}
              <nuxt-link to="agent-info" class="post__likes-user">
                Cody Hawkins
              </nuxt-link>
              {{ $t("post.looked_this") }}
            </div>
          </div>
        </div>
        <div class="post__author">
          <div class="author">
            <nuxt-link to="agent-info" class="author__img">
              <img src="~/assets/img/posts/author1.jpg" alt="" />
            </nuxt-link>
            <div class="author__info">
              <nuxt-link to="agent-info" class="author__name">
                Theresa Steward
              </nuxt-link>
              <div class="author__descr">
                Real estate agent
              </div>
            </div>
          </div>
          <div class="post__buttons">
            <button type="button" class="btn-default blank">
              {{ $t("show_all") }}
              <span> (12)</span>
            </button>
            <nuxt-link to="map-real-estate" class="btn-default">
              {{ $t("map_search") }}
            </nuxt-link>
          </div>
        </div>
        <div class="post__body">
          <div class="property__list">
            <div
              v-for="(property, index) in propertiesListThird"
              :key="index"
              class="property__item-wrap"
            >
              <div class="property__item">
                <nuxt-link to="real-estate-info" class="property__item-img">
                  <img
                    :src="
                      require(`~/assets/img/info/communities-events/${property.img}`)
                    "
                    alt=""
                  />
                  <span class="property__item-rating-wrap">
                    <StarIcon />
                    <span class="property__item-rating">
                      {{ property.rate }}
                    </span>
                  </span>
                </nuxt-link>
                <nuxt-link to="real-estate-info" class="property__item-title">
                  {{ property.name }}
                </nuxt-link>
                <div class="property__item-address">
                  <AddressIcon />
                  <span>{{ property.address }}</span>
                </div>
                <div class="property__item-price">${{ property.price }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="post__footer">
          <div class="post__stats">
            <div class="post__likes">
              <label class="post__likes-label">
                <input type="checkbox" name="likes" class="post__likes-input" />
                <LikesIcon />
                <span class="post__likes-count">
                  45
                </span>
              </label>
            </div>
            <div class="post__comments">
              <button type="button" class="post__comments-link">
                <CommentsIcon />
                <span class="post__comments-count">
                  45
                </span>
              </button>
            </div>
          </div>
          <div class="post__share">
            <button type="button" class="post__share__btn">
              <ShareIcon />
              <span class="post__share-text">
                {{ $t("post.share") }}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
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
              {{ $t("and") }}
              <nuxt-link to="agent-info" class="post__likes-user">
                Cody Hawkins
              </nuxt-link>
              {{ $t("post.looked_this") }}
            </div>
          </div>
        </div>
        <div class="post__author">
          <div class="author">
            <nuxt-link to="agent-info" class="author__img">
              <img src="~/assets/img/posts/author3.jpg" alt="" />
            </nuxt-link>
            <div class="author__info">
              <nuxt-link to="agent-info" class="author__name">
                Ruben Bothman
              </nuxt-link>
              <div class="author__descr">
                Real estate agent
              </div>
            </div>
          </div>
          <div class="post__buttons">
            <button type="button" class="btn-default blank">
              {{ $t("show_all") }}
              <span> (12)</span>
            </button>
            <nuxt-link to="map-real-estate" class="btn-default">
              {{ $t("map_search") }}
            </nuxt-link>
          </div>
        </div>
        <div class="post__body">
          <div class="property__list">
            <div
              v-for="(property, index) in propertiesList"
              :key="index"
              class="property__item-wrap"
            >
              <div class="property__item">
                <nuxt-link to="real-estate-info" class="property__item-img">
                  <img
                    :src="
                      require(`~/assets/img/info/communities-events/${property.img}`)
                    "
                    alt=""
                  />
                  <span class="property__item-rating-wrap">
                    <StarIcon />
                    <span class="property__item-rating">
                      {{ property.rate }}
                    </span>
                  </span>
                </nuxt-link>
                <nuxt-link to="real-estate-info" class="property__item-title">
                  {{ property.name }}
                </nuxt-link>
                <div class="property__item-address">
                  <AddressIcon />
                  <span>{{ property.address }}</span>
                </div>
                <div class="property__item-price">${{ property.price }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="post__footer">
          <div class="post__stats">
            <div class="post__likes">
              <label class="post__likes-label">
                <input type="checkbox" name="likes" class="post__likes-input" />
                <LikesIcon />
                <span class="post__likes-count">
                  45
                </span>
              </label>
            </div>
            <div class="post__comments">
              <button type="button" class="post__comments-link">
                <CommentsIcon />
                <span class="post__comments-count">
                  45
                </span>
              </button>
            </div>
          </div>
          <div class="post__share">
            <button type="button" class="post__share__btn">
              <ShareIcon />
              <span class="post__share-text">
                {{ $t("post.share") }}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LikesIcon from "~/components/icons/posts/likes";
import CommentsIcon from "~/components/icons/posts/comments";
import ShareIcon from "~/components/icons/posts/share";
import StarIcon from "~/components/icons/posts/star";
import AddressIcon from "~/components/icons/common/address";
import PropertyList from "~/components/property/property";
export default {
  name: "content-list",

  components: {
    LikesIcon,
    CommentsIcon,
    ShareIcon,
    StarIcon,
    AddressIcon,
    PropertyList
  },

  data() {
    return {
      propertiesList: [
        {
          id: 0,
          img: "pic2.jpg",
          name: "Detached house with see views",
          rate: "5.0",
          address: "Marbella Spain",
          price: "$700,000"
        },
        {
          id: 1,
          img: "pic4.jpg",
          name: "Beautiful house  with big plot...",
          rate: "5.0",
          address: "Rivne Ukraine",
          price: "342,000"
        },
        {
          id: 2,
          img: "pic1.jpg",
          name: "Villa in first line of the beach",
          rate: "5.0",
          address: "440 E 79th St APT 8C, New York, NY 10075",
          price: "342,000"
        }
      ],
      propertiesListSecond: [
        {
          id: 0,
          img: "pic7.jpg",
          name: "Villa in first line of the beach",
          rate: "5.0",
          address: "Kiev, Ukraine",
          price: "$70,000"
        },
        {
          id: 1,
          img: "pic9.jpg",
          name: "Urban plot in Albatera",
          rate: "5.0",
          address: "Albatera, Spain",
          price: "$445,450"
        },
        {
          id: 2,
          img: "pic1.jpg",
          name: "Villa in first line of the beach",
          rate: "5.0",
          address: "Torrevieja, Spain",
          price: "$320,000"
        }
      ],
      propertiesListThird: [
        {
          id: 0,
          img: "pic1.jpg",
          name: "Amazing studio in goulf course",
          rate: "5.0",
          address: "Torrevieja, Spain",
          price: "$350,000"
        },
        {
          id: 1,
          img: "pic3.jpg",
          name: "Amazing studio in goulf course",
          rate: "5.0",
          address: "Albatera, Spain",
          price: "$90,000"
        },
        {
          id: 2,
          img: "pic2.jpg",
          name: "Villa in first line of the beach",
          rate: "5.0",
          address: "Torrevieja, Spain",
          price: "$320,000"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/posts/posts-list";
.post__buttons {
  width: auto;

  @include maxMedia($breakpoint-md) {
    width: 100%;
  }

  // @include maxMedia($breakpoint-lg) {
  //   width: auto;
  // }
}
.post__body {
  padding-bottom: 41px;
}
.posts__item {
  margin-bottom: 53px;
}
.posts__item:last-child {
  margin-bottom: 0;
}
.property__item-img {
  display: block;
}
</style>
