<template>
  <main class="main">
    <div class="sidebar hidden-mobile">
      <nuxt-link
        to="map-real-estate"
        class="btn-default black btn-filter uppercase"
      >
        {{ $t("map_search") }}
      </nuxt-link>
      <FiltersProperty />
    </div>
    <Modal v-model="isModalFilters" type="left">
      <FiltersProperty />
    </Modal>
    <div class="content-wrap">
      <div class="real-estate-wrap">
        <h2 class="default-title">
          {{ $t("listing_real_estate") }}
        </h2>
        <div class="buttons">
          <ButtonPrimary class="filters-button" @click="switchFilters(true)"
            ><span>{{ $t("filters") }}</span>
            <IconFilters fill="#ffffff"></IconFilters>
          </ButtonPrimary>
        </div>
        <RealEstateList />
      </div>
      <Widgets />
    </div>
  </main>
</template>

<script>
import FiltersProperty from "~/components/filter/filters-property";
import RealEstateList from "~/components/property/real-estate-list";
import Widgets from "~/components/widgets/widgets";
import Modal from "~/components/ui/modal.vue";
import ButtonPrimary from "@/components/ui/button-primary.vue";
import IconFilters from "@/components/icons/common/filters.vue";

export default {
  layout: "default",
  name: "real-estate-page",

  components: {
    RealEstateList,
    Widgets,
    FiltersProperty,
    Modal,
    ButtonPrimary,
    IconFilters
  },

  head: {
    title: "Real estate"
  },
  data() {
    return {
      isModalFilters: false
    };
  },
  methods: {
    switchFilters(value) {
      this.isModalFilters = value;
    }
  }
};
</script>

<style lang="scss">
@import "~/assets/css/real-estate/real-estate.scss";
</style>

<style lang="scss" scoped>
.btn-filter {
  margin-bottom: 34px;
}

.main {
  margin-top: 32px;
}
.content-wrap {
  margin-bottom: 147px;
  position: relative;
}
.pagination-list {
  margin-left: 10px;
}
</style>
