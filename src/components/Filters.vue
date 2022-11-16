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

<script setup>
import {ref, computed} from 'vue';
import {useStore} from 'vuex';

const store = useStore();

const filterItems = ref({
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
});

const selectedFilterByCountry = computed({
  get: () => store.getters.filterByCountry,
  set: (value) => store.commit({type: 'setFilterByCountry', country: value})
});

const selectedFilterByScore = computed({
  get: () => store.getters.filterByScore,
  set: (value) => store.commit({type: 'setFilterByScore', score: value})
});
</script>