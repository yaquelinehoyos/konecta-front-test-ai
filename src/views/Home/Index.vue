<template>
  <div>
    <div v-if="thereIsData" class="homepage-pokemon">
      <Paginator
        @paginate="paginateHandler"
        class="homepage-pokemon__paginator"
      />
      <div class="homepage-pokemon__characters-content">
        <Character
          class="homepage-pokemon__character"
          v-for="character in charactersList"
          :key="character.data.id"
          :character="character.data"
        />
      </div>
      <Paginator
        @paginate="paginateHandler"
        class="homepage-pokemon__paginator"
      />
    </div>
    <div v-else>
      <Loading />
    </div>
  </div>
</template>

<script>
import Loading from "@/components/Loading";
import Character from "./Character.vue";
import Paginator from "./Paginator.vue";

export default {
  name: "HomepagePokemon",
  components: {
    Loading,
    Character,
    Paginator,
  },
  data() {
    return {
      charactersList: null,
      thereIsData: false,
    };
  },
  async created() {
    if (this.$route.params.page) {
      await this.getCharacters(this.$route.params.page);
    } else {
      await this.getCharacters(1);
    }
    this.thereIsData = true;
  },
  methods: {
    async getCharacters(i) {
      await this.setRoute(i);
      let payload = {
        limit: 10,
        offset: i * 10,
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
    paginateHandler(event) {
      this.getCharacters(event);
    },
    setRoute(page) {
      this.$router
        .push({ name: "Home", params: { page: page } })
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
.homepage-pokemon {
  padding: 50px 20px;

  &__characters-content {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
  }

  &__character {
    justify-self: center;
    cursor: pointer;
  }

  &__paginator {
    margin: 50px 0px;
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
