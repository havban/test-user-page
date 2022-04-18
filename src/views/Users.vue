<template>
  <div class="user-page">
    <div class="user-page_title">
      Users
    </div>
    <div class="user-page__list">
      <div class="user-page__list__item"
        v-for="user in users"
        :key="user.id">
        <UserCard
          :user="user"
          />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.user-page {
  width: 80vw;
  &__list {
    display: flex;
    flex-wrap: wrap;

    &__item {
      margin: 30px;
    }
  }

  &_title {
    font-weight: bold;
    text-align: right;
    margin-right: 150px;
    border-bottom: 2px solid;
  }
}
</style>

<script>
import { validateSession } from '@/utils/session'
import UserCard from '@/components/UserCard'

export default {
  data () {
    return {
      users: []
    }
  },
  components: {
    UserCard
  },
  mounted () {
    const isLoggedIn = validateSession(this)
    if (!isLoggedIn) return
    this.fetchData()
  },
  methods: {
    fetchData () {
      fetch('https://mock.follow.it/profiles.json')
        .then(res => res.json())
        .then(res => {
          this.users = res
        })
    }
  }
}
</script>
