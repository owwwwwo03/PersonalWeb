<template>
    <div class="container mx-auto block sm:flex sm:gap-10 mt-10 sm:mt-20 justify-center">
      <img :src=gif_kick01>
      <img :src=gif_kick02>
    </div>
    <!--
         <div class="fancy">
            <input type="text" placeholder="Enter your name" />
        </div>
    -->
   
</template>
<script lang="ts" setup>
    import gif_kick01 from '@/assets/gif_kick01.gif';
    import gif_kick02 from '@/assets/gif_kick02.gif';
    
</script>

<style>
  .img {
  transition: transform 0.3s ease;
  }

  .img:hover {
    transform: scale(1.1); /* Example: enlarging the image on hover */
  }

  .fancy {
    --offset: 3px;
    background: rgb(55, 21, 90);
    border-radius: 50px;
    position: relative;
    height: 75px;
    width: 400px;
    max-width: 100%;
    overflow: hidden;
}

/* Conic gradient */
.fancy::before { 
    content: '';
    background: conic-gradient(transparent 270deg, white, transparent);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    aspect-ratio: 1;
    width: 100%;
    animation: rotate 2s linear infinite;
}

/* Overlay */
.fancy::after {
    content: '';
    background: inherit;
    border-radius: inherit;
    position: absolute;
    inset: var(--offset);
    height: calc(100% - 2 * var(--offset));
    width: calc(100% - 2 * var(--offset));
}

.fancy input {
    background: transparent;
    color: white;
    font-size: 1.5rem;
    position: absolute;
    inset: 0;
    z-index: 10;
    padding: 1.5rem;
}

@keyframes rotate {
    from {
        transform: translate(-50%, -50%) scale(1.4) rotate(0turn);
    }

    to {
        transform: translate(-50%, -50%) scale(1.4) rotate(1turn);
    }
}
</style>