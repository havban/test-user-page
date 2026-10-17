<template>
  <!-- Rendered as a fragment directly inside <div id="app"> (index.html),
       so the #app grid styles below apply exactly as in the Vue 2 version. -->
  <SidebarNav class="app_sidebar" v-if="isNotLoginPage"/>
  <div class="app_content">
    <router-view/>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

const SidebarNav = defineAsyncComponent(() => import('@/components/SidebarNav.vue'))

export default {
  components: {
    SidebarNav
  },
  computed: {
    isNotLoginPage () {
      return this.$route.name !== 'Login'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // layout
  display: grid;
  grid-template-areas:
    'menu main'
    'footer footer';
  gap: 10px;

  .app {
    &_sidebar {
      grid-area: "menu";
      width: 15vw;
      padding-right: 40px;
    }
    &_content {
      grid-area: "main";
      max-height: 100hv;
    }

    &_logout {
      grid-area: "footer";
    }
  }
}
</style>
