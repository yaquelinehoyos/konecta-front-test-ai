<template>
  <div class="header-pokemon">
    <!-- the v-if directive is for show the title just in the pages that are not the homepage -->
    <h1
      v-if="$route.name != 'Home'"
      class="header-pokemon__title"
      @click="goHomepage"
    >
      <strong>Go to Homepage</strong>
    </h1>
  </div>
</template>

<script>
export default {
  // the name is always necessary for navigate in the console-vue
  name: "HeaderPokemon",
  methods: {
    // this is the method to redirect to the homepage
    // 'NavigationDuplicated' is a very common error in vue router so we need to catch it just in case
    goHomepage() {
      this.$router.push({ name: "Home", params: { page: 1 } }).catch((err) => {
        if (
          err.name !== "NavigationDuplicated" &&
          !err.message.includes(
            "Avoided redundant navigation to current location"
          )
        ) {
          // logError(err);
        }
      });
    },
  },
};
</script>

<style lang="scss">
// We must set the property "lang='scss'" so that the component knows that we are using sass.
.header-pokemon {
  min-height: 30vh;
  background-image: url("../assets/images/header-img.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  box-shadow: inset 0 0 0 1000px rgba($color-dark-gray, 0.6);

  &__title {
    margin: 0px;
    padding: 20px;
    font-size: 50px;
    text-align: right;
    color: yellow;
    cursor: pointer;
  }
}
</style>
