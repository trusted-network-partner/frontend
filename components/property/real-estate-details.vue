<template>
  <div class="estate-info__wrap">
    <div class="estate-info__general">
      <div class="estate-info__general-item rating">
        <StarIcon />
        <span class="estate-info__general-text">
          <span class="bold">5.00</span> (98)
        </span>
      </div>
      <div class="estate-info__general-item">
        <AddressIcon />
        <span class="estate-info__general-text">
          {{ $t('kiev_ukraine') }}
        </span>
      </div>
      <div class="estate-info__general-item">
        <span class="estate-info__general-text">
          Calle Finlandia 10 3ºB Torrevieja 03183
        </span>
      </div>
    </div>
    <h2 class="estate-info__title">{{ $t('villa_kiev') }}</h2>
    <div class="estate-info__section">
      <div class="estate-info__section-title settings-section__title">
        {{ $t('about') }}
      </div>
      <div class="estate-info__descr">
        <p>
          The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.
        </p>
        <p>The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it's seen all around the web; on templates, websites, and stock designs. Use our generator to get your own, or read on for the authoritative history of lorem ipsum. Until recently, the prevailing view assumed lorem ipsum was born. </p>
      </div>
    </div>
    <div class="estate-info__section">
      <div class="estate-info__section-title settings-section__title">
        {{ $t('facts') }}
      </div>
      <div class="estate-info__items facts">
        <div class="estate-info__item">
          <div class="estate-info__item-title">
            {{ $t('appliances') }}
          </div>
          <div class="estate-info__item-content">
            <ParkingIcon />
            <span class="estate-info__item-text">{{ $t('free_parking') }}</span>
          </div>
          <div class="estate-info__item-content">
            <EnergyIcon />
            <span class="estate-info__item-text">{{ $t('energy') }} Class: A</span>
          </div>
          <div class="estate-info__item-content">
            <BedIcon />
            <span class="estate-info__item-text">2 {{ $t('bedroom') }}</span>
          </div>
          <div class="estate-info__item-content">
            <BathIcon />
            <span class="estate-info__item-text">2 {{ $t('bathroom') }}</span>
          </div>
        </div>
        <div class="estate-info__item">
          <div class="estate-info__item-title">
            {{ $t('landscape') }}
          </div>
          <div class="estate-info__item-content">
            <ParkingIcon />
            <span class="estate-info__item-text">{{ $t('free_parking') }}</span>
          </div>
          <div class="estate-info__item-content">
            <WasherIcon />
            <span class="estate-info__item-text">{{ $t('energy') }} Class: A</span>
          </div>
          <div class="estate-info__item-content">
            <BedIcon />
            <span class="estate-info__item-text">2 {{ $t('bedroom') }}</span>
          </div>
          <div class="estate-info__item-content">
            <BathIcon />
            <span class="estate-info__item-text">2 {{ $t('bathroom') }}</span>
          </div>
        </div>
        <div class="estate-info__item">
          <div class="estate-info__item-title">
            {{ $t('common_areas') }}
          </div>
          <div class="estate-info__item-content">
            <ParkingIcon />
            <span class="estate-info__item-text">{{ $t('free_parking') }}</span>
          </div>
          <div class="estate-info__item-content">
            <WasherIcon />
            <span class="estate-info__item-text">{{ $t('energy') }} Class: A</span>
          </div>
          <div class="estate-info__item-content">
            <BedIcon />
            <span class="estate-info__item-text">2 {{ $t('bedroom') }}</span>
          </div>
          <div class="estate-info__item-content">
            <BathIcon />
            <span class="estate-info__item-text">2 {{ $t('bathroom') }}</span>
          </div>
        </div>
      </div>
      <button type="button" class="btn-default">{{ $t('all_amenities') }}</button>
    </div>
    <div class="estate-info__section">
      <div class="estate-info__content-items">
        <div class="estate-info__content-item">
          <div class="estate-info__content-img">
            <img src="~/assets/img/property/pic1.jpg" alt="">
          </div>
          <div class="estate-info__content-name">
            Telefonica
          </div>
        </div>
        <div class="estate-info__content-item">
          <div class="estate-info__content-img">
            <img src="~/assets/img/property/pic2.jpg" alt="">
          </div>
          <div class="estate-info__content-name">
            Insurance home
          </div>
        </div>
        <div class="estate-info__content-item">
          <div class="estate-info__content-img">
            <img src="~/assets/img/property/pic3.jpg" alt="">
          </div>
          <div class="estate-info__content-name">
            Santander Bank
          </div>
        </div>
      </div>
    </div>
    <div class="estate-info__section nearby">
      <div class="estate-info__section-title settings-section__title">
        {{ $t('what_nearby') }}
      </div>
      <div class="estate-info__items">
        <div class="estate-info__item">
          <div class="estate-info__item-title">
            {{ $t('cultural_inst') }}
          </div>
          <div class="estate-info__item-content">
            <div class="estate-info__item-feature">
              Leidsestraat
            </div>
            <div class="estate-info__item-feature short-col">
              0.2 km
            </div>
          </div>
          <div class="estate-info__item-content">
            <div class="estate-info__item-feature">
              The Krijtberg Church
            </div>
            <div class="estate-info__item-feature short-col">
              0.2 km
            </div>
          </div>
          <div class="estate-info__item-content">
            <div class="estate-info__item-feature">
              National Pipe Museum
            </div>
            <div class="estate-info__item-feature short-col">
              0.3 km
            </div>
          </div>
          <div class="estate-info__item-content">
            <div class="estate-info__item-feature">
              The Biblical Museum
            </div>
            <div class="estate-info__item-feature short-col">
              0.4 km
            </div>
          </div>
          <div class="estate-info__item-content">
            <div class="estate-info__item-feature">
              House Marseille
            </div>
            <div class="estate-info__item-feature short-col">
              0.4 km
            </div>
          </div>
          <div class="estate-info__item-content">
            <div class="estate-info__item-feature">
              Torture Museum
            </div>
            <div class="estate-info__item-feature short-col">
              0.5 km
            </div>
          </div>
        </div>
        <div class="estate-info__item">
          <div class="estate-info__item-title">
            {{ $t('stores_transports') }}
          </div>
          <div class="estate-info__item-content">
            <div class="estate-info__item-feature">
              Albert Heijn Supermarket
            </div>
            <div class="estate-info__item-feature short-col">
              0.2 km
            </div>
          </div>
          <div class="estate-info__item-content">
            <div class="estate-info__item-feature">
              Schiphol Airport
            </div>
            <div class="estate-info__item-feature short-col">
              0.2 km
            </div>
          </div>
          <div class="estate-info__item-content">
            <div class="estate-info__item-feature">
              Amsterdam Central Market
            </div>
            <div class="estate-info__item-feature short-col">
              0.3 km
            </div>
          </div>
          <div class="estate-info__item-content">
            <div class="estate-info__item-feature">
              Rotterdam The Hague Airport
            </div>
            <div class="estate-info__item-feature short-col">
              0.4 km
            </div>
          </div>
        </div>
      </div>
      <button type="button" class="btn-default">{{ $t('all_amenities') }}</button>
    </div>
    <div class="estate-info__section">
      <div class="estate-info__section-title settings-section__title">
        {{ $t('floor_plans') }}
      </div>
      <div class="estate-info__content-items plans">
        <div class="estate-info__content-item">
          <img src="~/assets/img/property/img1.jpg" alt="">
        </div>
        <div class="estate-info__content-item">
          <img src="~/assets/img/property/img1.jpg" alt="">
        </div>
      </div>
    </div>
    <div class="estate-info__section">
      <div class="post__files files">
        <div class="post__files-item">
          <div class="post__file">
            <div class="post__file-info">
              <div class="post__file-icon">
                <FilesIcon />
              </div>
              <div class="post__file-details">
                <div class="post__file-title">
                  Сatalog of apartments in NYC
                </div>
                <div class="post__file-spec">
                  PDF {{ $t('file') }}, 342kb
                </div>
              </div>
            </div>
            <a href="_blank" class="post__file-download" download="http://www.africau.edu/images/default/sample.pdf">
              <DownloadIcon />
            </a>
          </div>
        </div>
        <div class="post__files-item">
          <div class="post__file">
            <div class="post__file-info">
              <div class="post__file-icon">
                <FilesIcon />
              </div>
              <div class="post__file-details">
                <div class="post__file-title">
                  Сatalog of apartments in San-Francisco
                </div>
                <div class="post__file-spec">
                  PDF {{ $t('file') }}, 342kb
                </div>
              </div>
            </div>
            <a href="_blank" class="post__file-download" download="http://www.africau.edu/images/default/sample.pdf">
              <DownloadIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="estate-info__section">
      <div class="estate-info__slider-btns">
        <div class="swiper-button-next">
          <ArrowBack/>
        </div>
        <div class="swiper-button-prev">
          <ArrowBack/>
        </div>
      </div>
      <div class="estate-info__statistics-wrap">
        <client-only>
          <swiper
            ref="mySwiper"
            :options="swiperOption"
          >
            <swiper-slide>
              <div class="estate-info__section-title settings-section__title">
                {{ $t('expenses') }}
              </div>
              <div class="estate-info__statistics">
                <div class="estate-info__statistics-item">
                  <div class="estate-info__chart-wrap">
                    <div class="estate-info__chart">
                      <client-only>
                        <apexchart type="donut" :options="chartOptions" :series="series" />
                      </client-only>
                    </div>
                    <div class="estate-info__figure-wrap">
                      <div class="estate-info__figure-title">
                        {{ $t('expenses') }}
                      </div>
                      <div class="estate-info__figure">
                        1.720 Eur
                      </div>
                      <div class="estate-info__figure-descr">
                        {{ $t('per_month') }}
                      </div>
                    </div>
                  </div>
                </div>
                <div class="estate-info__statistics-item">
                  <div class="estate-info__stat">
                    <div class="estate-info__stat-item">
                      <div class="estate-info__stat-info info">
                        <div class="estate-info__stat-info-inner">
                          <div class="estate-info__stat-elem stat-100"></div>
                          <div class="state-info__stat-title">
                            {{ $t('mortgage') }}
                          </div>
                        </div>
                      </div>
                      <div class="state-info__stat-figure">
                        1.525 pm
                      </div>
                    </div>
                    <div class="estate-info__stat-item">
                      <div class="estate-info__stat-info info">
                        <div class="estate-info__stat-info-inner">
                          <div class="estate-info__stat-elem stat-200"></div>
                          <div class="state-info__stat-title">
                            {{ $t('energy') }}
                          </div>
                        </div>
                      </div>
                      <div class="state-info__stat-figure">
                        51 pm
                      </div>
                    </div>
                    <div class="estate-info__stat-item">
                      <div class="estate-info__stat-info info">
                        <div class="estate-info__stat-info-inner">
                          <div class="estate-info__stat-elem stat-300"></div>
                          <div class="state-info__stat-title">
                            {{ $t('council_tax') }}
                          </div>
                        </div>
                      </div>
                      <div class="state-info__stat-figure">
                        51 pm
                      </div>
                    </div>
                    <div class="estate-info__stat-item">
                      <div class="estate-info__stat-info info">
                        <div class="estate-info__stat-info-inner">
                          <div class="estate-info__stat-elem stat-400"></div>
                          <div class="state-info__stat-title">
                            {{ $t('water') }}
                          </div>
                        </div>
                      </div>
                      <div class="state-info__stat-figure">
                        51 pm
                      </div>
                    </div>
                    <div class="estate-info__stat-item">
                      <div class="estate-info__stat-info info">
                        <div class="estate-info__stat-info-inner">
                          <div class="estate-info__stat-elem stat-500"></div>
                          <div class="state-info__stat-title">
                            {{ $t('condo_fees') }}
                          </div>
                        </div>
                      </div>
                      <div class="state-info__stat-figure">
                        51 pm
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="estate-info__section-title settings-section__title">
                {{ $t('transaction_costs') }}
              </div>
              <div class="estate-info__section-descr">
                {{ $t('transaction_costs_descr') }}
              </div>
              <div class="estate-info__statistics estate-info__statistics_featured">
                <div class="estate-info__statistics-item">
                  <div class="estate-info__chart-wrap">
                    <div class="estate-info__chart">
                      <client-only>
                        <apexchart type="donut" :options="chartOptionsTransaction" :series="transactionSeries" />
                      </client-only>
                    </div>
                    <div class="estate-info__figure-wrap">
                      <div class="estate-info__figure-bold">
                        17%
                      </div>
                    </div>
                  </div>
                </div>
                <div class="estate-info__statistics-item">
                  <div class="estate-info__stat">
                    <div class="estate-info__stat-item">
                      <div class="estate-info__stat-info info">
                        <div class="estate-info__stat-info-inner">
                          <div class="estate-info__stat-elem chart-100"></div>
                          <div class="state-info__stat-title">
                            {{ $t('notary') }}
                          </div>
                        </div>
                      </div>
                      <div class="state-info__stat-figure">
                        1.5%
                      </div>
                    </div>
                    <div class="estate-info__stat-item">
                      <div class="estate-info__stat-info info">
                        <div class="estate-info__stat-info-inner">
                          <div class="estate-info__stat-elem chart-200"></div>
                          <div class="state-info__stat-title">
                            {{ $t('land_registry_free') }}
                          </div>
                        </div>
                      </div>
                      <div class="state-info__stat-figure">
                        0.7%
                      </div>
                    </div>
                    <div class="estate-info__stat-item">
                      <div class="estate-info__stat-info info">
                        <div class="estate-info__stat-info-inner">
                          <div class="estate-info__stat-elem chart-300"></div>
                          <div class="state-info__stat-title">
                            {{ $t('legal_services') }}
                          </div>
                        </div>
                      </div>
                      <div class="state-info__stat-figure">
                        3.09%
                      </div>
                    </div>
                    <div class="estate-info__stat-item">
                      <div class="estate-info__stat-info info">
                        <div class="estate-info__stat-info-inner">
                          <div class="estate-info__stat-elem chart-400"></div>
                          <div class="state-info__stat-title">
                            {{ $t('mortgages') }}
                          </div>
                        </div>
                      </div>
                      <div class="state-info__stat-figure">
                        4%
                      </div>
                    </div>
                    <div class="estate-info__stat-item">
                      <div class="estate-info__stat-info info">
                        <div class="estate-info__stat-info-inner">
                          <div class="estate-info__stat-elem chart-500"></div>
                          <div class="state-info__stat-title">
                            {{ $t('acquisition_tax') }}
                          </div>
                        </div>
                      </div>
                      <div class="state-info__stat-figure">
                        10%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="estate-info__section-title settings-section__title">
                {{ $t('financial_performance') }}
              </div>
              <div class="estate-info__section-descr">
                {{ $t('financial_performance_descr') }}
              </div>
              <div class="estate-info__statistics estate-info__statistics_featured">
                <div class="estate-info__statistics-item">
                  <div class="estate-info__chart-wrap">
                    <div class="estate-info__chart">
                      <client-only>
                        <apexchart type="donut" :options="chartOptionsTransaction" :series="transactionSeries" />
                      </client-only>
                    </div>
                    <div class="estate-info__figure-wrap">
                      <div class="estate-info__figure-bold">
                        5,8%
                      </div>
                    </div>
                  </div>
                </div>
                <div class="estate-info__statistics-item">
                  <div class="estate-info__stat">
                    <div class="estate-info__stat-item">
                      <div class="estate-info__stat-info info">
                        <div class="estate-info__stat-info-inner">
                          <div class="estate-info__stat-elem"></div>
                          <div class="state-info__stat-title">
                            {{ $t('rented_apartment') }}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="estate-info__stat-item">
                      <div class="estate-info__stat-info info">
                        <div class="estate-info__stat-info-inner">
                          <div class="estate-info__stat-elem"></div>
                          <div class="state-info__stat-title">
                            430 Euro/month.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="estate-info__stat-item">
                      <div class="estate-info__stat-info info">
                        <div class="estate-info__stat-info-inner">
                          <div class="estate-info__stat-elem"></div>
                          <div class="state-info__stat-title">
                            {{ $t('rentability') }}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="estate-info__stat-item">
                      <div class="estate-info__stat-info info">
                        <div class="estate-info__stat-info-inner">
                          <div class="estate-info__stat-elem"></div>
                          <div class="state-info__stat-title">
                            5.8%
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </client-only>
      </div>
    </div>
    <div class="estate-info__section">
      <div class="estate-info__section-title settings-section__title">
        {{ $t('score') }}
      </div>
      <div class="estate-info__rate">
        <div class="estate-info__rate-general">
          <div class="info-rate">
            <div class="info-rate__figure-wrap">
              <StarIcon />
              <div class="info-rate__figure">
                4.96
              </div>
            </div>
            <div class="info-rate__descr">
              {{ $t('based') }} 235 {{$t('reviews')}}
            </div>
          </div>
        </div>
        <div class="estate-info__rate-details">
          <div class="estate-info__rate-item">
            <div class="estate-info__rate-header">
              <div class="estate-info__rate-title">
                {{ $t('condition_property') }}
              </div>
              <div class="estate-info__rate-figure">
                5.00
              </div>
            </div>
            <div class="estate-info__rate-body">
              <div class="estate-info__rate-descr">
                {{ $t('description_text') }}
              </div>
              <div class="estate-info__rate-progress success">
                <div class="estate-info__rate-progress-inner"></div>
              </div>
            </div>
          </div>
          <div class="estate-info__rate-item">
            <div class="estate-info__rate-header">
              <div class="estate-info__rate-title">
                {{ $t('safe_area') }}
              </div>
              <div class="estate-info__rate-figure">
                4.3
              </div>
            </div>
            <div class="estate-info__rate-body">
              <div class="estate-info__rate-descr">
                3 {{ $t('stars_above') }}
              </div>
              <div class="estate-info__rate-progress average">
                <div class="estate-info__rate-progress-inner"></div>
              </div>
            </div>
          </div>
          <div class="estate-info__rate-item">
            <div class="estate-info__rate-header">
              <div class="estate-info__rate-title">
                Amenities
              </div>
              <div class="estate-info__rate-figure">
                3.2
              </div>
            </div>
            <div class="estate-info__rate-body">
              <div class="estate-info__rate-descr">
                {{ $t('under') }} 2 {{ $t('stars') }}
              </div>
              <div class="estate-info__rate-progress poor">
                <div class="estate-info__rate-progress-inner"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StarIcon from '~/components/icons/posts/star'
