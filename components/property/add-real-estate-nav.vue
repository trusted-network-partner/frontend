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
          {{ link.title }}
        </span>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'real-estate-info-links',
    props: {
      step: {
        type: Number,
        required: true
      }
    },

    data() {
      return {
        links: [
          { title: 'Address', path: 'real-estate-address', isPassed: false },
          { title: 'Main information', path: 'real-estate-main-info', isPassed: false },
          { title: 'Details', path: 'real-estate-details', isPassed: false },
          { title: 'Media files', path: 'real-estate-media-files', isPassed: false },
          { title: 'Documentation', path: 'real-estate-documentation', isPassed: false },
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
