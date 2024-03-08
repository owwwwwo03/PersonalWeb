<template>
	<div class="text-left ml-18">
		<h1 class="text-6xl font-bold">
			{{$t("about-title")}}
		</h1>
		<section class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
			<!-- About left contents -->
			<div class="w-full sm:w-1/4 mb-7 sm:mb-0">
				<div>
					<img class="border-none" src="../../assets/sample_profile.svg" />
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
			<div class="w-full sm:w-3/4 text-left max-w-4xl ml-4">
				<p class="text-2xl font-bold mb-4">ABOUT ME</p>
				<p class="text-lg mb-2">
					I am SU YI XIANG, currently working as an engineer in the Digital Experience Development Department at AUO Company. 
					My expertise lies HCI, VR/AR development, and front-end interface design and implementation. 
					I aspire to maintain an open and creative mindset in my design work, continuously learn new knowledge, and deepen my skills. 
					I strive to objectively analyze data and technological trends, implement solutions, and ensure execution efficiency to face various unknowns and challenges in life.
				</p>
				<p class="text-2xl font-bold mb-4">EDUCATION</p>
				<p class="text-lg mb-2">National Cheng Kung University Master’s degree, Graduated 2022</p>
				<p class="text-2xl font-bold mb-4">EXPERIENCE</p>
				<p class="text-lg mb-2">Software Engineer at AUO Company, Mar 2022 - Present</p>
				<p class="text-lg mb-2">Project Research Assistant at National Cheng Kung University, Sep 2020 - Jun 2021</p>
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