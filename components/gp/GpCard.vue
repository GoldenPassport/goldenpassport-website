<template>
  <div :class="[strong ? 'gp-card-strong' : 'gp-card', $attrs.class]">
    <slot />
  </div>
</template>

<script setup lang="ts">
interface Props {
  strong?: boolean
}

defineProps<Props>()
</script>


