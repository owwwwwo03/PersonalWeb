<template>
    <div :style="{ 'background-image': 'url(' + imageUrl + ')' }" class="background-container">
        <!-- Text on the background image -->
        <div class="text-overlay custom-font">
            <p :style="titleSizeClass" class="text-overlay-content mb-2 font-bold">V-Bike</p>
            <p :style="subtitleSizeClass" class="text-overlay-content mb-6">真實全景影片式虛擬實境結合下肢踩踏裝置系統</p>
            <p :style="contentSizeClass" class="text-overlay-content">
                V-Bike 是一套透過生理數據、訓練課程等設計，並結合360度真實全景影片式虛擬實境技術的踩踏裝置系統。
                透過簡單的操作模式，高齡長輩即使人在病房、室內場所，也能V-Bike前往不同的風景名勝、國外景點，
                一邊踩踏一邊欣賞當地360度的景色，讓訓練不單單只是訓練，而是一趟美好的旅程。</p>
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
      <div class="flex items-center">    
        <videoPlay 
        v-bind="options" 
        @play="onPlay"
        @pause="onPause" 
        @timeupdate="onTimeupdate" 
        @canplay="onCanplay" />
      </div>  
    </div>
    <div class="container mx-auto custom-font">
      <div class="text-left ml-18 mt-10">
        <h1 class="text-6xl font-bold ml-4">
          Features
        </h1>
      </div>
    </div>
    <div class="container mx-auto block sm:flex sm:gap-10 mt-10 sm:mt-20 justify-center">
        <p class="ml-4">
          V-Bike 主要以頭戴顯示器以及螢幕作為播放媒介兩種方式，讓使用者能自由的選擇自己喜歡的方式進行運動。
          我們將拍攝好全景影片內容放入Unity進行虛實整合系統設計，透過視覺化、直覺的操作方式，設計適合使用者的介面及運動流程。
        </p>
    </div>
    <div class="container mx-auto block sm:flex sm:gap-10 mt-10 sm:mt-10 justify-center">
        <img :src=picture_vbike01 class="img-center" :style="imgClass">
    </div>
    <div class="container mx-auto block sm:flex sm:gap-10 mt-10 sm:mt-20 justify-center">
        <p class="ml-4">
          在 Pilot Test時使用螢幕與頭戴顯示器兩種顯示器給高齡者進行使用。頭戴顯示器的部分，長輩們常常因為頭暈、頭戴顯示器會壓到眼鏡造成不適、
          畫面感覺有點霧霧的、焦距調整不到自己適合的距離等原因，造成體驗時間約1分鐘就希望能停止活動。以螢幕作為觀賞的部分，每位受測者皆踩踏超過4分鐘的時間，
          且認為螢幕觀賞搭配踩踏比較舒服。此外對於畫面內容則認為能回味或比較之前去過的景點差異而感到喜歡，也認為可以邊運動邊觀賞喜歡的古蹟景點很不錯。
          因此了解到高齡者對於使用螢幕作為真實全景影片式虛擬實境結合腳踩踏裝置的介面體驗優於使用頭戴顯示器。
        </p>
    </div>
    <div class="container mx-auto block sm:flex sm:gap-10 mt-10 sm:mt-10 justify-center">
        <img :src=picture_vbike02 class="img-center" :style="imgClass">
    </div>
    <!--
      <div class="container mx-auto block sm:flex sm:gap-10 mt-10 sm:mt-20 justify-center">
        <img :src=gif_vbike01 class="gif-size">
      </div>
      <div class="container mx-auto block sm:flex sm:gap-10 sm:mt-20 justify-center">
        <img :src=gif_vbike02 class="gif-size">
        <img :src=gif_vbike03 class="gif-size">
      </div>
    -->
    <div class="container mx-auto custom-font">
      <div class="text-left ml-18 mt-10">
        <h1 class="text-6xl font-bold ml-4">
          Design
        </h1>
      </div>
    </div>
    <div class="container mx-auto block sm:flex mt-10 m:gap-10 sm:mt-10 justify-center">
        <img :src=picture_vbike03 class="img-center" :style="imgClass">
    </div>
    <div class="container mx-auto block sm:flex mt-10 sm:gap-10 sm:mt-10 justify-center">
        <img :src=picture_vbike04 class="img-center" :style="imgClass">
    </div>
    <div class="container mx-auto block sm:flex mt-10 sm:gap-10 sm:mt-10 justify-center">
        <img :src=picture_vbike05 class="img-center" :style="imgClass">
    </div>
    <div class="container mx-auto custom-font block sm:flex sm:gap-10 mt-10 sm:mt-20 justify-center">
      <div class="button-section">
          <button type="button" class="btn-default" @click="goBackToProjects()">Go Back</button>
      </div>
    </div>
    
    <!--
      <div class="image-container">
        <img :src=background_vbike alt="Main Image" class="main-image" @mouseover="showOverlay = true" @mouseleave="showOverlay = false">
        <transition name="fade">
          <img v-if="showOverlay" :src=video_vbike_post alt="Overlay Image" class="overlay-image">
        </transition>
    </div>
    -->
    
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, onBeforeUnmount } from 'vue';
import { videoPlay } from 'vue3-video-play/lib/index.js';
import background_vbike from '@/assets/background_vbike.svg';
import video_vbike_post from '@/assets/video_vbike_post.svg';
//import gif_vbike01 from '@/assets/gif_vbike01.gif';
//import gif_vbike02 from '@/assets/gif_vbike02.gif';
//import gif_vbike03 from '@/assets/gif_vbike03.gif';
import picture_vbike01 from '@/assets/picture_vbike01.svg';
import picture_vbike02 from '@/assets/picture_vbike02.svg';
import picture_vbike03 from '@/assets/picture_vbike03.svg';
import picture_vbike04 from '@/assets/picture_vbike04.svg';
import picture_vbike05 from '@/assets/picture_vbike05.svg';
import router from '@/router';


