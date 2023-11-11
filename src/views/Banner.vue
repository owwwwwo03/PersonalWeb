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