<template>
  <v-navigation-drawer
    app
    :value="open"
    @input="$emit('update:open', $event)"
  >
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title">
          {{ title }}
        </v-list-item-title>
        <v-list-item-subtitle>
          {{ subtitle }}
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense nav>
      <v-list-item
        link
        v-for="r in $router.options.routes"
        :key="r.path"
        :to="r.path"
      >

        <v-list-item-icon>
          <v-icon>{{ r.meta.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ r.name }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import config from '../config'
export default {
  props: { open: Boolean },
  data: () => config
}
</script>
