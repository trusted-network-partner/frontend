<template>
  <div class="map-filters">
    <div class="map-filter-wrap">
      <nuxt-link to="map-real-estate-filters" class="map-filter">
        {{ $t("filters") }}
      </nuxt-link>
    </div>
    <div class="map-filter-wrap">
      <button type="button" class="map-filter">
        {{ $t("price") }}
      </button>
    </div>
    <div class="map-filter-wrap">
      <div class="map-filter-select">
        <SelectItem :selectOptions="optionsFilter" @change="selectedOption" />
      </div>
    </div>
  </div>
</template>

<script>
import SelectItem from "~/components/select/selectItem";
export default {
  name: "map-main-filters",

  components: {
    SelectItem
  },

  data() {
    return {
      optionsFilter: [
        {
          id: 1,
          name: "Status",
          value: "status",
          chosen: true
        },
        {
          id: 2,
          name: "Item2",
          value: "item2",
          chosen: false
        }
      ]
    };
  },

  methods: {
    selectedOption(value) {}
  }
};
</script>

<style lang="scss" scoped>
.map-filters {
  margin: 24px auto 0;
  display: flex;
  align-self: baseline;

  @include maxMedia($breakpoint-md) {
    flex-direction: column;
    gap: 10px;
  }
}
.map-filter {
  font-size: 16px;
  padding: 5px;
  min-width: 177px;
  min-height: 59px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: $baseWhite;
  box-shadow: 0px 4px 25px rgba(21, 23, 28, 0.1);
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;

  &:hover {
    color: $baseOrange;
  }
  &-wrap {
    margin-right: 9px;
  }
}
.map-filter-select {
  margin-left: 9px;
}
</style>
