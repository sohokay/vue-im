<template>
  <!--  <div id="app">-->
  <!--    <img alt="Vue logo" src="./assets/logo.png">-->
  <!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  <!--  </div>-->
  <v-app>
    <!--    <v-navigation-drawer app>-->
    <!--      &lt;!&ndash; &ndash;&gt;-->
    <!--    </v-navigation-drawer>-->

<!--    <v-app-bar app>-->
      <!-- -->
<!--    </v-app-bar>&lt;!&ndash; 根据应用程序组件调整内容大小 &ndash;&gt;-->
    <v-main><!-- 为应用程序提供正确的插槽 -->
      <v-container fluid style="padding: 0;"><!-- 如果使用vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>



    <!--    <v-content>-->
    <!--      <v-container>Hello world</v-container>-->
    <!--    </v-content>-->
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {}
}
</script>

<style lang="sass" scoped>

</style>
