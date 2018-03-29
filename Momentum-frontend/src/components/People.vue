<template>
  <main class="photos page" style="padding: 0 15px;">
     <section>
         <figure v-for="user in apiData.users" :key="user.id">
             <div class="card" style="min-height: 580px;">
                <h1>{{user.name}}</h1>
                <p class="title">{{user.email}}</p>
                <p class="title">{{user.phone}}</p>
                <p class="title">{{user.website}}</p>
                <p class="title"><strong>Company Information</strong></p>
                <ul style="list-style-type: none; text-align: left">
                    <li>Company Name: {{user.company.name}}</li>
                    <li>Catch Phrase: {{user.company.catchPhrase}}</li>
                </ul>
                <p class="title"><strong>Personal Information</strong></p>
                <ul style="list-style-type: none; text-align: left">
                    <li>City of Residence: {{user.address.city}}</li>
                    <li>Address: {{user.address.street}}, {{user.address.suite}}, {{user.address.zipcode}}</li>
                </ul>
                
                </div>
         </figure>
     </section>
    </main>
</template>

<script>
import Vue from "vue";
const LOAD_NUM = 20;

export default {
  name: "People",
  props: ["apiData"],
  data: function() {
    return {};
  },
  methods: {
    handleScroll() {
      console.log("scrolling");
    }
  },
  created() {
    document.body.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    document.body.removeEventListener("scroll", this.handleScroll);
  },
  mounted: function() {}
};
</script>

<style scoped>
.page {
  position: absolute !important;
  width: 100%;
  height: 100vh;
}

li {
  margin-left: 10px;
}

body {
  height: 100vh;
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
}

h1 {
  padding: 1rem;
  font-size: 20px !important;
}

.card {
  background: wheat;
}

section {
  width: 100%;
  box-shadow: 0 0 10px 2px #ccc;
  padding: 1rem 0;
  margin: 100px auto;
}
figure {
  width: calc(100% / 3);
  float: left;
  padding: 10px;
  /* position: relative; */
  margin-bottom: 1rem;
}
section::after,
section::before {
  content: "";
  display: block;
}
section::after {
  clear: both;
}
figure a {
  display: block;
  height: 100%;
  width: calc(100% - 2rem);
  margin-left: 1rem;
}
figure img {
  width: 100%;
  vertical-align: middle;
  margin-bottom: 0;
}
figcaption {
  background: #f39f3f;
  height: 10vh;
  color: #fff;
  text-align: center;
  padding: 0.7rem;
  margin: 0 1rem;
}
* {
  box-sizing: border-box;
}

@media only screen and (min-width: 1025px) {
  .figure {
    width: calc(100% / 3);
  }
}

@media only screen and (max-width: 1024px) {
  html {
    font-size: 14px;
  }

  figure {
    width: calc(100% /3);
  }
}
@media only screen and (max-width: 840px) {
  html {
    font-size: 12px;
  }
  figure {
    width: calc(100% /3);
  }
}
@media only screen and (max-width: 640px) {
  html {
    font-size: 11px;
  }
  figure {
    width: calc(100% /2);
  }
}
@media only screen and (max-width: 400px) {
  html {
    font-size: 10.5px;
  }
  figure {
    width: 100%;
  }
}
</style>
