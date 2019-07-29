<template>
  <v-container grid-list-lg>
    <v-layout wrap>
      <v-flex lg4 v-for="r in ranks" :key="r.value">
        <v-card><v-list two-line subheader>
          <v-subheader>{{ r.name }}</v-subheader>
          <v-list-item v-for="m in getMamulByRank(r.value)" :key="m.name">
            <v-list-item-content>
              <v-list-item-title>{{ m.name }}</v-list-item-title>
              <v-list-item-subtitle>{{ m.zone }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list></v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: {
    mamul: Array,
    expansion: String
  },

  data: () => ({
    ranks: [
      { name: 'A급', value: 'A' },
      { name: 'S급', value: 'S' },
      { name: '특수돌발', value: 'F' }
    ]
  }),

  computed: {
    currentMamul () {
      return this.mamul.filter(m => m.expansion === this.expansion)
    }
  },

  methods: {
    getMamulByRank (rank) {
      return this.currentMamul.filter(m => m.rank === rank)
    }
  }
}
</script>
