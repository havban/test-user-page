<template>
  <div>
    <div class="container">
      <div v-show="visiblePreview" class=user-card__preview>
        <div>
          Email Icon
        </div>
        <div class="user-card__preview__name">
          {{user.name}}
        </div>
        <div>
          {{user.address.city}}
        </div>
      </div>
      <div class="user-card"
      @click=showDetail
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
      visiblePreview: false
    }
  },
  methods: {
    showDetail () {
      this.visibleDetail = true
    },
    showPreview () {
      this.visiblePreview = true
    },
    hidePreview () {
      this.visiblePreview = false
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
  &:hover {
    -webkit-filter: brightness(.5);
    filter: brightness(.5);
  }

  &__thumbnail {
    border-radius: 10px;
    width: 200px;
    height: 300px;
    object-fit: cover;
  }

  &__preview {
    position: absolute;
    top: 100px;
    left: 50%;
    transform: translate(-50%, 0);
    color: white;
    z-index: 1;

    &__name {
      font-weight: bold;
    }
  }
}
</style>
