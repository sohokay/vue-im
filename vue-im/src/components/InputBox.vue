<template>
  <div>
    <!-- Share Action Sheet -->
    <!--    <div class="modal fade action-sheet inset" id="addActionSheet" tabindex="-1" role="dialog">-->
    <!--      <div class="modal-dialog" role="document">-->
    <!--        <div class="modal-content">-->
    <!--          <div class="modal-header">-->
    <!--            <h5 class="modal-title">Share</h5>-->
    <!--          </div>-->
    <!--          <div class="modal-body">-->
    <!--            <ul class="action-button-list">-->
    <!--              <li>-->
    <!--                <a href="#" class="btn btn-list" data-dismiss="modal"><span><ion-icon name="camera-outline"></ion-icon>发送照片</span></a>-->
    <!--              </li>-->
    <!--              <li>-->
    <!--                <a href="#" class="btn btn-list" data-dismiss="modal"><span><ion-icon-->
    <!--                    name="videocam-outline"></ion-icon>发送短视频</span></a>-->
    <!--              </li>-->
    <!--              <li>-->
    <!--                <a href="#" class="btn btn-list" data-dismiss="modal"><span><ion-icon name="image-outline"></ion-icon>Upload from Gallery</span></a>-->
    <!--              </li>-->
    <!--              <li>-->
    <!--                <a href="#" class="btn btn-list" data-dismiss="modal"><span><ion-icon-->
    <!--                    name="document-outline"></ion-icon>Documents</span></a>-->
    <!--              </li>-->
    <!--              <li>-->
    <!--                <a href="#" class="btn btn-list" data-dismiss="modal"><span><ion-icon-->
    <!--                    name="musical-notes-outline"></ion-icon>Sound file</span></a>-->
    <!--              </li>-->
    <!--            </ul>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->
    <!-- * Share Action Sheet -->

    <!-- chat footer -->
    <div class="chatFooter">
      <form>
        <a href="javascript:" class="btn btn-icon btn-secondary rounded" data-toggle="modal"
           data-target="#addActionSheet">
          <ion-icon name="add"></ion-icon>
        </a>
        <div class="form-group boxed">
          <div class="input-wrapper">
            <input type="text" class="form-control" placeholder="">
            <i class="clear-input">
              <ion-icon name="close-circle"></ion-icon>
            </i>
          </div>
        </div>
        <button type="button" class="btn btn-icon btn-primary rounded">
          <ion-icon name="send"></ion-icon>
        </button>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  name: "InputBox",
  data() {
    return {}
  },
  created() {
  },
  methods() {

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
</style>
