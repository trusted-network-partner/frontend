<template>
  <div
    :class="{'menu_wrap_active': isActive}"
    class="menu_wrap"
  >
    <ul class="menuGlobal">
      <li
        v-for="(link, index) in links"
        :key="index"
        class="menuGlobal__item"
      >
        <nuxt-link
          :to="link.route"
          class="menuGlobal__link"
        >
          {{ link.title }}
        </nuxt-link>
      </li>
    </ul>
    <div
      class="menu_click"
      @click="toggleActive"
    >
      <button type="button" name="menu-btn">N</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'global-menu',

    data() {
      return {
        isActive: false,
        links: [
          { title: '01. Log in', route: 'login' },
          { title: '02. Restore password', route: 'restore-password' },
          { title: '03. Password reset success', route: 'password-reset-success' },
          { title: '04. Auth type', route: 'auth-type' },
          { title: '05. Auth business', route: 'auth-business' },
          { title: '06. Auth identification', route: 'auth-identification' },
          { title: '07. Auth contact info', route: 'auth-contact-info' },
          { title: '08. Auth company', route: 'auth-company' },
          { title: '09. Auth application', route: 'auth-application' },
          { title: '10. Free registration', route: 'registration-free' },
          { title: '1. News', route: '/' },
          { title: '2. News events', route: 'news-events' },
          { title: '3. Catalogue', route: 'catalogue' },
          { title: '4. Group events', route: 'communities' },
          { title: '5. Create groups events', route: 'create-group-event' },
          { title: '6. Event', route: 'event' },
          { title: '7. Listing & services', route: 'listing-services' },
          { title: '8. Listing & services list', route: 'listing-services-info' },
          { title: '9. Agent info', route: 'agent-info' },
          { title: '10. About company', route: 'about-company' },
          { title: '11. Digital marketing', route: 'digital-marketing' },
          { title: '12. Partners', route: 'partners' },
          { title: '13. Search', route: 'search' },
          { title: '14. Settings', route: 'settings' },
          { title: '15. Settings general', route: 'settings-general' },
          { title: '16. Settings advanced', route: 'settings-advanced' },
          { title: '17. Team', route: 'team' },
          { title: '18. Billing methods', route: 'billing-methods' },
          { title: '19. Tax information', route: 'tax-information' },
          { title: '20. Notification privacy', route: 'notification-privacy' },
          { title: '21. Visitors', route: 'visitors' },
          { title: '22. Real estate', route: 'real-estate' },
          { title: '23. Real estate (enterprises view)', route: 'real-estate-info' },
          { title: '24. Real estate btns', route: 'real-estate-info-btns' },
          { title: '25. Chat', route: 'chat' },
          { title: '26. Group', route: 'group' },
          { title: '27. Real estate address', route: 'real-estate-address' },
          { title: '28. Real estate main info', route: 'real-estate-main-info' },
          { title: '29. Real estate details', route: 'real-estate-details' },
          { title: '30. Real estate media files', route: 'real-estate-media-files' },
          { title: '31. Real estate documentation', route: 'real-estate-documentation' },
          { title: '32. Video conference', route: 'video-conference' },
          { title: '33. Customer type', route: 'customer-type' },
          { title: '34. Customer category', route: 'customer-category' },
          { title: '35. Customer details', route: 'customer-details' },
          { title: '36. Customer documentation', route: 'customer-documentation' },
          { title: '36. Customer product', route: 'customer-product' },
          { title: '37. Pop ups', route: 'pop-ups' },
          { title: '38. General group events', route: 'general-group-events' },
          { title: '39. Map search', route: 'map-search' },
          { title: '40. Map real estate', route: 'map-real-estate' },
          { title: '41. Map real estate search', route: 'map-real-estate-search' },
          { title: '42. Map real estate status', route: 'map-real-estate-status' },
          { title: '43. Map real estate filters', route: 'map-real-estate-filters' },
          { title: '44. Customers', route: 'customers' },
          { title: '45. Looking for a seller', route: 'looking-seller' },
          { title: '46. Calendar', route: 'calendar' },
          { title: '47. Hire professional contact', route: 'hire-professional-contact' },
          { title: '48. Hire professional budget extended', route: 'hire-professional-budget-extended' },
          { title: '49. Hire professional budget', route: 'hire-professional-budget' },
          { title: '50. Hire professional preference', route: 'hire-professional-preference' },
          { title: '51. Hire professional contact details', route: 'hire-professional-contact-details' },
          { title: '52. Hire professional contact rental', route: 'hire-professional-contact-rental' },
          { title: '53. Settings company', route: 'settings-company' },
          { title: '54. Team company', route: 'team-company' },
          { title: '55. Video auction', route: 'video-auction' },
          { title: '56. Video-auction-details', route: 'video-auction-details' },
          { title: '57. Team view', route: 'team-view' },
          { title: '58. Shop services', route: 'shop-services' },
          { title: '59. Experience', route: 'experience' },
          { title: '60. Add agent', route: 'add-agent' },
          { title: '61. Add agent description', route: 'add-agent-description' },
          { title: '62. Add agent skills', route: 'add-agent-skills' }
        ]
      }
    },

    methods: {
      toggleActive() {
        this.isActive = !this.isActive
      }
    }
  }
</script>

<style scoped>
  .menuGlobal__link.nuxt-link-exact-active {
    font-weight: bold;
  }
</style>
