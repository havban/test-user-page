<template>
  <div id="app">
    <SidebarNav class="app_sidebar" v-if="isNotLoginPage"/>
    <div class="app_content">
      <router-view/>
    </div>
  </div>
</template>

<script>
const SidebarNav = () => import('@/components/SidebarNav')

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
