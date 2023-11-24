<template>
  <div class="container mx-auto">  
      <div class="flex justify-center">
        <ul class="list-none flex space-x-4">
          <li v-for="social in socials" :key="social.id">
            <a :href="social.url" target="_blank" class="text-500 hover:text-blue-700">
              {{ social.name }}
            </a>
          </li>
        </ul>
      </div>
  </div>
</template>
  
<script lang="ts" setup>
import feather from 'feather-icons';
import { useStore } from 'vuex';
import { onMounted, reactive, onUpdated } from 'vue';
const store = useStore();

const socials = reactive([
  {
    id: 2,
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/yi-xiang-su-898396169/',
  },
  {
    id: 3,
    name: 'GitHub',
    url: 'https://github.com/owwwwwo03',
  },
  {
    id: 4,
    name: 'Instagram',
    url: 'https://instagram.com',
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
}
</style>
  