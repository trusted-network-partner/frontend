<template>
  <div
    v-if="isOpen"
    class="pop-up-wrap"
  >
    <div class="pop-up-wrap__inner">
      <div
        class="overlay"
        @click="popUpClose"
      />
      <div class="filter__popup filter__popup-first">
        <div class="filter__popup-content">
          <div class="default-title">filter</div>
          <div class="settings-select__items">
            <div class="settings-select">
              <div class="settings-select__item select-container">
                <div class="settings-edit__item-inner select-trigger">
                  <div class="settings-edit__item-left">
                    <div class="settings-edit__item-label">{{ $t('type') }}</div>
                    <div class="settings-edit__item-value">{{ $t('house') }}</div>
                  </div>
                  <div class="settings-edit__item-right select-trigger-icon">
                    <TriangleIcon/>
                  </div>
                </div>
                <div class="select-dropdown">
                </div>
              </div>
            </div>
            <div class="settings-select">
              <div class="settings-select__item select-container">
                <div class="settings-edit__item-inner select-trigger">
                  <div class="settings-edit__item-left">
                    <div class="settings-edit__item-label">{{ $t('category.type') }}</div>
                    <div class="settings-edit__item-value">{{ $t('townhouse') }}</div>
                  </div>
                  <div class="settings-edit__item-right select-trigger-icon">
                    <TriangleIcon/>
                  </div>
                </div>
                <div class="select-dropdown">
                </div>
              </div>
            </div>
          </div>
          <div class="filter__popup-budget">
          </div>
          <div class="filter__popup-rooms">
            <div class="filter__popup-title"> {{ $t('rooms') }} </div>
            <p> {{ $t('filter_rooms') }} </p>
          </div>
          <div class="filter__popup-year">
            <div class="filter__popup-title">
              {{ $t('year_of_construction') }}
            </div>
            <div class="info-default">
              <label class="info-default__label"> {{ $t('from') }} </label>
              <input type="text" class="info-default__value" value="2007">
            </div>
          </div>
          <div class="filter__popup-square">
            <div class="info-default info-default__items">
              <div class="info-default__item">
                <label for="square1-min" class="info-default__label">{{ $t('min') }}</label>
                <input id='square1-min' type="number" class="info-default__value" value="90">
              </div>
              <div class="info-default__item">
                <label for="square1-max" class="info-default__label">{{ $t('max') }}</label>
                <input id='square1-max' type="number" class="info-default__value" value="120">
              </div>
              <div class="select-wrap">
                <div class="select-container search">
                  <div class="select-trigger">
                    <div class="select-value-item">m2</div>
                    <div class="select-trigger-icon">
                      <TriangleIcon/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="info-default info-default__items">
              <div class="info-default__item">
                <label for="square2-min" class="info-default__label">{{ $t('min') }}</label>
                <input id='square2-min' type="number" class="info-default__value" value="1.000">
              </div>
              <div class="info-default__item">
                <label for="square2-max" class="info-default__label">{{ $t('max') }}</label>
                <input id='square2-max' type="number" class="info-default__value" value="1.500">
              </div>
              <div class="select-wrap">
                <div class="select-container search">
                  <div class="select-trigger">
                    <div class="select-value-item">m2</div>
                    <div class="select-trigger-icon">
                      <TriangleIcon/>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div class="filter__popup-rooms__values">
            <div class="default-title">{{ $t('rooms') }}</div>
            <div class="settings-select__items">
              <div class="settings-select">
                <div class="settings-select__item select-container">
                  <div class="settings-edit__item-inner select-trigger">
                    <div class="settings-edit__item-left">
                      <div class="settings-edit__item-label">{{ $t('how_many_bedrooms') }}</div>
                      <div class="settings-edit__item-value">{{ $t('any') }}</div>
                    </div>
                    <div class="settings-edit__item-right select-trigger-icon">
                      <TriangleIcon/>
                    </div>
                  </div>
                  <div class="select-dropdown">
                  </div>
                </div>
              </div>
              <div class="settings-select">
                <div class="settings-select__item select-container">
                  <div class="settings-edit__item-inner select-trigger">
                    <div class="settings-edit__item-left">
                      <div class="settings-edit__item-label">{{ $t('how_many_bathrooms') }}</div>
                      <div class="settings-edit__item-value">{{ $t('any') }}</div>
                    </div>
                    <div class="settings-edit__item-right select-trigger-icon">
                      <TriangleIcon/>
                    </div>
                  </div>
                  <div class="select-dropdown">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="filter__popup-more-filters">
            <div class="default-title">{{ $t('more_filters') }}</div>
            <div class="content-form__items flex">
              <div class="info-default__col">
                <label class="content-form__item-label content-form__item-wrap">
                  <span class="auth-free__category-title">{{ $t('furnished') }}</span>
                    <input type="radio" name ='furnishing'>
                  <span class="content-form__item-check">
                    <CheckIcon/>
                  </span>
                </label>
              </div>
              <div class="info-default__col">
                <label class="content-form__item-label content-form__item-wrap">
                  <span class="auth-free__category-title">{{ $t('semiFurnished') }}</span>
                  <input type="radio" name ='furnishing'>
                  <span class="content-form__item-check">
                    <CheckIcon/>
                  </span>
                </label>
              </div>
              <div class="info-default__col">
                <label class="content-form__item-label content-form__item-wrap">
                  <span class="auth-free__category-title">{{ $t('unfurnished') }}</span>
                  <input type="radio" name ='furnishing'>
                  <span class="content-form__item-check">
                    <CheckIcon/>
                  </span>
                </label>
              </div>
            </div>
          </div>
          <div class="filter__popup-additional">
            <div class="estate-info__item">
              <div class="default-title">
                {{ $t('addition_information') }}
              </div>
              <div class="estate-info__item-section">
                <div class="estate-info__item-column">
                  <div class="estate-info__item-category">
                    <div class="estate-info__item-subtitle">
                      {{ $t('appliances') }}
                    </div>
                    <div class="estate-info__item-content">
                      <div class="estate-info__item-subject">
                        <div class="estate-info__item-left"> {{ $t('fridge') }} </div>
                        <div class="estate-info__item-right">
                          <div class="measurement">
                            <div class="measurement__switcher switcher_orange">
                              <label class="measurement__check">
                                <input type="checkbox" class="measurement__check-input">
                                <span class="measurement__check-span"></span>
                                <span class="measurement__check-background measurement-background_orange"></span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="estate-info__item-subject">
                        <div class="estate-info__item-left"> {{ $t('wash_machine') }} </div>
                        <div class="estate-info__item-right">
                          <div class="measurement">
                            <div class="measurement__switcher switcher_green">
                              <label class="measurement__check ">
                                <input type="checkbox" class="measurement__check-input">
                                <span class="measurement__check-span"></span>
                                <span class="measurement__check-background"></span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="estate-info__item-subject">
                        <div class="estate-info__item-left"> {{ $t('dishWasher') }} </div>
                        <div class="estate-info__item-right">
                          <div class="measurement">
                            <div class="measurement__switcher switcher_green">
                              <label class="measurement__check ">
                                <input type="checkbox" class="measurement__check-input">
                                <span class="measurement__check-span"></span>
                                <span class="measurement__check-background"></span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="estate-info__item-subject">
                        <div class="estate-info__item-left"> {{ $t('hot_plate') }} </div>
                        <div class="estate-info__item-right">
                          <div class="measurement">
                            <div class="measurement__switcher ">
                              <label class="measurement__check ">
                                <input type="checkbox" class="measurement__check-input">
                                <span class="measurement__check-span"></span>
                                <span class="measurement__check-background"></span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="estate-info__item-subject">
                        <div class="estate-info__item-left"> {{ $t('oven') }} </div>
                        <div class="estate-info__item-right">
                          <div class="measurement">
                            <div class="measurement__switcher switcher_green">
                              <label class="measurement__check ">
                                <input type="checkbox" class="measurement__check-input">
                                <span class="measurement__check-span"></span>
                                <span class="measurement__check-background"></span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="estate-info__item-subject">
                        <div class="estate-info__item-left"> {{ $t('tv') }} </div>
                        <div class="estate-info__item-right">
                          <div class="measurement">
                            <div class="measurement__switcher switcher_green">
                              <label class="measurement__check ">
                                <input type="checkbox" class="measurement__check-input">
                                <span class="measurement__check-span"></span>
                                <span class="measurement__check-background"></span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="estate-info__item-subject">
                        <div class="estate-info__item-left"> {{ $t('air_conditioner') }} </div>
                        <div class="estate-info__item-right">
                          <div class="measurement">
                            <div class="measurement__switcher switcher_green">
                              <label class="measurement__check ">
                                <input type="checkbox" class="measurement__check-input">
                                <span class="measurement__check-span"></span>
                                <span class="measurement__check-background"></span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="estate-info__item-category">
                    <div class="estate-info__item-subtitle">
                      {{ $t('common_areas') }}
                    </div>
                    <div class="estate-info__item-content">
                      <div class="estate-info__item-subject">
                        <div class="estate-info__item-left"> {{ $t('community_parking') }} </div>
                        <div class="estate-info__item-right">
                          <div class="measurement">
                            <div class="measurement__switcher switcher_green">
                              <label class="measurement__check ">
                                <input type="checkbox" class="measurement__check-input">
                                <span class="measurement__check-span"></span>
                                <span class="measurement__check-background"></span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="estate-info__item-subject">
                        <div class="estate-info__item-left"> {{ $t('community_pool') }} </div>
                        <div class="estate-info__item-right">
                          <div class="measurement">
                            <div class="measurement__switcher switcher_green">
                              <label class="measurement__check ">
                                <input type="checkbox" class="measurement__check-input">
                                <span class="measurement__check-span"></span>
                                <span class="measurement__check-background"></span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="estate-info__item-subject">
                        <div class="estate-info__item-left"> {{ $t('playground_kids') }} </div>
                        <div class="estate-info__item-right">
                          <div class="measurement">
                            <div class="measurement__switcher switcher_green">
                              <label class="measurement__check ">
                                <input type="checkbox" class="measurement__check-input">
                                <span class="measurement__check-span"></span>
                                <span class="measurement__check-background"></span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="estate-info__item-subject">
                        <div class="estate-info__item-left"> {{ $t('barbecue_area') }} </div>
                        <div class="estate-info__item-right">
                          <div class="measurement">
                            <div class="measurement__switcher switcher_green">
                              <label class="measurement__check ">
                                <input type="checkbox" class="measurement__check-input">
                                <span class="measurement__check-span"></span>
                                <span class="measurement__check-background"></span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="estate-info__item-subject">
                        <div class="estate-info__item-left"> CCTV </div>
                        <div class="estate-info__item-right">
                          <div class="measurement">
                            <div class="measurement__switcher switcher_green">
                              <label class="measurement__check ">
                                <input type="checkbox" class="measurement__check-input">
                                <span class="measurement__check-span"></span>
                                <span class="measurement__check-background"></span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="estate-info__item-subject">
                        <div class="estate-info__item-left"> {{ $t('security') }} </div>
                        <div class="estate-info__item-right">
                          <div class="measurement">
                            <div class="measurement__switcher switcher_green">
                              <label class="measurement__check ">
                                <input type="checkbox" class="measurement__check-input">
                                <span class="measurement__check-span"></span>
                                <span class="measurement__check-background"></span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="estate-info__item-subject">
                        <div class="estate-info__item-left"> {{ $t('ramped_access') }} </div>
                        <div class="estate-info__item-right">
                          <div class="measurement">
                            <div class="measurement__switcher switcher_green">
                              <label class="measurement__check ">
                                <input type="checkbox" class="measurement__check-input">
                                <span class="measurement__check-span"></span>
                                <span class="measurement__check-background"></span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="estate-info__item-subject">
                        <div class="estate-info__item-left"> {{ $t('lift') }} </div>
                        <div class="estate-info__item-right">
                          <div class="measurement">
                            <div class="measurement__switcher switcher_green">
                              <label class="measurement__check ">
                                <input type="checkbox" class="measurement__check-input">
                                <span class="measurement__check-span"></span>
                                <span class="measurement__check-background"></span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="estate-info__item-column">
                  <div class="estate-info__item-category">
                    <div class="estate-info__item-subtitle">
                      {{ $t('landscape') }}
                    </div>
                    <div class="estate-info__item-content">
                      <div class="estate-info__item-subject">
                        <div class="estate-info__item-left"> {{ $t('see_views') }} </div>
                        <div class="estate-info__item-right">
                          <div class="measurement">
                            <div class="measurement__switcher switcher_green">
                              <label class="measurement__check ">
                                <input type="checkbox" class="measurement__check-input">
                                <span class="measurement__check-span"></span>
                                <span class="measurement__check-background"></span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="estate-info__item-subject">
                        <div class="estate-info__item-left"> {{ $t('mountain_views') }} </div>
                        <div class="estate-info__item-right">
                          <div class="measurement">
                            <div class="measurement__switcher switcher_green">
                              <label class="measurement__check ">
                                <input type="checkbox" class="measurement__check-input">
                                <span class="measurement__check-span"></span>
                                <span class="measurement__check-background"></span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="estate-info__item-subject">
                        <div class="estate-info__item-left"> {{ $t('lake_views') }} </div>
                        <div class="estate-info__item-right">
                          <div class="measurement">
                            <div class="measurement__switcher switcher_green">
                              <label class="measurement__check ">
                                <input type="checkbox" class="measurement__check-input">
                                <span class="measurement__check-span"></span>
                                <span class="measurement__check-background"></span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="estate-info__item-subject">
                        <div class="estate-info__item-left"> {{ $t('golf_views') }} </div>
                        <div class="estate-info__item-right">
                          <div class="measurement">
                            <div class="measurement__switcher switcher_green">
                              <label class="measurement__check ">
                                <input type="checkbox" class="measurement__check-input">
                                <span class="measurement__check-span"></span>
                                <span class="measurement__check-background"></span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="estate-info__item-category">
                    <div class="estate-info__item-subtitle">
                      {{ $t('private_areas') }}
                    </div>
                    <div class="estate-info__item-content">
                      <div class="estate-info__item-subject">
                        <div class="estate-info__item-left"> {{ $t('garden') }} </div>
                        <div class="estate-info__item-right">
                          <div class="measurement">
                            <div class="measurement__switcher switcher_green">
                              <label class="measurement__check ">
                                <input type="checkbox" class="measurement__check-input">
                                <span class="measurement__check-span"></span>
                                <span class="measurement__check-background"></span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="estate-info__item-subject">
                        <div class="estate-info__item-left"> {{ $t('pool') }} </div>
                        <div class="estate-info__item-right">
                          <div class="measurement">
                            <div class="measurement__switcher switcher_green">
                              <label class="measurement__check ">
                                <input type="checkbox" class="measurement__check-input">
                                <span class="measurement__check-span"></span>
                                <span class="measurement__check-background"></span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="estate-info__item-subject">
                        <div class="estate-info__item-left"> {{ $t('covered_parking') }} </div>
                        <div class="estate-info__item-right">
                          <div class="measurement">
                            <div class="measurement__switcher switcher_green">
                              <label class="measurement__check ">
                                <input type="checkbox" class="measurement__check-input">
                                <span class="measurement__check-span"></span>
                                <span class="measurement__check-background"></span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="estate-info__item-subject">
                        <div class="estate-info__item-left"> {{ $t('garage') }} </div>
                        <div class="estate-info__item-right">
                          <div class="measurement">
                            <div class="measurement__switcher switcher_green">
                              <label class="measurement__check ">
                                <input type="checkbox" class="measurement__check-input">
                                <span class="measurement__check-span"></span>
                                <span class="measurement__check-background"></span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="estate-info__item-subject">
                        <div class="estate-info__item-left"> {{ $t('terrace') }} </div>
                        <div class="estate-info__item-right">
                          <div class="measurement">
                            <div class="measurement__switcher switcher_green">
                              <label class="measurement__check ">
                                <input type="checkbox" class="measurement__check-input">
                                <span class="measurement__check-span"></span>
                                <span class="measurement__check-background"></span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="estate-info__item-subject">
                        <div class="estate-info__item-left"> {{ $t('gazebo') }} </div>
                        <div class="estate-info__item-right">
                          <div class="measurement">
                            <div class="measurement__switcher switcher_green">
                              <label class="measurement__check ">
                                <input type="checkbox" class="measurement__check-input">
                                <span class="measurement__check-span"></span>
                                <span class="measurement__check-background"></span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="estate-info__item-subject">
                        <div class="estate-info__item-left"> {{ $t('barbecue') }} </div>
                        <div class="estate-info__item-right">
                          <div class="measurement">
                            <div class="measurement__switcher switcher_green">
                              <label class="measurement__check ">
                                <input type="checkbox" class="measurement__check-input">
                                <span class="measurement__check-span"></span>
                                <span class="measurement__check-background"></span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="estate-info__item-subject">
                        <div class="estate-info__item-left"> {{ $t('sauna') }} </div>
                        <div class="estate-info__item-right">
                          <div class="measurement">
                            <div class="measurement__switcher switcher_green">
                              <label class="measurement__check ">
                                <input type="checkbox" class="measurement__check-input">
                                <span class="measurement__check-span"></span>
                                <span class="measurement__check-background"></span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="estate-info__item-subject">
                        <div class="estate-info__item-left"> {{ $t('chimney') }} </div>
                        <div class="estate-info__item-right">
                          <div class="measurement">
                            <div class="measurement__switcher switcher_green">
                              <label class="measurement__check ">
                                <input type="checkbox" class="measurement__check-input">
                                <span class="measurement__check-span"></span>
                                <span class="measurement__check-background"></span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="estate-info__item-subject">
                        <div class="estate-info__item-left"> {{ $t('panoramic_windows') }} </div>
                        <div class="estate-info__item-right">
                          <div class="measurement">
                            <div class="measurement__switcher switcher_green">
                              <label class="measurement__check ">
                                <input type="checkbox" class="measurement__check-input">
                                <span class="measurement__check-span"></span>
                                <span class="measurement__check-background"></span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="filter__popup-keywords">
            <div class="default-title">{{ $t('start_typing_words') }}:</div>
            <div class="info-default">
              <label class="info-default__label"> {{ $t('enter_keywords') }} </label>
              <input type="text" class="info-default__value" value="seaview">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TriangleIcon from '~/components/icons/common/triangle'
import SettingsBudget from '~/components/settings/settings-budget'
import CheckIcon from '~/components/icons/common/check'
import CloseBigIcon from '~/components/icons/common/close-big'

export default {
  name: 'filter-popup',

  components: {
    TriangleIcon,
    SettingsBudget,
    CheckIcon,
    CloseBigIcon
  },

  data() {
    return {
      isOpen: false
    }
  },

  methods: {
    open() {
      this.isOpen = true
    },
    popUpClose() {
      this.isOpen = false
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~/assets/css/default/pop-ups";
</style>
