<template>
  <v-list>
    <v-list-subheader>List</v-list-subheader>

    <v-list-item
      v-show="!filteredUsers.length"
      lines="auto"
    >
      No users found by the selected filters
    </v-list-item>

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
          <div v-show="data.activeUsersId.includes(user.id)">
            Address: {{ user.country.replace(user.country[0], user.country[0].toUpperCase()) }}
          </div>
        </v-expand-transition>
      </template>
    </v-list-item>
  </v-list>
</template>

<script setup>
import {computed, reactive} from "vue";
import {useStore} from 'vuex';

const store = useStore();

const data = reactive({activeUsersId: []});

const filterByCountry = computed(() => store.getters.filterByCountry);
const filterByScore = computed(() => store.getters.filterByScore);

const filteredUsers = computed(() => {
  let filteredUsers = store.getters.users;

  if (filterByCountry.value) {
    filteredUsers = filteredUsers.filter(user => user.country === filterByCountry.value);
  }

  if (filterByScore.value) {
    const {from, to} = filterByScore.value;
    filteredUsers = filteredUsers.filter(user => (user.score > from - 1) && (user.score < to + 1));
  }

  return filteredUsers;
})

function toggleVisibleUserCountry(userId) {
  if (data.activeUsersId.includes(userId)) {
    data.activeUsersId = data.activeUsersId.filter(id => id !== userId);
  } else {
    data.activeUsersId.push(userId);
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