<template>
  <div class="login-page">
    <div>
        SIGN IN TO YOUR ACCOUNT
    </div>
    <div>
      <input v-model="credential.username"/>
    </div>
    <div>
      <input v-model="credential.password" type="password" @keydown.enter="doLogin"/>
    </div>
    <div>
      <button @click="doLogin">SIGN IN</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login-page {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, 0);
}
</style>

<script>
import { writeSession, validateSession } from '@/utils/session'

const CREDENTIAL = {
  username: 'admin',
  password: '1234'
}

export default {
  data () {
    return {
      credential: {
        username: '',
        password: ''
      }
    }
  },
  mounted () {
    validateSession(this)
  },
  computed: {
    validCredStr () {
      return JSON.stringify(CREDENTIAL)
    }
  },
  methods: {
    doLogin () {
      const isValid = this.validCredStr === JSON.stringify(this.credential)
      if (!isValid) {
        alert('Your credential do not match')
        return
      }
      writeSession(this.credential)
      this.$router.replace('/users')
    }
  }
}
</script>
