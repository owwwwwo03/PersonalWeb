<template>
  <Banner class="mb-5 mb-sm-8" />
	<div class="container mx-auto">
    <About class="mb-5 mb-sm-8"/>
    <Projects class="mb-5 mb-sm-8" />
    <Contact class="mb-5 mb-sm-8"/>
  </div>	
    
</template>
<script lang="ts" setup>
   import Banner from '@/components/banner_/Banner.vue';
   import About from '@/components/about/About.vue';
   import Projects from '@/components/projects/Projects.vue';
   import Contact from '@/components/contact/Contact.vue';
</script>

<style scoped>
  
</style>
