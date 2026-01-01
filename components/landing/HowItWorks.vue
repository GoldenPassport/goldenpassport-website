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
  </SectionShell>
</template>

<script setup lang="ts">
import SectionShell from './SectionShell.vue'

const steps = [
  { key: 'store', icon: 'i-heroicons-lock-closed-20-solid' },
  { key: 'share', icon: 'i-heroicons-share-20-solid' },
  { key: 'transact', icon: 'i-heroicons-shopping-cart-20-solid' }
]
</script>
