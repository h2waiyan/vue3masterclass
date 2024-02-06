<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
  <div class="container">
    <router-view/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import PageHome from '@/components/PageHome.vue'

export default {
  name: 'App'
}
</script>

<style>
@import "assets/style.css"
</style>
