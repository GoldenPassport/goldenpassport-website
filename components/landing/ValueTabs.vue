<template>
  <SectionShell id="who-its-for" eyebrow="Audience" :title="gp.valueTabs.title">
    <UTabs :items="tabItems" class="w-full">
      <template #item="{ item }">
        <div class="py-2">
          <div class="gp-card p-6">
            <ul class="space-y-3">
              <li v-for="text in item.items" :key="text" class="flex items-start gap-3">
                <span class="text-black font-bold mt-[2px]">✓</span>
                <span class="text-black">{{ text }}</span>
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

type TabItem = { label: string; items: string[] }

const appConfig = useAppConfig()
const gp = appConfig.goldenpassport

const tabItems = computed<TabItem[]>(() =>
  gp.valueTabs.tabs.map((t) => ({
    label: t.label,
    items: t.items
  }))
)
</script>


