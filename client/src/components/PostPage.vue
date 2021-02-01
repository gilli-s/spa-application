<template>
  <div class="container">
    <div class="row">
      <section class="col-xs-12">
        <h1>Posts</h1>
        <h3>Какая поебота</h3>
        <section class="panel panel-success" v-if="posts.length">
          <div class="panel-heading">list of posts</div>
          <table class="table table-striped">
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
            <tr v-for="post in posts" :key="post.title" >
              <td>{{post.title}}</td>
              <td>{{post.description}}</td>
            </tr>
          </table>
        </section>
        <section class="panel panel-danger">
          <p>There are no posts ... Lets add one now!</p>
          <div>
            <router-link to="{ name: 'NewPost' }"></router-link>
          </div>
        </section>
      </section>
    </div>
  </div>
</template>

<script>
import PostsService from '@/services/PostsService'
export default {
  name: 'PostsPage',
  data () {
    return {
      posts: []
    }
  },
  methods: {
    async getPosts () {
      const response = await PostsService.fetchPosts()
      this.posts = response.data.posts
    }
  },
  mounted () {
    this.getPosts()
  }
}
</script>
