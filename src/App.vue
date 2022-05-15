<script setup lang="ts">
import { provide } from "vue";
import { RouterView } from "vue-router";
import Layout from "@/layouts/MainLayout.vue";
import type { InjectionKey } from "vue";

console.log(
  "%cWelcome to Ikitori",
  "background: #134e4a; color: white; font-size: 24px"
);
console.log(
  "%cMade by Julio Caesar, https://juliocaesar.co",
  "background: #134e4a; color: white; font-size: 14px"
);

const mockUser = {
  name: "Pepega Masta",
  avatar: "https://miro.medium.com/max/1400/1*1yjbmb_mTngFxZ5qA3RLOw.jpeg",
};

type mockUser = {
  name: string;
  avatar: string;
};
provide("mockUser", mockUser as mockUser);
provide("apiUrl", import.meta.env.VITE_URL as string);
provide("apiSecretKey", import.meta.env.VITE_SECRET_KEY as string);
</script>

<template>
  <Layout>
    <router-view />
  </Layout>
</template>
