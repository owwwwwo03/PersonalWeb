<template>
  <nav class="main-header navbar navbar-expand">
    <!-- Header start -->
    <div class="navbar-nav ml-auto">
        <!-- Header menu links and small screen hamburger menu -->
              <!-- Header logos -->
          <div class="">           
            <a href="/" class="navbar-brand custom-font">Personal</a>           
          </div>
          <!-- Header links -->
          <div class=""> 
            <HeaderLinks :showModal="showModal" :isOpen="isOpen" /> 
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

  .main-header{
    background-color:#ffffff !important;
    color: #4b545c !important;
    border: 0px !important;
  }
  .navbar-nav{
    display: flex;
    gap:4px;
    margin-right: 1rem;
  }
  .custom-font{
    font-family: Arial, Helvetica, sans-serif;
  }


</style>