<template>
  <v-container grid-list-lg>
    <v-layout wrap>
      <v-flex lg6 v-for="rank in ranks" :key="rank">
        <v-card><v-list two-line subheader>
          <v-subheader>{{ rank }}급</v-subheader>
          <v-list-item v-for="m in mamul[rank]" :key="m.name">
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
import mamul from '../assets/mamul'

export default {
  props: {
    expansion: String
  },

  data: function () {
    return {
      ranks: ['A', 'S'],
      mamul: {
        A: mamul.filter(m => m.expansion === this.expansion && m.rank === 'A'),
        S: mamul.filter(m => m.expansion === this.expansion && m.rank === 'S')
      }
    }
  }
}
</script>
