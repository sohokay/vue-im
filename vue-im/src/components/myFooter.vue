<template>
  <v-footer app fixed style="padding: 0;">
    <!-- -->
    <v-bottom-navigation color="teal" grow>

      <v-btn @click="goTo('/')">
        <span>首页</span>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn @click="goTo('/register')">
        <span>注册</span>
        <v-icon>mdi-map-marker</v-icon>
      </v-btn>
      <v-btn @click="goTo('/login')">
        <span>登录</span>
        <v-icon>mdi-map-marker</v-icon>
      </v-btn>

    </v-bottom-navigation>
  </v-footer>
</template>

<script>
export default {
  methods: {
    goTo(url) {
      this.$router.push(url)
    }
  }
}
</script>

<style scoped>

</style>
