<template>
  <div>
    <v-container fluid style="padding: 0;"><!-- 如果使用vue-router -->
      <router-view></router-view>
    </v-container>
<!--    <router-view></router-view>-->
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
  </div>

</template>

<script>
export default {
name: "index"
}
</script>

<style scoped>

</style>
