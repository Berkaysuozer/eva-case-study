<script setup lang="ts">
import { useRouter } from 'vue-router';
import { store } from '../store';
import { userService } from '../services/user.service';
import { onMounted, ref } from 'vue';
import DailySalesChart from '../components/DailySalesChart.vue';

const router = useRouter();
const isLoading = ref(false);

const handleLogout = async () => {
  try {
    isLoading.value = true;
    await store.dispatch('oauth/logout');
    router.push('/login');
  } catch (error) {
    console.error('Logout failed:', error);
  } finally {
    isLoading.value = false;
  }
};

onMounted(async () => {
  try {
    const email = store.getters['user/email'];
    if (email) {
      await userService.getUserInformation(email);
    }
  } catch (error) {
    console.error('Failed to get user information:', error);
  }
});
</script>

<template>
  <div class="min-h-screen bg-gray-100">
    <nav class="bg-white shadow">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <img src="../assets/images/eva.jpeg" alt="Eva Logo" class="h-12" />
          </div>
          <div class="flex items-center">
            <button
              @click="handleLogout"
              :disabled="isLoading"
              class="ml-4 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50"
            >
              {{ isLoading ? 'Logging out...' : 'Logout' }}
            </button>
          </div>
        </div>
      </div>
    </nav>

    <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div class="px-4 py-6 sm:px-0">
        <div class="bg-white rounded-lg shadow p-6">
          <h2 class="text-2xl font-bold mb-4">Daily Sales Overview</h2>
          <DailySalesChart />
        </div>
      </div>
    </main>
  </div>
</template> 