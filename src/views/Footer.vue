<template>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <p>ooo</p>
          <ul class="list-inline">
            <li v-for="social in socials" :key="social.id" class="list-inline-item">
              <a :href="social.url" target="_blank" class="text-primary-dark">
                <i class="icon" :class="social.icon"></i>
                {{ social.name }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import feather from 'feather-icons';
  import 'bootstrap/dist/css/bootstrap.css';
  import { onMounted, reactive, onUpdated } from 'vue';
  
  export default {
    setup() {
      const socials = reactive([
        {
          id: 2,
          name: 'Twitter',
          icon: 'twitter',
          url: 'https://twitter.com',
        },
        {
          id: 3,
          name: 'Medium',
          icon: 'book',
          url: 'https://medium.com',
        },
        {
          id: 4,
          name: 'Instagram',
          icon: 'instagram',
          url: 'https://instagram.com',
        },
      ]);
  
      onMounted(() => {
        feather.replace();
      });
      onUpdated(()=>{
	    feather.replace();
      });
  
      return {
        socials,
      };
    },
  };
  </script>
  
  <style>
  /* 样式可以根据需要添加 */
  </style>
  