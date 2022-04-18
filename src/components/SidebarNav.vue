<template>
  <div class="sidebar-nav">
    <CompanyLogo/>
    <div v-for="i in 3" :key="i">
      <MenuItem/>
    </div>
    <div @click=doLogout
      class="sidebar-nav__logout">
      <img src="~@/assets/img/logout.png" class="sidebar-nav__logout__icon" />
      {{username}}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sidebar-nav {
  position: relative;
  max-height: 100vh;

  &__logout {
    position: absolute;
    font-weight: bold;
    cursor: pointer;
    margin: 30px;
    bottom: 0px;

    &__icon {
      transform: rotate(180deg);
      width: 20px;
      vertical-align: middle;
    }
  }
}
</style>

<script>
import MenuItem from '@/components/MenuItem'
import CompanyLogo from '@/components/CompanyLogo'
import { writeSession, getSession } from '@/utils/session'

export default {
  data () {
    return {
      username: ''
    }
  },
  components: {
    MenuItem,
    CompanyLogo
  },
  mounted () {
    this.readSession()
  },
  methods: {
    doLogout () {
      writeSession()
      this.$router.replace({ name: 'Login' })
    },
    readSession () {
      const cred = getSession()
      this.username = cred.username
    }
  }
}
</script>
