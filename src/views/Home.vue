<template>
  <div></div>
</template>

<script>
import { validateSession } from '@/utils/session'

export default {
  name: 'Home',
  mounted () {
    validateSession(this)
  }
}
</script>
