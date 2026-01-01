<template>
  <SectionShell id="who-its-for" :eyebrow="$t('sections.audience.eyebrow')" :title="$t('sections.audience.title')">
    <UTabs :items="tabItems" class="w-full">
      <template #item="{ item }">
        <div class="py-2">
          <div class="gp-card p-6">
            <ul class="space-y-3">
              <li v-for="(text, idx) in item.items" :key="idx" class="flex items-start gap-3">
                <span class="text-gp-text font-bold mt-[2px]">✓</span>
                <span class="text-gp-text">{{ text }}</span>
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

const { t, tm } = useI18n()

type TabItem = { label: string; items: string[] }

const audienceKeys = ['consumers', 'merchants', 'enterprises'] as const

const tabItems = computed<TabItem[]>(() =>
  audienceKeys.map((key) => ({
    label: t(`audiences.${key}.label`),
    items: tm(`audiences.${key}.items`) as string[]
  }))
)
</script>
