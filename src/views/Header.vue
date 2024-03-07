<template>
  <nav class="sm:container sm:mx-auto">
    <!-- Header start -->
    <div class="z-10 max-w-screen-lg mx-auto block sm:flex sm:justify-between sm:items-center my-6">
      <!-- Header menu links and small screen hamburger menu -->
      <!-- Header logos -->
      <div class="flex justify-between items-center px-4 sm:px-0">
        <a href="/PersonalWeb/" class="custom-font">Home</a>
      </div>

      <!-- Header links -->
      <div class="container-fluid">
        <div class="custom-font">
          <ul class="flex space-x-4">
            <a href="/PersonalWeb/projects" class="nav-link">{{$t("project-title")}}</a>
            <a href="/PersonalWeb/about" class="nav-link">{{$t("about-title")}}</a>
            <a href="/PersonalWeb/contact" class="nav-link">{{$t("contact-title")}}</a>
          </ul>
        </div>
      </div>
      <!-- Header links global-->
      <div >
        <button type="button" class="relative" @click="() => { isLangsHidden = !isLangsHidden }">
          <i data-feather="globe"></i>
        </button>
        <div id="dropdown-langs" :class="{ hidden: isLangsHidden }"
          class="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute top-16 ml-[-10rem]">
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
  </nav>
</template>

<script lang="ts" setup>
import feather from 'feather-icons';
import { CheckIcon } from '@heroicons/vue/24/solid';
import { onMounted, ref, onUpdated } from 'vue';
import { useI18n } from 'vue-i18n';


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


onMounted(() => {
  feather.replace();
});
onUpdated(() => {
  feather.replace();
});

</script>

<style scoped>
.main-header {
  background-color: #ffffff !important;
  color: #4b545c !important;
  border: 0px !important;
}

.custom-font {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.2em;
  font-weight: bold; 
}

#nav a.router-link-exact-active {
	@apply text-indigo-700;
	@apply dark:text-indigo-400;
	@apply font-medium;
}
</style>