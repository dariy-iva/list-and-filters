export default {
  state: () => ({
    users: [],
  }),

  getters: {
    users(state) {
      return state.users;
    },
  },

  mutations: {
    setUsers(state, payload) {
      state.users = payload.users;
    },
  },

  actions: {
    getUsers() {
      const users = [
        {
          id: 1,
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Brunch this weekend?',
          subtitle: `<span class="text-primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
          country: 'russia',
          score: 10
        },
        {
          id: 2,
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          subtitle: `<span class="text-primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
          country: 'usa',
          score: 19
        },
        {
          id: 3,
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Oui oui',
          subtitle: '<span class="text-primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
          country: 'usa',
          score: 5
        },
        {
          id: 4,
          avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          title: 'Birthday gift',
          subtitle: '<span class="text-primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
          country: 'russia',
          score: 18
        },
        {
          id: 5,
          avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
          title: 'Recipe to try',
          subtitle: '<span class="text-primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
          country: 'russia',
          score: 26
        },
      ];

      return new Promise(function (res) {
        setTimeout(() => res(users), 1000);
      })
    },
  },
}