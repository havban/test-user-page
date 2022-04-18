<template>
  <div class="login-page">
    <CompanyLogo/>
    <div class="login-page__title">
        SIGN IN TO YOUR ACCOUNT
    </div>
    <div>
      <input v-model="credential.username"
        class="input"/>
    </div>
    <div>
      <input v-model="credential.password"
        class="input"
        type="password"
        @keydown.enter="doLogin"/>
    </div>
    <div>
      <button @click="doLogin" class="login-page__button button">SIGN IN</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login-page {
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, 0);
  min-width: 250px;

  &__title {
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 20px;
  }

  &__button {
    font-weight: bold;
    font-size: smaller;
    margin-top: 30px;
    width: 100%;
  }
}
</style>

<script>
import { writeSession, validateSession } from '@/utils/session'
import CompanyLogo from '@/components/CompanyLogo'

const CREDENTIAL = {
  username: 'admin',
  password: '1234'
}

export default {
  components: {
    CompanyLogo
  },
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
