<template>
  <div>
    <div id="appCapsule">

      <div class="message-divider">
        Friday, Sep 20, 10:40 AM
      </div>

      <div class="message-item">
        <img src="../views/assets/img/sample/avatar/avatar2.jpg" alt="avatar" class="avatar">
        <div class="content">
          <div class="title">John</div>
          <div class="bubble">
            你瞅啥
          </div>
          <div class="footer">8:40 AM</div>
        </div>
      </div>

      <div class="message-item">
        <img src="../views/assets/img/sample/avatar/avatar2.jpg" alt="avatar" class="avatar">
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
        <img src="../views/assets/img/sample/avatar/avatar2.jpg" alt="avatar" class="avatar">
        <div class="content">
          <div class="title">Marry</div>
          <div class="bubble">
            <img src="../views/assets/img/sample/photo/1.jpg" alt="photo" class="imaged w160">
          </div>
          <div class="footer">10:40 AM</div>
        </div>
      </div>

      <div class="message-item">
        <img src="../views/assets/img/sample/avatar/avatar2.jpg" alt="avatar" class="avatar">
        <div class="content">
          <div class="title">Katie</div>
          <div class="bubble">
            漂亮!
          </div>
          <div class="footer">10:40 AM</div>
        </div>
      </div>

      <div class="message-item">
        <img src="../views/assets/img/sample/avatar/avatar2.jpg" alt="avatar" class="avatar">
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
        <img src="../views/assets/img/sample/avatar/avatar2.jpg" alt="avatar" class="avatar">
        <div class="content">
          <div class="title">{{ item.userName }}</div>
          <div class="bubble">
            {{ item.content }}
          </div>
          <div class="footer">{{ item.time }}</div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "ChatContent",
  props: {
    chatHistory: {
      type: Array,
      required: true
    }
  },
  data() {
    return {}
  },
  methods() {

  },
  watch: {
    chatHistory: function (newValue, oldValue) {
      console.log(newValue);
      console.log(oldValue);
    }
  },

  created() {
  }
}
</script>

<style scoped>
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
