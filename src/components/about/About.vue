<template>
	<div class="text-left ml-36">
		<h1 class="text-6xl font-bold">
			About
		</h1>
		<section class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
			<!-- About left contents -->
			<div class="w-full sm:w-1/4 mb-7 sm:mb-0 ml-36">
				<div>
					<img class="border-none" src="../../assets/sampleProfile.svg" />
				</div>
				<div class="flex justify-center sm:block mb-10">
					<a download="SeanYXSu Resume English.pdf" href="../../assets/files/ResumeEnglish.pdf"
						class="flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-gray-500 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-white focus:ring-1 focus:ring-indigo-900 hover:bg-gray-500 text-gray-500 hover:text-white duration-500"
						aria-label="Download Resume">
						<i data-feather="arrow-down-circle" class="ml-0 sm:ml-1 mr-2 sm:mr-3 w-5 sm:w-6 duration-100"></i>
						<span class="text-sm sm:text-lg font-general-medium duration-100">Download CV</span></a>
				</div>
			</div>
			<!-- About right contents -->
			<div class="w-full sm:w-3/4 text-left">	
			</div>
		</section>
	</div>
	
</template>
  
<script lang="ts" setup>
import feather from 'feather-icons';
import { onMounted, onUpdated } from 'vue';

onMounted(() => {
	feather.replace();
});
onUpdated(() => {
	feather.replace();
});
</script>
  
<style lang="scss" scoped></style>