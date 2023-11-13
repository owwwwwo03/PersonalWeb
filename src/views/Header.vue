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
      <div class="dropdown">
        <button data-feather="globe" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown"
          aria-expanded="false">          
        </button>
        <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
          <li><a class="dropdown-item" href="#">English</a></li>
          <li><a class="dropdown-item" href="#">繁體中文</a></li>
          <li><a class="dropdown-item" href="#">日本語</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import feather from 'feather-icons';
import { useStore } from 'vuex';
import { onMounted, reactive, onUpdated } from 'vue';
import HeaderLinks from '../components/header/HeaderLinks.vue';
const store = useStore();

onMounted(() => {
  feather.replace();
});
onUpdated(() => {
  feather.replace();
});

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