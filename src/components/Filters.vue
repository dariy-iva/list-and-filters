<template>
  <v-select
    v-model="selectedFilterByCountry"
    :name="filterItems.country.label"
    :items="filterItems.country.options"
    clearable
    :label="`Filter by ${filterItems.country.label}`"
    bg-color="initial"
  ></v-select>
  <v-select
    v-model="selectedFilterByScore"
    :name="filterItems.score.label"
    :items="filterItems.score.options"
    clearable
    :label="`Filter by ${filterItems.score.label}`"
    bg-color="initial"
  >
  </v-select>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "Filters",
  data: () => ({
    filterItems: {
      country: {
        label: 'country',
        options: [
          {title: 'Russia', value: 'russia'},
          {title: 'Usa', value: 'usa'},
        ],
      },
      score: {
        label: 'score',
        options: [
          {title: '< 10', value: {from: 0, to: 9}},
          {title: '10 ≤ and ≥ 20', value: {from: 10, to: 20}},
          {title: '> 20', value: {from: 21, to: Infinity}},
        ]
      }
    },
  }),

  computed: {
    ...mapGetters(['filterByCountry', 'filterByScore']),

    selectedFilterByCountry: {
      get() {
        return this.filterByCountry;
      },
      set(value) {
        this.$store.commit({type: 'setFilterByCountry', country: value});
      }
    },

    selectedFilterByScore: {
      get() {
        return this.filterByScore;
      },
      set(value) {
        this.$store.commit({type: 'setFilterByScore', score: value});
      }
    },
  },
}
</script>

<style scoped>

</style>