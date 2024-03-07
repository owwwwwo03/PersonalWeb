<template>
  <div class="container mx-auto">
    <div style="height: 50px;"></div>  
      <div class="flex justify-center custom-font">
          <ul class="list-none flex space-x-16">
            <li v-for="social in socials" :key="social.id">
              <img :src="social.image" width="30" style="display: inline-block;" class="mr-2">
              <a :href="social.url" target="_blank" style="display: inline-block;">
                {{ social.name }}
              </a>
            </li>           
        </ul>     
      </div>
      <div style="height: 20px;"></div>
  </div>
</template>
  
<script lang="ts" setup>
import feather from 'feather-icons';
import { onMounted, reactive, onUpdated } from 'vue';

const socials = reactive([
  {
    id: 2,
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/yi-xiang-su-898396169/',
    image: linkedin_logo
  },
  {
    id: 3,
    name: 'GitHub',
    url: 'https://github.com/owwwwwo03',
    image: github_logo
  },
  {
    id: 4,
    name: 'Instagram',
    url: 'https://instagram.com',
    image: instagram_logo
  },
]);

onMounted(() => {
  feather.replace();
});
onUpdated(() => {
  feather.replace();
});



</script>
  
<style>
.custom-font {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.2em;
  font-weight: height; 
}
</style>
  