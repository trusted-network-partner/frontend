<template>
  <form class="estate-info">
    <div class="default-title">
      {{ $t('documents') }}
    </div>
    <div class="estate-info__descr">
      <p>
        {{ $t('documents_descr') }}
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
            {{ $t('drag_files_hint') }}
            <label class="estate-info__drop-label">
              <input
                type="file"
                name="photos-file[]"
                accept=".xlsx,.xls,image/*,.doc, .docx,.ppt, .pptx,.txt,.pdf"
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
          <span class="estate-info_drop-hint-item">{{ $t('not_supported_type') }}</span>
          <div>Supported files .docx, .doc, .pdf, .xlx, .xlsx, .txt, .ppt</div>
        </div>
      </div>
    </div>
    <div
      v-if="filesItems.length"
      class="estate-info__section-wrap"
    >
      <div class="estate-info__section-items">
        <div
          v-for="(file, index) in filesItems"
          :key="index"
          class="estate-info__section-item"
        >
          <div class="estate-info__section-item-inner">
            <span
              class="delete"
              @click="deleteItem(index)"
            >
              <CloseIcon />
            </span>
            <div class="post__file">
              <div class="post__file-info">
                <div class="post__file-icon">
                  <FilesIcon />
                </div>
                <div class="post__file-details">
                  <div class="post__file-title">
                    {{ file.name }}
                  </div>
                  <div class="post__file-spec">
                    <span>
                       {{ getType(file.type) }}
                    </span>
                    {{ $t('file') }},  {{ convertBytes(file.size) }}kb
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="estate-info__btns">
      <nuxt-link to="/" class = "btn-default"> {{ $t('skip_now') }} </nuxt-link>
      <nuxt-link to="/" class="btn-default black"> {{ $t('next_step') }} </nuxt-link>
    </div>
  </form>
</template>

<script>
import CloseIcon from '~/components/icons/common/close'
import FilesIcon from '~/components/icons/posts/files'
export default {
  name: 'real-estate-documentation',

  components: {
    CloseIcon,
    FilesIcon
  },

  data() {
    return {
      filesItems: [],
      isDraggedOver: false,
      isNotSupportedType: false,
      notSupported: []
    }
  },

  methods: {
    convertBytes(value) {
      return (value * 0.1).toFixed(0)
    },
    getType(type) {
      if(type === 'text/plain') {
        return 'txt'
      }
      if(type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
        return 'docx'
      }
      if(type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
        return type = 'xlsx'
      }
      if(type === 'application/pdf') {
        return type = 'pdf'
      }
      return type
    },
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
          const validFileTypes = ['application/msword', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', ' application/vnd.ms-excel', 'application/vnd.ms-powerpoint', 'text/plain', 'application/pdf']
          const reader = new FileReader()
          reader.onload = e => {
            if (validFileTypes.includes(fileType)) {
              this.filesItems.push(file)
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
    deleteItem(indexItem) {
      if(this.filesItems) {
        this.filesItems.map((item, index) => {
          if(indexItem === index) {
            this.filesItems.splice(index, 1)
            this.isNotSupportedType = false
            this.notSupported = []
          }
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .estate-info__btns {
    margin-top: 15px;
  }
  .estate-info__section-items {
    margin: 0 -5px;
  }
  .estate-info__section-item {
    width: 50%;
    padding: 0 5px;
    height: auto;
    margin-bottom: 10px;
    &-inner {
      height: auto;
    }
  }
  .post__file-info {
    width: 100%;
    background: #FFFFFF;
  }
  .post__file-spec span {
    text-transform: uppercase;
  }
</style>
