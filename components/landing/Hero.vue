<template>
  <header class="text-center">
    <div class="flex justify-center mb-6">
      <Logo :size="200" large />
    </div>

    <h1 class="text-5xl sm:text-6xl md:text-7xl font-bold text-black">
      {{ gp.brand.name }}
    </h1>
    <p class="mt-3 text-xl sm:text-2xl md:text-3xl text-black font-medium">
      {{ gp.brand.tagline }}
    </p>
    <p class="mt-2 text-base sm:text-lg text-black/80 italic">
      {{ gp.brand.motto }}
    </p>

    <div class="w-32 h-1 bg-black mx-auto rounded-full mt-6" />

    <GpCard strong class="mt-10 p-6 md:p-10">
      <p class="text-xl md:text-2xl text-black leading-relaxed font-semibold">
        {{ gp.hero.headline }}
      </p>
      <p class="mt-4 text-black/80 leading-relaxed">
        {{ gp.hero.subhead }}
      </p>
      <p class="mt-4 text-black/70 text-sm">
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