import AddressIcon from '~/components/icons/common/address'
import EnergyIcon from '~/components/icons/property/energy'
import ParkingIcon from '~/components/icons/property/parking'
import WasherIcon from '~/components/icons/property/parking'
import BedIcon from '~/components/icons/property/bed'
import BathIcon from '~/components/icons/property/bath'
import FilesIcon from '~/components/icons/posts/files'
import DownloadIcon from '~/components/icons/posts/download'
import ArrowBack from '~/components/icons/common/arrow-back'
const options = (fill) => {
  return {
    chart: {
      type: 'donut'
    },
    states: {
      hover: {
        filter: {
          type: 'none',
        }
      },
    },
    legend: {
      show: false
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      tooltip: {
        enabled: false
      }
    },
    fill: {
      colors: fill
    },
    responsive: [{
      breakpoint: 10000,
      options: {
        chart: {
          width: 370
        },
      }
    }],
  }
}
  export default {
    name: 'real-estate-details',

    components: {
      StarIcon,
      AddressIcon,
      EnergyIcon,
      ParkingIcon,
      WasherIcon,
      BedIcon,
      BathIcon,
      FilesIcon,
      DownloadIcon,
      ArrowBack
    },

    data() {
      return {
        swiperOption: {
          slidesPerView: 1,
          spaceBetween: 30,
          allowTouchMove: false,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        },
        series: [20, 30, 25, 10, 15],
        transactionSeries: [30, 20, 15, 10, 5],
        chartOptions: options(
          ['#FFA825', '#FFBF5F', '#FFCE85', '#FFE0B0', '#FFEBCD']
        ),
        chartOptionsTransaction: options(
          ['#FC7D58', '#FFA825', '#22B0FC', '#EB67D0', '#38C976']
        ),
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "~/assets/css/posts/posts-list";
  .settings-section__title {
    margin-bottom: 26px;
  }
  .swiper-button-prev, .swiper-button-next {
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 3px;
    background: $thirdlyGray;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 10;
    svg {
      width: 18px;
      height: 18px;
      fill: $baseBlack;

      path {
        fill: $baseBlack;
      }
    }
  }
  .swiper-button-prev, {
    left: auto;
    right: 50px;
  }
  .swiper-button-next {
    transform: rotate(180deg);
  }
</style>
