<template>
  <div class="col-large push-top">
    <h1>{{ thread.title }}</h1>
    <post-list :posts="threadPosts" />
    <post-editor @save="addPost" />
  </div>
  <!-- <div v-else>
     <div class="col-ful">
        <h1>This thread does not exist.</h1>
        <router-link :to="{name: 'Home'}">Read some cool threads</router-link>
    </div>
  </div> -->
</template>

<script>
import PostList from "@/components/PostList.vue";
import PostEditor from "@/components/PostEditor.vue";

export default {
  name: "ThreadShow",
  components: {
    PostList,
    PostEditor,
  },
  props: {
    id: {
      required: true,
      type: String,
    },
  },
  computed: {
    threads() {
      return this.$store.state.threads;
    },
    posts() {
      return this.$store.state.posts;
    },
    thread() {
      return this.threads.find((thread) => thread.id === this.id);
    },
    threadPosts() {
      return this.posts.filter((post) => this.thread.posts.includes(post.id));
    },
  },
  methods: {
    addPost(eventData) {
      const post = {
        ...eventData.post,
        threadId : this.id
      };
    this.$store.dispatch('createPost', post)
    },
  },
};
</script>

<style scoped>
</style>
