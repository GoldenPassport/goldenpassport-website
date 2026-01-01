<template>
  <div class="min-h-screen bg-golden-500">
    <div class="container mx-auto px-4 py-14 md:py-20">
      <div class="max-w-6xl mx-auto space-y-10 md:space-y-14">
        <LandingHero />
        <LandingFeatureCards />
        <LandingHowItWorks />
        <LandingProductFlow />
        <LandingValueTabs />
        <LandingGdprPledge />
        <LandingSecurityPosture />
        <LandingCallToAction />

        <footer class="text-center pt-6 pb-10">
          <div class="text-black/80">
            <p>&copy; {{ new Date().getFullYear() }} {{ gp.footer.copyright }}</p>
          </div>
          <div class="mt-2 text-sm text-black/70">
            <p>Contact: {{ gp.brand.contactEmail }}</p>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const appConfig = useAppConfig()
const gp = appConfig.goldenpassport

useHead(() => ({
  title: `${gp.brand.name} - ${gp.brand.tagline}`,
  meta: [
    {
      name: 'description',
      content: gp.hero.subhead
    }
  ]
}))
</script>

