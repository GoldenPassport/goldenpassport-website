<template>
  <SectionShell id="gdpr" eyebrow="Compliance" :title="gp.gdpr.title" :subtitle="gp.gdpr.intro">
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
            v-for="row in gp.gdpr.rows"
            :key="row.right"
            class="border-t-2 border-gp-border"
          >
            <td class="px-4 py-3 text-gp-text font-semibold align-top whitespace-nowrap">
              {{ row.right }}
            </td>
            <td class="px-4 py-3 text-gp-text/80 align-top">
              {{ row.pledge }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Mobile: Card layout -->
    <div class="md:hidden space-y-4">
      <div
        v-for="row in gp.gdpr.rows"
        :key="row.right"
        class="gp-card p-4"
      >
        <div class="text-sm font-semibold text-gp-text/70 uppercase tracking-wide">
          {{ row.right }}
        </div>
        <div class="mt-2 text-gp-text">
          {{ row.pledge }}
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
