<script setup lang="ts">
import { CameraIcon, SearchIcon, SparklesIcon } from "@heroicons/vue/solid";

function uploadPhoto() {
  console.log("Upload photo");
}
</script>

<template>
  <div>
    <button
      @click="uploadPhoto()"
      id="searchbar-upload-photo"
      class="p-4 flex items-center gap-x-4 border rounded-md w-full group hover:ring-4 hover:ring-gray-300 hover:ring-opacity-25"
    >
      <div
        class="h-[39px] w-[39px] bg-gray-200 bg-opacity-60 flex items-center justify-center rounded-full"
      >
        <CameraIcon class="h-6 group-hover:text-teal-800" aria-hidden="true" />
      </div>
      <span>Search product using photo</span>
    </button>

    <ul class="flex flex-col gap-y-2 mt-10 font-bold">
      <a href="/" class="flex gap-x-4 items-center p-2">
        <SearchIcon class="h-6" aria-hidden="true" />
        <span>sofa</span>
      </a>
      <a href="/" class="flex gap-x-4 items-center p-2">
        <SearchIcon class="h-6" aria-hidden="true" />
        <span>dining table</span>
      </a>
      <a href="/" class="flex gap-x-4 items-center p-2">
        <SearchIcon class="h-6" aria-hidden="true" />
        <span>wardrobe</span>
      </a>
      <a href="/" class="flex gap-x-4 items-center p-2">
        <SearchIcon class="h-6" aria-hidden="true" />
        <span>chair</span>
      </a>
    </ul>
    <button
      id="searchbar-feeling-lucky"
      class="flex items-center gap-x-4 mt-6 p-2"
    >
      <SparklesIcon class="h-6 text-amber-400" aria-hidden="true" />
      <span class="text-xl">I'm feeling lucky!</span>
    </button>
  </div>
</template>
