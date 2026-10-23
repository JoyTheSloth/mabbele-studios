/** Single source of truth for every quoted price on the site.
 *  The Services cards, their detail pages and the navbar dropdown all read from here. */

export interface Charge {
  title: string
  price: string
  note: string
}

export interface Milestone {
  amount: string
  stage: string
}

export interface Plan {
  title: string
  price: string
  features: string[]
  featured?: boolean
}

export interface Offer {
  slug: string
  index: string
  eyebrow: string
  title: string
  price: string
  priceLabel: string
  /** Must match an option in the Contact form's "What do you need" select. */
  enquiryLabel: string
  summary: string
  highlights: string[]
/** Live sample builds, each opened in a new tab. */
samples?: { label: string; href: string; image?: string }[]
  detail: {
    heading: string
    intro: string
    includesTitle: string
    includes: string[]
    points?: string[]
    charges?: Charge[]
    total?: { amount: string; note: string; breakdown: string }
    milestones?: Milestone[]
    plans?: Plan[]
    why?: [string, string][]
    extras?: Charge[]
    footnote: string
  }
}

export const OFFERS: Offer[] = [
  {
    slug: 'vidyasetu-erp',
    index: '01',
    eyebrow: 'For schools & colleges',
    title: 'VidyaSetu School ERP',
    price: '₹99,000',
    priceLabel: 'One-time payment',
    enquiryLabel: 'VidyaSetu School ERP Licence',
    summary:
      'A permanent, self-hosted licence for the complete school platform. Pay once, keep running it.',
    highlights: [
      'Admissions, attendance, exams and fees in one system',
      'Admin dashboard with role-based access',
      'No mandatory annual renewal',
    ],
    detail: {
      heading: 'Permanent software licence',
      intro:
        'One licence covers the whole platform. It is self-hosted, so it runs on your school’s own server, and the version you licence stays yours to run.',
      includesTitle: 'What’s included in the licence',
      includes: [
        'Student admissions and records',
        'Staff and teacher management',
        'Classes, sections and subjects',
        'Attendance management',
        'Timetable and notices',
        'Examinations, marks and report cards',
        'Fee management and receipts',
        'Admin dashboard and role-based access',
      ],
      points: [
        'Self-hosted software',
        'No mandatory annual renewal',
        'Own the software. Run it on your school’s server. Keep using your licensed version.',
      ],
      charges: [
        {
          title: 'Setup and Deployment',
          price: '₹15,000',
          note: 'One-time — installation and configuration, initial deployment and go-live assistance.',
        },
        {
          title: 'Staff Training',
          price: '₹10,000',
          note: 'One-time — administrator onboarding, teacher and staff training, operational guidance.',
        },
        {
          title: 'Hosting',
          price: 'Quoted separately',
          note: 'Optional — available if you want us to arrange and manage hosting. If the school provides its own server, hosting charges do not apply.',
        },
      ],
      total: {
        amount: '₹1,24,000',
        note: 'Excluding hosting',
        breakdown: 'Software licence + setup and deployment + staff training.',
      },
      milestones: [
        { amount: '₹49,500', stage: 'At agreement signing and project kickoff' },
        { amount: '₹24,750', stage: 'After initial deployment and configuration' },
        { amount: '₹24,750', stage: 'On completion of setup, testing and initial training' },
        { amount: '₹25,000', stage: 'After final training and handover' },
      ],
      plans: [
        {
          title: 'Standard Support',
          price: '₹9,000 / 3 Months',
          features: [
            'Bug fixes and eligible security updates',
            'Remote technical support',
            'Deployment and technical issue assistance',
          ],
        },
        {
          title: 'Premium Support',
          price: '₹15,000 / 3 Months',
          featured: true,
          features: [
            'Everything included in Standard Support',
            'Priority ticket handling',
            'Scheduled system health checks',
            'More hands-on troubleshooting',
          ],
        },
      ],
      why: [
        ['Permanent Licence', 'Keep using your licensed software without mandatory annual renewal.'],
        ['Secure and Reliable', 'Built with security and operational reliability in mind.'],
        ['School-Owned Data', 'Your school retains control of its data.'],
        ['Designed for Indian Schools', 'Practical, simple and easy to use.'],
      ],
      footnote:
        'Support plans are optional and become available after the first 45 days, which are covered as part of going live.',
    },
  },
  {
    slug: 'business-cafe-website',
    index: '02',
    eyebrow: 'For businesses & cafes',
    title: 'Custom Business or Cafe Website',
    price: '₹4,999',
    priceLabel: 'Starting from',
    enquiryLabel: 'Custom Business or Cafe Website',
    samples: [
      { label: 'See a sample cafe site', href: '/cafe-demo/index.html', image: '/moksa-preview.webp' },
      { label: 'See a sample menu card', href: '/lazeez-demo/index.html', image: '/lazeez-preview.webp' },
    ],
    summary:
      'A fast, mobile-first site for a shop, cafe or growing business — built around how you actually get enquiries.',
    highlights: [
      'Home, about and services or menu pages',
      'Photo gallery and location on Google Maps',
      'Enquiry form and one-tap WhatsApp contact',
    ],
    detail: {
      heading: 'What the site covers',
      intro:
        'A custom site for a single business or outlet — designed around the two things that matter for a local business: being found on Google and getting a message through.',
      includesTitle: 'What’s included',
      includes: [
        'Home, about and services or menu pages',
        'Photo gallery and infrastructure section',
        'Location on Google Maps with opening hours',
        'Enquiry form and one-tap WhatsApp contact',
        'Mobile-first, fast and Google ready',
        'Domain and hosting setup assistance',
      ],
      points: [
        'Built for your business, not dropped into a template',
        'Written and laid out around your own photos and menu',
        'Handed over with the logins in your name',
      ],
      extras: [
        {
          title: 'Extra pages',
          price: 'Quoted per page',
          note: 'The starting price covers a small business site. Additional pages are quoted individually.',
        },
        {
          title: 'Domain and hosting renewal',
          price: 'At actual cost',
          note: 'Renewals are billed at what the provider charges, with no markup from us.',
        },
      ],
      footnote:
        'The price shown is a starting price for a business or cafe site of the scope described above.',
    },
  },
  {
    slug: 'school-college-website',
    index: '03',
    eyebrow: 'For schools & colleges',
    title: 'Custom School or College Website',
    price: '₹11,999',
    priceLabel: 'Starting from',
    enquiryLabel: 'Custom School or College Website',
    summary:
      'An institution site with academics, admissions and notices — the public face of the school, ready for parents.',
    highlights: [
      'Academics, admissions and faculty pages',
      'Campus facilities, gallery and notices board',
      'Prospectus download and admission enquiry form',
    ],
    detail: {
      heading: 'What the site covers',
      intro:
        'A full institutional website: what the school teaches, who runs it, how admissions work, and what is happening this week — all in one place parents can actually read on a phone.',
      includesTitle: 'What’s included',
      includes: [
        'Academics, admissions and faculty pages',
        'Campus facilities, gallery and notices board',
        'Streams, classes and fee structure sections',
        'Prospectus download and admission enquiry form',
        'Mobile-first, fast and Google ready',
        'Domain, email and hosting setup assistance',
      ],
      points: [
        'Structured so parents find admissions and fees without hunting',
        'Notices board you can update yourself',
        'Scales into the VidyaSetu ERP when you are ready',
      ],
      extras: [
        {
          title: 'VidyaSetu ERP licence',
          price: '₹99,000',
          note: 'Add the full platform — attendance, exams, fees and role-based portals — behind this site.',
        },
        {
          title: 'Extra pages',
          price: 'Quoted per page',
          note: 'The starting price covers an institution site of the scope described above.',
        },
        {
          title: 'Domain and hosting renewal',
          price: 'At actual cost',
          note: 'Renewals are billed at what the provider charges, with no markup from us.',
        },
      ],
      footnote:
        'The price shown is a starting price for a school or college website of the scope described above.',
    },
  },
]

export const getOffer = (slug?: string) => OFFERS.find((offer) => offer.slug === slug)
