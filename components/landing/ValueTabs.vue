<template>
  <SectionShell id="who-its-for" :eyebrow="$t('sections.audience.eyebrow')" :title="$t('sections.audience.title')">
    <UTabs :items="tabItems" class="w-full">
      <template #item="{ item }">
        <div class="py-2">
          <div class="gp-card p-4 sm:p-6">
            <ul class="space-y-2 sm:space-y-3">
              <li v-for="(text, idx) in item.items" :key="idx" class="flex items-start gap-3">
                <span class="text-gp-text font-bold mt-[2px] flex-shrink-0">✓</span>
                <span class="text-sm sm:text-base text-gp-text">{{ text }}</span>
              </li>
            </ul>
          </div>
        </div>
      </template>
    </UTabs>
  </SectionShell>
</template>

<script setup lang="ts">
import SectionShell from './SectionShell.vue'

const { t, tm, rt } = useI18n()

type TabItem = { label: string; items: string[] }

const audienceKeys = ['consumers', 'merchants', 'enterprises'] as const

const tabItems = computed<TabItem[]>(() =>
  audienceKeys.map((key) => {
    const rawItems = tm(`audiences.${key}.items`)
    const items = Array.isArray(rawItems)
      ? rawItems.map((item) => (typeof item === 'string' ? item : rt(item)))
      : []
    return {
      label: t(`audiences.${key}.label`),
      items
    }
  })
)
</script>
