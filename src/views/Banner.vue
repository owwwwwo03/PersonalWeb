<template>
	<section class="pt-5 pt-sm-5">
		<!-- Banner left contents -->
		<div class="text-center">
			<h1 class="">
				Banner
			</h1>

		</div>

		<!-- Banner right illustration -->
		<div class="">

		</div>
	</section>
</template>

<script lang="ts">
import feather from 'feather-icons';
import { onMounted, reactive, onUpdated } from 'vue';
onMounted(() => {
	feather.replace();
});
onUpdated(() => {
	feather.replace();
});
</script>

<style></style>