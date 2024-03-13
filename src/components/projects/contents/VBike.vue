<template>
    <div :style="{ 'background-image': 'url(' + imageUrl + ')' }" class="background-container">
        <!-- Text on the background image -->
        <div class="text-overlay custom-font">
            <p>V-Bike</p>
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
    padding: 160px;
    color: white; /* Adjust the color as needed */
    /* Make the font size responsive to the screen size */
    font-size: 10em; /* Adjust the formula as needed */
    text-align: center; /* Center the text horizontally */
}

</style>