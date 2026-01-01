<template>
  <UDropdown :items="languageItems" :popper="{ placement: 'bottom-end' }">
    <button
      class="w-10 h-10 flex items-center justify-center rounded-lg border-2 border-gp-border hover:bg-gp-btn-bg hover:text-gp-btn-text transition-colors text-sm font-semibold uppercase"
      :aria-label="`Language: ${currentLocale?.name}`"
    >
      {{ locale }}
    </button>

    <template #item="{ item }">
      <div class="flex items-center gap-2 w-full">
        <span class="font-medium">{{ item.label }}</span>
        <UIcon
          v-if="item.code === locale"
          name="i-heroicons-check-20-solid"
          class="w-4 h-4 ml-auto"
        />
      </div>
    </template>
  </UDropdown>
</template>

<script setup lang="ts">
const { locale, locales, setLocale } = useI18n()

interface LocaleItem {
  code: string
  name: string
}

const currentLocale = computed(() =>
  (locales.value as LocaleItem[]).find((l) => l.code === locale.value)
)

const languageItems = computed(() => [
  (locales.value as LocaleItem[]).map((l) => ({
    label: l.name,
    code: l.code,
    click: () => setLocale(l.code)
  }))
])
</script>

