<template>
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
    import { reactive } from 'vue';
    import { videoPlay } from 'vue3-video-play/lib/index.js';

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
</script>