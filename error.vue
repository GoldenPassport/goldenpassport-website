<template>
  <div class="min-h-screen bg-gp-yellow flex items-center justify-center px-4">
    <div class="gp-card-strong p-8 md:p-12 max-w-lg text-center">
      <div class="flex justify-center mb-6">
        <Logo :size="100" />
      </div>

      <h1 class="text-6xl font-bold text-black">
        {{ error?.statusCode || 404 }}
      </h1>

      <p class="mt-4 text-xl text-black font-semibold">
        {{ errorTitle }}
      </p>

      <p class="mt-2 text-black/70">
        {{ errorMessage }}
      </p>

      <div class="mt-8">
        <GpButton size="lg" @click="handleError" class="min-w-[200px]">
          Go to homepage
        </GpButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'

interface Props {
  error: NuxtError
}

const props = defineProps<Props>()

const errorTitle = computed(() => {
  switch (props.error?.statusCode) {
    case 404:
      return 'Page not found'
    case 500:
      return 'Server error'
    case 403:
      return 'Access denied'
    default:
      return 'Something went wrong'
  }
})

const errorMessage = computed(() => {
  switch (props.error?.statusCode) {
    case 404:
      return "The page you're looking for doesn't exist or has been moved."
    case 500:
      return 'We encountered an unexpected error. Please try again later.'
    case 403:
      return "You don't have permission to access this resource."
    default:
      return props.error?.message || 'An unexpected error occurred.'
  }
})

const handleError = () => clearError({ redirect: '/' })
</script>

