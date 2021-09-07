<template>
  <div
    v-if="thereIsData"
    class="character-pokemon"
    @click="goToCharacter(character.name)"
  >
    <img
      class="character-pokemon__img"
      :src="`https://assets.pokemon.com/assets/cms2/img/pokedex/full//${imageId}.png`"
    />
    <div class="character-pokemon__info">
      <h3>
        <strong>{{ character.name.toUpperCase() }}</strong>
      </h3>

      <!-- the v-for directive: for every charcater stat, it is going to create a new componente "stats" -->
      <Stats
        v-for="(stat, index) in character.stats"
        :key="index"
        :stat="stat"
      />
    </div>
  </div>
</template>

<script>
// we nee to import every component that we are going to use
import Stats from "@/components/Stats.vue";

export default {
  // the name is always necessary for navigate in the console-vue
  name: "CharacterPokemon",
  // properties are the inheritance of the parent components
  props: {
    character: {
      type: Object,
      required: true,
    },
  },
  components: {
    Stats,
  },
  // in data we store all the component variables
  data() {
    return {
      imageId: null,
      thereIsData: false,
    };
  },
  // the created function is a life cicle in vue
  async created() {
    // to get the image we need to concatenate the zeros
    if (this.character.id.toString().length == 1) {
      this.imageId = "00" + this.character.id;
    } else if (this.character.id.toString().length == 2) {
      this.imageId = "0" + this.character.id;
    } else {
      this.imageId = this.character.id;
    }
    this.thereIsData = true;
  },
  methods: {
    // this is the method to redirect to the character view and we pass the name param
    // 'NavigationDuplicated' is a very common error in vue router so we need to catch it just in case
    goToCharacter(name) {
      this.$router
        .push({ name: "Character", params: { name: name } })
        .catch((err) => {
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
.character-pokemon {
  width: 600px;
  height: auto;
  //we are using the card mixin
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
