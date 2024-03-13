<template>
	<section class="pt-5 sm:pt-5">
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
          <img :src="banner_picture01">
        </swiper-slide>
        <swiper-slide>
          <img :src="banner_picture02">
        </swiper-slide>
        <swiper-slide>
          <img :src="banner_picture03">
        </swiper-slide>
        <div class="swiper-button-prev" @click.stop="prevEl"></div>
        <!--左箭头。如果放置在swiper外面，需要自定义样式。-->
        <div class="swiper-button-next" @click.stop="nextEl"></div>
        <!--右箭头。如果放置在swiper外面，需要自定义样式。-->
        <!-- 如果需要滚动条 -->
        <!-- <div class="swiper-scrollbar"></div> -->
    </swiper>	
	</section>
</template>

<script lang="ts" setup>
import feather from 'feather-icons';
import { onMounted, ref, onUpdated } from 'vue';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import banner_picture01 from '@/assets/banner_picture01.svg';
import banner_picture02 from '@/assets/banner_picture02.svg';
import banner_picture03 from '@/assets/banner_picture03.svg';
import { Swiper, SwiperSlide } from "swiper/vue";
import {Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules';

const navigation = ref({
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
});

// 在modules加入要使用的模块
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
onMounted(() => {
	feather.replace();
});
onUpdated(() => {
	feather.replace();
});
</script>

<style lang="scss" scoped>
.swiper {
  width: 100wh;
  height: 50vh;
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
  height: 40vh;
}
</style>