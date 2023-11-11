<template>
  <nav id="nav" class="navbar navbar-expand-lg navbar-light bg-light">
    <!-- Header start -->
    <div class="container-fluid">
        <!-- Header menu links and small screen hamburger menu -->
        <div class="">
              <!-- Header logos -->
          <div>
            
            <a href="/" class="navbar-brand custom-font">Personal</a>
            
          </div>
              <!-- Theme switcher small screen -->
              <div>
                
              </div>
              <!-- Small screen hamburger menu -->
              <div>
                  
              </div>

        </div>
        <!-- Header links -->
        <HeaderLinks :showModal="showModal" :isOpen="isOpen" />
        <!-- Header right section buttons -->
    </div>
  </nav>
</template>

<script lang="ts" setup>
    import { useStore } from 'vuex';
    import HeaderLinks from '../components/header/HeaderLinks.vue';
    const store = useStore();
</script>

<style>
  .custom-font{
    font-family: Arial, Helvetica, sans-serif;
  }


</style>