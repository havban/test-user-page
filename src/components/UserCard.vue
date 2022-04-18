<template>
  <div>
    <div class="container">
      <div v-if="visiblePreview"
        class="user-card__preview user-card__preview-mask"
        @click=showDetail>
        &nbsp;
      </div>
      <div v-if="visiblePreview"
        @mouseover="showPreview"
        @mouseleave="hidePreview"
        @click=showDetail
        class="user-card__preview user-card__preview-area">
        <div class="user-card__email" @click="sendEmail($event)">
          <img src="~@/assets/img/email-white.png" class="user-card__email__icon"/>
        </div>
        <div class="user-card__preview__name">
          {{user.name}}
        </div>
        <div class="user-card__preview__address">
          {{user.address.city}}
        </div>
      </div>
      <div class="user-card"
      @mouseover="showPreview"
      @mouseleave="hidePreview">
        <img :src="user.image" class="user-card__thumbnail"/>
      </div>
    </div>
    <UserDetail v-if="visibleDetail"
      @close="visibleDetail = false"
      :user="user"/>
  </div>
</template>
<script>
const UserDetail = () => import('@/components/UserDetail')

export default {
  props: ['user'],
  components: {
    UserDetail
  },
  data () {
    return {
      visibleDetail: false,
      visiblePreview: false,
      previewTimestamp: 0
    }
  },
  methods: {
    showDetail () {
      this.visibleDetail = true
    },
    showPreview () {
      this.previewTimestamp = Date.now()
      this.visiblePreview = true
    },
    hidePreview () {
      const currentTimestamp = this.previewTimestamp
      setTimeout(() => {
        if (currentTimestamp !== this.previewTimestamp) return

        this.visiblePreview = false
      }, 100)
    },
    sendEmail (e) {
      e.stopPropagation()
      location.href = 'mailto:' + this.user.email
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  position: relative;
}
.user-card{
  border-radius: 10px;
  box-shadow: 5px 5px 5px 2px;
  width: 200px;
  height: 300px;
  cursor: pointer;

  &__thumbnail {
    border-radius: 10px;
    width: 200px;
    height: 300px;
    object-fit: cover;
  }

  &__preview {
    width: 100%;
    height: 100%;
    cursor: pointer;
    position: absolute;
    left: 100px;
    transform: translate(-50%, 0);
    color: white;
    z-index: 2;

    &-area {
      top: 120px;
    }

    &-mask {
      background: black;
      opacity: 0.5;
      z-index: 1;
    }

    &__name {
      opacity: 1;
      font-weight: bold;
    }
    &__address {
      opacity: 1;
    }
  }

  &__email {
    cursor: pointer;
    &__icon {
      width: 40px;
      position: absolute;
      top: -100px;
      left: 140px;
    }
  }
}
</style>
