<template>
    <div :style="{ 'background-image': 'url(' + imageUrl + ')' }" class="background-container">
        <!-- Text on the background image -->
        <div class="text-overlay custom-font">
            <p class="text-overlay-title mb-2">V-Bike</p>
            <p class="text-overlay-subtitle mb-10">真實全景影片式虛擬實境結合下肢踩踏裝置系統</p>
            <p class="text-overlay-content">
                V-Bike 是一套透過生理數據、訓練課程等設計，並結合360度真實全景影片式虛擬實境技術的踩踏裝置系統。
                透過簡單的操作模式，高齡長輩即使人在病房、室內場所，也能V-Bike前往不同的風景名勝、國外景點，
                一邊踩踏一邊欣賞當地360度的景色，讓訓練不單單只是訓練，而是一趟美好的旅程。</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import background_vbike from '@/assets/background_vbike.svg';
const imageUrl = ref(background_vbike);
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
    background-attachment: fixed;
    /* Optional: Add some width to the container */
    width: 100%;
    /* Use viewport units for the height to make it responsive */
    height: 80vh;
    /* Optional: Add overflow properties if needed */
    overflow: hidden;
    /* Use flexbox to center the text */
}
.text-overlay { 
    /* Optional: Add some padding to the text */
    padding: 150px;
    color: white; /* Adjust the color as needed */
    
}
.text-overlay-title { 
    font-size: 8em; /* Adjust the formula as needed */
    text-align: center; /* Center the text horizontally */
}

.text-overlay-subtitle { 
    font-size: 1.5em; /* Adjust the formula as needed */
    text-align: center; /* Center the text horizontally */
}

.text-overlay-content { 
    font-size: 1em; /* Adjust the formula as needed */
    text-align: center; /* Center the text horizontally */
}

</style>