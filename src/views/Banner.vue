<template>
	<section class="pt-5 pt-sm-5">
		<!-- Banner left contents -->
		<div class='projects-carousel'>
			<ul class="carousel-body">
				<li class="carousel-item fade">
					<RouterLink to="/">
						<img src="">
					</RouterLink>
				</li>
			</ul>
			
			<a href="javascript:;" class="carousel-btn prev">
				<i data-feather="chevron-left"></i>
			</a>
			<a href="javascript:;" class="carousel-btn next">
				<i data-feather="chevron-right"></i>
			</a>
			
			<div class="carousel-indicator">
				<span v-for="i in 5" :key="i"></span>
			</div>
		</div>

		<!-- Banner right illustration -->
		<div class="">

		</div>
	</section>
</template>

<script lang="ts" setup>
import feather from 'feather-icons';
import { onMounted, reactive, onUpdated } from 'vue';
onMounted(() => {
	feather.replace();
});
onUpdated(() => {
	feather.replace();
});
</script>

<style lang="scss" scoped>

.projects-carousel{
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
      position: absolute;
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
      position: absolute;
      left: 0;
      bottom: 20px;
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

</style>