<template>
  <nav class="sm:container sm:mx-auto">
    <!-- Header start -->
    <div class="max-w-lg mx-auto block sm:flex sm:justify-between sm:items-center my-6">
      <!-- Header menu links and small screen hamburger menu -->
      <!-- Header links -->
      <div>
        <div class="custom-font flex" :class="spaceClass">
           <!-- Header logos -->
          <a href="/PersonalWeb/">Home</a>
          <ul class="flex space-x-6">
            <router-link to="/PersonalWeb/projects" class="nav-link">{{$t("project-title")}}</router-link>
            <router-link to="/PersonalWeb/about" class="nav-link">{{$t("about-title")}}</router-link>
            <router-link to="/PersonalWeb/contact" class="nav-link">{{$t("contact-title")}}</router-link>
          </ul>
          <!-- Header links global-->
          <div>
            <button type="button" class="relative" @click="() => { isLangsHidden = !isLangsHidden }">
              <i data-feather="globe"></i>
            </button>
            <div id="dropdown-langs" :class="{ hidden: isLangsHidden }"
              class="z-8 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute top-16"  style="transform: translateX(-150px)">
              <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="langs-button">
                <li>
                  <button type="button" class="inline-flex w-full px-4 py-2 text-sm" @click="changeLanguage('en-US')">
                    <div class="inline-flex items-center">
                      <div class="w-6">
                        <CheckIcon class="h-4 w-4" :class="{ hidden: selectedLanguage != 'en-US' }" />
                      </div>
                      English
                    </div>
                  </button>
                </li>
                <li>
                  <button type="button" class="inline-flex w-full px-4 py-2 text-sm" @click="changeLanguage('zh-TW')">
                    <div class="inline-flex items-center">
                      <div class="w-6">
                        <CheckIcon class="h-4 w-4" :class="{ hidden: selectedLanguage != 'zh-TW' }" />
                      </div>
                      繁體中文
                    </div>
                  </button>
                </li>
                <li>
                  <button type="button" class="inline-flex w-full px-4 py-2 text-sm" @click="changeLanguage('ja-JP')">
                    <div class="inline-flex items-center">
                      <div class="w-6">
                        <CheckIcon class="h-4 w-4" :class="{ hidden: selectedLanguage != 'ja-JP' }" />
                      </div>
                      日本語
                    </div>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import feather from 'feather-icons';
import { CheckIcon } from '@heroicons/vue/24/solid';
import { onMounted, ref, onUpdated, onBeforeUnmount } from 'vue';
import { useI18n } from 'vue-i18n';

const spaceClass = ref('');

const { locale } = useI18n();

const isLangsHidden = ref(true);
const selectedLanguage = ref(localStorage.getItem('selectedLanguage') || "zh-TW");

const changeLanguage = (lang) => {
  localStorage.setItem('selectedLanguage', lang);
  locale.value = lang;
  selectedLanguage.value = lang;
  isLangsHidden.value = true;
  console.log(selectedLanguage.value);
}

const adjustSize = () => {
  const screenWidth = window.innerWidth;
  // Adjust text size based on screen width
  if (screenWidth <= 768) {
    spaceClass.value = 'space-x-8';
  } else {
    spaceClass.value = 'space-x-20';
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

<style scoped>
.main-header {
  background-color: #ffffff !important;
  color: #4b545c !important;
  border: 0px !important;
}

.custom-font {
  font-family: Inter, sans-serif;
  font-size: 1.4em;
  font-weight: bold; 
}

#nav a.router-link-exact-active {
	@apply text-indigo-700;
	@apply dark:text-indigo-400;
	@apply font-medium;
}

/* 在手機螢幕寬度下的 CSS */
@media only screen and (max-width: 640px) {
  /* 移除不必要的容器 */
  .container-fluid {
    display: block;
    width: 100%;
  }
  
  /* 調整元素排列 */
  .max-w-screen-lg {
    width: 100%;
  }
  .custom-font {
    font-family: Inter, sans-serif;
    font-size: 1.2em;
    font-weight: bold; 
  }
  
  /* 調整按鈕和下拉選單寬度 */
  .relative {
    width: auto;
  }
  #dropdown-langs {
    width: 100%;
    margin-left: 0;
  }
}
</style>