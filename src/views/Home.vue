<template>
	<Banner class="mb-5 mb-sm-8" />
	<div class="container mx-auto">
        <!-- Projects -->
		<ProjectsGrid />
    </div>	
    
</template>
<script lang="ts" setup>
   import Banner from './Banner.vue';
   import ProjectsGrid from '../components/projects/ProjectsGrid.vue';
</script>

<style scoped>
  
</style>
