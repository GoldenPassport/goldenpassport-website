<template>
  <SectionShell
    id="how-it-works"
    :eyebrow="$t('sections.howItWorks.eyebrow')"
    :title="$t('sections.howItWorks.title')"
  >
    <ol class="grid lg:grid-cols-3 gap-6">
      <li
        v-for="(step, idx) in steps"
        :key="step.key"
        class="gp-card p-6"
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
    <div class="mt-10 gp-card-strong p-6 md:p-8">
      <div class="flex items-start gap-4">
        <span class="gp-icon-chip !w-12 !h-12 !min-w-[3rem] !min-h-[3rem] flex-shrink-0">
          <UIcon name="i-heroicons-chart-bar-square-20-solid" class="w-6 h-6" aria-hidden="true" />
        </span>
        <div class="flex-1">
          <h3 class="text-xl font-bold text-gp-text mb-3">
            {{ $t('howItWorks.analytics.title') }}
          </h3>
          <p class="text-gp-text/80 leading-relaxed mb-4">
            {{ $t('howItWorks.analytics.description') }}
          </p>
          <ul class="space-y-2">
            <li v-for="(benefit, idx) in analyticsBenefits" :key="idx" class="flex items-start gap-3">
              <span class="text-gp-text font-bold mt-[2px]">✓</span>
              <span class="text-gp-text/80">{{ $t(`howItWorks.analytics.benefits.${benefit}`) }}</span>
            </li>
          </ul>
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
</script>
