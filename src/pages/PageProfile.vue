<template>
  <div class="container">
    <div class="flex-grid">
      <div class="col-3 push-top">

        <user-profile-card-vue :user="user" />
        
        <p class="text-xsmall text-faded text-center">
          Member since june 2003, <app-date :timestamp="user.lastVisitAt" />
        </p>

        <div class="text-center">
          <hr />
          <a href="edit-profile.html" class="btn-green btn-small"
            >Edit Profile</a
          >
        </div>
      </div>

      <div class="col-7 push-top">
        <div class="profile-header">
          <span class="text-lead"> {{ user.name }}'s recent activity </span>
          <a href="#">See only started threads?</a>
        </div>

        <hr />

        <post-list :posts="user.posts" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PostList from "@/components/PostList.vue";
import UserProfileCardVue from "@/components/UserProfileCard.vue";

export default {
  name: "PageProfile",
  components: {
    PostList,
    UserProfileCardVue
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapGetters({ user: "authUser" })
  },
};
</script>


<style scoped>
</style>