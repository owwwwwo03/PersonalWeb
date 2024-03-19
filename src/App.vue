<template>
  <div>
    <!-- App header -->
    <Header></Header>
    <!-- Render active component contents with vue transition -->
    <!--<router-view :theme="appTheme"/>-->
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <div>
          <component :is="Component"></component>
        </div>        
      </transition>    
    </router-view>
    <!-- Scroll to top -->
    <button @click="topFunction()" class="btn back-to-top btn-lg circular-bg" data-bs-toggle="backtotop">
      <i data-feather="chevron-up"></i>
    </button>
    <!-- App footer -->
    <Footer></Footer>
  </div>
</template>

<script lang="ts" setup>

import Header from '@/views/Header.vue';
import Footer from '@/views/Footer.vue';
import { onMounted, onUpdated } from 'vue';
import feather from 'feather-icons';


const topFunction = () =>{
  document.body.scrollTop =0;
  document.documentElement.scrollTop = 0;
};

onMounted(() => {
  feather.replace();
});
onUpdated(() => {
  feather.replace();
});

</script>

<style scoped>
[v-cloak] {
  display: none;
}
/*
#app {
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
*/
.back-to-top {
  position: fixed;
  bottom: 50px;
  right: 20px;
  transition: transform 0.5s ease-in-out;
}

/* Add Bootstrap classes for shadow and hover effect. */
.back-to-top:hover {
  transform: translateY(-1);
  transform: scale(1.1);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
}

/* You can also style the icon using Bootstrap classes if you want. */
.back-to-top i {
  font-size: 1.5rem;
  vertical-align: middle;
}

.circular-bg {
  background-color: #fff; 
  border-radius: 50%; 
  padding: 12px; 
  border: none; 
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
