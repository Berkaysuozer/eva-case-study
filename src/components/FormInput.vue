<script setup lang="ts">
defineProps<{
  id: string;
  type: string;
  label: string;
  placeholder?: string;
  modelValue: string;
  icon?: any;
}>();

defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();
</script>

<template>
  <div>
    <label :for="id" class="block text-sm font-medium text-gray-700 mb-1">
      {{ label }}
    </label>
    <div class="relative rounded-md shadow-sm">
      <div v-if="icon" class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <component :is="icon" class="h-5 w-5 text-gray-400" />
      </div>
      <input
        :id="id"
        :type="type"
        :value="modelValue"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        :placeholder="placeholder"
        class="block w-full rounded-md border pl-10 pr-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        :class="[
          icon ? 'pl-10' : 'pl-3',
          'bg-white border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 text-gray-900'
        ]"
      />
    </div>
  </div>
</template> 