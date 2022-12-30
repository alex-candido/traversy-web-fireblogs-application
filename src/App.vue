<template>
  <main class="app-wrapper">
    <div class="app">
      <router-view />
    </div>
  </main>
</template>

<script lang="ts">

import { defineComponent } from "vue";

export default defineComponent({
  name: "app",
  components: {},
  data() {
    return {};
  },
  methods: {},
  watch: {},
});
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Quicksand", sans-serif;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
}

.link {
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  color: black;
}

.link-light {
  color: #fff;
}
</style>

