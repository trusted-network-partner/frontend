<template>
  <div class="agent-info-content">
    <div class="agent-info__nav">
      <ul class="agent-info__nav-list">
        <li class="agent-info__nav-item">
          <nuxt-link to="about-company" class="agent-info__nav-link">
            {{ $t('about.listing_company') }}
          </nuxt-link>
        </li>
        <li class="agent-info__nav-item">
          <nuxt-link to="agent-info" class="agent-info__nav-link">
            {{ $t('about.listing_agent') }}
          </nuxt-link>
        </li>
        <li class="agent-info__nav-item">
          <nuxt-link to="listing-services" class="agent-info__nav-link">
            {{ $t('about.listing_services') }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'agent-info-content',
  }
</script>
