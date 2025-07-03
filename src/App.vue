<template>
  <div id="app" class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
    <nav class="bg-white shadow-sm border-b">
      <div class="max-w-4xl mx-auto px-4 py-3">
        <h1 class="text-2xl font-bold text-indigo-600">Quiz Master</h1>
      </div>
    </nav>
    <main class="max-w-4xl mx-auto px-4 py-8">
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>
