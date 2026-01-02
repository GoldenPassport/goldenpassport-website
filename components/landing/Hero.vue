<template>
  <header class="text-center">
    <div class="mb-4 sm:mb-6"></div>
    <LandingSlogan />

    <GpCard strong class="mt-10 p-6 md:p-10 text-left sm:text-center">
      <p class="text-xl md:text-2xl text-gp-text leading-relaxed font-semibold">
        {{ $t('hero.headline') }}
      </p>
      <p class="mt-4 text-gp-text/80 leading-relaxed">
        {{ $t('hero.subhead') }}
      </p>
      <div class="mt-6 p-4 sm:p-5 rounded-2xl border-2 border-gp-border bg-gradient-to-r from-gp-accent/25 via-gp-accent/15 to-gp-surface shadow-lg">
        <div class="flex items-start gap-3">
          <span class="gp-icon-chip !w-10 !h-10 !min-w-[2.5rem] !min-h-[2.5rem] bg-gp-accent text-gp-chip-icon border-gp-border">
            <UIcon name="i-heroicons-finger-print-20-solid" class="w-5 h-5" aria-hidden="true" />
          </span>
          <p class="text-sm sm:text-base text-gp-text leading-relaxed">
            {{ $t('hero.trustNote') }}
          </p>
        </div>
      </div>

      <div class="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
        <GpButton
          size="lg"
          :to="gp.ctas.primary.href"
          class="w-full sm:w-auto sm:min-w-[200px]"
        >
          {{ $t('cta.primary') }}
        </GpButton>
        <GpButton
          size="lg"
          gp-variant="outline"
          :to="gp.ctas.secondary.href"
          class="w-full sm:w-auto sm:min-w-[200px]"
        >
          {{ $t('cta.secondary') }}
        </GpButton>
      </div>
    </GpCard>
  </header>
</template>

<script setup lang="ts">
const appConfig = useAppConfig()
const gp = appConfig.goldenpassport
</script>
