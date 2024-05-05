<template>
    <div :style="{ 'background-image': 'url(' + imageUrl + ')' }" class="background-container">
        <!-- Text on the background image -->
        <div class="text-overlay custom-font">
            <p :style="titleSizeClass" class="text-overlay-content mb-2 font-bold">Fab AR</p>
            <p :style="subtitleSizeClass" class="text-overlay-content mb-6">{{$t("project1-subtitle")}}</p>
            <p :style="contentSizeClass" class="text-overlay-content">
              {{$t("project1-brief")}}</p>
        </div>
    </div>
    <div class="container mx-auto custom-font">
      <div class="text-left ml-18 mt-10">
        <h1 class="font-bold ml-4" data-aos="fade-left" :style="headingClass">
          Review
        </h1>
      </div>
    </div>
    <div class="container mx-auto block sm:flex sm:gap-10 mt-10 sm:mt-20 justify-center">
        <p class="ml-4 content-center" :style="widthClass" data-aos="fade-up">
          {{$t("project1-review-content1")}}
        </p>
    </div>
    <div class="container mx-auto block sm:flex sm:gap-10 mt-10 sm:mt-10 justify-center">
        <img :src=picture_fabar01 class="content-center" :style="imgClass" data-aos="fade-up">
    </div>
    <div class="container mx-auto custom-font">
      <div class="text-left ml-18 mt-10">
        <h1 class="font-bold ml-4" data-aos="fade-left" :style="headingClass">
          Features
        </h1>
      </div>
    </div>
    <div class="container mx-auto custom-font">
      <div class="text-left ml-18 mt-10">
        <h1 class="text-2xl font-bold ml-4" data-aos="fade-up">
          {{$t("project1-feature-subtitle1")}}
        </h1>
      </div>
    </div>
    <div class="container mx-auto block sm:flex sm:gap-10 mt-6 sm:mt-10 justify-center">
        <p class="ml-4 content-center" :style="widthClass" data-aos="fade-up">
          {{$t("project1-feature-content1")}}
        </p>
    </div>
    <div class="container mx-auto block sm:flex sm:gap-10 mt-10 sm:mt-10 justify-center">
        <img :src=picture_fabar02 class="content-center" :style="imgClass" data-aos="fade-up">
    </div>
    <div class="container mx-auto custom-font">
      <div class="text-left ml-18 mt-10">
        <h1 class="text-2xl font-bold ml-4" data-aos="fade-up">
          {{$t("project1-feature-subtitle2")}}
        </h1>
      </div>
    </div>
    <div class="container mx-auto block sm:flex sm:gap-10 mt-6 sm:mt-10 justify-center">
        <p class="ml-4 content-center" :style="widthClass" data-aos="fade-up">
          {{$t("project1-feature-content2")}}
        </p>
    </div>
    <div class="container mx-auto block sm:flex sm:gap-10 mt-10 sm:mt-10 justify-center">
        <img :src=picture_fabar03 class="content-center" :style="imgClass" data-aos="fade-up">
    </div>
    <div class="container mx-auto custom-font block sm:flex sm:gap-10 mt-10 sm:mt-20 justify-center">
      <div class="button-section">
          <button type="button" class="btn-default" @click="goBackToProjects()">Go Back</button>
      </div>
    </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import background_fabar from '@/assets/background_fabar.svg';
import picture_fabar01 from '@/assets/picture_fabar01.svg';
import picture_fabar02 from '@/assets/picture_fabar02.svg';
import picture_fabar03 from '@/assets/picture_fabar03.svg';
import router from '@/router';

const imageUrl = ref(background_fabar);

const titleSizeClass = ref({});
const subtitleSizeClass = ref({});
const contentSizeClass = ref({});
const imgClass = ref({});
const widthClass = ref({});
const headingClass = ref({});

const adjustSize = () => {
  const screenWidth = window.innerWidth;
  // Adjust text size based on screen width
  if (screenWidth <= 768) {
    titleSizeClass.value = { fontSize: '50px' };
    subtitleSizeClass.value = { fontSize: '16px' };
    contentSizeClass.value = { fontSize: '14px' };
    imgClass.value = {width:'90%'};
    widthClass.value = {width:'90%'};
    headingClass.value = {fontSize:'2.25rem'};
  } else {
    titleSizeClass.value = { fontSize: '120px' };
    subtitleSizeClass.value = { fontSize: '40px' };
    contentSizeClass.value = { fontSize: '18px',maxWidth: '60%',margin: '0px auto' };
    imgClass.value = {width:'60%'};
    widthClass.value = {width:'98%'};
    headingClass.value = {fontSize:'3.75rem'};
  }
};

const goBackToProjects = () =>{
  router.push({ path: "/PersonalWeb/Projects"});
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
.background-container {
    /* Ensure the background image covers the entire container */
    background-size: cover;
    /* Center the background image */
    background-position: center;
    /* Fix the background image to the container */
    background-attachment: scroll;
    /* Optional: Add some width to the container */
    width: 100%;
    /* Use viewport units for the height to make it responsive */
    height: auto;
    /* Optional: Add overflow properties if needed */
    overflow: hidden;
    /* Use flexbox to center the text */
}
.text-overlay { 
    /* Optional: Add some padding to the text */
    padding: 5%;
    color: white; /* Adjust the color as needed */
    
}
.text-overlay-content { 
    text-align: center; /* Center the text horizontally */
}

.button-section {
	margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
  width: 90%;

	button {
		height: 60px !important;
		width: 100% !important;
		font-size: 18px !important;
	}
}
.content-center{
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
