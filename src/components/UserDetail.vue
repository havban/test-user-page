<template>
  <div class="user-detail" @click=close>
    <div class="user-detail__content" @click="e => e.stopPropagation()">
      <div class="user-detail__header">&nbsp;</div>
      <div class="user-detail__header" @click=close>
        Close Icon
      </div>
      <div class="user-detail__thumbnail">
        <img :src="user.image" class="user-detail__thumbnail__img"/>
      </div>
      <div class="user-detail__text">
        <div class="user-card__preview__name">
          {{user.name}}
        </div>
        <div>
          {{user.email}}
        </div>
        <div>
          {{user.phone}}
        </div>
        <div>
          {{user.address.city}}, {{user.address.street}}
        </div>
        <div>
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
    }
  }
}
</script>

<style lang="scss" scoped>
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
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 500px;

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
    grid-area: "header";
    cursor: pointer;
  }

  &__text {
    text-align: left;
    grid-area: "content";
  }
}
</style>
