<template>
  <div class="blog-wrapper">
    <div class="blog-content">
      <h2 v-if="post.welcomeScreen">{{post.title}}</h2>
      <h2 v-else>{{post.title}}</h2>
      <p v-if="post.welcomeScreen">{{post.blogPost}}</p>
      <p v-else>{{post.blogHTML}}</p>
      <router-link class="link link-light" v-if="post.welcomeScreen" to="#">
        Login/Register
        <img class="arrow arrow-light" src="../assets/Icons/arrow-right-light.png" alt="youTube"/>
      </router-link>
      <router-link class="link link-light" v-else to="#">
        Login/Register
        <img class="arrow arrow-light" src="../assets/Icons/arrow-right-light.png" alt="youTube"/>
      </router-link>
    </div>
    <div class="blog-photo">
      <img
        v-if="post.welcomeScreen"
        :src="require(`../assets/blogPhotos/${post.photo}.jpg`)"
        alt=""
      />
      <img 
        v-else 
        :src="require(`../assets/blogPhotos/${post.blogCoverPhoto}.jpg`)" 
        alt="" 
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'blogPost',
  props: ["post"],
});
</script>

<style lang="scss" scoped>
  .link-light img{
    height: 20px;
    widows: 20px;
  }
</style>
