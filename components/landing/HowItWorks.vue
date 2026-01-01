<template>
  <SectionShell
    id="how-it-works"
    eyebrow="Approach"
    :title="gp.howItWorks.title"
  >
    <ol class="grid lg:grid-cols-3 gap-6">
      <li
        v-for="(step, idx) in gp.howItWorks.steps"
        :key="step.title"
        class="gp-card p-6"
      >
        <div class="flex items-start justify-between gap-4">
          <div class="flex items-center gap-3">
            <span class="gp-icon-chip">
              <UIcon :name="step.icon" class="w-5 h-5 text-black" aria-hidden="true" />
            </span>
            <h3 class="text-lg font-semibold text-black">
              {{ step.title }}
            </h3>
          </div>
          <span class="text-black/60 font-semibold">0{{ idx + 1 }}</span>
        </div>
        <p class="mt-3 text-black/70 leading-relaxed">
          {{ step.description }}
        </p>
      </li>
    </ol>
  </SectionShell>
</template>

<script setup lang="ts">
import SectionShell from './SectionShell.vue'

const appConfig = useAppConfig()
const gp = appConfig.goldenpassport
</script>


