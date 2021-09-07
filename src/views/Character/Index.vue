<template>
  <div>
    <!-- the v-if directive show the big div just when the api responds -->
    <div class="character-view-pokemon" v-if="thereIsData">
      <div class="character-view-pokemon__container">
        <div class="character-view-pokemon__card">
          <img
            class="character-view-pokemon__img"
            :src="`https://assets.pokemon.com/assets/cms2/img/pokedex/full//${imageId}.png`"
          />
          <div class="character-view-pokemon__info">
            <h1>{{ characterInformation.data.name.toUpperCase() }}</h1>

            <!-- the v-for directive: for every charcater stat, it is going to create a new componente "stats" -->
            <Stats
              v-for="(stat, index) in characterInformation.data.stats"
              :key="index"
              :stat="stat"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- in this case, the v-else directive is use to tell the user that the view is charging in case the api response take long -->
    <div v-else>
      <Loading />
    </div>
  </div>
</template>

<script>
// we nee to import every component that we are going to use
import Loading from "@/components/Loading";
import Stats from "@/components/Stats.vue";

export default {
  // the name is always necessary for navigate in the console-vue
  name: "CharacterPokemon",
  components: {
    Loading,
    Stats,
  },
  // in data we store all the component variables
  data() {
    return {
      characterInformation: null,
      imageId: null,
      thereIsData: false,
    };
  },
  // the created function is a life cicle in vue
  async created() {
    let nameCharacter = this.$route.params.name;
    // we get the info about the character
    this.characterInformation = await this.$store.dispatch(
      "characters/getSingleCharacter",
      nameCharacter
    );
    // if the character it's not found, it is going to redirect to the not found page
    if (this.characterInformation.status == 404) {
      this.$router.push({ name: "NotFound" });
    } else {
      // to get the image we need to concatenate the zeros
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
// We must set the property "lang='scss'" so that the component knows that we are using sass.
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
    //we are using the card mixin
    @include character-card;
  }

  &__img {
    &:hover {
      -webkit-animation: spin 4s linear infinite;
      -moz-animation: spin 4s linear infinite;
      animation: spin 4s linear infinite;
    }
  }
}

@-moz-keyframes spin {
  100% {
    -moz-transform: rotate(360deg);
  }
}

@-webkit-keyframes spin {
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
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
