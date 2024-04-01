<template>
	<div class="container mx-auto custom-font">
		<div class="text-left ml-18">
		<h1 class="text-6xl font-bold">
			{{$t("about-title")}}
		</h1>
		<section class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
			<!-- About left contents -->
			<div class="w-full sm:w-1/4 mb-7 sm:mb-0">
				<div>
					<img class="border-none rounded-xl content-center" :style="widthClass" src="../../assets/personal_profile.jpg" />
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
			<div class="w-full sm:w-3/4 text-left max-w-4xl ml-4 content-center" :style="widthClass">
				<div class="flex items-center mb-4">
					<img class="border-none" src="../../assets/aboutme_logo.svg" />
					<p class="text-2xl font-bold ml-4">ABOUT ME</p>
				</div>
				<p class="text-xl mb-8 ml-12">
					{{ $t("about-content-aboutme") }}
				</p>
				<div class="flex items-center mb-4">
					<img class="border-none" src="../../assets/education_logo.svg" />
					<p class="text-2xl font-bold ml-4">EDUCATION</p>
				</div>
				<div class="mb-4">
					<div class="flex items-center mb-2">
						<img class="border-none" src="../../assets/ncku_logo.svg" />
						<p class="text-2x1 font-semibold ml-3">{{ $t("about-content-education-01") }}</p>
					</div>
					<div class="flex items-center text-xl ml-12 mb-1">
						<p class="ml-1">•</p>
						<p class="ml-2">{{ $t("about-content-education-01-content-01") }}</p>
					</div>
					<div class="flex items-center text-xl ml-12 mb-1">
						<p class="ml-1">•</p>
						<p class="ml-2">{{ $t("about-content-education-01-content-02") }}</p>
					</div>
				</div>
				<div class="mb-4">
					<div class="flex items-center mb-2">
						<img class="border-none" src="../../assets/ksu_logo.svg" />
						<p class="text-2x1 font-semibold ml-3">{{ $t("about-content-education-02") }}</p>
					</div>
					<div class="flex items-center text-xl ml-12 mb-1">
						<p class="ml-1">•</p>
						<p class="ml-2">{{ $t("about-content-education-02-content-01") }}</p>
					</div>
					<div class="flex items-center text-xl ml-12 mb-1">
						<p class="ml-1">•</p>
						<p class="ml-2">{{ $t("about-content-education-02-content-02") }}</p>
					</div>
				</div>
				<div class="mb-8">
					<div class="flex items-center mb-2">
						<img class="border-none" src="../../assets/nknu_logo.svg" />
						<p class="text-2x1 font-semibold ml-3">{{ $t("about-content-education-03") }}</p>
					</div>
					<div class="flex items-center text-xl ml-12 mb-1">
						<p class="ml-1">•</p>
						<p class="ml-2">{{ $t("about-content-education-03-content-01") }}</p>
					</div>
					<div class="flex items-center text-xl ml-12 mb-1">
						<p class="ml-1">•</p>
						<p class="ml-2">{{ $t("about-content-education-03-content-02") }}</p>
					</div>
				</div>
				
				<div class="flex items-center mb-4">
					<img class="border-none" src="../../assets/experience_logo.svg" />
					<p class="text-2xl font-bold ml-4">EXPERIENCE</p>
				</div>
				<div class="mb-4">
					<div class="flex items-center mb-2">
						<img class="border-none" src="../../assets/auo_logo.svg" />
						<p class="text-2x1 font-semibold ml-3">{{ $t("about-content-experience-01") }}</p>
					</div>
					<div class="flex items-center text-xl ml-12 mb-1">
						<p class="ml-1">•</p>
						<p class="ml-2">{{ $t("about-content-experience-01-content-01") }}</p>
					</div>
					<div class="flex items-center text-xl ml-12 mb-1">
						<p class="ml-1">•</p>
						<p class="ml-2">{{ $t("about-content-experience-01-content-02") }}</p>
					</div>
					<div class="flex items-center text-xl ml-12 mb-1">
						<p class="ml-1">•</p>
						<p class="ml-2">{{ $t("about-content-experience-01-content-03") }}</p>
					</div>
				</div>
				<div class="mb-4">
					<div class="flex items-center mb-2">
						<img class="border-none" src="../../assets/ncku_logo.svg" />
						<p class="text-2x1 font-semibold ml-3">{{ $t("about-content-experience-02") }}</p>
					</div>
					<div class="flex items-center text-xl ml-12 mb-1">
						<p class="ml-1">•</p>
						<p class="ml-2">{{ $t("about-content-experience-02-content-01") }}</p>
					</div>
					<div class="flex items-center text-xl ml-12 mb-1">
						<p class="ml-1">•</p>
						<p class="ml-2">{{ $t("about-content-experience-02-content-02") }}</p>
					</div>
				</div>
				<div class="mb-4">
					<div class="flex items-center mb-2">
						<img class="border-none" src="../../assets/25togo_logo.svg" />
						<p class="text-2x1 font-semibold ml-3">{{ $t("about-content-experience-03") }}</p>
					</div>
					<div class="flex items-center text-xl ml-12 mb-1">
						<p class="ml-1">•</p>
						<p class="ml-2">{{ $t("about-content-experience-03-content-01") }}</p>
					</div>
					<div class="flex items-center text-xl ml-12 mb-1">
						<p class="ml-1">•</p>
						<p class="ml-2">{{ $t("about-content-experience-03-content-02") }}</p>
					</div>
				</div>
			</div>
		</section>
	</div>
	</div>
	
	
</template>
  
<script lang="ts" setup>
import feather from 'feather-icons';
import { ref, onMounted, onUpdated, onBeforeUnmount } from 'vue';

const widthClass = ref({});

const adjustSize = () => {
  const screenWidth = window.innerWidth;
  // Adjust text size based on screen width
  if (screenWidth <= 768) {
    widthClass.value = {width:'90%'};
  } else {
    widthClass.value = {width:'100%'};
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
  
<style lang="scss" scoped>

.custom-font {
  font-family: Inter;
}
.content-center{
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>