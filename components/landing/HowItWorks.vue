<template>
  <SectionShell
    id="how-it-works"
    :eyebrow="$t('sections.howItWorks.eyebrow')"
    :title="$t('sections.howItWorks.title')"
  >
    <ol class="grid lg:grid-cols-3 gap-6 mb-6">
      <li
        v-for="(step, idx) in steps"
        :key="step.key"
        class="step-box p-6"
      >
        <div class="flex items-start justify-between gap-4">
          <div class="flex items-center gap-3">
            <span class="gp-icon-chip">
              <UIcon :name="step.icon" class="w-5 h-5" aria-hidden="true" />
            </span>
            <h3 class="text-lg font-semibold text-gp-text">
              {{ $t(`steps.${step.key}.title`) }}
            </h3>
          </div>
          <span class="text-gp-text/60 font-semibold">0{{ idx + 1 }}</span>
        </div>
        <p class="mt-3 text-gp-text/70 leading-relaxed">
          {{ $t(`steps.${step.key}.description`) }}
        </p>
      </li>
    </ol>

    <!-- Merchant Analytics Section -->
    <div class="analytics-box p-4 sm:p-6 md:p-8">
      <div class="flex flex-col lg:flex-row items-start gap-6">
        <!-- Mobile: Full width text section with spacing -->
        <div class="w-full lg:flex lg:items-start lg:gap-4 lg:flex-1 mt-2 lg:mt-0">
          <!-- Icon and Title Row (mobile) / Icon (desktop) -->
          <div class="flex items-center gap-3 sm:gap-4 mb-4 lg:mb-0 lg:flex-shrink-0">
            <span class="gp-icon-chip !w-10 !h-10 !min-w-[2.5rem] !min-h-[2.5rem] sm:!w-12 sm:!h-12 sm:!min-w-[3rem] sm:!min-h-[3rem] flex-shrink-0">
              <UIcon name="i-heroicons-chart-bar-square-20-solid" class="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
            </span>
            <h3 class="text-lg sm:text-xl font-bold text-gp-text lg:hidden">
              {{ $t('howItWorks.analytics.title') }}
            </h3>
          </div>
          
          <!-- Text Content (full width on mobile) -->
          <div class="w-full lg:flex-1 lg:min-w-0">
            <h3 class="hidden lg:block text-xl font-bold text-gp-text mb-3">
              {{ $t('howItWorks.analytics.title') }}
            </h3>
            <p class="text-sm sm:text-base text-gp-text/80 leading-relaxed mb-4">
              {{ $t('howItWorks.analytics.description') }}
            </p>
            <ul class="space-y-2">
              <li v-for="(benefit, idx) in analyticsBenefits" :key="idx" class="flex items-start gap-3">
                <span class="text-gp-text font-bold mt-[2px] flex-shrink-0">✓</span>
                <span class="text-sm sm:text-base text-gp-text/80">{{ $t(`howItWorks.analytics.benefits.${benefit}`) }}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <!-- Dashboard Visualization -->
        <div class="w-full lg:w-80 flex-shrink-0 mt-6 lg:mt-0">
          <div class="bg-gp-surface border-2 border-gp-border rounded-lg p-4">
            <!-- Dashboard Header -->
            <div class="flex items-center justify-between mb-4">
              <div class="h-4 w-24 bg-gp-accent/30 rounded animate-pulse"></div>
              <div class="h-3 w-16 bg-gp-accent/20 rounded animate-pulse" style="animation-delay: 0.2s"></div>
            </div>
            
            <!-- Chart Bars -->
            <div class="space-y-3">
              <div v-for="(bar, idx) in dashboardBars" :key="idx" class="flex items-center gap-2">
                <div class="h-3 w-16 bg-gp-accent/20 rounded animate-pulse" :style="`animation-delay: ${idx * 0.1}s`"></div>
                <div 
                  class="h-6 rounded flex-1 bg-gp-accent/30 animate-pulse" 
                  :style="`width: ${bar.width}%; animation-delay: ${idx * 0.15}s`"
                ></div>
                <div class="h-3 w-12 bg-gp-accent/20 rounded animate-pulse" :style="`animation-delay: ${idx * 0.1 + 0.2}s`"></div>
              </div>
            </div>
            
            <!-- Mini Chart at Bottom -->
            <div class="mt-6 pt-4 border-t-2 border-gp-border">
              <div class="flex items-end justify-between gap-1 h-16">
                <div 
                  v-for="(col, idx) in miniChartColumns" 
                  :key="idx"
                  class="flex-1 bg-gp-accent/30 rounded-t animate-pulse"
                  :style="`height: ${col.height}%; animation-delay: ${idx * 0.05}s`"
                ></div>
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

const steps = [
  { key: 'store', icon: 'i-heroicons-lock-closed-20-solid' },
  { key: 'share', icon: 'i-heroicons-share-20-solid' },
  { key: 'transact', icon: 'i-heroicons-shopping-cart-20-solid' }
]

const analyticsBenefits = ['control', 'personalization', 'privacy']

// Dashboard visualization data
const dashboardBars = [
  { width: 75 },
  { width: 60 },
  { width: 85 },
  { width: 45 },
  { width: 90 }
]

const miniChartColumns = [
  { height: 40 },
  { height: 60 },
  { height: 35 },
  { height: 80 },
  { height: 50 },
  { height: 70 },
  { height: 45 }
]
</script>
