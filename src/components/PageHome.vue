<template>
  <h1>Hello from Home Page</h1>
  <div class="col-large push-top" v-for="thread in threads" :key="thread.id">
    <h2>{{ thread.title }}</h2>
    <div class="post-list">
        <div class="post" v-for="postId in thread.posts" :key="postId">
            <div class="user-info">
                <a class="user-name">{{userById(postById(postId).userId).name}}</a>
                <p>{{postById(postId).text}}</p>
                <img class="avatar-large" :src="userById(postById(postId).userId).avatar" alt="profile_img">
                <p>{{postById(postId).publishedAt}}</p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import sourceData from '@/data.json'

export default {
  name: 'PageHome',
  data () {
    return {
      threads: sourceData.threads,
      posts: sourceData.posts,
      users: sourceData.users
    }
  },
  methods: {
    postById (postId) {
      return this.posts.find(p => p.id === postId)
    },
    userById (userId) {
      return this.users.find(u => u.id === userId)
    }
  }
}
</script>

<style scoped>
</style>
