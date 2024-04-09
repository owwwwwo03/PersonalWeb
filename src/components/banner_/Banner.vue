<template>
	<section class="sm:pt-2">
    <swiper
        :modules="modules"
        :loop="true"
        :slides-per-view="1"
        :space-between="50"
        :autoplay="{ delay: 4000, disableOnInteraction: false }"
        :navigation="navigation"
        :pagination="{ clickable: true }"
        :scrollbar="{ draggable: false }"
        class="swiperBox"
        @slideChange="onSlideChange"
    >
        <swiper-slide>
          <img :src="imageUrl01">
        </swiper-slide>
        <swiper-slide>
          <img :src="imageUrl02">
        </swiper-slide>
        <!--
          <swiper-slide v-for="(image, index) in images" :key="index">
          <img :src="getImageUrl(image)" />
          </swiper-slide>
        -->
        <div class="swiper-button-prev" @click.stop="prevEl"></div>
        <!--左箭頭。如果放置在swiper外面，需要自定義樣式。-->
        <div class="swiper-button-next" @click.stop="nextEl"></div>
        <!--右箭頭。如果放置在swiper外面，需要自定義樣式。-->
        <!-- 如果需要滾動條 -->
        <!-- <div class="swiper-scrollbar"></div> -->
    </swiper>	
	</section>
</template>

<script lang="ts" setup>
import feather from 'feather-icons';
import { onMounted, ref, onUpdated, onBeforeUnmount } from 'vue';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import banner_picture01_1 from '@/assets/banner_picture01_1.svg';
import banner_picture01_2 from '@/assets/banner_picture01_2.svg';
import banner_picture02_1 from '@/assets/banner_picture02_1.svg';
import banner_picture02_2 from '@/assets/banner_picture02_2.svg';
import { Swiper, SwiperSlide } from "swiper/vue";
import {Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules';

const imageUrl01 = ref();
const imageUrl02 = ref();

const navigation = ref({
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
});

// 在modules加入要使用的模組
const modules = [Autoplay, Pagination, Navigation, Scrollbar];
const prevEl = () => {
  // console.log('上一張' + index + item)
};
const nextEl = () => {
  // console.log('下一張')
};
// 更改当前活动swiper
const onSlideChange = () => {
// swiper是当前轮播的对象，里面可以获取到当前swiper的所有信息，当前索引是activeIndex
}

const adjustSize = () => {
  const screenWidth = window.innerWidth;
  // Adjust text size based on screen width
  if (screenWidth <= 768) {
    imageUrl01.value = banner_picture01_2;
    imageUrl02.value = banner_picture02_2;
  } else {
    imageUrl01.value = banner_picture01_1;
    imageUrl02.value = banner_picture02_1;
  }
};


onMounted(() => {
	feather.replace();
  adjustSize();
  window.addEventListener('resize', adjustSize);
});
onUpdated(() => {
	feather.replace();
});


onBeforeUnmount(() => {
  window.removeEventListener('resize', adjustSize);
});
</script>

<style lang="scss" scoped>
.swiper {
  width: 100wh;
  height: auto;
  --swiper-theme-color: #fff;
  --swiper-navigation-color: #fff;
  --swiper-navigation-size: 30px;
}

.swiper-slide img {
    width: 100%; /* 图片宽度占据其父元素的100% */
    height: auto; /* 自动调整高度以保持图像比例 */
}

.full-screen {
  width: 100wh;
  height: auto;
}
</style>