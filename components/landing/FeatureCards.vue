<template>
  <SectionShell id="features" :eyebrow="$t('sections.solution.eyebrow')" :title="$t('sections.solution.title')">
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div
        v-for="card in featureCards"
        :key="card.key"
        class="gp-card p-6"
      >
        <div class="flex items-center gap-3">
          <span class="gp-icon-chip flex-shrink-0">
            <UIcon :name="card.icon" class="w-5 h-5" aria-hidden="true" />
          </span>
          <h3 class="text-lg font-semibold text-gp-text leading-tight">
            {{ $t(`features.${card.key}.title`) }}
          </h3>
        </div>
        <p class="mt-3 text-gp-text/70 leading-relaxed">
          {{ $t(`features.${card.key}.description`) }}
        </p>
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
