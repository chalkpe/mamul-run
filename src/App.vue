<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            {{ config.title }}
          </v-list-item-title>
          <v-list-item-subtitle>
            {{ config.subtitle }}
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

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>{{ $router.currentRoute.name }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon><v-icon>mdi-dots-vertical</v-icon></v-btn>

      <template v-slot:extension v-if="$router.currentRoute.meta.expansions">
        <v-tabs centered show-arrows>
          <v-tabs-slider></v-tabs-slider>
          <v-tab v-for="e in expansions" :key="e">
            <span>{{ e.substring(0, 2) }}</span>
            <span class="hidden-xs-only" style="white-space: pre">{{ e.substring(2) }}</span>
          </v-tab>
        </v-tabs>
      </template>
    </v-app-bar>

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
import config from './config'
import mamul from './assets/mamul'

export default {
  name: 'App',
  data: () => ({
    drawer: true,

    config,
    expansions: [...new Set(mamul.map(m => m.expansion))],

    list: [
      { icon: 'mdi-home', title: 'Home', to: '/' },
      { icon: 'mdi-comment-processing', title: 'Report', to: '/report' },
      { icon: 'mdi-information', title: 'About', to: '/about' }
    ]
  })
}
</script>
