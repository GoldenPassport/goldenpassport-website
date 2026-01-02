<template>
  <div class="text-center">
    <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold text-gp-text tracking-tight leading-tight">
      {{ $t('brand.name') }}
    </h1>
    <p class="mt-4 text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl text-gp-text font-medium px-4 leading-snug">
      {{ $t('brand.tagline.prefix') }}
      <span
        class="font-bold italic text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl highlight-everywhere"
        style="font-family: 'Georgia', 'Times New Roman', serif;"
      >
        "{{ $t('brand.tagline.highlight') }}"
      </span>
      {{ $t('brand.tagline.suffix') }}
    </p>
    <p class="mt-3 text-lg sm:text-xl md:text-2xl text-gp-text/80 italic">
      {{ $t('brand.motto') }}
    </p>

    <div class="w-40 h-1.5 bg-gp-text mx-auto rounded-full mt-8" />
  </div>
</template>
