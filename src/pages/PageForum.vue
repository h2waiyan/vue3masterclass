<template>
    <div class="col-full push-top">
      <!-- <ul class="breadcrumbs">
        <li>
          <a href="/index.html"><i class="fa fa-home fa-btn"></i>Home</a>
        </li>
        <li><a href="/category.html">Discussions</a></li>
        <li class="active"><a href="#">Cooking</a></li>
      </ul> -->

      <div class="forum-header">
        <div class="forum-details">
          <h1>{{forum.name}}</h1>
          <p class="text-lead">{{forum.description }}</p>
        </div>
        <a href="new-thread.html" class="btn-green btn-small">Start a thread</a>
      </div>
    </div>

    <div class="col-full push-top">
      <thread-list :threads="threads" />

      <!-- <div class="pagination">
        <button class="btn-circle" disabled>
          <i class="fa fa-angle-left"></i>
        </button>
        1 of 3
        <button class="btn-circle"><i class="fa fa-angle-right"></i></button>
      </div> -->
    </div>
</template>

<script>
import ThreadList from "@/components/ThreadList.vue";

export default {
  name: "PageForum",
  components: {
    ThreadList,
  },
  props: {
    id: {
      required: true,
      type: String,
    },
  },
  computed: {
    forum() {
      return this.$store.state.forums.find((forum) => forum.id === this.$route.params.id);
    },
    threads() {
      return this.$store.state.threads.filter((thread) => thread.forumId === this.$route.params.id);
    }
  },
};
</script>

<style scoped>
</style>