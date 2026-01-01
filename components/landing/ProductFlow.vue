<template>
  <SectionShell
    id="real-life-flow"
    :eyebrow="$t('sections.architecture.eyebrow')"
    :title="$t('sections.architecture.title')"
    :subtitle="$t('sections.architecture.intro')"
  >
    <!-- Flow: Login & Select -> Pay -> Deliver -->
    <div class="grid lg:grid-cols-3 gap-6">
      <div
        v-for="(step, idx) in flowSteps"
        :key="step.key"
        class="gp-card p-6"
      >
        <div class="flex items-start justify-between gap-4">
          <h3 class="text-lg font-semibold text-gp-text">
            {{ $t(`flow.${step.key}.title`) }}
          </h3>
          <span class="gp-badge">0{{ idx + 1 }}</span>
        </div>
        <p class="mt-3 text-gp-text/80 leading-relaxed">
          {{ $t(`flow.${step.key}.description`) }}
        </p>
      </div>
    </div>

    <!-- Architecture diagram -->
    <div class="mt-8 gp-card-strong p-6 md:p-8">
      <h3 class="text-xl font-bold text-gp-text">
        {{ $t('architecture.title') }}
      </h3>
      <p class="mt-2 text-gp-text/80">
        {{ $t('architecture.caption') }}
      </p>

      <div class="mt-6 grid lg:grid-cols-3 gap-6 items-center">
        <!-- User -->
        <div class="gp-card p-5 text-center">
          <div class="gp-icon-chip mx-auto">
            <UIcon name="i-heroicons-user-20-solid" class="w-5 h-5" aria-hidden="true" />
          </div>
          <div class="mt-3 font-semibold text-gp-text">
            {{ $t('architecture.nodes.user') }}
          </div>
          <div class="mt-1 text-sm text-gp-text/70">Controls consent</div>
        </div>

        <!-- GoldenPassport (center) - inverted -->
        <div class="gp-inverted rounded-2xl border-4 border-gp-border p-6 text-center">
          <div class="mx-auto w-12 h-12 rounded-xl bg-gp-accent border-2 border-gp-border flex items-center justify-center">
            <UIcon name="i-heroicons-shield-check-20-solid" class="w-6 h-6 text-gp-chip-icon" aria-hidden="true" />
          </div>
          <div class="mt-4 text-xl font-bold">
            {{ $t('architecture.nodes.gp') }}
          </div>
          <div class="mt-2 text-sm opacity-90">
            {{ $t('architecture.proxyShield') }}
          </div>
        </div>

        <!-- External parties -->
        <div class="space-y-4">
          <div class="gp-card p-5 flex items-center gap-4">
            <span class="gp-icon-chip">
              <UIcon name="i-heroicons-building-storefront-20-solid" class="w-5 h-5" aria-hidden="true" />
            </span>
            <div>
              <div class="font-semibold text-gp-text">
                {{ $t('architecture.nodes.merchant') }}
              </div>
              <div class="text-sm text-gp-text/70">{{ $t('architecture.edges.gpToMerchant') }}</div>
            </div>
          </div>

          <div class="gp-card p-5 flex items-center gap-4">
            <span class="gp-icon-chip">
              <UIcon name="i-heroicons-credit-card-20-solid" class="w-5 h-5" aria-hidden="true" />
            </span>
            <div>
              <div class="font-semibold text-gp-text">
                {{ $t('architecture.nodes.payments') }}
              </div>
              <div class="text-sm text-gp-text/70">{{ $t('architecture.edges.gpToPayments') }}</div>
            </div>
          </div>

          <div class="gp-card p-5 flex items-center gap-4">
            <span class="gp-icon-chip">
              <UIcon name="i-heroicons-truck-20-solid" class="w-5 h-5" aria-hidden="true" />
            </span>
            <div>
              <div class="font-semibold text-gp-text">
                {{ $t('architecture.nodes.delivery') }}
              </div>
              <div class="text-sm text-gp-text/70">{{ $t('architecture.edges.gpToDelivery') }}</div>
            </div>
          </div>
        </div>
      </div>

      <p class="mt-6 text-sm text-gp-text/70">
        {{ $t('architecture.note') }}
      </p>
    </div>
  </SectionShell>
</template>

<script setup lang="ts">
import SectionShell from './SectionShell.vue'

const flowSteps = [
  { key: 'login' },
  { key: 'pay' },
  { key: 'deliver' }
]
</script>
