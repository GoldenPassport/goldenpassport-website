<template>
  <SectionShell
    id="problem"
    :eyebrow="$t('sections.problem.eyebrow')"
    :title="$t('sections.problem.title')"
    :subtitle="$t('sections.problem.intro')"
  >
    <!-- Problem Illustration: 3 Overlapping Circles -->
    <div class="mt-8">
      <div class="max-w-2xl mx-auto">
        <h3 class="text-lg font-semibold text-gp-text mb-6 text-center">
          {{ $t('problem.current.title') }}
        </h3>
        <p class="mb-8 text-center text-base font-semibold text-gp-text">
          {{ $t('problem.current.allShared') }}
        </p>
      </div>
      
      <!-- Circles container with proper padding to contain all circles -->
      <div class="relative w-full max-w-[700px] mx-auto min-h-[400px] sm:min-h-[500px] px-4 sm:px-16 md:px-20 py-16 sm:py-20 md:py-24">
        <!-- Three overlapping circles -->
        <div class="relative w-full h-full flex items-center justify-center">
          <!-- Circle 1: Identities & Addresses - Top Center -->
          <div
            class="absolute w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full border-4 border-gp-border bg-gp-accent/50 flex items-center justify-center transform translate-x-0 -translate-y-12 sm:-translate-y-16 md:-translate-y-24 z-20 shadow-lg"
          >
            <div class="text-center px-3 sm:px-4 bg-gp-surface/90 rounded-lg py-2 sm:py-3">
              <UIcon name="i-heroicons-user-20-solid" class="w-8 h-8 sm:w-10 sm:h-10 text-gp-text mx-auto mb-1 sm:mb-2" />
              <span class="text-sm sm:text-base font-bold text-gp-text block leading-tight">{{ $t('problem.circles.identity') }}</span>
            </div>
          </div>
          
          <!-- Circle 2: Finances - Bottom Left -->
          <div
            class="absolute w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full border-4 border-gp-border bg-gp-accent/50 flex items-center justify-center transform -translate-x-16 sm:-translate-x-20 md:-translate-x-28 translate-y-12 sm:translate-y-16 md:translate-y-20 z-10 shadow-lg"
          >
            <div class="text-center px-3 sm:px-4 bg-gp-surface/90 rounded-lg py-2 sm:py-3">
              <UIcon name="i-heroicons-credit-card-20-solid" class="w-8 h-8 sm:w-10 sm:h-10 text-gp-text mx-auto mb-1 sm:mb-2" />
              <span class="text-sm sm:text-base font-bold text-gp-text block leading-tight">{{ $t('problem.circles.finance') }}</span>
            </div>
          </div>
          
          <!-- Circle 3: Purchase History - Bottom Right -->
          <div
            class="absolute w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full border-4 border-gp-border bg-gp-accent/50 flex items-center justify-center transform translate-x-16 sm:translate-x-20 md:translate-x-28 translate-y-12 sm:translate-y-16 md:translate-y-20 z-30 shadow-lg"
          >
            <div class="text-center px-3 sm:px-4 bg-gp-surface/90 rounded-lg py-2 sm:py-3">
              <UIcon name="i-heroicons-archive-box-20-solid" class="w-8 h-8 sm:w-10 sm:h-10 text-gp-text mx-auto mb-1 sm:mb-2" />
              <span class="text-sm sm:text-base font-bold text-gp-text block leading-tight">{{ $t('problem.circles.history') }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Dangers Section -->
    <div class="mt-12">
      <h3 class="text-xl font-bold text-gp-text mb-4 text-center">
        {{ $t('problem.dangers.title') }}
      </h3>
      <p class="text-center text-gp-text/80 mb-6 max-w-2xl mx-auto">
        {{ $t('problem.dangers.intro') }}
      </p>
      
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
        <div
          v-for="(danger, idx) in dangers"
          :key="idx"
          class="gp-card p-4 sm:p-5 text-center"
        >
          <div class="gp-icon-chip mx-auto mb-3">
            <UIcon :name="danger.icon" class="w-6 h-6" aria-hidden="true" />
          </div>
          <h4 class="text-base sm:text-lg font-bold text-gp-text mb-2">
            {{ $t(`problem.dangers.${danger.key}.title`) }}
          </h4>
          <p class="text-xs sm:text-sm text-gp-text/70 leading-relaxed">
            {{ $t(`problem.dangers.${danger.key}.description`) }}
          </p>
        </div>
      </div>
    </div>
  </SectionShell>
</template>

<script setup lang="ts">
import SectionShell from './SectionShell.vue'

const dangers = [
  { key: 'dataBrokers', icon: 'i-heroicons-shield-exclamation-20-solid' },
  { key: 'trackers', icon: 'i-heroicons-eye-20-solid' },
  { key: 'onlineFraud', icon: 'i-heroicons-exclamation-triangle-20-solid' }
]
</script>

