<template>
  <SectionShell id="features" :eyebrow="$t('sections.solution.eyebrow')" :title="$t('sections.solution.title')">
    <div class="flex flex-col md:flex-row items-stretch gap-0 max-w-5xl mx-auto">
      <div
        v-for="(card, idx) in featureCards"
        :key="card.key"
        class="chevron-card flex-1 relative"
        :class="{ 'md:z-10': idx === 0, 'md:z-20': idx === 1, 'md:z-30': idx === 2, 'md:z-40': idx === 3 }"
      >
        <div class="p-6 h-full flex flex-col">
          <div class="flex items-center gap-3 mb-3">
            <span class="gp-icon-chip flex-shrink-0">
              <UIcon :name="card.icon" class="w-5 h-5" aria-hidden="true" />
            </span>
            <h3 class="text-lg font-semibold text-gp-text leading-tight">
              {{ $t(`features.${card.key}.title`) }}
            </h3>
          </div>
          <p class="text-gp-text/70 leading-relaxed flex-1">
            {{ $t(`features.${card.key}.description`) }}
          </p>
        </div>
      </div>
    </div>
  </SectionShell>
</template>

<script setup lang="ts">
import SectionShell from './SectionShell.vue'

const featureCards = [
  { key: 'anonymousLogin', icon: 'i-heroicons-user-circle-20-solid' },
  { key: 'dataMinimisation', icon: 'i-heroicons-shield-exclamation-20-solid' },
  { key: 'proxyShield', icon: 'i-heroicons-globe-alt-20-solid' },
  { key: 'zeroKnowledge', icon: 'i-heroicons-eye-slash-20-solid' }
]
</script>
