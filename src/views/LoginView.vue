<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { authService } from '../services/auth.service';
import LoginHeader from '../components/LoginHeader.vue';
import LoginForm from '../components/LoginForm.vue';
import type { LoginCredentials } from '../types/auth';

const router = useRouter();
const isLoading = ref(false);
const errorMessage = ref('');

const handleLogin = async (credentials: LoginCredentials) => {
  try {
    errorMessage.value = '';
    isLoading.value = true;
    await authService.login(credentials);
    router.push('/');
  } catch (error) {
    console.log(error);
    errorMessage.value = 'Invalid email or password. Please try again.';
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <div class="flex flex-col md:flex-row h-screen bg-white w-full">
    <!-- Left side with background and graphic -->
    <div class="hidden md:block md:w-1/2 bg-indigo-600 flex-shrink-0">
      <LoginHeader
        title="Welcome Back"
        subtitle="Log in to your account to access your dashboard and continue your work."
        :show-logo="true"
      />
    </div>
    
    <!-- Right side with login form -->
    <div class="w-full md:w-1/2 flex items-center justify-center bg-white">
      <LoginForm
        :is-loading="isLoading"
        :error-message="errorMessage"
        @login="handleLogin"
      />
    </div>
  </div>
</template> 