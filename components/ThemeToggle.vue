<template>
  <button
    class="w-10 h-10 flex items-center justify-center rounded-lg border-2 border-gp-border hover:bg-gp-btn-bg hover:text-gp-btn-text transition-colors"
    :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
    @click="toggleColorMode"
  >
    <UIcon
      :name="isDark ? 'i-heroicons-sun-20-solid' : 'i-heroicons-moon-20-solid'"
      class="w-5 h-5"
    />
  </button>
</template>

<script setup lang="ts">
const colorMode = useColorMode()

const isDark = computed(() => colorMode.value === 'dark')

function toggleColorMode() {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

