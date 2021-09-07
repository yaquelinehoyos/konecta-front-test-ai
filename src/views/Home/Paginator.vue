<template>
  <div class="paginator-pokemon">
    <!-- we create 5 buttons and when one of them is clicked, pass an event to the parent component with the number of the button -->
    <!-- we create a class binding to let know in which page the user is -->
    <button
      class="paginator-pokemon__button"
      v-for="i in numberOfButtons"
      :key="i"
      :class="{ 'active-page': isActive(i) }"
      @click="paginate(i)"
    >
      <strong>{{ i }}</strong>
    </button>
  </div>
</template>

<script>
export default {
  // the name is always necessary for navigate in the console-vue
  name: "PaginatorPokemon",
  // in data we store all the component variables
  data() {
    return {
      numberOfButtons: 5,
    };
  },
  methods: {
    // in this method we let know to the parent that a button was clicked
    paginate(i) {
      this.$emit("paginate", i);
    },
    // this function is to know in what page the user is
    isActive(i) {
      let page = this.$route.params.page;
      if (i == page) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style lang="scss">
// We must set the property "lang='scss'" so that the component knows that we are using sass.
.paginator-pokemon {
  &__button {
    margin: 0px 3px;
    width: 40px;
    height: 40px;
    font-size: 15px;
    cursor: pointer;
    border: none;
    outline: none;
    border-radius: 10px;
    background-color: $color-yellow-pikuchu;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
      rgba(0, 0, 0, 0.6) 0px 2px 4px -1px;

    &:hover {
      background-color: rgba($color-yellow-pikuchu, 0.8);
    }
  }
}

.active-page {
  background-color: rgba($color-yellow-pikuchu, 0.5);
}
</style>
