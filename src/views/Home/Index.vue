<template>
  <div class="homepage-pokemon">
    <h1>POKEMON DESTACADOS</h1>
    <Character class="homepage-pokemon__character" />
  </div>
</template>

<script>
import Character from "./Character.vue";

export default {
  name: "HomepagePokemon",
  components: {
    Character,
  },
};
</script>

<style lang="scss">
.homepage-pokemon {
  padding: 50px 30px;
}
</style>
