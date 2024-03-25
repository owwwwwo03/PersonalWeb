<template>
    <div :style="{ 'background-image': 'url(' + imageUrl + ')' }" class="background-container">
          <!-- Text on the background image -->
          <div class="text-overlay custom-font">
              <p :style="titleSizeClass" class="text-overlay-content mb-2 font-bold">Kuchipa</p>
              <p :style="subtitleSizeClass" class="text-overlay-content mb-6">運用影像辨識孩童發音嘴型訓練設計</p>
              <p :style="contentSizeClass" class="text-overlay-content">
                Kuchipa專案為利用互動設計與製作的方式，幫助孩童學習發音以避免構音障礙的問題發生。
                而其中的一款互動：びいいいいむ主要利用人臉辨識去偵測小孩的嘴型，透過嘴巴射出的雷射去攻擊怪物，
                讓小孩可以以有趣的遊戲去維持著嘴型，訓練他嘴部附近的肌肉。</p>
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
</template>
<script lang="ts" setup>
    import { ref, reactive, onMounted, onBeforeUnmount } from 'vue';
    import { videoPlay } from 'vue3-video-play/lib/index.js';
    import background_kuchipa from '@/assets/background_kuchipa.svg';

    const imageUrl = ref(background_kuchipa);

    const titleSizeClass = ref({});
    const subtitleSizeClass = ref({});
    const contentSizeClass = ref({});

    const options = reactive({
    width: '880px', //播放器寬度
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
    src: "https://dl.dropboxusercontent.com/scl/fi/aha0z46gufpggu55b2smd/video_kuchipa.mp4?rlkey=muqub2gz1577yd8j4jh8a1wfi&dl=0", //link
    poster: '', //封面
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

    onMounted(() => {
      adjustTextSize();
      window.addEventListener('resize', adjustTextSize);
    });

    onBeforeUnmount(() => {
      window.removeEventListener('resize', adjustTextSize);
    });
</script>

<style  lang="scss" scoped>

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

</style>