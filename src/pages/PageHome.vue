<template>
  <h1>Welcome to Htoo Vue Forum</h1>
  <forum-list :forums="forums" />
</template>

<script>
import sourceData from "@/data.json";
import ForumList from "@/components/ForumList.vue";

export default {
  components: {
    ForumList,
  },
  data() {
    return {
      forums: sourceData.forums,
    };
  },
};
</script>

<style scoped>
</style>
