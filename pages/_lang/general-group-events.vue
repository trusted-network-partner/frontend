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
        <h2 class="default-title">{{ $t("communities_events") }} 1 of 12</h2>
        <div class="buttons">
          <ButtonPrimary class="filters-button" @click="switchFilters(true)"
            ><span>{{ $t("filters") }}</span>
            <IconFilters fill="#ffffff"></IconFilters>
          </ButtonPrimary>
        </div>
        <GroupEventsList />
      </div>
    </div>
  </main>
</template>

<script>
import Filters from "~/components/filter/filters";
import GroupEventsList from "~/components/info/general-group-events";
import ButtonPrimary from "@/components/ui/button-primary.vue";
import IconFilters from "@/components/icons/common/filters.vue";
import Modal from "~/components/ui/modal.vue";
export default {
  layout: "default",
  name: "general-group-events",

  components: {
    GroupEventsList,
    Filters,
    Modal,
    ButtonPrimary,
    IconFilters
  },

  head: {
    title: "General group events"
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
.pagination-list {
  margin-left: 10px;
}
</style>
