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

<script>
import ContentBlock from "@/components/ContentBlock";
import Footer from "@/components/Footer";
import {mapGetters} from "vuex";

export default {
  name: 'App',

  components: {
    ContentBlock,
    Footer
  },

  data: () => ({}),

  computed: {
    ...mapGetters(['preloadIsOpen']),
  },

  beforeMount() {
    this.$store.commit('setPreloadIsOpen', true);

    this.$store.dispatch('getUsers')
      .then(res => {
        this.$store.commit({
          type: 'setUsers',
          users: res,
        });
        this.$store.commit('setPreloadIsOpen', false);
      })
  },
}
</script>
