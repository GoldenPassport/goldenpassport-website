<template>
  <div class="min-h-screen bg-gp-bg text-gp-text flex items-center justify-center px-4">
    <div class="gp-card-strong p-8 md:p-12 max-w-lg text-center">
      <div class="flex justify-center mb-6">
        <Logo :size="100" />
      </div>

      <h1 class="text-6xl font-bold text-gp-text">
        {{ error?.statusCode || 404 }}
      </h1>

      <p class="mt-4 text-xl text-gp-text font-semibold">
        {{ errorTitle }}
      </p>

      <p class="mt-2 text-gp-text/70">
        {{ errorMessage }}
      </p>

      <div class="mt-8">
        <GpButton size="lg" @click="handleError" class="min-w-[200px]">
          {{ $t('common.goToHomepage') }}
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
const { t } = useI18n()

const errorTitle = computed(() => {
  switch (props.error?.statusCode) {
    case 404:
      return t('errors.404.title')
    case 500:
      return t('errors.500.title')
    case 403:
      return t('errors.403.title')
    default:
      return t('errors.default.title')
  }
})

const errorMessage = computed(() => {
  switch (props.error?.statusCode) {
    case 404:
      return t('errors.404.message')
    case 500:
      return t('errors.500.message')
    case 403:
      return t('errors.403.message')
    default:
      return props.error?.message || t('errors.default.message')
  }
})

const handleError = () => clearError({ redirect: '/' })
</script>
