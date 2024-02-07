<template>
  <div class="post-list" v-for="post in posts" :key="post.id">
    <div class="post">
      <div class="user-info">
        <a href="#" class="user-name">{{ userById(post.userId).name }}</a>
        <a href="profile.html#profile-details">
          <img
            class="avatar-large"
            :src="userById(post.userId).avatar"
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
              {{ post.text }}
            </p>
          </div>

          <div class="post-date text-faded">
            <app-date :timestamp="post.publishedAt" />
          </div>

          <!-- </blockquote> -->
        </div>
        <!-- <a class="edit-post link-unstyled"><i class="fa fa-pencil"></i></a> -->
      </div>
    </div>
  </div>
</template>
<script>
import sourceData from "@/data.json";

export default {
  data() {
    return {
      users: sourceData.users,
    };
  },
  props: {
    posts: {
      required: true,
      type: Array,
    },
  },
  methods: {
    userById(userId) {
      return this.users.find((u) => u.id === userId);
    }
  },
};
</script>

<style scoped>
</style>