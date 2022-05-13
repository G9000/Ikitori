<script setup lang="ts">
import {
  ShoppingBagIcon,
  HomeIcon,
  TagIcon,
  GiftIcon,
  CogIcon,
  GlobeAltIcon,
  TranslateIcon,
} from "@heroicons/vue/solid";
import Icon from "@/primitives/Icon.vue";
import Button from "@/primitives/Button.vue";
import GoogleIcon from "@/icons/IconGoogle.vue";
import Avatar from "@/primitives/Avatar.vue";

type userType = {
  name: string;
  avatar?: string;
};

interface propsType {
  currentUser?: userType | null;
}
defineProps<propsType>();
</script>

<template>
  <nav
    role="navigation"
    class="z-40 flex flex-col py-10 px-6 bg-zinc-50 h-screen w-full absolute top-0"
  >
    <div>
      <div
        v-if="currentUser"
        class="flex items-center justify-between mt-20 border p-4 rounded-md"
      >
        <div class="flex gap-x-4 items-center">
          <Avatar :imgSrc="currentUser?.avatar" />
          <span class="font-semibold text-gray-600">
            {{ currentUser?.name }}
          </span>
        </div>
        <div class="flex gap-x-2">
          <Button type="ghost" size="sm">
            <CogIcon slot="default" class="h-6" />
          </Button>
          <Button type="ghost" size="sm"> Logout </Button>
        </div>
      </div>
      <div v-else class="mt-12 py-4 gap-y-4">
        <span class="text-xl text-gray-500">
          Be a
          <span class="font-bold text-teal-800">Ikitori</span>
          members now. <a href="/" class="underline"> Register</a>
        </span>
        <div class="flex flex-wrap gap-4 mt-4">
          <Button color="primary" type="ghost" size="sm">
            Sign in with email
          </Button>
          <Button color="primary" type="ghost" size="sm">
            <Icon
              slot="append"
              :width="24"
              :height="24"
              icon-name="google-icon"
            >
              <GoogleIcon />
            </Icon>
            <span slot="default"> Sign in with Google</span>
          </Button>
        </div>
      </div>
      <ul
        class="flex flex-col gap-y-4 text-gray-600 mt-2 border rounded-md p-4"
      >
        <a
          href="/"
          class="w-full py-2 flex gap-x-4 items-center hover:underline group"
        >
          <ShoppingBagIcon class="h-6 group-hover:text-teal-800" />
          <span class="tracking-wide">Pots & plants</span>
        </a>
        <a
          href="/"
          class="w-full py-2 flex gap-x-4 items-center hover:underline group"
        >
          <HomeIcon class="h-6 group-hover:text-teal-800" />
          <span class="tracking-wide">Home decor</span>
        </a>
        <a
          href="/"
          class="w-full py-2 flex gap-x-4 items-center hover:underline group"
        >
          <TagIcon class="h-6 group-hover:text-teal-800" />
          <span class="tracking-wide">Deals</span>
        </a>
        <a
          href="/"
          class="w-full py-2 flex gap-x-4 items-center hover:underline group"
        >
          <GiftIcon class="h-6 group-hover:text-teal-800" />
          <span class="tracking-wide">Summers collection</span>
        </a>
      </ul>
    </div>

    <div class="mt-auto">
      <div class="flex gap-x-4">
        <Button type="ghost" size="sm">
          <TranslateIcon slot="append" class="h-6" />
          <span slot="default">English</span>
        </Button>
        <Button type="ghost" size="sm">
          <GlobeAltIcon class="h-6" />
          <span slot="default">Change Country</span>
        </Button>
      </div>
      <div class="text-[12px] flex gap-x-4 text-gray-500 mt-4">
        <span class="font-bold">
          © Ikitori 2021-{{ new Date().getFullYear() }}
        </span>
        <a href="https://juliocaesar.co/" class="font-bold"
          >Built by Julio Caesar</a
        >
      </div>
    </div>
  </nav>
</template>
