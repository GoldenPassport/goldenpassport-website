<template>
  <SectionShell id="gdpr" eyebrow="Compliance" :title="gp.gdpr.title" :subtitle="gp.gdpr.intro">
    <div class="overflow-x-auto">
      <table class="w-full border-2 border-black rounded-xl overflow-hidden">
        <thead class="bg-black text-golden-500">
          <tr>
            <th class="text-left px-4 py-3 font-semibold">EU GDPR requirement</th>
            <th class="text-left px-4 py-3 font-semibold">GoldenPassport pledge</th>
          </tr>
        </thead>
        <tbody class="bg-white">
          <tr
            v-for="row in gp.gdpr.rows"
            :key="row.right"
            class="border-t-2 border-black"
          >
            <td class="px-4 py-3 text-black font-semibold align-top whitespace-nowrap">
              {{ row.right }}
            </td>
            <td class="px-4 py-3 text-black/80 align-top">
              {{ row.pledge }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </SectionShell>
</template>

<script setup lang="ts">
import SectionShell from './SectionShell.vue'

const appConfig = useAppConfig()
const gp = appConfig.goldenpassport
</script>


