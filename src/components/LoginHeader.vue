<script setup lang="ts">
defineProps<{
  title: string;
  subtitle: string;
  showLogo?: boolean;
}>();
</script>

<template>
  <div class="flex flex-col items-center justify-center h-full p-6">
    <h1 class="text-4xl font-bold text-white mb-4">{{ title }}</h1>
    <p class="text-indigo-200 mb-8 text-center max-w-md">
      {{ subtitle }}
    </p>
    <div v-if="showLogo" class="mt-4">
      <img src="../assets/images/eva.jpeg" alt="EVA Logo" class="w-28 h-28 object-contain rounded-full bg-white p-2" />
    </div>
  </div>
</template> 