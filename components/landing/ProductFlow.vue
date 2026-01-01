<template>
  <SectionShell
    id="real-life-flow"
    eyebrow="Architecture"
    :title="gp.productFlow.title"
    :subtitle="gp.productFlow.intro"
  >
    <!-- Flow: Login & Select -> Pay -> Deliver -->
    <div class="grid lg:grid-cols-3 gap-6">
      <div
        v-for="(step, idx) in gp.productFlow.steps"
        :key="step.title"
        class="gp-card p-6"
      >
        <div class="flex items-start justify-between gap-4">
          <h3 class="text-lg font-semibold text-black">
            {{ step.title }}
          </h3>
          <span class="gp-badge">0{{ idx + 1 }}</span>
        </div>
        <p class="mt-3 text-black/80 leading-relaxed">
          {{ step.description }}
        </p>
      </div>
    </div>

    <!-- Architecture diagram -->
    <div class="mt-8 gp-card-strong p-6 md:p-8">
      <h3 class="text-xl font-bold text-black">
        {{ gp.productFlow.architecture.title }}
      </h3>
      <p class="mt-2 text-black/80">
        {{ gp.productFlow.architecture.caption }}
      </p>

      <div class="mt-6 grid lg:grid-cols-3 gap-6 items-center">
        <!-- User -->
        <div class="gp-card p-5 text-center">
          <div class="gp-icon-chip mx-auto">
            <UIcon name="i-heroicons-user-20-solid" class="w-5 h-5 text-black" aria-hidden="true" />
          </div>
          <div class="mt-3 font-semibold text-black">
            {{ gp.productFlow.architecture.nodes.user.label }}
          </div>
          <div class="mt-1 text-sm text-black/70">Controls consent</div>
        </div>

        <!-- GoldenPassport (center) -->
        <div class="bg-black text-gp-yellow rounded-2xl border-4 border-gp-ink p-6 text-center">
          <div class="mx-auto w-12 h-12 rounded-xl bg-gp-yellow border-2 border-gp-ink flex items-center justify-center">
            <UIcon name="i-heroicons-shield-check-20-solid" class="w-6 h-6 text-black" aria-hidden="true" />
          </div>
          <div class="mt-4 text-xl font-bold">
            {{ gp.productFlow.architecture.nodes.gp.label }}
          </div>
          <div class="mt-2 text-sm text-gp-yellow/90">
            Protective proxy shield
          </div>
        </div>

        <!-- External parties -->
        <div class="space-y-4">
          <div class="gp-card p-5 flex items-center gap-4">
            <span class="gp-icon-chip">
              <UIcon name="i-heroicons-building-storefront-20-solid" class="w-5 h-5 text-black" aria-hidden="true" />
            </span>
            <div>
              <div class="font-semibold text-black">
                {{ gp.productFlow.architecture.nodes.merchant.label }}
              </div>
              <div class="text-sm text-black/70">Receives order, not excess identity</div>
            </div>
          </div>

          <div class="gp-card p-5 flex items-center gap-4">
            <span class="gp-icon-chip">
              <UIcon name="i-heroicons-credit-card-20-solid" class="w-5 h-5 text-black" aria-hidden="true" />
            </span>
            <div>
              <div class="font-semibold text-black">
                {{ gp.productFlow.architecture.nodes.payments.label }}
              </div>
              <div class="text-sm text-black/70">Processes payment via GP</div>
            </div>
          </div>

          <div class="gp-card p-5 flex items-center gap-4">
            <span class="gp-icon-chip">
              <UIcon name="i-heroicons-truck-20-solid" class="w-5 h-5 text-black" aria-hidden="true" />
            </span>
            <div>
              <div class="font-semibold text-black">
                {{ gp.productFlow.architecture.nodes.delivery.label }}
              </div>
              <div class="text-sm text-black/70">Coordinates delivery without merchant address exposure</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Edge labels (simple legend) -->
      <div class="mt-6 gp-card p-5">
        <div class="font-semibold text-black">Data minimisation pathways</div>
        <ul class="mt-3 grid md:grid-cols-2 gap-2 text-sm text-black/80">
          <li v-for="e in gp.productFlow.architecture.edges" :key="`${e.from}-${e.to}`" class="flex items-start gap-2">
            <span class="font-bold">•</span>
            <span>
              <span class="font-semibold">{{ nodeLabel(e.from) }}</span>
              →
              <span class="font-semibold">{{ nodeLabel(e.to) }}</span>:
              {{ e.label }}
            </span>
          </li>
        </ul>
      </div>

      <p class="mt-4 text-sm text-black/70">
        {{ gp.productFlow.architecture.note }}
      </p>
    </div>
  </SectionShell>
</template>

<script setup lang="ts">
import SectionShell from './SectionShell.vue'

const appConfig = useAppConfig()
const gp = appConfig.goldenpassport

type NodeKey = keyof typeof gp.productFlow.architecture.nodes

function nodeLabel(key: string) {
  const nodes = gp.productFlow.architecture.nodes as Record<string, { label: string }>
  return nodes[key]?.label || key
}
</script>


