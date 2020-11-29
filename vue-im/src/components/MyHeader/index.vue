<template>
  <div class="appHeader bg-primary text-light">
    <div class="left" @click="goBack()">
      <a class="headerButton">
        <ion-icon name="chevron-back-outline"></ion-icon>
      </a>
    </div>
    <div class="pageTitle">Chat</div>
    <div class="right">
      <a href="javascript:" class="headerButton">
        <ion-icon name="videocam-outline"></ion-icon>
      </a>
      <a href="javascript:;" class="headerButton">
        <ion-icon name="call-outline"></ion-icon>
        <span class="badge badge-danger">1</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  methods: {
    goBack() {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
/*! CSS Used from: Embedded */
ion-icon {
  visibility: hidden;
}

.hydrated {
  visibility: inherit;
}

/*! CSS Used from: http://127.0.0.1:8083/assets/css/style.css */
/*! @import http://127.0.0.1:8083/assets/css/inc/bootstrap/bootstrap.min.css */
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

.badge {
  display: inline-block;
  padding: .25em .4em;
  font-size: 75%;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: .25rem;
  transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
}

@media (prefers-reduced-motion: reduce) {
  .badge {
    transition: none;
  }
}

.badge:empty {
  display: none;
}

.badge-danger {
  color: #fff;
  background-color: #dc3545;
}

.bg-primary {
  background-color: #007bff !important;
}

.text-light {
  color: #f8f9fa !important;
}

@media print {
  *, ::after, ::before {
    text-shadow: none !important;
    box-shadow: none !important;
  }

  a:not(.btn) {
    text-decoration: underline;
  }

  .badge {
    border: 1px solid #000;
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

.appHeader {
  min-height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: env(safe-area-inset-top);
  left: 0;
  right: 0;
  z-index: 999;
  background: #FFF;
  color: #141515;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.1), 0 1px 3px 0 rgba(0, 0, 0, 0.08);
}

.appHeader:before {
  content: '';
  height: env(safe-area-inset-top);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 99999;
  background: #1E74FD;
}

.appHeader .left, .appHeader .right {
  height: 56px;
  display: flex;
  align-items: center;
  position: absolute;
}

.appHeader .left ion-icon, .appHeader .right ion-icon {
  font-size: 26px;
  --ionicon-stroke-width: 36px;
}

.appHeader .left .headerButton, .appHeader .right .headerButton {
  min-width: 36px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  color: #141515;
  position: relative;
}

.appHeader .left .headerButton:active, .appHeader .right .headerButton:active {
  opacity: 0.6;
}

.appHeader .left {
  left: 8px;
  top: 0;
}

.appHeader .right {
  right: 8px;
  top: 0;
}

.appHeader .pageTitle {
  font-size: 17px;
  font-weight: 500;
  padding: 0 10px;
}

.appHeader.text-light {
  color: #fff;
}

.appHeader.text-light .headerButton, .appHeader.text-light .pageTitle {
  color: #fff;
}

.appHeader.bg-primary {
  border: 0;
}

ion-icon {
  --ionicon-stroke-width: 32px;
}

.badge {
  font-size: 12px;
  line-height: 1em;
  border-radius: 100px;
  letter-spacing: 0;
  height: 22px;
  min-width: 22px;
  padding: 0 6px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
}

.badge-danger {
  background: #EC4433 !important;
}

.appHeader .badge {
  min-width: 16px;
  height: 16px;
  line-height: 9px !important;
  font-size: 10px;
  padding: 0 4px !important;
  position: absolute;
  right: 2px;
  top: 10px;
}

.bg-primary {
  background: #1E74FD !important;
  color: #FFF;
}

.text-light {
  color: #FFF !important;
}
</style>
