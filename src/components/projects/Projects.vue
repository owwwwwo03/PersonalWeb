<template>
    <div class="container mx-auto">
        <!-- Projects grid -->
        <section class="pt-5 pt-sm-5">
            <!-- Projects grid title -->
            <div class="text-center">
                <h1 class="">Projects</h1>
            </div>
            <!-- Projects grid -->
            <div class="filter">
                <!--Filter and search projects-->
                <div class="flex justify-between">
                    <div class="flex justify-between">
                        <span class="">
                            <i class="text-primary"></i>
                        </span>

                    </div>

                </div>
                <!-- Project Gallery -->
                <div class="projectGallery" v-for="item in useProjectData" :key="item.id">
                    <router-link :to="item.url" class="" aria-label="">
                        <div>
                            <img class="" />
                        </div>
                        <div class="text-center px-4 py-6">
                            <p class="font-weight-bold text-xl text-dark mb-2">{{ item.title }}</p>
                            <span class="font-weight-medium text-lg text-dark">{{ item.category }}</span>
                        </div>
                    </router-link>
                </div>


            </div>
        </section>
    </div>
</template>

<script lang="ts" setup>
import useProjectData from '../../data/projects';


</script>

<style></style>