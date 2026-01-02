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
        
        <!-- Circles container with proper padding to contain all circles -->
        <div class="relative w-full max-w-[700px] mx-auto" style="min-height: 500px; padding: 100px 60px;">
          <!-- Three overlapping circles -->
          <div class="absolute inset-0 flex items-center justify-center" style="padding: 100px 60px;">
            <!-- Circle 1: Identities & Addresses - Top Center -->
            <div
              class="absolute w-64 h-64 rounded-full border-4 border-gp-border bg-gp-accent/50 flex items-center justify-center transform translate-x-0 -translate-y-24 z-20 shadow-lg"
            >
              <div class="text-center px-4 bg-gp-surface/90 rounded-lg py-3">
                <UIcon name="i-heroicons-user-20-solid" class="w-10 h-10 text-gp-text mx-auto mb-2" />
                <span class="text-base font-bold text-gp-text block leading-tight">{{ $t('problem.circles.identity') }}</span>
              </div>
            </div>
            
            <!-- Circle 2: Finances - Bottom Left -->
            <div
              class="absolute w-64 h-64 rounded-full border-4 border-gp-border bg-gp-accent/50 flex items-center justify-center transform -translate-x-28 translate-y-20 z-10 shadow-lg"
            >
              <div class="text-center px-4 bg-gp-surface/90 rounded-lg py-3">
                <UIcon name="i-heroicons-credit-card-20-solid" class="w-10 h-10 text-gp-text mx-auto mb-2" />
                <span class="text-base font-bold text-gp-text block leading-tight">{{ $t('problem.circles.finance') }}</span>
              </div>
            </div>
            
            <!-- Circle 3: Purchase History - Bottom Right -->
            <div
              class="absolute w-64 h-64 rounded-full border-4 border-gp-border bg-gp-accent/50 flex items-center justify-center transform translate-x-28 translate-y-20 z-30 shadow-lg"
            >
              <div class="text-center px-4 bg-gp-surface/90 rounded-lg py-3">
                <UIcon name="i-heroicons-archive-box-20-solid" class="w-10 h-10 text-gp-text mx-auto mb-2" />
                <span class="text-base font-bold text-gp-text block leading-tight">{{ $t('problem.circles.history') }}</span>
              </div>
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
      
      <div class="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
        <div
          v-for="(danger, idx) in dangers"
          :key="idx"
          class="gp-card p-5 text-center"
        >
          <div class="gp-icon-chip mx-auto mb-3">
            <UIcon :name="danger.icon" class="w-6 h-6" aria-hidden="true" />
          </div>
          <h4 class="text-lg font-bold text-gp-text mb-2">
            {{ $t(`problem.dangers.${danger.key}.title`) }}
          </h4>
          <p class="text-sm text-gp-text/70 leading-relaxed">
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
  { key: 'unethicalMerchants', icon: 'i-heroicons-exclamation-triangle-20-solid' }
]
</script>

