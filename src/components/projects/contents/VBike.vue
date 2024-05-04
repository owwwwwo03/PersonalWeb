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
        <h1 class="md:text-4x1 lg: font-bold ml-4" data-aos="fade-left" :style="headingClass">
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
    <div class="container mx-auto block sm:flex sm:gap-10 mt-10 sm:mt-20 justify-center">
        <p class="ml-4 content-center" :style="widthClass" data-aos="fade-up">
          V-Bike 主要以頭戴顯示器以及螢幕作為播放媒介兩種方式，讓使用者能自由的選擇自己喜歡的方式進行運動。
          我們將拍攝好全景影片內容放入Unity進行虛實整合系統設計，透過視覺化、直覺的操作方式，設計適合使用者的介面及運動流程。
        </p>
    </div>
    <div class="container mx-auto block sm:flex sm:gap-10 mt-10 sm:mt-10 justify-center">
        <img :src=picture_vbike01 class="content-center" :style="imgClass" data-aos="fade-up">
    </div>
    <div class="container mx-auto block sm:flex sm:gap-10 mt-10 sm:mt-20 justify-center">
        <p class="ml-4 content-center" :style="widthClass" data-aos="fade-up">
          在 Pilot Test時使用螢幕與頭戴顯示器兩種顯示器給高齡者進行使用。頭戴顯示器的部分，長輩們常常因為頭暈、頭戴顯示器會壓到眼鏡造成不適、
          畫面感覺有點霧霧的、焦距調整不到自己適合的距離等原因，造成體驗時間約1分鐘就希望能停止活動。以螢幕作為觀賞的部分，每位受測者皆踩踏超過4分鐘的時間，
          且認為螢幕觀賞搭配踩踏比較舒服。此外對於畫面內容則認為能回味或比較之前去過的景點差異而感到喜歡，也認為可以邊運動邊觀賞喜歡的古蹟景點很不錯。
          因此了解到高齡者對於使用螢幕作為真實全景影片式虛擬實境結合腳踩踏裝置的介面體驗優於使用頭戴顯示器。
        </p>
    </div>
    <div class="container mx-auto block sm:flex sm:gap-10 mt-10 sm:mt-10 justify-center">
        <img :src=picture_vbike02 class="content-center" :style="imgClass" data-aos="fade-up">
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
        <h1 class="font-bold ml-4"  data-aos="fade-left" :style="headingClass">
          Design
        </h1>
      </div>
    </div>
    <div class="container mx-auto block sm:flex sm:gap-10 mt-10 sm:mt-20 justify-center">
        <p class="ml-4 content-center" :style="widthClass" data-aos="fade-up">
          V-Bike以高齡者為主要使用者，考量每項步驟的高齡者操作促使功能或狀態改變，讓高齡者能在執行完動作時，系統能馬上有回饋以增加彼此的互動性。
          透過一系列的設計方法Functional Map, Flow Chart等，將使用者流程的步驟作為流程的起點與終點，
          考量高齡者如何使用控制器去改變畫面狀態進行設計，以做為後續程式開發實作的依循。
        </p>
    </div>
    <div class="container mx-auto block sm:flex mt-10 m:gap-10 sm:mt-10 justify-center">
        <img :src=picture_vbike03 class="content-center" :style="imgClass" data-aos="fade-up">
    </div>
    <div class="container mx-auto block sm:flex mt-10 sm:gap-10 sm:mt-10 justify-center">
        <img :src=picture_vbike04 class="content-center" :style="imgClass" data-aos="fade-up">
    </div>
    <div class="container mx-auto block sm:flex sm:gap-10 mt-10 sm:mt-20 justify-center">
        <p class="ml-4 content-center" :style="widthClass" data-aos="fade-up">
          控制器在設計規劃上以簡單、少量的操作按鍵進行硬體與電路設計，只有使用確定與取消的按鍵，還有可以觀賞全景影片的搖桿。並安置在握把中間位置，以方便高齡者能輕易操作，並透過藍芽通訊，
          將指令傳給V-bike系統以促使系統運作。配合QRcode登入功能，製作給高齡者可單手拿取進行掃描的卡片。
          並且留有空白位置可以讓高齡者寫上自己的姓名或編號，以方便在拿取卡片時不會拿錯。
        </p>
    </div>
    <div class="container mx-auto block sm:flex mt-10 sm:gap-10 sm:mt-10 justify-center">
        <img :src=picture_vbike05 class="content-center" :style="imgClass" data-aos="fade-up">
    </div> 
    <div class="container mx-auto custom-font">
      <div class="text-left ml-18 mt-10">
        <h1 class="font-bold ml-4" data-aos="fade-left" :style="headingClass">
          Experiment
        </h1>
      </div>
    </div>
    <div class="container mx-auto block sm:flex sm:gap-10 mt-10 sm:mt-20 justify-center">
        <p class="ml-4 content-center" :style="widthClass" data-aos="fade-up">
          V-Bike為了瞭解真實全景影片式虛擬實境對於高齡者使用踩踏裝置的動機成效，將裝置帶至嘉義東過社區進行兩個月的測試，
          實驗過程中記錄此系統在社區場域與高齡者互動的情況，了解是否符合場域需求，以及高齡者、親屬與照護者的使用意願性，
          作為未來落實評估的依據。受測對象為65歲以上之高齡者。收案人數為10人。高齡者在實驗介入前從未使用過此V-Bike系統，
          且透過MMSE認知評估量表進行評估為認知正常，同時必須長期於該場域活動，並排除：下肢受損嚴重以致無法進行實驗動作、
          視覺與聽覺受損以致無法進行實驗的受測者。
        </p>
    </div>
    <div class="container mx-auto block sm:flex sm:gap-10 mt-10 sm:mt-10 justify-center">
        <p class="ml-4 content-center" :style="widthClass" data-aos="fade-up">
          測試過程中，我們收集高齡者的相關生理數據，如：(1)踩踏圈數：分別紀錄高齡者使用資訊版與風景版每次的踩踏圈數，以比較受測者前後是否有變化與其原因、
          (2)踩踏速率：分別紀錄高齡者使用資訊版與風景版每次的踩踏速率，以每秒測到的踩踏速率綜合除以每次踩踏時間。以了解受測者的下肢能力在資訊版與風景版之間是否有差異、
          (3)平均心率：將每次踩踏過程中的心率總和除以踩踏時間，作為受試者在踩踏時衡量運動能力的參考、
          (4)踩踏次數：以確保高齡者使用的次數足夠且差異較小，不會影響使用動機。踩踏圈數、踩踏速率與平均心率以即時數據的方式記錄，後續再透過平均計算整理。
        </p>
    </div>
    <div class="container mx-auto block sm:flex mt-10 sm:gap-10 sm:mt-10 justify-center">
        <img :src=picture_vbike06 class="content-center" :style="imgClass" data-aos="fade-up">
    </div> 
    <div class="container mx-auto block sm:flex sm:gap-10 mt-10 sm:mt-20 justify-center">
        <p class="ml-4 content-center" :style="widthClass" data-aos="fade-up">
          透過兩個月的測試後，我們認為透過真實全景影片進行觀賞，高齡者會更覺得自己有親身到當地遊玩的感受。針對真實全景影片帶來的沉浸體驗之特色如何讓高齡者長期使用，
          我們提出可以藉由虛擬導覽的方式，利用關卡或箭頭指引他們使用360度觀賞，增加他們對內容的認識。針對系統內容方面，我們建議能增加真實全景影片數量到10部以上讓高齡者能有更多的選擇，
          並搭配影音解說導覽風景內容與遊戲關卡設計，預期能讓高齡者享受真實全景影片的沉浸體驗之外，更投入於互動系統當中。但目前真實全景影片虛擬實境結合踩踏裝置僅測試於社區場域，
          尚未針對日照中心與其他院所進行測試，但我們認為落實於日照中心應具有可行性。未來我們會依循該篇之建議進行修正，並進行其他實驗與場域測試，以期待此項設計能真正應用到場域幫助更多高齡者在漫長訓練中更有動機去完成，幫助高齡者下肢健康。
        </p>
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
import picture_vbike06 from '@/assets/picture_vbike06.svg';
import router from '@/router';


//const showOverlay = ref(false);
const imageUrl = ref(background_vbike);

const titleSizeClass = ref({});
const subtitleSizeClass = ref({});
const contentSizeClass = ref({});
const imgClass = ref({});
const widthClass = ref({});
const headingClass = ref({});

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
.content-center{
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>