//const showOverlay = ref(false);
const imageUrl = ref(background_vbike);

const titleSizeClass = ref({});
const subtitleSizeClass = ref({});
const contentSizeClass = ref({});
const imgClass = ref({});

const options = reactive({
  width: '900px', //播放器寬度
  height: '500px', //播放器高度
  color: "#409eff", //顏色
  muted: false, //靜音
  webFullScreen: false,
  speedRate: ["0.75", "1.0", "1.25", "1.5", "2.0"], //播放倍速
  autoPlay: false, //自動播放
  loop: false, //循環播放
  mirror: false, //靜像畫面
  ligthOff: false,  //關燈模式
  volume: 0.3, //默認音量大小
  control: true, //是否顯示控制器
  title: '', //影片名稱
  src: "https://dl.dropboxusercontent.com/scl/fi/aegujzs3koaona3jll37s/video_vbike.mp4?rlkey=jnloksexp0tqxuus0m5d5iba3&dl=0", //link
  poster: video_vbike_post, //封面
})
const onPlay = (ev) => {
  console.log(ev, 'Play')
}
const onPause = (ev) => {
  console.log(ev, 'Stop')
}

const onTimeupdate = (ev) => {
  console.log(ev, '時間更新')
}
const onCanplay = (ev) => {
  console.log(ev, '可以播放')
}

const adjustSize = () => {
  const screenWidth = window.innerWidth;
  // Adjust text size based on screen width
  if (screenWidth <= 768) {
    titleSizeClass.value = { fontSize: '50px' };
    subtitleSizeClass.value = { fontSize: '16px' };
    contentSizeClass.value = { fontSize: '14px' };
    imgClass.value = {width:'90%'};
  } else {
    titleSizeClass.value = { fontSize: '150px' };
    subtitleSizeClass.value = { fontSize: '40px' };
    contentSizeClass.value = { fontSize: '18px' };
    imgClass.value = {width:'60%'};
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
    background-attachment: fixed;
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
    //font-size: 1em; /* Adjust the formula as needed */
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


.image-container {
  position: relative;
  display: inline-block;
}

.main-image {
  width: 100%;
  height: auto;
}

.overlay-image {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s ease-in-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 1;
}
.gif-size{
  width: 500px; /* Adjust width as needed */
  height: auto; /* Maintain aspect ratio */
}
.img-center{
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>