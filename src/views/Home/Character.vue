<template>
  <div v-if="thereIsData" class="character-pokemon">
    <img
      class="character-pokemon__img"
      :src="`https://assets.pokemon.com/assets/cms2/img/pokedex/full//${imageId}.png`"
    />
    <div class="character-pokemon__info">
      <h3>
        <strong>{{ character.name.toUpperCase() }}</strong>
      </h3>
      <Stats
        v-for="(stat, index) in character.stats"
        :key="index"
        :stat="stat"
      />
    </div>
  </div>
</template>

<script>
import Stats from "./Stats.vue";

export default {
  name: "CharacterPokemon",
  props: {
    character: {
      type: Object,
      required: true,
    },
  },
  components: {
    Stats,
  },
  data() {
    return {
      imageId: null,
      thereIsData: false,
    };
  },
  async created() {
    if (this.character.id.toString().length == 1) {
      this.imageId = "00" + this.character.id;
    } else if (this.character.id.toString().length == 2) {
      this.imageId = "0" + this.character.id;
    } else {
      this.imageId = this.character.id;
    }
    this.thereIsData = true;
  },
};
</script>

<style lang="scss">
.character-pokemon {
  width: 600px;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: left;
  background: rgb(60, 62, 68);
  border-radius: 0.5rem;
  margin: 0.7rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.6) 0px 2px 4px -1px;

  &__img {
    width: 250px;
    height: 250px;
  }

  &__info {
    width: 280px;
    padding: 20px 10px;
  }
}
</style>
