<template>
    <div class="info">
        <ul class="info__nav-items">
            <li
              v-for="(tab, index) in tabs"
              @click="currentTab = index"
              :key="index"
              class="info__nav-item"
            >
                <button
                  :class="{'black' : currentTab === index}"
                  class="btn-default"
                >
                    {{ $t(tab.label) }}
                </button>
            </li>
        </ul>
        <Catalogue
          v-if="currentTab === 0"
        />
        <Community
          v-if="currentTab === 1"
        />
    </div>
</template>

<script>
import Catalogue from '~/components/info/catalogue'
import Community from '~/components/info/community'

export default {
    name: 'info',
    components: {
      Catalogue,
      Community
    },

    data() {
      return {
        tabs: [
          {
            label: 'tabs.catalogue',
          },
          {
            label: 'tabs.community',
          }
        ],
        currentTab: 0
      }
    }
}
</script>
