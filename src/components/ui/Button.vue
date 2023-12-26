<template>
  <div>
    <Button
      v-if="rounded"
      type="button"
      :label="label"
      icon="pi pi-check"
      :pt="{
        root: '!text-white !w-full !font-semibold !bg-primary-700  ',
      }"
      :ptOptions="{ mergeProps: true }"
      :loading="loading"
      @click="handleButtonClick()"
      rounded
      v-ripple
    />
    <Button
      v-else
      type="button"
      :label="label"
      icon="pi pi-search"
      size="small"
    />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import Button from 'primevue/button'

const props = defineProps({
  label: String,
  rounded: {
    type: Boolean,
    default: false, // Set a default value, making it optional
  },
  loading: {
    type: Boolean,
    default: false,
  },
  handleButtonClick: {
    type: Function,
    default: () => {}, // Set a default empty function if not provided
  },
})
</script>
