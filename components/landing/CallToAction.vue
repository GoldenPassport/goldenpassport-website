<template>
  <SectionShell id="cta" :eyebrow="$t('sections.cta.eyebrow')" :title="$t('sections.cta.title')" :subtitle="$t('sections.cta.intro')">
    <div class="grid lg:grid-cols-2 gap-4 sm:gap-6">
      <div
        v-for="track in tracks"
        :key="track.key"
        class="gp-card p-4 sm:p-6 flex flex-col"
      >
        <div class="flex items-start justify-between gap-4">
          <h3 class="text-xl font-bold text-gp-text">
            {{ $t(`callToAction.${track.key}.title`) }}
          </h3>
          <span class="gp-badge">{{ track.badge }}</span>
        </div>

        <p class="mt-3 text-gp-text/80 leading-relaxed">
          {{ $t(`callToAction.${track.key}.description`) }}
        </p>

        <ul class="mt-4 space-y-2">
          <li v-for="(bullet, idx) in getTrackBullets(track.key)" :key="idx" class="flex items-start gap-3">
            <span class="text-gp-text font-bold mt-[2px]">✓</span>
            <span class="text-gp-text">{{ bullet }}</span>
          </li>
        </ul>

        <div class="mt-auto pt-6">
          <GpButton :to="track.href" class="w-full justify-center">
            {{ $t(`callToAction.${track.key}.button`) }}
          </GpButton>
        </div>
      </div>
    </div>
  </SectionShell>
</template>

<script setup lang="ts">
import SectionShell from './SectionShell.vue'

const { tm, rt } = useI18n()
const appConfig = useAppConfig()
const gp = appConfig.goldenpassport

const tracks = [
  { key: 'investment', badge: 'INVEST', href: gp.ctas.primary.href },
  { key: 'partnership', badge: 'PARTNER', href: gp.ctas.secondary.href }
]

function getTrackBullets(key: string): string[] {
  const rawItems = tm(`callToAction.${key}.bullets`)
  if (!Array.isArray(rawItems)) return []
  return rawItems.map((item) => (typeof item === 'string' ? item : rt(item)))
}
</script>
