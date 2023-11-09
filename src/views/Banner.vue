<template>
    <section
		class="flex flex-col sm:justify-between items-center sm:flex-row mt-12 sm:mt-10"
	>
		<!-- Banner left contents -->
		<div class="w-full md:w-1/3 text-left">
			<h1
				class="font-general-semibold text-4xl md:text-4xl xl:text-6xl text-center sm:text-left text-ternary-dark dark:text-primary-light"
			>
				Hi My name is Sean.
			</h1>
			<div class="flex justify-center sm:block">
				<a
					download="Stoman-Resume.pdf"
					href=""
					class="flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-pink-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-pink-50 focus:ring-1 focus:ring-pink-900 hover:bg-pink-500 text-gray-500 hover:text-white duration-500"
					aria-label="Download Resume"
				>
					<i
						data-feather="arrow-down-circle"
						class="ml-0 sm:ml-1 mr-2 sm:mr-3 w-5 sm:w-6 duration-100"
					></i>
					<span
						class="text-sm sm:text-lg font-general-medium duration-100"
						>download cv</span
					></a
				>
			</div>
		</div>

		<!-- Banner right illustration -->
		<div class="w-full md:w-2/3 text-right float-right">
			
		</div>
	</section>
</template>

<script lang="ts">
    import feather from 'feather-icons';
    import { onMounted, reactive, onUpdated } from 'vue';
    onMounted(() => {
        feather.replace();
      });
      onUpdated(()=>{
	    feather.replace();
      });
</script>

<style>

</style>