<template>
  <v-footer app fixed style="padding: 0;">
    <!-- -->
    <v-bottom-navigation :value="value" color="teal" grow>
      <v-btn>
        <span>Recents</span>
        <v-icon>mdi-history</v-icon>
      </v-btn>
      <v-btn>
        <span>Favorites</span>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn>
        <span>Nearby</span>
        <v-icon>mdi-map-marker</v-icon>
      </v-btn>
      <v-btn>
        <span>Nearby</span>
        <v-icon>mdi-map-marker</v-icon>
      </v-btn>

    </v-bottom-navigation>
  </v-footer>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>
