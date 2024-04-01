<template>
    <div :style="{ 'background-image': 'url(' + imageUrl + ')' }" class="background-container">
        <!-- Text on the background image -->
        <div class="text-overlay custom-font">
            <p :style="titleSizeClass" class="text-overlay-content mb-2 font-bold">Fab AR</p>
            <p :style="subtitleSizeClass" class="text-overlay-content mb-6">智慧工廠AR應用</p>
            <p :style="contentSizeClass" class="text-overlay-content">
                FabAR 是一套以工廠巡檢、路線指引作做為模擬情境的系統。
                組合情境中所需要的圖表顯示、資料串接以及QRcode顯示定位等Compoent。
                目的為讓公司二次開發者可以透過簡單操作的方式利用各式元件進行開發，快速部署到Hololens或Android上應用。</p>
        </div>
    </div>
    <div class="container mx-auto custom-font">
      <div class="text-left ml-18 mt-10">
        <h1 class="text-6xl font-bold ml-4">
          Review
        </h1>
      </div>
    </div>
    <div class="container mx-auto block sm:flex sm:gap-10 mt-10 sm:mt-20 justify-center">
        <p class="ml-4 content-center" :style="widthClass">
            FabAR 以Unity環境為主，打造Fab應用的各項AR應用的Component ，讓二次開發者可以透過簡單操作我們打包好的元件去進行開發，然後部署到Hololens上去使用。
            FabAR製作開發了QR code、UI 、IOT 、Web Browser等元件，讓使用者針對自己的需求去下載，依照各項應用場域進行後續的開發工作。
        </p>
    </div>
    <div class="container mx-auto block sm:flex sm:gap-10 mt-10 sm:mt-10 justify-center">
        <img :src=picture_fabar01 class="content-center" :style="imgClass">
    </div>
    <div class="container mx-auto custom-font">
      <div class="text-left ml-18 mt-10">
        <h1 class="text-6xl font-bold ml-4">
          Features
        </h1>
      </div>
    </div>
    <div class="container mx-auto custom-font">
      <div class="text-left ml-18 mt-10">
        <h1 class="text-2xl font-bold ml-4">
          工廠巡檢
        </h1>
      </div>
    </div>
    <div class="container mx-auto block sm:flex sm:gap-10 mt-6 sm:mt-10 justify-center">
        <p class="ml-4 content-center" :style="widthClass">
          使用者可利用掃描QRcode去監控機台的資訊，並且可自由地去拖拉資訊面板到自己想要的位置。
          當機台資訊出現異常時，使用者可以開啟修機指引文件去輔助檢查。如果仍需近一步的操作指引，可以進到Guides App去瀏覽事先編輯好的Guides去看指南或資料。
        </p>
    </div>
    <div class="container mx-auto block sm:flex sm:gap-10 mt-10 sm:mt-10 justify-center">
        <img :src=picture_fabar02 class="content-center" :style="imgClass">
    </div>
    <div class="container mx-auto custom-font">
      <div class="text-left ml-18 mt-10">
        <h1 class="text-2xl font-bold ml-4">
          路線指引
        </h1>
      </div>
    </div>
    <div class="container mx-auto block sm:flex sm:gap-10 mt-6 sm:mt-10 justify-center">
        <p class="ml-4 content-center" :style="widthClass">
            使用者透過已開發的Component去進行二次開發。以路線指引做為模擬情境。
            將箭頭、標籤、機台資訊等物件任意地拖拉到指定位置後儲存，去完成路線指引的規劃。
        </p>
    </div>
    <div class="container mx-auto block sm:flex sm:gap-10 mt-10 sm:mt-10 justify-center">
        <img :src=picture_fabar03 class="content-center" :style="imgClass">
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

const adjustSize = () => {
  const screenWidth = window.innerWidth;
  // Adjust text size based on screen width
  if (screenWidth <= 768) {
    titleSizeClass.value = { fontSize: '50px' };
    subtitleSizeClass.value = { fontSize: '16px' };
    contentSizeClass.value = { fontSize: '14px' };
    imgClass.value = {width:'90%'};
    widthClass.value = {width:'90%'};
  } else {
    titleSizeClass.value = { fontSize: '150px' };
    subtitleSizeClass.value = { fontSize: '40px' };
    contentSizeClass.value = { fontSize: '18px' };
    imgClass.value = {width:'60%'};
    widthClass.value = {width:'100%'};
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
