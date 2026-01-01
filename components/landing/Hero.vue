<template>
  <header class="text-center">
    <h1 class="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-gp-text tracking-tight">
      {{ gp.brand.name }}
    </h1>
    <p class="mt-4 text-2xl sm:text-3xl md:text-4xl text-gp-text font-medium">
      {{ gp.brand.tagline }}
    </p>
    <p class="mt-3 text-lg sm:text-xl md:text-2xl text-gp-text/80 italic">
      {{ gp.brand.motto }}
    </p>

    <div class="w-40 h-1.5 bg-gp-text mx-auto rounded-full mt-8" />

    <GpCard strong class="mt-10 p-6 md:p-10">
      <p class="text-xl md:text-2xl text-gp-text leading-relaxed font-semibold">
        {{ gp.hero.headline }}
      </p>
      <p class="mt-4 text-gp-text/80 leading-relaxed">
        {{ gp.hero.subhead }}
      </p>
      <p class="mt-4 text-gp-text/70 text-sm">
        {{ gp.hero.trustNote }}
      </p>

      <div class="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
        <GpButton
          size="lg"
          :to="gp.ctas.primary.href"
          class="min-w-[220px]"
        >
          {{ gp.ctas.primary.label }}
        </GpButton>
        <GpButton
          size="lg"
          gp-variant="outline"
          :to="gp.ctas.secondary.href"
          class="min-w-[220px]"
        >
          {{ gp.ctas.secondary.label }}
        </GpButton>
      </div>
    </GpCard>
  </header>
</template>

<script setup lang="ts">
const appConfig = useAppConfig()
const gp = appConfig.goldenpassport
</script>


