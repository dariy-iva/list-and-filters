<template>
  <v-list>
    <v-list-subheader>List</v-list-subheader>

    <v-list-item
      v-for="user in filteredUsers"
      :key="`user-${user.id}`"
      lines="auto"
    >
      <template v-slot:prepend>
        <v-avatar @click="toggleVisibleUserCountry(user.id)"
        >
          <v-img
            :src="user.avatar"
            alt="user avatar"
          ></v-img>
        </v-avatar>
      </template>

      <template v-slot:title>
        <div v-html="user.title"></div>
      </template>

      <template v-slot:subtitle>
        <div
          class="user__subtitle"
          v-html="user.subtitle"
        />

        <v-expand-transition>
          <div v-show="activeUsersId.includes(user.id)">
            Address: {{ user.country.replace(user.country[0], user.country[0].toUpperCase()) }}
          </div>
        </v-expand-transition>
      </template>
    </v-list-item>
  </v-list>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: "UsersList",

  data: () => ({
    activeUsersId: [],
  }),

  computed: {
    ...mapGetters(['users', 'filterByCountry', 'filterByScore']),

    filteredUsers() {
      let filteredUsers = this.users;

      if (this.filterByCountry) {
        filteredUsers = this.users.filter(user => user.country === this.filterByCountry);
      }

      if (this.filterByScore) {
        const {from, to} = this.filterByScore;
        filteredUsers = this.users.filter(user => (user.score > from - 1) && (user.score < to + 1));
      }

      return filteredUsers;
    }
  },

  methods: {
    toggleVisibleUserCountry(userId) {
      if (this.activeUsersId.includes(userId)) {
        this.activeUsersId = this.activeUsersId.filter(id => id !== userId);
      } else {
        this.activeUsersId.push(userId);
      }
    }
  }

}
</script>

<style scoped>
.user__subtitle {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -moz-box;
  -moz-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-clamp: 2;
  box-orient: vertical;
}
</style>