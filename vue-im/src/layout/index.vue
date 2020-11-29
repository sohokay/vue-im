<template>
  <div>
    <v-container fluid style="padding: 0;"><!-- 如果使用vue-router -->
      <keep-alive>
        <router-view :key="key"></router-view>
      </keep-alive>

    </v-container>
    <!--    <router-view></router-view>-->

  </div>

</template>

<script>


export default {
  name: "index",
  computed: {
    key() {
      return this.$route.path
    }
  }

}
</script>

<style scoped>

</style>
