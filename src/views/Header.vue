<template>
  <nav class="main-header navbar navbar-expand">
    <!-- Header start -->
    <div class="d-flex p-3 justify-content-between align-items-center w-100">
      <!-- Header menu links and small screen hamburger menu -->
      <!-- Header logos -->
      <div class="d-flex">
        <a href="/" class="navbar-brand custom-font">Home</a>
      </div>

      <!-- Header links -->
      <div class="container-fluid">
        <div class="custom-font">
          <ul class="navbar-nav">
            <a href="/projects" class="nav-link" aria-label="Projects">Projects</a>
            <a href="/about" class="nav-link" aria-label="About Me">About</a>
            <a href="/contact" class="nav-link" aria-label="Contact">Contact</a>
          </ul>
        </div>
      </div>
      <!-- Header links global-->
      <div class="dropdown">
        <button data-feather="globe" type="button" id="dropdownLangsButton" data-bs-toggle="dropdown"
          aria-expanded="false" @click="() => { isLangsHidden = !isLangsHidden }">
        </button>
        <div :class="{ hidden: isLangsHidden }">
          <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownLangsButton">
            <li>
              <button type="button" class="dropdown-item d-flex" @click="changeLanguage('en-US')">
                <div class="d-flex items-center">
                  <div class="w-6">
                    <CheckIcon class="h-4 w-4" :class="{ hidden: selectedLanguage != 'en-US' }" />
                  </div>
                  English
                </div>
              </button>
            </li>
            <li>
              <button type="button" class="dropdown-item d-flex justify-content-between" @click="changeLanguage('zh-TW')">
                <div class="d-flex items-center">
                  <div class="w-6">
                    <CheckIcon class="h-4 w-4" :class="{ hidden: selectedLanguage != 'zh-TW' }" />
                  </div>
                  繁體中文
                </div>
              </button>
            </li>
            <li>
              <button type="button" class="dropdown-item d-flex justify-content-between" @click="changeLanguage('ja-JP')">
                <div class="d-flex items-center">
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
const selectedLanguage = ref("");


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