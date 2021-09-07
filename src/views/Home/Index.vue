<template>
  <div>
    <!-- the v-if directive show the big div just when the api responds -->
    <div v-if="thereIsData" class="homepage-pokemon">
      <!-- when a button inside the paginator is clicked, it sends an emit and create an event called 'paginateHandler' -->
      <Paginator
        @paginate="paginateHandler"
        class="homepage-pokemon__paginator"
      />
      <div class="homepage-pokemon__characters-content">
        <!-- we need to create a character component for every character in the list and pass the info of the character to the children -->
        <Character
          class="homepage-pokemon__character"
          v-for="character in charactersList"
          :key="character.data.id"
          :character="character.data"
        />
      </div>
      <!-- when a button inside the paginator is clicked, it sends an emit and create an event called 'paginateHandler' -->
      <Paginator
        @paginate="paginateHandler"
        class="homepage-pokemon__paginator"
      />
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
import Character from "./Character.vue";
import Paginator from "./Paginator.vue";

export default {
  // the name is always necessary for navigate in the console-vue
  name: "HomepagePokemon",
  components: {
    Loading,
    Character,
    Paginator,
  },
  // in data we store all the component variables
  data() {
    return {
      charactersList: null,
      thereIsData: false,
    };
  },
  // the created function is a life cicle in vue
  async created() {
    // we need to get the page from the params of the route
    let page = this.$route.params.page;
    if (page) {
      // we need to be sure that the project has only 5 pages and that they are numbers
      if (page == 1 || page == 2 || page == 3 || page == 4 || page == 5) {
        await this.getCharacters(page);
      } else {
        // if the page is different from that numbers or mayme another data type, will be redirect to not found page
        this.$router.push({ name: "NotFound" });
      }
    } else {
      // when the homepage is created and in the route doesn't exist the page param, take to the user to the first page
      await this.getCharacters(1);
    }
    // when the api response, the app show the content
    this.thereIsData = true;
  },
  methods: {
    async getCharacters(i) {
      await this.setRoute(i);
      //we create the query parameters for the api call
      let payload = {
        limit: 10,
        offset: i * 10,
      };
      // we go to thge vuex and make the api call
      let characters = await this.$store.dispatch(
        "characters/getCharacters",
        payload
      );
      //we create an array full of promises so the app can make all together and make the api calls faster
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
          // when all the pomises are done, we store the response in a variable of the data
          this.charactersList = values;
        })
        .catch((error) => {
          error;
        });
    },
    paginateHandler(event) {
      // when a button in the paginator is clicked, this function will be called
      this.getCharacters(event);
    },
    setRoute(page) {
      // this is the method to redirect to the homepage
      // 'NavigationDuplicated' is a very common error in vue router so we need to catch it just in case
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
// We must set the property "lang='scss'" so that the component knows that we are using sass.
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
