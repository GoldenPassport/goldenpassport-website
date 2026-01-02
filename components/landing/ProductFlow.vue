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

    <!-- Architecture diagram with animated connections -->
    <div class="mt-8 gp-card-strong p-6 md:p-8">
      <h3 class="text-xl font-bold text-gp-text">
        {{ $t('architecture.title') }}
      </h3>
      <p class="mt-2 text-gp-text/80">
        {{ $t('architecture.caption') }}
      </p>

      <!-- Animated Architecture Diagram -->
      <div class="mt-8 relative">
        <!-- Desktop Layout -->
        <div class="hidden lg:block">
          <div class="relative flex items-center justify-between max-w-4xl mx-auto">
            <!-- You (User) Node -->
            <div class="arch-node z-10">
              <div class="gp-card p-6 text-center min-w-[140px]">
                <div class="gp-icon-chip mx-auto">
                  <UIcon name="i-heroicons-user-20-solid" class="w-5 h-5" aria-hidden="true" />
                </div>
                <div class="mt-3 font-bold text-gp-text text-lg">
                  {{ $t('architecture.nodes.user') }}
                </div>
                <div class="mt-1 text-xs text-gp-text/70">{{ $t('architecture.edges.userToGp') }}</div>
              </div>
            </div>

            <!-- Bidirectional Connector: User <-> GP -->
            <div class="flex-1 relative h-20 mx-2">
              <svg class="w-full h-full" preserveAspectRatio="none">
                <defs>
                  <marker id="arrowRight" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" class="fill-gp-accent">
                    <path d="M0,0 L0,6 L9,3 z" />
                  </marker>
                  <marker id="arrowLeft" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto" class="fill-gp-accent">
                    <path d="M9,0 L9,6 L0,3 z" />
                  </marker>
                </defs>
                <!-- Top line (left to right) -->
                <line x1="0" y1="35%" x2="100%" y2="35%" class="connector-line" marker-end="url(#arrowRight)" />
                <!-- Bottom line (right to left) -->
                <line x1="100%" y1="65%" x2="0" y2="65%" class="connector-line" marker-end="url(#arrowLeft)" />
                <!-- Animated dots -->
                <circle r="4" class="data-dot">
                  <animateMotion dur="2s" repeatCount="indefinite" path="M0,28 L200,28" />
                </circle>
                <circle r="4" class="data-dot">
                  <animateMotion dur="2s" repeatCount="indefinite" path="M200,52 L0,52" />
                </circle>
              </svg>
            </div>

            <!-- GoldenPassport (Center) -->
            <div class="arch-node z-10">
              <div class="gp-inverted rounded-2xl border-4 border-gp-border p-6 text-center min-w-[180px]">
                <div class="mx-auto w-14 h-14 rounded-xl bg-gp-accent border-2 border-gp-border flex items-center justify-center">
                  <UIcon name="i-heroicons-shield-check-20-solid" class="w-7 h-7 text-gp-chip-icon" aria-hidden="true" />
                </div>
                <div class="mt-4 text-xl font-bold">
                  {{ $t('architecture.nodes.gp') }}
                </div>
                <div class="mt-2 text-sm opacity-90">
                  {{ $t('architecture.proxyShield') }}
                </div>
              </div>
            </div>

            <!-- Bidirectional Connector: GP <-> Partners -->
            <div class="flex-1 relative h-20 mx-2">
              <svg class="w-full h-full" preserveAspectRatio="none">
                <!-- Top line -->
                <line x1="0" y1="35%" x2="100%" y2="35%" class="connector-line" marker-end="url(#arrowRight)" />
                <!-- Bottom line -->
                <line x1="100%" y1="65%" x2="0" y2="65%" class="connector-line" marker-end="url(#arrowLeft)" />
                <!-- Animated dots -->
                <circle r="4" class="data-dot">
                  <animateMotion dur="1.8s" repeatCount="indefinite" path="M0,28 L200,28" />
                </circle>
                <circle r="4" class="data-dot">
                  <animateMotion dur="1.8s" repeatCount="indefinite" path="M200,52 L0,52" />
                </circle>
              </svg>
            </div>

            <!-- Partners Stack -->
            <div class="arch-node z-10 space-y-3">
              <div class="gp-card p-4 flex items-start gap-3 min-w-[220px]">
                <span class="gp-icon-chip !w-9 !h-9 !min-w-[2.25rem] !min-h-[2.25rem] flex-shrink-0">
                  <UIcon name="i-heroicons-building-storefront-20-solid" class="w-4 h-4" aria-hidden="true" />
                </span>
                <div>
                  <div class="font-semibold text-gp-text text-sm">
                    {{ $t('architecture.nodes.merchant') }}
                  </div>
                  <div class="text-xs text-gp-text/70 mt-1">{{ $t('architecture.edges.gpToMerchant') }}</div>
                  <div class="text-xs text-gp-text/60 mt-1 italic">{{ $t('architecture.solutionDetails.merchant') }}</div>
                </div>
              </div>
              <div class="gp-card p-4 flex items-start gap-3">
                <span class="gp-icon-chip !w-9 !h-9 !min-w-[2.25rem] !min-h-[2.25rem] flex-shrink-0">
                  <UIcon name="i-heroicons-credit-card-20-solid" class="w-4 h-4" aria-hidden="true" />
                </span>
                <div>
                  <div class="font-semibold text-gp-text text-sm">
                    {{ $t('architecture.nodes.payments') }}
                  </div>
                  <div class="text-xs text-gp-text/70 mt-1">{{ $t('architecture.edges.gpToPayments') }}</div>
                  <div class="text-xs text-gp-text/60 mt-1 italic">{{ $t('architecture.solutionDetails.payment') }}</div>
                </div>
              </div>
              <div class="gp-card p-4 flex items-start gap-3">
                <span class="gp-icon-chip !w-9 !h-9 !min-w-[2.25rem] !min-h-[2.25rem] flex-shrink-0">
                  <UIcon name="i-heroicons-truck-20-solid" class="w-4 h-4" aria-hidden="true" />
                </span>
                <div>
                  <div class="font-semibold text-gp-text text-sm">
                    {{ $t('architecture.nodes.delivery') }}
                  </div>
                  <div class="text-xs text-gp-text/70 mt-1">{{ $t('architecture.edges.gpToDelivery') }}</div>
                  <div class="text-xs text-gp-text/60 mt-1 italic">{{ $t('architecture.solutionDetails.delivery') }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Mobile/Tablet Layout (Vertical) -->
        <div class="lg:hidden flex flex-col items-center gap-2">
          <!-- User -->
          <div class="gp-card p-5 text-center w-full max-w-xs">
            <div class="gp-icon-chip mx-auto">
              <UIcon name="i-heroicons-user-20-solid" class="w-5 h-5" aria-hidden="true" />
            </div>
            <div class="mt-3 font-bold text-gp-text">{{ $t('architecture.nodes.user') }}</div>
            <div class="mt-1 text-xs text-gp-text/70">{{ $t('architecture.edges.userToGp') }}</div>
          </div>
          
          <!-- Vertical connector -->
          <div class="h-12 flex items-center justify-center gap-4">
            <svg width="40" height="48" class="overflow-visible">
              <line x1="15" y1="0" x2="15" y2="48" class="connector-line" marker-end="url(#arrowRight)" />
              <line x1="25" y1="48" x2="25" y2="0" class="connector-line" marker-end="url(#arrowLeft)" />
              <circle r="3" class="data-dot">
                <animateMotion dur="1.5s" repeatCount="indefinite" path="M15,0 L15,48" />
              </circle>
              <circle r="3" class="data-dot">
                <animateMotion dur="1.5s" repeatCount="indefinite" path="M25,48 L25,0" />
              </circle>
            </svg>
          </div>

          <!-- GoldenPassport -->
          <div class="gp-inverted rounded-2xl border-4 border-gp-border p-5 text-center w-full max-w-xs">
            <div class="mx-auto w-12 h-12 rounded-xl bg-gp-accent border-2 border-gp-border flex items-center justify-center">
              <UIcon name="i-heroicons-shield-check-20-solid" class="w-6 h-6 text-gp-chip-icon" aria-hidden="true" />
            </div>
            <div class="mt-3 text-lg font-bold">{{ $t('architecture.nodes.gp') }}</div>
            <div class="mt-1 text-sm opacity-90">{{ $t('architecture.proxyShield') }}</div>
          </div>

          <!-- Vertical connector -->
          <div class="h-12 flex items-center justify-center gap-4">
            <svg width="40" height="48" class="overflow-visible">
              <line x1="15" y1="0" x2="15" y2="48" class="connector-line" marker-end="url(#arrowRight)" />
              <line x1="25" y1="48" x2="25" y2="0" class="connector-line" marker-end="url(#arrowLeft)" />
              <circle r="3" class="data-dot">
                <animateMotion dur="1.5s" repeatCount="indefinite" path="M15,0 L15,48" />
              </circle>
              <circle r="3" class="data-dot">
                <animateMotion dur="1.5s" repeatCount="indefinite" path="M25,48 L25,0" />
              </circle>
            </svg>
          </div>

          <!-- Partners -->
          <div class="w-full max-w-xs space-y-3">
            <div class="gp-card p-4 flex items-start gap-4">
              <span class="gp-icon-chip flex-shrink-0">
                <UIcon name="i-heroicons-building-storefront-20-solid" class="w-5 h-5" aria-hidden="true" />
              </span>
              <div>
                <div class="font-semibold text-gp-text">{{ $t('architecture.nodes.merchant') }}</div>
                <div class="text-xs text-gp-text/70 mt-1">{{ $t('architecture.edges.gpToMerchant') }}</div>
                <div class="text-xs text-gp-text/60 mt-1 italic">{{ $t('architecture.solutionDetails.merchant') }}</div>
              </div>
            </div>
            <div class="gp-card p-4 flex items-start gap-4">
              <span class="gp-icon-chip flex-shrink-0">
                <UIcon name="i-heroicons-credit-card-20-solid" class="w-5 h-5" aria-hidden="true" />
              </span>
              <div>
                <div class="font-semibold text-gp-text">{{ $t('architecture.nodes.payments') }}</div>
                <div class="text-xs text-gp-text/70 mt-1">{{ $t('architecture.edges.gpToPayments') }}</div>
                <div class="text-xs text-gp-text/60 mt-1 italic">{{ $t('architecture.solutionDetails.payment') }}</div>
              </div>
            </div>
            <div class="gp-card p-4 flex items-start gap-4">
              <span class="gp-icon-chip flex-shrink-0">
                <UIcon name="i-heroicons-truck-20-solid" class="w-5 h-5" aria-hidden="true" />
              </span>
              <div>
                <div class="font-semibold text-gp-text">{{ $t('architecture.nodes.delivery') }}</div>
                <div class="text-xs text-gp-text/70 mt-1">{{ $t('architecture.edges.gpToDelivery') }}</div>
                <div class="text-xs text-gp-text/60 mt-1 italic">{{ $t('architecture.solutionDetails.delivery') }}</div>
              </div>
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
