<template>
  <div>
    <div class="character-view-pokemon" v-if="thereIsData">
      <div class="character-view-pokemon__container">
        <div class="character-view-pokemon__card">
          <img
            class="character-view-pokemon__img"
            :src="`https://assets.pokemon.com/assets/cms2/img/pokedex/full//${imageId}.png`"
          />
          <div class="character-view-pokemon__info">
            <h1>{{ characterInformation.data.name.toUpperCase() }}</h1>
            <Stats
              v-for="(stat, index) in characterInformation.data.stats"
              :key="index"
              :stat="stat"
            />
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <Loading />
    </div>
  </div>
</template>

<script>
import Loading from "@/components/Loading";
import Stats from "@/components/Stats.vue";

export default {
  name: "CharacterPokemon",
  components: {
    Loading,
    Stats,
  },
  data() {
    return {
      characterInformation: null,
      imageId: null,
      thereIsData: false,
    };
  },
  async created() {
    let nameCharacter = this.$route.params.name;
    this.characterInformation = await this.$store.dispatch(
      "characters/getSingleCharacter",
      nameCharacter
    );
    if (this.characterInformation.status == 404) {
      this.$router.push({ name: "NotFound" });
    } else {
      if (this.characterInformation.data.id.toString().length == 1) {
        this.imageId = "00" + this.characterInformation.data.id;
      } else if (this.characterInformation.data.id.toString().length == 2) {
        this.imageId = "0" + this.characterInformation.data.id;
      } else {
        this.imageId = this.characterInformation.data.id;
      }
      this.thereIsData = true;
    }
  },
};
</script>

<style lang="scss">
.character-view-pokemon {
  width: 100%;

  &__container {
    display: flex;
    justify-content: center;
    padding: 50px 0px;
  }

  &__card {
    width: 80%;
    padding: 50px 30px;
    height: auto;
    @include character-card;
  }
}

@media (max-width: 1000px) {
  .character-view-pokemon {

    &__img {
      width: 100%;
      height: auto;
    }

    &__card {
      flex-direction: column !important;
    }
  }
}
</style>
