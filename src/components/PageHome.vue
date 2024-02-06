<template>
  <h1>Welcome to Htoo Vue Forum</h1>
  <ThreadList :threads="threads"/>
</template>

<script>
import sourceData from '@/data.json'
import ThreadList from '@/components/ThreadList.vue'

export default {
  components: {
    ThreadList
  },
  data() {
    return {
      threads: sourceData.threads
    }
  }
}
</script>

<style scoped>
</style>
