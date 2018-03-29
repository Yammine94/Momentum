<template>
  <article class="home page">
    
    <div class="container">

      <div v-if="popUpModal" id="myModal" class="modal fade" role="dialog">
        <div class="modal-dialog">

          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" @click="popUpModal = false">&times;</button>
              <h4 class="modal-title">Create a New Post</h4>
            </div>
            <div class="modal-body">
              <div class="form-group">
                <label for="title">Title:</label>
                <input type="text" class="form-control" id="title" v-model="postTitle" required>
              </div>
              <div class="form-group">
                <label for="postbody">Post Body:</label>
                <textarea class="form-control" rows="4" id="postbody" v-model="postBody" required></textarea>
              </div>
            </div>
            <div class="modal-footer">
              <button type="submit" class="btn btn-success" data-dismiss="modal" @click.prevent="addUserPost()">Add Post</button>
            </div>
          </div>

        </div>
      </div>

      <div class="row">

        <div class="col-md-4" style="margin-top: 100px">


          <div class="card my-4">
            <h5 class="card-header">Search Posts by content</h5>
            <div class="card-body">
              <div class="input-group">
                <input v-model="searchString" type="text" class="form-control" placeholder="Search for...">
                <span class="input-group-btn">
                </span>
              </div>
            </div>
          </div>

        </div>

        <div class="col-lg-8">

          <h1 v-if="isLoggedIn" class="mt-4" style="padding-top: 85px; color: #00c95d">Your Posts</h1>

          <div v-if="isLoggedIn" class="card" style="margin: 25px auto;"
          v-for="obj in userPosts" :key="obj.post.id">
            <div class="card-header">
              {{obj.post.title}}
            </div>
            <div class="card-block">
              <h4 class="card-title" style="text-transform: none">Author: {{obj.user.name}}</h4>
              <p class="card-text">{{obj.post.body}}</p>
              <h5 class="card-header" style="background-color: #00c95d;">Comments</h5>
              <ul class="list-group">
                <li class="list-group-item" style="background-color: whitesmoke;"
                v-for="comment in obj.comment" :key="comment.id">{{comment.body}}</li>
              </ul>
              <div class="card my-4">
                <h5 class="card-header" style="background-color: #ffaa00;">Leave a Comment:</h5>
                <div class="card-body">
                  <form>
                    <div class="form-group">
                      <textarea class="form-control" rows="1" v-model="commentToAdd"></textarea>
                    </div>
                    <button class="btn btn-success" style="background-color: #ffaa00;"
                    @click="addComment(obj)">Add Comment</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <button v-if="isLoggedIn" class="btn btn-primary" @click="popUpModal = !popUpModal">Add Post</button>

          <h1 class="mt-4" style="padding-top: 85px; color: #00c95d">Browse Posts</h1>

          <hr>

          <div class="card" style="margin: 25px auto;"
          v-for="obj in searchPosts" :key="obj.post.id">
            <div class="card-header">
              {{obj.post.title}}
            </div>
            <div class="card-block">
              <h4 class="card-title" style="text-transform: none">Author: {{obj.user.name}}</h4>
              <p class="card-text">{{obj.post.body}}</p>
              <h5 class="card-header" style="background-color: #00c95d;">Comments</h5>
              <ul class="list-group">
                <li class="list-group-item" style="background-color: whitesmoke;"
                v-for="comment in obj.comment" :key="comment.id">{{comment.body}}</li>
              </ul>
              <div class="card my-4">
                <h5 class="card-header" style="background-color: #ffaa00;">Leave a Comment:</h5>
                <div class="card-body">
                  <form>
                    <div class="form-group">
                      <textarea class="form-control" rows="1" v-model="commentToAdd"></textarea>
                    </div>
                    <button class="btn btn-success" style="background-color: #ffaa00;"
                    @click="addComment(obj)">Add Comment</button>
                  </form>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  </article>
</template>

<script>
import Vue from "vue";

export default {
  name: "Home",
  data() {
    return {
      searchString: '',
      commentToAdd: '',
      popUpModal: false,
      userPosts: [],
      postTitle: '',
      postBody: '',
      Ids: 1000,
    };
  },
  methods: {
    addComment: function(obj) {
      obj.comment.push({
      body: this.commentToAdd,
      id: obj.comment[obj.comment.length - 1].id + 100,
      postId: obj.comment[0].postId,
      })
    },
    addUserPost: function() {
      this.Ids += 1;
      this.userPosts.push({
        user: {
          id: this.Ids,
          name: "Me",
        },
        post: {
          id: this.Ids,
          title: this.postTitle,
          body: this.postBody
        },
        comment: {
          id: this.Ids,
        }
      });
      this.popUpModal = false;
    },
  },
  computed:{
    searchPosts: function() {
      return this.associatedData.filter(obj => obj.post.body.toLowerCase().includes(this.searchString.toLowerCase()));
    },
  },
  props: ["apiData", "associatedData", "isLoggedIn"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  padding-top: 54px;
}

.modal-header .close {
  margin: 0;
  padding: 0;
}

.modal-header {
  justify-content: unset;
}

#myModal {
  opacity: 1;
  display: block;
}

.modal-title {
  margin-left:  40px;
}

@media (min-width: 992px) {
  body {
    padding-top: 56px;
  }
}
*{color: black}
h1,
h2 {
  font-weight: normal;
}

a {
  color: #42b983;
}

.page {
    position: absolute;
    width: 100%;
  }
</style>
