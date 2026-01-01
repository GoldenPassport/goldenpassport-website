<template>
  <div class="min-h-screen bg-gp-bg text-gp-text">
    <!-- Header -->
    <header class="sticky top-0 z-50 bg-gp-bg/95 backdrop-blur-sm border-b-2 border-gp-border/10">
      <div class="container mx-auto px-4 py-3">
        <div class="flex items-center justify-between max-w-6xl mx-auto">
          <NuxtLink to="/" class="flex items-center gap-3 group">
            <Logo :size="40" small />
            <span class="font-bold text-xl text-gp-text group-hover:text-gp-text/80 transition-colors">
              {{ gp.brand.name }}
            </span>
          </NuxtLink>

          <nav class="hidden md:flex items-center gap-6">
            <NuxtLink
              v-for="link in navLinks"
              :key="link.href"
              :to="link.href"
              class="text-gp-text/80 hover:text-gp-text font-medium transition-colors"
            >
              {{ link.label }}
            </NuxtLink>
            <ThemeToggle />
            <GpButton size="sm" :to="gp.ctas.primary.href">
              {{ gp.ctas.primary.label }}
            </GpButton>
          </nav>

          <!-- Mobile: theme toggle + menu button -->
          <div class="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              class="w-10 h-10 flex items-center justify-center rounded-lg border-2 border-gp-border hover:bg-gp-btn-bg hover:text-gp-btn-text transition-colors"
              @click="mobileMenuOpen = !mobileMenuOpen"
              aria-label="Toggle menu"
            >
              <UIcon :name="mobileMenuOpen ? 'i-heroicons-x-mark-20-solid' : 'i-heroicons-bars-3-20-solid'" class="w-5 h-5" />
            </button>
          </div>
        </div>

        <!-- Mobile menu -->
        <div v-if="mobileMenuOpen" class="md:hidden mt-4 pb-4 border-t-2 border-gp-border/10 pt-4">
          <nav class="flex flex-col gap-3">
            <NuxtLink
              v-for="link in navLinks"
              :key="link.href"
              :to="link.href"
              class="text-gp-text/80 hover:text-gp-text font-medium py-2"
              @click="mobileMenuOpen = false"
            >
              {{ link.label }}
            </NuxtLink>
            <GpButton :to="gp.ctas.primary.href" class="mt-2" @click="mobileMenuOpen = false">
              {{ gp.ctas.primary.label }}
            </GpButton>
          </nav>
        </div>
      </div>
    </header>

    <!-- Main content -->
    <main>
      <slot />
    </main>

    <!-- Footer -->
    <footer class="border-t-2 border-gp-border/10 mt-16">
      <div class="container mx-auto px-4 py-12">
        <div class="max-w-6xl mx-auto">
          <div class="grid md:grid-cols-3 gap-8">
            <!-- Brand -->
            <div>
              <div class="flex items-center gap-3">
                <Logo :size="48" />
                <div>
                  <div class="font-bold text-lg text-gp-text">{{ gp.brand.name }}</div>
                  <div class="text-sm text-gp-text/70">{{ gp.brand.tagline }}</div>
                </div>
              </div>
              <p class="mt-4 text-gp-text/70 text-sm leading-relaxed">
                {{ gp.brand.motto }}
              </p>
            </div>

            <!-- Quick links -->
            <div>
              <h3 class="font-semibold text-gp-text mb-4">Quick links</h3>
              <nav class="space-y-2">
                <NuxtLink
                  v-for="link in navLinks"
                  :key="link.href"
                  :to="link.href"
                  class="block text-gp-text/70 hover:text-gp-text transition-colors"
                >
                  {{ link.label }}
                </NuxtLink>
              </nav>
            </div>

            <!-- Contact -->
            <div>
              <h3 class="font-semibold text-gp-text mb-4">Contact</h3>
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
              &copy; {{ new Date().getFullYear() }} {{ gp.footer.copyright }}
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const appConfig = useAppConfig()
const gp = appConfig.goldenpassport

const mobileMenuOpen = ref(false)

const navLinks = [
  { label: 'Solution', href: '#features' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'GDPR', href: '#gdpr' },
  { label: 'Get involved', href: '#cta' }
]
</script>
