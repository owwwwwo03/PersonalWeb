<template>
    <div :style="{ 'background-image': 'url(' + imageUrl + ')' }" class="background-container">
          <!-- Text on the background image -->
          <div class="text-overlay custom-font">
              <p :style="titleSizeClass" class="text-overlay-content mb-2 font-bold">Kick</p>
              <p :style="subtitleSizeClass" class="text-overlay-content mb-6">運用腿部動作操控桌上足球台設計</p>
              <p :style="contentSizeClass" class="text-overlay-content">
                KICK為運用腿部動作操控桌上足球台，改變桌上足球台的互動形式，將操作結合到腳上，讓年輕人能有新穎的互動體驗，
                同時可以幫助高齡者小腿伸展及多重認知任務訓練，以達到重複性訓練的小腿運動效果，
                進而減緩高齡者下肢肌力衰弱、預防步態不穩的情況產生。</p>
          </div>
      </div>
    <div class="container mx-auto custom-font">
      <div class="text-left ml-18 mt-10">
        <h1 class="font-bold ml-4" :style="headingClass">
          Review
        </h1>
      </div>
    </div>
    <div class="container mx-auto block sm:flex sm:gap-10 mt-10 sm:mt-10 justify-center">
      <img :src=gif_kick01>
    </div>
    <div class="container mx-auto custom-font">
      <div class="text-left ml-18 mt-10">
        <h1 class="font-bold ml-4" data-aos="fade-left" :style="headingClass">
          Features
        </h1>
      </div>
    </div>
    <div class="container mx-auto block sm:flex sm:gap-10 mt-10 sm:mt-10 justify-center">
        <p class="ml-4 content-center" :style="widthClass" data-aos="fade-up">
          Kick為一台兩側各三排的桌上足球台、兩個手持控制器、兩個感測晶片(放置於腿帶內)、
          及兩套腿帶。高齡者利用腿帶固定晶片於小腿脛骨上，透過小腿前後左右的移動伸展，轉換成數值控制桌上足球員的移動，
          並透過手握控制器操作前中後排的設計，
        </p>
    </div>
    <div class="container mx-auto block sm:flex sm:gap-10 mt-10 sm:mt-10 justify-center">
        <img :src=picture_kick01 class="content-center" :style="imgClass" data-aos="fade-up">
    </div>
    <div class="container mx-auto block sm:flex sm:gap-10 mt-10 sm:mt-10 justify-center">
        <p class="ml-4 content-center" :style="widthClass" data-aos="fade-up">
          我們將此設備讓年輕人進行體驗。大部分年輕人皆認為此項操作很有趣，
          可以訓練到自己的反應能力。透過互相競爭遊戲的方式，可以讓彼此更透入於遊戲中。
        </p>
    </div>
    <div class="container mx-auto block sm:flex sm:gap-10 mt-10 sm:mt-10 justify-center">
        <img :src=picture_kick02 class="content-center" :style="imgClass" data-aos="fade-up">
    </div>
    <div class="container mx-auto block sm:flex sm:gap-10 mt-10 sm:mt-10 justify-center">
        <p class="ml-4 content-center" :style="widthClass" data-aos="fade-up">
          同時我們將Kick帶至高雄榮民醫院-台南分院日間照護中心，給高齡者進行三個禮拜的操作體驗。對於高齡者來說，
          他們認為此項設備可以讓他們動腦去思考，要如何才能踢到球。不會讓他們太累，又能運動到。
          但在操作過程中，需要有照護人員協助，才能讓高齡者更順利的進行遊戲。
        </p>
    </div>
    <div class="container mx-auto block sm:flex sm:gap-10 mt-10 sm:mt-10 justify-center">
        <img :src=picture_kick03 class="content-center" :style="imgClass" data-aos="fade-up">
    </div>
    <!--
         <div class="fancy">
            <input type="text" placeholder="Enter your name" />
        </div>
    -->
    <div class="container mx-auto custom-font block sm:flex sm:gap-10 mt-10 sm:mt-20 justify-center">
      <div class="button-section">
          <button type="button" class="btn-default" @click="goBackToProjects()">Go Back</button>
      </div>
    </div>
</template>
<script lang="ts" setup>
    import { ref, onMounted, onBeforeUnmount } from 'vue';
    import background_kick from '@/assets/background_kick.svg';
    import gif_kick01 from '@/assets/gif_kick01.gif';
    //import gif_kick02 from '@/assets/gif_kick02.gif';
    import picture_kick01 from '@/assets/picture_kick01.svg';
    import picture_kick02 from '@/assets/picture_kick02.svg';
    import picture_kick03 from '@/assets/picture_kick03.svg';
    import router from '@/router';

    const imageUrl = ref(background_kick);

    const titleSizeClass = ref({});
    const subtitleSizeClass = ref({});
    const contentSizeClass = ref({});
    const imgClass = ref({});
    const widthClass = ref({});
    const headingClass = ref({});

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
        contentSizeClass.value = { fontSize: '18px' };
        imgClass.value = {width:'60%'};
        widthClass.value = {width:'100%'};
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

  .img {
  transition: transform 0.3s ease;
  }

  .img:hover {
    transform: scale(1.1); /* Example: enlarging the image on hover */
  }

  .fancy {
    --offset: 3px;
    background: rgb(55, 21, 90);
    border-radius: 50px;
    position: relative;
    height: 75px;
    width: 400px;
    max-width: 100%;
    overflow: hidden;
}

/* Conic gradient */
.fancy::before { 
    content: '';
    background: conic-gradient(transparent 270deg, white, transparent);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    aspect-ratio: 1;
    width: 100%;
    animation: rotate 2s linear infinite;
}

/* Overlay */
.fancy::after {
    content: '';
    background: inherit;
    border-radius: inherit;
    position: absolute;
    inset: var(--offset);
    height: calc(100% - 2 * var(--offset));
    width: calc(100% - 2 * var(--offset));
}

.fancy input {
    background: transparent;
    color: white;
    font-size: 1.5rem;
    position: absolute;
    inset: 0;
    z-index: 10;
    padding: 1.5rem;
}

@keyframes rotate {
    from {
        transform: translate(-50%, -50%) scale(1.4) rotate(0turn);
    }

    to {
        transform: translate(-50%, -50%) scale(1.4) rotate(1turn);
    }
}

.content-center{
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
</style>