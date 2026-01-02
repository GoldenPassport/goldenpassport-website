<template>
  <button
    class="w-9 h-9 min-w-[2.25rem] min-h-[2.25rem] md:w-10 md:h-10 flex items-center justify-center rounded-lg border-2 border-gp-border hover:bg-gp-btn-bg hover:text-gp-btn-text transition-colors touch-manipulation active:scale-95"
    :aria-label="isDark ? t('common.switchToLight') : t('common.switchToDark')"
    @click="toggleColorMode"
  >
    <UIcon
      :name="isDark ? 'i-heroicons-sun-20-solid' : 'i-heroicons-moon-20-solid'"
      class="w-5 h-5"
    />
  </button>
</template>

<script setup lang="ts">
const { t } = useI18n()
const colorMode = useColorMode()

const isDark = computed(() => colorMode.value === 'dark')

function toggleColorMode() {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>
