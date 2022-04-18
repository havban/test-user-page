<template>
  <div>
    <div>
      #logo here
    </div>
    <div v-for="i in 3" :key="i">
      <MenuItem/>
    </div>
    <button @click=doLogout
      class="app_logout">Logout</button>
  </div>
</template>

<script>
import MenuItem from '@/components/MenuItem'
import { writeSession } from '@/utils/session'

export default {
  components: {
    MenuItem
  },
  methods: {
    doLogout () {
      writeSession()
      this.$router.replace({ name: 'Login' })
    }
  }
}
</script>
