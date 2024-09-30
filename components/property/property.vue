<template>
  <div class="property__list">
    <div
      v-for="(property, index) in properties"
      :key="index"
      class="property__item-wrap"
    >
      <div
        class="property__item"
      >
        <nuxt-link to="real-estate-info" class="property__item-img">
          <img :src="require(`~/assets/img/property/${property.img}`)" alt="">
          <span class="property__item-rating-wrap">
            <StarIcon />
            <span class="property__item-rating">
              {{property.rate}}
            </span>
          </span>
        </nuxt-link>
        <nuxt-link to="real-estate-info" class="property__item-title">
          {{property.name[getLocale] || property.name[getDefaultLocale]}}
        </nuxt-link>
        <div class="property__item-address">
          <AddressIcon />
          <span>{{property.address}}</span>
        </div>
        <div class="property__item-price">
          ${{property.price}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import StarIcon from "@/components/icons/posts/star";
  import AddressIcon from "@/components/icons/common/address";
  import locales from "@/mixins/locales";

  export default {
    name: 'property-list',

    components: {
      StarIcon,
      AddressIcon
    },

    mixins: [locales],

    data() {
      return {
        properties: [
          {id: 0,
            img: 'property.jpg',
            name: {
              en: 'Villa in first line of the beach',
              es: 'Villa en primera linea de playa',
              ua: 'Вілла на першій лінії пляжу',
            },
            rate: '5.0',
            address: '440 E 79th St APT 8C, New York, NY 10075',
            price: '342,000'},
          {id: 1,
            img: 'property.jpg',
            name: {
              en: 'Villa in first line of the beach',
              es: 'Villa en primera linea de playa',
              ua: 'Вілла на першій лінії пляжу',
            },
            rate: '5.0',
            address: '440 E 79th St APT 8C, New York, NY 10075',
            price: '342,000'},
          {id: 2,
            img: 'property.jpg',
            name: {
              en: 'Villa in first line of the beach',
              es: 'Villa en primera linea de playa',
              ua: 'Вілла на першій лінії пляжу',
            },
            rate: '5.0',
            address: '440 E 79th St APT 8C, New York, NY 10075',
            price: '342,000'},
        ]
      }
    }
  }
</script>

<style scoped>
  .property__item-img {
    display: block;
  }
</style>
