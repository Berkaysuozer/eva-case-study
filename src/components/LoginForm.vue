<script setup lang="ts">
import { ref } from 'vue';
import FormInput from './FormInput.vue';
import LoadingSpinner from './LoadingSpinner.vue';
import type { LoginCredentials } from '../types/auth';

const props = defineProps<{
  isLoading: boolean;
  errorMessage: string;
}>();

const emit = defineEmits<{
  (e: 'login', credentials: LoginCredentials): void;
}>();

const credentials = ref<LoginCredentials>({
  Email: '',
  Password: ''
});

const handleSubmit = () => {
  emit('login', credentials.value);
};

const emailIcon = `<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />`;

const passwordIcon = `<path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />`;
</script>

<template>
  <div class="w-full max-w-md px-6 py-8">
    <div class="mb-6 flex justify-center md:hidden">
      <img src="../assets/images/eva.jpeg" alt="EVA Logo" class="w-20 h-20 object-contain rounded-full border-2 border-indigo-600 p-1" />
    </div>
    
    <h2 class="text-2xl font-bold text-gray-800 mb-6">
      Sign in to your account
    </h2>

    <div v-if="errorMessage" class="mb-4 p-4 bg-red-50 border border-red-200 rounded-md">
      <p class="text-sm text-red-600">{{ errorMessage }}</p>
    </div>
    
    <form class="space-y-4" @submit.prevent="handleSubmit">
      <FormInput
        id="email"
        type="email"
        label="Email address"
        placeholder="you@example.com"
        v-model="credentials.Email"
        :icon="emailIcon"
      />
      
      <FormInput
        id="password"
        type="password"
        label="Password"
        placeholder="••••••••"
        v-model="credentials.Password"
        :icon="passwordIcon"
      />

      <div class="flex items-center justify-between mt-2">
        <div class="text-sm">
          <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Forgot password?</a>
        </div>
      </div>
      
      <div class="mt-4">
        <button
          type="submit"
          :disabled="isLoading"
          class="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed h-12"
        >
          <LoadingSpinner v-if="isLoading" size="sm" color="white" class="-ml-1 mr-2" />
          Sign in
        </button>
      </div>
    </form>

    <div class="mt-6 text-center">
      <p class="text-sm text-gray-600">
        Don't have an account?
        <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Sign up</a>
      </p>
    </div>
  </div>
</template> 