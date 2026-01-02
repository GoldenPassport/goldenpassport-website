<template>
  <div class="container mx-auto px-4 sm:px-6 py-10 sm:py-14 md:py-20">
    <div class="max-w-6xl mx-auto space-y-8 sm:space-y-10 md:space-y-14">
      <LandingHero />
      <LandingProblemStatement />
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

// Comprehensive structured data (JSON-LD)
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: gp.brand.name,
  description: gp.hero.subhead,
  url: 'https://goldenpassport.com',
  logo: {
    '@type': 'ImageObject',
    url: 'https://goldenpassport.com/GoldenPassport.com.png',
    width: 1250,
    height: 1250
  },
  email: gp.brand.contactEmail,
  contactPoint: {
    '@type': 'ContactPoint',
    email: gp.brand.contactEmail,
    contactType: 'Customer Service'
  },
  sameAs: [
    'https://www.linkedin.com/company/goldenpassport',
    'https://x.com/GoldenPassport_',
    'https://github.com/GoldenPassport'
  ],
  foundingDate: '2024',
  slogan: gp.brand.tagline.full || `${gp.brand.tagline.prefix} "${gp.brand.tagline.highlight}" ${gp.brand.tagline.suffix}`
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: gp.brand.name,
  url: 'https://goldenpassport.com',
  description: gp.hero.subhead,
  publisher: {
    '@type': 'Organization',
    name: gp.brand.name
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://goldenpassport.com/?q={search_term_string}'
    },
    'query-input': 'required name=search_term_string'
  }
}

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: gp.brand.name,
  applicationCategory: 'SecurityApplication',
  operatingSystem: 'Web, iOS, Android',
  description: gp.hero.subhead,
  url: 'https://goldenpassport.com',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD'
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    ratingCount: '1'
  }
}

useHead(() => ({
  title: `${gp.brand.name} - Define Your Own Digital "Fingerprint"!`,
  meta: [
    {
      name: 'description',
      content: gp.hero.subhead
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify(organizationSchema)
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify(websiteSchema)
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify(softwareApplicationSchema)
    }
  ]
}))
</script>
