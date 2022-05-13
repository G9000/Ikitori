<script setup lang="ts">
import { provide, ref } from "vue";
import { RouterView } from "vue-router";
import Layout from "@/layouts/MainLayout.vue";

const mockUser = {
  name: "Pepega",
  avatar: "https://miro.medium.com/max/1400/1*1yjbmb_mTngFxZ5qA3RLOw.jpeg",
};

// const mockUser = null;
const currentUser = ref(mockUser);
provide("currentUser", currentUser.value);
</script>

<template>
  <Layout>
    <router-view />
  </Layout>
</template>
