<template>
  <div>
    <Banner class="mb-8 mb-sm-8" />
  </div>
	<div class="container mx-auto custom-font">
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
  .custom-font {
  font-family: Inter;
}
</style>
