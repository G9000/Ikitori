<template>
  <template v-for="idx in 15" :key="idx">
    <div class="flex flex-col group animate-pulse">
      <div class="relative">
        <div class="w-full h-[180px] object-cover object-center bg-gray-100" />
      </div>
      <span class="bg-gray-100 mt-2 h-4" />
    </div>
  </template>
</template>
