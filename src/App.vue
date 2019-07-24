<template>
  <v-app>
    <v-navigation-drawer app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            MAMUL RUN
          </v-list-item-title>
          <v-list-item-subtitle>
            FFXIV Elite Mark Hunting
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item link v-for="i in list" :key="i.title" :to="i.to">
          <v-list-item-icon>
            <v-icon>{{ i.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ i.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <router-view></router-view>
    </v-content>

    <v-footer app inset>
        <v-flex text-center xs12>
          &copy; {{ new Date().getFullYear() }}
        </v-flex>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    list: [
      { icon: 'mdi-home', title: 'Home', to: '/' },
      { icon: 'mdi-comment-processing', title: 'Report', to: '/report' },
      { icon: 'mdi-information', title: 'About', to: '/about' }
    ]
  })
}
</script>
