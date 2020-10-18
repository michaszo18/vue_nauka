<template>
  <nav>
    <v-toolbar>
      <v-icon @click="drawer = !drawer">mdi-hamburger</v-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span>Mike</span>
        <span class="font-weight-light">App</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat>
        <span>Sign out</span>
        <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer app
        v-model="drawer" class="pink lighten-2">
      <v-list>
        <v-list-item-group
            color="white"
        >
          <v-list-item
              v-for="link in links" :key="link.text" router :to="link.route"
          >
            <v-list-item-icon>
              <v-icon class="white--text">{{ link.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-tile-title class="white--text">{{ link.text }}</v-list-tile-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>

export default {
  data() {
    return {
      drawer: false,
      links: [
        { icon: 'mdi-view-dashboard-outline', text: 'Dashboard', route: '/' },
        { icon: 'mdi-folder-outline', text: 'My Projects', route: '/projects' },
        { icon: 'mdi-account-outline', text: 'Team', route: '/team' },
      ]
    }
  }
}

</script>