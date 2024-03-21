<template>
    <div class="container mx-auto custom-font">
        <!-- Projects grid title -->
        <div class="text-left ml-18">
            <h1 class="text-6xl font-bold">{{$t("project-title")}}</h1>
            <div class="container mx-auto">
                <!-- Projects grid -->
                <section class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
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
                                        <router-link :to="item.url" class="block cursor-pointer mb-4" aria-label="">
                                            <div class="flex flex-col items-center">
                                                <div>
                                                    <img class="border-none" :src="item.imgUrl" />
                                                </div>
                                                <div class="text-center px-4 py-6 mr-4">
                                                    <p class="font-bold text-4xl text-dark mb-4">{{ item.title }}</p>
                                                    <p v-for="category in item.category" :key="category"
                                                    :style="{backgroundColor: getCategoryColor(category)}"
                                                    class="inline-block bg-black text-white rounded-full py-2 px-4 m-1"
                                                    >
                                                    {{ category }}</p>
                                                    <p v-for="skill in item.skill" :key="skill"
                                                        :style="{ backgroundColor: getSkillColor(skill) }"
                                                        class="inline-block bg-black text-white rounded-full py-2 px-4 m-1"
                                                    >
                                                        {{ skill }}
                                                    </p>
                                                </div>
                                            </div>                                      
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
    
    
</template>

<script lang="ts" setup>
import useProjectData from '../../data/projects';
import useSkillColorsData from '../../data/skillColors';
import useCategoryColorsData from '../../data/categoryColors';

const getSkillColor = (inputSkill) =>{
    const matchedSkill = useSkillColorsData.find(item => item.skill === inputSkill);
    return matchedSkill ? matchedSkill.color : '#666';
};

const getCategoryColor = (inputCategory) =>{
    const matchedCategory = useCategoryColorsData.find(item => item.category === inputCategory);
    return matchedCategory ? matchedCategory.color : '#666';
};


</script>

<style lang="scss" scoped>

.custom-font {
  font-family: Inter;
}

img {
  transition: transform 0.3s ease;
}

img:hover {
    transform: scale(1.05); /* Example: enlarging the image on hover */
}
</style>