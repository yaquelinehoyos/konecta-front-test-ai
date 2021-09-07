<template>
  <div class="loading-pokemon">
    <!-- for UX is a good practice show some spinner so the user know that something is happend -->
    <img src="@/assets/images/spinner.gif" width="100px" height="100px" />
  </div>
</template>

<script>
export default {
  // the name is always necessary for navigate in the console-vue
  name: "LoadingPokemon",
};
</script>

<style lang="scss">
// We must set the property "lang='scss'" so that the component knows that we are using sass.
.loading-pokemon {
  width: 100%;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
