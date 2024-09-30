<template>
  <div class="real-estate__gallery">
    <div class="real-estate__gallery-left">
      <div class="real-estate__main-img">
        <img src="~/assets/img/property/estate1.jpg" alt="" class="real-estate-big-img">
        <div class="real-estate__item-not">
          <div class="real-estate__notification">
            {{ $t('last_viewing') }}
          </div>
          <div class="info-content__item-elems">
            <nuxt-link to="agent-info" class="info-content__item-elem">
              <img src="~/assets/img/agent/pic-big1.jpg" alt="">
            </nuxt-link>
            <nuxt-link to="agent-info" class="info-content__item-elem">
              <img src="~/assets/img/agent/pic-big2.jpg" alt="">
            </nuxt-link>
            <button type="button" class="info-content__item-btn info-content__item-elem">
              <span> +1 </span>
            </button>
          </div>
        </div>
        <div class="btn-gallery__btns">
          <button type="button" class="btn-gallery black">
          <span>
             {{ $t('virtual_tour') }}
          </span>
          </button>
          <button type="button" class="btn-gallery">
          <span>
            {{ $t('view_gallery') }}
          </span>
          </button>
        </div>
      </div>
    </div>
    <div class="real-estate__gallery-right">
      <div class="real-estate__gallery-item w-full">
        <img src="~/assets/img/property/estate2.jpg" alt="">
      </div>
      <div class="real-estate__gallery-items">
        <div class="real-estate__gallery-item">
          <div class="real-estate__gallery-item-inner">
            <img src="~/assets/img/property/estate3.jpg" alt="">
          </div>
        </div>
        <div class="real-estate__gallery-item">
          <div class="real-estate__gallery-item-inner">
            <img src="~/assets/img/property/estate4.jpg" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'real-estate-gallery'
  }
</script>
