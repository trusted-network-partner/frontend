<template>
  <main class="main">
    <div class="sidebar">
      <ProfileLinks />
    </div>
    <div class="content-wrap">
      <div class="agent-info-content">
        <div class="agent-info__nav">
          <nuxt-link to="listing-services" class="back">
           <ArrowLeftIcon/>
            <span class="agent-info__nav-link active">
              {{ $t('about.listing_services') }}
            </span>
          </nuxt-link>
        </div>
        <div class="listing-services__items">
          <div class="listing-services__section">
            <div class="listing-services__header">
              <div class="listing-services__title">
                {{ $t('listing_real_estate_list') }}
              </div>
            </div>
          </div>
          <RealEstateList/>
          <div class="pagination-list-wrap">
            <ul class="pagination-list">
              <li class="pagination-item active">
                <span>1</span>
              </li>
              <li class="pagination-item">
                <span>2</span>
              </li>
              <li class="pagination-item">
                <span>3</span>
              </li>
              <li class="pagination-item">
                <span>4</span>
              </li>
              <li class="pagination-item">
                <span>5</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Widget />
    </div>
  </main>
</template>

<script>
import ProfileLinks from '~/components/profile/profile-links'
import AgentInfoContent from '~/components/agent/agent-info-content'
import RealEstateList from '~/components/agent/real-estate-list'
import ArrowLeftIcon from '~/components/icons/common/arrow-left'
import Widget from '~/components/widgets/widgets'
export default {
  layout: 'default',
  name: 'listing-services-info',

  components: {
    ProfileLinks,
    AgentInfoContent,
    RealEstateList,
    ArrowLeftIcon,
    Widget
  },

  head: {
    title: 'Listing & Services'
  },
}
</script>

<style lang="scss" scoped>
  .content-wrap {
    margin-bottom: 154px;
  }
  .content-wrap {
    position: relative;
  }

  .agent-info-content {
    padding-top: 36px;
  }
  .agent-info__nav {
    margin-bottom: 49px;
  }
  .listing-services__section {
    margin-bottom: 44px;
  }
  .listing-services__list {
    margin: 0 -15px 4px;
  }
  .pagination-list-wrap {
    margin-top: 23px;
    margin-left: 10px;
  }
  .listing-services__title[data-v-7ba35489] {
    font-weight: bold;
  }
</style>
