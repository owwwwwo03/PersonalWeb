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
          Kuchipa為與九州大學藝術工學部大學院研究室一起製作的一個專案。因為疫情關係，形式使用網路進行專案的討論與執行。
        </p>
    </div>
    <div class="container mx-auto block sm:flex sm:gap-10 mt-10 sm:mt-20 justify-center">
        <p class="ml-4 content-center" :style="widthClass" data-aos="fade-up">
          構音異常，其實多數指的是沒有任何口腔構造上及神經生理等功能上的異常，在整個構音過程中，
          造成構音位置的錯誤或是氣流方向、力量、速度的不準確、口腔動作動作不協調，所造成語音錯誤及改變，
          導致發出的語音無法完全正確且清晰度降低，而多數與語音聽辨力及口腔動作的協調性不佳、說話習慣、單純的錯誤學習等因素有關。
        </p>
    </div>
    <div class="container mx-auto block sm:flex sm:gap-10 mt-10 sm:mt-10 justify-center">
        <img :src=picture_kuchipa02 class="content-center" :style="imgClass" data-aos="fade-up">
    </div>
    <div class="container mx-auto block sm:flex sm:gap-10 mt-10 sm:mt-20 justify-center">
        <p class="ml-4 content-center" :style="widthClass" data-aos="fade-up">
          在日本，小孩經常面臨的發音問題有以下幾項常見的情形：
          (1) 發音カ行、サ行以及タ行時不太清楚。例如：カラスがいる！
          小孩子常會發音不標準而說成タラス。
          (2) 像嬰兒的說話方式。例如：猫がたくさんいた！
          常發音發成タクチャン。
          (3) 發音不清楚而無法清楚知道小孩說了什麼。
        </p>
    </div>
    <div class="container mx-auto block sm:flex sm:gap-10 mt-10 sm:mt-10 justify-center">
        <img :src=picture_kuchipa03 class="content-center" :style="imgClass" data-aos="fade-up">
    </div>
    <div class="container mx-auto block sm:flex sm:gap-10 mt-10 sm:mt-20 justify-center">
        <p class="ml-4 content-center" :style="widthClass" data-aos="fade-up">
          而現實情況，父母往往會因孩子的構音障礙而感到壓力。
          父母會希望小孩在 6 歲之前達到沒有發音障礙的狀態，因為這是語言的關鍵時期。
          但是根據參訪發現有些孩子很難能達成。 由於醫院開放至17:00，父母和孩子平時都要上班或上學。
          有些孩子因為學校的原因而無法去醫院進行訓練，因此提供可以在家中進行的服務是不可或缺的。
          目前聲學分析和人工智能技術持續進步，我們希望打造能建立構音基礎的遊戲，符合來院訓練、在家訓練以及在診所等候室的需求，
          幫助小孩子能打好構音的基礎，以避免誤學和減輕父母的壓力。
        </p>
    </div>
    <div class="container mx-auto block sm:flex sm:gap-10 mt-10 sm:mt-10 justify-center">
        <img :src=picture_kuchipa04 class="content-center" :style="imgClass" data-aos="fade-up">
    </div>
    <div class="container mx-auto block sm:flex sm:gap-10 mt-10 sm:mt-20 justify-center">
        <p class="ml-4 content-center" :style="widthClass" data-aos="fade-up">
          因此kuchipa目標對象以4-6歲的孩童為主，每日最多訓練的時間約為10分鐘。希望透過玩樂帶來訓練效果且能容易理解遊戲的內容。
        </p>
    </div>
    <div class="container mx-auto block sm:flex sm:gap-10 mt-10 sm:mt-10 justify-center">
        <img :src=picture_kuchipa05 class="content-center" :style="imgClass" data-aos="fade-up">
    </div>
    <div class="container mx-auto block sm:flex sm:gap-10 mt-10 sm:mt-20 justify-center">
        <p class="ml-4 content-center" :style="widthClass" data-aos="fade-up">
          我們快速製作了功能模型到診所給小孩子以及醫生進行體驗。醫生認為嘴部辨識結合遊戲設計的方式，
          對於小孩子訓練嘴形時能更專注，是很適合且有需求的軟體。小孩子也很喜歡動動嘴巴去完成遊戲內的關卡。
          最終我們設計了 びいいいいむ。一款利用人臉辨識去偵測小孩的嘴型，透過嘴巴射出的雷射去攻擊怪物，
          讓小孩可以以有趣的遊戲去維持著嘴型，訓練他嘴部附近的肌肉。
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
          現在製作的遊戲都屬於嘴巴做大動作的控制。後續期望能以辨識更細微的控制。未來將朝著目標情境下使用的模型繼續製作，
          並將目前製作的4種遊戲合併成一個應用程式，以方便進行後續的使用者測試及相關實驗。
        </p>
    </div>
    <div class="container mx-auto block sm:flex sm:gap-10 mt-10 sm:mt-10 justify-center">
        <img :src=picture_kuchipa07 class="content-center" :style="imgClass" data-aos="fade-up">
    </div>
    <div class="container mx-auto block sm:flex sm:gap-10 mt-10 sm:mt-20 justify-center">
        <p class="ml-4 content-center" :style="widthClass" data-aos="fade-up">
          未來我們希望能讓遊戲設計能符合上面的三種情境。分別為看診期間、在家期間以及等候室期間。以方便醫生、家長、小孩子操作與使用。
          未來也將設計讓小朋友繪製塗鴉的方式，透過掃描讓小朋友的畫作能融入到遊戲當中以增加遊戲與小孩子的連結性。
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