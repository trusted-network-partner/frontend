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
      <div class="filter__popup filter__popup-second">
        <div class="filter__popup-content">
          <div class="filter__pop-header">
            <div class="default-title">{{ $t('filters') }}</div>
            <div
              class="filter__popup-icon"
              @click="popUpClose"
            >
              <CloseBigIcon />
            </div>
          </div>
          <div class="filter__popup-furnishing">
            <div class="estate-info__item-subject">
              <div class="estate-info__item-left"> {{ $t('fridge') }} </div>
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
              <div class="estate-info__item-left"> {{ $t('fridge') }} </div>
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
              <div class="estate-info__item-left"> {{ $t('fridge') }} </div>
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
          <div class="filter__popup-additional__selects">
            <div class="filter__popup-title">
              {{ $t('addition_information') }}
            </div>
            <div class="estate-info__item-section">
              <div class="estate-info__item-column">
                <div class="estate-info__item-category">
                  <div class="estate-info__item-subtitle select-trigger">
                    {{ $t('appliances') }}
                    <div class="select-trigger-icon">
                      <TriangleIcon/>
                    </div>
                  </div>
                  <div class="estate-info__item-content select-dropdown">
                    <div class="estate-info__item-subject">
                      <div class="estate-info__item-left"> {{ $t('fridge') }} </div>
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
                  <div class="estate-info__item-subtitle select-trigger">
                    {{ $t('appliances') }}
                    <div class="select-trigger-icon">
                      <TriangleIcon/>
                    </div>
                  </div>
                  <div class="estate-info__item-content select-dropdown">
                    <div class="estate-info__item-subject">
                      <div class="estate-info__item-left"> {{ $t('fridge') }} </div>
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
              </div>
              <div class="estate-info__item-column">
                <div class="estate-info__item-category">
                  <div class="estate-info__item-subtitle select-trigger">
                    {{ $t('landscape') }}
                    <div class="select-trigger-icon">
                      <TriangleIcon/>
                    </div>
                  </div>
                  <div class="estate-info__item-content select-dropdown">
                    <div class="estate-info__item-subject">
                      <div class="estate-info__item-left"> {{ $t('see_views') }} </div>
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
                      <div class="estate-info__item-left"> {{ $t('mountain_views') }} </div>
                      <div class="estate-info__item-right">
                        <div class="measurement">
                          <div class="measurement__switcher">
                            <label class="measurement__check">
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
                            <label class="measurement__check">
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
                  <div class="estate-info__item-subtitle select-trigger">
                    {{ $t('appliances') }}
                    <div class="select-trigger-icon">
                      <TriangleIcon/>
                    </div>
                  </div>
                  <div class="estate-info__item-content select-dropdown">
                    <div class="estate-info__item-subject">
                      <div class="estate-info__item-left"> {{ $t('fridge') }} </div>
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
                            <label class="measurement__check">
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
              </div>
            </div>
          </div>
          <div class="filter__popup-status">
            <div class="filter__popup-title">{{ $t('status') }}</div>
            <div class="filter__popup-status__list">

              <div class="content-form__item">
                <div class="content-form__item-info">
                  <div class="content-form__item-title">{{ $t('bank') }}</div>
                  <div class="content-form__item-descr">{{ $t('bank_reposition') }}</div>
                </div>
                <label  class="content-form__item-label absolute">
                  <input type="radio" name="status">
                  <span class="content-form__item-check">
                  <CheckIcon/>
                </span>
                </label>
              </div>
              <div class="content-form__item">
                <div class="content-form__item-info">
                  <div class="content-form__item-title">{{ $t('bank') }}</div>
                  <div class="content-form__item-descr">{{ $t('bank_reposition') }}</div>
                </div>
                <label  class="content-form__item-label absolute">
                  <input type="radio" name="status">
                  <span class="content-form__item-check">
                  <CheckIcon/>
                </span>
                </label>
              </div>
              <div class="content-form__item">
                <div class="content-form__item-info">
                  <div class="content-form__item-title">{{ $t('bank') }}</div>
                  <div class="content-form__item-descr">{{ $t('bank_reposition') }}</div>
                </div>
                <label  class="content-form__item-label absolute">
                  <input type="radio" name="status">
                  <span class="content-form__item-check">
                  <CheckIcon/>
                </span>
                </label>
              </div>
              <div class="content-form__item">
                <div class="content-form__item-info">
                  <div class="content-form__item-title">{{ $t('bank') }}</div>
                  <div class="content-form__item-descr">{{ $t('bank_reposition') }}</div>
                </div>
                <label  class="content-form__item-label absolute">
                  <input type="radio" name="status">
                  <span class="content-form__item-check">
                  <CheckIcon/>
                </span>
                </label>
              </div>

            </div>
          </div>
          <div class="filter__popup-rooms__values">
            <div class="default-title">{{ $t('rooms') }}</div>
            <div class="settings-select__items">
              <div
                v-for="select in selects"
                :key="select.id"
                class="settings-select select-full-width"
              >
                <SelectItem
                  :selectOptions="select.options"
                  @change="selectedOption"
                >
                  <div class="settings-edit__item-label">
                    {{ select.label}}
                  </div>
                </SelectItem>
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
                            <div class="measurement__switcher">
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
              <input type="text" class="info-default__value" value="sea-view">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import TriangleIcon from '~/components/icons/common/triangle'
import CheckIcon from '~/components/icons/common/check'
import CloseBigIcon from '~/components/icons/common/close-big'
import SelectItem from '~/components/select/selectItem'

export default {

  name: 'filter-popup-second',

  components: {
    TriangleIcon,
    CheckIcon,
    CloseBigIcon,
    SelectItem
  },

  data() {
    return {
      isOpen: true,
      selects: [
        {
          id: 'bedrooms',
          label: 'How many bedrooms?',
          options: [
            { id: 1, name: 'Any', value: 'any', chosen: true },
            { id: 2, name: 'Item2', value: 'item2', chosen: false }
          ],
        },
        {
          id: 'bathroom',
          label: 'How many bathroom?',
          options: [
            { id: 1, name: 'Any', value: 'any', chosen: true },
            { id: 2, name: 'Item2', value: 'item2', chosen: false }
          ],
        }
      ]
    }
  },

  methods: {
    open() {
      this.isOpen = true
    },
    popUpClose() {
      this.isOpen = false
    },
    selectedOption(value) {
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~/assets/css/default/pop-ups";
  .filter__pop-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .pop-up-wrap__inner {
    z-index: 10;
  }
  .filter__popup {
    position: fixed;
    top: 5%;
    left: 50%;
    transform: translateX(-50%);
    background: $baseWhite;
    height: calc(100vh - 100px);
    overflow-y: auto;
    z-index: 11;
    &-content {
      padding: 10px 0;
    }
    &-icon {
      cursor: pointer;
      margin-bottom: 40px;
    }
  }
  .select-trigger-icon {
    margin-left: 7px;
  }
</style>
