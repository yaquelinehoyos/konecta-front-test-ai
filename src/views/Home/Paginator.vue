<template>
  <div class="paginator-pokemon">
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
  name: "PaginatorPokemon",
  data() {
    return {
      numberOfButtons: 5,
    };
  },
  methods: {
    paginate(i) {
      this.$emit("paginate", i);
    },
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
