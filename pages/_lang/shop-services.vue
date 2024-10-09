<template>
  <main class="main">
    <div class="sidebar hidden-mobile">
      <Filters />
    </div>
    <Modal v-model="isModalFilters" type="left">
      <Filters />
    </Modal>
    <div class="content-wrap">
      <div class="real-estate-wrap">
        <h2 class="default-title">{{ $t("shop_services") }} 1 of 12</h2>
        <div class="buttons">
          <ButtonPrimary class="filters-button" @click="switchFilters(true)"
            ><span>{{ $t("filters") }}</span>
            <IconFilters fill="#ffffff"></IconFilters>
          </ButtonPrimary>
        </div>
        <ShopService />
      </div>
    </div>
  </main>
</template>

<script>
import Filters from "~/components/filter/filters";
import ShopService from "~/components/info/shop-service";
import Modal from "~/components/ui/modal.vue";
import ButtonPrimary from "@/components/ui/button-primary.vue";
import IconFilters from "@/components/icons/common/filters.vue";

export default {
  layout: "default",
  name: "shop-services",

  components: {
    ShopService,
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
    title: "Product and services"
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
</style>
