<template>
  <img
    class="logo"
    :class="{ 'logo-large': large, 'logo-small': small }"
    :style="logoStyle"
    :src="logoSrc"
    alt="GoldenPassport logo"
    loading="eager"
    decoding="async"
  />
</template>

<script setup lang="ts">
interface Props {
  size?: number
  large?: boolean
  small?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  size: 120,
  large: false,
  small: false
})

const colorMode = useColorMode()

// Use gold logo on dark background, black logo on light background
const logoSrc = computed(() => {
  return colorMode.value === 'dark' ? '/logo-gold.png' : '/logo-black.png'
})

const logoStyle = computed(() => {
  const px = props.large ? 200 : props.small ? 60 : props.size
  return {
    width: `${px}px`,
    height: `${px}px`
  }
})
</script>

<style scoped>
.logo {
  display: inline-block;
  object-fit: contain;
}
</style>
