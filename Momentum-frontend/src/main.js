// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueFire from 'vuefire'

Vue.config.productionTip = false

Vue.use(VueFire);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    apiData: {
      users: [],
      posts: [],
      comments: [],
      photos: [],
    },
    associatedData: [],
  },
  created() {
    return fetch('https://jsonplaceholder.typicode.com/posts/')
      .then(response => response.json())
      .then(json => { this.apiData.posts = json })
      .then(() => fetch('https://jsonplaceholder.typicode.com/users/'))
      .then(response => response.json())
      .then(json => { this.apiData.users = json })
      .then(() => fetch('https://jsonplaceholder.typicode.com/photos/'))
      .then(response => response.json())
      .then(json => { this.apiData.photos = json })
      .then(() => fetch('https://jsonplaceholder.typicode.com/comments/'))
      .then(response => response.json())
      .then(json => { this.apiData.comments = json })
      .then(() => this.associatedData = this.apiData.posts.map(post => {
        const aggregatedObj = {};
        aggregatedObj.post = post;
        aggregatedObj.user = this.apiData.users.find(user => post.userId === user.id);
        aggregatedObj.comment = this.apiData.comments.filter(comment => post.id === comment.postId );
        return aggregatedObj;
      }))
  },
  router,
  components: { App },
  template: '<App v-bind:apiData="apiData" v-bind:associatedData="associatedData"/>'
})
