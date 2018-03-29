<template>
  <main class="photos page" style="padding: 0 15px;">
    <section v-if="isLoggedIn">
      <div class="card">
        <div class="card-header">
          My Photos
        </div>
        <div class="card-body">
          <figure v-for="image in userItems" :key="image.id">
             <a :href="image.thumbnailUrl"><img :alt="image.id" :title="image.thumbnailUrl" :src="image.thumbnailUrl"></a>
          </figure>
          <label>Upload Image Url</label>
          <input style="margin-bottom: 15px; border: 1px solid black"
          v-model="fileToUpload" type="link" class="form-control-file" id="exampleInputFile" placeholder="Image Url" aria-describedby="fileHelp">
          <button class="btn btn-primary" @click="addPhoto()">
            Add Photos
          </button>
        </div>
      </div>
    </section>
     <section>
         <figure v-for="image in pics" :key="image.id">
             <a :href="image.thumbnailUrl"><img :alt="image.id" :title="image.thumbnailUrl" :src="image.thumbnailUrl"></a>
             <figcaption>{{image.title}}</figcaption>
         </figure>
     </section>
    </main>
</template>

<script>
import Vue from "vue";
const LOAD_NUM = 20;

export default {
  name: "Photos",
  props: ["apiData", "isLoggedIn"],
  data: function() {
    return {
      pics: [],
      userItems: [],
      fileToUpload: null,
      ids: 1000,
    };
  },
  methods: {
    addPhoto: function() {
      if(!this.fileToUpload) return;
      this.ids += 1;
      this.userItems.push({
        src: this.fileToUpload,
        thumbnailUrl: this.fileToUpload,
        id: this.ids,
      })
    },
  },
  mounted: function() {
  this.pics = Vue.util.extend({}, this.apiData.photos.splice(0,100))
    }
};
</script>

<style scoped>
.page {
  position: absolute !important;
  width: 100%;
  height: 100vh;
}

body {
  height: 100vh;
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
}

section {
  width: 100%;
  box-shadow: 0 0 10px 2px #ccc;
  padding: 1rem 0;
  margin: 100px auto;
}
figure {
  width: calc(100% / 4);
  float: left;
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
