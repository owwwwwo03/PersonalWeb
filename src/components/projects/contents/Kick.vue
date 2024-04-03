<template>
    <div :style="{ 'background-image': 'url(' + imageUrl + ')' }" class="background-container">
          <!-- Text on the background image -->
          <div class="text-overlay custom-font">
              <p :style="titleSizeClass" class="text-overlay-content mb-2 font-bold">Kick</p>
              <p :style="subtitleSizeClass" class="text-overlay-content mb-6">運用腿部動作操控桌上足球台設計</p>
              <p :style="contentSizeClass" class="text-overlay-content">
                KICK為運用腿部動作操控桌上足球台，裝置為一台兩側各三排的桌上足球台、兩個手持控制器、兩個感測晶片(放置於腿帶內)、
                及兩套腿帶。高齡者利用腿帶固定晶片於小腿脛骨上，透過小腿前後左右的移動伸展，轉換成數值控制桌上足球員的移動，
                並透過手握控制器操作前中後排的設計，提供高齡者小腿伸展及多重認知任務訓練，以達到重複性訓練的小腿運動效果，
                進而減緩高齡者下肢肌力衰弱、預防步態不穩的情況產生。</p>
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
      <img :src=gif_kick01>
      <img :src=gif_kick02>
    </div>
    <!--
         <div class="fancy">
            <input type="text" placeholder="Enter your name" />
        </div>
    -->
   
</template>
<script lang="ts" setup>
    import { ref, onMounted, onBeforeUnmount } from 'vue';
    import background_kick from '@/assets/background_kick.svg';
    import gif_kick01 from '@/assets/gif_kick01.gif';
    import gif_kick02 from '@/assets/gif_kick02.gif';

    const imageUrl = ref(background_kick);

    const titleSizeClass = ref({});
    const subtitleSizeClass = ref({});
    const contentSizeClass = ref({});
    

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

<style>

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
</style>