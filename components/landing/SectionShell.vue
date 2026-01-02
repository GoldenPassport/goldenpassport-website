<template>
  <section :id="id" class="scroll-mt-20 sm:scroll-mt-24">
    <GpCard strong class="p-4 sm:p-6 md:p-10">
      <div v-if="eyebrow" class="text-sm font-semibold tracking-wide uppercase text-gp-text/70">
        {{ eyebrow }}
      </div>
      <h2 v-if="title" class="mt-2 text-2xl md:text-3xl font-bold text-gp-text">
        {{ title }}
      </h2>
      <p v-if="subtitle" class="mt-3 text-gp-text/80 leading-relaxed">
        {{ subtitle }}
      </p>

      <div class="mt-6">
        <slot />
      </div>
    </GpCard>
  </section>
</template>

<script setup lang="ts">
interface Props {
  id?: string
  eyebrow?: string
  title?: string
  subtitle?: string
}

defineProps<Props>()
</script>


