export type FaqCat =
  | 'getting-started'
  | 'mental-load'
  | 'sharing'
  | 'features'
  | 'australia'
  | 'compare'
  | 'pricing'
  | 'privacy'

export type FaqItem = { cat: FaqCat; q: string; a: string }

export const faqItems: FaqItem[] = [
  // ── Getting Started ──────────────────────────────────────────────────────────
  {
    cat: 'getting-started',
    q: 'What is PAM?',
    a: 'PAM (Parental Admin Manager) is a parenting app built to reduce the mental load of running a family. Smart checklists, a daily tracker, memory keeping, and family info — all in one place, designed around how parents actually think and live.',
  },
  {
    cat: 'getting-started',
    q: 'How do I get started?',
    a: 'Download PAM from the App Store or Google Play, create your account, and follow the setup flow to add your family details. It takes about 5 minutes.',
  },
  {
    cat: 'getting-started',
    q: 'Who is PAM designed for?',
    a: "PAM is built for parents in the early years — from pregnancy through to the primary school years. Whether you're a first-time mum, a solo parent, a couple trying to share the load, or a blended family — if you're carrying mental load for little ones, PAM is for you.",
  },
  {
    cat: 'getting-started',
    q: 'Is PAM available in Australia?',
    a: "Yes — PAM was built by Australian mums for Australian families. The app's checklists are pre-loaded with Australian admin milestones (MCH visits, the national immunisation schedule, Centrelink claims, birth registration) and the terminology matches the Australian system, not the US or UK one.",
  },
  {
    cat: 'getting-started',
    q: 'Is PAM available on iPhone and Android?',
    a: 'PAM is available on iOS (iPhone and iPad) and Android. Both versions are fully featured — download from the App Store or Google Play.',
  },

  // ── Mental Load ───────────────────────────────────────────────────────────────
  {
    cat: 'mental-load',
    q: 'Is there an app that helps with the mental load of parenting?',
    a: "Yes — PAM is built specifically for this. The mental load is the invisible cognitive work of managing a family: remembering appointments, tracking what the kids need, holding every to-do in your head so nothing falls through the cracks. PAM externalises all of it. Your partner sees the same checklists, trackers, and schedules in real time — so the burden becomes shared, not carried alone.",
  },
  {
    cat: 'mental-load',
    q: 'How do I stop feeling overwhelmed as a new mum?',
    a: "The overwhelm most new mums feel isn't a personal failing — it's a systems problem. You're managing more information than any one person should hold in their head: feeding schedules, appointment dates, developmental milestones, medications, family logistics. PAM is designed to take that weight off you. Instead of remembering everything yourself, PAM holds it — smart checklists prompt you at the right time, the tracker logs feeds and sleep so you're not guessing at 3am, and your partner can see everything too.",
  },
  {
    cat: 'mental-load',
    q: 'What is the mental load and how do I share it with my partner?',
    a: "The mental load (also called cognitive labour or invisible labour) is the mental work of planning, remembering, and managing family life — grocery runs, scheduling appointments, knowing when the next MCH visit is, tracking what everyone needs. It falls disproportionately on mums. Sharing it means your partner needs visibility into the system, not just tasks delegated to them. PAM gives both parents the same real-time view of everything, so the load is genuinely shared — not just outsourced one task at a time.",
  },
  {
    cat: 'mental-load',
    q: 'Is there an app that organises everything for a new baby?',
    a: "PAM does exactly this. It's built around the reality of early parenthood: tracking feeds, sleep, and nappies in the daily tracker; pre-loaded checklists for newborn milestones and Australian admin (MCH visits, immunisations, birth registration); a place to store your baby's health record, doctors, and medications; and memory keeping so the moments don't disappear into a camera roll. Everything a new parent needs, in one calm place.",
  },
  {
    cat: 'mental-load',
    q: 'How do I get my partner to help more with baby admin without having to ask?',
    a: "The problem is usually visibility, not willingness. When only one parent holds all the information, the other can't help without being briefed every time. PAM gives both parents a shared, real-time view of everything — checklists, schedules, the daily tracker — so your partner can see what needs doing and act on it without you having to delegate. Less briefing, less invisible load.",
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
    a: "Yes. On the Family and Couple plans, you can invite trusted people to your family space — a partner, a grandparent, a babysitter. Each person gets their own login and access to the information you choose to share with them.",
  },
  {
    cat: 'sharing',
    q: 'Can I control what others can see?',
    a: 'Yes. You decide exactly what each person has access to. Sharing is opt-in and easy to adjust or revoke at any time from within the app.',
  },
  {
    cat: 'sharing',
    q: "Is there a baby tracker app where both parents can log at the same time?",
    a: "Yes — PAM's daily tracker is designed for exactly this. Both parents can log feeds, sleep, nappies, and measurements simultaneously from their own devices, and both see updates in real time. No more asking 'did you feed her already?' at 3am.",
  },

  // ── Features ─────────────────────────────────────────────────────────────────
  {
    cat: 'features',
    q: 'What can I manage with PAM?',
    a: "PAM brings together the things parents are always trying to hold in their heads — checklists and milestones, feeding and sleep tracking, family health information, memory keeping, and shared schedules. Everything your family needs, in one calm place.",
  },
  {
    cat: 'features',
    q: 'How is PAM different from Google Calendar, Notes, or a spreadsheet?',
    a: "Google Calendar and Notes are general tools — PAM is built specifically for parents. That means everything from the features to the language is designed around the real, messy, beautiful chaos of family life. Milestone checklists, baby tracking, health records, memory keeping — none of that exists in a spreadsheet.",
  },
  {
    cat: 'features',
    q: 'Will PAM send reminders and notifications?',
    a: "Yes. PAM can send reminders for upcoming appointments, milestone check-ins, and tasks — so the important things don't get lost in the chaos of everyday life. You control what you hear about and when.",
  },
  {
    cat: 'features',
    q: 'Does PAM have a baby feeding and sleep tracker?',
    a: "Yes. The Daily Tracker in PAM lets you log breastfeeds, bottle feeds, solid meals, sleep sessions (including duration and quality), nappy changes, and measurements. Both parents can log in real time from their own devices and see each other's entries instantly.",
  },
  {
    cat: 'features',
    q: 'Does PAM track baby milestones?',
    a: "Yes. PAM's Smart Checklist includes developmental milestones by age — from newborn reflexes through to walking, talking, and school-readiness markers. You can check them off as they happen and add your own notes to each one.",
  },
  {
    cat: 'features',
    q: "Can I store my baby's medical information in PAM?",
    a: "Yes. The Family & Kids Info section stores your baby's health card details, GP and specialist information, vaccination history, medications, allergies, and any notes from healthcare appointments. Everything in one place so you're never searching for it in a waiting room.",
  },

  // ── Australian Families ───────────────────────────────────────────────────────
  {
    cat: 'australia',
    q: 'When are the maternal and child health visits in Australia?',
    a: "MCH (Maternal and Child Health) visit timing varies by state. In Victoria, visits are scheduled at: 1–4 weeks, 2 months, 4 months, 6 months, 12 months, 18 months, 2 years, 3.5 years, and an optional 4-year visit. NSW and other states run similar Child and Family Health programs on comparable timelines. PAM's Smart Checklist has Australian MCH milestones pre-loaded so you're prompted at the right time.",
  },
  {
    cat: 'australia',
    q: 'What is the immunisation schedule for babies in Australia?',
    a: "Australia's National Immunisation Program (NIP) includes vaccinations at: birth (Hepatitis B), 6 weeks, 4 months, 6 months, 12 months, and 18 months — with boosters continuing through to age 4 and beyond. PAM's checklist includes these milestones pre-loaded so you can track what's been done, what's coming up, and record your baby's vaccination history.",
  },
  {
    cat: 'australia',
    q: 'What Centrelink payments can I claim after having a baby in Australia?',
    a: "The main payments are: Parental Leave Pay (up to 20 weeks at the national minimum wage), Dad and Partner Pay (2 weeks), Newborn Upfront Payment (a lump sum), Newborn Supplement (paid fortnightly for up to 13 weeks), and Family Tax Benefit Parts A and B. Eligibility depends on income and work history. PAM's newborn checklist includes Australian Centrelink admin milestones so you don't miss what you're entitled to.",
  },
  {
    cat: 'australia',
    q: "How do I register my baby's birth in Australia?",
    a: "Birth registration is compulsory across all Australian states and must be completed within 60 days of birth (timelines vary by state). You register with your state or territory's Births, Deaths and Marriages office — BDM Victoria, NSW Registry of Births Deaths & Marriages, and so on. PAM's newborn checklist includes birth registration as a milestone with a reminder so it doesn't slip through the cracks in those early chaotic weeks.",
  },
  {
    cat: 'australia',
    q: 'Is there a parenting app built specifically for Australian families?',
    a: "Most parenting apps are designed for US or UK families — the checklists, health visit schedules, and admin milestones don't match the Australian system. PAM is built by Australian mums for Australian families, with MCH visit schedules, the National Immunisation Program, Centrelink claim reminders, and Australian terminology throughout. It wasn't adapted from somewhere else; it was built here.",
  },

  // ── How PAM Compares ─────────────────────────────────────────────────────────
  {
    cat: 'compare',
    q: 'How does PAM compare to Huckleberry?',
    a: "Huckleberry is excellent at sleep tracking and nap schedule prediction — but that's most of what it does. PAM covers daily tracking (feeds, sleep, nappies) plus smart checklists with milestone guidance, family health information storage, memory keeping, and real-time partner sharing. If sleep tracking is your only need, Huckleberry is a great specialist tool. If you want to manage the full mental load of family life in one place, PAM is built for that.",
  },
  {
    cat: 'compare',
    q: 'How does PAM compare to Cozi?',
    a: "Cozi is a family calendar and grocery list app — solid for scheduling older kids' activities. PAM focuses on the early parenting years: daily baby tracking, milestone checklists, health information storage, memory keeping, and mental load sharing between partners. If your kids are school age and you mainly need a shared calendar, Cozi does that well. If you have a baby or toddler and you're managing the full weight of new parenthood, PAM is built for that stage.",
  },
  {
    cat: 'compare',
    q: 'Is there a better alternative to Tinybeans for Australian families?',
    a: "Tinybeans is a beautiful photo sharing and milestone app — great for sharing your baby's moments with distant family. PAM does memory keeping too, but also includes everything else: daily tracking, smart checklists, family health info, and real-time partner sharing. If you want more than a photo album — if you want to genuinely reduce the cognitive load of parenting — PAM goes further. Many families use both.",
  },
  {
    cat: 'compare',
    q: "What's the best baby tracker app for couples in Australia?",
    a: "For couples tracking a newborn together, PAM is the strongest option. Both parents log feeds, sleep, and nappies from their own devices and see each other's entries in real time. PAM also includes milestone checklists, Australian admin reminders, family health storage, and memory keeping — so you're not managing four separate apps.",
  },
  {
    cat: 'compare',
    q: 'Is there an app that does everything a new parent needs?',
    a: "PAM is the closest thing to it. It covers: daily tracking (feeds, sleep, nappies, measurements), smart checklists (newborn milestones, Australian admin, to-dos), family information storage (doctors, medications, health records, vaccinations), memory keeping, and real-time sharing with a partner or carer. Most parenting apps specialise in one area — PAM was built specifically to hold it all, so you don't have to.",
  },

  // ── Pricing ───────────────────────────────────────────────────────────────────
  {
    cat: 'pricing',
    q: 'Is there a free trial?',
    a: "14 days of full access to everything — Smart Lists, the Daily Tracker, Memories, and Family & Kids Info. No credit card needed to start.",
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
