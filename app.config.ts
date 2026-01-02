export default defineAppConfig({
  goldenpassport: {
    brand: {
      name: 'GoldenPassport',
      tagline: {
        prefix: 'Your Online',
        highlight: 'Everywhere',
        suffix: 'Passport',
        full: 'Your Online "Everywhere" Passport'
      },
      motto: 'Privacy. Security. Responsibility.',
      contactEmail: 'enquiries@goldenpassport.com'
    },
    ctas: {
      primary: { label: 'Seed investment', href: '#cta' },
      secondary: { label: 'Technology partners', href: '#cta' }
    },
    callToAction: {
      title: 'Get involved',
      intro:
        'We’re seeking seed investment and technology partners to bring the privacy passport to market.',
      tracks: [
        {
          key: 'investment',
          title: 'Seed investment',
          description:
            'We’re raising seed to build the MVP, expand the core team, and validate the end-to-end platform with early customers.',
          bullets: [
            'MVP build + security foundations',
            'Early customer validation',
            'Go-to-market preparation'
          ],
          button: {
            label: 'Contact for investor deck',
            href: 'mailto:enquiries@goldenpassport.com?subject=GoldenPassport%20-%20Seed%20Investment'
          }
        },
        {
          key: 'partners',
          title: 'Technology partners',
          description:
            'We’re looking for partners across merchants, payments, and delivery to integrate into real-life transaction flows.',
          bullets: [
            'Merchant integrations (login + checkout)',
            'Payments (tokenisation / processing)',
            'Delivery / logistics coordination'
          ],
          button: {
            label: 'Partner with us',
            href: 'mailto:enquiries@goldenpassport.com?subject=GoldenPassport%20-%20Technology%20Partnership'
          }
        }
      ]
    },
    hero: {
      headline:
        'Control your digital identity. Share only what’s necessary.',
      subhead:
        'GoldenPassport is building a privacy-focused online identity management platform: anonymous logon, local user data storage, and selective disclosure (“share just enough, at the right time, to the right people”).',
      trustNote:
        'Principle: minimise what is collected and always make sharing explicit and consented.'
    },
    featureCards: [
      {
        title: 'Anonymous logon',
        description:
          'Authenticate without unnecessary identity exposure.',
        icon: 'i-heroicons-user-20-solid'
      },
      {
        title: 'Never share CC & address',
        description:
          'Reduce sensitive data exposure during online transactions.',
        icon: 'i-heroicons-credit-card-20-solid'
      },
      {
        title: 'Local user data storage',
        description:
          'Keep personal data close to the user (and encrypted where appropriate).',
        icon: 'i-heroicons-circle-stack-20-solid'
      },
      {
        title: 'Share just enough',
        description:
          'Selective disclosure of attributes—only what’s needed, when it’s needed.',
        icon: 'i-heroicons-adjustments-horizontal-20-solid'
      }
    ],
    howItWorks: {
      title: 'How it works',
      steps: [
        {
          title: 'Create a privacy profile',
          description:
            'Store your attributes as structured claims (e.g., age range) instead of raw identity data.',
          icon: 'i-heroicons-identification-20-solid'
        },
        {
          title: 'Approve each disclosure',
          description:
            'You choose what to share and with whom, with clear consent prompts.',
          icon: 'i-heroicons-check-badge-20-solid'
        },
        {
          title: 'Transact with reduced exposure',
          description:
            'Where relevant, keep payment and delivery details away from merchants to reduce leakage.',
          icon: 'i-heroicons-truck-20-solid'
        }
      ]
    },
    productFlow: {
      title: 'Real-life flow (end-to-end privacy purchase)',
      intro:
        'A simple example of how GoldenPassport can sit between users and online services to reduce unnecessary data exposure across login, payment, and delivery.',
      steps: [
        {
          title: 'Login & Select',
          description:
            'Secure, privacy-preserving logon. Share only what’s needed (e.g., age range, country) to unlock the right experience.'
        },
        {
          title: 'Pay',
          description:
            'Pay through GoldenPassport so the merchant does not need to see your card details.'
        },
        {
          title: 'Deliver',
          description:
            'GoldenPassport can coordinate delivery so the merchant does not need your address.'
        }
      ],
      architecture: {
        title: 'Architecture: a protective proxy shield',
        caption:
          'GoldenPassport acts as a privacy layer between the user and external parties. The goal is to minimise what each party learns, while still enabling the transaction.',
        nodes: {
          user: { label: 'User' },
          gp: { label: 'GoldenPassport' },
          merchant: { label: 'Merchant' },
          payments: { label: 'Payments' },
          delivery: { label: 'Delivery' }
        },
        edges: [
          { from: 'user', to: 'gp', label: 'consent + minimal data' },
          { from: 'gp', to: 'merchant', label: 'anonymous logon + order' },
          { from: 'gp', to: 'payments', label: 'payment token / processing' },
          { from: 'gp', to: 'delivery', label: 'pickup + delivery coordination' }
        ],
        note:
          'Implementation details (data handling, key management, and compliance boundaries) will be finalised as the MVP architecture is confirmed.'
      }
    },
    valueTabs: {
      title: 'Who it’s for',
      tabs: [
        {
          key: 'users',
          label: 'Online users',
          items: [
            'Control of personal data',
            'Protection from profiling',
            'Right to be forgotten (where applicable)',
            'Access to new opportunities'
          ]
        },
        {
          key: 'businesses',
          label: 'Online businesses',
          items: [
            'Brand protection',
            'Moral high ground (privacy-forward trust)',
            'EU GDPR alignment and reduced data liability',
            'Reach new audiences (privacy-conscious users)'
          ]
        }
      ]
    },
    gdpr: {
      title: 'EU GDPR: product-aligned pledge',
      intro:
        'GoldenPassport is designed to support the core GDPR rights with product behaviors that prioritise user control and transparency.',
      rows: [
        {
          right: 'The right to be informed',
          pledge: 'Open, clear communication about what is shared and why.'
        },
        {
          right: 'The right of access',
          pledge: 'Full visibility of stored attributes and disclosure history.'
        },
        {
          right: 'The right to rectification',
          pledge: 'On-demand updates to user attributes/claims.'
        },
        {
          right: 'The right to erasure',
          pledge:
            'On-demand deletion of GoldenPassport-held data; minimise what third parties receive.'
        },
        {
          right: 'The right to restrict processing',
          pledge: 'Granular controls over what can be shared and when.'
        },
        {
          right: 'The right to data portability',
          pledge: 'Ability to export and transfer your data/claims.'
        },
        {
          right: 'The right to object',
          pledge: 'You can object prior to any data transfer.'
        },
        {
          right: 'Protect against profiling',
          pledge: 'Profiling protection is a core goal (reduce unnecessary targeting).'
        }
      ]
    },
    security: {
      title: 'Security posture (foundations)',
      intro:
        'Security is a prerequisite for privacy. Our approach focuses on measurable controls and transparent boundaries.',
      bullets: [
        'Threat modeling and secure-by-design architecture',
        'Encryption in transit and at rest, with clear key-handling boundaries',
        'Auditability: consent logs and access trails',
        'Independent testing (penetration tests / responsible disclosure pathway)',
        'Least-privilege access and hardened operational practices'
      ],
      note:
        'This site is a placeholder and will evolve as the technical architecture and compliance posture are finalised.'
    },
    social: [
      { name: 'LinkedIn', href: 'https://www.linkedin.com/company/goldenpassport', icon: 'i-heroicons-link-20-solid' },
      { name: 'X', href: 'https://x.com/GoldenPassport_', icon: 'i-simple-icons-x' },
      { name: 'GitHub', href: 'https://github.com/GoldenPassport', icon: 'i-simple-icons-github' }
    ],
    footer: {
      copyright: 'GoldenPassport.com. All rights reserved.'
    }
  }
})


