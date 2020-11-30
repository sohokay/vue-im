<template>
  <div>
    <my-header></my-header>
    <!-- * App Header -->

    <!-- App Capsule -->
    <div id="appCapsule" ref="appCapsule">

      <div class="message-divider">
        Friday, Sep 20, 10:40 AM
      </div>

      <div class="message-item">
        <img src="../assets/img/sample/avatar/avatar2.jpg" alt="avatar" class="avatar">
        <div class="content">
          <div class="title">John</div>
          <div class="bubble">
            你瞅啥
          </div>
          <div class="footer">8:40 AM</div>
        </div>
      </div>

      <div class="message-item">
        <img src="../assets/img/sample/avatar/avatar2.jpg" alt="avatar" class="avatar">
        <div class="content">
          <div class="title">Marry</div>
          <div class="bubble">
            瞅你咋地
          </div>
          <div class="footer">10:40 AM</div>
        </div>
      </div>

      <div class="message-item user">
        <div class="content">
          <div class="bubble">
            你再说一遍
          </div>
          <div class="footer">10:40 AM</div>
        </div>
      </div>

      <div class="message-divider">
        Friday, Sep 20, 10:40 AM
      </div>

      <div class="message-item">
        <img src="../assets/img/sample/avatar/avatar2.jpg" alt="avatar" class="avatar">
        <div class="content">
          <div class="title">Marry</div>
          <div class="bubble">
            <img src="../assets/img/sample/photo/1.jpg" alt="photo" class="imaged w160">
          </div>
          <div class="footer">10:40 AM</div>
        </div>
      </div>

      <div class="message-item">
        <img src="../assets/img/sample/avatar/avatar2.jpg" alt="avatar" class="avatar">
        <div class="content">
          <div class="title">Katie</div>
          <div class="bubble">
            漂亮!
          </div>
          <div class="footer">10:40 AM</div>
        </div>
      </div>

      <div class="message-item">
        <img src="../assets/img/sample/avatar/avatar2.jpg" alt="avatar" class="avatar">
        <div class="content">
          <div class="title">Marry</div>
          <div class="bubble">
            你好吗
          </div>
          <div class="footer">10:40 AM</div>
        </div>
      </div>

      <div class="message-item user">
        <div class="content">
          <div class="bubble">
            我很好
          </div>
          <div class="footer">10:40 AM</div>
        </div>
      </div>

      <div class="message-item" v-for="(item,index) of chatHistory" :key="index" :class="{'user':item.type=='send'}">
        <img src="../assets/img/sample/avatar/avatar2.jpg" alt="avatar" class="avatar">
        <div class="content">
          <div class="title">{{ item.userName }}</div>
          <div class="bubble">
            {{ item.content }}
          </div>
          <div class="footer">{{ item.time }}</div>
        </div>
      </div>
    </div>
<!--    <ChatContent :chatHistory="chatHistory"></ChatContent>-->
    <!-- * App Capsule -->
    <div class="chatFooter">
      <form>
        <a href="javascript:" class="btn btn-icon btn-secondary rounded" data-toggle="modal"
           data-target="#addActionSheet">
          <ion-icon name="add"></ion-icon>
        </a>
        <div class="form-group boxed">
          <div class="input-wrapper">
            <input type="text" class="form-control" placeholder="" v-model="message">
            <i class="clear-input">
              <ion-icon name="close-circle"></ion-icon>
            </i>
          </div>
        </div>
        <button type="button" class="btn btn-icon btn-primary rounded" @click="send">
          <ion-icon name="send"></ion-icon>
        </button>
      </form>
    </div>

    <v-snackbar v-model="snackbar">
      {{ text }}
      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">Close</v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import MyHeader from '@/components/MyHeader'
// import ChatContent from '@/components/ChatContent'
// import InputBox from '@/components/InputBox'
import * as signalR from "@microsoft/signalr"
import {chatUrl} from "@/api/chat"

