<template>
  <div class="container">
    <div class="pt-5 pb-3 border-top border-primary-light">
        <!-- Footer social links -->
        <div class="row justify-content-center mb-4">
            <div class="col-12">
                <h3 class="font-weight-bold text-primary-dark">
                    Follow-me
                </h3>
            </div>
            <div class="col-12">
                <ul class="list-inline">
					<h1>ooo</h1>
                    <li v-for="social in socials" :key="social.id" class="list-inline-item">
                        <a :href="social.url" target="_blank" class="text-gray-400">
                            <i :class="social.icon"></i>
							<i :class="social.name"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <!-- Footer copyright -->
        
    </div>
</div>
</template>

<script lang="ts">
import feather from 'feather-icons';
import 'bootstrap/dist/css/bootstrap.css';
import { onMounted, onUpdated } from 'vue';

const socials =[
	{
          id: 2,
          name: 'Twitter',
          icon: 'twitter',
          url: 'https://twitter.com/anappdesign',
        },
        {
          id: 3,
          name: 'Medium',
          icon: 'book',
          url: 'https://stoman.medium.com/anappdesign',
        },
        {
          id: 4,
          name: 'Instagram',
          icon: 'instagram',
          url: 'https://instagram.com/anappdesign',
        },	
	];

onMounted(()=>{
	feather.replace();
});
onUpdated(()=>{
	feather.replace();
});
</script>

<style>

</style>