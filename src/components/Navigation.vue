<template>
  <header>
    <nav class="container">
      <div class="branding">
        <router-link class="header" to="/">FireBlogs</router-link>
      </div>
      <div class="nav-links">
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
      <ul class="mobile-nav">
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
  data() {
    return {
      mobile: null as null | boolean,
      mobileNav: null as null | boolean,
      windownWidth: null as null | boolean | number,
    }
  },
  methods: {
    checkScreen() {
      this.windownWidth = window.innerWidth;
      if(this.windownWidth <= 750) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    }
  }
});
</script>

<style lang="scss" scoped>
  header { 
    background-color: "fff";
    padding: 0 25px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    z-index: 99;

    .link {
      font-weight: 500;
      padding: 0 8px;
      transition: 0.3s color ease;

      &:hover {
        color: #1eb8b8;
      }
    }

    nav {
      display: flex;
      padding: 25px 0;
      .branding {
        display: flex;
        align-items: center;
        .header {
          font-weight: 600;
          font-size: 24px;
          color: #000;
          text-decoration: none;
        }
      }

      .nav-links {
        position: relative;
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: flex-end;
        
        ul {
          margin-right: 32px;

          .link {
            margin-right: 32px;
          }

          .link:last-child {
            margin-right: 0;
          }
        }
      }
    }
    .menu-icon {
      cursor: pointer;
      position: absolute;
      top: 32px;
      right: 25px;
      height: 25px;
      width: auto;
    }

    .mobile-nav {
      padding: 20px;
      width: 70%;
      max-width: 250px;
      display: flex;
      flex-direction: column;
      position: fixed;
      height: 100%;
      background-color: #303030;
      top: 0;
      left: 0;
      .link {
        padding: 15px 0;
        color: #fff;
      }
    }
  }
</style>