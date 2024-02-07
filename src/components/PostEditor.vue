<template>
    <div class="col-ful">
      <form @submit.prevent="save">
        <div class="form-group">
          <textarea
            class="form-input"
            v-model="text"
            name=""
            id=""
            col="30"
            rows="10"
            placeholder="What are your thoughts?"
          ></textarea>
        </div>
        <div class="form-actions">
          <button type="submit" class="btn-blue">Post</button>
        </div>
      </form>
    </div>
</template>

<script>
import PostList from "@/components/PostList.vue";

export default {
  name: "PostEditor",
  data() {
    return {
      text: "",
    };
  },
  methods: {
    save() {
      const post = {
        text: this.text,
        publishedAt: Math.floor(Date.now() / 1000),
        userId: "L664y3qZSubDbT1R6npC0EEybJ73",
      };
      this.$emit("save", {post});
      this.text = ""
    },
  },
};
</script>

<style scoped>

</style>
