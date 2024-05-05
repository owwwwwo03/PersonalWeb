<template>
    <div :style="{ 'background-image': 'url(' + imageUrl + ')' }" class="background-container">
          <!-- Text on the background image -->
          <div class="text-overlay custom-font">
              <p :style="titleSizeClass" class="text-overlay-content mb-2 font-bold">Kuchipa</p>
              <p :style="subtitleSizeClass" class="text-overlay-content mb-6">{{$t("project5-subtitle")}}</p>
              <p :style="contentSizeClass" class="text-overlay-content">
                {{$t("project5-brief")}}</p>
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
        <h1 class="font-bold ml-4" data-aos="fade-left" :style="headingClass">
          Features
        </h1>
      </div>
    </div>
    <div class="container mx-auto block sm:flex sm:gap-10 mt-10 sm:mt-10 justify-center">
        <img :src=picture_kuchipa01 class="content-center" :style="imgClass" data-aos="fade-up">
    </div>
    <div class="container mx-auto block sm:flex sm:gap-10 mt-10 sm:mt-20 justify-center">
        <p class="ml-4 content-center" :style="widthClass" data-aos="fade-up">
          {{$t("project5-feature-content1")}}
        </p>
    </div>
    <div class="container mx-auto block sm:flex sm:gap-10 mt-10 sm:mt-20 justify-center">
        <p class="ml-4 content-center" :style="widthClass" data-aos="fade-up">
          {{$t("project5-feature-content2")}}
        </p>
    </div>
    <div class="container mx-auto block sm:flex sm:gap-10 mt-10 sm:mt-10 justify-center">
        <img :src=picture_kuchipa02 class="content-center" :style="imgClass" data-aos="fade-up">
    </div>
    <div class="container mx-auto block sm:flex sm:gap-10 mt-10 sm:mt-20 justify-center">
        <p class="ml-4 content-center" :style="widthClass" data-aos="fade-up">
          {{$t("project5-feature-content3")}}
        </p>
    </div>
    <div class="container mx-auto block sm:flex sm:gap-10 mt-10 sm:mt-10 justify-center">
        <img :src=picture_kuchipa03 class="content-center" :style="imgClass" data-aos="fade-up">
    </div>
    <div class="container mx-auto block sm:flex sm:gap-10 mt-10 sm:mt-20 justify-center">
        <p class="ml-4 content-center" :style="widthClass" data-aos="fade-up">
          {{$t("project5-feature-content4")}}
        </p>
    </div>
    <div class="container mx-auto block sm:flex sm:gap-10 mt-10 sm:mt-10 justify-center">
        <img :src=picture_kuchipa04 class="content-center" :style="imgClass" data-aos="fade-up">
    </div>
    <div class="container mx-auto block sm:flex sm:gap-10 mt-10 sm:mt-20 justify-center">
        <p class="ml-4 content-center" :style="widthClass" data-aos="fade-up">
          {{$t("project5-feature-content5")}}
        </p>
    </div>
    <div class="container mx-auto block sm:flex sm:gap-10 mt-10 sm:mt-10 justify-center">
        <img :src=picture_kuchipa05 class="content-center" :style="imgClass" data-aos="fade-up">
    </div>
    <div class="container mx-auto block sm:flex sm:gap-10 mt-10 sm:mt-20 justify-center">
        <p class="ml-4 content-center" :style="widthClass" data-aos="fade-up">
          {{$t("project5-feature-content6")}}
        </p>
    </div>
    <div class="container mx-auto custom-font">
      <div class="text-left ml-18 mt-10">
        <h1 class="font-bold ml-4" data-aos="fade-left" :style="headingClass">
          Future
        </h1>
      </div>
    </div>
    <div class="container mx-auto block sm:flex sm:gap-10 mt-10 sm:mt-10 justify-center">
        <img :src=picture_kuchipa06 class="content-center" :style="imgClass" data-aos="fade-up">
    </div>
    <div class="container mx-auto block sm:flex sm:gap-10 mt-10 sm:mt-20 justify-center">
        <p class="ml-4 content-center" :style="widthClass" data-aos="fade-up">
          {{$t("project5-future-content1")}}
        </p>
    </div>
    <div class="container mx-auto block sm:flex sm:gap-10 mt-10 sm:mt-10 justify-center">
        <img :src=picture_kuchipa07 class="content-center" :style="imgClass" data-aos="fade-up">
    </div>
    <div class="container mx-auto block sm:flex sm:gap-10 mt-10 sm:mt-20 justify-center">
        <p class="ml-4 content-center" :style="widthClass" data-aos="fade-up">
          {{$t("project5-future-content2")}}
        </p>
    </div>
    <div class="container mx-auto custom-font block sm:flex sm:gap-10 mt-10 sm:mt-20 justify-center">
      <div class="button-section">
          <button type="button" class="btn-default" @click="goBackToProjects()">Go Back</button>
      </div>
    </div>
</template>
<script lang="ts" setup>
    import { ref, reactive, onMounted, onBeforeUnmount } from 'vue';
    import { videoPlay } from 'vue3-video-play/lib/index.js';
    import background_kuchipa from '@/assets/background_kuchipa.svg';
    import picture_kuchipa01 from '@/assets/picture_kuchipa01.svg';
    import picture_kuchipa02 from '@/assets/picture_kuchipa02.svg';
    import picture_kuchipa03 from '@/assets/picture_kuchipa03.svg';
    import picture_kuchipa04 from '@/assets/picture_kuchipa04.svg';
    import picture_kuchipa05 from '@/assets/picture_kuchipa05.svg';
    import picture_kuchipa06 from '@/assets/picture_kuchipa06.svg';
    import picture_kuchipa07 from '@/assets/picture_kuchipa07.svg';
    import router from '@/router';
    const imageUrl = ref(background_kuchipa);

    const titleSizeClass = ref({});
    const subtitleSizeClass = ref({});
    const contentSizeClass = ref({});
    const imgClass = ref({});
    const widthClass = ref({});
    const headingClass = ref({});

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
  .content-center{
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

</style>