export default {
  name: "index",
  components: {
    MyHeader,
    // ChatContent,
    // InputBox
  },
  watch:{
    chatHistory: function (newValue, oldValue) {
      console.log('old', newValue);
      console.log('new', oldValue);
      this.$nextTick(() => {
        // const h =this.$refs.appCapsule.innerHeight();
        // console.log(h);
        let middle= this.$refs["appCapsule"];
        middle.scrollTop = middle.scrollHeight;
        // $(".chatbox").scrollTop(h);
      })
    },
  },
  data() {
    return {
      connection: null,
      history: [],
      snackbar: false,
      text: '',
      message: "",
      chatHistory: [
        {
          type: "send",
          userName: "jack",
          time: "",
          content: "我发送的"
        },
        {
          type: "receive",
          userName: "mary",
          time: "",
          content: "我收到的 "
        }
      ]
    }
  },
  mounted() {
    setTimeout(() => {
      this.init_socket()
      let middle= this.$refs["appCapsule"];
      middle.scrollTop = middle.scrollHeight;

    }, 2000)
  },
  created() {

  },

  destroyed() {
    this.connection=[]
  },
  methods: {
    init_socket() {
      this.connection = null
      this.connection = new signalR.HubConnectionBuilder()
          .withUrl(chatUrl, {
            skipNegotiation: true,
            transport: signalR.HttpTransportType.WebSockets,
            // accessTokenFactory: () => this.loginToken
          })
          .configureLogging(signalR.LogLevel.Information)
          .build();
      console.log(' this.connection ', this.connection);
      this.snackbar = true
      this.text = "已连接"

      this.connection.on("On_UserMessage", (srcUserId, targetUserId, message, time) => {
        //函数原型: On_UserMessage(string srcUserId, string targetUserId, string message, string time);
        console.info('On_UserMessage', srcUserId, targetUserId, message, time)
        this.history.push({srcUserId, targetUserId, message, time})
        // debugger;
        this.chatHistory.push({
          type: "receive",
          userName: "kay",
          time: time,
          content: message
        },)
        this.$nextTick(() => {
          // const h =this.$refs.appCapsule.innerHeight();
          // console.log(h);
          let middle= this.$refs["appCapsule"];
          middle.scrollTop = middle.scrollHeight;
          // $(".chatbox").scrollTop(h);
        })
      });
      this.connection.on("On_GroupMessage", (srcUserId, targetGroupId, message, time) => {
        this.history.push({srcUserId, targetGroupId, message, time})
        //函数原型:On_GroupMessage(string srcUserId, string targetGroupId, string message, string time);
        console.info('On_GroupMessage', srcUserId, targetGroupId, message, time);
        // debugger;
      });


      this.connection.onclose(this.start);

      // Start the connection.
      this.start();
    },
    start() {
      try {
        this.connection.start().catch((error)=>{
          console.log('error',error);
          // setTimeout(()=>{
          //
          // },1000)
          setTimeout(this.start, 5000);
        });
        console.log("SignalR Connected.");
      } catch (err) {
        console.log("连接断开了...五秒后重连",err);
        setTimeout(this.start, 5000);
      }
    },
    send() {

      if (this.message) {
        try {
          //函数原型: SendUserMessage(string srcUserId, string targetUserId, string message)
          this.connection.invoke('SendUserMessage', 'money', 'kay', this.message);
          this.chatHistory.push({
            type: "send",
            userName: "money",
            time: "",
            content: this.message
          },)
        } catch (err) {
          console.log(err);
        }

      } else {
        return false
      }

    },
    sendUserMsg() {
      try {
        //函数原型: SendUserMessage(string srcUserId, string targetUserId, string message)
        this.connection.invoke('SendUserMessage', 'money', 'kay', 'helloWorld');
        console.info("发送消息成功");
      } catch (err) {
        console.error(err);
      }
    },
    sendGroupMsg() {
      try {
        //函数原型: SendGroupMessage(string srcUserId, string targetGroupId, string message)
        this.connection.invoke('SendGroupMessage', 'money', 'Kay_group', 'this a group message!');
        console.info("发送消息成功");
      } catch (err) {
        console.error(err);
      }
    }
  }
}
</script>

<style scoped>
*, ::after, ::before {
  box-sizing: border-box;
}

a {
  color: #007bff;
  text-decoration: none;
  background-color: transparent;
}

