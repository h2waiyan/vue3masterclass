<template>
  <div class="col-large push-top">
    <h1>{{ thread.title }}</h1>
    <div class="post-list" v-for="postId in thread.posts" :key="postId">
      <div class="post">
        <div class="user-info">
          <a href="#" class="user-name">{{
            userById(postById(thread.firstPostId).userId).name
          }}</a>
          <a href="profile.html#profile-details">
            <img
              class="avatar-large"
              :src="userById(postById(thread.firstPostId).userId).avatar"
              alt=""
            />
          </a>

          <p class="desktop-only text-small">107 posts</p>
        </div>
        <div class="post-content">
          <div>
            <!-- <blockquote class="small"> -->
            <!-- <div class="author">
                  <a href="/user/robin" class=""> robin</a>
                  <span class="time">{{postById(postId).publishedAt}}</span>
                  <i class="fa fa-caret-down"></i>
                </div> -->

            <div class="quote">
              <p>
                {{ postById(postId).text }}
              </p>
            </div>
            <!-- </blockquote> -->
          </div>
          <!-- <a class="edit-post link-unstyled"><i class="fa fa-pencil"></i></a> -->
        </div>
      </div>
    </div>
  </div>
  <!-- <div v-else>
     <div class="col-ful">
        <h1>This thread does not exist.</h1>
        <router-link :to="{name: 'Home'}">Read some cool threads</router-link>
    </div>
  </div> -->
</template>

<script>
import sourceData from "@/data.json";
import NotFound from "@/components/NotFound.vue"

export default {
  name: "PageHome",
  data() {
    return {
      threads: sourceData.threads,
      posts: sourceData.posts,
      users: sourceData.users,
    };
  },
  props: {
    id: {
        required: true,
        type: String
    }
  },
  computed: {
    thread(){
        return this.threads.find(thread => thread.id === this.id);
    }
  },
  methods: {
    postById(postId) {
      return this.posts.find((p) => p.id === postId);
    },
    userById(userId) {
      return this.users.find((u) => u.id === userId);
    },
  },
};
</script>

<style scoped>
</style>
