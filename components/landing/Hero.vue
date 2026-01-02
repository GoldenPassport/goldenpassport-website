<template>
  <header class="text-center">
    <h1 class="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-gp-text tracking-tight">
      {{ $t('brand.name') }}
    </h1>
    <p class="mt-4 text-2xl sm:text-3xl md:text-4xl text-gp-text font-medium">
      {{ $t('brand.tagline.prefix') }} <span class="font-bold text-gp-accent underline decoration-4 underline-offset-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">"{{ $t('brand.tagline.highlight') }}"</span> {{ $t('brand.tagline.suffix') }}
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
      <p class="mt-4 text-gp-text/70 text-sm">
        {{ $t('hero.trustNote') }}
      </p>

      <div class="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
        <GpButton
          size="lg"
          :to="gp.ctas.primary.href"
          class="min-w-[220px]"
        >
          {{ $t('cta.primary') }}
        </GpButton>
        <GpButton
          size="lg"
          gp-variant="outline"
          :to="gp.ctas.secondary.href"
          class="min-w-[220px]"
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
