<template>
    <div>
      <!-- App header -->
      <Header class="mb-5 mb-sm-8"></Header>
      <!-- Render active component contents with vue transition -->     
      <transition name="fade" mode="out-in">
			  <router-view :theme="appTheme" />
		  </transition>
      <!-- Scroll to top -->
      <back-to-top
        visibleoffset="500"
        right="30px"
        bottom="20px"
        class="shadow-lg"
      >
        <i data-feather="chevron-up"></i>
      </back-to-top>    
       
      <!-- App footer -->
      <Footer></Footer>
    </div>
</template>
<script lang="ts" setup>
  import Header from './Header.vue';
  import Footer from './Footer.vue';
  import { useStore } from 'vuex';
  import{ ref, onMounted } from 'vue';
  import feather from 'feather-icons';

  const store = useStore();

  onMounted(()=>{
    feather.replace();
  });
</script>

<style scoped>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
  .vue-back-to-top {
    @apply p-2 bg-pink-500 hover:bg-pink-600 text-white transition
          duration-500
          ease-in-out
          transform
          hover:-translate-y-1 hover:scale-110;
    border-radius: 50%;
    font-size: 22px;
    line-height: 22px;
  }
</style>
