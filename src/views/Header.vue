<template>
  <nav class="sm:container sm:mx-auto">
    <!-- Header start -->
    <div class="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center my-6">
      <!-- Header menu links and small screen hamburger menu -->
      <!-- Header logos -->
      <div class>
        <a href="/" class="custom-font flex justify-evenly items-center px-4 sm:px-0">Home</a>
      </div>

      <!-- Header links -->
      <div class="container-fluid">
        <div class="custom-font">
          <ul class="flex space-x-4">
            <a href="/projects" class="nav-link">Projects</a>
            <a href="/about" class="nav-link">About</a>
            <a href="/contact" class="nav-link">Contact</a>
          </ul>
        </div>
      </div>
      <!-- Header links global-->
      <div>
        <button type="button" @click="() => { isLangsHidden = !isLangsHidden }">
          <i data-feather="globe"></i>
        </button>
        <div id="dropdown-langs" :class="{ hidden: isLangsHidden }"
          class="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute top-16 mr-16">
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
import { useStore } from 'vuex';
import { CheckIcon } from '@heroicons/vue/24/solid';
import { onMounted, ref, reactive, onUpdated } from 'vue';
import { useI18n } from 'vue-i18n';


const store = useStore();
const { locale } = useI18n();

const isLangsHidden = ref(true);
const selectedLanguage = ref("zh-TW");


const changeLanguage = (lang) => {
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
}
</style>