<template>
  <div class="container mx-auto">
    <div style="height: 50px;"></div>  
      <div class="flex justify-center custom-font">
          <ul class="list-none flex" :class="spaceClass">
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
import { onMounted, reactive, onUpdated, ref, onBeforeUnmount } from 'vue';
import linkedin_logo from '@/assets/linkedin_logo.svg';
import github_logo from '@/assets/github_logo.svg';
import instagram_logo from '@/assets/instagram_logo.svg';

const spaceClass = ref('');

const socials = reactive([
  {
    id: 2,
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/seanyxsu/',
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

const adjustSize = () => {
  const screenWidth = window.innerWidth;
  // Adjust text size based on screen width
  if (screenWidth <= 768) {
    spaceClass.value = 'space-x-4';
  } else {
    spaceClass.value = 'space-x-16';
  }
};


onMounted(() => {
  feather.replace();
  adjustSize();
  window.addEventListener('resize', adjustSize);
});
onUpdated(() => {
  feather.replace();
});
onBeforeUnmount(() => {
  window.removeEventListener('resize', adjustSize);
});


</script>
  
<style>
.custom-font {
  font-family: Inter, Arial, Helvetica, sans-serif;
  font-size: 1.2em;
  font-weight: height; 
}
</style>
  