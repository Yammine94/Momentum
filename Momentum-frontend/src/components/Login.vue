<template>
<article class="login page">
    <div class="container-login100">
			<div id="login" class="wrap-login100">
				<div class="login100-form validate-form">
					<span class="login100-form-logo">
						<i class="material-icons" style="font-size:80px">landscape</i>
					</span>

					<div class="wrap-input100 validate-input" data-validate = "Enter username">
						<input v-model="email" class="input100" type="text" name="username" placeholder="Username">
						<span class="focus-input100"></span>
					</div>

					<div class="wrap-input100 validate-input" data-validate="Enter password">
						<input v-model="password" class="input100" type="password" name="pass" placeholder="Password">
						<span class="focus-input100"></span>
					</div>

					<div class="container-login100-form-btn" v-if="logInToggle">
						<button class="login100-form-btn" @click="login();">
							{{ msg }}
						</button>
					</div>
                    <div class="container-login100-form-btn" v-else>
						<button class="login100-form-btn" @click="signUp">
                            Sign Up
						</button>
					</div>
                    <div v-if="!logInToggle" class="toggleDiv">
                        <h4>Already have an account?</h4>
                        <h6><button @click="logInToggle = true">Log In</button></h6>
                    </div>
                    <div v-else class="toggleDiv">
                        <h4>Don't have an account?</h4>
                        <h6><button @click="logInToggle = false">Sign Up</button></h6>
                    </div>
                    
				</div>
			</div> 
		</div>
        <div v-if="toggleModal" id="myModal" class="modal fade" style="display: block; opacity: 1">
                    <div class="modal-dialog modal-confirm">
                        <div class="modal-content">
                            <div class="modal-header">
                                <div class="icon-box">
                                    <i class="material-icons">&#xE5CD;</i>
                                </div>
                                <button @click="toggleModal = false" type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div class="modal-body text-center">
                                <h4>Ooops!</h4>	
                                <p>Something went wrong. Maybe you typed the wrong username or password.</p>
                            </div>
                        </div>
                    </div>
                </div>
  </article>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Login",
  data() {
    return {
      msg: "Log In",
      email: "",
      password: "",
      toggleModal: false,
      logInToggle: true
    };
  },
  methods: {
    login: function() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(auth => {
          this.$router.replace("/");
          this.$emit("loggedIn");
          return;
        })
        .catch(err => {
          this.toggleModal = true;
          return false;
        });
    },
    signUp: function() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(auth => this.$router.replace("/"))
        .catch(err => alert("Failed to sign up"));
    }
  },
  props: ["isLoggedIn"]
};
</script>

<style>
body > .grid {
  height: 100%;
}

.page {
  position: fixed;
  width: 100%;
}

#form-holder {
  margin: 50px auto;
  width: 100%;
  display: flex;
}

#login {
  box-shadow: 1px 2px 20px 2px #232526;
  max-height: 500px !important;
  margin: 100px auto;
}

.image {
  margin-top: -100px;
}
.column {
  max-width: 450px;
}

* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

input {
  outline: none;
  border: none;
}

input:focus::-webkit-input-placeholder {
  color: transparent;
}
input:focus:-moz-placeholder {
  color: transparent;
}
input:focus::-moz-placeholder {
  color: transparent;
}
input:focus:-ms-input-placeholder {
  color: transparent;
}

input::-webkit-input-placeholder {
  color: #fff;
}
input:-moz-placeholder {
  color: #fff;
}
input::-moz-placeholder {
  color: #fff;
}
input:-ms-input-placeholder {
  color: #fff;
}

button {
  outline: none !important;
  border: none;
  background: transparent;
}

button:hover {
  cursor: pointer;
  color: #fff;
}

.container-login100 {
  width: 100%;
  min-height: 100vh;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 15px;

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  z-index: 1;
}

