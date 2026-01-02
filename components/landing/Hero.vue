<template>
  <header class="text-center">
    <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold text-gp-text tracking-tight leading-tight">
      {{ $t('brand.name') }}
    </h1>
    <p class="mt-4 text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl text-gp-text font-medium px-4 leading-snug">
      {{ $t('brand.tagline.prefix') }} <span class="font-bold italic text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl highlight-everywhere" style="font-family: 'Georgia', 'Times New Roman', serif;">"{{ $t('brand.tagline.highlight') }}"</span> {{ $t('brand.tagline.suffix') }}
    </p>
    <p class="mt-3 text-lg sm:text-xl md:text-2xl text-gp-text/80 italic">
      {{ $t('brand.motto') }}
    </p>

    <div class="w-40 h-1.5 bg-gp-text mx-auto rounded-full mt-8" />

    <GpCard strong class="mt-10 p-6 md:p-10">
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
