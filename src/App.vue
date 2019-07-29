<template>
  <v-app>
    <navigation-drawer :open.sync="drawer"></navigation-drawer>
    <router-view @toggle="drawer = !drawer"></router-view>
    <v-footer app inset elevation="8">
      <v-flex text-center xs12>
        &copy; {{ new Date().getFullYear() }}
      </v-flex>
    </v-footer>
  </v-app>
</template>

<script>
import NavigationDrawer from './components/NavigationDrawer'

export default {
  name: 'App',
  components: { NavigationDrawer },
  data: () => ({ drawer: true })
}
</script>
