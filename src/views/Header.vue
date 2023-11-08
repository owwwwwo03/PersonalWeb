<template>
  <nav id="nav" class="navbar navbar-expand-sm container mx-auto">
    <!-- Header start -->
    <div 
      class="max-w-screen-lg xl:max-w-screen-xl navbar navbar-expand-sm flex-sm-row justify-content-between align-items-center my-6"
    >
        <!-- Header menu links and small screen hamburger menu -->
        <div class="d-flex justify-content-between align-items-center px-4 px-sm-0">
            <!-- Header logos -->
            <div>
             <h1>Personal</h1>
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

</style>