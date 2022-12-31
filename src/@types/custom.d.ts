declare module '*.png' {
  import { VueConstructor } from 'vue';
  const content: VueConstructor<Vue>;
  export default content;
}