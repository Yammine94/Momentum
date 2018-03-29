<template>
  <main id="app">
    <NavMenu v-model="isLoggedIn" v-on:signedOut="isLoggedIn = false" />
    <transition name="router-anim">
      <router-view
      v-on:loggedIn="isLoggedIn = true"
      v-model="isLoggedIn"
      :apiData="apiData"
      :isLoggedIn="isLoggedIn"
      :associatedData="associatedData"/>
    </transition>
  </main>
</template>

<script>
import Firebase from "firebase";
import { dbConfig } from "../config/keys";
import NavMenu from "@/components/NavMenu";

const app = Firebase.initializeApp(dbConfig);
const db = app.database();
const refObject = db.ref("testData");

export default {
  name: "App",
  props: ['apiData', 'associatedData'],
  firebase: {
    fbData: refObject
  },
  data: () => ({
    isLoggedIn: false,
}),
  methods: {
  },
  mounted()  {
  },
  components: {
    NavMenu
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
body {
  margin: 0;
  padding: 0;
  height: 100vh;
  background: #232526; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    90deg,
    rgba(5, 4, 14, 1) 0%,
    rgba(70, 68, 68, 1) 50%,
    rgba(5, 4, 14, 1) 100%
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: rgb(5, 4, 14);
  background: linear-gradient(
    90deg,
    rgba(5, 4, 14, 1) 0%,
    rgba(70, 68, 68, 1) 50%,
    rgba(5, 4, 14, 1) 100%
  );
}
.router-anim-leave-active {
  animation: going 1s;
}

.router-anim-enter-active {
  animation: coming 1s;
  opacity: 1;
}

@keyframes going {
  from {
    transform: translateX(0px);
  }
  to {
    transform: translateX(-50px);
    opacity: 0;
  }
}

@keyframes coming {
  from {
    transform: translateX(-50px);
    opacity: 0;
  }
  to {
    transform: translateX(0px);
    opacity: 1;
  }
}
</style>
