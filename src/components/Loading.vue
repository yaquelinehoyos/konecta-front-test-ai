<template>
  <div class="loading-pokemon">
    <img src="@/assets/images/spinner.gif" width="100px" height="100px" />
  </div>
</template>

<script>
export default {
  name: "LoadingPokemon",
};
</script>

<style lang="scss">
.loading-pokemon {
  width: 100%;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
