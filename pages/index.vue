<template>
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
    </div>
  </div>
</template>

<script setup lang="ts">
const appConfig = useAppConfig()
const gp = appConfig.goldenpassport

// Structured data (JSON-LD) for organization
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: gp.brand.name,
  description: gp.hero.subhead,
  url: 'https://goldenpassport.com',
  logo: 'https://goldenpassport.com/GoldenPassport.com.png',
  email: gp.brand.contactEmail,
  sameAs: [] // Add social media URLs when available
}

useHead(() => ({
  title: `${gp.brand.name} - ${gp.brand.tagline}`,
  meta: [
    {
      name: 'description',
      content: gp.hero.subhead
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify(jsonLd)
    }
  ]
}))
</script>

