<template>
  <div class="estate-general__links">
    <ul class="estate-general__links-inner">
      <li
        v-for="(link, index) in links"
        :key="index"
        class="estate-general__links-item"
      >
        <nuxt-link
          :to="link.path"
          class="estate-general__link-wrap"
          :class="{ 'passed': link.isPassed }"
        >
          <span class="estate-general__link-elem"/>
          <span class="estate-general__link">
          {{ $t(link.title) }}
        </span>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'add-agent-links',
  props: {
    step: {
      type: Number,
      required: true
    }
  },

  data() {
    return {
      links: [
        { title: 'main_information', path: 'add-agent', isPassed: false },
        { title: 'description', path: 'add-agent-description', isPassed: false },
        { title: 'skills', path: 'add-agent-skills', isPassed: false },
      ],
    }
  },

  mounted() {
    this.links.map((item, index) => {
      if(index+1 < this.step) {
        item.isPassed = true
      }
    })
  }
}
</script>
