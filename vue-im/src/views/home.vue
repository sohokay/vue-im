<template>
  <div>

    <v-card class="mx-auto">
      <v-toolbar color="deep-purple " dark>
        <!--      <v-app-bar-nav-icon></v-app-bar-nav-icon>-->

        <v-toolbar-title>New Chat</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </v-toolbar>

      <v-list subheader>
        <!--      <v-subheader>Recent chat</v-subheader>-->

        <v-list-item v-for="chat in recent" :key="chat.title" @click="goChat(chat.id)">

          <v-list-item-avatar>
            <v-img :alt="`${chat.title} avatar`" :src="chat.avatar"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-text="chat.title"></v-list-item-title>
          </v-list-item-content>

          <v-list-item-icon>
            <v-icon :color="chat.active ? 'deep-purple accent-4' : 'grey'">mdi-message-outline</v-icon>
          </v-list-item-icon>


        </v-list-item>
      </v-list>

      <!--    <v-divider></v-divider>-->

      <!--    <v-list subheader>-->
      <!--      <v-subheader>Previous chats</v-subheader>-->

      <!--      <v-list-item v-for="chat in previous" :key="chat.title">-->
      <!--        <v-list-item-avatar>-->
      <!--          <v-img :alt="`${chat.title} avatar`" :src="chat.avatar"></v-img>-->
      <!--        </v-list-item-avatar>-->
      <!--        <v-list-item-content>-->
      <!--          <v-list-item-title v-text="chat.title"></v-list-item-title>-->
      <!--        </v-list-item-content>-->
      <!--      </v-list-item>-->
      <!--    </v-list>-->
    </v-card>
    <my-footer></my-footer>
  </div>

</template>

<script>
import myFooter from "@/components/myFooter";
export default {
  name: "home",
  components: {myFooter},
  data: () => ({
    recent: [
      {
        active: true,
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        title: 'Jason Oner',
        id: '0',
      },
      {
        active: true,
        avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        title: 'Mike Carlson',
        id: '1',
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        title: 'Cindy Baker',
        id: '2',
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
        title: 'Ali Connors',
        id: '3',
      },
    ],
    // previous: [{
    //   title: 'Travis Howard',
    //   avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
    // }],
  }),
  methods: {
    goChat(id) {
      this.$router.push({path: '/chat', query: id})
    }
  }
}
</script>

<style scoped>

</style>
