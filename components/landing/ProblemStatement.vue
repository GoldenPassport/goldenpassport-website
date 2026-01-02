<template>
  <SectionShell
    id="problem"
    :eyebrow="$t('sections.problem.eyebrow')"
    :title="$t('sections.problem.title')"
    :subtitle="$t('sections.problem.intro')"
  >
    <!-- Problem Illustration: 3 Overlapping Circles -->
    <div class="mt-8 relative">
      <!-- Desktop Layout -->
      <div class="hidden lg:block">
        <div class="flex items-center justify-center gap-8 max-w-4xl mx-auto">
          <!-- Current Problem: All circles together -->
          <div class="flex-1">
            <h3 class="text-lg font-semibold text-gp-text mb-6 text-center">
              {{ $t('problem.current.title') }}
            </h3>
            <div class="relative w-full aspect-square max-w-[300px] mx-auto">
              <!-- Three overlapping circles -->
              <div class="absolute inset-0 flex items-center justify-center">
                <!-- Circle 1: Identities & Addresses -->
                <div
                  class="absolute w-32 h-32 rounded-full border-4 border-gp-border bg-gp-accent/30 flex items-center justify-center transform -translate-x-8 -translate-y-4 z-10"
                >
                  <div class="text-center px-2">
                    <UIcon name="i-heroicons-user-20-solid" class="w-6 h-6 text-gp-text mx-auto mb-1" />
                    <span class="text-xs font-semibold text-gp-text">{{ $t('problem.circles.identity') }}</span>
                  </div>
                </div>
                
                <!-- Circle 2: Finances -->
                <div
                  class="absolute w-32 h-32 rounded-full border-4 border-gp-border bg-gp-accent/30 flex items-center justify-center transform translate-x-0 translate-y-0 z-20"
                >
                  <div class="text-center px-2">
                    <UIcon name="i-heroicons-credit-card-20-solid" class="w-6 h-6 text-gp-text mx-auto mb-1" />
                    <span class="text-xs font-semibold text-gp-text">{{ $t('problem.circles.finance') }}</span>
                  </div>
                </div>
                
                <!-- Circle 3: Purchase History -->
                <div
                  class="absolute w-32 h-32 rounded-full border-4 border-gp-border bg-gp-accent/30 flex items-center justify-center transform translate-x-8 -translate-y-4 z-30"
                >
                  <div class="text-center px-2">
                    <UIcon name="i-heroicons-archive-box-20-solid" class="w-6 h-6 text-gp-text mx-auto mb-1" />
                    <span class="text-xs font-semibold text-gp-text">{{ $t('problem.circles.history') }}</span>
                  </div>
                </div>
              </div>
              
              <!-- Arrow pointing down -->
              <div class="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                <div class="text-center">
                  <UIcon name="i-heroicons-arrow-down-20-solid" class="w-8 h-8 text-gp-text mx-auto" />
                  <p class="mt-2 text-sm font-semibold text-gp-text">{{ $t('problem.current.allShared') }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Solution: Selective sharing -->
          <div class="flex-1">
            <h3 class="text-lg font-semibold text-gp-text mb-6 text-center">
              {{ $t('problem.solution.title') }}
            </h3>
            <div class="relative w-full max-w-[300px] mx-auto">
              <!-- GoldenPassport in center -->
              <div class="gp-inverted rounded-2xl border-4 border-gp-border p-6 text-center mb-8">
                <div class="mx-auto w-16 h-16 rounded-xl bg-gp-accent border-2 border-gp-border flex items-center justify-center mb-3">
                  <UIcon name="i-heroicons-shield-check-20-solid" class="w-8 h-8 text-gp-chip-icon" />
                </div>
                <div class="text-xl font-bold">{{ $t('brand.name') }}</div>
                <div class="text-sm opacity-90 mt-1">{{ $t('problem.solution.facilitates') }}</div>
              </div>

              <!-- Selective data sharing -->
              <div class="space-y-4">
                <!-- Merchant -->
                <div class="gp-card p-4 flex items-start gap-3">
                  <span class="gp-icon-chip !w-10 !h-10 !min-w-[2.5rem] !min-h-[2.5rem] flex-shrink-0">
                    <UIcon name="i-heroicons-building-storefront-20-solid" class="w-5 h-5" />
                  </span>
                  <div>
                    <div class="font-semibold text-gp-text text-sm">{{ $t('problem.solution.merchant.title') }}</div>
                    <div class="text-xs text-gp-text/70 mt-1">{{ $t('problem.solution.merchant.data') }}</div>
                  </div>
                </div>

                <!-- Payment Provider -->
                <div class="gp-card p-4 flex items-start gap-3">
                  <span class="gp-icon-chip !w-10 !h-10 !min-w-[2.5rem] !min-h-[2.5rem] flex-shrink-0">
                    <UIcon name="i-heroicons-credit-card-20-solid" class="w-5 h-5" />
                  </span>
                  <div>
                    <div class="font-semibold text-gp-text text-sm">{{ $t('problem.solution.payment.title') }}</div>
                    <div class="text-xs text-gp-text/70 mt-1">{{ $t('problem.solution.payment.data') }}</div>
                  </div>
                </div>

                <!-- Delivery Partner -->
                <div class="gp-card p-4 flex items-start gap-3">
                  <span class="gp-icon-chip !w-10 !h-10 !min-w-[2.5rem] !min-h-[2.5rem] flex-shrink-0">
                    <UIcon name="i-heroicons-truck-20-solid" class="w-5 h-5" />
                  </span>
                  <div>
                    <div class="font-semibold text-gp-text text-sm">{{ $t('problem.solution.delivery.title') }}</div>
                    <div class="text-xs text-gp-text/70 mt-1">{{ $t('problem.solution.delivery.data') }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile Layout -->
      <div class="lg:hidden space-y-8">
        <!-- Current Problem -->
        <div>
          <h3 class="text-lg font-semibold text-gp-text mb-4 text-center">
            {{ $t('problem.current.title') }}
          </h3>
          <div class="relative w-full aspect-square max-w-[280px] mx-auto">
            <!-- Three overlapping circles -->
            <div class="absolute inset-0 flex items-center justify-center">
              <div
                class="absolute w-24 h-24 rounded-full border-4 border-gp-border bg-gp-accent/30 flex items-center justify-center transform -translate-x-6 -translate-y-3 z-10"
              >
                <div class="text-center px-1">
                  <UIcon name="i-heroicons-user-20-solid" class="w-5 h-5 text-gp-text mx-auto mb-1" />
                  <span class="text-[10px] font-semibold text-gp-text">{{ $t('problem.circles.identity') }}</span>
                </div>
              </div>
              
              <div
                class="absolute w-24 h-24 rounded-full border-4 border-gp-border bg-gp-accent/30 flex items-center justify-center transform translate-x-0 translate-y-0 z-20"
              >
                <div class="text-center px-1">
                  <UIcon name="i-heroicons-credit-card-20-solid" class="w-5 h-5 text-gp-text mx-auto mb-1" />
                  <span class="text-[10px] font-semibold text-gp-text">{{ $t('problem.circles.finance') }}</span>
                </div>
              </div>
              
              <div
                class="absolute w-24 h-24 rounded-full border-4 border-gp-border bg-gp-accent/30 flex items-center justify-center transform translate-x-6 -translate-y-3 z-30"
              >
                <div class="text-center px-1">
                  <UIcon name="i-heroicons-archive-box-20-solid" class="w-5 h-5 text-gp-text mx-auto mb-1" />
                  <span class="text-[10px] font-semibold text-gp-text">{{ $t('problem.circles.history') }}</span>
                </div>
              </div>
            </div>
          </div>
          <p class="mt-6 text-center text-sm font-semibold text-gp-text">
            {{ $t('problem.current.allShared') }}
          </p>
        </div>

        <!-- Solution -->
        <div>
          <h3 class="text-lg font-semibold text-gp-text mb-4 text-center">
            {{ $t('problem.solution.title') }}
          </h3>
          <div class="gp-inverted rounded-2xl border-4 border-gp-border p-5 text-center mb-6">
            <div class="mx-auto w-14 h-14 rounded-xl bg-gp-accent border-2 border-gp-border flex items-center justify-center mb-3">
              <UIcon name="i-heroicons-shield-check-20-solid" class="w-7 h-7 text-gp-chip-icon" />
            </div>
            <div class="text-lg font-bold">{{ $t('brand.name') }}</div>
            <div class="text-xs opacity-90 mt-1">{{ $t('problem.solution.facilitates') }}</div>
          </div>

          <div class="space-y-3">
            <div class="gp-card p-4 flex items-start gap-3">
              <span class="gp-icon-chip !w-10 !h-10 !min-w-[2.5rem] !min-h-[2.5rem] flex-shrink-0">
                <UIcon name="i-heroicons-building-storefront-20-solid" class="w-5 h-5" />
              </span>
              <div>
                <div class="font-semibold text-gp-text text-sm">{{ $t('problem.solution.merchant.title') }}</div>
                <div class="text-xs text-gp-text/70 mt-1">{{ $t('problem.solution.merchant.data') }}</div>
              </div>
            </div>

            <div class="gp-card p-4 flex items-start gap-3">
              <span class="gp-icon-chip !w-10 !h-10 !min-w-[2.5rem] !min-h-[2.5rem] flex-shrink-0">
                <UIcon name="i-heroicons-credit-card-20-solid" class="w-5 h-5" />
              </span>
              <div>
                <div class="font-semibold text-gp-text text-sm">{{ $t('problem.solution.payment.title') }}</div>
                <div class="text-xs text-gp-text/70 mt-1">{{ $t('problem.solution.payment.data') }}</div>
              </div>
            </div>

            <div class="gp-card p-4 flex items-start gap-3">
              <span class="gp-icon-chip !w-10 !h-10 !min-w-[2.5rem] !min-h-[2.5rem] flex-shrink-0">
                <UIcon name="i-heroicons-truck-20-solid" class="w-5 h-5" />
              </span>
              <div>
                <div class="font-semibold text-gp-text text-sm">{{ $t('problem.solution.delivery.title') }}</div>
                <div class="text-xs text-gp-text/70 mt-1">{{ $t('problem.solution.delivery.data') }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </SectionShell>
</template>

<script setup lang="ts">
import SectionShell from './SectionShell.vue'
</script>

