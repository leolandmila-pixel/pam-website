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
  heroImagePosition?: string
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
        "Nobody warns you that week one doesn't feel like the movies. You're not glowing. You're bleeding through a maternity pad the size of a small country, your nipples are cracked, and you've cried three times before 9am - once because the baby wouldn't latch, once because they finally did, and once because someone sent flowers and the card said enjoy every moment.",
        'This is for the mum who is in it right now. The one who loves her baby fiercely and also googled "is it normal to feel nothing" at 3am.',
      ],
      sections: [
        {
          heading: 'Your body',
          subheading: 'The stuff no one puts in the birth prep class',
          bullets: [
            'The afterpains (uterine cramps as it contracts back) can feel like labour again, especially when feeding',
            "Lochia - the bleeding - can last up to 6 weeks and changes colour over time; what's normal vs what's not",
            'Night sweats are real and can soak through sheets; your body is shedding pregnancy hormones',
            'The first postpartum poo is genuinely feared. Stool softeners are your friend. Ask for them before you leave hospital.',
            'If you had stitches (perineal or C-section), sitting, walking, and laughing all feel like a threat',
          ],
        },
        {
          heading: 'Feeding',
          subheading: "Whether you're breast or bottle, it's harder than you thought",
          bullets: [
            'Breastfeeding is natural but not instinctive - for you or the baby. Both of you are learning',
            "Cluster feeding in the evenings is normal and does not mean you don't have enough milk",
            'Engorgement on days 3–5 when milk comes in can be shocking - cabbage leaves in your bra is not a myth',
            'Formula is not failure. Fed is fed. Any guilt you feel about this is not proportional to reality',
            'Feeding every 2–3 hours means you have roughly 90 minutes between sessions once you factor in the feed itself. Sleep in those windows. Everything else can wait.',
          ],
        },
        {
          heading: 'The emotional reality',
          subheading: 'The baby blues are real, and so is something more',
          bullets: [
            'Around day 3–5, many women hit an emotional wall - crying, overwhelm, doubt. This is hormonal and usually passes by day 10',
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
            "Your phone becomes a lifeline - put the helpline numbers in before the baby arrives (PANDA, Tresillian, your midwife's direct line)",
            'The 3am feeds are lonely but half the world is also awake doing this exact thing right now',
            "Visitors: it's okay to have a no-visitors-week-one rule. It's also okay to want people around. Know yourself.",
            'You do not need to have a routine yet. Week one is survival, not optimisation.',
          ],
        },
      ],
      closing: {
        heading: 'A note for 3am',
        paragraphs: [
          "You will not feel like this forever. Week one is the steepest part of the learning curve - for your body, your baby, and your sense of self. The fact that you're reading this, looking for information, trying to understand - that already makes you a good mother.",
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
    heroImage: '/blog-hospital-bag.jpeg',
    content: {
      hook: [
        "Every article about hospital bags tells you the same things. Maternity pads. A going-home outfit. Snacks for your partner. A playlist, apparently, as though you'll be in the mood for curated music.",
        "This is not that list. This is the list from the other side - the things you'll wish someone had quietly slipped in while you were busy packing the aromatherapy roller.",
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
            "Your brain will not work the way it used to. This is not a character flaw - it's sleep deprivation, hormones, and the fact that you are now responsible for keeping a human alive. You will be given a lot of information in hospital: feeding guidance, discharge instructions, medication schedules, the name of the community midwife who will visit on Thursday.",
            "You will not remember any of it.",
            "Write it down. Not in your phone - your phone will be flat (see point one) and too easy to scroll away from. A small notebook. A pen that actually works. Date the pages. Future you will read back through it and be grateful.",
          ],
        },
        {
          heading: '5. Something that makes you feel like yourself',
          paragraphs: [
            "This one is harder to put on a list, because it's different for everyone. For some people it's a particular face wash. A soft jumper that isn't technically nightwear but functions as such. A book you probably won't read but like having. A photo of your dog.",
            "Here's why it matters: at some point in those first 48 hours - probably when you're sitting in a hospital gown at 4am with a baby attached to your chest and a midwife coming to check your pad - you might feel very far from the person you were before. That's normal. But having one small, familiar thing nearby is an anchor.",
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
    body: "Periodic pauses, grunts, snuffles and sighs - what's normal newborn breathing, and how to tell when it isn't.",
    readMinutes: 5,
    published: true,
    heroImage: '/blog-breathing.jpeg',
    content: {
      hook: [
        "The first night home, I watched my baby breathe for four hours. Not because I was enchanted. Because I was terrified she was going to stop.",
        "Nobody had told me that newborns breathe like tiny, malfunctioning machines. That they pause. That they grunt. That they make sounds like a piglet, a creaky door, and a small overwhelmed person - sometimes all in the same breath.",
        "If you've found this article at 1am with your face six inches from your baby's chest, this is for you.",
      ],
      sections: [
        {
          heading: 'First, the reassuring part',
          paragraphs: [
            "Newborn breathing is genuinely strange, and genuinely normal. Their respiratory system is brand new. It has never done this before. It is figuring things out in real time, and that process looks and sounds alarming to a new parent who is used to adults, who breathe quietly and predictably and without drama.",
            "Most of what you're about to read is not an emergency. But knowing what's normal is what lets you recognise when something isn't - and that knowledge is worth having at 1am.",
          ],
        },
        {
          heading: 'What normal actually looks like',
          bullets: [
            "Periodic breathing - newborns regularly pause their breathing for up to 10 seconds, then resume normally. This is completely normal in the first few weeks and happens because the part of the brain that regulates breathing rhythm is still maturing. If your baby pauses, breathes again, and their colour stays normal - this is not an emergency.",
            "Fast breathing - newborns breathe much faster than adults, anywhere between 40 and 60 breaths per minute when awake or feeding. That's roughly one breath per second. Count it sometime - it will seem impossibly fast, and it's fine.",
            "Chest and belly movement - unlike adults who breathe mostly from the chest, newborns breathe from their belly. You'll see their stomach rising and falling significantly with each breath. Their chest will also move, but the belly leads.",
            "Flaring nostrils - newborns are obligate nose breathers and instinctively breathe through their nose rather than their mouth. Mild nostril flaring is their body working hard to move enough air. In isolation, it's normal. Combined with other signs below, it can indicate distress.",
          ],
        },
        {
          heading: 'What normal actually sounds like',
          subheading: 'This is the part nobody warns you about. Newborns are noisy breathers.',
          bullets: [
            "Grunting - especially during sleep and after feeding, as they process wind and adjust digestion. Newborn grunt syndrome is a real thing, it has a name, and it will keep you awake even though the baby is fine.",
            "Snuffling and snorting - their nasal passages are tiny and easily congested. Breast milk, amniotic fluid, and general newborn existence means there's often something partially blocking the airway. A saline nasal spray and a bulb syringe will become your best friends.",
            "Wheezing or rattling - often just mucus in the upper airway. If it clears after a cough or cry and doesn't return, it's usually not concerning.",
            "Sighing - yes, they sigh. Deeply and dramatically. It is somehow both alarming and completely adorable.",
          ],
        },
        {
          heading: 'When to actually be concerned',
          paragraphs: [
            "This is important. Normal newborn breathing is variable and noisy. The following signs are different - they indicate your baby is working harder than they should to breathe, and you should seek help promptly:",
          ],
          bullets: [
            "Breathing consistently faster than 60 breaths per minute while at rest",
            "Grunting at the end of every breath (not just during sleep - constant expiratory grunting is a sign of respiratory distress)",
            "Skin pulling in visibly between the ribs or at the base of the throat with each breath (called retractions)",
            "Nostril flaring combined with any of the above",
            "Colour changes - blue or grey lips, tongue, or fingernails",
            "A breathing pause that lasts longer than 20 seconds, or a shorter pause accompanied by a change in colour or limpness",
          ],
        },
        {
          heading: 'The 4am rule',
          paragraphs: [
            "If you see any of these, trust your instincts and get help. Call your midwife, call your maternal health nurse, or call 000. You are not overreacting.",
            "Here's something worth keeping: if you're unsure whether what you're seeing is normal, and your gut is telling you something is wrong - act on that. You know your baby. You have been watching them more closely than any monitor. A worried parent calling a health line at 4am is not an inconvenience. It's exactly what those services are for.",
            "PAM's resources tab has direct links to your state's maternal health line - the number worth having saved before you need it.",
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
    title: 'Why your baby cries more in the evening - and what to do about it',
    body: "The witching hour: why almost every newborn loses it between 5 and 8pm, what actually helps, and when it's more than just evening fuss.",
    readMinutes: 6,
    published: true,
    heroImage: '/blog-witching-hour.jpeg',
    content: {
      hook: [
        "It happens with a reliability that starts to feel personal. You've made it through the day. You're tired, your partner is home, dinner needs to happen - and right on cue, somewhere between 5 and 8pm, your baby loses the plot entirely.",
        "Not a little fussy. Inconsolable. Nothing works. You've fed them, changed them, checked every fold of skin for a rogue hair tourniquet. They are fed and clean and held and still screaming like something is genuinely wrong.",
        "Nothing is wrong. This is the witching hour. And almost every newborn has one.",
      ],
      sections: [
        {
          heading: 'Why it happens',
          subheading: "There's no single agreed explanation, which is both honest and deeply unsatisfying when you're in the middle of it. But here's what we do know:",
          bullets: [
            "Their nervous system is overwhelmed - a newborn spends all day taking in an enormous amount of sensory information (light, sound, faces, touch, temperature, hunger, digestion). By evening, their immature nervous system has hit capacity. The crying is, in part, a release - a decompression - their body's way of processing a day's worth of input that it doesn't yet have the tools to regulate.",
            "Their cortisol is peaking - the stress hormone follows a natural daily rhythm. In newborns, this rhythm is still establishing itself, and the evening peak can tip an already-overwhelmed baby into a state they can't easily come back from without help.",
            "They're often going through a feeding cluster - evening is prime time for cluster feeding, frequent short feeds that can go on for hours. This is your baby both comfort-seeking and building your milk supply. It's exhausting and relentless, and it's completely purposeful. They're not doing it to you. They're doing it because they're biologically wired to.",
            "You're also tired - this matters more than people acknowledge. Babies are extraordinarily sensitive to the emotional state of their caregiver. By 6pm, you've been on since before dawn. Your nervous system is also maxed out. Your baby feels that, and it amplifies theirs. This is not your fault. It's just the reality of two exhausted humans trying to regulate each other.",
          ],
        },
        {
          heading: 'What actually helps',
          subheading: 'No single thing works for every baby, and nothing works every time. But these are worth trying, roughly in order of effort:',
          bullets: [
            "Movement - rhythmic, continuous movement is the closest thing to a universal newborn sedative. Walking, swaying, bouncing on a gym ball, driving around the block. The motion mimics the womb - constant, predictable, containing. It won't always stop the crying but it gives their nervous system something to organise around.",
            "White noise - loud, continuous, low-frequency sound. A vacuum cleaner, a running shower, a white noise app at reasonable volume. Again, womb-like. The womb is not quiet. Your baby spent nine months in a remarkably noisy environment and silence, to them, can feel wrong.",
            "Reducing stimulation - this runs counter to instinct. When your baby is distressed you want to do more, try more, fix it. But sometimes less is more. Dim the lights. Stop talking. Take them somewhere quiet. Give their nervous system fewer things to respond to.",
            "Skin to skin - your chest regulates their temperature, their breathing, and their heart rate. It doesn't work instantly - they may still cry on you - but their body is doing calming work even when it doesn't look like it.",
            "Handing off - if you have a partner, use them. Not because you're failing - because a baby who can smell your milk will always prefer you in that moment, and sometimes a different pair of arms is genuinely more effective. Go to another room. Breathe. Come back. This is strategy, not abandonment.",
          ],
        },
        {
          heading: "When it's more than the witching hour",
          paragraphs: [
            "The witching hour is defined by its predictability and its limits - it typically peaks around 6 weeks and resolves by 3 to 4 months.",
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
            "If you're doing the witching hour solo - partner working late, single parenting, support network far away - this section is for you.",
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
    body: 'The twelve weeks after birth have a name, a body of research, and implications for everything - how you feel, how your baby behaves, and why this season is so much harder than anyone prepares you for.',
    readMinutes: 7,
    published: true,
    heroImage: '/blog-fourth-trimester.jpeg',
    content: {
      hook: [
        "Pregnancy has three trimesters. Everyone knows this. There are apps for each week, books for each stage, a whole industry built around tracking what fruit your baby currently resembles.",
        "And then the baby arrives, and nobody mentions the fourth one.",
        "The fourth trimester is the twelve weeks after birth. It has a name, a body of research behind it, and implications for everything - how you feel, how your baby behaves, what they need, and why this season is so much harder than anyone quite prepares you for. Here's what it actually means, and why knowing about it changes the way you see those first three months.",
      ],
      sections: [
        {
          heading: 'Where the idea comes from',
          paragraphs: [
            "The concept was popularised by paediatrician Harvey Karp, who observed that human babies are born significantly less developed than the newborns of other mammals. A foal stands within hours of birth. A human newborn cannot hold their own head up for months.",
            "The reason is evolutionary: human heads grew too large for the birth canal. We're born early, by necessity - around three months before we're truly ready for the outside world. The fourth trimester is, in effect, the trimester that should have happened in the womb but didn't.",
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
            "Being put down often triggers immediate distress - the floor is cold and open and nothing like where they came from",
            "They cluster feed - frequent contact and feeding is how they maintain the closeness their nervous system expects",
          ],
        },
        {
          heading: 'What it means for you',
          paragraphs: [
            "Here's the part that doesn't get said enough: the fourth trimester is not just your baby's transition. It's yours.",
            "Your body is recovering from one of the most significant physical events it will ever experience. Your hormones are in freefall. Your identity is restructuring around a role you've never played before. Your sleep is fragmented in a way that affects cognition, emotion regulation, and physical health.",
            "And you're doing all of this while keeping another human alive.",
            "The fourth trimester asks an enormous amount of you. The cultural expectation - that you should be bouncing back, feeling grateful, managing well - is completely at odds with what your body and mind are actually going through. You are also in a transition. You also need warmth, support, and people around you. That's not weakness. It's the same biology.",
          ],
        },
        {
          heading: 'Why it changes how you see the hard moments',
          paragraphs: [
            "When your baby won't be put down, you're not being manipulated. You're holding a creature whose entire nervous system is calibrated to expect contact.",
            "When they cry inconsolably, they're not being difficult. They're communicating the only way they know how, in a world that is genuinely overwhelming.",
            "When you feel like you're doing everything right and it's still hard - you are. It's just hard. The fourth trimester is hard by design, because it asks two people who have never met before to figure each other out from scratch, around the clock, with no days off.",
            "None of this means you have to love every minute of it. You're allowed to find it relentless. You're allowed to miss your old life. You're allowed to be in it fully and still find it desperately difficult.",
          ],
        },
        {
          heading: 'What actually helps',
          bullets: [
            "Lower the bar for this season deliberately - the fourth trimester is not the time to optimise, establish routines, or measure yourself against anyone else's timeline. The goal is: baby is fed, baby is safe, you are surviving. That's it.",
            "Accept that contact is the work - holding your baby is not doing nothing. It is regulating their nervous system, building attachment, supporting their neurological development, and keeping them calm enough to sleep and feed. If you spent the whole day on the couch with a baby on your chest, you did a full day's work.",
            "Build the village before you need it - the fourth trimester goes better with people around. Not people who visit for an hour and hold the baby while you make them tea - people who come over and make you tea, hold the baby so you can shower, leave food without requiring conversation. Be specific about what you need. People want to help and usually don't know how.",
            "Know that it ends - twelve weeks. Not forever. By three to four months most babies have crossed a developmental threshold - they can self-soothe slightly, their sleep consolidates a little, they become more interested in the world and less desperate to recreate the womb. It doesn't happen overnight, but it happens. The fourth trimester has an exit. You're moving toward it, even on the days it doesn't feel like it.",
          ],
        },
      ],
      closing: {
        heading: 'A final thought',
        paragraphs: [
          "Knowing about the fourth trimester won't make it easy. But it changes the story you tell yourself about it.",
          "Instead of \"my baby won't stop crying and I don't know what I'm doing\" - you have \"my baby is overwhelmed by a world they weren't quite ready for, and I am the thing that helps.\"",
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
    body: "One mum's story of sharing the load - and what changed when she stopped holding it all in her head.",
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
            'Why it defaults to mums - social conditioning, maternity leave, being the one "at home," the assumption of natural instinct',
            "It's invisible by definition: when you do it well, nobody sees it. When you drop something, everyone notices.",
            "It compounds after a baby - suddenly there's an entirely new person whose entire life needs to be held in someone's head",
          ],
        },
        {
          heading: 'What it does to you',
          subheading: 'The slow drain nobody talks about',
          bullets: [
            'Cognitive overload: the constant background hum that makes it hard to be present, rest, or think clearly',
            'Resentment - not because your partner is a bad person, but because the imbalance is real and accumulating',
            'The loneliness of being the one who "just knows" everything about your child\'s world',
            'How it shows up physically: sleep disruption, anxiety, snapping over small things, never fully switching off',
          ],
        },
        {
          heading: 'The conversation that actually works',
          subheading: 'Not a fight. A restructure.',
          bullets: [
            'Why "you never help" doesn\'t land - and what to say instead',
            'The difference between delegating tasks and transferring ownership (you want the second one)',
            'Specific script: "I need you to own this completely - not just do it when I ask"',
            "What to do when your partner genuinely doesn't see it - and how to make it visible without turning into a lecture",
            'Acknowledging that some partners are willing but undertrained, not unwilling',
          ],
        },
        {
          heading: 'Practical ways to redistribute',
          subheading: 'The actual mechanics of letting go',
          bullets: [
            'Write the whole list down - every recurring task, every remembered thing - and split it on paper, not in theory',
            'Assign ownership, not assistance. There\'s a difference between "I do bathtime and you help" and "bathtime is yours"',
            'Accept that things will be done differently, and differently is okay (this is the hard part)',
            'Let some things go entirely - not every thing on the list needs to be on anyone\'s list',
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
            "What's still hard, six months on - this isn't a perfect ending story",
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
    body: 'Why capturing the little sounds - first giggles, first words - matters more than the perfect photo.',
    readMinutes: 6,
    published: true,
    heroImage: '/voice-note-hero.jpg',
    content: {
      hook: [
        "I have 847 photos from my daughter's first month. I couldn't tell you what most of them are - blurry onesies, the top of her head, one very unflattering angle of me at 4am.",
        'But I have one voice note. Thirty-two seconds. Her making that small, grunty, newborn sound she made when she was milk-drunk and falling asleep on my chest.',
        'I would delete every photo before I deleted that.',
      ],
      sections: [
        {
          heading: 'Why we over-photograph and under-capture',
          subheading: 'The camera is easier than the moment',
          bullets: [
            'We reach for the phone because it feels like doing something - preserving, being responsible',
            "But photos flatten the moment into a single frame; they can't hold the smell, the weight, the sound",
            'The sounds of babyhood are the first things we forget - the specific cry, the feeding sounds, the first laugh that catches you off guard',
            'We don\'t think to record audio because nobody tells us to. It feels less "official" than a photo album.',
          ],
        },
        {
          heading: "What's worth capturing in sound",
          subheading: "A list you'll wish you'd had earlier",
          bullets: [
            'The newborn grunts and snuffles (gone by week 6)',
            'First proper giggle - not a smile, the giggle',
            'Babbling before it turns into words',
            'First recognisable word - and the mispronounced version that comes just before the real one ("baba" before "bottle")',
            'Them saying your name for the first time',
            'Bedtime sounds - the settling, the sighing, the breathing that slows into sleep',
            'You, talking to them - your voice explaining the world, your made-up songs, your shhh sounds at 3am',
          ],
        },
        {
          heading: 'The memory science (light touch)',
          subheading: 'Why sound unlocks memory differently than images',
          bullets: [
            'Auditory memory is processed differently in the brain - sound is more directly tied to emotion and recall',
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
            'Stored alongside milestones and notes, so the context is preserved - not just a file sitting in your camera roll with no date or caption',
            'The difference between a voice note lost in your phone and one that lives inside a memory, tagged to an age, a week, a moment',
            'You can add a note alongside it: "This is the sound she made every single time she finished a feed. I never want to forget it."',
          ],
        },
        {
          heading: 'A note on imperfection',
          subheading: "You don't need to be ready",
          bullets: [
            'The best ones are accidental - caught mid-giggle, mid-word, mid-something',
            'You don\'t need to announce "I\'m recording now" or set up the scene',
            'Background noise is fine. The dishwasher running. Your other kid in the background. That\'s the texture of real life.',
            'Future you doesn\'t care about audio quality. Future you just wants to hear it again.',
          ],
        },
      ],
      closing: {
        paragraphs: [
          'Thirty-two seconds. Milk-drunk, grunty, already almost asleep.',
          "She's four now. She hasn't made that sound in years. I didn't know when I recorded it that it would be the last time I heard it - you never do.",
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
        "Every mum's journey is different, but one thing remains the same - motherhood has a way of teaching us things we never expected about ourselves.",
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
    title: "Breastfeeding didn't work for me - and that's the whole story",
    body: "The gap between what we're told breastfeeding will be and what it actually is - and why so many women feel like they failed at something that was never straightforwardly in their control.",
    readMinutes: 6,
    published: true,
    heroImage: '/blog-breastfeeding.jpeg',
    heroImagePosition: 'center 65%',
    content: {
      hook: [
        "I tried for three weeks. Three weeks of cracked nipples, a baby who couldn't latch, a lactation consultant who came twice and left me more confused, and a level of guilt so disproportionate to the actual situation that I can only see it clearly now, two years later.",
        "I stopped. I moved to formula. My daughter thrived. I cried about it for longer than I'd like to admit.",
        "This article isn't about whether you should breastfeed. It's about the gap between what we're told breastfeeding will be and what it actually is - and why so many women feel like they failed at something that was never straightforwardly in their control.",
      ],
      sections: [
        {
          heading: 'The gap between natural and instinctive',
          paragraphs: [
            "Breastfeeding is natural. It is not, for most women, instinctive. There is a significant difference. Natural means the body is built for it. Instinctive would mean it happens automatically, without learning, without pain, without a steep and sometimes brutal curve. It doesn't - not for most people. Both you and your baby are learning a physical skill from scratch, at the same time, while you are sleep deprived and hormonally wrecked and she has never eaten before in her life.",
            "The first two weeks are often the hardest. Nipples that have never been used in this way need to adjust. Milk supply takes days to establish. Babies need to learn to latch deeply enough to feed efficiently. None of this is a reflection of your body failing. It's just the learning curve nobody adequately describes.",
          ],
        },
        {
          heading: 'What actually makes it harder',
          bullets: [
            "Tongue tie - often missed at the initial check, causes shallow latch and significant nipple damage",
            "Inverted or flat nipples - make it harder for a baby to get a deep latch without support",
            "Low supply - real, though less common than feared, and often confused with normal newborn feeding patterns",
            "Oversupply and fast letdown - the other end of the spectrum, which causes its own problems",
            "Previous breast surgery - can affect supply and sensation",
            "A baby who is jaundiced, premature, or has low muscle tone - all affect feeding ability",
          ],
        },
        {
          heading: 'The guilt is disproportionate to the stakes',
          paragraphs: [
            "Fed babies thrive. The research on breastfeeding benefits is real but frequently overstated in the way it's communicated to new mothers - presented as though formula is harm rather than simply an alternative. The benefits are modest for most outcomes in high-income countries with clean water and good formula. The mental health cost of struggling through something that isn't working - for both of you - is real and rarely factored in.",
            "You are not giving your baby a lesser start. You are feeding them.",
          ],
        },
        {
          heading: 'If you want to keep trying',
          paragraphs: [
            "Get a different lactation consultant if the first one didn't help. Ask your hospital about a breastfeeding clinic. Get your baby checked for tongue tie by someone who specialises in it - not just a quick look at the 24-hour check. Call the Australian Breastfeeding Association helpline (1800 686 268) - they're available around the clock and genuinely helpful.",
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
    body: "Around six weeks, your baby will seemingly forget everything they learned and demand to be fed constantly. Nothing is wrong - but it helps to know it's coming.",
    readMinutes: 5,
    published: true,
    heroImage: '/blog-growth-spurt.jpeg',
    content: {
      hook: [
        "Around six weeks, just when you've started to feel like you might be getting the hang of things, your baby will seemingly forget everything they learned and demand to be fed constantly, sleep terribly, and cry with a conviction that suggests something is very wrong.",
        "Nothing is wrong. This is the six-week growth spurt. It is temporary, it is normal, and it will pass - but it helps enormously to know it's coming.",
      ],
      sections: [
        {
          heading: "What's actually happening",
          paragraphs: [
            "Growth spurts are periods of rapid physical and neurological development. Your baby is getting bigger, their brain is making new connections, and their body needs significantly more fuel than it did last week. For breastfed babies, this means feeding more frequently to signal your body to increase supply. For formula-fed babies, it often means wanting more at each feed or feeding more often.",
            "It also coincides with a natural dip in your milk supply that many women experience around six weeks - your body is recalibrating from the initial oversupply of early weeks to a more settled production level. The timing is terrible. Your baby is hungrier, your supply feels lower, and it's very easy to interpret this as \"I'm not making enough milk.\"",
            "In most cases, you are. Your baby is just placing a new order.",
          ],
        },
        {
          heading: 'What it looks like',
          subheading: "It typically lasts 3–7 days. It will feel like forever. It isn't. Here's what to look for:",
          bullets: [
            "Feeding much more frequently than usual - sometimes every hour",
            "Seeming unsatisfied after feeds they previously finished contentedly",
            "Fussiness and crying that isn't resolved by feeding, changing, or holding",
            "Disrupted sleep after a period where things were improving",
            "Cluster feeding in the evenings, intensified",
          ],
        },
        {
          heading: 'What actually helps',
          bullets: [
            "Feed on demand, not the clock - during a growth spurt, the schedule goes out the window. This is not a setback. This is your baby doing exactly what they're supposed to do - demanding more, so supply can meet it.",
            "Eat and drink more yourself - making milk is metabolically demanding. During a growth spurt when you're feeding constantly, your own hydration and calorie intake matters more than usual. This is not the week to worry about anything except keeping yourself fuelled.",
            "Lower every other bar - the growth spurt week is a survival week. Washing can wait. The house can wait. The thank-you cards from the birth can definitely wait. The one job this week is feeding your baby and keeping yourself upright.",
            "Tell someone what's happening - the six-week mark is when many support structures fall away (your partner is back at work, the visits have slowed, the assumption is that you're settled now). If you're in the middle of a growth spurt and struggling, say so. You are not more capable than you were at week one. You're just expected to be.",
          ],
        },
      ],
      closing: {
        heading: 'A word about the six-week check',
        paragraphs: [
          "The six-week mark also coincides with your postpartum GP check and often your baby's first immunisations. It's a lot for one week. Be honest with your GP about how you're actually doing - not the version of fine, the real version. This appointment exists for you too, not just the baby.",
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
    body: "Using both breast milk and formula sits in a middle ground that rarely gets its own article. It's its own valid choice - here's what it actually looks like.",
    readMinutes: 5,
    published: true,
    heroImage: '/blog-combo-feeding.jpeg',
    content: {
      hook: [
        "The feeding conversation tends to be framed as a binary. Breast or bottle. One or the other. You're either committed to breastfeeding or you've switched to formula, and either way someone has an opinion about it.",
        "Combination feeding - using both breast milk and formula - sits in a middle ground that rarely gets its own article. Which is strange, because a significant number of families end up doing it, and many of them feel like they're doing something makeshift rather than something intentional. This is its own valid choice. Here's what it actually looks like.",
      ],
      sections: [
        {
          heading: 'Why families end up combination feeding',
          subheading: "These are circumstances and choices, not compromises. Combination feeding is a sensible response to all of them:",
          bullets: [
            "Returning to work while wanting to maintain some breastfeeding",
            "Supply that doesn't fully meet the baby's needs despite support",
            "A baby who needs supplementing due to slow weight gain",
            "A parent who needs more flexibility - for mental health, medication, sleep, or simply preference",
            "Wanting a partner to share night feeds while maintaining the breastfeeding relationship",
            "Weaning gradually rather than stopping abruptly",
          ],
        },
        {
          heading: 'How it works practically',
          paragraphs: [
            "There's no single right way to combination feed. Some families give one formula feed per day - typically the late-night feed so the birth parent can get a longer sleep stretch. Some replace a set number of feeds with formula and breastfeed for the rest. Some breastfeed during the day and formula feed at night. Some express milk and use formula when supply doesn't cover demand.",
            "The key principle: breastmilk supply is driven by demand. Every feed that's replaced by formula is a signal to your body to produce slightly less. This isn't necessarily a problem - if you want to gradually reduce breastfeeding, replacing feeds is how that happens. But if you want to maintain supply while adding formula, it's worth knowing that pumping after or instead of the replaced feed can help signal your body to keep producing.",
          ],
        },
        {
          heading: 'The things nobody mentions',
          paragraphs: [
            "Some babies move easily between breast and bottle. Some don't. Nipple confusion is real for some babies - the flow rate from a bottle is typically faster and more consistent than from the breast, and some babies start to prefer the ease of it. Slow-flow teats and paced bottle feeding (holding the bottle more horizontally so the baby has to work slightly) can help reduce this.",
            "Combination feeding can feel like you're not fully doing either thing, which can be its own emotional weight. You might feel like you're not breastfeeding \"properly\" because you're using formula, and not fully bottle feeding because you're still breastfeeding. Both of those feelings are worth naming and worth rejecting. You are feeding your baby in the way that works for your family. That is the whole point.",
          ],
        },
      ],
      closing: {
        heading: 'If you want to combination feed from the start',
        paragraphs: [
          "Talk to a midwife or lactation consultant before the birth if possible. Establishing breastfeeding first - even for a few weeks - before introducing formula tends to give you more flexibility later, because supply is more established. But this isn't a rule. It's a general pattern, and your circumstances may make it irrelevant.",
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
    body: "One of the most misunderstood, under-explained, completely normal parts of early feeding - and the part most likely to make a new mother think her milk has dried up.",
    readMinutes: 5,
    published: true,
    heroImage: '/blog-cluster-feeding.jpeg',
    content: {
      hook: [
        "It's 7pm. You've been awake since 4am. You've fed the baby six times today. You sat down fifteen minutes ago, finally, with a cup of tea that's now cold, and your baby is rooting again.",
        "You just fed them forty minutes ago. You put down the tea. You pick up the baby. You wonder, briefly and with complete sincerity, if you have made a terrible mistake.",
        "You haven't. This is cluster feeding. And it is one of the most misunderstood, under-explained, completely normal parts of early feeding - and the part most likely to make a new mother think her milk has dried up, her baby isn't thriving, or that she simply cannot do this.",
      ],
      sections: [
        {
          heading: 'What cluster feeding actually is',
          paragraphs: [
            "Cluster feeding is a pattern of frequent, short feeds bunched close together - usually in the late afternoon and evening. It's most common in the early weeks but can happen at any point, particularly during growth spurts and developmental leaps.",
            "It is not a sign that you don't have enough milk. It is not your baby being manipulative. It is not a problem that needs solving. It is a biologically normal feeding pattern that serves several purposes at once: building supply, providing comfort, loading up calories before a longer sleep stretch, and processing the overwhelm of the day.",
          ],
        },
        {
          heading: 'Why evening specifically',
          paragraphs: [
            "Your prolactin levels - the hormone that drives milk production - are higher overnight and lower in the evening. This means your supply is naturally at its lowest point in the late afternoon and early evening, which is exactly when your baby is trying to feed most. The cruel irony of this is not lost on anyone who has been through it.",
            "Your baby isn't feeding constantly because there's nothing there. They're feeding constantly to bring more in. It's supply and demand in real time, and it's working exactly as it should.",
          ],
        },
        {
          heading: 'What it feels like',
          paragraphs: [
            "Cluster feeding is relentless in a way that's hard to describe to someone who hasn't done it. It's not painful, usually. It's not any one hard thing. It's the accumulation - the never-quite-finishing, the sitting down and immediately standing up again, the feeling of being completely consumed by one task with no endpoint in sight.",
            "It's also the evening, which is when you're most tired, most depleted, and most in need of a break that isn't coming. It's when your partner walks in from work and you hand over the baby with a look that requires no words. It's when you cry into the cold tea because you love this baby so much and you are also so, completely, done.",
            "All of that is normal. All of that is survivable.",
          ],
        },
        {
          heading: 'What actually helps',
          bullets: [
            "Set up a cluster feeding station before it starts - by 4pm, get yourself set up somewhere comfortable: water bottle, snacks, phone charger (the long one), something to watch or listen to. You're going to be there a while. Make it liveable.",
            "Stop watching the clock - timing feeds during a cluster is a fast route to anxiety. They're going to be close together. That's the point. Trying to impose a schedule onto a cluster feeding session will make you feel like you're failing. You're not. The pattern is just different right now.",
            "Tell your partner what's actually happening - not \"the baby won't stop feeding\" but \"this is called cluster feeding, it's normal, it'll probably last another few weeks, and what I need from you right now is dinner and to take the baby the moment you walk in the door.\"",
            "Remember it has a shape - cluster feeding is most intense in weeks 2–6 and again during growth spurts. It eases. The evenings get calmer. The tea gets drunk while it's still hot. It doesn't feel like that from inside it, but it's true.",
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
  {
    slug: 'the-truth-about-sleep-training',
    cover: 'c-sleep',
    label: 'Sleep training',
    tag: 'Sleep',
    title: 'The truth about sleep training - what the research actually says',
    body: 'Few topics in parenting generate more heat, guilt, and contradictory advice. Here\'s what the evidence actually shows - clearly and without an agenda.',
    readMinutes: 7,
    published: true,
    heroImage: '/blog-sleep-training.jpeg',
    content: {
      hook: [
        'Few topics in parenting generate more heat, more guilt, and more contradictory advice than sleep training. You will find passionate advocates on both sides, studies cited to support completely opposing conclusions, and more than a few people who will tell you - with complete confidence - that you are doing permanent damage to your child either by doing it or by not doing it.',
        'Most of them are wrong. Or at least, significantly overstating what the evidence actually shows. Here\'s what the research says, as clearly as possible, without an agenda.',
      ],
      sections: [
        {
          heading: 'What sleep training actually is',
          paragraphs: [
            'Sleep training is a broad term that covers a wide range of approaches - from extinction methods (often called cry it out, where you put the baby down and don\'t return until morning) to graduated approaches (returning at increasing intervals) to gentler methods (gradual withdrawal, pick-up-put-down, camping out). These are not the same thing, and the research doesn\'t treat them as equivalent - though popular discussion often does.',
            'The thing they have in common: they all involve some degree of teaching a baby to fall asleep independently, rather than relying on a feed, a hold, or another external prop to get there.',
          ],
        },
        {
          heading: 'What the evidence shows',
          paragraphs: [
            'The short version: sleep training works, in the sense that it reduces night wakings and improves sleep consolidation. Multiple randomised controlled trials show this. It also does not, based on current evidence, cause lasting psychological harm.',
            'The most cited study - a 2012 Australian randomised controlled trial published in Pediatrics - followed children who had undergone graduated extinction and camping-out sleep training at five years old. It found no differences in emotional and behavioural outcomes, attachment security, or cortisol levels compared to control children. A 2016 follow-up found the same.',
            'A 2023 review of 13 studies concluded that behavioural sleep interventions improve infant and maternal sleep without evidence of harm to infant emotional development, attachment, or stress responses.',
          ],
        },
        {
          heading: 'What the evidence doesn\'t show',
          paragraphs: [
            'It doesn\'t show that sleep training is risk-free - the absence of evidence of harm is not the same as evidence of no harm, particularly for very young babies. Most studies are conducted on babies older than six months. The research on infants under six months is thinner.',
            'It also doesn\'t show that sleep training is necessary, or that babies who aren\'t sleep trained are worse off. Children who are not sleep trained also grow into securely attached, well-functioning people. Sleep training is a tool - not a requirement.',
          ],
        },
        {
          heading: 'The cortisol argument',
          paragraphs: [
            'You may have encountered the claim that sleep training causes cortisol spikes that damage the developing brain. This comes primarily from a 2012 study by Wendy Middlemiss, which found elevated cortisol in babies even after they stopped crying during sleep training. It was a small study, it has been criticised methodologically, and its findings have not been consistently replicated.',
            'This does not mean infant stress responses are irrelevant. It means the science is more complicated and more contested than either side tends to acknowledge.',
          ],
        },
        {
          heading: 'What this means practically',
          paragraphs: [
            'If your baby is over six months, you are exhausted to a degree that is affecting your mental and physical health, and you want to try sleep training - the evidence suggests it is likely to help and unlikely to cause lasting harm. You are not damaging your child.',
            'If you don\'t want to sleep train - because it doesn\'t feel right for you, because your baby isn\'t ready, because you\'re not ready - the evidence does not suggest your child will suffer for it. You are not creating a rod for your own back.',
          ],
        },
      ],
      closing: {
        heading: 'The bottom line',
        paragraphs: [
          'The research supports parental autonomy here. Do what is sustainable for your family, informed by evidence rather than guilt.',
          '"Sleep training works. It also does not, based on current evidence, cause lasting psychological harm."',
          '"The absence of evidence of harm is not the same as evidence of no harm."',
          '"Do what is sustainable for your family, informed by evidence rather than guilt."',
        ],
      },
    },
  },
  {
    slug: 'sleep-when-the-baby-sleeps',
    cover: 'c-sleep',
    label: 'Sleep advice',
    tag: 'Sleep',
    title: 'Why \'sleep when the baby sleeps\' is terrible advice (and what to do instead)',
    body: 'The most given piece of advice to new parents. Delivered with kindness. Almost completely useless.',
    readMinutes: 5,
    published: true,
    heroImage: '/blog-sleep-advice.jpeg',
    content: {
      hook: [
        'It is the most given piece of advice to new parents. It is delivered by midwives, mothers-in-law, friends, strangers at the supermarket. It is meant kindly. It is almost completely useless.',
        'Sleep when the baby sleeps. Here\'s why it doesn\'t work - and what actually helps instead.',
      ],
      sections: [
        {
          heading: 'Why the advice fails',
          paragraphs: [
            'The first problem is practical. The baby sleeps in 45-minute blocks, often only on you, frequently at unpredictable times. The instruction to sleep when they sleep assumes a level of flexibility and bodily control over sleep that most adults - especially postpartum adults whose nervous systems are in a state of high alert - simply don\'t have. You cannot always fall asleep on demand.',
            'The second problem is that it erases the rest of your life. The baby\'s naps are the only window in which you can eat a meal that isn\'t consumed standing over the sink, shower without one ear on the monitor, or sit in silence for ten uninterrupted minutes. Spending every one of those windows asleep means running on zero everything - not just sleep, but food, connection, and autonomy.',
            'The third problem is that it can make sleep worse. If you nap every time the baby does, you may find it harder to sleep at night, your sleep pressure reduces, and you enter a cycle of fragmented sleep around the clock rather than getting any consolidated rest.',
          ],
        },
        {
          heading: 'What the sleep deprivation is actually doing',
          paragraphs: [
            'Postpartum sleep deprivation is not just tiredness. It affects cognitive function, emotional regulation, immune function, and physical recovery from birth. It is a significant physiological stressor, and it accumulates.',
            'The reason you feel like a different, lesser version of yourself is not because you\'re struggling. It\'s because your brain is operating under genuine impairment. This is not a mindset problem. It\'s a biology problem.',
          ],
        },
        {
          heading: 'What actually helps',
          bullets: [
            'One good sleep block per day, protected. Identify the one sleep window where you are most likely to actually fall asleep - usually mid-morning - and protect it. Tell whoever is available: this window is mine.',
            'Ask for overnight help specifically. "I need someone to take the baby from 5am to 8am on Saturday so I can sleep." Three hours of uninterrupted sleep does more than six hours of fragmented sleep. It is not a luxury. It is medical.',
            'Eat before you sleep. Low blood sugar disrupts sleep quality. Even something small. You\'ll sleep better and wake with more functional capacity.',
            'Lower what counts as rest. Lying down with your eyes closed, even without sleeping, is physiologically restorative. Rest is not only sleep.',
            'Say what you need out loud. You have to ask for support specifically, because people generally don\'t know what you need unless you tell them.',
          ],
        },
      ],
      closing: {
        heading: 'The thing underneath the advice',
        paragraphs: [
          '"Sleep when the baby sleeps" is well-intentioned. The problem is that it puts the solution entirely on you - as though you just need to make different choices, and the exhaustion will resolve.',
          'You don\'t need better choices. You need more support. Those are different things, and only one of them is actually available to you right now.',
          '"Three hours of uninterrupted sleep does more than six hours of fragmented sleep. It is not a luxury. It is medical."',
        ],
      },
    },
  },
  {
    slug: 'safe-sleep-guidelines-simplified',
    cover: 'c-sleep',
    label: 'Safe sleep',
    tag: 'Sleep',
    title: 'Safe sleep: the guidelines, simplified for exhausted brains',
    body: 'The information you need, once, clearly - so you don\'t have to hold it anxiously in your head.',
    readMinutes: 4,
    published: true,
    heroImage: '/blog-safe-sleep.jpeg',
    content: {
      hook: [
        'Safe sleep guidelines exist because sleep-related deaths in infants are real, preventable in many cases, and clustered around specific risk factors. This is not an article designed to frighten you. It\'s designed to give you the information clearly, once, so you don\'t have to hold it anxiously in your head.',
      ],
      sections: [
        {
          heading: 'The core principles',
          bullets: [
            'Back to sleep, every time. Place your baby on their back for every sleep - naps and nights - until they can roll both ways independently.',
            'A firm, flat surface. A firm, flat mattress in a cot, bassinet, or portable crib that meets current Australian safety standards. Not a bouncer, not a swing, not a car seat (outside of car travel).',
            'Their own sleep space. The safest sleep is in their own sleep space in your room for at least the first six to twelve months. Room sharing without bed sharing reduces the risk of SIDS.',
            'Nothing in the cot. No pillows, no loose blankets, no bumpers, no soft toys, no sleep positioners. A fitted sheet and a safe swaddle or sleep sack are all that\'s needed.',
            'Temperature. The room should be 16–20 degrees. Check them at the back of the neck - warm but not sweaty is right. No beanies indoors for sleep.',
          ],
        },
        {
          heading: 'On swaddling',
          paragraphs: [
            'Swaddling is safe when done correctly - snug around the arms, loose around the hips to allow for hip development, always on the back. Stop swaddling when your baby shows signs of rolling, because a swaddled baby who rolls onto their tummy cannot push themselves up.',
          ],
        },
        {
          heading: 'On bed sharing',
          paragraphs: [
            'The official guidance in Australia is to avoid bed sharing, particularly for babies under three months, premature babies, and babies of low birth weight. The risk increases significantly if either parent smokes, has consumed alcohol or sedating medication, or is extremely fatigued.',
            'The reality is that many families bed share. If you are going to bed share, the Infant Sleep Information Source (ISIS) has harm-reduction guidance that acknowledges the reality of how families sleep while providing information to reduce risk.',
          ],
        },
        {
          heading: 'The things that are actually protective',
          bullets: [
            'Breastfeeding, even partially, is associated with a reduced SIDS risk',
            'A dummy/pacifier at sleep time is associated with reduced risk (you don\'t need to force it, and it\'s fine if they spit it out)',
            'Room sharing without bed sharing',
            'Keeping your baby smoke-free - during pregnancy and after',
          ],
        },
      ],
      closing: {
        heading: 'A note on anxiety',
        paragraphs: [
          'For some parents, safe sleep information triggers significant anxiety - checking, rechecking, difficulty sleeping themselves because they\'re monitoring. If this is you, it\'s worth naming.',
          'Knowing the guidelines is protective. Memorising them and running through them every fifteen minutes is not more protective - and it costs you something you can\'t afford to lose.',
        ],
      },
    },
  },
  {
    slug: 'when-your-baby-only-sleeps-on-you',
    cover: 'c-sleep',
    label: 'Contact napping',
    tag: 'Sleep',
    title: 'When your baby only sleeps on you - and why that\'s okay for now',
    body: 'You\'ve tried the cot seventeen times today. Every time, the same sequence. This article is for you.',
    readMinutes: 5,
    published: true,
    heroImage: '/blog-contact-napping.jpeg',
    content: {
      hook: [
        'You have tried the cot seventeen times today. Every time, the same sequence: asleep in your arms, transfer, the back touch-down, the pause, the eyes open, the face, the cry.',
        'Your baby will only sleep on you. And you have been awake since 3am and someone keeps texting to ask if you\'ve tried putting them in the cot yet. This article is for you.',
      ],
      sections: [
        {
          heading: 'Why it happens',
          paragraphs: [
            'It\'s not a bad habit. It\'s not a failure. It is developmental biology, doing exactly what it\'s supposed to do.',
            'Your baby spent nine months in a warm, moving, heartbeat-filled environment. They were never alone. They were never still. The cot, from their perspective, is nothing like anything they have ever experienced. You, on the other hand, are everything they know.',
            'Contact napping - sleeping on a person - is not a modern invention or a parenting style choice. It is what human infants have done throughout history. The drive to be held during sleep is hardwired into your baby. It is not a manipulation. It is survival instinct.',
          ],
        },
        {
          heading: 'The fourth trimester context',
          paragraphs: [
            'In the fourth trimester, your baby is not developmentally ready to self-settle. The part of the brain responsible for self-regulation is immature. The ability to move from drowsy to asleep without external help is a skill that develops over months, not weeks.',
            'This will change. Most babies develop the capacity for more independent sleep somewhere between three and six months, with significant individual variation. What feels like it will never change, will change - not because you sleep trained, but because your baby\'s brain matured.',
          ],
        },
        {
          heading: 'What to do when you\'re trapped under a sleeping baby',
          paragraphs: [
            'First: you\'re not trapped. You\'re doing something real. Contact napping regulates your baby\'s breathing, temperature, and heart rate. It supports brain development. It is not wasted time. It is, in a real sense, the work.',
          ],
          bullets: [
            'Set up before the nap, not after. Water, snacks, phone, headphones, charger - all within reach before you sit down. Accept that you\'re there for the duration and make it liveable.',
            'Lie down together. If you\'re breastfeeding, a safe side-lying position means you can rest even if you can\'t sleep. Your body recovers more lying down than sitting upright.',
            'Use a carrier for some naps. A well-fitted carrier means your baby gets contact sleep and you get your hands back. This is not cheating. This is one of the best parenting tools ever made.',
            'Don\'t try every transfer, every time. Sometimes you\'ll get it. Sometimes you won\'t. Spending forty-five minutes attempting and failing burns more energy than just staying put.',
          ],
        },
        {
          heading: 'When to think about it differently',
          paragraphs: [
            'Contact napping becomes worth gently working on when it is the only way your baby will sleep, you have no support and cannot sustain it, and the sleep deprivation is reaching a level that is affecting your safety or mental health. At that point - usually after three or four months - there are gradual approaches to working toward more independent sleep that don\'t involve leaving your baby to cry alone.',
            'Before that point? You are not creating a problem. You are meeting a need. Those are different things, and it matters that you know which one you\'re doing.',
          ],
        },
      ],
      closing: {
        heading: 'For 3am, when you\'ve been awake since midnight',
        paragraphs: [
          'You are not failing because your baby won\'t sleep in the cot. You are not weak because you\'re exhausted. You are not making a rod for your own back by holding them.',
          'You are a person doing something hard, in the dark, because your baby needs you to. That is enough. It is more than enough.',
          '"Contact napping is not wasted time. It is, in a real sense, the work."',
        ],
      },
    },
  },
  {
    slug: 'the-identity-shift-nobody-warns-you-about',
    cover: 'c-wellbeing',
    label: 'Identity & matrescence',
    tag: 'Wellbeing',
    title: 'The identity shift nobody warns you about',
    body: 'Matrescence - the profound psychological transformation of becoming a mother. What it is, what it actually feels like, and what the other side looks like.',
    readMinutes: 6,
    published: true,
    heroImage: '/blog-identity-shift.jpeg',
    content: {
      hook: [
        "Everyone warns you about the sleepless nights. The feeding. The nappies. The way your social life contracts to almost nothing and your body doesn't feel like yours anymore.",
        "Nobody warns you about the other thing. The quieter, stranger thing. The feeling that somewhere between the birth and now, you have lost track of who you are.",
        "Not lost her permanently. Not in a clinical sense. Just - misplaced. Like she's somewhere nearby and you can't quite locate her, and you're not sure when you'll have the time or the space to go looking.",
        "This is matrescence. And it's one of the least talked-about aspects of becoming a mother.",
      ],
      sections: [
        {
          heading: 'What matrescence actually is',
          paragraphs: [
            "The term was coined by anthropologist Dana Raphael in the 1970s and has gained renewed attention in recent years. It describes the psychological, neurological, hormonal, and social transformation that occurs when a woman becomes a mother - a transition as profound as adolescence, and similarly disorienting.",
            "Your brain physically changes during pregnancy and the postpartum period. Grey matter is reorganised. Neural pathways shift. Your threat-detection system recalibrates around a new priority. Your values, your relationships, your sense of self - all of it is in flux simultaneously.",
            "This is not a mood. It is a metamorphosis.",
          ],
        },
        {
          heading: 'What it actually feels like',
          paragraphs: [
            "It doesn't always feel dramatic. Sometimes it's just a low hum of strangeness - looking in the mirror and not quite recognising the person looking back. Sitting in a conversation about something you used to care about and feeling oddly disconnected from it. Reaching for a version of yourself - the one who had opinions about things, who made plans, who existed outside of this apartment and this feeding schedule - and finding her harder to access than she used to be.",
            "Sometimes it's sharper. Grief, even. Mourning a life that was good and full and yours, even as you love the one you're building. Those feelings can coexist. Loving your baby and grieving your old self are not opposites, and the guilt that comes from feeling both at once is one of the cruelest tricks of early motherhood.",
            "Sometimes it's disorientation in the most mundane moments - someone asks what you do and you don't know how to answer anymore. Someone asks what you'd like for dinner and you genuinely cannot access a preference. Someone asks how you are and you say fine because the real answer would take an hour and even then you're not sure you could articulate it.",
          ],
        },
        {
          heading: 'Why nobody warns you',
          paragraphs: [
            "Partly because it's hard to describe before you're in it. Partly because the cultural narrative around new motherhood is so focused on the baby that the mother's interior experience barely registers. Partly because naming it feels like ingratitude - like you're complaining about something you chose and wanted.",
            "You're not complaining. You're describing a real phenomenon that happens to most women who become mothers, is temporary in its most disorienting form, and is survivable with a lot more ease when you know it has a name.",
          ],
        },
      ],
      closing: {
        heading: 'What the other side looks like',
        paragraphs: [
          "Matrescence doesn't resolve by going back to who you were before. That person is gone, or at least significantly changed. What emerges is something new - a self that contains both the woman you were and the mother you're becoming, integrated over time into someone you'll recognise again.",
          "Most women describe finding that person somewhere in the first year. Not all at once. Not on a particular day. Just gradually, the fog lifts, the strangeness softens, and you start to feel like yourself again - a different self, but yours.",
          "It takes longer than anyone tells you. It is worth waiting for.",
        ],
      },
    },
  },
  {
    slug: 'what-postnatal-anxiety-actually-feels-like',
    cover: 'c-wellbeing',
    label: 'Postnatal anxiety',
    tag: 'Wellbeing',
    title: 'What postnatal anxiety actually feels like from the inside',
    body: 'We have less language for postnatal anxiety than postnatal depression - it often goes unrecognised, and can look like a mother who is very on top of things.',
    readMinutes: 7,
    published: true,
    heroImage: '/blog-postnatal-anxiety.jpeg',
    content: {
      hook: [
        "We talk about postnatal depression. We have less language for postnatal anxiety - which affects at least as many women, often goes unrecognised for longer, and can look from the outside like a mother who is very on top of things.",
        "She is not on top of things. She is white-knuckling it, running catastrophic scenarios on a loop, and sleeping with one eye open because she is certain, at some level, that something terrible is about to happen.",
        "This is what it actually feels like from the inside.",
      ],
      sections: [
        {
          heading: "It doesn't always look like anxiety",
          paragraphs: [
            "Postnatal anxiety doesn't always announce itself. It can look like being very organised. Very vigilant. Very thorough. The mum who has read everything, prepared everything, checked everything twice. The mum who can't let anyone else hold the baby because they might not do it right. The mum who is, by every external measure, handling it - and is quietly falling apart.",
            "It can also look like irritability. Snapping at your partner over small things, not because you're angry but because your nervous system is so primed for threat that minor friction feels catastrophic. It can look like avoidance - not leaving the house because the outside world contains too many uncontrollable variables. It can look like perfectionism, or hypervigilance, or being unable to rest even when the baby is asleep and the house is quiet.",
          ],
        },
        {
          heading: 'What it feels like inside',
          paragraphs: [
            "The thoughts come fast and they are specific. Not vague worry - vivid, detailed scenarios. You're bathing the baby and your mind shows you, uninvited and in high resolution, what could go wrong. You're driving and you cannot stop calculating the ways a car accident happens. You lie awake at 2am running through everything you might have missed, every risk you haven't accounted for, every way this could end badly.",
            "There's a physical dimension too. The chest tightness. The shallow breathing. The feeling of being permanently braced - waiting for the thing that hasn't happened yet but feels inevitable. A racing heart at sounds that turn out to be nothing. The inability to eat properly because your appetite has simply switched off.",
            "And underneath all of it, the thought that maybe this is just what being a good mother feels like. That the worry is love, and love should feel like this, and if you weren't worried you'd be negligent.",
            "That thought is worth examining. Worry and love are related, but they are not the same thing. Love does not require suffering. The difference is in the control - whether the worry is proportionate and responsive to actual circumstances, or whether it runs on its own track regardless of what's actually happening.",
          ],
        },
        {
          heading: 'Why it goes unrecognised',
          paragraphs: [
            "The Edinburgh Postnatal Depression Scale - the standard screening tool used by GPs and maternal health nurses - is weighted toward depression. A woman presenting with anxiety without depression can score low enough that it doesn't flag. Many women are told they're fine. Many women tell themselves they're fine. The high-functioning presentation means there's often no obvious crisis to respond to.",
            "If your body has been in a state of constant alert since your baby was born, if the thoughts won't slow down, if you are not sleeping even when you could be, if you are running on fear rather than love - that is worth taking seriously, regardless of what a screening tool says.",
          ],
        },
      ],
      closing: {
        heading: 'What helps',
        paragraphs: [
          "Postnatal anxiety is treatable. That's not a platitude - it's specifically responsive to the right support, and most women who get that support feel significantly better.",
          "Talking to your GP is the starting point. Be specific: not \"I'm a bit anxious\" but \"I am having intrusive thoughts, I cannot switch off, I haven't slept properly in weeks and it's not just because of the baby.\" The more specific you are, the more useful the response is likely to be.",
          "PANDA (Perinatal Anxiety and Depression Australia) has a national helpline at 1300 726 306, available Monday to Saturday, staffed by people who understand exactly what you're describing.",
          "You do not have to feel like this. You do not have to earn help by getting worse first.",
        ],
      },
    },
  },
  {
    slug: 'your-body-after-birth',
    cover: 'c-wellbeing',
    label: 'Body after birth',
    tag: 'Wellbeing',
    title: 'Your body after birth: an honest, unglamorous guide',
    body: "The version of postpartum recovery that gets talked about publicly is heavily edited. Here's the unedited version - from the first week to the stuff nobody tells you.",
    readMinutes: 6,
    published: true,
    heroImage: '/blog-body-after-birth.jpeg',
    heroImagePosition: 'center 40%',
    content: {
      hook: [
        "Somewhere between the birth and the six-week check, you will encounter a version of the postpartum body narrative that involves words like bounce back, glow, and journey. You will look at your body and feel that none of those words apply.",
        "This is not because something went wrong. This is because the version of postpartum recovery that gets talked about publicly is heavily edited.",
        "Here is the unedited version.",
      ],
      sections: [
        {
          heading: 'The first week',
          paragraphs: [
            "Your body has just done something extraordinary and it knows it. Everything hurts in ways that weren't covered in the birth prep class.",
            "The bleeding - lochia - is heavier than most people expect, changes colour over days and weeks, and can last up to six weeks. Passing clots in the first few days is normal. Soaking through a pad in under an hour is not - that's worth a call to your midwife.",
            "If you had a vaginal birth, your perineum is bruised, swollen, and possibly stitched. Sitting is uncomfortable. Walking is uncomfortable. The advice to use a frozen pad - a maternity pad soaked in water and frozen - is not an old wives' tale. It helps.",
            "If you had a caesarean, you have had major abdominal surgery and are simultaneously recovering from that while caring for a newborn. The scar is numb and tight and will feel strange for months. Try, where you can, not to lift things heavier than your baby.",
            "The first postpartum poo deserves its own mention here, because no amount of warning is quite enough. Stool softeners. Take them early. Be patient with yourself.",
          ],
        },
        {
          heading: 'Weeks two to six',
          paragraphs: [
            "The acute pain starts to ease but the strangeness deepens. Your body is healing, producing milk if you're breastfeeding, processing a significant hormonal withdrawal, and running on fragmented sleep - simultaneously.",
            "The night sweats are real - drenching, sheet-soaking, wake-you-up sweats as your body sheds the fluid it retained in pregnancy. They typically resolve within a few weeks.",
            "Your hair will start to fall out, usually around three to four months postpartum, in quantities that seem medically alarming. This is telogen effluvium - a normal response to the hormonal shift of birth. It grows back. It takes time.",
            "Your joints may feel loose and unstable - relaxin, the hormone that loosened your ligaments for birth, stays in your system while you're breastfeeding. This is why postpartum exercise needs to be more gradual than people often expect.",
            "A women's health physiotherapist is not a luxury. It is, for most women, a genuinely necessary part of recovery that is not adequately promoted in standard postnatal care.",
          ],
        },
        {
          heading: 'The stuff that takes longer than six weeks',
          paragraphs: [
            "The six-week check implies, by its very existence, that six weeks is the endpoint of postpartum recovery. It isn't. Research suggests full recovery - physical and psychological - takes closer to a year for many women, and longer for others.",
            "Your core may not function the way it used to for months. Your pelvic floor will take consistent work to recover. The scar, if you have one, will continue to change and soften for up to two years. The hormonal recalibration continues until weaning and beyond.",
            "This is not cause for alarm. It is cause for adjusting expectations - yours and everyone else's.",
          ],
        },
      ],
      closing: {
        heading: 'On the pressure to bounce back',
        paragraphs: [
          "The body you have right now grew, sustained, and birthed a human. It is feeding that human, healing from the process of producing it, and functioning on inadequate sleep. The expectation that it should also look a particular way - should shrink and tighten and return to some prior form within months - is not a reasonable expectation. It is a cultural one, and it is worth examining every time you notice yourself holding it.",
          "Your body did something. It is still doing something. That is worth more than what it looks like from the outside.",
        ],
      },
    },
  },
  {
    slug: 'when-did-i-last-do-something-just-for-me',
    cover: 'c-wellbeing',
    label: 'Self & restoration',
    tag: 'Wellbeing',
    title: 'When did I last do something just for me?',
    body: "Stop for a second and try to answer it. For the mum who can't remember - and the small voice that says I don't have time for that.",
    readMinutes: 5,
    published: true,
    heroImage: '/blog-self.jpeg',
    content: {
      hook: [
        "Stop for a second and try to answer it.",
        "Not something for the baby. Not something for the household. Not something that technically counts as self-care because you had a shower. Something that was genuinely, purely, for you - that you did because you wanted to, because it made you feel like yourself, because it had nothing to do with anyone else's needs.",
        "If you're struggling to remember, you're not alone. And if a small voice just said I don't have time for that, this article is specifically for you.",
      ],
      sections: [
        {
          heading: 'What happens to you in early motherhood',
          paragraphs: [
            "Motherhood, particularly in the early months, is an exercise in sustained self-erasure. Not intentional. Not even always noticed. Just gradual - the slow disappearance of your own preferences, your own time, your own interiority, as the needs of someone else fill every available space.",
            "You stop finishing sentences. You stop finishing meals. You stop finishing thoughts. Your body is not fully yours. Your time is not fully yours. Your attention is not fully yours.",
            "But somewhere in the sustained giving, the person who is doing the giving starts to thin out. And a thinned-out person cannot give indefinitely. They can only give until they can't, and then everyone suffers.",
          ],
        },
        {
          heading: "Why 'self-care' is often the wrong frame",
          paragraphs: [
            "The word self-care has been so thoroughly annexed by bath bombs and face masks that it has lost most of its meaning. More importantly, it frames the restoration of a depleted person as a luxury - something to be squeezed in around the edges when everything else is done. A treat. A reward.",
            "It isn't. It is maintenance. The same way you cannot run a car without fuel, you cannot sustain the emotional and physical output of early parenthood without input that is specifically yours.",
            "This is not selfish. Selfish would be taking more than your share. Taking enough to keep yourself functional is just - necessary.",
          ],
        },
        {
          heading: "What it doesn't have to look like",
          paragraphs: [
            "It does not have to be a spa day, a solo trip, or two uninterrupted hours. The scale of it matters less than the quality - the degree to which it is genuinely yours.",
            "Ten minutes reading something you actually want to read. A walk without the pram, without a parenting podcast. Cooking something you like without adjusting it for anyone else. Calling a friend and talking about something other than the baby for twenty minutes. Sitting in the car after getting home, for five minutes, before going inside.",
            "Small things done with full permission - permission you give yourself, not contingent on the house being clean or everyone else being okay first - accumulate into something real.",
          ],
        },
        {
          heading: 'The permission problem',
          paragraphs: [
            "This is usually where it gets stuck. Not the time, not the logistics, but the internal permission. The feeling that you haven't earned it yet. That you'll do it when things settle down. That wanting something for yourself is somehow in competition with being a good mother.",
            "It isn't. Maternal wellbeing and infant wellbeing are directly linked. A mother who has some replenishment, some sense of herself outside of the caring role, is more present, more regulated, more able to give. This is not a guilt trip. It's just true.",
            "You matter beyond your usefulness to other people. That's not a productivity argument. It was true before the baby arrived, and it remains true now.",
          ],
        },
      ],
      closing: {
        heading: 'A practical starting point',
        paragraphs: [
          "Pick one thing. Not a list - one thing. Something small that is genuinely yours. Tell someone you're going to do it and when. And when the moment comes and the small voice says I should probably use this time to catch up on washing - do the thing anyway.",
          "The washing will still be there. You, restored even slightly, are worth more to everyone than the washing done.",
        ],
      },
    },
  },
]

export function getStoryBySlug(slug: string): Story | undefined {
  return stories.find((s) => s.slug === slug)
}
