<template>
    <div>
      <Header></Header>
      <h1>你好</h1>
      <Footer></Footer>
    </div>
</template>
<script lang="ts" setup>
  import Header from './Header.vue';
  import Footer from './Footer.vue';
  import { useStore } from 'vuex';
  import{ref,onMounted} from 'vue';

  const store = useStore();

  onMounted(()=>{

  });
</script>

<style scoped>

</style>
