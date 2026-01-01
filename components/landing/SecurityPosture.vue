<template>
  <SectionShell id="security" eyebrow="Trust" :title="gp.security.title" :subtitle="gp.security.intro">
    <div class="grid lg:grid-cols-3 gap-6">
      <div class="lg:col-span-2 gp-card p-6">
        <ul class="space-y-3">
          <li v-for="b in gp.security.bullets" :key="b" class="flex items-start gap-3">
            <span class="inline-flex items-center justify-center w-6 h-6 rounded-md bg-gp-accent border-2 border-gp-border">
              <UIcon name="i-heroicons-shield-check-20-solid" class="w-4 h-4 text-gp-chip-icon" aria-hidden="true" />
            </span>
            <span class="text-gp-text">{{ b }}</span>
          </li>
        </ul>
      </div>

      <div class="gp-inverted rounded-xl shadow-lg border-2 border-gp-border p-6">
        <h3 class="text-lg font-semibold">Transparency note</h3>
        <p class="mt-3 opacity-90 leading-relaxed">
          {{ gp.security.note }}
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
