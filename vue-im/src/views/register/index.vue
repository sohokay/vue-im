<template>

  <div>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-app-bar style="padding: 0;">
        <!--      <v-app-bar-nav-icon></v-app-bar-nav-icon>-->
        <v-btn icon @click="goTo">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-toolbar-title>注册</v-toolbar-title>

        <v-spacer></v-spacer>
      </v-app-bar>
      <v-container>

        <v-text-field v-model="form.nickname" :counter="10" :rules="validRules.nicknameRules" label="用户名"
                      required></v-text-field>
        <v-text-field v-model="form.userName" :counter="10" :rules="validRules.userNameRules" label="账号"
                      required></v-text-field>
        <v-text-field v-model="form.password" :counter="10" :rules="validRules.passwordRules" label="密码"
                      required></v-text-field>
        <v-btn :disabled="!valid" color="success" @click="submit()">提交</v-btn>

        <v-btn color="error" class="mr-4" @click="reset">重置</v-btn>
        <v-alert v-show="errorMessage"
                 dense
                 type="error"
        >{{ errorMessage }}
        </v-alert>
      </v-container>

    </v-form>
  </div>
</template>

<script>
import {register} from "@/api/user";
import localforage from "localforage"

export default {
  name: "index",
  data: () => ({
    errorMessage: "",
    form: {
      userName: '',
      password: '',
      nickname: ''
    },
    validRules: {
      nicknameRules: [
        v => !!v || '用户名不能为空',
        // v => (v && v.length <= 10) || '账号不能少于10位',
      ],
      userNameRules: [
        v => !!v || '账号不能为空',
        // v => (v && v.length <= 10) || '账号不能少于10位',
      ],
      passwordRules: [
        v => !!v || '密码不能为空',
        v => (v && v.length <= 6) || '密码不能少于6位',
      ],
    },
    valid: false,
    firstname: '',
    lastname: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => v.length <= 10 || 'Name must be less than 10 characters',
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid',
    ],
  }),
  methods: {
    goTo() {
      this.$router.push('/')
    },
    submit() {
      if (this.$refs.form.validate) {
        register(this.form).then((respones) => {
          console.log(respones);
          if (respones.state) {
            this.$router.push('/')
            localforage.setItem('userInfo', respones.data)
            localforage.setItem('loginStatus', true)

          } else {
            // alert(respones.message)
            this.errorMessage = respones.message
            this.reset()
          }
        })
      }
    },
    reset() {
      this.$refs.form.reset()
      this.errorMessage = ''
    },
    validate() {
      console.log(this.$refs.form.validate());
    },
  }
}
</script>

<style scoped>

</style>
