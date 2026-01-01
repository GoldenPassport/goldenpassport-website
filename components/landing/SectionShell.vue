<template>
  <section :id="id" class="scroll-mt-24">
    <GpCard strong class="p-6 md:p-10">
      <div v-if="eyebrow" class="text-sm font-semibold tracking-wide uppercase text-black/70">
        {{ eyebrow }}
      </div>
      <h2 v-if="title" class="mt-2 text-2xl md:text-3xl font-bold text-black">
        {{ title }}
      </h2>
      <p v-if="subtitle" class="mt-3 text-black/80 leading-relaxed">
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


