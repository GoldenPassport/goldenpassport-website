<template>
  <SectionShell id="cta" eyebrow="Call to action" :title="gp.callToAction.title" :subtitle="gp.callToAction.intro">
    <div class="grid lg:grid-cols-2 gap-6">
      <div
        v-for="track in gp.callToAction.tracks"
        :key="track.key"
        class="gp-card p-6"
      >
        <div class="flex items-start justify-between gap-4">
          <h3 class="text-xl font-bold text-black">
            {{ track.title }}
          </h3>
          <span class="gp-badge">{{ track.key === 'investment' ? 'INVEST' : 'PARTNER' }}</span>
        </div>

        <p class="mt-3 text-black/80 leading-relaxed">
          {{ track.description }}
        </p>

        <ul class="mt-4 space-y-2">
          <li v-for="b in track.bullets" :key="b" class="flex items-start gap-3">
            <span class="text-black font-bold mt-[2px]">✓</span>
            <span class="text-black">{{ b }}</span>
          </li>
        </ul>

        <div class="mt-6">
          <GpButton :to="track.button.href" class="w-full justify-center">
            {{ track.button.label }}
          </GpButton>
        </div>
      </div>
    </div>
  </SectionShell>
</template>

<script setup lang="ts">
import SectionShell from './SectionShell.vue'

const appConfig = useAppConfig()
const gp = appConfig.goldenpassport
</script>