a:hover {
  color: #0056b3;
  text-decoration: underline;
}

button {
  border-radius: 0;
}

button:focus {
  outline: 1px dotted;
  outline: 5px auto -webkit-focus-ring-color;
}

button, input {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

button, input {
  overflow: visible;
}

button {
  text-transform: none;
}

[type=button], button {
  -webkit-appearance: button;
}

[type=button]::-moz-focus-inner, button::-moz-focus-inner {
  padding: 0;
  border-style: none;
}

.form-control {
  display: block;
  width: 100%;
  height: calc(1.5em + .75rem + 2px);
  padding: .375rem .75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: .25rem;
  transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
}

@media (prefers-reduced-motion: reduce) {
  .form-control {
    transition: none;
  }
}

.form-control::-ms-expand {
  background-color: transparent;
  border: 0;
}

.form-control:-moz-focusring {
  color: transparent;
  text-shadow: 0 0 0 #495057;
}

.form-control:focus {
  color: #495057;
  background-color: #fff;
  border-color: #80bdff;
  outline: 0;
  box-shadow: 0 0 0 .2rem rgba(0, 123, 255, .25);
}

.form-control::-webkit-input-placeholder {
  color: #6c757d;
  opacity: 1;
}

.form-control::-moz-placeholder {
  color: #6c757d;
  opacity: 1;
}

.form-control:-ms-input-placeholder {
  color: #6c757d;
  opacity: 1;
}

.form-control::-ms-input-placeholder {
  color: #6c757d;
  opacity: 1;
}

.form-control::placeholder {
  color: #6c757d;
  opacity: 1;
}

.form-control:disabled {
  background-color: #e9ecef;
  opacity: 1;
}

.form-group {
  margin-bottom: 1rem;
}

.btn {
  display: inline-block;
  font-weight: 400;
  color: #212529;
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: .375rem .75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: .25rem;
  transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
}

@media (prefers-reduced-motion: reduce) {
  .btn {
    transition: none;
  }
}

.btn:hover {
  color: #212529;
  text-decoration: none;
}

.btn:focus {
  outline: 0;
  box-shadow: 0 0 0 .2rem rgba(0, 123, 255, .25);
}

.btn:disabled {
  opacity: .65;
}

.btn-primary {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}

.btn-primary:hover {
  color: #fff;
  background-color: #0069d9;
  border-color: #0062cc;
}

.btn-primary:focus {
  color: #fff;
  background-color: #0069d9;
  border-color: #0062cc;
  box-shadow: 0 0 0 .2rem rgba(38, 143, 255, .5);
}

.btn-primary:disabled {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}

.btn-secondary {
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d;
}

.btn-secondary:hover {
  color: #fff;
  background-color: #5a6268;
  border-color: #545b62;
}

.btn-secondary:focus {
  color: #fff;
  background-color: #5a6268;
  border-color: #545b62;
  box-shadow: 0 0 0 .2rem rgba(130, 138, 145, .5);
}

.btn-secondary:disabled {
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d;
}

.rounded {
  border-radius: .25rem !important;
}

@media print {
  *, ::after, ::before {
    text-shadow: none !important;
    box-shadow: none !important;
  }
}

/*! end @import */
::-webkit-scrollbar {
  width: 0;
}

::selection {
  background: rgba(30, 116, 253, 0.3);
}

a {
  transition: 0.2s all;
  color: #1E74FD;
  outline: 0 !important;
}

a:hover, a:active, a:focus {
  outline: 0 !important;
  color: #1E74FD;
  text-decoration: none;
}

button {
  outline: 0 !important;
}

button:hover, button:active, button:focus {
  outline: 0 !important;
}

ion-icon {
  --ionicon-stroke-width: 32px;
}

.btn {
  height: 40px;
  padding: 3px 18px;
  font-size: 13px;
  line-height: 1.2em;
  font-weight: 500;
  box-shadow: none !important;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s all;
  text-decoration: none !important;
  border-radius: 6px;
  border-width: 2px;
}

.btn ion-icon {
  font-size: 22px;
  margin-right: 10px;
  margin-top: -2px;
  font-weight: 700;
}

.btn.rounded {
  border-radius: 100px !important;
}

.btn-icon {
  width: 40px;
  height: 40px;
  padding: 0;
}

.btn-icon ion-icon {
  text-align: center;
  margin: 0 !important;
}

.btn-primary {
  background: #1E74FD !important;
  border-color: #1E74FD !important;
  color: #ffffff !important;
}

.btn-primary:hover, .btn-primary:focus, .btn-primary:active {
  background: #0564fd !important;
  border-color: #0564fd !important;
}

.btn-primary:disabled {
  background: #1E74FD;
  border-color: #1E74FD;
  opacity: 0.5;
}

.btn-secondary {
  background: #6C7C94 !important;
  border-color: #6C7C94 !important;
  color: #ffffff !important;
}

.btn-secondary:hover, .btn-secondary:focus, .btn-secondary:active {
  background: #617085 !important;
  border-color: #617085 !important;
}

.btn-secondary:disabled {
  background: #6C7C94;
  border-color: #6C7C94;
  opacity: 0.5;
}

.form-control {
  background-clip: padding-box;
  background-image: linear-gradient(transparent, transparent);
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.form-group {
  width: 100%;
}

.form-group .clear-input {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #4F5050;
  height: 38px;
  font-size: 22px;
  position: absolute;
  right: -10px;
  bottom: 0;
  width: 32px;
  opacity: 0.5;
  display: none;
}

.form-group .clear-input:hover, .form-group .clear-input:active {
  opacity: 0.8;
}

.form-group .input-wrapper {
  position: relative;
}

.form-group.boxed {
  margin: 0;
  padding: 8px 0;
}

.form-group.boxed .form-control {
  background: #fff;
  box-shadow: none;
  height: 42px;
  border-radius: 6px;
  padding: 0 40px 0 16px;
}

.form-group.boxed .form-control:focus {
  border-color: #1E74FD;
}

.form-group.boxed .clear-input {
  right: 0;
  height: 42px;
  width: 40px;
}

.chatFooter {
  min-height: 56px;
  background: #FFF;
  border-top: 1px solid #E1E1E1;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 14px;
  padding-right: 14px;
  padding-bottom: env(safe-area-inset-bottom);
}

.chatFooter .form-group {
  width: calc(100% - 100px);
}

.chatFooter .form-group .form-control {
  font-size: 13px;
  border-radius: 300px;
  height: 40px;
}

.chatFooter .form-group .clear-input {
  height: 40px;
}

.chatFooter form {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

#appCapsule {
  padding: 56px 0;
  margin-bottom: env(safe-area-inset-bottom);
  margin-top: env(safe-area-inset-top);
}

.imaged {
  height: auto;
  border-radius: 6px;
}

.imaged.w160 {
  width: 160px !important;
}

.message-divider {
  font-size: 12px;
  text-align: center;
  padding: 5px 0;
  color: #A1A1A2;
}

.message-item {
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 2px 16px;
  margin-right: 60px;
}

.message-item .bubble {
  padding: 10px 16px;
  background: #FFF;
  border-radius: 16px 16px 16px 0;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.1), 0 1px 3px 0 rgba(0, 0, 0, 0.08);
  color: #141515;
  display: inline-block;
  margin-top: 4px;
  line-height: 1.4em;
}

.message-item .bubble .imaged {
  margin: 0px -6px;
}

.message-item .title {
  font-size: 12px;
  font-weight: 500;
  color: #4F5050;
  line-height: 1.2em;
  padding: 0 0 0 10px;
}

.message-item .footer {
  font-size: 12px;
  padding: 0 10px;
  text-align: right;
  line-height: 1em;
  margin-top: 5px;
  color: #141515;
  opacity: .4;
  height: 14px;
}

.message-item .avatar {
  margin-right: 10px;
  width: 32px;
  height: auto;
  border-radius: 100%;
  margin-bottom: 18px;
}

.message-item.user {
  justify-content: flex-end;
  margin-right: 0;
  margin-left: 60px;
}

.message-item.user .bubble {
  background: #1E74FD;
  color: #FFF;
  border-radius: 16px 16px 0 16px;
}
</style>
