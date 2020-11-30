<template>
  <div>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-container>
        <v-text-field v-model="form.userName" :counter="10" :rules="validRules.userNameRules" label="用户名"
                      required></v-text-field>
        <v-text-field v-model="form.password" :counter="10" :rules="validRules.passwordRules" label="密码"
                      required></v-text-field>

        <!--        <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>-->

        <!--        <v-select v-model="select" :items="items" :rules="[v => !!v || 'Item is required']" label="Item" required></v-select>-->

        <!--        <v-checkbox v-model="checkbox" :rules="[v => !!v || 'You must agree to continue!']" label="Do you agree?" required></v-checkbox>-->

        <v-btn :disabled="!valid" color="success" @click="submit()">提交</v-btn>

        <v-btn color="error" class="mr-4" @click="reset">重置</v-btn>

        <!--        <v-btn color="warning" @click="resetValidation"></v-btn>-->
      </v-container>

    </v-form>
  </div>
</template>

<script>
import {login} from '@/api/user'
import localforage from "localforage";

export default {
  name: "index",
  data: () => ({
    errorMessage:'',
    form: {
      userName: '',
      password: ''
    },
    validRules: {
      userNameRules: [
        v => !!v || '账号不能为空',
        // v => (v && v.length <= 10) || '账号不能少于10位',
      ],
      passwordRules: [
        v => !!v || '密码不能为空',
        v => (v && v.length <= 6) || '密码不能少于6位',
      ],
    },
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    select: null,
    items: [
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4',
    ],
    checkbox: false,
  }),
  methods: {
    submit() {
      if (this.$refs.form.validate) {
        // login(this.form)
        login(this.form).then((respones) => {
          console.log(respones);
          if (respones.state) {
            // this.$router.push('/')
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
    validate() {
      console.log(this.$refs.form.validate());
    },
    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    },
  },
}
</script>

<style scoped>

</style>
