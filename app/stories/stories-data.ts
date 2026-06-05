export type StorySection = {
  heading: string
  subheading?: string
  paragraphs?: string[]
  bullets?: string[]
}

export type StoryContent = {
  hook: string[]
  sections: StorySection[]
  closing: {
    heading?: string
    paragraphs: string[]
  }
}

export type Story = {
  slug: string
  cover: string
  label: string
  tag: string
  title: string
  body: string
  readMinutes: number
  published: boolean
  heroImage?: string
  content?: StoryContent
}

export const stories: Story[] = [
  {
    slug: 'what-i-wish-someone-had-told-me-about-week-one',
    cover: 'c-newborn',
    label: 'The first six weeks',
    tag: 'Newborn',
    title: 'What I wish someone had told me about week one',
    body: 'The forms, the feelings, the feeds. A gentle, honest guide to surviving (and savouring) the fourth trimester.',
    readMinutes: 7,
    published: true,
    heroImage: '/week-one-hero.jpg',
    content: {
      hook: [
        "Nobody warns you that week one doesn't feel like the movies. You're not glowing. You're bleeding through a maternity pad the size of a small country, your nipples are cracked, and you've cried three times before 9am — once because the baby wouldn't latch, once because they finally did, and once because someone sent flowers and the card said enjoy every moment.",
        'This is for the mum who is in it right now. The one who loves her baby fiercely and also googled "is it normal to feel nothing" at 3am.',
      ],
      sections: [
        {
          heading: 'Your body',
          subheading: 'The stuff no one puts in the birth prep class',
          bullets: [
            'The afterpains (uterine cramps as it contracts back) can feel like labour again, especially when feeding',
            "Lochia — the bleeding — can last up to 6 weeks and changes colour over time; what's normal vs what's not",
            'Night sweats are real and can soak through sheets; your body is shedding pregnancy hormones',
            'The first postpartum poo is genuinely feared. Stool softeners are your friend. Ask for them before you leave hospital.',
            'If you had stitches (perineal or C-section), sitting, walking, and laughing all feel like a threat',
          ],
        },
        {
          heading: 'Feeding',
          subheading: "Whether you're breast or bottle, it's harder than you thought",
          bullets: [
            'Breastfeeding is natural but not instinctive — for you or the baby. Both of you are learning',
            "Cluster feeding in the evenings is normal and does not mean you don't have enough milk",
            'Engorgement on days 3–5 when milk comes in can be shocking — cabbage leaves in your bra is not a myth',
            'Formula is not failure. Fed is fed. Any guilt you feel about this is not proportional to reality',
            'Feeding every 2–3 hours means you have roughly 90 minutes between sessions once you factor in the feed itself. Sleep in those windows. Everything else can wait.',
          ],
        },
        {
          heading: 'The emotional reality',
          subheading: 'The baby blues are real, and so is something more',
          bullets: [
            'Around day 3–5, many women hit an emotional wall — crying, overwhelm, doubt. This is hormonal and usually passes by day 10',
            "If it doesn't lift, or if you feel detached, anxious, or like you've made a terrible mistake, that's worth talking to someone about. Postnatal depression affects 1 in 5 mums and is treatable",
            'Loving your baby and feeling completely out of your depth are not opposites',
            'It is okay not to feel instant, overwhelming love. Bonding is sometimes a slow build, not a lightning bolt',
          ],
        },
        {
          heading: 'The practical chaos',
          subheading: 'Things to actually do (or not do)',
          bullets: [
            "Don't do the washing. Don't tidy for guests. Accept every meal that's offered.",
            "Your phone becomes a lifeline — put the helpline numbers in before the baby arrives (PANDA, Tresillian, your midwife's direct line)",
            'The 3am feeds are lonely but half the world is also awake doing this exact thing right now',
            "Visitors: it's okay to have a no-visitors-week-one rule. It's also okay to want people around. Know yourself.",
            'You do not need to have a routine yet. Week one is survival, not optimisation.',
          ],
        },
      ],
      closing: {
        heading: 'A note for 3am',
        paragraphs: [
          "You will not feel like this forever. Week one is the steepest part of the learning curve — for your body, your baby, and your sense of self. The fact that you're reading this, looking for information, trying to understand — that already makes you a good mother.",
          "You're doing it. Even when it doesn't feel like it.",
        ],
      },
    },
  },
  {
    slug: 'the-5-things-nobody-puts-in-the-hospital-bag',
    cover: 'c-newborn',
    label: 'Hospital bag essentials',
    tag: 'Newborn',
    title: 'The 5 things nobody puts in the hospital bag (but should)',
    body: "Forget the maternity pads list. Five small, real things you'll wish someone had quietly slipped in while you were busy packing the aromatherapy roller.",
    readMinutes: 5,
    published: true,
    content: {
      hook: [
        "Every article about hospital bags tells you the same things. Maternity pads. A going-home outfit. Snacks for your partner. A playlist, apparently, as though you'll be in the mood for curated music.",
        "This is not that list. This is the list from the other side — the things you'll wish someone had quietly slipped in while you were busy packing the aromatherapy roller.",
      ],
      sections: [
        {
          heading: '1. A phone charger with a long cable',
          paragraphs: [
            "Not a normal cable. A long one. Because the only power point in your room will be behind the bed, and at 2am when your phone is at 4% and your baby won't stop crying and you need to call your mum or google \"is it normal for a newborn to sound like a guinea pig,\" you will lie on the floor reaching for that socket and you will think about this article.",
            "Bring the long cable. It costs $12 and it will feel like the most important $12 you've ever spent.",
          ],
        },
        {
          heading: '2. Your own pillow from home',
          paragraphs: [
            "Hospital pillows are flat, plasticky, and smell like institution. You are about to do one of the hardest physical things of your life and then attempt to recover in a narrow bed with overhead fluorescent lighting. The least you can do for yourself is bring something that smells like home.",
            "It also helps with feeding positioning in a way that the hospital's one foam wedge simply cannot.",
          ],
        },
        {
          heading: '3. Stool softeners',
          paragraphs: [
            "Nobody puts this on the list because nobody wants to be the one to tell you. So here it is: the first postpartum poo is something people joke about but nobody fully prepares you for.",
            "Whether you had a vaginal birth or a caesarean, your body has been through significant trauma and is now terrified of anything that requires abdominal pressure. Ask your midwife for stool softeners before you leave hospital, or pack them yourself. Start taking them on day one. You will thank yourself.",
            "This is not a small thing. This is a kindness you can give yourself in advance.",
          ],
        },
        {
          heading: '4. A notebook and pen',
          paragraphs: [
            "Your brain will not work the way it used to. This is not a character flaw — it's sleep deprivation, hormones, and the fact that you are now responsible for keeping a human alive. You will be given a lot of information in hospital: feeding guidance, discharge instructions, medication schedules, the name of the community midwife who will visit on Thursday.",
            "You will not remember any of it.",
            "Write it down. Not in your phone — your phone will be flat (see point one) and too easy to scroll away from. A small notebook. A pen that actually works. Date the pages. Future you will read back through it and be grateful.",
          ],
        },
        {
          heading: '5. Something that makes you feel like yourself',
          paragraphs: [
            "This one is harder to put on a list, because it's different for everyone. For some people it's a particular face wash. A soft jumper that isn't technically nightwear but functions as such. A book you probably won't read but like having. A photo of your dog.",
            "Here's why it matters: at some point in those first 48 hours — probably when you're sitting in a hospital gown at 4am with a baby attached to your chest and a midwife coming to check your pad — you might feel very far from the person you were before. That's normal. But having one small, familiar thing nearby is an anchor.",
            "Pack something that's just for you. Not for the baby, not for practicality. Just for you.",
          ],
        },
      ],
      closing: {
        heading: 'One more thing, while we’re here',
        paragraphs: [
          "Pack less of everything else than the lists tell you to. You will not use seven nursing bras in hospital. You will not want a full skincare routine. The baby's coming home wardrobe can live in the car.",
          "The things above? Those are the ones worth the bag space.",
        ],
      },
    },
  },
  {
    slug: 'what-normal-newborn-breathing-actually-looks-and-sounds-like',
    cover: 'c-newborn',
    label: 'Newborn breathing',
    tag: 'Newborn',
    title: "What 'normal' newborn breathing actually looks and sounds like",
    body: "Periodic pauses, grunts, snuffles and sighs — what's normal newborn breathing, and how to tell when it isn't.",
    readMinutes: 5,
    published: true,
    content: {
      hook: [
        "The first night home, I watched my baby breathe for four hours. Not because I was enchanted. Because I was terrified she was going to stop.",
        "Nobody had told me that newborns breathe like tiny, malfunctioning machines. That they pause. That they grunt. That they make sounds like a piglet, a creaky door, and a small overwhelmed person — sometimes all in the same breath.",
        "If you've found this article at 1am with your face six inches from your baby's chest, this is for you.",
      ],
      sections: [
        {
          heading: 'First, the reassuring part',
          paragraphs: [
            "Newborn breathing is genuinely strange, and genuinely normal. Their respiratory system is brand new. It has never done this before. It is figuring things out in real time, and that process looks and sounds alarming to a new parent who is used to adults, who breathe quietly and predictably and without drama.",
            "Most of what you're about to read is not an emergency. But knowing what's normal is what lets you recognise when something isn't — and that knowledge is worth having at 1am.",
          ],
        },
        {
          heading: 'What normal actually looks like',
          bullets: [
            "Periodic breathing — newborns regularly pause their breathing for up to 10 seconds, then resume normally. This is completely normal in the first few weeks and happens because the part of the brain that regulates breathing rhythm is still maturing. If your baby pauses, breathes again, and their colour stays normal — this is not an emergency.",
            "Fast breathing — newborns breathe much faster than adults, anywhere between 40 and 60 breaths per minute when awake or feeding. That's roughly one breath per second. Count it sometime — it will seem impossibly fast, and it's fine.",
            "Chest and belly movement — unlike adults who breathe mostly from the chest, newborns breathe from their belly. You'll see their stomach rising and falling significantly with each breath. Their chest will also move, but the belly leads.",
            "Flaring nostrils — newborns are obligate nose breathers and instinctively breathe through their nose rather than their mouth. Mild nostril flaring is their body working hard to move enough air. In isolation, it's normal. Combined with other signs below, it can indicate distress.",
          ],
        },
        {
          heading: 'What normal actually sounds like',
          subheading: 'This is the part nobody warns you about. Newborns are noisy breathers.',
          bullets: [
            "Grunting — especially during sleep and after feeding, as they process wind and adjust digestion. Newborn grunt syndrome is a real thing, it has a name, and it will keep you awake even though the baby is fine.",
            "Snuffling and snorting — their nasal passages are tiny and easily congested. Breast milk, amniotic fluid, and general newborn existence means there's often something partially blocking the airway. A saline nasal spray and a bulb syringe will become your best friends.",
            "Wheezing or rattling — often just mucus in the upper airway. If it clears after a cough or cry and doesn't return, it's usually not concerning.",
            "Sighing — yes, they sigh. Deeply and dramatically. It is somehow both alarming and completely adorable.",
          ],
        },
        {
          heading: 'When to actually be concerned',
          paragraphs: [
            "This is important. Normal newborn breathing is variable and noisy. The following signs are different — they indicate your baby is working harder than they should to breathe, and you should seek help promptly:",
          ],
          bullets: [
            "Breathing consistently faster than 60 breaths per minute while at rest",
            "Grunting at the end of every breath (not just during sleep — constant expiratory grunting is a sign of respiratory distress)",
            "Skin pulling in visibly between the ribs or at the base of the throat with each breath (called retractions)",
            "Nostril flaring combined with any of the above",
            "Colour changes — blue or grey lips, tongue, or fingernails",
            "A breathing pause that lasts longer than 20 seconds, or a shorter pause accompanied by a change in colour or limpness",
          ],
        },
        {
          heading: 'The 4am rule',
          paragraphs: [
            "If you see any of these, trust your instincts and get help. Call your midwife, call your maternal health nurse, or call 000. You are not overreacting.",
            "Here's something worth keeping: if you're unsure whether what you're seeing is normal, and your gut is telling you something is wrong — act on that. You know your baby. You have been watching them more closely than any monitor. A worried parent calling a health line at 4am is not an inconvenience. It's exactly what those services are for.",
            "PAM's resources tab has direct links to your state's maternal health line — the number worth having saved before you need it.",
          ],
        },
      ],
      closing: {
        heading: 'One last thing',
        paragraphs: [
          "That first night I spent watching my daughter breathe? I didn't know any of this. I didn't know about periodic breathing or obligate nose breathing or why she sounded like a small farmyard animal.",
          "I just watched, and worried, and loved her so much it was its own kind of pain.",
          "You're going to be okay. She's going to be okay. And now you know what you're listening for.",
        ],
      },
    },
  },
  {
    slug: 'why-your-baby-cries-more-in-the-evening',
    cover: 'c-newborn',
    label: 'The witching hour',
    tag: 'Newborn',
    title: 'Why your baby cries more in the evening — and what to do about it',
    body: "The witching hour: why almost every newborn loses it between 5 and 8pm, what actually helps, and when it's more than just evening fuss.",
    readMinutes: 6,
    published: true,
    content: {
      hook: [
        "It happens with a reliability that starts to feel personal. You've made it through the day. You're tired, your partner is home, dinner needs to happen — and right on cue, somewhere between 5 and 8pm, your baby loses the plot entirely.",
        "Not a little fussy. Inconsolable. Nothing works. You've fed them, changed them, checked every fold of skin for a rogue hair tourniquet. They are fed and clean and held and still screaming like something is genuinely wrong.",
        "Nothing is wrong. This is the witching hour. And almost every newborn has one.",
      ],
      sections: [
        {
          heading: 'Why it happens',
          subheading: "There's no single agreed explanation, which is both honest and deeply unsatisfying when you're in the middle of it. But here's what we do know:",
          bullets: [
            "Their nervous system is overwhelmed — a newborn spends all day taking in an enormous amount of sensory information (light, sound, faces, touch, temperature, hunger, digestion). By evening, their immature nervous system has hit capacity. The crying is, in part, a release — a decompression — their body's way of processing a day's worth of input that it doesn't yet have the tools to regulate.",
            "Their cortisol is peaking — the stress hormone follows a natural daily rhythm. In newborns, this rhythm is still establishing itself, and the evening peak can tip an already-overwhelmed baby into a state they can't easily come back from without help.",
            "They're often going through a feeding cluster — evening is prime time for cluster feeding, frequent short feeds that can go on for hours. This is your baby both comfort-seeking and building your milk supply. It's exhausting and relentless, and it's completely purposeful. They're not doing it to you. They're doing it because they're biologically wired to.",
            "You're also tired — this matters more than people acknowledge. Babies are extraordinarily sensitive to the emotional state of their caregiver. By 6pm, you've been on since before dawn. Your nervous system is also maxed out. Your baby feels that, and it amplifies theirs. This is not your fault. It's just the reality of two exhausted humans trying to regulate each other.",
          ],
        },
        {
          heading: 'What actually helps',
          subheading: 'No single thing works for every baby, and nothing works every time. But these are worth trying, roughly in order of effort:',
          bullets: [
            "Movement — rhythmic, continuous movement is the closest thing to a universal newborn sedative. Walking, swaying, bouncing on a gym ball, driving around the block. The motion mimics the womb — constant, predictable, containing. It won't always stop the crying but it gives their nervous system something to organise around.",
            "White noise — loud, continuous, low-frequency sound. A vacuum cleaner, a running shower, a white noise app at reasonable volume. Again, womb-like. The womb is not quiet. Your baby spent nine months in a remarkably noisy environment and silence, to them, can feel wrong.",
            "Reducing stimulation — this runs counter to instinct. When your baby is distressed you want to do more, try more, fix it. But sometimes less is more. Dim the lights. Stop talking. Take them somewhere quiet. Give their nervous system fewer things to respond to.",
            "Skin to skin — your chest regulates their temperature, their breathing, and their heart rate. It doesn't work instantly — they may still cry on you — but their body is doing calming work even when it doesn't look like it.",
            "Handing off — if you have a partner, use them. Not because you're failing — because a baby who can smell your milk will always prefer you in that moment, and sometimes a different pair of arms is genuinely more effective. Go to another room. Breathe. Come back. This is strategy, not abandonment.",
          ],
        },
        {
          heading: "When it's more than the witching hour",
          paragraphs: [
            "The witching hour is defined by its predictability and its limits — it typically peaks around 6 weeks and resolves by 3 to 4 months.",
            "Trust your gut. You know the difference between hard and something's wrong. If your baby's crying matches any of these patterns, it's worth talking to your GP or child health nurse about colic, reflux, or other underlying causes:",
          ],
          bullets: [
            "Happening at all hours, not just evening",
            "Accompanied by back arching, difficulty feeding, or blood in their nappy",
            "Not following any pattern and impossible to soothe even briefly",
            "Getting worse rather than better over weeks",
          ],
        },
        {
          heading: 'A note for the person doing it alone',
          paragraphs: [
            "If you're doing the witching hour solo — partner working late, single parenting, support network far away — this section is for you.",
            "Put the baby somewhere safe. The cot, the floor, the pram. Step outside for sixty seconds. Breathe actual air. Come back.",
            "You are not abandoning them. You are regulating yourself so you can come back and help them regulate. That is good parenting. That is exactly the right thing to do.",
          ],
        },
      ],
      closing: {
        heading: 'It will not always be this hard',
        paragraphs: [
          "The evening is the hardest part of the newborn days. Not because anything is wrong. Because everything is a lot, for both of you, and the day is long, and you're both doing your best.",
          "The witching hour has an end date, even when it doesn't feel like it.",
        ],
      },
    },
  },
  {
    slug: 'the-fourth-trimester-what-it-means',
    cover: 'c-newborn',
    label: 'The fourth trimester',
    tag: 'Newborn',
    title: 'The fourth trimester: what it means and why it changes everything',
    body: 'The twelve weeks after birth have a name, a body of research, and implications for everything — how you feel, how your baby behaves, and why this season is so much harder than anyone prepares you for.',
    readMinutes: 7,
    published: true,
    content: {
      hook: [
        "Pregnancy has three trimesters. Everyone knows this. There are apps for each week, books for each stage, a whole industry built around tracking what fruit your baby currently resembles.",
        "And then the baby arrives, and nobody mentions the fourth one.",
        "The fourth trimester is the twelve weeks after birth. It has a name, a body of research behind it, and implications for everything — how you feel, how your baby behaves, what they need, and why this season is so much harder than anyone quite prepares you for. Here's what it actually means, and why knowing about it changes the way you see those first three months.",
      ],
      sections: [
        {
          heading: 'Where the idea comes from',
          paragraphs: [
            "The concept was popularised by paediatrician Harvey Karp, who observed that human babies are born significantly less developed than the newborns of other mammals. A foal stands within hours of birth. A human newborn cannot hold their own head up for months.",
            "The reason is evolutionary: human heads grew too large for the birth canal. We're born early, by necessity — around three months before we're truly ready for the outside world. The fourth trimester is, in effect, the trimester that should have happened in the womb but didn't.",
            "Your baby isn't behind. They're not broken. They're just finishing cooking.",
          ],
        },
        {
          heading: 'What your baby actually needs in this period',
          paragraphs: [
            "Understanding this reframes everything. A baby in the fourth trimester isn't manipulating you when they want to be held constantly. They're not developing bad habits when they fall asleep on your chest. They are a fetus-adjacent creature who has just been placed in a cold, bright, loud world and is looking to recreate the only environment they've ever known.",
            "What they knew: constant warmth, constant motion, constant sound, constant containment. The womb was not quiet or still. It was a moving, whooshing, rhythmically beating environment that held them on all sides.",
            "What they need now: you. Your warmth, your heartbeat, your movement, your voice. This is not a parenting philosophy. It's biology. This is why:",
          ],
          bullets: [
            "Carrying and contact calms them in a way nothing else does",
            "White noise and rhythmic movement work so reliably",
            "Being put down often triggers immediate distress — the floor is cold and open and nothing like where they came from",
            "They cluster feed — frequent contact and feeding is how they maintain the closeness their nervous system expects",
          ],
        },
        {
          heading: 'What it means for you',
          paragraphs: [
            "Here's the part that doesn't get said enough: the fourth trimester is not just your baby's transition. It's yours.",
            "Your body is recovering from one of the most significant physical events it will ever experience. Your hormones are in freefall. Your identity is restructuring around a role you've never played before. Your sleep is fragmented in a way that affects cognition, emotion regulation, and physical health.",
            "And you're doing all of this while keeping another human alive.",
            "The fourth trimester asks an enormous amount of you. The cultural expectation — that you should be bouncing back, feeling grateful, managing well — is completely at odds with what your body and mind are actually going through. You are also in a transition. You also need warmth, support, and people around you. That's not weakness. It's the same biology.",
          ],
        },
        {
          heading: 'Why it changes how you see the hard moments',
          paragraphs: [
            "When your baby won't be put down, you're not being manipulated. You're holding a creature whose entire nervous system is calibrated to expect contact.",
            "When they cry inconsolably, they're not being difficult. They're communicating the only way they know how, in a world that is genuinely overwhelming.",
            "When you feel like you're doing everything right and it's still hard — you are. It's just hard. The fourth trimester is hard by design, because it asks two people who have never met before to figure each other out from scratch, around the clock, with no days off.",
            "None of this means you have to love every minute of it. You're allowed to find it relentless. You're allowed to miss your old life. You're allowed to be in it fully and still find it desperately difficult.",
          ],
        },
        {
          heading: 'What actually helps',
          bullets: [
            "Lower the bar for this season deliberately — the fourth trimester is not the time to optimise, establish routines, or measure yourself against anyone else's timeline. The goal is: baby is fed, baby is safe, you are surviving. That's it.",
            "Accept that contact is the work — holding your baby is not doing nothing. It is regulating their nervous system, building attachment, supporting their neurological development, and keeping them calm enough to sleep and feed. If you spent the whole day on the couch with a baby on your chest, you did a full day's work.",
            "Build the village before you need it — the fourth trimester goes better with people around. Not people who visit for an hour and hold the baby while you make them tea — people who come over and make you tea, hold the baby so you can shower, leave food without requiring conversation. Be specific about what you need. People want to help and usually don't know how.",
            "Know that it ends — twelve weeks. Not forever. By three to four months most babies have crossed a developmental threshold — they can self-soothe slightly, their sleep consolidates a little, they become more interested in the world and less desperate to recreate the womb. It doesn't happen overnight, but it happens. The fourth trimester has an exit. You're moving toward it, even on the days it doesn't feel like it.",
          ],
        },
      ],
      closing: {
        heading: 'A final thought',
        paragraphs: [
          "Knowing about the fourth trimester won't make it easy. But it changes the story you tell yourself about it.",
          "Instead of \"my baby won't stop crying and I don't know what I'm doing\" — you have \"my baby is overwhelmed by a world they weren't quite ready for, and I am the thing that helps.\"",
          "That's not a small shift. That's everything.",
        ],
      },
    },
  },
  {
    slug: 'how-i-finally-put-down-the-invisible-to-do-list',
    cover: 'c-wellbeing',
    label: 'The mental load',
    tag: 'Wellbeing',
    title: 'How I finally put down the invisible to-do list',
    body: "One mum's story of sharing the load — and what changed when she stopped holding it all in her head.",
    readMinutes: 8,
    published: true,
    heroImage: '/mental-load-hero.jpg',
    content: {
      hook: [
        "It's 11pm. Your partner is asleep. You're lying in the dark making a mental note to book the four-month needles, reply to the maternal health nurse, order more nappy rash cream, check if the pram rain cover is still in the garage, and remember to tell your mum what time she's coming on Saturday.",
        "Nobody asked you to hold all of this. You just... started holding it. And now you can't put it down.",
      ],
      sections: [
        {
          heading: 'What the mental load actually is',
          subheading: "It's not the tasks. It's the management of the tasks.",
          bullets: [
            'The difference between doing something and anticipating, planning, delegating, and following up on it',
            'Why it defaults to mums — social conditioning, maternity leave, being the one "at home," the assumption of natural instinct',
            "It's invisible by definition: when you do it well, nobody sees it. When you drop something, everyone notices.",
            "It compounds after a baby — suddenly there's an entirely new person whose entire life needs to be held in someone's head",
          ],
        },
        {
          heading: 'What it does to you',
          subheading: 'The slow drain nobody talks about',
          bullets: [
            'Cognitive overload: the constant background hum that makes it hard to be present, rest, or think clearly',
            'Resentment — not because your partner is a bad person, but because the imbalance is real and accumulating',
            'The loneliness of being the one who "just knows" everything about your child\'s world',
            'How it shows up physically: sleep disruption, anxiety, snapping over small things, never fully switching off',
          ],
        },
        {
          heading: 'The conversation that actually works',
          subheading: 'Not a fight. A restructure.',
          bullets: [
            'Why "you never help" doesn\'t land — and what to say instead',
            'The difference between delegating tasks and transferring ownership (you want the second one)',
            'Specific script: "I need you to own this completely — not just do it when I ask"',
            "What to do when your partner genuinely doesn't see it — and how to make it visible without turning into a lecture",
            'Acknowledging that some partners are willing but undertrained, not unwilling',
          ],
        },
        {
          heading: 'Practical ways to redistribute',
          subheading: 'The actual mechanics of letting go',
          bullets: [
            'Write the whole list down — every recurring task, every remembered thing — and split it on paper, not in theory',
            'Assign ownership, not assistance. There\'s a difference between "I do bathtime and you help" and "bathtime is yours"',
            'Accept that things will be done differently, and differently is okay (this is the hard part)',
            'Let some things go entirely — not every thing on the list needs to be on anyone\'s list',
            'The mental load of managing the mental load: how to stop auditing everything your partner does',
          ],
        },
        {
          heading: "One mum's story",
          subheading: 'What changed when she stopped holding it all',
          bullets: [
            'First-person narrative thread woven through (or a short profile sidebar)',
            "The moment she realised she was exhausted in a way that sleep couldn't fix",
            'What the conversation looked like, honestly',
            "What's still hard, six months on — this isn't a perfect ending story",
          ],
        },
      ],
      closing: {
        heading: 'A note to the mum reading this at 11pm',
        paragraphs: [
          'The invisible to-do list is real. Your exhaustion is real. And you are not failing by struggling under something that was never meant to be carried alone.',
          'Putting it down doesn\'t happen all at once. But it starts with saying out loud: I am holding too much.',
        ],
      },
    },
  },
  {
    slug: 'the-voice-note-ill-treasure-forever',
    cover: 'c-memories',
    label: 'Memory keeping',
    tag: 'Memories',
    title: "The voice note I'll treasure forever",
    body: 'Why capturing the little sounds — first giggles, first words — matters more than the perfect photo.',
    readMinutes: 6,
    published: true,
    heroImage: '/voice-note-hero.jpg',
    content: {
      hook: [
        "I have 847 photos from my daughter's first month. I couldn't tell you what most of them are — blurry onesies, the top of her head, one very unflattering angle of me at 4am.",
        'But I have one voice note. Thirty-two seconds. Her making that small, grunty, newborn sound she made when she was milk-drunk and falling asleep on my chest.',
        'I would delete every photo before I deleted that.',
      ],
      sections: [
        {
          heading: 'Why we over-photograph and under-capture',
          subheading: 'The camera is easier than the moment',
          bullets: [
            'We reach for the phone because it feels like doing something — preserving, being responsible',
            "But photos flatten the moment into a single frame; they can't hold the smell, the weight, the sound",
            'The sounds of babyhood are the first things we forget — the specific cry, the feeding sounds, the first laugh that catches you off guard',
            'We don\'t think to record audio because nobody tells us to. It feels less "official" than a photo album.',
          ],
        },
        {
          heading: "What's worth capturing in sound",
          subheading: "A list you'll wish you'd had earlier",
          bullets: [
            'The newborn grunts and snuffles (gone by week 6)',
            'First proper giggle — not a smile, the giggle',
            'Babbling before it turns into words',
            'First recognisable word — and the mispronounced version that comes just before the real one ("baba" before "bottle")',
            'Them saying your name for the first time',
            'Bedtime sounds — the settling, the sighing, the breathing that slows into sleep',
            'You, talking to them — your voice explaining the world, your made-up songs, your shhh sounds at 3am',
          ],
        },
        {
          heading: 'The memory science (light touch)',
          subheading: 'Why sound unlocks memory differently than images',
          bullets: [
            'Auditory memory is processed differently in the brain — sound is more directly tied to emotion and recall',
            "A photo shows you what something looked like; a sound can make you feel like you're back there",
            'Studies on autobiographical memory suggest that unexpected sensory triggers (a smell, a sound) are among the most powerful memory retrieval cues',
            'This is why hearing a song from your childhood hits differently than seeing a photo from the same era',
          ],
        },
        {
          heading: 'The PAM memories feature',
          subheading: "A place for the sounds that don't fit in a photo album",
          bullets: [
            'Introduce the voice note feature as a direct response to this gap',
            'Stored alongside milestones and notes, so the context is preserved — not just a file sitting in your camera roll with no date or caption',
            'The difference between a voice note lost in your phone and one that lives inside a memory, tagged to an age, a week, a moment',
            'You can add a note alongside it: "This is the sound she made every single time she finished a feed. I never want to forget it."',
          ],
        },
        {
          heading: 'A note on imperfection',
          subheading: "You don't need to be ready",
          bullets: [
            'The best ones are accidental — caught mid-giggle, mid-word, mid-something',
            'You don\'t need to announce "I\'m recording now" or set up the scene',
            'Background noise is fine. The dishwasher running. Your other kid in the background. That\'s the texture of real life.',
            'Future you doesn\'t care about audio quality. Future you just wants to hear it again.',
          ],
        },
      ],
      closing: {
        paragraphs: [
          'Thirty-two seconds. Milk-drunk, grunty, already almost asleep.',
          "She's four now. She hasn't made that sound in years. I didn't know when I recorded it that it would be the last time I heard it — you never do.",
          "Open PAM. Press record. You don't need a reason.",
        ],
      },
    },
  },
  {
    slug: 'real-mums-real-stories-lauren',
    cover: 'c-community',
    label: 'Real Mums, Real Stories',
    tag: 'Community',
    title: 'Finding Beauty in the Chaos of Motherhood',
    body: "Lauren shares her honest reflections on motherhood, the invisible load many mums carry, and the version of herself she's discovered along the way.",
    readMinutes: 4,
    published: true,
    heroImage: '/lauren-story.jpeg',
    content: {
      hook: [
        "Every mum's journey is different, but one thing remains the same — motherhood has a way of teaching us things we never expected about ourselves.",
        "In this edition of Real Mums, Real Stories, Lauren shares her honest reflections on the realities of motherhood, the invisible load many mums carry, and the version of herself she's discovered along the way.",
      ],
      sections: [
        {
          heading: "What's one thing motherhood taught you about yourself?",
          paragraphs: [
            "Motherhood has taught me how capable I really am. I'm capable of more than I ever gave myself credit for. I can hold a lot at once, be present as a mum, build something for myself, juggle the everyday chaos and still keep showing up. It's definitely taught me to trust myself more.",
          ],
        },
        {
          heading: "What's the hardest invisible part of motherhood?",
          paragraphs: [
            "That we really do carry so much. The mental load, the household load, the remembering, planning, organising. So much of motherhood happens behind the scenes. And while we do it out of love, that doesn't mean we don't need support too.",
          ],
        },
        {
          heading: "Describe motherhood in one sentence.",
          paragraphs: [
            "For me, motherhood feels like beautiful chaos. It can be exhausting and overwhelming in the really hard moments, but somehow even in the middle of that there's so much beauty too.",
          ],
        },
        {
          heading: "What's something your pre-mum self would never understand now?",
          paragraphs: [
            "That you can lose parts of yourself for a little while after becoming a mum… and that can feel really strange. But slowly, a new version of you starts to come through, and for me I actually think I like this version of myself even more.",
          ],
        },
      ],
      closing: {
        heading: "Thank you, Lauren.",
        paragraphs: [
          "At PAM, we believe every mum has a story worth telling. Real Mums, Real Stories is a space for honest conversations, shared experiences, and the beautifully imperfect realities of motherhood. Through these stories, we hope mums feel seen, supported, and reminded that they're not navigating this journey alone.",
          "Want to share your story? We'd love to hear from you.",
        ],
      },
    },
  },
  {
    slug: 'breastfeeding-didnt-work-for-me',
    cover: 'c-feeding',
    label: "When breastfeeding doesn't work",
    tag: 'Feeding',
    title: "Breastfeeding didn't work for me — and that's the whole story",
    body: "The gap between what we're told breastfeeding will be and what it actually is — and why so many women feel like they failed at something that was never straightforwardly in their control.",
    readMinutes: 6,
    published: true,
    content: {
      hook: [
        "I tried for three weeks. Three weeks of cracked nipples, a baby who couldn't latch, a lactation consultant who came twice and left me more confused, and a level of guilt so disproportionate to the actual situation that I can only see it clearly now, two years later.",
        "I stopped. I moved to formula. My daughter thrived. I cried about it for longer than I'd like to admit.",
        "This article isn't about whether you should breastfeed. It's about the gap between what we're told breastfeeding will be and what it actually is — and why so many women feel like they failed at something that was never straightforwardly in their control.",
      ],
      sections: [
        {
          heading: 'The gap between natural and instinctive',
          paragraphs: [
            "Breastfeeding is natural. It is not, for most women, instinctive. There is a significant difference. Natural means the body is built for it. Instinctive would mean it happens automatically, without learning, without pain, without a steep and sometimes brutal curve. It doesn't — not for most people. Both you and your baby are learning a physical skill from scratch, at the same time, while you are sleep deprived and hormonally wrecked and she has never eaten before in her life.",
            "The first two weeks are often the hardest. Nipples that have never been used in this way need to adjust. Milk supply takes days to establish. Babies need to learn to latch deeply enough to feed efficiently. None of this is a reflection of your body failing. It's just the learning curve nobody adequately describes.",
          ],
        },
        {
          heading: 'What actually makes it harder',
          bullets: [
            "Tongue tie — often missed at the initial check, causes shallow latch and significant nipple damage",
            "Inverted or flat nipples — make it harder for a baby to get a deep latch without support",
            "Low supply — real, though less common than feared, and often confused with normal newborn feeding patterns",
            "Oversupply and fast letdown — the other end of the spectrum, which causes its own problems",
            "Previous breast surgery — can affect supply and sensation",
            "A baby who is jaundiced, premature, or has low muscle tone — all affect feeding ability",
          ],
        },
        {
          heading: 'The guilt is disproportionate to the stakes',
          paragraphs: [
            "Fed babies thrive. The research on breastfeeding benefits is real but frequently overstated in the way it's communicated to new mothers — presented as though formula is harm rather than simply an alternative. The benefits are modest for most outcomes in high-income countries with clean water and good formula. The mental health cost of struggling through something that isn't working — for both of you — is real and rarely factored in.",
            "You are not giving your baby a lesser start. You are feeding them.",
          ],
        },
        {
          heading: 'If you want to keep trying',
          paragraphs: [
            "Get a different lactation consultant if the first one didn't help. Ask your hospital about a breastfeeding clinic. Get your baby checked for tongue tie by someone who specialises in it — not just a quick look at the 24-hour check. Call the Australian Breastfeeding Association helpline (1800 686 268) — they're available around the clock and genuinely helpful.",
            "Support, information, and time fix many breastfeeding problems. You don't have to give up if you don't want to. But you also don't have to keep going if it isn't working.",
          ],
        },
      ],
      closing: {
        heading: "If you've already stopped",
        paragraphs: [
          "You made a decision under enormous pressure with the information and capacity you had at the time. That is the definition of good parenting. Your baby needed feeding. You fed them. That's the whole story.",
        ],
      },
    },
  },
  {
    slug: 'how-to-survive-the-6-week-growth-spurt',
    cover: 'c-feeding',
    label: 'The 6-week growth spurt',
    tag: 'Feeding',
    title: 'How to survive the 6-week growth spurt with your sanity intact',
    body: "Around six weeks, your baby will seemingly forget everything they learned and demand to be fed constantly. Nothing is wrong — but it helps to know it's coming.",
    readMinutes: 5,
    published: true,
    content: {
      hook: [
        "Around six weeks, just when you've started to feel like you might be getting the hang of things, your baby will seemingly forget everything they learned and demand to be fed constantly, sleep terribly, and cry with a conviction that suggests something is very wrong.",
        "Nothing is wrong. This is the six-week growth spurt. It is temporary, it is normal, and it will pass — but it helps enormously to know it's coming.",
      ],
      sections: [
        {
          heading: "What's actually happening",
          paragraphs: [
            "Growth spurts are periods of rapid physical and neurological development. Your baby is getting bigger, their brain is making new connections, and their body needs significantly more fuel than it did last week. For breastfed babies, this means feeding more frequently to signal your body to increase supply. For formula-fed babies, it often means wanting more at each feed or feeding more often.",
            "It also coincides with a natural dip in your milk supply that many women experience around six weeks — your body is recalibrating from the initial oversupply of early weeks to a more settled production level. The timing is terrible. Your baby is hungrier, your supply feels lower, and it's very easy to interpret this as \"I'm not making enough milk.\"",
            "In most cases, you are. Your baby is just placing a new order.",
          ],
        },
        {
          heading: 'What it looks like',
          subheading: "It typically lasts 3–7 days. It will feel like forever. It isn't. Here's what to look for:",
          bullets: [
            "Feeding much more frequently than usual — sometimes every hour",
            "Seeming unsatisfied after feeds they previously finished contentedly",
            "Fussiness and crying that isn't resolved by feeding, changing, or holding",
            "Disrupted sleep after a period where things were improving",
            "Cluster feeding in the evenings, intensified",
          ],
        },
        {
          heading: 'What actually helps',
          bullets: [
            "Feed on demand, not the clock — during a growth spurt, the schedule goes out the window. This is not a setback. This is your baby doing exactly what they're supposed to do — demanding more, so supply can meet it.",
            "Eat and drink more yourself — making milk is metabolically demanding. During a growth spurt when you're feeding constantly, your own hydration and calorie intake matters more than usual. This is not the week to worry about anything except keeping yourself fuelled.",
            "Lower every other bar — the growth spurt week is a survival week. Washing can wait. The house can wait. The thank-you cards from the birth can definitely wait. The one job this week is feeding your baby and keeping yourself upright.",
            "Tell someone what's happening — the six-week mark is when many support structures fall away (your partner is back at work, the visits have slowed, the assumption is that you're settled now). If you're in the middle of a growth spurt and struggling, say so. You are not more capable than you were at week one. You're just expected to be.",
          ],
        },
      ],
      closing: {
        heading: 'A word about the six-week check',
        paragraphs: [
          "The six-week mark also coincides with your postpartum GP check and often your baby's first immunisations. It's a lot for one week. Be honest with your GP about how you're actually doing — not the version of fine, the real version. This appointment exists for you too, not just the baby.",
        ],
      },
    },
  },
  {
    slug: 'combination-feeding-the-middle-ground',
    cover: 'c-feeding',
    label: 'Combination feeding',
    tag: 'Feeding',
    title: 'Combination feeding: the middle ground nobody talks about',
    body: "Using both breast milk and formula sits in a middle ground that rarely gets its own article. It's its own valid choice — here's what it actually looks like.",
    readMinutes: 5,
    published: true,
    content: {
      hook: [
        "The feeding conversation tends to be framed as a binary. Breast or bottle. One or the other. You're either committed to breastfeeding or you've switched to formula, and either way someone has an opinion about it.",
        "Combination feeding — using both breast milk and formula — sits in a middle ground that rarely gets its own article. Which is strange, because a significant number of families end up doing it, and many of them feel like they're doing something makeshift rather than something intentional. This is its own valid choice. Here's what it actually looks like.",
      ],
      sections: [
        {
          heading: 'Why families end up combination feeding',
          subheading: "These are circumstances and choices, not compromises. Combination feeding is a sensible response to all of them:",
          bullets: [
            "Returning to work while wanting to maintain some breastfeeding",
            "Supply that doesn't fully meet the baby's needs despite support",
            "A baby who needs supplementing due to slow weight gain",
            "A parent who needs more flexibility — for mental health, medication, sleep, or simply preference",
            "Wanting a partner to share night feeds while maintaining the breastfeeding relationship",
            "Weaning gradually rather than stopping abruptly",
          ],
        },
        {
          heading: 'How it works practically',
          paragraphs: [
            "There's no single right way to combination feed. Some families give one formula feed per day — typically the late-night feed so the birth parent can get a longer sleep stretch. Some replace a set number of feeds with formula and breastfeed for the rest. Some breastfeed during the day and formula feed at night. Some express milk and use formula when supply doesn't cover demand.",
            "The key principle: breastmilk supply is driven by demand. Every feed that's replaced by formula is a signal to your body to produce slightly less. This isn't necessarily a problem — if you want to gradually reduce breastfeeding, replacing feeds is how that happens. But if you want to maintain supply while adding formula, it's worth knowing that pumping after or instead of the replaced feed can help signal your body to keep producing.",
          ],
        },
        {
          heading: 'The things nobody mentions',
          paragraphs: [
            "Some babies move easily between breast and bottle. Some don't. Nipple confusion is real for some babies — the flow rate from a bottle is typically faster and more consistent than from the breast, and some babies start to prefer the ease of it. Slow-flow teats and paced bottle feeding (holding the bottle more horizontally so the baby has to work slightly) can help reduce this.",
            "Combination feeding can feel like you're not fully doing either thing, which can be its own emotional weight. You might feel like you're not breastfeeding \"properly\" because you're using formula, and not fully bottle feeding because you're still breastfeeding. Both of those feelings are worth naming and worth rejecting. You are feeding your baby in the way that works for your family. That is the whole point.",
          ],
        },
      ],
      closing: {
        heading: 'If you want to combination feed from the start',
        paragraphs: [
          "Talk to a midwife or lactation consultant before the birth if possible. Establishing breastfeeding first — even for a few weeks — before introducing formula tends to give you more flexibility later, because supply is more established. But this isn't a rule. It's a general pattern, and your circumstances may make it irrelevant.",
        ],
      },
    },
  },
  {
    slug: 'what-cluster-feeding-actually-feels-like',
    cover: 'c-feeding',
    label: 'Cluster feeding',
    tag: 'Feeding',
    title: 'What cluster feeding actually feels like at 7pm on a Tuesday',
    body: "One of the most misunderstood, under-explained, completely normal parts of early feeding — and the part most likely to make a new mother think her milk has dried up.",
    readMinutes: 5,
    published: true,
    content: {
      hook: [
        "It's 7pm. You've been awake since 4am. You've fed the baby six times today. You sat down fifteen minutes ago, finally, with a cup of tea that's now cold, and your baby is rooting again.",
        "You just fed them forty minutes ago. You put down the tea. You pick up the baby. You wonder, briefly and with complete sincerity, if you have made a terrible mistake.",
        "You haven't. This is cluster feeding. And it is one of the most misunderstood, under-explained, completely normal parts of early feeding — and the part most likely to make a new mother think her milk has dried up, her baby isn't thriving, or that she simply cannot do this.",
      ],
      sections: [
        {
          heading: 'What cluster feeding actually is',
          paragraphs: [
            "Cluster feeding is a pattern of frequent, short feeds bunched close together — usually in the late afternoon and evening. It's most common in the early weeks but can happen at any point, particularly during growth spurts and developmental leaps.",
            "It is not a sign that you don't have enough milk. It is not your baby being manipulative. It is not a problem that needs solving. It is a biologically normal feeding pattern that serves several purposes at once: building supply, providing comfort, loading up calories before a longer sleep stretch, and processing the overwhelm of the day.",
          ],
        },
        {
          heading: 'Why evening specifically',
          paragraphs: [
            "Your prolactin levels — the hormone that drives milk production — are higher overnight and lower in the evening. This means your supply is naturally at its lowest point in the late afternoon and early evening, which is exactly when your baby is trying to feed most. The cruel irony of this is not lost on anyone who has been through it.",
            "Your baby isn't feeding constantly because there's nothing there. They're feeding constantly to bring more in. It's supply and demand in real time, and it's working exactly as it should.",
          ],
        },
        {
          heading: 'What it feels like',
          paragraphs: [
            "Cluster feeding is relentless in a way that's hard to describe to someone who hasn't done it. It's not painful, usually. It's not any one hard thing. It's the accumulation — the never-quite-finishing, the sitting down and immediately standing up again, the feeling of being completely consumed by one task with no endpoint in sight.",
            "It's also the evening, which is when you're most tired, most depleted, and most in need of a break that isn't coming. It's when your partner walks in from work and you hand over the baby with a look that requires no words. It's when you cry into the cold tea because you love this baby so much and you are also so, completely, done.",
            "All of that is normal. All of that is survivable.",
          ],
        },
        {
          heading: 'What actually helps',
          bullets: [
            "Set up a cluster feeding station before it starts — by 4pm, get yourself set up somewhere comfortable: water bottle, snacks, phone charger (the long one), something to watch or listen to. You're going to be there a while. Make it liveable.",
            "Stop watching the clock — timing feeds during a cluster is a fast route to anxiety. They're going to be close together. That's the point. Trying to impose a schedule onto a cluster feeding session will make you feel like you're failing. You're not. The pattern is just different right now.",
            "Tell your partner what's actually happening — not \"the baby won't stop feeding\" but \"this is called cluster feeding, it's normal, it'll probably last another few weeks, and what I need from you right now is dinner and to take the baby the moment you walk in the door.\"",
            "Remember it has a shape — cluster feeding is most intense in weeks 2–6 and again during growth spurts. It eases. The evenings get calmer. The tea gets drunk while it's still hot. It doesn't feel like that from inside it, but it's true.",
          ],
        },
      ],
      closing: {
        heading: 'The 7pm version of yourself',
        paragraphs: [
          "She is tired. She is touched out. She is doing something genuinely hard and calling it ordinary because nobody told her otherwise.",
          "She is also, whether she feels like it right now or not, exactly what her baby needs.",
        ],
      },
    },
  },
]

export function getStoryBySlug(slug: string): Story | undefined {
  return stories.find((s) => s.slug === slug)
}
