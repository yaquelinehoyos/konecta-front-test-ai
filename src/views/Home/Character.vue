<template>
  <div class="character-pokemon">
    <img class="character-pokemon__img" :src="`https://assets.pokemon.com/assets/cms2/img/pokedex/full//${imageId}.png`" />
    <div class="character-pokemon__info">
      <h3><strong>{{ character.name.toUpperCase() }}</strong></h3>
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
  props: {
      character: {
          type: Object,
          required: true
      }
  },
  data() {
      return {
          imageId: null
      }
  },
  created() {
      if(this.character.id.toString().length == 1) {
          this.imageId = "00" + this.character.id
      } else if (this.character.id.toString().length == 2) {
          this.imageId = "0" + this.character.id
      } else {
          this.imageId = this.character.id
      }
  }
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
  margin: 0.7rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.6) 0px 2px 4px -1px;

  &__info {
    padding: 20px 10px;
  }
}
</style>
