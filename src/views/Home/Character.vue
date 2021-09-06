<template>
  <div class="character-pokemon">
    <img class="character-pokemon__img" src="@/assets/images/logo.png" />
    <div class="character-pokemon__info">
      <h3><strong>CHARACTER NAME</strong></h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CharacterPokemon",
};
</script>

<style lang="scss">
.character-pokemon {
  width: 600px;
  height: 220px;
  display: flex;
  flex-direction: row;
  text-align: left;
  background: rgb(60, 62, 68);
  border-radius: 0.5rem;
  margin: 0.75rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.6) 0px 2px 4px -1px;

  &__info {
    padding: 20px 10px;
  }
}
</style>
