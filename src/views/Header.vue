<template>
  <nav class="main-header navbar navbar-expand">
    <!-- Header start -->
    <div class="d-flex p-3 justify-content-between align-items-center w-100">
      <!-- Header menu links and small screen hamburger menu -->
      <!-- Header logos -->
      <div class="d-flex">
        <a href="/" class="navbar-brand custom-font">Home</a>
      </div>
      <!-- Header links -->
      <HeaderLinks :showModal="showModal" :isOpen="isOpen" />
      <div class="d-flex p-2"> 
        <a> Language</a>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex';
import HeaderLinks from '../components/header/HeaderLinks.vue';
const store = useStore();
</script>

<style scoped>
.main-header {
  background-color: #ffffff !important;
  color: #4b545c !important;
  border: 0px !important;
}

.custom-font {
  font-family: Arial, Helvetica, sans-serif;
}
</style>