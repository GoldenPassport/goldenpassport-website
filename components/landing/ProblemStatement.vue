<template>
  <SectionShell
    id="problem"
    :eyebrow="$t('sections.problem.eyebrow')"
    :title="$t('sections.problem.title')"
    :subtitle="$t('sections.problem.intro')"
  >
    <!-- Problem Illustration: 3 Overlapping Circles -->
    <div class="mt-8 flex items-center justify-center">
      <div class="max-w-2xl mx-auto">
        <h3 class="text-lg font-semibold text-gp-text mb-6 text-center">
          {{ $t('problem.current.title') }}
        </h3>
        <div class="relative w-full aspect-square max-w-[500px] mx-auto">
          <!-- Three overlapping circles -->
          <div class="absolute inset-0 flex items-center justify-center">
            <!-- Circle 1: Identities & Addresses - Top Center -->
            <div
              class="absolute w-48 h-48 rounded-full border-4 border-gp-border bg-gp-accent/50 flex items-center justify-center transform translate-x-0 -translate-y-20 z-20 shadow-lg"
            >
              <div class="text-center px-3 bg-gp-surface/90 rounded-lg py-2">
                <UIcon name="i-heroicons-user-20-solid" class="w-8 h-8 text-gp-text mx-auto mb-2" />
                <span class="text-sm font-bold text-gp-text block leading-tight">{{ $t('problem.circles.identity') }}</span>
              </div>
            </div>
            
            <!-- Circle 2: Finances - Bottom Left -->
            <div
              class="absolute w-48 h-48 rounded-full border-4 border-gp-border bg-gp-accent/50 flex items-center justify-center transform -translate-x-20 translate-y-16 z-10 shadow-lg"
            >
              <div class="text-center px-3 bg-gp-surface/90 rounded-lg py-2">
                <UIcon name="i-heroicons-credit-card-20-solid" class="w-8 h-8 text-gp-text mx-auto mb-2" />
                <span class="text-sm font-bold text-gp-text block leading-tight">{{ $t('problem.circles.finance') }}</span>
              </div>
            </div>
            
            <!-- Circle 3: Purchase History - Bottom Right -->
            <div
              class="absolute w-48 h-48 rounded-full border-4 border-gp-border bg-gp-accent/50 flex items-center justify-center transform translate-x-20 translate-y-16 z-30 shadow-lg"
            >
              <div class="text-center px-3 bg-gp-surface/90 rounded-lg py-2">
                <UIcon name="i-heroicons-archive-box-20-solid" class="w-8 h-8 text-gp-text mx-auto mb-2" />
                <span class="text-sm font-bold text-gp-text block leading-tight">{{ $t('problem.circles.history') }}</span>
              </div>
            </div>
          </div>
        </div>
        <p class="mt-8 text-center text-base font-semibold text-gp-text">
          {{ $t('problem.current.allShared') }}
        </p>
      </div>
    </div>
  </SectionShell>
</template>

<script setup lang="ts">
import SectionShell from './SectionShell.vue'
</script>

