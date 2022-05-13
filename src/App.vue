<script setup lang="ts">
import { provide, ref } from "vue";
import { RouterView } from "vue-router";
import Layout from "@/components/Layout.vue";

const mockUser = {
  name: "Pepega",
  avatar: "https://miro.medium.com/max/1400/1*1yjbmb_mTngFxZ5qA3RLOw.jpeg",
};

// const mockUser = null;
const currentUser = ref(mockUser);
provide("currentUser", currentUser.value);
</script>

<template>
  <!-- <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->
  <div>
    <Layout>
      <router-view />
    </Layout>
  </div>
</template>
