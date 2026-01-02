<template>
  <SectionShell id="features" :eyebrow="$t('sections.solution.eyebrow')" :title="$t('sections.solution.title')">
    <div class="max-w-2xl mx-auto space-y-4">
      <div class="gp-card border-2 border-gp-border bg-gp-surface shadow-lg transition-all duration-200 ease-out p-5 sm:p-6 min-h-[220px] sm:min-h-[240px] lg:min-h-[200px]">
        <div class="flex items-start gap-3">
          <span class="gp-icon-chip flex-shrink-0">
            <UIcon :name="activeCard?.icon || 'i-heroicons-adjustments-horizontal-20-solid'" class="w-5 h-5" aria-hidden="true" />
          </span>
          <div class="flex-1 min-w-0">
            <h3 class="text-lg sm:text-xl font-semibold text-gp-text leading-tight">
              {{ $t(`features.${activeCard?.key || 'trustedTracker'}.title`) }}
            </h3>
            <p class="mt-3 text-gp-text/80 leading-relaxed">
              {{ $t(`features.${activeCard?.key || 'trustedTracker'}.description`) }}
            </p>
          </div>
        </div>
      </div>

      <div class="flex items-center justify-between gap-3">
        <div class="flex items-center gap-2">
          <button
            v-for="(card, idx) in featureCards"
            :key="card.key"
            class="w-3 h-3 rounded-full border-2 border-gp-border transition-all duration-150"
            :class="activeIndex === idx ? 'bg-gp-accent scale-105' : 'bg-transparent opacity-70'"
            :aria-label="$t(`features.${card.key}.title`)"
            @click="setActive(idx)"
          />
        </div>
        <div class="flex items-center gap-2">
          <GpButton gp-variant="outline" size="sm" class="!px-3 !py-2" @click="prev">
            <UIcon name="i-heroicons-chevron-left-20-solid" class="w-4 h-4" aria-hidden="true" />
            <span class="sr-only">Previous</span>
          </GpButton>
          <GpButton size="sm" class="!px-3 !py-2" @click="next">
            <span class="sr-only">Next</span>
            <UIcon name="i-heroicons-chevron-right-20-solid" class="w-4 h-4" aria-hidden="true" />
          </GpButton>
        </div>
      </div>
    </div>
  </SectionShell>
</template>

<script setup lang="ts">
import SectionShell from './SectionShell.vue'

const featureCards = [
  { key: 'trustedTracker', icon: 'i-heroicons-adjustments-horizontal-20-solid' },
  { key: 'dataMinimisation', icon: 'i-heroicons-shield-exclamation-20-solid' },
  { key: 'justInTime', icon: 'i-heroicons-clock-20-solid' },
  { key: 'roleBased', icon: 'i-heroicons-briefcase-20-solid' },
  { key: 'proxyShield', icon: 'i-heroicons-globe-alt-20-solid' },
  { key: 'zeroKnowledge', icon: 'i-heroicons-eye-slash-20-solid' },
  { key: 'anonymousLogin', icon: 'i-heroicons-user-circle-20-solid' }
] as const

const activeIndex = ref(0)

let rotateTimer: ReturnType<typeof setInterval> | undefined

const activeCard = computed(() => {
  const idx = Math.max(0, Math.min(activeIndex.value, featureCards.length - 1))
  return featureCards[idx]
})

const setActive = (idx: number) => {
  activeIndex.value = idx
  stopRotation()
}

const advance = () => {
  activeIndex.value = (activeIndex.value + 1) % featureCards.length
}

const next = () => {
  advance()
  stopRotation()
}

const prev = () => {
  activeIndex.value = (activeIndex.value - 1 + featureCards.length) % featureCards.length
  stopRotation()
}

const stopRotation = () => {
  if (rotateTimer) clearInterval(rotateTimer)
}

onMounted(() => {
  rotateTimer = setInterval(advance, 5000)
})

onBeforeUnmount(() => {
  if (rotateTimer) clearInterval(rotateTimer)
})
</script>