.container-login100::before {
  content: "";
  display: block;
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.wrap-login100 {
  width: 500px;
  border-radius: 10px;
  overflow: hidden;
  padding: 45px 55px 45px 55px;
  background: #9152f8;
  background: -webkit-linear-gradient(top, #b224ef, #7579ff);
  background: -o-linear-gradient(top, #b224ef, #7579ff);
  background: -moz-linear-gradient(top, #b224ef, #7579ff);
  background: linear-gradient(top, #b224ef, #7579ff);
}

.login100-form {
  width: 100%;
}

.login100-form-logo {
  font-size: 60px;
  color: #333333;

  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 110px;
  height: 110px;
  border-radius: 50%;
  background: #ada996;
  background: -webkit-linear-gradient(
    to right,
    #eaeaea,
    #dbdbdb,
    #f2f2f2,
    #ada996
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #eaeaea,
    #dbdbdb,
    #f2f2f2,
    #ada996
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  margin: 10px auto;
}

.login100-form-title {
  font-family: Poppins-Medium;
  font-size: 30px;
  color: #fff;
  line-height: 1.2;
  text-align: center;
  text-transform: uppercase;

  display: block;
}

.wrap-input100 {
  width: 100%;
  position: relative;
  border-bottom: 2px solid rgba(255, 255, 255, 0.24);
  margin-bottom: 30px;
}

.input100 {
  font-family: Poppins-Regular;
  font-size: 16px;
  color: #fff;
  line-height: 1.2;

  display: block;
  width: 100%;
  height: 45px;
  background: transparent;
  padding: 0 5px 0 38px;
}

.focus-input100 {
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
}

.focus-input100::before {
  content: "";
  display: block;
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;

  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;
  background: #fff;
}

.focus-input100::after {
  font-family: Material-Design-Iconic-Font;
  font-size: 22px;
  color: #fff;

  content: attr(data-placeholder);
  display: block;
  width: 100%;
  position: absolute;
  top: 6px;
  left: 0px;
  padding-left: 5px;

  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;
}

.input100:focus {
  padding-left: 5px;
}

.input100:focus + .focus-input100::after {
  top: -22px;
  font-size: 18px;
}

.input100:focus + .focus-input100::before {
  width: 100%;
}

.has-val.input100 + .focus-input100::after {
  top: -22px;
  font-size: 18px;
}

.has-val.input100 + .focus-input100::before {
  width: 100%;
}

.has-val.input100 {
  padding-left: 5px;
}

.container-login100-form-btn {
  width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.login100-form-btn {
  font-family: Poppins-Medium;
  font-size: 16px;
  color: black;
  line-height: 1.2;

  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  width: 175px;
  min-width: 120px;
  height: 50px;
  border-radius: 12px;

  background: #9152f8;
  background: -webkit-linear-gradient(bottom, #9152f8, #b224ef);
  background: -o-linear-gradient(bottom, #9152f8, #b224ef);
  background: -moz-linear-gradient(bottom, #9152f8, #b224ef);
  background: linear-gradient(bottom, #9152f8, #b224ef);
  position: relative;
  z-index: 1;

  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;
}

.login100-form-btn::before {
  content: "";
  display: block;
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background: #ada996;
  background: -webkit-linear-gradient(
    to right,
    #eaeaea,
    #dbdbdb,
    #f2f2f2,
    #ada996
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #eaeaea,
    #dbdbdb,
    #f2f2f2,
    #ada996
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  top: 0;
  left: 0;
  opacity: 1;

  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;
}

.login100-form-btn:hover {
  color: #fff;
}

.login100-form-btn:hover:before {
  opacity: 0;
}

.toggleDiv {
  margin: 15px auto;
  color: black;
}

.modal-content {
  position: fixed;
  display: -webkit-box;
  margin: 100px auto;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 100%;
  pointer-events: auto;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
  outline: 0;
}

.modal-confirm {
  color: #434e65;
  width: 75%;
}
.modal-confirm .modal-content {
  padding: 20px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
}
.modal-confirm .modal-header {
  background: #e85e6c;
  border-bottom: none;
  position: relative;
  text-align: center;
  margin: -20px -20px 0;
  border-radius: 5px 5px 0 0;
  padding: 35px;
}
.modal-confirm h4 {
  text-align: center;
  font-size: 36px;
  margin: 10px 0;
}
.modal-confirm .form-control,
.modal-confirm .btn {
  min-height: 40px;
  border-radius: 3px;
}
.modal-confirm .close {
  position: absolute;
  top: 15px;
  right: 15px;
  color: #fff;
  text-shadow: none;
  opacity: 0.5;
}
.modal-confirm .close:hover {
  opacity: 0.8;
}
.modal-confirm .icon-box {
  color: #fff;
  width: 95px;
  margin: 0px auto;
  height: 95px;
  display: inline-block;
  border-radius: 50%;
  z-index: 9;
  border: 5px solid #fff;
  padding: 15px;
  text-align: center;
}
.modal-confirm .icon-box i {
  font-size: 58px;
  margin: -2px 0 0 -2px;
}
.modal-confirm.modal-dialog {
  margin-top: 80px;
}
.modal-confirm .btn {
  color: #fff;
  border-radius: 4px;
  background: #eeb711;
  text-decoration: none;
  transition: all 0.4s;
  line-height: normal;
  border-radius: 30px;
  margin-top: 10px;
  padding: 6px 20px;
  min-width: 150px;
  border: none;
}
.modal-confirm .btn:hover,
.modal-confirm .btn:focus {
  background: #eda645;
  outline: none;
}

@media (max-width: 576px) {
  .wrap-login100 {
    padding: 55px 15px 37px 15px;
  }
}
</style>
