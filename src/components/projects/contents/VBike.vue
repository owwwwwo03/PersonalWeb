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

    <div class="container mx-auto custom-font">
      <div class="text-left ml-18 mt-10">
        <h1 class="text-6xl font-bold ml-4">
          Design
        </h1>
      </div>
    </div>
    <div class="container mx-auto custom-font block sm:flex sm:gap-10 mt-10 sm:mt-20 justify-center">
      <div class="button-section">
          <button type="button" class="btn-default" @click="goBackToProjects()">Back to Projects</button>
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
import router from '@/router';


//const showOverlay = ref(false);
const imageUrl = ref(background_vbike);

const titleSizeClass = ref({});
const subtitleSizeClass = ref({});
const contentSizeClass = ref({});

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

const adjustTextSize = () => {
  const screenWidth = window.innerWidth;
  // Adjust text size based on screen width
  if (screenWidth <= 768) {
    titleSizeClass.value = { fontSize: '50px' };
    subtitleSizeClass.value = { fontSize: '16px' };
    contentSizeClass.value = { fontSize: '14px' };
  } else {
    titleSizeClass.value = { fontSize: '150px' };
    subtitleSizeClass.value = { fontSize: '40px' };
    contentSizeClass.value = { fontSize: '18px' };
  }
};

const goBackToProjects = () =>{
  router.push({ path: "/PersonalWeb/Projects"});
};

onMounted(() => {
  adjustTextSize();
  window.addEventListener('resize', adjustTextSize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', adjustTextSize);
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
</style>