<script setup lang="ts">
import { ref } from 'vue';
import FormInput from './FormInput.vue';
import LoadingSpinner from './LoadingSpinner.vue';
import EmailIcon from './icons/EmailIcon.vue';
import LockIcon from './icons/LockIcon.vue';
import type { LoginCredentials } from '../types/auth';

const props = defineProps<{
  isLoading: boolean;
  errorMessage: string;
}>();

const emit = defineEmits<{
  (e: 'login', credentials: LoginCredentials): void;
}>();

const credentials = ref({
  email: '',
  password: ''
});

const handleSubmit = async () => {
  try {
    await emit('login', {
      Email: credentials.value.email,
      Password: credentials.value.password
    });
  } catch (error) {
    console.error('Login failed:', error);
  }
};
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
    
    <form @submit.prevent="handleSubmit" class="space-y-6">
      <div class="space-y-4">
        <FormInput
          id="email"
          type="email"
          label="Email address"
          placeholder="you@example.com"
          v-model="credentials.email"
          :icon="EmailIcon"
          class="bg-white border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 text-gray-900"
        />
        
        <FormInput
          id="password"
          type="password"
          label="Password"
          placeholder="••••••••"
          v-model="credentials.password"
          :icon="LockIcon"
          class="bg-white border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 text-gray-900"
        />
      </div>

      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
          />
          <label for="remember-me" class="ml-2 block text-sm text-gray-900">
            Remember me
          </label>
        </div>

        <div class="text-sm">
          <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
            Forgot your password?
          </a>
        </div>
      </div>

      <div>
        <button
          type="submit"
          :disabled="isLoading"
          class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span v-if="isLoading" class="flex items-center">
            <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Signing in...
          </span>
          <span v-else>Sign in</span>
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