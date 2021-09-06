<template>
  <div class="header-pokemon">
    <h1 class="header-pokemon__title"><strong>POKÉMON</strong></h1>
  </div>
</template>

<script>
export default {
  name: "HeaderPokemon",
};
</script>

<style lang="scss">
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
    text-align: left;
    color: yellow;
  }
}
</style>
