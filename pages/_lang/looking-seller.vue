<template>
  <main class="main looking-seller">
    <div class="sidebar">
      <nuxt-link
        to="map-real-estate"
        class="btn-default black btn-filter uppercase"
      >
        {{ $t("map_search") }}
      </nuxt-link>
      <Filters />
    </div>
    <Modal v-model="isModalFilters" type="left">
      <Filters />
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
import Filters from "~/components/filter/filters";
import RealEstateList from "~/components/property/real-estate-list";
import Widgets from "~/components/widgets/widgets";
import ButtonPrimary from "@/components/ui/button-primary.vue";
import IconFilters from "@/components/icons/common/filters.vue";
import Modal from "~/components/ui/modal.vue";
export default {
  layout: "default",
  name: "looking-seller",

  components: {
    RealEstateList,
    Widgets,
    Filters,
    Modal,
    ButtonPrimary,
    IconFilters
  },

  data() {
    return {
      isModalFilters: false
    };
  },

  head: {
    title: "Looking for a seller"
  },
  methods: {
    switchFilters(value) {
      this.isModalFilters = value;
    }
  }
};
</script>

<style scoped>
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
.widgets {
  position: absolute;
  right: -152px;
  top: 7%;
}
.pagination-list {
  margin-left: 10px;
}
</style>
