<template>
  <div class="pt-0.5">
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

  import Header from './views/Header.vue';
  import Footer from './views/Footer.vue';
  import { useStore } from 'vuex';
  import{ ref, onMounted, onUpdated} from 'vue';
  import feather from 'feather-icons';

  const store = useStore();

  onMounted(()=>{
    feather.replace();
  });
  onUpdated(()=>{
    feather.replace();
  });
  
</script>

<style scoped>
[v-cloak]{
  display: none;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
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

.fade-enter-active {
  animation: coming 0.4s;
  animation-delay: 0.2s;
  opacity: 0;
}

.fade-leave-active {
  animation: going 0.4s;
}

@keyframes going {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-10px);
    opacity: 0;
  }
}

@keyframes coming {
  from {
    transform: translateX(-10px);
    opacity: 0;
  }

  to {
    transform: translateX(0px);
    opacity: 1;
  }
}
</style>
