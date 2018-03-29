<template>
  <header>
    <nav class="navBar"> 
        <nav class="wrapper">   
            <div class="logo"> <i class="material-icons" style="font-size:60px; line-height: 1.5;">landscape</i><h2 class="brand">MOMENTUM</h2></div><!-- Logo -->  
            <input type="checkbox" id="menu-toggle" /> 
             <label for="menu-toggle" class="label-toggle"></label>
              <ul class="nav-bar">
            <li><a href="http://localhost:8080/#/">Home</a></li>
            <li><a href="http://localhost:8080/#/people">People</a></li>
            <li><a href="http://localhost:8080/#/photos">Photos</a></li>
            <li><a href="#">Contact</a></li>
            <li v-if="!value"><a href="http://localhost:8080/#/login">Log In</a></li>
            <li v-else><a href="http://localhost:8080/#/login" @click="signOut(); $emit('signedOut')">Sign Out</a></li>
        </ul>  
        </nav>
    </nav>
  </header>
</template>
<script>
import firebase from 'firebase';

export default {
  name: "NavMenu",
  props: ['value'],
  methods: {
      signOut: function() {
          firebase.auth().signOut().then(() => this.$router.replace('/login'));
      },
  },
};
</script>
<style>
@import url(https://fonts.googleapis.com/css?family=Oswald:400,700);
body {
  font-family: "Oswald", sans-serif;
  line-height: 2em;
  text-transform: uppercase;
}

h1 {
  font-size: 3em;
  padding: 3em 0 1em 0;
}

.navBar {
  position: fixed;
  min-width: 100%;
  background-color: #262626;
  z-index: 1000;
}

.brand {
  width: 50%;
  margin: -10px 8px 0 8px;
  display: inline-block;
  height: 100%;
  vertical-align: middle;
  font-size: 22px;
}

.logo {
  font-size: 24px;
  color: #fff;
  display: inline-block;
  height: 100%;
}

.wrapper {
  max-width: 960px;
  padding: 0 0 0 2%;
  height: 76.99px;
}

nav ul {
  display: flex;
  list-style-type: none;
  width: 65%;
  height: 100%;
  right: 0;
  margin: 0;
  position: absolute;
}
nav ul a {
  line-height: 4.25;
  color: white;
  text-decoration: none;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
}
nav ul a:hover {
  text-decoration: none;
  color: #fff;
}
nav > ul > li:nth-child(1) {
  border-bottom: 6px solid #8f3938;
  transition: background 0.9s;
}

nav > ul > li:hover:nth-child(1) {
  background: #8f3938;
}

nav > ul > li:nth-child(2) {
  border-bottom: 6px solid #ffaa00;
  transition: background 0.9s;
}

nav > ul > li:hover:nth-child(2) {
  background: #ffaa00;
}

nav > ul > li:nth-child(3) {
  border-bottom: 6px solid #00c95d;
  transition: background 0.9s;
}

nav > ul > li:hover:nth-child(3) {
  background: #00c95d;
}

nav > ul > li:nth-child(4) {
  border-bottom: 6px solid #294895;
  transition: background 0.9s;
}

nav > ul > li:hover:nth-child(4) {
  background: #294895;
}

nav > ul > li:nth-child(5) {
  border-bottom: 6px solid #572797;
  transition: background 0.9s;
}

nav > ul > li:hover:nth-child(5) {
  background: #572797;
}
nav li {
  display: inline-block;
  width: 20%;
}
nav #menu-toggle {
  display: none;
}
nav .label-toggle {
  display: none;
}
nav .wrapper {
  align-items: center;
  display: flex;
  justify-content: space-between;
}
@media screen and (max-width: 768px) {
  nav nav ul a {
    color: #fff;
    line-height: 0;
  }
  nav ul {
    background: #262626;
    display: block;
    height: 0;
    list-style-type: none;
    opacity: 0;
    text-align: center;
    width: 100%;
    visibility: hidden;
  }
  nav li {
    border-bottom: 2px solid;
    color: #fff;
    display: block;
    font-size: 1.5em;
    padding: 2em 0;
    width: 100%;
    height: 5%;
  }
  nav #menu-toggle:checked ~ ul {
    opacity: 1;
    height: 100vh;
    visibility: visible;
    padding: 0;
    margin-top: -11px;
  }
  nav .label-toggle {
    background: linear-gradient(
      to bottom,
      #11998e 0%,
      #38ef7d 20%,
      transparent 20%,
      transparent 40%,
      #11998e 40%,
      #38ef7d 60%,
      transparent 60%,
      transparent 80%,
      #11998e 80%,
      #38ef7d 100%
    );

    cursor: pointer;
    display: block;
    float: right;
    height: 35px;
    margin: 1.5em 1em 0 0;
    width: 35px;
  }
  nav .wrapper {
    display: block;
    padding: 0;
  }

  .brand {
    margin: -10px 8px 0 8px;
    display: inline-block;
    height: 100%;
    vertical-align: middle;
  }

  .logo {
    font-size: 24px;
    color: #fff;
    display: inline-block;
    height: 100%;
  }
}
</style>
