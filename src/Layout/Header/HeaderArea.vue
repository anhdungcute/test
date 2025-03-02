<script setup lang="ts">
import DropdownUser from "./DropdownUser.vue";
</script>

<template>
  <header
    class=" drop-shadow-1 dark:bg-boxdark sticky top-0 flex w-full bg-white dark:drop-shadow-none"
    style="z-index: 98;"
  >
    <div
      class="shadow-2 flex flex-grow items-center justify-end px-2 py-2 md:px-6 2xl:px-11"
    >
      <div class="2xsm:gap-7 flex items-center gap-3">
        <!-- User Area -->
        <DropdownUser />
        <!-- User Area -->
      </div>
    </div>
  </header>
</template>
