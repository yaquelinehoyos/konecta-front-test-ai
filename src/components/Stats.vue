<template>
  <div class="stats-pokemon">
    <div class="stats-pokemon__name">
      <span
        ><strong>{{ stat.stat.name }}:</strong> {{ stat.base_stat }}</span
      >
    </div>
  </div>
</template>

<script>
export default {
  // the name is always necessary for navigate in the console-vue
  name: "StatsPokemon",
  // properties are the inheritance of the parent components
  props: {
    stat: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
// We must set the property "lang='scss'" so that the component knows that we are using sass.
.stats-pokemon {
  width: 100%;
  padding: 10px;
  color: #9e9e9e;

  &__container {
    display: flex;
    flex-direction: row;
    align-items: center;

    .is-battle-only {
      width: 10px;
      height: 10px;
      border-radius: 50%;
    }

    .is-battle-only-title {
      margin-left: 5px;
    }
  }
}

.active {
  background-color: green;
}

.no-active {
  background-color: gray;
}
</style>
