<template>
  <forum-list
    v-for="category in categories"
    :key="category.id"
    :forums="getForumsForCategory(category)"
    :title="category.name"
    :category-id="category.id"
  ></forum-list>
</template>

<script>
import ForumList from "@/components/ForumList.vue";

export default {
  props: {
    categories: {
      type: Array,
      required: true,
    },
  },
  components: {
    ForumList,
  },
  methods: {
    getForumsForCategory(category) {
      return this.$store.state.forums.filter(forum => forum.categoryId === category.id)
    },
  }
};
</script>

<style scoped>
</style>