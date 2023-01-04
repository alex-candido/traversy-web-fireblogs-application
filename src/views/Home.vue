<template>
  <div class="home">
    <BlogPost :post="welcomeScreen"/>
    <BlogPost 
      :post="post"
      v-for="(post, index) in sampleBlog"
      :key="index"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BlogPost from "../components/BlogPost.vue";
import { SampleBlogProps } from '../interfaces/SampleBlog';
import { WelcomeScreenProps } from '../interfaces/WelcomeScreen';

export default defineComponent({
  name: 'HomeView',
  components: {
    BlogPost
  },
  data() {
    return {
      welcomeScreen: {
        title: "Welcome!",
        blogPost:
          "Weekly blog articles with all things programming including HTML, CSS, JavaScript and more. Register today to never miss a post!",
        welcomeScreen: true,
        photo: "coding",
      } as WelcomeScreenProps,
      sampleBlog: [
        {
          title: "This is a Filler Title!",
          blogHTML:
            "This is a filler blog post title!",
          blogCoverPhoto: "beautiful-stories",
        },
        {
          title: "This is a Filler Title!",
          blogHTML:
            "This is a filler blog post title!",
          blogCoverPhoto: "designed-for-everyone",
        }
      ] as SampleBlogProps[]
    };
  }
});
</script>
