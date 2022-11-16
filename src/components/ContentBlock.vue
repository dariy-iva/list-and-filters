<template>
  <v-row
    align="center"
    justify="center"
    class="flex-grow-0 ma-4"
  >
    <v-col cols="12">
      <v-img
        :src="require('../assets/logo.svg')"
        class="my-3"
        contain
        height="200"
      />
    </v-col>
  </v-row>

  <v-row
    justify="center"
    class="flex-grow-1 ma-4">
    <v-col
      cols="12"
      md="4"
    >
      <Filters/>
    </v-col>

    <v-col
      cols="12"
      md="4"
    >
      <v-card
        max-width="450"
        class="mx-auto"
      >
        <UsersList/>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import Filters from "@/components/Filters";
import UsersList from "@/components/UsersList";

export default {
  name: 'ContentBlock',

  components: {
    Filters,
    UsersList
  },

  data: () => ({}),
}
</script>