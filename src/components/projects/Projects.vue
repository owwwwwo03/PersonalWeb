<template>
    <!-- Projects grid title -->
    <div class="text-left ml-36">
        <h1 class="text-6xl font-bold">Projects</h1>
    </div>
    <div class="container mx-auto">
        <!-- Projects grid -->
        <section class="pt-5 sm:pt-5">
            <!-- Projects grid -->
            <div class="filter mt-4">
                <!--Filter and search projects-->
                <div class="flex justify-between">
                    <div class="flex justify-between">
                        <span class="">
                            <i class="text-primary"></i>
                        </span>

                    </div>

                </div>
                <!-- Project Gallery -->

                <div class="container mx-auto">
                    <div class="flex justify-center">
                        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div class="projectGallery" v-for="item in useProjectData" :key="item.id">
                                <router-link :to="item.url" class="block cursor-pointer mb-2" aria-label="">
                                    <div>
                                        <img class="border-none" src="../../assets/sampleProject.svg" />
                                    </div>
                                    <div class="text-center px-4 py-6">
                                        <p class="font-bold text-xl text-dark mb-2">{{ item.title }}</p>
                                        <p class="font-medium text-lg text-dark">{{ item.category }}</p>
                                        <p v-for="skill in item.skill" :key="skill"
                                            :style="{ backgroundColor: getSkillColor(skill) }"
                                            class="inline-block bg-black text-white rounded-full py-2 px-4 m-1"
                                           >
                                            {{ skill }}
                                        </p>
                                    </div>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    </div>
</template>

<script lang="ts" setup>
import useProjectData from '../../data/projects';
import useSkillColorsData from '../../data/skillColors';

const getSkillColor = (inputSkill) =>{
    const matchedSkill = useSkillColorsData.find(item => item.skill === inputSkill);
    return matchedSkill ? matchedSkill.color : '#666';
};


</script>

<style></style>