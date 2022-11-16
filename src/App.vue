<template>
  <v-app class="d-flex">
    <v-main class="d-flex flex-grow-1">
      <v-container class="d-flex justify-center flex-column">
        <v-progress-circular
          v-if="preloadIsOpen"
          color="primary"
          indeterminate
          :size="75"
          :width="12"
          class="align-self-center"
        ></v-progress-circular>

        <ContentBlock v-else/>
      </v-container>
    </v-main>

    <v-footer
      class="flex-grow-0"
    >
      <Footer/>
    </v-footer>
  </v-app>
</template>

<script setup>
import {computed, onBeforeMount} from "vue";
import {useStore} from 'vuex'
import ContentBlock from "@/components/ContentBlock";
import Footer from "@/components/Footer";

const store = useStore();

const preloadIsOpen = computed(() => store.getters.preloadIsOpen);

onBeforeMount(() => {
  store.commit('setPreloadIsOpen', true);

  store.dispatch('getUsers')
    .then(res => {
      store.commit({
        type: 'setUsers',
        users: res,
      });
      store.commit('setPreloadIsOpen', false);
    })
})
</script>
