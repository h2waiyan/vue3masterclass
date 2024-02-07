<template>
  <div class="col-full">
    <div class="forum-list">
      <h2 class="list-title">
        <router-link v-if="categoryId" :to="{name : 'Category', params: {id : categoryId }}">{{title}}</router-link>
        <span v-else>{{title}}</span>
      </h2>

      <div class="forum-listing" v-for="forum in forums" :key="forum.id">
        <div class="forum-details">
          <router-link
            class="text-xlarge"
            :to="{ name: 'Forum', params: { id: forum.id } }"
            >{{ forum.name }}</router-link
          >

          <p>{{ forum.description }}</p>
        </div>

        <div class="threads-count">
          <p class="count">{{ forum.threads ? forum.threads.length : 0  }}</p>
          {{ forum.threads?.length == 1  ? "thread" : "threads" }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    forums: {
      required: true,
      type: Array,
    },
    title: {
      type: String,
      default: "Forums"
    },
    categoryId: {
      type: String,
      required: false
    }
  },
};
</script>

<style scoped>
</style>
