<template>
  <form class="estate-info">
    <div class="estate-info__item">
      <div class="default-title">
        {{ $t('home_details') }}
      </div>
      <MeasurementsSelects />
    </div>
    <div class="estate-info__item">
      <div class="default-title">
        {{ $t('facing') }}
      </div>
      <div class="content-form__items flex flex-4">
        <div class="info-default__col">
          <label class="content-form__item-label content-form__item-wrap">
            <span class="auth-free__category-title">{{ $t('north') }}</span>
            <input type="checkbox">
            <span class="content-form__item-check">
            <CheckIcon />
          </span>
          </label>
        </div>
        <div class="info-default__col">
          <label class="content-form__item-label content-form__item-wrap">
            <span class="auth-free__category-title">{{ $t('West') }}</span>
            <input type="checkbox">
            <span class="content-form__item-check">
            <CheckIcon />
          </span>
          </label>
        </div>
        <div class="info-default__col">
          <label class="content-form__item-label content-form__item-wrap">
            <span class="auth-free__category-title">{{ $t('south') }}</span>
            <input type="checkbox">
            <span class="content-form__item-check">
            <CheckIcon />
          </span>
          </label>
        </div>
        <div class="info-default__col">
          <label class="content-form__item-label content-form__item-wrap">
            <span class="auth-free__category-title">{{ $t('east') }}</span>
            <input type="checkbox">
            <span class="content-form__item-check">
            <CheckIcon />
          </span>
          </label>
        </div>
      </div>
    </div>
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
                <div class="estate-info__item-left">  {{ $t('fridge') }}</div>
                <div class="estate-info__item-right">
                  <label class="content-form__item-label estate-info__item-right__yes">
                    <span class="estate-info__item-right__title">{{ $t('yes') }}</span>
                    <input type="radio" name = 'fridge'>
                    <span class="content-form__item-check">
                      <CheckIcon />
                    </span>
                  </label>
                  <label class="content-form__item-label estate-info__item-right__no">
                    <span class="estate-info__item-right__title">{{ $t('no') }}</span>
                    <input type="radio" name = 'fridge'>
                    <span class="content-form__item-check">
                      <CheckIcon />
                    </span>
                  </label>
                </div>
              </div>
              <div class="estate-info__item-subject">
                <div class="estate-info__item-left"> {{ $t('wash_machine') }} </div>
                <div class="estate-info__item-right">
                  <label class="content-form__item-label estate-info__item-right__yes">
                    <span class="estate-info__item-right__title">{{ $t('yes') }}</span>
                    <input type="radio" name = 'Wash'>
                    <span class="content-form__item-check">
                      <CheckIcon />
                    </span>
                  </label>
                  <label class="content-form__item-label estate-info__item-right__no">
                    <span class="estate-info__item-right__title">{{ $t('no') }}</span>
                    <input type="radio" name = 'Wash'>
                    <span class="content-form__item-check">
                      <CheckIcon />
                    </span>
                  </label>
                </div>
              </div>
              <div class="estate-info__item-subject">
                <div class="estate-info__item-left"> {{ $t('dishWasher') }} </div>
                <div class="estate-info__item-right">
                  <label class="content-form__item-label estate-info__item-right__yes">
                    <span class="estate-info__item-right__title">{{ $t('yes') }}</span>
                    <input type="radio" name = 'Dishwasher'>
                    <span class="content-form__item-check">
                      <CheckIcon />
                    </span>
                  </label>
                  <label class="content-form__item-label estate-info__item-right__no">
                    <span class="estate-info__item-right__title">{{ $t('no') }}</span>
                    <input type="radio" name = 'Dishwasher'>
                    <span class="content-form__item-check">
                      <CheckIcon />
                    </span>
                  </label>
                </div>
              </div>
              <div class="estate-info__item-subject">
                <div class="estate-info__item-left"> {{ $t('hot_plate') }} </div>
                <div class="estate-info__item-right">
                  <label class="content-form__item-label estate-info__item-right__yes">
                    <span class="estate-info__item-right__title">{{ $t('yes') }}</span>
                    <input type="radio" name = 'plate'>
                    <span class="content-form__item-check">
                      <CheckIcon />
                    </span>
                  </label>
                  <label class="content-form__item-label estate-info__item-right__no">
                    <span class="estate-info__item-right__title">{{ $t('no') }}</span>
                    <input type="radio" name = 'plate'>
                    <span class="content-form__item-check">
                      <CheckIcon />
                    </span>
                  </label>
                </div>
              </div>
              <div class="estate-info__item-subject">
                <div class="estate-info__item-left"> {{ $t('oven') }} </div>
                <div class="estate-info__item-right">
                  <label class="content-form__item-label estate-info__item-right__yes">
                    <span class="estate-info__item-right__title">{{ $t('yes') }}</span>
                    <input type="radio" name = 'Oven'>
                    <span class="content-form__item-check">
                      <CheckIcon />
                    </span>
                  </label>
                  <label class="content-form__item-label estate-info__item-right__no">
                    <span class="estate-info__item-right__title">{{ $t('no') }}</span>
                    <input type="radio" name = 'Oven'>
                    <span class="content-form__item-check">
                      <CheckIcon />
                    </span>
                  </label>
                </div>
              </div>
              <div class="estate-info__item-subject">
                <div class="estate-info__item-left"> {{ $t('tv') }} </div>
                <div class="estate-info__item-right">
                  <label class="content-form__item-label estate-info__item-right__yes">
                    <span class="estate-info__item-right__title">{{ $t('yes') }}</span>
                    <input type="radio" name = 'TV'>
                    <span class="content-form__item-check">
                      <CheckIcon />
                    </span>
                  </label>
                  <label class="content-form__item-label estate-info__item-right__no">
                    <span class="estate-info__item-right__title">{{ $t('no') }}</span>
                    <input type="radio" name = 'TV'>
                    <span class="content-form__item-check">
                      <CheckIcon />
                    </span>
                  </label>
                </div>
              </div>
              <div class="estate-info__item-subject">
                <div class="estate-info__item-left"> {{ $t('air_conditioner') }} </div>
                <div class="estate-info__item-right">
                  <label class="content-form__item-label estate-info__item-right__yes">
                    <span class="estate-info__item-right__title">{{ $t('yes') }}</span>
                    <input type="radio" name = 'conditioner'>
                    <span class="content-form__item-check">
                      <CheckIcon />
                    </span>
                  </label>
                  <label class="content-form__item-label estate-info__item-right__no">
                    <span class="estate-info__item-right__title">{{ $t('no') }}</span>
                    <input type="radio" name = 'conditioner'>
                    <span class="content-form__item-check">
                      <CheckIcon />
                    </span>
                  </label>
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
                <div class="estate-info__item-left">
                  {{ $t('community_parking') }}
                </div>
                <div class="estate-info__item-right">
                  <label class="content-form__item-label estate-info__item-right__yes">
                    <span class="estate-info__item-right__title">{{ $t('yes') }}</span>
                    <input type="radio" name = 'parking'>
                    <span class="content-form__item-check">
                      <CheckIcon />
                    </span>
                  </label>
                  <label class="content-form__item-label estate-info__item-right__no">
                    <span class="estate-info__item-right__title">{{ $t('no') }}</span>
                    <input type="radio" name = 'parking'>
                    <span class="content-form__item-check">
                      <CheckIcon />
                    </span>
                  </label>
                </div>
              </div>
              <div class="estate-info__item-subject">
                <div class="estate-info__item-left">
                  {{ $t('community_pool') }}
                </div>
                <div class="estate-info__item-right">
                  <label class="content-form__item-label estate-info__item-right__yes">
                    <span class="estate-info__item-right__title">{{ $t('yes') }}</span>
                    <input type="radio" name = 'CommunityPool'>
                    <span class="content-form__item-check">
                      <CheckIcon />
                    </span>
                  </label>
                  <label class="content-form__item-label estate-info__item-right__no">
                    <span class="estate-info__item-right__title">{{ $t('no') }}</span>
                    <input type="radio" name = 'CommunityPool'>
                    <span class="content-form__item-check">
                      <CheckIcon />
                    </span>
                  </label>
                </div>
              </div>
              <div class="estate-info__item-subject">
                <div class="estate-info__item-left">
                  {{ $t('playground_kids') }}
                </div>
                <div class="estate-info__item-right">
                  <label class="content-form__item-label estate-info__item-right__yes">
                    <span class="estate-info__item-right__title">{{ $t('yes') }}</span>
                    <input type="radio" name = 'Playground'>
                    <span class="content-form__item-check">
                      <CheckIcon />
                    </span>
                  </label>
                  <label class="content-form__item-label estate-info__item-right__no">
                    <span class="estate-info__item-right__title">{{ $t('no') }}</span>
                    <input type="radio" name = 'Playground'>
                    <span class="content-form__item-check">
                      <CheckIcon />
                    </span>
                  </label>
                </div>
              </div>
              <div class="estate-info__item-subject">
                <div class="estate-info__item-left">
                  {{ $t('barbecue_area') }}
                </div>
                <div class="estate-info__item-right">
                  <label class="content-form__item-label estate-info__item-right__yes">
                    <span class="estate-info__item-right__title">{{ $t('yes') }}</span>
                    <input type="radio" name = 'BarbecueArea'>
                    <span class="content-form__item-check">
                      <CheckIcon />
                    </span>
                  </label>
                  <label class="content-form__item-label estate-info__item-right__no">
                    <span class="estate-info__item-right__title">{{ $t('no') }}</span>
                    <input type="radio" name = 'BarbecueArea'>
                    <span class="content-form__item-check">
                      <CheckIcon />
                    </span>
                  </label>
                </div>
              </div>
              <div class="estate-info__item-subject">
                <div class="estate-info__item-left"> CCTV </div>
                <div class="estate-info__item-right">
                  <label class="content-form__item-label estate-info__item-right__yes">
                    <span class="estate-info__item-right__title">{{ $t('yes') }}</span>
                    <input type="radio" name = 'CCTV'>
                    <span class="content-form__item-check">
                      <CheckIcon />
                    </span>
                  </label>
                  <label class="content-form__item-label estate-info__item-right__no">
                    <span class="estate-info__item-right__title">{{ $t('no') }}</span>
                    <input type="radio" name = 'CCTV'>
                    <span class="content-form__item-check">
                      <CheckIcon />
                    </span>
                  </label>
                </div>
              </div>
              <div class="estate-info__item-subject">
                <div class="estate-info__item-left"> {{ $t('security') }} </div>
                <div class="estate-info__item-right">
                  <label class="content-form__item-label estate-info__item-right__yes">
                    <span class="estate-info__item-right__title">{{ $t('yes') }}</span>
                    <input type="radio" name = 'Security'>
                    <span class="content-form__item-check">
                      <CheckIcon />
                    </span>
                  </label>
                  <label class="content-form__item-label estate-info__item-right__no">
                    <span class="estate-info__item-right__title">{{ $t('no') }}</span>
                    <input type="radio" name = 'Security'>
                    <span class="content-form__item-check">
                      <CheckIcon />
                    </span>
                  </label>
                </div>
              </div>
              <div class="estate-info__item-subject">
                <div class="estate-info__item-left">
                  {{ $t('ramped_access') }}
                </div>
                <div class="estate-info__item-right">
                  <label class="content-form__item-label estate-info__item-right__yes">
                    <span class="estate-info__item-right__title">{{ $t('yes') }}</span>
                    <input type="radio" name = 'Ramped'>
                    <span class="content-form__item-check">
                      <CheckIcon />
                    </span>
                  </label>
                  <label class="content-form__item-label estate-info__item-right__no">
                    <span class="estate-info__item-right__title">{{ $t('no') }}</span>
                    <input type="radio" name = 'Ramped'>
                    <span class="content-form__item-check">
                      <CheckIcon />
                    </span>
                  </label>
                </div>
              </div>
              <div class="estate-info__item-subject">
                <div class="estate-info__item-left">
                  {{ $t('lift') }}
                </div>
                <div class="estate-info__item-right">
                  <label class="content-form__item-label estate-info__item-right__yes">
                    <span class="estate-info__item-right__title">{{ $t('yes') }}</span>
                    <input type="radio" name = 'Lift'>
                    <span class="content-form__item-check">
                      <CheckIcon />
                    </span>
                  </label>
                  <label class="content-form__item-label estate-info__item-right__no">
                    <span class="estate-info__item-right__title">{{ $t('no') }}</span>
                    <input type="radio" name = 'Lift'>
                    <span class="content-form__item-check">
                      <CheckIcon />
                    </span>
                  </label>
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
                <div class="estate-info__item-left">
                  {{ $t('see_views') }}
                </div>
                <div class="estate-info__item-right">
                  <label class="content-form__item-label estate-info__item-right__yes">
                    <span class="estate-info__item-right__title">{{ $t('yes') }}</span>
                    <input type="radio" name = 'views'>
                    <span class="content-form__item-check">
                      <CheckIcon />
                    </span>
                  </label>
                  <label class="content-form__item-label estate-info__item-right__no">
                    <span class="estate-info__item-right__title">{{ $t('no') }}</span>
                    <input type="radio" name = 'views'>
                    <span class="content-form__item-check">
                      <CheckIcon />
                    </span>
                  </label>
                </div>
              </div>
              <div class="estate-info__item-subject">
                <div class="estate-info__item-left">
                  {{ $t('mountain_views') }}
                </div>
                <div class="estate-info__item-right">
                  <label class="content-form__item-label estate-info__item-right__yes">
                    <span class="estate-info__item-right__title">{{ $t('yes') }}</span>
                    <input type="radio" name = 'Mountain'>
                    <span class="content-form__item-check">
                      <CheckIcon />
                    </span>
                  </label>
                  <label class="content-form__item-label estate-info__item-right__no">
                    <span class="estate-info__item-right__title">{{ $t('no') }}</span>
                    <input type="radio" name = 'Mountain'>
                    <span class="content-form__item-check">
                      <CheckIcon />
                    </span>
                  </label>
                </div>
              </div>
              <div class="estate-info__item-subject">
                <div class="estate-info__item-left">
                  {{ $t('lake_views') }}
                </div>
                <div class="estate-info__item-right">
                  <label class="content-form__item-label estate-info__item-right__yes">
                    <span class="estate-info__item-right__title">{{ $t('yes') }}</span>
                    <input type="radio" name = 'Lake'>
                    <span class="content-form__item-check">
                      <CheckIcon />
                    </span>
                  </label>
                  <label class="content-form__item-label estate-info__item-right__no">
                    <span class="estate-info__item-right__title">{{ $t('no') }}</span>
                    <input type="radio" name = 'Lake'>
                    <span class="content-form__item-check">
                      <CheckIcon />
                    </span>
                  </label>
                </div>
              </div>
              <div class="estate-info__item-subject">
                <div class="estate-info__item-left">
                  {{ $t('golf_views') }}
                </div>
                <div class="estate-info__item-right">
                  <label class="content-form__item-label estate-info__item-right__yes">
                    <span class="estate-info__item-right__title">{{ $t('yes') }}</span>
                    <input type="radio" name = 'Goulf'>
                    <span class="content-form__item-check">
                      <CheckIcon />
                    </span>
                  </label>
                  <label class="content-form__item-label estate-info__item-right__no">
                    <span class="estate-info__item-right__title">{{ $t('no') }}</span>
                    <input type="radio" name = 'Goulf'>
                    <span class="content-form__item-check">
                      <CheckIcon />
                    </span>
                  </label>
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
                  <label class="content-form__item-label estate-info__item-right__yes">
                    <span class="estate-info__item-right__title">{{ $t('yes') }}</span>
                    <input type="radio" name = 'Garden'>
                    <span class="content-form__item-check">
                      <CheckIcon />
                    </span>
                  </label>
                  <label class="content-form__item-label estate-info__item-right__no">
                    <span class="estate-info__item-right__title">{{ $t('no') }}</span>
                    <input type="radio" name = 'Garden'>
                    <span class="content-form__item-check">
                      <CheckIcon />
                    </span>
                  </label>
                </div>
              </div>
              <div class="estate-info__item-subject">
                <div class="estate-info__item-left"> {{ $t('pool') }} </div>
                <div class="estate-info__item-right">
                  <label class="content-form__item-label estate-info__item-right__yes">
                    <span class="estate-info__item-right__title">{{ $t('yes') }}</span>
                    <input type="radio" name = 'Pool'>
                    <span class="content-form__item-check">
                      <CheckIcon />
                    </span>
                  </label>
                  <label class="content-form__item-label estate-info__item-right__no">
                    <span class="estate-info__item-right__title">{{ $t('no') }}</span>
                    <input type="radio" name = 'Pool'>
                    <span class="content-form__item-check">
                      <CheckIcon />
                    </span>
                  </label>
                </div>
              </div>
              <div class="estate-info__item-subject">
                <div class="estate-info__item-left">
                  {{ $t('covered_parking') }}
                </div>
                <div class="estate-info__item-right">
                  <label class="content-form__item-label estate-info__item-right__yes">
                    <span class="estate-info__item-right__title">{{ $t('yes') }}</span>
                    <input type="radio" name = 'CoveredParking'>
                    <span class="content-form__item-check">
                      <CheckIcon />
                    </span>
                  </label>
                  <label class="content-form__item-label estate-info__item-right__no">
                    <span class="estate-info__item-right__title">{{ $t('no') }}</span>
                    <input type="radio" name = 'CoveredParking'>
                    <span class="content-form__item-check">
                      <CheckIcon />
                    </span>
                  </label>
                </div>
              </div>
              <div class="estate-info__item-subject">
                <div class="estate-info__item-left">
                  {{ $t('garage') }}
                </div>
                <div class="estate-info__item-right">
                  <label class="content-form__item-label estate-info__item-right__yes">
                    <span class="estate-info__item-right__title">{{ $t('yes') }}</span>
                    <input type="radio" name = 'Garage'>
                    <span class="content-form__item-check">
                      <CheckIcon />
                    </span>
                  </label>
                  <label class="content-form__item-label estate-info__item-right__no">
                    <span class="estate-info__item-right__title">{{ $t('no') }}</span>
                    <input type="radio" name = 'Garage'>
                    <span class="content-form__item-check">
                      <CheckIcon />
                    </span>
                  </label>
                </div>
              </div>
              <div class="estate-info__item-subject">
                <div class="estate-info__item-left">
                  {{ $t('terrace') }}
                </div>
                <div class="estate-info__item-right">
                  <label class="content-form__item-label estate-info__item-right__yes">
                    <span class="estate-info__item-right__title">{{ $t('yes') }}</span>
                    <input type="radio" name = 'Terrace'>
                    <span class="content-form__item-check">
                      <CheckIcon />
                    </span>
                  </label>
                  <label class="content-form__item-label estate-info__item-right__no">
                    <span class="estate-info__item-right__title">{{ $t('no') }}</span>
                    <input type="radio" name = 'Terrace'>
                    <span class="content-form__item-check">
                      <CheckIcon />
                    </span>
                  </label>
                </div>
              </div>
              <div class="estate-info__item-subject">
                <div class="estate-info__item-left"> {{ $t('gazebo') }} </div>
                <div class="estate-info__item-right">
                  <label class="content-form__item-label estate-info__item-right__yes">
                    <span class="estate-info__item-right__title">{{ $t('yes') }}</span>
                    <input type="radio" name = 'Gazebo'>
                    <span class="content-form__item-check">
                      <CheckIcon />
                    </span>
                  </label>
                  <label class="content-form__item-label estate-info__item-right__no">
                    <span class="estate-info__item-right__title">{{ $t('no') }}</span>
                    <input type="radio" name = 'Gazebo'>
                    <span class="content-form__item-check">
                      <CheckIcon />
                    </span>
                  </label>
                </div>
              </div>
              <div class="estate-info__item-subject">
                <div class="estate-info__item-left"> {{ $t('barbecue') }} </div>
                <div class="estate-info__item-right">
                  <label class="content-form__item-label estate-info__item-right__yes">
                    <span class="estate-info__item-right__title">{{ $t('yes') }}</span>
                    <input type="radio" name = 'Barbecue'>
                    <span class="content-form__item-check">
                      <CheckIcon />
                    </span>
                  </label>
                  <label class="content-form__item-label estate-info__item-right__no">
                    <span class="estate-info__item-right__title">{{ $t('no') }}</span>
                    <input type="radio" name = 'Barbecue'>
                    <span class="content-form__item-check">
                      <CheckIcon />
                    </span>
                  </label>
                </div>
              </div>
              <div class="estate-info__item-subject">
                <div class="estate-info__item-left"> {{ $t('sauna') }} </div>
                <div class="estate-info__item-right">
                  <label class="content-form__item-label estate-info__item-right__yes">
                    <span class="estate-info__item-right__title">{{ $t('yes') }}</span>
                    <input type="radio" name = 'Sauna'>
                    <span class="content-form__item-check">
                      <CheckIcon />
                    </span>
                  </label>
                  <label class="content-form__item-label estate-info__item-right__no">
                    <span class="estate-info__item-right__title">{{ $t('no') }}</span>
                    <input type="radio" name = 'Sauna'>
                    <span class="content-form__item-check">
                      <CheckIcon />
                    </span>
                  </label>
                </div>
              </div>
              <div class="estate-info__item-subject">
                <div class="estate-info__item-left"> {{ $t('Chimney') }} </div>
                <div class="estate-info__item-right">
                  <label class="content-form__item-label estate-info__item-right__yes">
                    <span class="estate-info__item-right__title">{{ $t('yes') }}</span>
                    <input type="radio" name = 'Chimney'>
                    <span class="content-form__item-check">
                      <CheckIcon />
                    </span>
                  </label>
                  <label class="content-form__item-label estate-info__item-right__no">
                    <span class="estate-info__item-right__title">{{ $t('no') }}</span>
                    <input type="radio" name = 'Chimney'>
                    <span class="content-form__item-check">
                      <CheckIcon />
                    </span>
                  </label>
                </div>
              </div>
              <div class="estate-info__item-subject">
                <div class="estate-info__item-left"> {{ $t('panoramic_windows') }} </div>
                <div class="estate-info__item-right">
                  <label class="content-form__item-label estate-info__item-right__yes">
                    <span class="estate-info__item-right__title">{{ $t('yes') }}</span>
                    <input type="radio" name = 'windows'>
                    <span class="content-form__item-check">
                      <CheckIcon />
                    </span>
                  </label>
                  <label class="content-form__item-label estate-info__item-right__no">
                    <span class="estate-info__item-right__title">{{ $t('no') }}</span>
                    <input type="radio" name = 'windows'>
                    <span class="content-form__item-check">
                      <CheckIcon />
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="estate-info__item">
      <div class="default-title">
        {{ $t('how_sell') }}
      </div>
      <div class="content-form__items flex">
        <div class="info-default__col">
          <label class="content-form__item-label content-form__item-wrap">
            <span class="auth-free__category-title"> {{ $t('furnished') }} </span>
            <input type="checkbox">
            <span class="content-form__item-check">
              <CheckIcon />
            </span>
          </label>
        </div>
        <div class="info-default__col">
          <label class="content-form__item-label content-form__item-wrap">
            <span class="auth-free__category-title"> {{ $t('semiFurnished') }} </span>
            <input type="checkbox">
            <span class="content-form__item-check">
              <CheckIcon />
            </span>
          </label>
        </div>
        <div class="info-default__col">
          <label class="content-form__item-label content-form__item-wrap">
            <span class="auth-free__category-title"> {{ $t('unfurnished') }} </span>
            <input type="checkbox">
            <span class="content-form__item-check">
              <CheckIcon />
            </span>
          </label>
        </div>
      </div>
    </div>
    <div class="estate-info__item">
      <div class="default-title">
        {{ $t('building') }}
      </div>
      <p class="estate-info__item-descr">
        {{ $t('building_year') }}
      </p>
      <Counter
        :value="1971"
      />
    </div>
    <div class="estate-info__item">
      <div class="default-title">
        {{ $t('siding_materials') }}
      </div>
      <div class="content-form__items flex">
        <div class="info-default__col">
          <label class="content-form__item-label content-form__item-wrap">
            <span class="auth-free__category-title">
              {{ $t('wood') }}
            </span>
            <input type="checkbox">
            <span class="content-form__item-check">
              <CheckIcon />
            </span>
          </label>
        </div>
        <div class="info-default__col">
          <label class="content-form__item-label content-form__item-wrap">
            <span class="auth-free__category-title">
              {{ $t('brick') }}
            </span>
            <input type="checkbox">
            <span class="content-form__item-check">
              <CheckIcon />
            </span>
          </label>
        </div>
        <div class="info-default__col">
          <label class="content-form__item-label content-form__item-wrap">
            <span class="auth-free__category-title">
              {{ $t('metal') }}
            </span>
            <input type="checkbox">
            <span class="content-form__item-check">
              <CheckIcon />
            </span>
          </label>
        </div>
      </div>
    </div>
    <div class="estate-info__item">
      <div class="default-title">
        {{ $t('price') }}
      </div>
      <div class="estate-info__item-inner price">
        <div class="content-form__items flex">
          <div
            class="info-default__col price"
          >
            <div class="info-default info-default__items select-inside">
              <div class="info-default__item flex">
                <div class="info-default__element">
                  <label for="home-price" class="info-default__label">
                    {{ $t('price') }}
                  </label>
                  <input
                    id="home-price"
                    type="number"
                    class="info-default__value no-focus"
                    value="190.000"
                    placeholder="Price"
                  >
                </div>
                <SelectItem
                  :selectOptions="optionsCurrency"
                  @change="selectedOption"
                />
              </div>
            </div>
          </div>
        </div>
        <label class="content-form__item-label flex">
          <input type="checkbox">
          <span class="content-form__item-check">
          <CheckIcon />
        </span>
          <span class="auth-free__category-title">
            {{ $t('negotiable') }}
          </span>
        </label>
      </div>
      <p class="estate-info__item-descr">
        {{ $t('desirable_owner_price') }}
      </p>
      <div class="info-default info-default__items">
        <div class="info-default__item">
          <label for="price-min" class="info-default__label">
            {{ $t('min') }}
          </label>
          <input
            id="price-min"
            type="number"
            value=180.000
            :placeholder="$t('min')"
            class="info-default__value no-focus"
          >
        </div>
        <div class="info-default__item">
          <label for="price-max" class="info-default__label">
            {{ $t('max') }}
          </label>
          <input
            id="price-max"
            type="number"
            value=190.000
            :placeholder="$t('max')"
            class="info-default__value no-focus"
          >
        </div>
      </div>
    </div>
    <div class="estate-info__item">
      <div class="default-title">
        {{ $t('nav.partners') }}
      </div>
      <div class="estate-info__item-inner">
        <div class="content-form__items flex">
          <div
            class="info-default__col partners"
          >
            <div class="info-default info-default__items select-inside">
              <div class="info-default__item flex">
                <div class="info-default__element">
                  <label for="partners-commission" class="info-default__label">
                    {{ $t('commission') }}
                  </label>
                  <input
                    id="partners-commission"
                    type="number"
                    class="info-default__value no-focus"
                    value="9.000"
                    placeholder="Commission"
                  >
                </div>
                <SelectItem
                  :selectOptions="optionsCommission"
                  @change="selectedOption"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="estate-info__item-descr">
        {{ $t('keys') }}
      </div>
      <label class="content-form__item-label content-form__item-wrap mb-30">
        <span class="auth-free__category-title"> {{ $t('keys') }} </span>
        <input type="checkbox">
        <span class="content-form__item-check">
          <CheckIcon />
        </span>
      </label>
      <div class="estate-info__item-descr">
        {{ $t('type_agreement') }}
      </div>
      <div class="content-form__items flex">
        <div class="info-default__col">
          <label class="content-form__item-label content-form__item-wrap">
            <span class="auth-free__category-title">
              {{ $t('exclusive') }}
            </span>
            <input type="checkbox">
            <span class="content-form__item-check">
              <CheckIcon />
            </span>
          </label>
        </div>
        <div class="info-default__col">
          <label class="content-form__item-label content-form__item-wrap">
            <span class="auth-free__category-title">
              {{ $t('direct') }}
            </span>
            <input type="checkbox">
            <span class="content-form__item-check">
              <CheckIcon />
            </span>
          </label>
        </div>
        <div class="info-default__col">
          <label class="content-form__item-label content-form__item-wrap">
            <span class="auth-free__category-title">
              {{ $t('nav.partners') }}
            </span>
            <input type="checkbox">
            <span class="content-form__item-check">
              <CheckIcon />
            </span>
          </label>
        </div>
      </div>
    </div>
    <div class="estate-info__item">
      <div class="default-title">
        {{ $t('advantages') }}
      </div>
      <div
        class="info-default info-default_description"
      >
        <label for="estate-description" class="info-default__label">
          {{ $t('description') }}
        </label>
        <textarea
          id="estate-description"
          placeholder="Description"
          class="info-default__value no-focus estate-description"
        >
          {{ $t('estate_description') }}
        </textarea>
      </div>
    </div>
    <EstateRental />
    <EstateTransactionCost />
    <EstateData />
    <div class="estate-info__btns">
      <nuxt-link to="/" class = "btn-default"> {{ $t('skip_now') }} </nuxt-link>
      <nuxt-link to="real-estate-media-files"  class="btn-default black"> {{ $t('next_step') }} </nuxt-link>
    </div>
  </form>
