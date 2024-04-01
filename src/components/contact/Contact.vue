<template>
	<div class="container mx-auto custom-font">		
		<div class="text-left ml-18">
			<h1 class="text-6xl font-bold mb-8">
				{{$t("contact-title")}}
			</h1>
			<p class="content-center" :style="widthClass">If you need any further information, please feel free to contact me.</p>	
			<section class="block sm:flex sm:gap-10 mt-10 sm:mt-10">
				<div class="w-full sm:w-2/4 mb-7 sm:mb-0 content-center" :style="widthClass">	
					
					<div class="input-section">
						<div class="hover-text">
							<input type="text" placeholder="Name" />
						</div>
						<div class="hover-text">
							<input type="text" placeholder="Email" />
						</div>
						<div class="hover-text">
							<textarea placeholder="Message"></textarea>
						</div>
						</div>
						<div class="button-section">
							<button type="submit" class="btn-default">Submit</button>
						</div>
					</div>
				<div class="w-full sm:w-2/4 text-left max-w-4xl ml-4 content-center" :style="widthClass">
					<GoogleMap api-key="YOUR_GOOGLE_MAPS_API_KEY" style="width: 100%; height: 500px" :center="center" :zoom="15">
						<Marker :options="markerOptions" />
					</GoogleMap>
				</div>
			</section>				
		</div>
	</div>
	
</template>
  
<script lang="ts" setup>
import { ref, onMounted, defineComponent, onBeforeUnmount } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";


const center = { lat: 40.689247, lng: -74.044502 };
const markerOptions = { position: center, label: "L", title: "LADY LIBERTY" };

defineComponent({ components: { GoogleMap, Marker }, center, markerOptions });

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
	adjustSize();
  	window.addEventListener('resize', adjustSize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', adjustSize);
});

</script>
  
<style lang="scss" scoped>

.custom-font {
  font-family: Inter;
}
.input-section {
	margin-top: 0px;
	display: flex;
	flex-direction: column;
	gap: 16px;

	& input {
		color: #646464;
		background-color: #ffffff;
		box-shadow: 0px 3px 6px #00000029;
		border-radius: 28px;
		height: 60px;
		width: 100% !important;
		border-width: 0px;
		outline: none;
		padding-left: 24px;
		padding-right: 24px;

		&::placeholder {
			font-size: 16px;
			color: #c8c8c8;
		}

	}

	& select {
		color: #646464;
		background-color: #ffffff;
		box-shadow: 0px 3px 6px #00000029;
		border-radius: 28px;
		height: 48px;
		width: 100% !important;
		border-width: 0px;
		padding-left: 24px;
		padding-right: 24px;
	}

	& textarea {
		color: #646464;
		background-color: #ffffff;
		box-shadow: 0px 3px 6px #00000029;
		border-radius: 28px;
		height: 180px;
		width: 100% !important;
		border-width: 0px;
		outline: none;
		padding-top: 24px;
		padding-left: 24px;
		padding-right: 24px;

		&::placeholder {
			font-size: 16px;
			color: #c8c8c8;
		}

	}

}

.button-section {
	margin-top: 100px;

	button {
		height: 60px !important;
		width: 100% !important;
		font-size: 18px !important;
	}
}

footer {
	padding-top: 123px;
	padding-bottom: 30px;

	.copy-right {
		display: flex;
		justify-content: center;
		font-size: 14px;
		color: #646464;
	}
}


.tooltip-text {
	visibility: hidden;
	position: absolute;
	z-index: 1;
	width: 140px;
	color: #646464;
	font-size: 10px;
	text-align: center;
	background-color: #fff;
	opacity: 0.7;
	border-radius: 20px;
	border-color: #646464;
	padding: 10px 15px 10px 15px;
}

.hover-text:hover .tooltip-text {
	visibility: visible;
}

#top {
	top: 250px;
	left: 30%;
}

#bottom {
	top: 415px;
	left: 30%;
}

#left {
	top: -8px;
	right: 120%;
}

#right {
	top: -8px;
	left: 120%;
}

.hover-text {
	margin-top: 0px;
	display: flex;
	flex-direction: column;
	gap: 1px;
}

.content-center{
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>