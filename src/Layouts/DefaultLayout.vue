<template>
  <div
    class="h-full"
    style="
      background-image: url(https://images.unsplash.com/photo-1513546493312-0066d7de3fd2?q=80&w=3370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D;fit=crop&amp;w=1951&amp;q=80);
    "
  >
    <HeaderPublic></HeaderPublic>

    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import HeaderPublic from '@/components/HeaderPublic.vue'
</script>
