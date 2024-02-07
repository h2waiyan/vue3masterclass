<template>
  <h1>{{category.name}}</h1>
  <forum-list
    :forums="getForumsForCategory(category)"
    :title="category.name"
  ></forum-list>
</template>

<script>
import ForumList from "@/components/ForumList.vue";

export default {
  props: {
    id: {
      required: true,
      type: String,
    },
  },
  components: {
    ForumList
  },
  computed: {
    category () {
        return this.$store.state.categories.find((category) => category.id === this.id)
    }
  },
  methods: {
    getForumsForCategory(category) {
      return this.$store.state.forums.filter(forum => forum.categoryId === this.id)
    },
  }
};
</script>

<style scoped>
</style>