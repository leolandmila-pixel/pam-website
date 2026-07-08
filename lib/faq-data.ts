export type FaqCat =
  | 'getting-started'
  | 'sharing'
  | 'features'
  | 'pricing'
  | 'privacy'

export type FaqItem = { cat: FaqCat; q: string; a: string }

export const faqItems: FaqItem[] = [
  // ── Getting Started ──────────────────────────────────────────────────────────
  {
    cat: 'getting-started',
    q: 'What is PAM?',
    a: 'PAM (Parental Admin Manager) is a parenting app built to reduce the mental load of running a family. Smart checklists, a daily tracker, memory keeping, and family info - all in one place, designed around how parents actually think and live.',
  },
  {
    cat: 'getting-started',
    q: 'How do I get started?',
    a: 'Download PAM from the App Store or Google Play, create your account, and follow the setup flow to add your family details. It takes about 5 minutes.',
  },
  {
    cat: 'getting-started',
    q: 'Who is PAM designed for?',
    a: "PAM is built for parents in the early years - from pregnancy through to the primary school years. Whether you're a first-time mum, a solo parent, a couple trying to share the load, or a blended family - if you're carrying mental load for little ones, PAM is for you.",
  },
  {
    cat: 'getting-started',
    q: 'Is PAM available in Australia?',
    a: "Yes - PAM was built by Australian mums for Australian families. The app's checklists are pre-loaded with Australian admin milestones and the terminology matches the Australian system.",
  },
  {
    cat: 'getting-started',
    q: 'Is PAM available on iPhone and Android?',
    a: 'PAM is available on iOS (iPhone and iPad) and Android. Both versions are fully featured - download from the App Store or Google Play.',
  },

  // ── Sharing & Family ─────────────────────────────────────────────────────────
  {
    cat: 'sharing',
    q: 'Can I use PAM without a partner?',
    a: "Absolutely. PAM is designed for all kinds of families, including solo parents. You get full access to every feature whether you're flying solo or sharing the load with a partner.",
  },
  {
    cat: 'sharing',
    q: 'Can I invite grandparents, carers, or other family members?',
    a: "Yes. On the Family and Couple plans, you can invite trusted people to your family space - a partner, a grandparent, a babysitter. Each person gets their own login and access to the information you choose to share with them.",
  },
  {
    cat: 'sharing',
    q: 'Can I control what others can see?',
    a: 'Yes. You decide exactly what each person has access to. Sharing is opt-in and easy to adjust or revoke at any time from within the app.',
  },
  {
    cat: 'sharing',
    q: 'Can both parents log at the same time?',
    a: "Yes - PAM's daily tracker is designed for exactly this. Both parents can log feeds, sleep, nappies, and measurements simultaneously from their own devices, and both see updates in real time. No more asking 'did you feed her already?' at 3am.",
  },

  // ── Features ─────────────────────────────────────────────────────────────────
  {
    cat: 'features',
    q: 'What can I manage with PAM?',
    a: "PAM brings together the things parents are always trying to hold in their heads - checklists and milestones, feeding and sleep tracking, family health information, memory keeping, and shared schedules. Everything your family needs, in one calm place.",
  },
  {
    cat: 'features',
    q: 'How is PAM different from Google Calendar or Notes?',
    a: "Google Calendar and Notes are general tools - PAM is built specifically for parents. That means everything from the features to the language is designed around the real, messy, beautiful chaos of family life. Milestone checklists, baby tracking, health records, memory keeping - none of that exists in a spreadsheet.",
  },
  {
    cat: 'features',
    q: 'Will PAM send reminders and notifications?',
    a: "Yes. PAM can send reminders for upcoming appointments, milestone check-ins, and tasks - so the important things don't get lost in the chaos of everyday life. You control what you hear about and when.",
  },
  {
    cat: 'features',
    q: 'Does PAM have a baby feeding and sleep tracker?',
    a: "Yes. The Daily Tracker in PAM lets you log breastfeeds, bottle feeds, solid meals, sleep sessions, nappy changes, and measurements. Both parents can log in real time from their own devices and see each other's entries instantly.",
  },
  {
    cat: 'features',
    q: 'Does PAM track baby milestones?',
    a: "Yes. PAM's Smart Checklist includes developmental milestones by age - from newborn through to walking, talking, and school-readiness markers. You can check them off as they happen and add notes to each one.",
  },
  {
    cat: 'features',
    q: "Can I store my baby's medical information in PAM?",
    a: "Yes. The Family & Kids Info section stores your baby's GP and specialist information, vaccination history, medications, allergies, and notes from healthcare appointments. Everything in one place so you're never searching for it in a waiting room.",
  },

  // ── Pricing ───────────────────────────────────────────────────────────────────
  {
    cat: 'pricing',
    q: 'Is there a free trial?',
    a: "14 days of full access to everything - Smart Lists, the Daily Tracker, Memories, and Family & Kids Info. No credit card needed to start.",
  },
  {
    cat: 'pricing',
    q: 'Is there a free version of PAM?',
    a: "PAM offers a 14-day free trial so you can explore everything before committing. After that, a subscription is required to keep access to the full feature set.",
  },
  {
    cat: 'pricing',
    q: 'Can I cancel at any time?',
    a: "Yes, always. There are no lock-in contracts. You can cancel your subscription at any time from within the app, and you'll keep access until the end of your current billing period.",
  },

  // ── Privacy & Security ────────────────────────────────────────────────────────
  {
    cat: 'privacy',
    q: "Is my family's information secure?",
    a: "Always. Your data is encrypted, stored securely, and never sold or shared with advertisers. Your family's information belongs to you and only you.",
  },
  {
    cat: 'privacy',
    q: "Who can see my family's information?",
    a: "Only you and the people you explicitly invite. PAM staff cannot access the content of your account. We never sell data or use it for advertising purposes.",
  },
  {
    cat: 'privacy',
    q: 'What happens to my data if I cancel?',
    a: "Your data is stored securely and you can export it before cancelling. If you resubscribe, your information will still be there.",
  },
]
