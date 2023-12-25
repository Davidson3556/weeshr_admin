<template>
  <header
    class="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md lg:border border-gray-100 dark:border-slate-300 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg dark:bg-transparent"
  >
    <div class="px-8">
      <div class="flex items-center justify-between">
        <div class="flex shrink-0">
          <a aria-current="page" class="flex items-center" href="/">
            <img
              class="h-7 w-auto"
              src="https://res.cloudinary.com/drykej1am/image/upload/v1697377875/weehser%20pay/Weeshr_Light_lrreyo.svg"
              alt=""
            />
            <span
              class="self-center pl-2 text-xl lg:text-xl font-semibold whitespace-nowrap text-primary-700"
            >
              Admin
            </span>
          </a>
        </div>

        <div class="flex items-center justify-end gap-3">
          <ThemeToggle></ThemeToggle>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import ThemeToggle from '@/components/ThemeToggle.vue'
</script>
