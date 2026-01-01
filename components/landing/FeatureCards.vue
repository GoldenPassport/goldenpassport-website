<template>
  <SectionShell id="features" eyebrow="Solution" title="Core product promises">
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div
        v-for="card in gp.featureCards"
        :key="card.title"
        class="gp-card p-6"
      >
        <div class="flex items-center gap-3">
          <span class="gp-icon-chip">
            <UIcon :name="card.icon" class="w-5 h-5" aria-hidden="true" />
          </span>
          <h3 class="text-lg font-semibold text-gp-text">
            {{ card.title }}
          </h3>
        </div>
        <p class="mt-3 text-gp-text/70 leading-relaxed">
          {{ card.description }}
        </p>
      </div>
    </div>
  </SectionShell>
</template>

<script setup lang="ts">
import SectionShell from './SectionShell.vue'

const appConfig = useAppConfig()
const gp = appConfig.goldenpassport
</script>


