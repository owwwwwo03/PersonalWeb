<template>
    <!-- Projects grid -->
    <section class="pt-5 pt-sm-5">
    <!-- Projects grid title -->
    <div class="text-center">
        <h2 class="font-weight-bold text-primary">Projects</h2>
    </div>

    <!-- Filter and search projects -->
    <div class="mt-5 mt-sm-5">
        <h3 class="font-weight-normal text-center text-secondary mb-4">
            Search by title or filter by category
        </h3>
        <div class="d-flex justify-content-between border-bottom border-primary pb-3 mb-2">
            <div class="d-flex align-items-center">
                <span class="bg-primary p-2.5 shadow rounded-circle cursor-pointer">
                    <i class="fas fa-search text-secondary"></i>
                </span>
                <input
                    class="form-control pl-3 pr-1 py-2 border border-secondary rounded text-secondary bg-light"
                    id="name"
                    name="name"
                    type="search"
                    placeholder="Search project"
                    aria-label="Name"
                />
            </div>
            
        </div>
    </div>

    <!-- Projects grid -->
    <div class="row mt-4">
        <div class="col-12 col-sm-6 col-lg-4">
            
        </div>
    </div>
</section>


</template>

<script lang="ts" setup>
    
</script>

<style>

</style>