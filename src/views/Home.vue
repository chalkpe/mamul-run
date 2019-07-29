<template>
  <div>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="$emit('toggle')"></v-app-bar-nav-icon>
      <v-toolbar-title>{{ $router.currentRoute.name }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon><v-icon>mdi-dots-vertical</v-icon></v-btn>

      <template v-slot:extension>
        <v-tabs centered show-arrows v-model="index">
          <v-tabs-slider></v-tabs-slider>
          <v-tab v-for="e in expansions" :key="e">
            <span>{{ e.substring(0, 2) }}</span>
            <span class="hidden-xs-only" style="white-space: pre">{{ e.substring(2) }}</span>
          </v-tab>
        </v-tabs>
      </template>
    </v-app-bar>

    <v-content>
      <mamul-list
        :mamul="mamul"
        :expansion="expansions[index]"></mamul-list>
    </v-content>
  </div>
</template>

<script>
import mamul from '../assets/mamul'
import MamulList from '../components/MamulList.vue'

const expansions = [...new Set(mamul.map(m => m.expansion))]

export default {
  name: 'Home',
  components: { MamulList },
  data: () => ({
    mamul,
    expansions,
    index: 0
  })
}
</script>
