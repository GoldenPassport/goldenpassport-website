<template>
  <SectionShell
    id="problem"
    :eyebrow="$t('sections.problem.eyebrow')"
    :title="$t('sections.problem.title')"
    :subtitle="$t('sections.problem.intro')"
  >
    <!-- Problem Illustration: 3 Overlapping Circles -->
    <div class="mt-8 flex items-center justify-center">
      <div class="max-w-md mx-auto">
        <h3 class="text-lg font-semibold text-gp-text mb-6 text-center">
          {{ $t('problem.current.title') }}
        </h3>
        <div class="relative w-full aspect-square max-w-[300px] mx-auto">
          <!-- Three overlapping circles -->
          <div class="absolute inset-0 flex items-center justify-center">
            <!-- Circle 1: Identities & Addresses -->
            <div
              class="absolute w-32 h-32 rounded-full border-4 border-gp-border bg-gp-accent/30 flex items-center justify-center transform -translate-x-8 -translate-y-4 z-10"
            >
              <div class="text-center px-2">
                <UIcon name="i-heroicons-user-20-solid" class="w-6 h-6 text-gp-text mx-auto mb-1" />
                <span class="text-xs font-semibold text-gp-text">{{ $t('problem.circles.identity') }}</span>
              </div>
            </div>
            
            <!-- Circle 2: Finances -->
            <div
              class="absolute w-32 h-32 rounded-full border-4 border-gp-border bg-gp-accent/30 flex items-center justify-center transform translate-x-0 translate-y-0 z-20"
            >
              <div class="text-center px-2">
                <UIcon name="i-heroicons-credit-card-20-solid" class="w-6 h-6 text-gp-text mx-auto mb-1" />
                <span class="text-xs font-semibold text-gp-text">{{ $t('problem.circles.finance') }}</span>
              </div>
            </div>
            
            <!-- Circle 3: Purchase History -->
            <div
              class="absolute w-32 h-32 rounded-full border-4 border-gp-border bg-gp-accent/30 flex items-center justify-center transform translate-x-8 -translate-y-4 z-30"
            >
              <div class="text-center px-2">
                <UIcon name="i-heroicons-archive-box-20-solid" class="w-6 h-6 text-gp-text mx-auto mb-1" />
                <span class="text-xs font-semibold text-gp-text">{{ $t('problem.circles.history') }}</span>
              </div>
            </div>
          </div>
        </div>
        <p class="mt-6 text-center text-sm font-semibold text-gp-text">
          {{ $t('problem.current.allShared') }}
        </p>
      </div>
    </div>
  </SectionShell>
</template>

<script setup lang="ts">
import SectionShell from './SectionShell.vue'
</script>

