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
  name: "StatsPokemon",
  props: {
    stat: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.stats-pokemon {
  width: 100%;
  padding: 10px;
  color: #9E9E9E;

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
