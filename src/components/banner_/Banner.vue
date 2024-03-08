<template>
	<section class="pt-5 sm:pt-5">
		<!-- Banner contents -->
		<div class='my-carousel' @mouseenter="stop" @mouseleave="start">
      <Transition name="fade">
        <ul class="carousel-body flex">
          <li v-for="(item,i) in props.findBannerList" :key="item.id" class="carousel-item">
            <RouterLink to="/PersonalWeb/projects" class="block">
              <div class="screen-image">          
                <img :src="item.imgUrl">  
              </div>   
            </RouterLink>
          </li>
        </ul>
      </Transition>		
			
			<a @click="clickFn(-1)" href="javascript:;" class="carousel-btn prev">
				<i class="custom-chevron-left" data-feather="chevron-left"></i>
			</a>
			<a @click="clickFn(1)" href="javascript:;" class="carousel-btn next">
				<i class="custom-chevron-right" data-feather="chevron-right"></i>
			</a>	
			<div class="carousel-indicator">
				<span @click="active(i)" v-for="(item, i) in props.findBannerList" :key="i" :class="{ active: index === i }"></span>
			</div>
		</div>
	</section>
</template>

<script lang="ts" setup>
import feather from 'feather-icons';
import { onMounted, ref, watch, onUpdated, onUnmounted } from 'vue';
import banner_picture01 from '@/assets/banner_picture01.svg';
import banner_picture02 from '@/assets/banner_picture02.svg';

interface Props {
    findBannerList: Array<any>;
    autoplay: boolean;
    duration: number;
  }

  const props: Props = {
    findBannerList: [
      {
        id:1,
        imgUrl:banner_picture01
      },
      {
        id:2,
        imgUrl:banner_picture02
      },
      {
        id:3,
        imgUrl:banner_picture02
      }
    ],
    autoplay: true,
    duration: 3
  }

  const index = ref(0)
  const timer = ref<number | null>(null)

  const autoplayFn = () => {
    if (timer.value !== null) clearInterval(timer.value)
    timer.value = setInterval(() => {
      index.value += 1
      if (index.value >= props.findBannerList.length) {
        index.value = 0
      }
    }, props.duration * 1000)as unknown as number
  }

  watch(
    () => props.findBannerList,
    () => {
      if (props.findBannerList.length > 1 && props.autoplay) {
        autoplayFn()
      }
    }
  )
  //滑鼠移入輪播圖，停止自動播放
  const stop = () => {
    if (timer.value !== null) clearInterval(timer.value)
  }
  //滑鼠移出輪播圖，開啟計時器
  const start = () => {
    if (props.findBannerList.length > 1 && props.autoplay) {
      autoplayFn()
    }
  }
  // 點擊輪播圖上的左右按鈕，切換輪播圖
  const clickFn = (e: number) => {
    index.value += e
    if (index.value >= props.findBannerList.length) {
      index.value = 0
    }
    if (index.value < 0) {
      index.value = props.findBannerList.length - 1
    }
  }
  // 點擊指示器(輪播圖底下的小點)，切換輪播圖
  const active = (e: number) => {
    index.value = e
  }
  //避免性能損耗
  onUnmounted(() => {
    if (timer.value !== null) clearInterval(timer.value)
  })


onMounted(() => {
	feather.replace();
});
onUpdated(() => {
	feather.replace();
});
</script>

<style lang="scss" scoped>

.my-carousel{
  width: 100%;
  height: 100%;
  min-width: 300px;
  min-height: 150px;
  position: relative;
  .carousel{
    &-body {
      width: 100%;
      height: 100%;
    }
    &-item {
      width: 100%;
      height: 100%;
      position: relative;
      left: 0;
      top: 0;
      opacity: 0;
      transition: opacity 0.5s linear;
      &.fade {
        opacity: 1;
        z-index: 1;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
    &-indicator {
      position: relative;
      left: 0;
      bottom: 30px;
      z-index: 2;
      width: 100%;
      text-align: center;
      span {
        display: inline-block;
        width: 12px;
        height: 12px;
        background: rgba(0,0,0,0.2);
        border-radius: 50%;
        cursor: pointer;
        ~ span {
          margin-left: 12px;
        }
        &.active {
          background:  #fff;
        }
      }
    }
    &-btn {
      width: 44px;
      height: 44px;
      background: rgba(0,0,0,.2);
      color: #fff;
      border-radius: 50%;
      position: absolute;
      top: 228px;
      z-index: 2;
      text-align: center;
      line-height: 44px;
      opacity: 0;
      transition: all 0.5s;
      &.prev{
        left: 20px;
      }
      &.next{
        right: 20px;
      }
    }
  }
  &:hover {
    .carousel-btn {
      opacity: 1;
    }
  }
}
.custom-chevron-left {
  transform: translate(8px,10px);
}

.custom-chevron-right {
  transform: translate(10px,10px); 
}

.screen-image {
    width: 100vw; /* 占据视口的宽度 */
    height: 40vh; /* 占据视口的高度 */
    overflow: hidden; /* 防止图片溢出 */
}

.screen-image img {
    width: 100%; /* 图片填充整个容器 */
    height: 40%; /* 图片填充整个容器 */
    object-fit: cover; /* 确保图片完全填充容器并保持纵横比 */
}
</style>