<template>
  <form class="estate-info">
    <div class="default-title">
      {{ $t('multimedia_content') }}
    </div>
    <div class="estate-info__descr">
      <p>
        {{ $t('multimedia_content_descr') }}
      </p>
    </div>
    <div
      class="estate-info__drop"
      @dragover="dragOver"
      @dragleave="handleDragEvent"
      @dragend="handleDragEvent"
      @drop="dropFiles"
      :class="{'dragged-over': isDraggedOver}"
    >
      <div class="estate-info__drop-inner">
        <div class="estate-info__drop-title">
          {{ $t('drag_files') }}
        </div>
        <div class="estate-info__drop-descr">
          <p>
            {{ $t('click_upload') }}
            <label class="estate-info__drop-label">
              <input
                type="file"
                name="photos-file[]"
                accept="image/*, video/* "
                multiple="multiple"
                class="estate-info__drop-input drop-zone__input"
                ref="input"
                @change="uploadFiles"
              >
              <span
                class="estate-info__drop-btn"
              >
                {{ $t('click_here') }}
              </span>
              <br/>
              <span>{{ $t('upload_descr') }}</span>
            </label>
          </p>
        </div>
      </div>
      <div
        v-if="isNotSupportedType"
        class="estate-info_drop-hint"
      >
        <div>
          <span
            v-for="(file, index) in notSupported"
            :key="index"
            class="estate-info_drop-hint-item"
           >
            {{ file }}
          </span>
          <span
            class="estate-info_drop-hint-item"
          >
          {{ $t('not_supported_type') }}
        </span>
        </div>
        <div>{{ $t('supported_files') }} .img, .gif, .png, .svg / .avi, .mp4, .wmv, .mov, .flv, .webm </div>
      </div>
    </div>
    <div
      v-if="images.length"
      class="estate-info__section-wrap"
    >
      <div class="estate-info__section-title">
        {{ $t('photos') }}
      </div>
      <div class="estate-info__section-items">
        <div
          v-for="(image, index) in images"
          :key="index"
          class="estate-info__section-item"
        >
          <div class="estate-info__section-item-inner">
            <span
              class="delete"
              @click="deleteItem(index, 'images')"
            >
              <CloseIcon />
            </span>
            <img
              :src="image.path"
              alt=""
            >
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="videos.length"
      class="estate-info__section-wrap"
    >
      <div class="estate-info__section-title">
        {{ $t('videos') }}
      </div>
      <div class="estate-info__section-items">
        <div
          v-for="(video, index) in videos"
          :key="index"
          class="estate-info__section-item"
        >
          <div class="estate-info__section-item-inner">
            <video
              controls=""
              loop=""
            >
              <source :src="video.path">
            </video>
            <span
              class="delete"
              @click="deleteItem(index, 'videos')"
            >
              <CloseIcon />
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="estate-info__section-wrap" >
      <div class="estate-info__section-title">
       {{ $t('virtual_tours') }}
      </div>
      <div class="info-default">
        <label for="put-url" class="info-default__label">
          {{ $t('put_url') }}
        </label>
        <input
          id="put-url"
          type="text"
          placeholder="Put your URL"
          class="info-default__value no-focus"
          value="https://music.youtube.com/watch?v=Rn6BQZ9Aby8&list=RDAMVMRn6BQZ9Aby8"
        >
      </div>
    </div>
    <div class="estate-info__btns">
      <nuxt-link to="/" class = "btn-default"> {{ $t('skip_now') }} </nuxt-link>
      <nuxt-link to="real-estate-documentation"  class="btn-default black"> {{ $t('next_step') }} </nuxt-link>
    </div>
  </form>
</template>

<script>
import CloseIcon from '~/components/icons/common/close'
  export default {
    name: 'real-estate-media',

    components: {
      CloseIcon
    },

    data() {
      return {
        images: [],
        videos: [],
        isDraggedOver: false,
        isNotSupportedType: false,
        notSupported: []
      }
    },

    methods: {
      dragOver(e) {
        e.preventDefault()
        this.isDraggedOver = true
      },
      handleDragEvent() {
        this.isDraggedOver = false
      },
      dropFiles(e) {
        e.preventDefault();
        if (e.dataTransfer.files.length) {
          this.$refs.input.files = e.dataTransfer.files;
          this.files(e.dataTransfer.files)
        }
      },
      uploadFiles(e) {
        const files = e.target.files
        this.files(files)
      },
      files(files) {
        if(files) {
          this.isNotSupportedType = false
          this.notSupported = [];
          [].forEach.call(files, file => {
            const fileType = file['type']
            const validImageTypes = ['image/gif', 'image/jpeg', 'image/png', 'image/svg+xml']
            const validVideoTypes = ['video/avi', 'video/wmv', 'video/mp4', 'video/mov', 'video/flv', 'video/webm']
            const reader = new FileReader()
            reader.onload = e => {
              if (validImageTypes.includes(fileType)) {
                const newImage = { path: e.target.result }
                this.images.push(newImage)
              } else if (validVideoTypes.includes(fileType)) {
                const newVideo = { path: e.target.result }
                this.videos.push(newVideo)
              } else {
                this.isNotSupportedType = true
                this.notSupported.push(file.name)
              }
            }
            reader.readAsDataURL(file)
            this.isDraggedOver = false
          })
        }
      },
      deleteItem(indexItem, type) {
        if(type === 'images') {
          this.deleteFromArray(this.images, indexItem)
        }
        if(type === 'videos') {
          this.deleteFromArray(this.videos, indexItem)
        }
      },
      deleteFromArray(arr, indexItem) {
        if(arr) {
          arr.map((item, index) => {
            if(indexItem === index) {
              arr.splice(index, 1)
              this.isNotSupportedType = false
              this.notSupported = []
            }
          })
        }
      }
    }
  }
</script>

<style scoped>
  .estate-info__btns {
    margin-top: 50px;
  }
</style>
