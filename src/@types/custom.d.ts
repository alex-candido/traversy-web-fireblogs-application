declare module '*.svg' {
  import { VueConstructor } from 'vue';
  const content: VueConstructor<Vue>;
  export default content;
}