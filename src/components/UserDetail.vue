<template>
  <div class="user-detail" @click=close>
    <div class="user-detail__content" @click="e => e.stopPropagation()">
      <div class="user-detail__thumbnail">
        <img :src="user.image" class="user-detail__thumbnail__img"/>
      </div>
      <div class="user-detail__text">
        <div class="user-detail__header" @click=close>
          <img src="~@/assets/img/close-icon.png" class="user-detail__header__close" />
        </div>
        <div class="user-detail__name">
          <img src="~@/assets/img/user-icon.png" class="user-detail__icon"/>
          {{user.name}}
        </div>
        <div class="user-detail__email" @click="sendEmail($event)">
          <img src="~@/assets/img/mail-icon.png" class="user-detail__icon"/>
          {{user.email}}
        </div>
        <div>
          <img src="~@/assets/img/phone-icon.png" class="user-detail__icon"/>
          {{user.phone}}
        </div>
        <div>
          <img src="~@/assets/img/home-icon.png" class="user-detail__icon"/>
          {{user.address.city}}, {{user.address.street}}
        </div>
        <div class="user-detail__web" @click="goToWeb($event)">
          <img src="~@/assets/img/web-icon.png" class="user-detail__icon"/>
          {{user.website}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['user'],
  methods: {
    close () {
      this.$emit('close')
    },
    sendEmail (e) {
      e.stopPropagation()
      location.href = 'mailto:' + this.user.email
    },
    goToWeb () {
      window.open('http://' + this.user.website, '_blank')
    }
  }
}
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: inherit;
  margin-left: 5px;
}
.user-detail {
  position:absolute;
  z-index:9;
  top:0;
  right:0;
  bottom:0;
  left:0;
  background:rgba(0, 0, 0, 0.53);
  width:100%;
  height:100%;

  &__content {
    background-color: #fefefe;
    margin: 10% auto;
    border: 1px solid #888;
    border-radius: 5px;
    width: 600px;

    display: grid;
    grid-template-areas:
      'header header'
      'thumbnail content';
  }

  &__thumbnail {
    width: 200px;
    height: 300px;
    grid-area: "thumbnail";

    &__img {
      width: 200px;
      height: 300px;
      object-fit: cover;
    }
  }

  &__header {
    cursor: pointer;
    position: relative;

    &__close {
      position: absolute;
      width: 40px;
      top: -40px;
      right: 0px;
    }
  }

  &__text {
    text-align: left;
    grid-area: "content";
    margin-top: 40px;
    margin-left: -30px;
    font-weight: bold;
  }

  &__icon {
    width: 30px;
    vertical-align: middle;
    padding: 5px;
  }

  &__email {
    cursor: pointer;
  }

  &__web {
    cursor: pointer;
  }
}
</style>
