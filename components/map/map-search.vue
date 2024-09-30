<template>
  <div class="map-search">
    <form>
      <div class="search-form__item">
        <div class="search-form__img">
          <SearchIcon />
        </div>
        <input type="text" placeholder="Search here" class="search-form__input">
      </div>
    </form>
    <div class="map-search__features-wrap">
      <div class="map-search__features-title">
        {{ $t('explore_nearby') }}
      </div>
      <div class="map-search__features">
        <div
          v-for="feature in features"
          :key="feature.key"
          class="map-search__feature"
        >
          <div
            class="map-search__feature-icon"
          >
            <component :is="feature.icon" />
          </div>
          <div
            v-if="feature.value"
            class="map-search__feature-title"
          >
            {{ $t(feature.value) || '' }}
          </div>
        </div>
      </div>
      <div class="map-search__items">
        <div
          v-for="item in items"
          :key="item.id"
          class="map-search__item-wrap"
        >
          <nuxt-link
            to="/"
            class="map-search__item"
          >
            <img
              :src="require(`~/assets/img/map/${item.img}`)"
              class="map-search__item-img"
              alt=""
            />
            <span class="map-search__item-title">
              {{ item.label }}
          </span>
          </nuxt-link>
        </div>
      </div>
      <div class="map-search__info">
        <nuxt-link to="event" class="map-search__info-item">
          <img src="~/assets/img/map/info-pic1.jpg" alt="">
          <span class="map-search__info-descr">
            <span class="map-search__info-label">
              Idealista
            </span>
            <span class="map-search__info-status">
              {{ $t('event') }}
            </span>
            <span class="map-search__info-element">
              {{ $t('ends_today') }}
            </span>
          </span>
        </nuxt-link>
        <div class="map-search__info-items">
          <div class="map-search__info-item-wrap">
            <nuxt-link to="event" class="map-search__info-item">
              <img src="~/assets/img/map/info-pic2.jpg" alt="">
              <span class="map-search__info-descr">
            <span class="map-search__info-label">
              Open House
            </span>
            <span class="map-search__info-status">
              {{ $t('event') }}
            </span>
            <span class="map-search__info-element">
              {{ $t('ends_today') }}
            </span>
          </span>
            </nuxt-link>
          </div>
          <div class="map-search__info-item-wrap">
            <nuxt-link to="event" class="map-search__info-item">
              <img src="~/assets/img/map/info-pic-blank.jpg" alt="">
              <span class="map-search__info-descr">
            <span class="map-search__info-label">
              IE Bussiness School
            </span>
            <span class="map-search__info-status">
              {{ $t('event') }}
            </span>
            <span class="map-search__info-element">
              Fri / 20:00
            </span>
          </span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchIcon from '~/components/icons/header/search'
import RestaurantIcon from '~/components/icons/map/restaurant'
import MedicalIcon from '~/components/icons/map/medical'
import SchoolIcon from '~/components/icons/map/school'
import  DotsIcon from '~/components/icons/posts/dots'

  export default {
    name: 'map-search-items',

    components: {
      SearchIcon,
      RestaurantIcon,
      MedicalIcon,
      SchoolIcon,
      DotsIcon
    },

    data() {
      return {
        features: [
          { id: 1, icon: 'restaurant-icon', label: 'Restaurants', value: 'restaurants' },
          { id: 2, icon: 'school-icon', label: 'Schools', value: 'schools' },
          { id: 3, icon: 'medical-icon', label: 'Medical Center', value: 'medical_center' },
          { id: 4, icon: 'dots-icon' }
        ],
        items: [
          { id: 1, img: 'item-pic1.jpg', label: 'Night clubs', value: 'night_clubs' },
          { id: 2, img: 'item-pic2.jpg', label: 'Italian restaurants', value: 'italian_restaurants' },
          { id: 3, img: 'item-pic3.jpg', label: 'Georgian restaurants', value: 'georgian_restaurants' },
          { id: 4, img: 'item-pic4.jpg', label: 'Great cocktails', value: 'great_cocktails' },
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~/assets/css/map/map-search.scss";
</style>
