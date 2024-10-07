<template>
  <div class="users-items">
    <div v-for="customer in customers" class="user-item">
      <div class="user-item__details">
        <div class="user-item__img">
          <nuxt-link to="agent-info" v-if="customer.img">
            <img
              :src="require(`~/assets/img/customers/${customer.img}`)"
              alt=""
            />
          </nuxt-link>
        </div>
        <div class="user-item__info">
          <nuxt-link to="agent-info" class="user-item__name">
            {{ customer.name || "" }}
          </nuxt-link>
          <div class="user-item__info-bottom">
            <div class="user-item__info-wrap">
              <span class="user-item__descr">
                {{ customer.descr }}
              </span>
              <span class="user-item__status">
                {{ customer.status }}
              </span>
            </div>
            <div class="user-item__tel">
              <a href="tel:+34678103610">
                {{ customer.tel }}
              </a>
            </div>
            <div class="user-item__email">
              <a href="tel:+34678103610">
                {{ customer.email }}
              </a>
            </div>
            <div class="user-item__btn-wrap">
              <button
                type="button"
                class="user-item__btn"
                @click="customerDetails(customer.id)"
              >
                <span class="user-item__btn-label">{{ $t("learnMore") }}</span>
                <span class="user-item__icon">
                  <ArrowIcon />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ArrowIcon from "~/components/icons/common/arrow";
import { mapGetters } from "vuex";

export default {
  name: "customers",

  components: {
    ArrowIcon
  },

  computed: {
    ...mapGetters("customers", ["customers"])
  },

  methods: {
    customerDetails(id) {
      this.$emit("getCustomerDetails", id);
    }
  },

  async fetch() {
    const locale = this.$cookies.get("locale");
    await this.$store.dispatch("customers/getCustomers", locale);
  }
};
</script>

<style lang="scss" scoped>
.user-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 35px;
  border-bottom: 1px solid $thirdlyGray;
  margin-bottom: 30px;
  &:last-child {
    padding-bottom: 25px;
    margin-bottom: 20px;
    border-bottom: 0;
  }
}
.user-item__details {
  display: flex;
  align-items: center;
}
.user-item__img {
  width: 60px;
  height: 60px;
  border-radius: 8px;
  position: relative;
  margin-right: 20px;
  overflow: hidden;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.user-item__name {
  transition: all 0.3s ease;
  display: inline-block;
  font-weight: 600;
  margin-bottom: 6px;
  &:hover {
    color: $baseOrange;
  }
}
.user-item__descr {
  font-size: 14px;
  color: $baseGray;
}
.user-item {
  padding-bottom: 20px;
  margin-bottom: 20px;
  &__icon {
    transition: all 0.3s ease;
    display: inline-block;
  }
  &__name {
    margin-top: 8px;
  }
  &__img {
    border-radius: 8px;
    overflow: hidden;
  }
  &__details {
    align-items: flex-start;
    width: 100%;
  }
  &__info {
    width: calc(100% - 80px);
    font-size: 14px;
    color: $baseGray;
    &-wrap {
      width: 35%;
      padding-right: 5px;
      @include maxMedia($breakpoint-md) {
        width: 100%;
      }
    }
    &-bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex: 1 1 auto;
      @include maxMedia($breakpoint-md) {
        flex-direction: column;
        align-items: flex-start;
      }
    }
  }
  &__tel,
  &__email {
    width: 25%;
    padding-right: 5px;
    @include maxMedia($breakpoint-md) {
      width: 100%;
    }
    a {
      transition: all 0.3s ease;
      display: inline-flex;
      color: $baseGray;
      &:hover {
        color: $baseOrange;
      }
    }
  }
  &__btn-wrap {
    width: 15%;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 3px;
    @include maxMedia($breakpoint-md) {
      width: 100%;
    }
  }
  &__btn {
    color: $baseOrange;
    .user-item__btn-label {
      font-weight: bold;
      margin-right: 10px;
    }
    &:hover {
      .user-item__icon {
        transform: translateX(8px);
      }
    }

    @include isHoverMedia() {
      opacity: 0;
    }
  }
  &__status {
    margin-left: 13px;
    padding-left: 20px;
    position: relative;
    &:before {
      content: "";
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background: $baseGray;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
    }
  }
  &:hover {
    .user-item__btn {
      opacity: 1;
    }
  }
}
</style>
