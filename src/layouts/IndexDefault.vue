<script>
export default {
  data() {
    return {
      drawer: true,
      items: [
        {
          text: "Item 1",
          link: "/",
          icon: "mdi-cube-scan",
        },
        {
          text: "Item 2",
          link: "/two",
          icon: "mdi-database-outline",
        },
        {
          text: "Item 3",
          link: "/three",
          icon: "mdi-drawing-box",
        },
      ],
    };
  },
};
</script>

<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app class="ma-0 pa-0">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> Designer </v-list-item-title>
          <v-list-item-subtitle> For eCommerce </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense nav>
        <template v-for="item in items">
          <v-list-item-group :key="item.text">
            <v-list-item :to="item.link" link exact>
              <v-icon left>{{ item.icon }}</v-icon>
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app flat class="pa-0">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Designer</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-chip>
        <v-icon small>mdi-account-circle-outline</v-icon>
      </v-chip>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>
