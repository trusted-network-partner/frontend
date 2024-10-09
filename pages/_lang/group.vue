<template>
  <main class="main">
    <div class="sidebar mobile-full">
      <ProfileLinks />
    </div>
    <div class="content-wrap">
      <GroupDetails />
    </div>
  </main>
</template>

<script>
import ProfileLinks from "~/components/profile/profile-links";
import GroupDetails from "~/components/group/group-details";
export default {
  layout: "default",
  name: "group",

  components: {
    ProfileLinks,
    GroupDetails
  },

  head: {
    title: "Group"
  }
};
</script>

<style scoped lang="scss">
.content-wrap {
  margin-bottom: 125px;

  @include maxMedia($breakpoint-lg) {
    margin-top: 30px;
  }
}
</style>
