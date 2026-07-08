export type QACat =
  | 'newborn'
  | 'sleep'
  | 'feeding'
  | 'development'
  | 'australia'
  | 'mental-load'

export type QAItem = { cat: QACat; q: string; a: string }

export const qaItems: QAItem[] = [

  // ── THE NEWBORN STAGE ──────────────────────────────────────────────────────

  {
    cat: 'newborn',
    q: 'Why does my newborn cry so much?',
    a: "Crying is a newborn's only way to communicate, and in the first weeks it almost always signals a physical need: hunger (the most common), wind or trapped gas, tiredness, overstimulation, needing to be held, or being too hot or cold. Crying typically peaks around 6–8 weeks and then gradually reduces - this is normal and not a sign something is wrong.\n\nA common approach is to work through the list: feed, wind, change, hold, settle. If your baby cries persistently and nothing helps, or the cry sounds different from usual, contact your GP or MCH nurse. In Victoria, the Maternal and Child Health Line (13 22 29) is available 24 hours a day.\n\nTracking feeds, sleep, and nappy changes in PAM's daily tracker often reveals patterns - a specific crying window linked to a feed that was shorter than usual, or a missed nap.",
  },
  {
    cat: 'newborn',
    q: 'Is it normal for a newborn to sleep all day?',
    a: "Yes - newborn sleep is heavy, frequent, and unlike anything you will see again. In the first weeks, most newborns sleep 16–18 hours in a 24-hour period, waking only to feed. Because their stomachs are tiny, feeds happen every 2–3 hours around the clock, which means they are rarely awake for long stretches.\n\nThis is biologically normal and necessary for brain development. What warrants attention is a newborn who is consistently difficult to rouse for feeds, is not gaining weight, or seems lethargic between feeds. If you have concerns, speak to your MCH nurse or GP - they will check weight gain and feeding patterns at your scheduled MCH visits, which are pre-loaded in PAM's Smart Checklist.",
  },
  {
    cat: 'newborn',
    q: 'What is the fourth trimester?',
    a: "The fourth trimester is the first 12 weeks after birth - a concept developed by American paediatrician Dr Harvey Karp to describe the period when newborns are still adapting to life outside the womb.\n\nUnlike most animals, human babies are born neurologically immature. The fourth trimester framework suggests that what newborns most need in those first 12 weeks is an environment that mimics the womb: warmth, movement, constant sound (white noise), and closeness. This is why being held and fed constantly in those early weeks is not 'spoiling' - it is meeting a biological need.\n\nUnderstanding the fourth trimester helps normalise the intensity of the newborn period. The unsettled behaviour, the constant feeding, the inability to put the baby down - these are features of early development, not failures of parenting. The fourth trimester has an end date: around 12 weeks, most babies begin to regulate more, sleep in slightly longer stretches, and become more interested in the world.",
  },
  {
    cat: 'newborn',
    q: 'Is it normal for newborns to lose weight after birth?',
    a: "Yes. Almost all newborns lose weight in the first few days of life - typically 5–10% of their birth weight. This happens because newborns are born with extra fluid they expel in the first days, and because colostrum (the first breast milk) comes in small volumes before mature milk arrives around days 3–5.\n\nMost babies return to their birth weight by 10–14 days of age. This is monitored closely by your midwife and MCH nurse in the first weeks. If your baby loses more than 10% of their birth weight, or is not back to birth weight by 2 weeks, your care team will investigate to ensure feeding is effective.\n\nWeighing happens at every MCH visit in the first year. PAM's Smart Checklist has all your MCH visit dates pre-loaded so you are never uncertain when the next one falls.",
  },
  {
    cat: 'newborn',
    q: 'Why does my newborn make so many noises while sleeping?',
    a: "Newborns are notoriously noisy sleepers. Grunting, squeaking, snuffling, and brief crying sounds during sleep are all normal. This happens because newborns spend a large proportion of their sleep in active (REM) sleep - the same stage where adults dream - during which the brain is very active and the body is less still.\n\nThe sounds you hear are the result of immature neurological systems: a newborn's brain is still learning to differentiate between sleep states. Most nocturnal noises require no response.\n\nWhat to watch for: persistent gasping, pauses in breathing, a blue tinge around the lips, or a cry that sounds different from usual - these warrant immediate attention. For safe sleep guidelines in Australia, visit Red Nose Australia (rednose.org.au).",
  },
  {
    cat: 'newborn',
    q: 'When should I take my newborn outside for the first time?',
    a: "There is no medical requirement to keep a healthy, full-term newborn indoors for any set period. Fresh air and gentle outings are safe from day one, provided your baby is dressed appropriately for the weather.\n\nIn Australia, the main consideration is sun protection. Babies under 6 months have sensitive skin that burns easily - keep them in the shade, cover with lightweight clothing, and avoid the hottest part of the day (10am–3pm in summer). Sunscreen is generally not recommended for babies under 3 months due to skin sensitivity.\n\nGetting outside - even briefly - is good for you too. Daylight exposure helps establish circadian rhythms, and time outdoors is beneficial for postnatal mental health. Many MCH nurses actively encourage daily walks from the first weeks.",
  },
  {
    cat: 'newborn',
    q: 'What does a normal newborn sleep schedule look like?',
    a: "There is no single 'normal' newborn sleep schedule - newborns have not yet developed circadian rhythms (the internal clock that makes humans sleep at night) and typically sleep in cycles of 1–4 hours across the full 24 hours.\n\nA general pattern in weeks 1–6: total sleep of 14–17 hours per day, broken into multiple periods with feeding windows every 2–3 hours. No distinction between day and night is expected until around 6–8 weeks, when some babies start to consolidate slightly longer stretches at night.\n\nThe clearest sign your baby's sleep is on track is weight gain - if they are feeding well and gaining weight, their sleep pattern is likely fine. Tracking feeds, sleep, and wake times in PAM's daily tracker can help you spot patterns you might not otherwise notice.",
  },

  // ── BABY SLEEP ────────────────────────────────────────────────────────────

  {
    cat: 'sleep',
    q: 'What is the 4-month sleep regression?',
    a: "The 4-month sleep regression is a developmentally normal change in a baby's sleep architecture that occurs around 3–5 months of age (not always exactly at 4 months). Before this point, babies cycle between two sleep states: active (light) and quiet (deep). Around 4 months, the brain matures and babies develop a four-stage sleep cycle similar to adults - with two light stages where they partially rouse between cycles.\n\nThe result: babies who were sleeping in longer stretches often start waking more frequently. This is not something you caused - it is neurological development. Unlike earlier unsettled periods which often pass in a few weeks, the 4-month change is permanent: their sleep architecture has changed for good.\n\nMost families respond by introducing more consistent sleep habits and appropriate wake windows at this stage. Speak to your MCH nurse if you need personalised support.",
  },
  {
    cat: 'sleep',
    q: 'When do babies sleep through the night?',
    a: "'Sleeping through the night' is widely misunderstood. Paediatricians define it as a 5-hour stretch - but most parents mean 10–12 hours. The reality is that the majority of babies do not consistently sleep for long stretches until 6 months or beyond, and many not until well into the second year. Both are within the normal range.\n\nTiming varies by individual baby, feeding method (breastfed babies often wake more frequently due to faster digestion), and sleep environment. Sleep training approaches can help some families achieve longer stretches earlier, but none of them override biology - a baby who is not developmentally ready to go long stretches without feeding will not do so regardless of method.\n\nIf night waking is significantly affecting your family's functioning, speak to your MCH nurse or GP. They can assess whether your baby's waking is within normal range for their age and feeding pattern.",
  },
  {
    cat: 'sleep',
    q: 'What is a wake window for babies?',
    a: "A wake window is the amount of time a baby can comfortably stay awake between sleep periods before becoming overtired. Overtired babies are harder to settle and often sleep worse than babies who go to sleep within their window.\n\nWake windows by age:\n• 0–6 weeks: 45–60 minutes\n• 2–3 months: 1–1.5 hours\n• 4–5 months: 1.5–2 hours\n• 6–8 months: 2–3 hours\n• 9–12 months: 3–4 hours\n\nThese are starting points - every baby is different. Watch for tiredness cues (yawning, glazed eyes, rubbing eyes, losing interest in stimulation) rather than the clock. Logging wake times in PAM's daily tracker helps you identify your specific baby's window - the log shows you how long they were awake before each sleep and how that sleep went.",
  },
  {
    cat: 'sleep',
    q: 'What is safe sleep for babies in Australia?',
    a: "Safe sleep guidelines in Australia are published by Red Nose Australia and are based on the strongest available evidence for reducing the risk of SIDS and sudden unexpected infant death.\n\nThe current Australian safe sleep guidelines recommend:\n• Always place babies on their back to sleep - not on their stomach or side - until they can roll independently\n• Use a firm, flat surface with a well-fitting mattress - no pillows, duvets, bumpers, or soft toys in the sleep space\n• Room sharing (not bed sharing) is recommended for at least the first 6 months\n• Keep the environment smoke-free, before and after birth\n• Breastfeeding is associated with reduced SIDS risk where possible\n\nThe full guidelines are available at rednose.org.au. Your MCH nurse will discuss safe sleep at your first scheduled visit.",
  },
  {
    cat: 'sleep',
    q: 'Should I wake my newborn to feed at night?',
    a: "In the first 1–2 weeks, yes - most newborns should not go longer than 3–4 hours without feeding, especially if breastfed, as frequent feeding is necessary to establish milk supply and ensure adequate weight gain.\n\nAfter your baby has returned to their birth weight (usually by 10–14 days) and your midwife or MCH nurse confirms feeding is established, many will advise you can let your baby wake naturally for night feeds.\n\nThis guidance varies by individual baby. Premature babies, babies with low birth weight, or babies who are slow to regain birth weight may need to continue being woken for feeds longer than this. Always follow the specific advice of your midwife, GP, or MCH nurse, who knows your baby's particular situation.",
  },
  {
    cat: 'sleep',
    q: 'What is the 2-3-4 sleep schedule?',
    a: "The 2-3-4 schedule is a two-nap routine for babies roughly 6–8 months old. The idea is simple: the first nap starts 2 hours after morning wake-up, the second nap starts 3 hours after the first nap ends, and bedtime is 4 hours after the second nap ends.\n\nFor example: wake at 7am → nap at 9am → wake at 10am → nap at 1pm → wake at 2pm → bed at 6pm.\n\nThe 2-3-4 schedule is a guide, not a rule - it works well for many babies in this age range because it aligns with typical wake windows. If your baby's wake windows are different, adjust the gaps accordingly. Track the schedule in PAM's daily tracker for a few days to see how your specific baby responds.",
  },
  {
    cat: 'sleep',
    q: 'When should I start a bedtime routine with my baby?',
    a: "You can begin a simple bedtime routine from around 6–8 weeks - not because it will produce overnight sleep immediately, but because consistent cues help your baby's brain begin to associate certain signals with sleep. A routine does not need to be elaborate: bath, feed, song, and sleep is enough.\n\nThe routine becomes more effective as your baby's circadian rhythm develops, which happens gradually between 6 weeks and 3–4 months. By 3–4 months, most babies respond clearly to consistent bedtime cues.\n\nKeep the routine short (15–20 minutes) and the same each night. Consistency is more important than any specific element of the routine. Predictability is the point.",
  },

  // ── FEEDING ───────────────────────────────────────────────────────────────

  {
    cat: 'feeding',
    q: 'How do I know if my baby is getting enough breast milk?',
    a: "The most reliable indicators are nappy output and weight gain - not how long or how often your baby feeds, and not how your breasts feel.\n\nSigns feeding is working: 6–8 wet nappies per day from day 4–5; loose yellow nappy output (2–3 times daily in the first weeks); weight gain of approximately 150–200g per week in the first 3 months; baby comes off the breast spontaneously and seems settled.\n\nSigns to get support promptly: significant nipple pain throughout a feed; a baby who feeds constantly and never seems satisfied; persistent weight loss or slow gain; fewer than 6 wet nappies per day after day 5.\n\nIn Australia, the Australian Breastfeeding Association helpline is available 24/7 at 1800 686 268. Your MCH nurse will also assess feeding at every visit in the first year.",
  },
  {
    cat: 'feeding',
    q: 'When can babies start solid food in Australia?',
    a: "The National Health and Medical Research Council (NHMRC) recommends introducing solid foods at around 6 months of age - not before 4 months, and not significantly after 7 months.\n\nSigns of readiness: your baby can sit with minimal support and hold their head steady, shows interest in food when others eat, and has lost the tongue-thrust reflex (where they automatically push food out of their mouth).\n\nFirst foods: iron-rich foods are the priority - soft pureed meat, well-cooked lentils, or iron-fortified infant cereal - alongside vegetables and fruit. Honey must be avoided until 12 months due to botulism risk.\n\nSpeak to your MCH nurse or GP before starting if you have concerns or a family history of food allergies. ASCIA (the Australasian Society of Clinical Immunology and Allergy) provides Australian-specific guidance on introducing allergens.",
  },
  {
    cat: 'feeding',
    q: 'What is cluster feeding?',
    a: "Cluster feeding is when a baby feeds very frequently - sometimes every 30–60 minutes - over a period of several hours, usually in the late afternoon or evening. It is biologically normal and serves two purposes: it stimulates milk supply in response to the baby's growing needs, and it helps babies 'load up' before a longer overnight stretch.\n\nCluster feeding is most intense in the first 6–8 weeks and often coincides with the witching hour - the period of unsettled behaviour many newborns show between roughly 4pm and 10pm. It can feel like you are feeding constantly and that something is wrong with your supply, but this is usually not the case.\n\nWhat helps: accept that cluster feeding is temporary, stay hydrated, feed on demand, and have support in place for the evening period. Cluster feeding typically reduces significantly by 6–8 weeks. Contact the Australian Breastfeeding Association (1800 686 268) if you are concerned about supply during a cluster feeding period.",
  },
  {
    cat: 'feeding',
    q: 'How long should I breastfeed?',
    a: "The WHO and Australia's NHMRC both recommend exclusive breastfeeding for the first 6 months, followed by continued breastfeeding alongside solid foods until 2 years or beyond - for as long as mother and baby wish to continue.\n\nIn practice, the right duration is whatever works for your family. Breastfeeding for any amount of time offers benefits. If you need to stop before you planned to, for any reason, that is a personal decision.\n\nIf breastfeeding is painful, difficult, or you are considering stopping earlier than intended, contact the Australian Breastfeeding Association (1800 686 268) or ask your MCH nurse about a lactation consultant referral before making a final decision - many challenges have practical solutions.",
  },
  {
    cat: 'feeding',
    q: 'Is formula feeding okay?',
    a: "Yes. Formula feeding is a safe, nutritionally complete choice for your baby. There is no 'best' feeding method - the best method is the one that works for your family, whether that is exclusive breastfeeding, exclusive formula feeding, or a combination of both.\n\nIn Australia, all infant formula sold commercially is regulated by Food Standards Australia New Zealand (FSANZ) and meets strict nutritional standards. You do not need to justify your feeding choice to anyone.\n\nPractical guidance: use age-appropriate formula (Stage 1 for 0–6 months), follow preparation instructions exactly - the ratio of powder to water matters - and sterilise bottles according to the manufacturer's guidance. Your MCH nurse can advise on preparation, quantities, and formula choices at any visit.",
  },
  {
    cat: 'feeding',
    q: 'When can babies drink water?',
    a: "Babies under 6 months do not need water - breast milk and correctly prepared formula provide all the hydration they need. Giving water to babies under 6 months can dilute the nutrients in their feeds and lead to hyponatraemia (low sodium), which is dangerous.\n\nFrom around 6 months, when solid foods are introduced, small amounts of water can be offered in an open cup at meal times. This helps with swallowing solids without replacing milk feeds, which remain the primary nutrition source until 12 months.\n\nFull cream cow's milk can replace breast milk or formula as the main drink from 12 months. Do not give cow's milk as the primary drink before this age, though it can be used in cooking from 6 months.",
  },
  {
    cat: 'feeding',
    q: 'How often should I feed my newborn?',
    a: "Newborns typically feed 8–12 times in 24 hours - roughly every 2–3 hours around the clock - in the first weeks. This frequency is normal and necessary: newborn stomachs are tiny (roughly the size of a marble at birth) and breast milk and formula digest quickly.\n\nFeed on demand rather than to a strict schedule in the early weeks. Signs your baby is hungry before crying: rooting (turning head side to side, opening mouth), sucking on fists, increased alertness and movement. Crying is a late hunger cue - try to respond before your baby reaches this point as it can make latching harder.\n\nAs your baby grows and their stomach capacity increases, the gaps between feeds naturally extend. Most babies start to develop a more predictable feeding pattern around 6–8 weeks.",
  },

  // ── DEVELOPMENT & MILESTONES ─────────────────────────────────────────────

  {
    cat: 'development',
    q: 'What should my 3-month-old be doing?',
    a: "At 3 months, most babies are: smiling responsively at familiar faces, starting to coo and make vowel sounds as a form of conversation, tracking objects across their visual field, holding their head steady when upright, and showing more alertness and interest in their environment than in the newborn stage.\n\nMotor development: most 3-month-olds can lift their head and chest during tummy time, and many are starting to bat at objects or bring their hands to their mouth.\n\nThere is a normal range for every milestone - not all babies do everything at exactly the same time. Red flags to discuss with your MCH nurse or GP: no social smile by 3 months, no visual tracking, no response to sounds or voices, does not hold their head up at all during tummy time.\n\nPAM's Smart Checklist includes developmental milestones by age so you know what to look for at each stage without cross-referencing multiple sources.",
  },
  {
    cat: 'development',
    q: 'When do babies start smiling?',
    a: "A baby's first social smile - a genuine response to a familiar face rather than wind or a reflex - typically appears between 6–8 weeks of age. It is one of the most anticipated milestones of the fourth trimester and a significant developmental marker.\n\nThe distinction from a reflex smile: a social smile appears when your baby sees your face, makes eye contact, or hears your voice. It is usually accompanied by widening eyes and often a sound. Reflex smiles happen randomly during sleep or in response to internal sensations.\n\nThe 6-week MCH check will specifically look for a social smile as part of the developmental assessment. If your baby has not smiled socially by 3 months, speak to your MCH nurse or GP.",
  },
  {
    cat: 'development',
    q: 'When do babies start talking?',
    a: "Language development begins from birth, but the stages look like this:\n• 2–3 months: cooing and vowel sounds\n• 6 months: babbling ('bababa', 'mamama')\n• 12 months: first words - a specific sound used consistently for a specific person or object\n• 18–24 months: two-word combinations ('more milk', 'daddy gone')\n\nA 12-month-old who has no words, no babbling, and does not point to objects warrants a conversation with your GP. Early speech and language intervention is most effective when started early.\n\nBilingual babies may begin combining languages differently and may reach some verbal milestones slightly later than the monolingual average - this is normal and not a sign of delay. Your MCH nurse can advise on what to watch for at each stage.",
  },
  {
    cat: 'development',
    q: 'When do babies start walking?',
    a: "Most babies take their first independent steps somewhere between 9 and 15 months, with the average around 12 months. The range of normal is wide - some babies walk at 9 months, others not until 16–17 months, and both can be completely within range.\n\nThe developmental pathway: rolling (4–6 months), sitting independently (6–9 months), pulling to stand (8–12 months), cruising along furniture (9–12 months), then independent walking. Babies who bottom-shuffle rather than crawl often walk slightly later - this is not a developmental concern in itself.\n\nIf your baby is not walking by 18 months, speak to your GP or paediatrician. They will assess overall motor development and refer to physiotherapy or early intervention if needed.",
  },
  {
    cat: 'development',
    q: 'What is tummy time and how much does my baby need?',
    a: "Tummy time is placing your baby on their stomach while they are awake and supervised. It builds the neck, shoulder, and arm strength required for rolling, sitting, and crawling - and since babies spend so much time on their backs for safe sleep, they need active supervised time on their fronts to develop these muscles.\n\nRecommendations: start from birth, building up to 30 minutes per day total by 3 months. This can be broken into short sessions of 3–5 minutes several times a day. Many newborns dislike tummy time initially - placing them on your chest skin-to-skin is a good starting point.\n\nSigns it is working: your baby is lifting their head, pushing up on their arms, and eventually rolling. If your baby consistently cannot lift their head during tummy time by 3 months, mention it at your next MCH visit.",
  },
  {
    cat: 'development',
    q: 'What are red flags in baby development I should know about?',
    a: "Red flags are signs that warrant prompt discussion with your GP or paediatrician. They do not necessarily mean something is wrong, but they should be assessed. Key red flags by age:\n\nBy 3 months: no social smile, no visual tracking, no response to sounds or voices, cannot hold head up during tummy time.\n\nBy 6 months: no babbling, no reaching for objects, does not bear weight on legs when held upright.\n\nBy 12 months: no babbling, no gesturing (pointing, waving), no words, cannot stand with support.\n\nBy 18 months: fewer than 6–10 words, no pointing to share interest in things, loss of previously acquired skills.\n\nAny regression in previously acquired skills is a red flag at any age and warrants prompt review. Your MCH nurse conducts developmental assessments at every scheduled visit - all visit ages are pre-loaded in PAM's Smart Checklist.",
  },
  {
    cat: 'development',
    q: 'When do babies start to see clearly?',
    a: "Newborns are not born with fully developed vision. At birth, babies can focus on objects roughly 20–30cm away - which is approximately the distance to a parent's face during feeding. Everything beyond that is blurry.\n\nVision develops rapidly in the first months:\n• Birth–1 month: can see contrast (black and white), responds to light\n• 2–3 months: begins tracking moving objects, colour vision developing\n• 4–6 months: depth perception beginning, can see across the room\n• By 12 months: vision is approaching adult-level clarity\n\nYour baby's vision is checked at scheduled MCH visits. If you notice your baby does not seem to track your face or objects by 3 months, does not make eye contact, or has eyes that appear to cross or drift, speak to your MCH nurse or GP for a referral.",
  },

  // ── AUSTRALIAN ADMIN ─────────────────────────────────────────────────────

  {
    cat: 'australia',
    q: 'What happens at the 6-week MCH visit in Australia?',
    a: "The 6-week Maternal and Child Health (MCH) visit is one of the most comprehensive scheduled checks in your baby's first year. Your MCH nurse will: weigh and measure your baby (length and head circumference), check the fontanelle (soft spot), assess vision and hearing responses, review developmental progress (social smile, tummy time, muscle tone), discuss feeding and sleep, and ask about how you are coping - including screening for postnatal depression and anxiety.\n\nFor mums, the separate 6-week GP check covers your physical recovery from birth, emotional wellbeing, contraception, and any ongoing health concerns.\n\nBoth appointments are pre-loaded in PAM's Smart Checklist so you are prompted to book both in advance.",
  },
  {
    cat: 'australia',
    q: 'How do I claim the Centrelink newborn payment in Australia?',
    a: "The two main Centrelink payments for new babies are the Newborn Upfront Payment (a lump sum) and the Newborn Supplement (paid fortnightly for up to 13 weeks). Both are accessed through Family Tax Benefit Part A - you need to be eligible for FTB Part A to receive them.\n\nTo claim: apply for Family Tax Benefit through myGov or a Services Australia service centre as soon as possible after your baby's birth. The Newborn Upfront Payment and Supplement are automatically assessed as part of this application.\n\nAlso check eligibility for: Parental Leave Pay (up to 20 weeks at the national minimum wage - must be claimed within 12 months of birth and before returning to work) and Dad and Partner Pay (2 weeks).\n\nPAM's newborn checklist includes Centrelink claim milestones with reminders so you don't miss the window.",
  },
  {
    cat: 'australia',
    q: 'What is the immunisation schedule for babies in Australia?',
    a: "Australia's National Immunisation Program (NIP) is one of the most comprehensive in the world. The schedule for babies in the first two years:\n\n• Birth: Hepatitis B\n• 6 weeks: DTPa, Hib, IPV, Hepatitis B, PCV15, Rotavirus\n• 4 months: DTPa, Hib, IPV, Hepatitis B, PCV15, Rotavirus\n• 6 months: DTPa, Hib, IPV, Hepatitis B, PCV15, Rotavirus\n• 12 months: MMR, Meningococcal ACWY, Varicella, Hib, PCV15\n• 18 months: DTPa, Hepatitis A (in some states)\n\nAll NIP vaccinations are free for eligible children. Your baby's vaccination record should be updated in the Australian Immunisation Register (AIR) after each dose - your GP or vaccination provider does this automatically.\n\nAll immunisation milestones are pre-loaded in PAM's Smart Checklist.",
  },
  {
    cat: 'australia',
    q: "How do I register my baby's birth in Australia?",
    a: "Birth registration is compulsory in Australia and must be completed within 60 days of birth (timelines vary slightly by state). You register with your state or territory's Births, Deaths and Marriages (BDM) office.\n\nBy state: BDM Victoria (justice.vic.gov.au/bdm), NSW Registry of Births Deaths & Marriages (bdm.nsw.gov.au), and equivalent bodies in other states. Most offer online registration.\n\nYou will need: both parents' full names, date and place of birth, and the baby's name (if decided). After registration, you can order an official birth certificate - required for Medicare enrolment, passport, and future identity documents.\n\nPAM's newborn checklist includes birth registration as a milestone with a reminder so it doesn't slip through the cracks in those early chaotic weeks.",
  },
  {
    cat: 'australia',
    q: 'What is the Blue Book baby health record in Australia?',
    a: "The Personal Health Record - commonly called the 'Blue Book' in Victoria, South Australia, and the NT, the 'Green Book' in Queensland, and similar names in other states - is an official booklet given to parents at birth by their hospital or midwife. It is the primary record of your child's health, development, and immunisations through childhood.\n\nThe Blue Book contains: birth measurements, immunisation pages for stamping after each vaccination appointment, developmental milestone records from MCH visits, vision and hearing screening results, and space for health notes and doctor contacts.\n\nBring it to every MCH visit, GP appointment, specialist visit, and emergency department presentation. Keep it somewhere accessible - it is one of the most important documents your child has in their early years. PAM's Family Hub lets you store your baby's key health record information digitally so you always have the essential details on your phone.",
  },
  {
    cat: 'australia',
    q: 'When do I need to enrol my baby in Medicare in Australia?',
    a: "Enrol your newborn in Medicare as soon as possible after birth - ideally within the first few weeks, as Medicare covers the cost of GP visits, specialist referrals, and the immunisations your baby will need from 6 weeks of age.\n\nYou can add your baby to your existing Medicare card or create a new family card. To enrol: visit a Medicare service centre or apply online through myGov. You will need your baby's birth registration number (so complete birth registration first).\n\nYour baby's Medicare number is required for bulk-billed GP appointments, MCH referrals, and recording vaccinations in the Australian Immunisation Register. Store it in PAM's Family Hub alongside your other health card details.",
  },
  {
    cat: 'australia',
    q: 'What is the maternal and child health service in Australia?',
    a: "The Maternal and Child Health (MCH) service is a free, universal government service available to all families in Australia with children from birth to school age. It is delivered through local council MCH centres and provides scheduled nursing visits, developmental assessments, parenting support, and referrals to additional services.\n\nIn Victoria, the MCH schedule includes 10 key visits from birth to 3.5 years: 1–4 weeks, 2 months, 4 months, 6 months, 12 months, 18 months, 2 years, and 3.5 years. Other states have similar programs under different names (Child and Family Health in NSW; Child Health in Queensland).\n\nThe MCH service is free with no referral or private health insurance required. Your first visit is usually arranged before you leave hospital. All visit ages are pre-loaded in PAM's Smart Checklist.",
  },
  {
    cat: 'australia',
    q: 'Am I eligible for Parental Leave Pay in Australia?',
    a: "Parental Leave Pay (PLP) provides up to 20 weeks of payment at the national minimum wage for eligible parents following the birth or adoption of a child. From July 2025, the scheme expanded and includes both primary and secondary carer weeks.\n\nEligibility requirements (main criteria): you must have worked for at least 10 of the 13 months before the birth or adoption, worked at least 330 hours in that period (roughly 1 day per week), earned less than $168,865 in the previous financial year, and be the primary carer of the newborn.\n\nYou must apply through Services Australia (myGov) before returning to work and within 12 months of your baby's birth. Your employer may also offer paid parental leave on top of the government scheme - check your enterprise agreement or employment contract.\n\nPAM's newborn checklist includes a Parental Leave Pay application reminder.",
  },

  // ── MENTAL LOAD & FAMILY ─────────────────────────────────────────────────

  {
    cat: 'mental-load',
    q: 'What is matrescence?',
    a: "Matrescence is the process of becoming a mother - a term coined by anthropologist Dana Raphael in 1973 and re-popularised by developmental psychologist Dr Aurelie Athan. It describes the profound physical, psychological, neurological, and social transformation that happens when a woman becomes a parent.\n\nMatrescence is the maternal equivalent of adolescence: an identity transition so significant that the person who comes through it is not quite the same person who entered it. Brain research confirms that pregnancy and early motherhood cause measurable structural changes in the brain - changes that persist for years.\n\nUnderstanding matrescence helps normalise the disorientation, the grief for a pre-baby self, and the identity uncertainty that many new mothers experience but struggle to name. These feelings are not signs of failure or depression (though postnatal depression is also real and worth assessing) - they are the experience of becoming someone new.",
  },
  {
    cat: 'mental-load',
    q: 'Why do mums end up doing everything?',
    a: "The observation that mums manage most of the domestic and childcare load - even in households with two involved parents - is well-documented. A 2019 study in the journal Sex Roles found that even when physical household tasks were divided equally, mothers still carried significantly more cognitive household labour: the planning, tracking, and coordination. A 2020 US study found that mothers were more likely to be identified as the 'on-call' parent even when both partners worked full time.\n\nThe causes are layered: social expectations that position mothers as default caregivers; workplace structures that assume women take the primary childcare role; the biological asymmetry of breastfeeding in the newborn period; and norms that have been passed down across generations.\n\nChanging the pattern requires explicit conversation, shared visibility into the household's systems, and deliberate domain ownership rather than one-off task delegation. PAM gives both parents the same real-time view of everything - checklists, tracking, health information - so neither person has to carry it all in their head.",
  },
  {
    cat: 'mental-load',
    q: 'Is it normal to feel overwhelmed as a new mum?',
    a: "Yes - overwhelm is one of the most universal experiences of new motherhood. The combination of sleep deprivation, physical recovery from birth, a massive identity shift, a steep learning curve, and the volume of information you are now responsible for tracking would overwhelm anyone.\n\nFeeling overwhelmed is not a sign you are doing it wrong, that you made the wrong decision, or that you are failing. It is a predictable response to an objectively hard situation.\n\nThe line to watch for is when overwhelm tips into persistent sadness, inability to bond with your baby, intrusive thoughts, or anxiety getting in the way of daily functioning. Postnatal depression and anxiety affect approximately 1 in 5 new mothers in Australia - they are medical conditions that respond well to treatment. Speak to your GP or MCH nurse, or call PANDA (Perinatal Anxiety and Depression Australia) on 1300 726 306.",
  },
  {
    cat: 'mental-load',
    q: 'How do I stop doing everything myself as a mum?',
    a: "The first step is recognising that the problem is structural, not personal. Most mums who 'do everything' are not doing it because they enjoy it or need to control it - they are doing it because they are the only person with full visibility into what needs doing. Their partner cannot see the load because the load lives in one person's head.\n\nThe most effective approach: externalise the system. Move everything out of your head and into a shared space - a shared checklist, tracker, and calendar - that both parents can see and act on in real time. When your partner can see what the baby needs, when the next appointment is, and what tasks are outstanding without asking you, help becomes possible without briefing.\n\nPAM is built on this premise: both parents use it simultaneously, so the information is genuinely shared, not just available if requested.",
  },
  {
    cat: 'mental-load',
    q: 'What is parenting burnout and how do I know if I have it?',
    a: "Parenting burnout is a state of chronic exhaustion and emotional depletion caused by sustained parenting stress without adequate recovery. It is distinct from general depression and from normal parenting tiredness.\n\nResearch by Belgian psychologists Roskam and Mikolajczak identifies four dimensions: overwhelming exhaustion specifically related to your parenting role; emotional distancing from your children; loss of the sense of being an effective parent; and a painful contrast with the parent you used to be or hoped to be.\n\nIf you recognise several of these, speak to your GP. Parenting burnout responds to reducing the cognitive load (better systems, genuine shared responsibility), adequate sleep and recovery time, social connection, and sometimes psychological support. It is not fixed by trying harder.\n\nCall PANDA on 1300 726 306 if you need to speak to someone. Reducing mental load through shared systems is one component of prevention - PAM is designed to help take that weight off.",
  },
  {
    cat: 'mental-load',
    q: 'What is the invisible load of parenting?',
    a: "The invisible load - also called the mental load or cognitive labour - is the continuous mental work of managing family life that nobody sees: knowing the baby is due for a weight check, remembering to order more formula before you run out, tracking what solid foods have been introduced and what reactions occurred, holding the appointment schedule in your head, monitoring the nappy supply, knowing which friend's baby needs a gift.\n\nIt is described as invisible because it leaves no visible evidence when it is done, and no mess when it is not. The person who does the invisible load may look like they are not doing anything - but they are performing the cognitive equivalent of a second full-time job.\n\nResearch consistently shows the invisible load falls disproportionately on mothers. Making it visible - writing it down, tracking it in a shared system - is the first step to sharing it equitably.",
  },
  {
    cat: 'mental-load',
    q: 'How do I explain the mental load to my partner?',
    a: "The most effective approach is to make the invisible visible. Keep a written log for one week of every mental task you perform: every appointment you remember, every item you notice needs restocking, every coordination task you manage, every thing you worry about. Show your partner the list.\n\nThe goal is not to assign blame but to create shared understanding. The conversation can shift from 'I need you to help more' (which keeps you as the manager and them as the helper) to 'we need to share this system' (which means genuine co-ownership).\n\nFrom there, divide by domain rather than task: each partner takes full ownership of specific areas - one person owns all medical appointments, one owns all grocery management - rather than one person managing everything and delegating tasks to the other.\n\nAn app like PAM makes this easier by giving both partners the same real-time view of everything, so information does not have to live in one person's head.",
  },
  {
    cat: 'mental-load',
    q: 'What is the default parent?',
    a: "The 'default parent' is the parent who is automatically assumed - by their partner, by schools, by doctors, by society - to be the one who handles anything to do with the children. They are the one who gets called first when the school needs to reach someone. They are the one who knows the paediatrician's name, what medication the child is on, and when the next appointment is.\n\nBeing the default parent is an exhausting position that often persists regardless of whether both parents work, regardless of expressed intention to share equally, and regardless of whether the default parent wants the role.\n\nIt is perpetuated by assumption rather than agreement. Changing it requires an explicit conversation and a deliberate redistribution of who holds what information and who is responsible for what - not just willingness, but structural change in how the family's systems are organised.",
  },
]
