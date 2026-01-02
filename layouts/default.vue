<template>
  <div class="min-h-screen bg-gp-bg text-gp-text">
    <!-- Header -->
    <header class="fixed top-0 left-0 right-0 z-50 bg-gp-bg/95 backdrop-blur-sm border-b-2 border-gp-border/10 md:sticky md:top-0 safe-area-top">
      <div class="container mx-auto px-2 sm:px-4 md:px-6 py-2 md:py-3">
        <div class="flex items-center justify-between max-w-6xl mx-auto gap-1 sm:gap-2">
          <NuxtLink to="/" class="flex items-center gap-1 sm:gap-2 md:gap-3 group flex-shrink min-w-0 max-w-[calc(100%-180px)] sm:max-w-none">
            <Logo :size="28" class="!w-7 !h-7 sm:!w-8 sm:!h-8 md:!w-10 md:!h-10 flex-shrink-0" />
            <span class="font-bold text-sm sm:text-base md:text-lg lg:text-xl text-gp-text group-hover:text-gp-text/80 transition-colors truncate">
              {{ $t('brand.name') }}
            </span>
          </NuxtLink>

          <nav class="hidden md:flex items-center gap-6">
            <NuxtLink
              v-for="link in navLinks"
              :key="link.key"
              :to="link.href"
              class="text-gp-text/80 hover:text-gp-text font-medium transition-colors"
            >
              {{ $t(link.key) }}
            </NuxtLink>
            <LanguageSelector />
            <ThemeToggle />
            <GpButton size="sm" :to="gp.ctas.primary.href" class="h-10">
              {{ $t('cta.primary') }}
            </GpButton>
          </nav>

          <!-- Mobile: language + theme toggle + menu button -->
          <div class="md:hidden flex items-center gap-1 flex-shrink-0">
            <LanguageSelector />
            <ThemeToggle />
            <button
              class="w-9 h-9 min-w-[2.25rem] min-h-[2.25rem] flex items-center justify-center rounded-lg border-2 border-gp-border hover:bg-gp-btn-bg hover:text-gp-btn-text transition-colors touch-manipulation active:scale-95"
              @click="mobileMenuOpen = !mobileMenuOpen"
              aria-label="Toggle menu"
            >
              <UIcon :name="mobileMenuOpen ? 'i-heroicons-x-mark-20-solid' : 'i-heroicons-bars-3-20-solid'" class="w-5 h-5" />
            </button>
          </div>
        </div>

        <!-- Mobile menu -->
        <Transition
          enter-active-class="transition ease-out duration-200"
          enter-from-class="opacity-0 -translate-y-2"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition ease-in duration-150"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 -translate-y-2"
        >
          <div v-if="mobileMenuOpen" class="md:hidden mt-3 pb-3 border-t-2 border-gp-border/10 pt-3">
            <nav class="flex flex-col gap-2">
              <NuxtLink
                v-for="link in navLinks"
                :key="link.key"
                :to="link.href"
                class="text-gp-text/80 hover:text-gp-text font-medium py-2 px-1 rounded-lg hover:bg-gp-surface/50 transition-colors touch-manipulation active:scale-[0.98]"
                @click="mobileMenuOpen = false"
              >
                {{ $t(link.key) }}
              </NuxtLink>
              <GpButton :to="gp.ctas.primary.href" class="mt-1 w-full justify-center" @click="mobileMenuOpen = false">
                {{ $t('cta.primary') }}
              </GpButton>
            </nav>
          </div>
        </Transition>
      </div>
    </header>

    <!-- Main content -->
    <main class="pt-[56px] sm:pt-[64px] md:pt-0">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="border-t-2 border-gp-border/10 mt-12 sm:mt-16">
      <div class="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div class="max-w-6xl mx-auto">
          <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <!-- Brand -->
            <div class="sm:col-span-2 md:col-span-1">
              <div class="flex items-center gap-2 sm:gap-3">
                <Logo :size="40" class="sm:!w-12 sm:!h-12" />
                <div>
                  <div class="font-bold text-base sm:text-lg text-gp-text">{{ $t('brand.name') }}</div>
                  <div class="text-xs sm:text-sm text-gp-text/70">{{ $t('brand.tagline.prefix') }} "{{ $t('brand.tagline.highlight') }}" {{ $t('brand.tagline.suffix') }}</div>
                </div>
              </div>
              <p class="mt-3 sm:mt-4 text-gp-text/70 text-xs sm:text-sm leading-relaxed">
                {{ $t('brand.motto') }}
              </p>
            </div>

            <!-- Quick links -->
            <div>
              <h3 class="font-semibold text-gp-text mb-4">{{ $t('footer.quickLinks') }}</h3>
              <nav class="space-y-2">
                <NuxtLink
                  v-for="link in navLinks"
                  :key="link.key"
                  :to="link.href"
                  class="block text-gp-text/70 hover:text-gp-text transition-colors"
                >
                  {{ $t(link.key) }}
                </NuxtLink>
              </nav>
            </div>

            <!-- Contact -->
            <div>
              <h3 class="font-semibold text-gp-text mb-4">{{ $t('footer.contact') }}</h3>
              <a
                :href="`mailto:${gp.brand.contactEmail}`"
                class="text-gp-text/70 hover:text-gp-text transition-colors"
              >
                {{ gp.brand.contactEmail }}
              </a>

              <!-- Social links -->
              <div v-if="gp.social && gp.social.length" class="mt-4 flex gap-3">
                <a
                  v-for="s in gp.social"
                  :key="s.name"
                  :href="s.href"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="gp-icon-chip hover:bg-gp-btn-bg hover:text-gp-btn-text transition-colors"
                  :aria-label="s.name"
                >
                  <UIcon :name="s.icon" class="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <!-- Copyright -->
          <div class="mt-12 pt-6 border-t-2 border-gp-border/10 text-center">
            <p class="text-gp-text/70 text-sm">
              &copy; {{ new Date().getFullYear() }} {{ $t('footer.copyright') }}
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const appConfig = useAppConfig()
const gp = appConfig.goldenpassport

const mobileMenuOpen = ref(false)

const navLinks = [
  { key: 'nav.solution', href: '#features' },
  { key: 'nav.howItWorks', href: '#how-it-works' },
  { key: 'nav.gdpr', href: '#gdpr' },
  { key: 'nav.getInvolved', href: '#cta' }
]
</script>
