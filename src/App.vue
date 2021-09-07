<template>
  <div id="app">
    <Header class="app-header-pokemon" />
    <!-- in the router-view is where the different pages are displayed -->
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  // the name is always necessary for navigate in the console-vue
  name: "AppPokemon",
  components: {
    Header,
  },
};
</script>

<style lang="scss">
// We must set the property "lang='scss'" so that the component knows that we are using sass.
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $color-light-gray;
  background-color: $color-dark-gray;
}

@media (max-width: 1000px) {
  .app-header-pokemon {
    display: none;
  }
}
</style>
