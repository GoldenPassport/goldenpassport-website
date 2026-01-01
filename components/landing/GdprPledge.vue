<template>
  <SectionShell id="gdpr" :eyebrow="$t('sections.gdpr.eyebrow')" :title="$t('sections.gdpr.title')" :subtitle="$t('sections.gdpr.intro')">
    <!-- Desktop: Table layout -->
    <div class="hidden md:block overflow-x-auto">
      <table class="w-full border-2 border-gp-border rounded-xl overflow-hidden">
        <thead class="gp-inverted">
          <tr>
            <th class="text-left px-4 py-3 font-semibold">EU GDPR requirement</th>
            <th class="text-left px-4 py-3 font-semibold">GoldenPassport pledge</th>
          </tr>
        </thead>
        <tbody class="bg-gp-surface">
          <tr
            v-for="row in gdprRows"
            :key="row.rightKey"
            class="border-t-2 border-gp-border"
          >
            <td class="px-4 py-3 text-gp-text font-semibold align-top whitespace-nowrap">
              {{ $t(`gdpr.rights.${row.rightKey}`) }}
            </td>
            <td class="px-4 py-3 text-gp-text/80 align-top">
              {{ $t(`gdpr.pledges.${row.rightKey}`) }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Mobile: Card layout -->
    <div class="md:hidden space-y-4">
      <div
        v-for="row in gdprRows"
        :key="row.rightKey"
        class="gp-card p-4"
      >
        <div class="text-sm font-semibold text-gp-text/70 uppercase tracking-wide">
          {{ $t(`gdpr.rights.${row.rightKey}`) }}
        </div>
        <div class="mt-2 text-gp-text">
          {{ $t(`gdpr.pledges.${row.rightKey}`) }}
        </div>
      </div>
    </div>
  </SectionShell>
</template>

<script setup lang="ts">
import SectionShell from './SectionShell.vue'

const gdprRows = [
  { rightKey: 'access' },
  { rightKey: 'rectification' },
  { rightKey: 'erasure' },
  { rightKey: 'portability' },
  { rightKey: 'restriction' },
  { rightKey: 'objection' }
]
</script>
