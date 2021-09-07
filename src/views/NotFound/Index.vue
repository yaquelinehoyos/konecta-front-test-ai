<template>
  <div class="not-found-pokemon">
    <h1>NOT FOUND PAGE</h1>
  </div>
</template>

<script>
export default {
  // the name is always necessary for navigate in the console-vue
  name: "NotFoundPokemon",
};
</script>

<style lang="scss">
// We must set the property "lang='scss'" so that the component knows that we are using sass.
.not-found-pokemon {
  min-height: 70vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
