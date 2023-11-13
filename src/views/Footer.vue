<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <ul class="list-inline">
          <li v-for="social in socials" :key="social.id" class="list-inline-item">
            <a :href="social.url" target="_blank" class="nav-link custom-font">
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
import { useStore } from 'vuex';
import { onMounted, reactive, onUpdated } from 'vue';
const store = useStore();

export default {
  setup() {
    const socials = reactive([
      {
        id: 2,
        name: 'LinkedIn',
        url: 'https://twitter.com',
      },
      {
        id: 3,
        name: 'GitHub',
        url: 'https://medium.com',
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

    return {
      socials,
    };
  },
};
</script>
  
<style>
.custom-font {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
  