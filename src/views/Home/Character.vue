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
  @include character-card;

  &__img {
    width: 250px;
    height: 250px;
  }

  &__info {
    width: 280px;
    padding: 20px 10px;
  }
}

@media (max-width: 650px) {
    .character-pokemon {
        width: 300px;
        height: auto;
        flex-direction: column;
    }
}
</style>
