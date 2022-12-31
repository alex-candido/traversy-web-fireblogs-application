<template>
  <header>
    <nav class="container">
      <div class="branding">
        <router-link to="/">FireBlogs</router-link>
      </div>
      <div>
        <ul>
            <router-link class="link" to="/">Home</router-link>
            <router-link class="link" to="/">Blogs</router-link>
            <router-link class="link" to="/">Create Post</router-link>
            <router-link class="link" to="/">Login/Register</router-link>
        </ul>
      </div>
    </nav>
    <img class="menu-icon" src="../assets/Icons/bars-regular.png" alt="logo">
    <transition name="mobile-nav">
      <ul>
        <router-link class="link" to="/">Home</router-link>
        <router-link class="link" to="/">Blogs</router-link>
        <router-link class="link" to="/">Create Post</router-link>
        <router-link class="link" to="/">Login/Register</router-link>
      </ul>
    </transition>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Navigation",
  components: {
  },
});
</script>

<style>
  .menu-icon {
    cursor: pointer;
    position: absolute;
    top: 32px;
    right: 25px;
    height: 25px;
    width: auto;
  }
</style>