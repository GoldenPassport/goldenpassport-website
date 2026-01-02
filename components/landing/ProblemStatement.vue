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
                <span class="text-base font-bold text-gp-text block leading-tight">{{ $t('problem.circles.details') }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </SectionShell>
</template>

<script setup lang="ts">
import SectionShell from './SectionShell.vue'
</script>