</template>

<script>
import CheckIcon from '~/components/icons/common/check'
import Counter from '~/components/property/counter'
import SelectItem from '~/components/select/selectItem'
import MeasurementsSelects from '~/components/property/real-estate-measurements-selects'
import EstateRental from '~/components/property/real-estate-rental'
import EstateTransactionCost from '~/components/property/real-estate-transaction-cost'
import EstateData  from '~/components/property/real-estate-data'

export default {
  name: 'real-estate-details',

  components: {
    CheckIcon,
    Counter,
    SelectItem,
    MeasurementsSelects,
    EstateRental,
    EstateTransactionCost,
    EstateData
  },

  data() {
    return {
      optionsCommission: [
        { id: 1, name: 'Fixed price', value: 'fixed-price', chosen: true },
        { id: 2, name: 'item2', value: 'item2', chosen: false },
      ],
      optionsCurrency: [
        { id: 1, name: 'EUR', value: 'eur', chosen: true },
        { id: 2, name: 'USD', value: 'usd', chosen: false },
      ]
    }
  },

  methods: {
    selectedOption(value) {
    }
  }
}
</script>

<style lang="scss" scoped>
  .info-default__items {
    display: flex;
    overflow: visible;
    max-width: 493px;
    .info-default__item:nth-child(2) {
      padding: 0 0 0 20px;
      border-left: 1px solid $thirdlyGray;
    }
  }
  .info-default_description {
    height: 185px;
    overflow: hidden;
  }
  .info-default__col {
    &.price {
      width: auto;
      max-width: 327px;
    }
    &.partners {
      width: auto;
      max-width: 370px;
      margin-bottom: 30px;
      .select-wrap {
        min-width: 140px;
      }
    }
  }
  .content-form__item-wrap {
    width: auto;
  }
  .estate-info__item-inner.price {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
  }
  .default-title {
    margin-bottom: 30px;
  }
  .content-form__items.flex {
    justify-content: space-between;
    &.flex-4 {
      .info-default__col {
        width: 25%;
      }
    }
  }
  .content-form__item-wrap {
    background: $baseWhite;
    border: 0;
  }
  .estate-info {
    padding: 105px 0 0 61px;
  }
  .content-form__items {
    flex-wrap: wrap;
    &.flex {
      margin: 0 -10px;
    }
  }
  .estate-description {
    height: 150px;
    overflow: auto;
  }
  .estate-description {
    font-weight: normal;
    font-size: 14px;
    line-height: 180%;
  }
</style>
