<template>
  <div class="homepage-pokemon">
    <h1 class="homepage-pokemon__title">DESTACADOS</h1>
    <div class="homepage-pokemon__characters-content">
      <Character
        class="homepage-pokemon__character"
        v-for="character in charactersList"
        :key="character.data.id"
        :character="character.data"
      />
    </div>
  </div>
</template>

<script>
import Character from "./Character.vue";

export default {
  name: "HomepagePokemon",
  components: {
    Character,
  },
  data() {
    return {
      charactersList: null,
    };
  },
  async created() {
    let payload = {
      limit: 10,
    };
    let characters = await this.$store.dispatch(
      "characters/getCharacters",
      payload
    );
    let promisesCharacter = [];
    for (let item of characters) {
      promisesCharacter.push(
        this.$store.dispatch("characters/getSingleCharacter", item.name)
      );
    }
    let allPromise = Promise.all(promisesCharacter);
    allPromise
      .then((values) => {
        values;
        this.charactersList = values;
      })
      .catch((error) => {
        error;
      });
  },
};
</script>

<style lang="scss">
.homepage-pokemon {
  padding: 50px 20px;

  &__title {
    margin-bottom: 50px;
  }

  &__characters-content {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
  }

  &__character {
    justify-self: center;
  }
}

@media (max-width: 2000px) {
  .homepage-pokemon {
    &__characters-content {
      grid-template-columns: repeat(2, 1fr) !important;
    }
  }
}

@media (max-width: 1300px) {
  .homepage-pokemon {
    &__characters-content {
      grid-template-columns: repeat(1, 1fr) !important;
    }
  }
}
</style>
