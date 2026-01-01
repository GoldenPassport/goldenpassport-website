<template>
  <UButton
    v-bind="$attrs"
    :variant="computedVariant"
    :class="computedClass"
  >
    <slot />
  </UButton>
</template>

<script setup lang="ts">
type Variant = 'primary' | 'outline'

interface Props {
  gpVariant?: Variant
}

const props = withDefaults(defineProps<Props>(), {
  gpVariant: 'primary'
})

const computedVariant = computed(() => (props.gpVariant === 'outline' ? 'outline' : 'solid'))
const computedClass = computed(() => (props.gpVariant === 'outline' ? 'gp-btn-outline' : 'gp-btn-primary'))
</script>


