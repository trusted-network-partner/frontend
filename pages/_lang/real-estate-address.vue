<template>
  <div class="real-estate-wrapper">
    <div
      class="estate-info-element"
      :style="{ height: sidebarHeight + 'px' }"
    />
    <div class="estate-info-wrap">
      <div class="estate-general ">
        <div ref="sidebar" class="estate-general__wrap">
          <div class="estate-general__title">
            {{ $t("take_mind") }}
          </div>
          <div class="estate-general__descr">
            <p>
              <span class="bold">
                {{ $t("take_mind_featured") }}
              </span>
              {{ $t("take_mind_descr") }}
            </p>
          </div>
        </div>
        <EstateInfoLinks :step="1" />
      </div>
      <form class="estate-info ">
        <div class="default-title">
          {{ $t("location_real_estate") }}
        </div>
        <div class="estate-info__descr">
          <p>
            {{ $t("location_descr") }}
          </p>
        </div>
        <div class="info-default">
          <label for="estate-address" class="info-default__label">
            {{ $t("enter_address") }}
          </label>
          <input
            id="estate-address"
            type="text"
            placeholder="Real estate address"
            class="info-default__value no-focus"
          />
        </div>
        <div class="estate-info__btns">
          <nuxt-link to="/" class="btn-default">
            {{ $t("skip_now") }}
          </nuxt-link>
          <nuxt-link to="real-estate-main-info" class="btn-default black">
            {{ $t("next_step") }}
          </nuxt-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import EstateInfoLinks from "~/components/property/add-real-estate-nav";
export default {
  layout: "sidebar",
  name: "real-estate-address",

  head: {
    title: "Add real estate"
  },

  components: {
    EstateInfoLinks
  },

  data() {
    return {
      sidebarOffset: 0
    };
  },

  computed: {
    sidebarHeight() {
      return this.sidebarOffset;
    }
  },

  methods: {
    handleSubmit() {
      console.log("success");
    }
  },

  mounted() {
    this.sidebarOffset = this.$refs.sidebar.offsetHeight;
  }
};
</script>

<style lang="scss" scoped>
.estate-general__title {
  margin-bottom: 48px;
}
.info-default {
  margin-bottom: 40px;
}


</style>
