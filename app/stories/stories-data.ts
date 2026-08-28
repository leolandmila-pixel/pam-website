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
  heroImageGrayscale?: boolean
  content?: StoryContent
  relatedTool?: { label: string; description: string; href: string }
}

export const stories: Story[] = [
  {
    slug: 'what-i-wish-someone-had-told-me-about-week-one',
    cover: 'c-newborn',
    label: 'The first six weeks',
    tag: 'Newborn',
    title: 'The first week with a newborn: what to actually expect, physically and emotionally',
    body: "Postpartum recovery, feeding, and the emotional reality of the first week with a newborn - a gentle, honest guide to what nobody tells you about surviving (and savouring) it.",
    readMinutes: 7,
    published: true,
    heroImage: '/week-one-hero.jpg',
    content: {
      hook: [
        "Nobody warns you that the first week with a newborn doesn't feel like the movies. You're not glowing. You're bleeding through a maternity pad the size of a small country, your nipples are cracked, and you've cried three times before 9am - once because the baby wouldn't latch, once because they finally did, and once because someone sent flowers and the card said enjoy every moment.",
        'This is for the mum who is in it right now, deep in early postpartum recovery. The one who loves her baby fiercely and also googled "is it normal to feel nothing" at 3am.',
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
    title: 'Hospital bag checklist: 5 things nobody tells you to pack (but should)',
    body: "Forget the standard hospital bag checklist. Five small, real things you'll wish someone had quietly slipped in while you were busy packing the aromatherapy roller.",
    readMinutes: 5,
    published: true,
    heroImage: '/blog-hospital-bag.jpeg',
    content: {
      hook: [
        "Every hospital bag checklist tells you the same things. Maternity pads. A going-home outfit. Snacks for your partner. A playlist, apparently, as though you'll be in the mood for curated music.",
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
    title: 'The witching hour: why babies cry more in the evening, and what actually helps',
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
    title: 'New mum burnout: the signs, and what actually helped one mum put the mental load down',
    body: "The signs of new mum burnout are easy to miss because they look like normal tiredness. One mum's story of recognising hers - and what changed when she stopped holding the mental load alone.",
    readMinutes: 8,
    published: true,
    heroImage: '/mental-load-hero.jpg',
    content: {
      hook: [
        "It's 11pm. Your partner is asleep. You're lying in the dark making a mental note to book the four-month needles, reply to the maternal health nurse, order more nappy rash cream, check if the pram rain cover is still in the garage, and remember to tell your mum what time she's coming on Saturday.",
        "Nobody asked you to hold all of this. You just... started holding it. And now you can't put it down. This is what new mum burnout often looks like from the inside - not collapse, just a slow, invisible accumulation.",
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
          paragraphs: [
            "I knew something had to give the night I cried over a Tupperware lid. Not the baby, not the sleep deprivation itself - a lid that didn't have a matching container, at 9pm, after a day that had already asked everything of me. I remember thinking, quite clearly, this isn't about the lid. I was exhausted in a way that no amount of sleep was going to fix, because it wasn't sleep I was short on. It was space in my own head.",
            "The conversation with my partner wasn't dramatic. I'd expected it to be - I'd rehearsed a version where I listed everything I did and he apologised and everything changed overnight. What actually happened was smaller and slower. I told him I wasn't asking for help anymore, I was handing over ownership of things completely - all appointments, all of it, his to track without me reminding him. He said okay. Then, for about two weeks, he still asked me where things were, and I had to keep saying I don't know, that's yours now, and biting down the urge to just tell him.",
            "Six months on, it isn't perfect. He still does things differently to how I would - the nappy bag is packed in an order that makes no sense to me, and I've had to let that go entirely. There are still nights I catch myself mentally running through tomorrow's logistics before I remember that half of them aren't mine to hold anymore. But the running list in my head is genuinely shorter than it was. I sleep, when the baby lets me, without an inventory playing behind my eyes. That's the whole win. It's not nothing.",
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
    title: "Baby memory keeping ideas: why a 30-second voice note beats 800 photos",
    body: "Looking for baby memory keeping ideas that actually stick? Here's why capturing the little sounds - first giggles, first words - matters more than another blurry photo.",
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
    slug: 'real-mums-real-stories-sian',
    cover: 'c-community',
    label: 'Real Mums, Real Stories',
    tag: 'Community',
    title: 'Real Mums, Real Stories: Sian',
    body: "Founder, brand builder, and mum to 16-month-old Sevi. Sian shares what she's learned from closing a six-year business and opening her heart to motherhood.",
    readMinutes: 5,
    published: true,
    heroImage: '/Sian & Sevi.JPG',
    heroImagePosition: 'center 60%',
    heroImageGrayscale: true,
    content: {
      hook: [
        "Meet Sian. She's a founder and brand builder living on the Mornington Peninsula with her partner Paddy and their son Sevi. She's the oldest of seven, a lifelong lover of the ocean and the outdoors, and someone who has spent the last year figuring out what really matters.",
        "Becoming a mum and closing a business she'd spent six years building happened within months of each other. It was a lot to hold at once. But Sian has come out the other side with a clarity a lot of us are still searching for.",
        "Here's what she had to say.",
      ],
      sections: [
        {
          heading: 'Tell us about yourself.',
          paragraphs: [
            "I'm a founder, brand builder, and mum to my 16 month old boy, Sevi. I'm a big fan of the outdoors, the ocean, and surfing, which is why my little family — my partner Paddy, myself, and Sevi — live down on the Mornington Peninsula in Victoria.",
            "I'm in a bit of a transitional period of my life. In the last year I've become a mum and then had to shut down a business I spent six years building. It's been a really challenging time, but it was made a lot easier by Sevi's huge smile and his obsession with cuddles at the end of a tough day. Now that I'm out the other side, I'm learning that failures are a necessity. They're an opportunity for growth. The best is yet to come.",
            "As the oldest of seven, I always knew I wanted to be a mum. But having Sevi has blown my world right open. It's given me an incredible perspective shift. Life is so much more beautiful with him in it. I feel incredibly lucky.",
          ],
        },
        {
          heading: 'Describe motherhood in one sentence.',
          paragraphs: [
            "Motherhood opens you up to what it means to be alive. It strips away ego and shows you a new, deeper kind of love that makes a lot of life's mysteries make a little more sense.",
          ],
        },
        {
          heading: "What's one thing motherhood taught you about yourself?",
          paragraphs: [
            "Becoming a mum has really helped me understand myself better. What brings me joy, what calms me, what pushes me over the edge. It's helped me strip away all the fluff and focus on the things that bring me and my little boy joy. That's a much simpler, calmer way to live.",
          ],
        },
        {
          heading: 'What\'s a motherhood moment that made you think, "I\'ve got this"?',
          paragraphs: [
            "I have these moments all the time, but just as I do, I feel like everything changes and all of a sudden I'm learning all over again. Parenting feels like a never ending cycle of thinking you've figured it out, and then everything changing again as they grow.",
            "If I had to pick a moment, it would be when he started cuddling me back and really showing that he loves me. That's when I knew that no matter what happens, we'll always be okay.",
          ],
        },
        {
          heading: 'How has becoming a mother changed the way you approach business and ambition?',
          paragraphs: [
            "I'm still getting my head around this one. But there's been a very clear mental shift. Before Sevi, work and success were really important to me. Now, being a mum is my priority and my passion, and my career is a fun thing I'm lucky enough to be able to do as well. I'm sure this will shift again later in life, but right now I want to really enjoy this early chapter of motherhood while still setting my family up. It's a balance I'm still figuring out.",
          ],
        },
        {
          heading: 'What does support look like for you in this season of life?',
          paragraphs: [
            "Honestly, I just love getting out of the house at the moment. If we're having a tough day, things instantly feel lighter when we get outside or go meet someone at a cafe. So for me, support looks like having people to catch up with in the morning for a walk, coffee, or play. And nothing is more helpful than someone giving me food. Even this far into parenthood, someone handing me a pre-made dinner is life changing.",
          ],
        },
        {
          heading: 'If you could go back and give advice to yourself as a first time mum, what would it be?',
          paragraphs: [
            "I wish I'd journaled. I wish I'd written down how I was feeling before having Sevi and afterwards. It goes by so fast, and you're fully immersed in each stage of the journey. So I would have told myself to write it down. I should start now, actually. I would have also told myself not to buy all the baby things beforehand, and instead just buy things as I needed them.",
          ],
        },
        {
          heading: 'If you had a personal assistant for parenting, what would you ask them to help with first?',
          paragraphs: [
            "Watching Sevi while I went for a surf, honestly. But more practically, it would probably be helping with cooking and meal planning, making sure I'm putting together a broad range of nutritious meals. And making sure I'm across where and when I need to be places. I'm constantly late to things at the moment.",
          ],
        },
      ],
      closing: {
        heading: 'We see you, Sian.',
        paragraphs: [
          "Thank you for sharing your story with us.",
          "Real Mums, Real Stories is a PAM Journal series celebrating the honest, unfiltered experiences of mums navigating this wild, beautiful season of life.",
        ],
      },
    },
  },
  {
    slug: 'real-mums-real-stories-maddie',
    cover: 'c-community',
    label: 'Real Mums, Real Stories',
    tag: 'Community',
    title: 'Real Mums, Real Stories: Meet Maddie',
    body: "Melbourne-based beauty content creator Maddie on body confidence after baby, seeing the world differently, and the parenting motto she and her partner have quietly adopted.",
    readMinutes: 5,
    published: true,
    heroImage: '/250528880766010026 (1).JPG',
    heroImagePosition: 'center 30%',
    heroImageGrayscale: true,
    content: {
      hook: [
        "For many women, motherhood changes everything. For Melbourne-based beauty content creator Maddie, becoming a mum to her daughter Carmine has been transformative in ways she never expected.",
        "Nearly 14 months into motherhood, Maddie says she's genuinely loving this chapter of life - and the woman it's helped her become.",
        "\"Having Carmy has made me a better daughter, a more understanding sister, and a more supportive friend,\" she shares. \"I feel more self-aware and closer to the woman I've always wanted to be. This has been very unexpected but equally as welcome.\"",
      ],
      sections: [
        {
          heading: '"Motherhood strips you bare"',
          paragraphs: [
            "When asked to describe motherhood in one sentence, Maddie's answer is both simple and profound:",
            "\"Motherhood strips you bare and forces you to relearn what you thought you knew. Love has a new definition now, so does pain, so does connection.\"",
            "It's a sentiment many mums can relate to - the way motherhood challenges old versions of ourselves and creates space for entirely new perspectives.",
          ],
        },
        {
          heading: 'Finding confidence in a changing body',
          paragraphs: [
            "One of the biggest surprises for Maddie has been the confidence she's gained since becoming a mum.",
            "\"I didn't expect to feel more confident in my body now than I did pre-baby,\" she says.",
            "Rather than focusing on appearance, motherhood has given her a deep appreciation for what her body has achieved.",
            "\"Now when the soft, squishy skin on my hips spills over my waistband, it genuinely makes me smile. It's a reminder that Carmy was in there. It's worth celebrating.\"",
            "Her perspective is refreshing in a world that often pressures women to 'bounce back' after having children. Instead, she's choosing to honour the incredible journey her body has been through.",
          ],
        },
        {
          heading: 'Seeing the world differently',
          paragraphs: [
            "Perhaps the most unexpected lesson motherhood has taught Maddie is how connected she feels to other people.",
            "\"Every single person is here because a mum fought as hard as she could to birth them,\" she explains.",
            "Where she once saw strangers, she now sees someone's child.",
            "\"I wonder what their story is, and I hope they're doing okay.\"",
            "It's a beautiful reminder of the shared human experience that motherhood can bring into focus.",
          ],
        },
        {
          heading: 'Navigating motherhood online',
          paragraphs: [
            "Known for her honesty and openness online, Maddie admits that motherhood has changed the way she approaches sharing her life with her community.",
            "\"Motherhood is the best thing that's ever happened to me, and I do want to talk about it and share my experience, but for the first time, I'm nervous to overshare.\"",
            "As she navigates this new territory, she's learning how to balance authenticity with protecting her daughter.",
            "\"I'm trying to find a way that I can naturally weave motherhood into the content I already post and share things that I'm going through, rather than what Carmy is going through.\"",
          ],
        },
        {
          heading: 'More than how we look',
          paragraphs: [
            "For years, Maddie has built a platform around helping women feel comfortable in their own skin. Motherhood has only strengthened that message.",
            "\"It's shown me a multitude of reasons as to why the way we look is really far down the list of what's interesting about us as women.\"",
            "Even as she adjusts to life after breastfeeding, she approaches the changes with gratitude.",
            "\"WOW, how cool are these boobs that changed their shape and size so many times over the last year. They do look a little used and abused now, but what a privilege to have been able to breastfeed my baby.\"",
          ],
        },
        {
          heading: 'Advice for first-time mums',
          paragraphs: [
            "If she could go back and speak to herself as a new mum, Maddie's advice would be simple:",
            "\"You cannot control the uncontrollables, so don't waste your energy trying.\"",
            "After spending the first three months postpartum recovering from episiotomy complications, she wishes she had allowed herself more grace and rest.",
            "\"I think I tried to pretend I was fine and pushed myself to be okay out of stubbornness when I really should've just given my body the rest it needed.\"",
            "It's a powerful reminder that healing deserves just as much attention as caring for a newborn.",
          ],
        },
      ],
      closing: {
        heading: 'And finally...',
        paragraphs: [
          "Every family seems to have a parenting motto, and Maddie's is one that might make a few parents laugh.",
          "\"It's actually 'f*ck around and find out'. I don't actually say it to Carmy, but Matt and I have adopted it as our parenting style.\"",
          "Honest, funny, and deeply reflective, Maddie's story is a reminder that motherhood doesn't just change your life - it changes the way you see yourself, your body, and the world around you.",
          "And sometimes, those changes are the most beautiful surprises of all.",
        ],
      },
    },
  },
  {
    slug: 'real-mums-real-stories-marian',
    cover: 'c-community',
    label: 'Real Mums, Real Stories',
    tag: 'Community',
    title: 'Real Mums, Real Stories: Marian',
    body: "Marian's son arrived at 34 weeks, three hours after her first real contraction. A birth story about how quickly things can change, and the calm that came from being prepared for exactly that.",
    readMinutes: 6,
    published: true,
    heroImage: '/WhatsApp Image 2026-06-04 at 16.23.33 (1) (1).jpg',
    heroImagePosition: 'center 25%',
    heroImageGrayscale: true,
    content: {
      hook: [
        "Meet Marian. She's a Spanish expat who has called Melbourne home for the past decade, sharing her life with her partner Dan and their son Lucas — a very cheeky 16-month-old who is, in her words, the light of their lives.",
        "\"I am enjoying motherhood, but I definitely underestimated what it takes to raise a child,\" she says. \"I believe that parenthood is something you don't truly understand until you're experiencing it firsthand.\" Having recently returned to paid work, she's now navigating the particular challenge of balancing it all.",
        "Lucas arrived early, and fast. Here, Marian takes us back to the moment it began.",
      ],
      sections: [
        {
          heading: 'A slow start, then everything at once',
          paragraphs: [
            "At 33.5 weeks, Marian experienced PPROM — preterm premature rupture of membranes — and was hospitalised, told that labour could begin at any moment. For four days, nothing happened.",
            "\"Right at 34 weeks, I started feeling some 'sensations,'\" she remembers. \"Out of boredom, I asked my partner to start noting how often and for how long these sensations occurred.\" A pattern emerged. The sensations were mild, but something in her recognised what was starting. She arranged for a TENS machine to be delivered that afternoon, bracing herself for what she assumed would be a long labour.",
          ],
        },
        {
          heading: 'The birth plan that met reality',
          paragraphs: [
            "Marian hadn't written a formal birth plan, but she'd done the reading — books, podcasts, other women's stories — hoping to labour unmedicated for as long as she could and deliver vaginally.",
            "\"I gave birth interstate, away from home, which meant that some little things I was planning — like preparing my hospital bag, or adding personal touches to the birth suite, such as lighting and music — went out the window.\" Preparation, it turned out, meant something looser than she'd imagined.",
          ],
        },
        {
          heading: 'From barely dilated to pushing in three hours',
          paragraphs: [
            "Marian was moved to the birth suite not because labour was progressing, but because Lucas was showing signs of fetal bradycardia — a slow heart rate — and needed continuous monitoring. She wasn't yet dilated and hadn't begun contractions, but was confined to the bed regardless.",
            "\"All I wanted was to stand up and move around.\" She was given Panadol and codeine, and the doctors, cautious, told her not to get her hopes up — this could still be a long way off, and she might be sent back to the ward.",
            "\"Things escalated very quickly. The initial sensations turned into intense, painful contractions in no time. I remember closing my eyes and holding onto the bed rails.\" The urge to push arrived, and a senior midwife checked her cervix — completely closed just two hours before. Marian was ready to ask for an epidural, certain she was in for the long haul.",
            "\"The midwife said she could see the baby's head, and that the next contraction would be the moment to push. I could not believe it — everything happened in less than three hours.\" One detail stayed with her: the uncontrollable shaking in her legs, a surge of adrenaline she hadn't expected.",
          ],
        },
        {
          heading: 'The towel on her forehead',
          paragraphs: [
            "Throughout it all, Marian had her partner and the midwives beside her, and she felt supported and safe. Dan's job was to keep her cool with a wet hand towel — a task he took seriously.",
            "\"In fact, in our first family photo, I still had the towel stuck to my forehead, haha.\" Everything moved so fast, she says, that there was no time for any of the techniques they'd practised in their birth prep course. It didn't matter. What they had was enough.",
          ],
        },
        {
          heading: 'Meeting Lucas',
          paragraphs: [
            "Because Lucas was arriving at 34 weeks and small for his gestational age, Marian had asked for neonatologists to be present in case he needed support.",
            "\"I don't think I had to push very much for him to come out.\" He was taken straight to the waiting team and, very quickly, let out a big cry. \"I clearly remember seeing his little arms and legs startle a lot.\" Marian was fortunate enough to have a short window of skin-to-skin before he was moved to the special care nursery, Dan at his side the whole way.",
          ],
        },
        {
          heading: 'What she wishes she\'d known',
          paragraphs: [
            "Looking back, Marian feels at peace with how it unfolded. \"I believe that the way I prepared myself helped me understand what was happening from the start, keeping me calm and confident.\"",
            "The one thing she hadn't braced for was the possibility itself. \"I never imagined having a premature baby and the challenges we faced, so that is something I wish I knew a little bit more.\"",
          ],
        },
      ],
      closing: {
        heading: 'For anyone nervous about their own birth',
        paragraphs: [
          "\"That is a fair and normal feeling — just create space for it, the same way you feel excited. I recommend listening to other people's birth stories and keeping an open mind around how things will pan out. Trust your body, and trust the healthcare professionals supporting you through it.\"",
          "Thank you for sharing your story, Marian. Real Mums, Real Stories is a PAM Journal series celebrating the honest, unfiltered experiences of mums navigating this wild, beautiful season of life.",
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
    heroImagePosition: 'center 70%',
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
    title: 'Combination feeding: how to combine breast and formula feeding successfully',
    body: "Combination feeding - using both breast milk and formula - sits in a middle ground that rarely gets its own article. It's its own valid choice - here's how to make combination feeding work in practice.",
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
    title: 'Cluster feeding: what it is, why it happens in the evening, and how long it lasts',
    body: "Cluster feeding is one of the most misunderstood, under-explained, completely normal parts of early feeding - and the part most likely to make a new mother think her milk has dried up.",
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
    title: "Why you can't actually 'sleep when the baby sleeps' (and what to do instead)",
    body: "'Sleep when the baby sleeps' is the most given piece of advice to new parents - delivered with kindness, almost completely useless in practice. Here's why, and what actually helps with exhaustion instead.",
    readMinutes: 5,
    published: true,
    heroImage: '/blog-sleep-advice.jpeg',
    heroImagePosition: 'center 50%',
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
    title: 'Safe sleep guidelines for babies: SIDS prevention, simplified',
    body: "Safe sleep guidelines and SIDS prevention basics, explained clearly, once - so you don't have to hold it anxiously in your head.",
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
    title: "Baby only sleeps on you? What contact napping is, and why it's okay for now",
    body: "If your baby only sleeps on you, you're dealing with contact napping - one of the most common early sleep patterns. You've tried the cot seventeen times today. This article is for you.",
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
    title: 'Losing yourself after having a baby: what matrescence actually is',
    body: 'Matrescence is the profound psychological transformation of becoming a mother - and it explains why so many women feel like they\'ve lost themselves after having a baby. What it is, what it feels like, and what the other side looks like.',
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
    title: 'Postnatal anxiety symptoms: what it actually feels like from the inside',
    body: 'We have less language - and fewer known symptoms - for postnatal anxiety than postnatal depression. It often goes unrecognised, and can look like a mother who is very on top of things.',
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
    title: 'Your body after birth: an honest guide to postpartum recovery',
    body: "The version of postpartum recovery that gets talked about publicly is heavily edited. Here's the unedited version - from the first week to the stuff nobody tells you.",
    readMinutes: 6,
    published: true,
    heroImage: '/Untitled design beach babies.png',
    heroImagePosition: 'center 60%',
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
    title: 'Self-care for new mums: why it matters and how to actually fit it in',
    body: "When did you last do something just for you? Stop and try to answer it. Real self-care for new mums, for the ones who can't remember - and the small voice that says I don't have time for that.",
    readMinutes: 5,
    published: true,
    heroImage: '/Untitled design beach.jpg',
    heroImagePosition: 'center 40%',
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
  {
    slug: 'the-mch-nurse-visits-what-actually-happens',
    cover: 'c-newborn',
    label: 'The first six weeks',
    tag: 'Newborn',
    title: 'The MCH nurse visits: what actually happens (and how to prep in 2 minutes)',
    body: "The Maternal Child Health checks can feel like a pop quiz you didn't study for. Here's what they're really checking, and why the weigh-in is the least interesting part.",
    readMinutes: 6,
    published: true,
    heroImage: '/Untitled design pram.png',
    heroImagePosition: 'center 45%',
    content: {
      hook: [
        "There's a particular kind of dread that arrives the night before an MCH appointment. You find yourself trying to remember how many wet nappies there were yesterday, whether that constitutes 'enough,' and whether you're supposed to have a system for tracking any of this.",
        "You don't need a system. You need to know what they're actually looking for - and it's rarely the thing you're anxious about.",
      ],
      sections: [
        {
          heading: 'What the visits are actually for',
          subheading: "It's less exam, more check-in",
          paragraphs: [
            "The Maternal Child Health service (the name and schedule shift slightly by state, but the substance is the same) exists to catch things early - growth trends, feeding issues, developmental milestones, and how you're doing, not just the baby.",
            "The nurse isn't grading you. They're building a picture over time, which is why the same few things get checked at every visit: weight and length against the centile chart, feeding, sleep, and a general once-over of how things are tracking.",
          ],
        },
        {
          heading: 'The schedule, roughly',
          subheading: 'It varies by state, but the shape is similar',
          bullets: [
            'A home visit or early check in the first week or two, often while you\'re still finding your feet',
            'A 4-week check, then 8 weeks, 4 months, 8 months, 12 months, and 18 months as the common touchpoints',
            'Extra visits are always available if you\'re worried about anything in between - you don\'t need to wait for the scheduled one',
            'Immunisations are usually scheduled separately with your GP, but the nurse will often flag when they\'re due',
          ],
        },
        {
          heading: "The centile chart isn't a scoreboard",
          paragraphs: [
            "This is the part that trips up the most parents. A baby on the 15th percentile is not doing worse than a baby on the 85th - percentiles describe where your baby sits compared to other babies, not a target to climb toward.",
            "What the nurse actually watches for is the trend along your baby's own curve over time. A baby who tracks steadily along their own line, even a low one, is generally considered to be doing fine. A sudden drop across percentile lines is what prompts a closer look.",
          ],
        },
        {
          heading: 'What to actually bring',
          subheading: 'The 2-minute prep',
          bullets: [
            'Your baby\'s health record book (the one from hospital) - most of what they write goes straight in there',
            'A rough idea of feeds per day, not an exact log. "About every 3 hours" is a perfectly good answer',
            'Any specific worry, written down. It is astonishingly easy to forget the one thing you actually wanted to ask the second you sit down',
            'That\'s it. You do not need spreadsheets, apps, or a diary of every nappy',
          ],
        },
        {
          heading: 'The question under the question',
          paragraphs: [
            "Most nurses will ask, in some form, how you're going - not just the baby. Take that question seriously. It's one of the few structured moments in early parenthood where someone is professionally obligated to ask about you, and it's worth a real answer.",
            "If you're not okay, this is a legitimate place to say so. Maternal Child Health nurses are trained to hear it and know exactly where to point you next.",
          ],
        },
      ],
      closing: {
        heading: 'Before you go',
        paragraphs: [
          "The visit is not a test you can fail. It's a handful of measurements and a conversation, designed to catch things early and reassure you the rest of the time. Most appointments end with some version of 'everything looks great' - because most of the time, it does.",
          "Bring the book, bring your one real question, and let the rest be what it is: fifteen minutes with someone whose whole job is making sure you're not doing this alone.",
        ],
      },
    },
  },
  {
    slug: 'the-moro-reflex-explained',
    cover: 'c-newborn',
    label: 'The first six weeks',
    tag: 'Newborn',
    title: "The Moro reflex: why your baby flings their arms out like they're falling",
    body: "That dramatic full-body startle - arms thrown wide, then a cry - has a name, a purpose, and an expiry date. Here's what's actually happening.",
    readMinutes: 5,
    published: true,
    heroImage: '/Untitled design baby1.png',
    heroImagePosition: 'center 45%',
    content: {
      hook: [
        "You lay them down, gently, slowly, holding your breath the whole way - and just as their back touches the mattress, both arms fly out to the sides like they're bracing for a fall. Then the cry. Then you pick them back up, certain you've done something wrong.",
        "You haven't. This is the Moro reflex, one of the most dramatic-looking - and most normal - things a newborn does.",
      ],
      sections: [
        {
          heading: 'What it actually is',
          paragraphs: [
            "The Moro reflex is an involuntary startle response present from birth, triggered by a sudden change in position, a loud noise, or the sensation of falling. The arms fling outward, the fingers spread, the back arches slightly, and then the arms draw back in toward the body - usually followed by crying, because it's a genuinely startling sensation for a baby with no context for what just happened.",
            "It's one of several primitive reflexes doctors check for at birth precisely because its presence (and its disappearance on schedule) tells them something useful about neurological development.",
          ],
        },
        {
          heading: 'Why babies have it at all',
          paragraphs: [
            "The leading theory is that it's an evolutionary holdover - a grasping reflex that would once have helped a falling infant cling to a caregiver. Whether or not that's the full explanation, it serves as a useful, measurable sign that the nervous system is wiring up as expected.",
            "It's most active in the first couple of months and gradually fades as voluntary muscle control develops, usually disappearing somewhere between 3 and 6 months.",
          ],
        },
        {
          heading: 'What sets it off',
          bullets: [
            'Being laid down, even gently - the change in support is often enough',
            'A loud or sudden noise nearby',
            'A sudden bright light or shift in position',
            'Sometimes nothing you can identify at all - their own arm movement can startle them',
          ],
        },
        {
          heading: 'How to make bedtime a little less dramatic',
          bullets: [
            'Swaddling snugly (arms in) contains the startle and helps many babies settle faster',
            'Keep one hand on their chest for a beat after laying them down, rather than removing contact all at once',
            'Lower them slowly and land the bottom first, then the head, rather than a flat drop',
            'A supportive sleep environment with white noise can reduce how often the reflex fires from ambient sound',
          ],
        },
      ],
      closing: {
        heading: 'When to mention it to your MCH nurse',
        paragraphs: [
          "A strong, symmetrical Moro reflex in the early months is a good sign, not a concerning one. Worth flagging at a check-up if it seems absent altogether, noticeably one-sided, or hasn't faded by around 6 months - any of which your nurse can assess properly in context.",
          "For now, the flailing arms and the offended little cry are just your baby's nervous system doing exactly what it's supposed to. Swaddle if it helps, and know that you didn't startle them - their own arms did.",
        ],
      },
    },
  },
  {
    slug: 'newborn-jaundice-whats-normal',
    cover: 'c-newborn',
    label: 'The first six weeks',
    tag: 'Newborn',
    title: "Newborn jaundice: what's normal, what's not, and what the heel prick actually checks",
    body: "That golden tinge to their skin has a cause, a common timeline, and a clear line for when it needs more than watching. Here's how to tell where you sit on it.",
    readMinutes: 6,
    published: true,
    heroImage: '/WhatsApp Image 2026-07-24 at 13.48.00.jpeg',
    heroImagePosition: 'center 40%',
    content: {
      hook: [
        "Somewhere around day two or three, a midwife holds your baby up to the window, presses a finger gently into their skin, and says the word jaundice for the first time. It's an alarming word to hear about your two-day-old, mostly because nobody explained it beforehand.",
        "It's also extremely common - more than half of all newborns show some degree of it. Here's what's actually happening under that golden tinge.",
      ],
      sections: [
        {
          heading: 'What it actually is',
          paragraphs: [
            "Jaundice happens when a substance called bilirubin builds up faster than a newborn's liver can process it. Bilirubin is a normal byproduct of red blood cells breaking down, and adult livers clear it easily - but a newborn liver is still getting up to speed, so a temporary backlog is common and, in most cases, entirely harmless.",
            "It usually appears first on the face, then can move down the chest and body as levels rise, which is why the check involves pressing gently on the skin to see the colour underneath.",
          ],
        },
        {
          heading: 'The usual timeline',
          bullets: [
            "Physiological jaundice (the common kind) typically appears day 2-3 and peaks around day 4-5",
            'It usually resolves on its own within 1-2 weeks as the liver catches up',
            "Breastfed babies can run a slightly longer, milder course - sometimes called breastmilk jaundice - which is generally not a reason to stop breastfeeding",
            'Jaundice appearing in the first 24 hours of life is different and always warrants prompt review, as it points to a different underlying cause',
          ],
        },
        {
          heading: 'What the heel prick and blood tests are checking',
          paragraphs: [
            "If jaundice is visible, hospital staff will often measure bilirubin levels - sometimes with a light sensor placed on the skin, sometimes with a small blood sample from the heel. The number matters less on its own than in combination with your baby's age in hours and their risk factors, which is why the result is plotted on a chart rather than read as a flat pass or fail.",
            "Levels that climb into a higher range for their age are usually treated with phototherapy - special blue light that helps the body break bilirubin down faster - either in hospital or, in milder cases, with a portable light blanket at home.",
          ],
        },
        {
          heading: 'What to actually watch for at home',
          bullets: [
            'Yellowing spreading to the arms, legs, or the whites of the eyes',
            'A baby who is unusually sleepy, hard to wake for feeds, or feeding poorly',
            'Fewer wet or dirty nappies than expected',
            'Jaundice that seems to be getting more yellow rather than less past day 5-7',
            'Any of these are worth a same-day call to your midwife, MCH nurse, or GP - not a wait-and-see',
          ],
        },
      ],
      closing: {
        heading: 'The reassuring part',
        paragraphs: [
          "For the vast majority of babies, jaundice is a passing, well-understood stage of a liver getting up to speed - not a sign that anything went wrong. It's monitored closely precisely because it's common, not because it's usually serious.",
          "If in doubt, get it checked. That's what the appointments are for, and 'probably fine but let's just look' is a completely reasonable reason to call.",
        ],
      },
    },
  },
  {
    slug: 'starting-solids-how-to-know-when',
    cover: 'c-feeding',
    label: 'Feeding, decoded',
    tag: 'Feeding',
    title: "Starting solids: how to actually know when they're ready",
    body: "Not every 4-month-old reaching for your dinner is ready for it. The real readiness signs, and why the calendar date matters less than you'd think.",
    readMinutes: 6,
    published: true,
    heroImage: '/WhatsApp Image 2026-07-24 at 11.10.07 (1).jpeg',
    heroImagePosition: 'center 40%',
    content: {
      hook: [
        "Somewhere around the four-month mark, your baby stares at your toast with an intensity usually reserved for religious experiences, and everyone in a five-metre radius says some version of looks like someone's ready for solids.",
        "Reaching for food and watching you eat are actually not the readiness signs most professionals look for. Here's what genuinely matters.",
      ],
      sections: [
        {
          heading: 'The three signs that actually count',
          bullets: [
            'Sitting with minimal support and holding their head steady and upright',
            'Losing the tongue-thrust reflex - the automatic push that shoves anything but liquid back out of their mouth',
            'Showing real interest in food itself, not just in you - opening their mouth, leaning forward, trying to grab',
          ],
        },
        {
          heading: 'Why age alone is not the marker',
          paragraphs: [
            "Current guidance points to around 6 months as the general starting window, with the emphasis on 'around' doing a lot of work. Some babies show every readiness sign at 5.5 months; others aren't there until closer to 6.5. Both are within normal range.",
            "Starting significantly before these signs are present isn't about willpower or a baby being advanced - a baby who can't yet sit stably or has an active tongue-thrust reflex simply isn't physically set up to manage food safely yet, regardless of how interested they look.",
          ],
        },
        {
          heading: 'What the first weeks are actually for',
          paragraphs: [
            "In the early stages, solids are about exploration and practice, not nutrition - breastmilk or formula is still doing the heavy lifting for a while yet. That reframe takes a lot of pressure off a first attempt that ends in more food on the floor than in the baby.",
            "Iron-rich first foods are worth prioritising once you do start, since a baby's iron stores from birth begin to deplete around this age - well-cooked meat, iron-fortified cereal, or legumes are common starting points, alongside whatever approach (purees, baby-led weaning, or a mix) suits your family.",
          ],
        },
        {
          heading: 'A few things that trip people up',
          bullets: [
            "A baby waking more at night around this age is not on its own a sign they need solids - sleep and hunger cues get conflated more than they should",
            'Gagging is a normal, noisy safety reflex and looks far more alarming than actual choking - it\'s worth knowing the difference before you start',
            "There's no need to introduce foods in a strict rotation or order - allergen introduction guidance has moved toward earlier, not later, introduction of common allergens",
          ],
        },
      ],
      closing: {
        heading: 'The honest version',
        paragraphs: [
          "There is no prize for starting early, and no harm in a few extra weeks if the signs aren't quite there yet. The signs exist precisely so you don't have to guess.",
          "When they do line up, it's messy and slow and mostly beside the point for a while - and that's exactly how it's supposed to go.",
        ],
      },
    },
  },
  {
    slug: 'mastitis-what-it-feels-like',
    cover: 'c-feeding',
    label: 'Feeding, decoded',
    tag: 'Feeding',
    title: "Mastitis: what it actually feels like, and what actually helps",
    body: "A sore red patch, a fever that comes out of nowhere, and a feeling like the flu hit in the space of an hour. Here's how to recognise it early and what genuinely helps.",
    readMinutes: 6,
    published: true,
    heroImage: '/WhatsApp Image 2026-07-24 at 13.55.56.jpeg',
    heroImagePosition: 'center 30%',
    content: {
      hook: [
        "It tends to arrive fast. One feed you're fine, a few hours later there's a hot, tender patch on one breast, and by evening you're shivering under a blanket in July feeling like you've been hit by a truck. That's mastitis, and it's far more common than anyone mentions before it happens to you.",
        "It's also very treatable, especially caught early - which is the whole point of knowing what to look for before you're too foggy to Google it.",
      ],
      sections: [
        {
          heading: 'What it actually is',
          paragraphs: [
            "Mastitis is inflammation of breast tissue, usually triggered by a blocked milk duct that isn't clearing properly - milk backs up, the surrounding tissue becomes inflamed, and sometimes an infection develops on top of that. It's most common in the early weeks of breastfeeding but can turn up at any point, including well into an established feeding routine.",
            "The tissue affected is often wedge-shaped, radiating out from the nipple, because that's the shape of a milk duct under pressure.",
          ],
        },
        {
          heading: 'The signs, in the order they usually show up',
          bullets: [
            'A firm, tender, often red patch on one breast - sometimes with a hard lump you can feel',
            'The area feels noticeably warmer than the rest of the breast',
            'Flu-like symptoms arriving quickly - chills, aching, fatigue',
            'A fever, often 38°C or higher, that seems to come from nowhere',
            'Pain that\'s worse on one side, sometimes sharp during a feed',
          ],
        },
        {
          heading: 'What actually helps in the first 24 hours',
          bullets: [
            'Keep feeding or expressing from the affected side regularly - stopping altogether tends to make it worse, not better',
            'Start feeds on the affected side when possible, when baby\'s suck is strongest',
            'Warmth before a feed can help milk flow; cold packs after a feed can ease pain and swelling',
            'Gentle massage toward the nipple during a feed, rather than aggressive kneading, which can worsen inflammation',
            'Rest as much as is physically possible - genuinely difficult with a newborn, but the body needs it here',
          ],
        },
        {
          heading: 'When it needs more than home care',
          paragraphs: [
            "If a fever persists past 24 hours, symptoms worsen rather than ease, or there's visible pus or red streaking, it's time to see a GP - antibiotics are often needed once an infection has taken hold, and delaying doesn't make it resolve faster.",
            "Recurrent mastitis is worth a proper look at latch and positioning with a lactation consultant, since an underlying feeding issue is often what's causing ducts to block in the first place.",
          ],
        },
      ],
      closing: {
        heading: 'The part that gets missed',
        paragraphs: [
          "Nobody tells you how suddenly it hits, or how much like the flu it can feel, which means the first time it happens most women assume they're just getting sick. If you're breastfeeding and the flu arrives alongside a sore red patch on one side, mastitis is worth considering before anything else.",
          "Caught early and treated properly, it usually clears within a few days. It is unpleasant, not dangerous, and not a sign you're doing anything wrong.",
        ],
      },
    },
  },
  {
    slug: 'the-four-month-sleep-regression',
    cover: 'c-sleep',
    label: 'Sleep, honestly',
    tag: 'Sleep',
    title: "The 4-month sleep regression: why it happens, and why it doesn't actually reverse",
    body: "One week they're sleeping in decent stretches. The next, they're up every 45 minutes. It's not a phase you wait out - it's a permanent shift in how sleep works.",
    readMinutes: 6,
    published: true,
    heroImage: '/3EA45EE2-7392-4C3A-93D0-B4E624605A0E_L0_001-11_5_2026, 10_25_42 am.jpg',
    heroImagePosition: 'center 50%',
    content: {
      hook: [
        "You'd found a rhythm. Maybe not perfect, but workable - a few solid stretches, a nap that reliably happened. Then, seemingly overnight, all of it fell apart. Frequent waking, short naps, a baby who seems to fight sleep they clearly need.",
        "This is the so-called 4-month regression, and the name is slightly misleading - it's less a temporary dip and more a permanent upgrade to how your baby's sleep works.",
      ],
      sections: [
        {
          heading: "What's actually happening",
          paragraphs: [
            "Around 3-5 months, babies' sleep architecture matures from a simpler newborn pattern into an adult-like cycle of light and deep sleep stages. That's a genuine developmental leap - but it comes with a side effect: your baby now briefly surfaces to lighter sleep between cycles, the same way adults do, and at this age they don't yet have the skills to drift back down on their own.",
            "This is why it's often described as not reversing - because it isn't a temporary glitch that resolves by itself. What resolves is your baby gradually learning how to settle themselves back down between cycles.",
          ],
        },
        {
          heading: 'What it tends to look like',
          bullets: [
            'Waking every 45 minutes to 2 hours overnight, often needing help to resettle each time',
            'Naps that used to last an hour dropping to 20-30 minutes',
            'More fussiness and difficulty settling at bedtime',
            'A baby who seems more alert and engaged during awake windows - the flip side of the same developmental leap',
          ],
        },
        {
          heading: 'What genuinely helps',
          bullets: [
            'A consistent, simple pre-sleep routine, so their body starts recognising the cues for sleep, not just the environment',
            'Watching awake windows rather than the clock - an overtired baby fights sleep harder, not less',
            'A dark, cool, white-noise-supported sleep space, which supports the transition between sleep cycles',
            "Giving them a brief pause before rushing in at every stir - some resettling happens on its own, even if it doesn't feel like it will",
          ],
        },
        {
          heading: 'What this is not',
          paragraphs: [
            "It's not a sign you've done anything wrong, and it's not a signal that solids, a sleep-training method, or a different mattress will make it vanish overnight. It's neurological development happening on schedule, showing up as a very disrupted few weeks.",
            "Most families see things ease within 2-6 weeks as babies get some practice linking sleep cycles - not because the regression itself ends, but because the new skill catches up.",
          ],
        },
      ],
      closing: {
        heading: 'The reframe that helps most',
        paragraphs: [
          "This stretch is hard specifically because it's not a malfunction - it's your baby's brain doing something genuinely new, badly, before it does it well. That's true of most developmental leaps; this one just happens to land squarely on your sleep.",
          "It passes. Not by waiting it out unchanged, but by giving them the conditions to practise the new skill - and by accepting that a few rough weeks here don't undo the good sleep that came before, or the sleep that's coming.",
        ],
      },
    },
  },
  {
    slug: 'overtired-vs-undertired',
    cover: 'c-sleep',
    label: 'Sleep, honestly',
    tag: 'Sleep',
    title: "Overtired vs undertired: how to actually tell the difference",
    body: "A baby who won't settle could be exhausted, or barely tired at all - and the fixes for each are opposites. Here's how to tell which one you're looking at.",
    readMinutes: 5,
    published: true,
    heroImage: '/EA0B4075-208C-49EB-A11E-DC18327A0D7A_L0_001-29_5_2026, 5_54_56 pm.jpg',
    heroImagePosition: 'center 30%',
    content: {
      hook: [
        "Bedtime is a fight. Again. And the instinct is always the same: they must be overtired, push the next sleep earlier. Except sometimes that makes it worse, because the actual problem was the opposite - they weren't tired enough yet.",
        "Telling these two apart is one of the more genuinely useful skills in early sleep, mostly because the fixes point in opposite directions.",
      ],
      sections: [
        {
          heading: 'What overtired usually looks like',
          bullets: [
            'A "second wind" - suddenly wired, giggly, or hyperactive right when sleep should be approaching',
            'Arching away from you, crying hard as soon as they\'re laid down',
            'Rubbing eyes, yawning, or glassy-eyed alongside the fussing',
            'Waking in a short amount of time after finally going down, upset, and hard to resettle',
          ],
        },
        {
          heading: 'What undertired usually looks like',
          bullets: [
            'Calm but wide awake at bedtime - chatting, playing, showing no sleepy cues at all',
            'Taking a long time to fall asleep, but not distressed while doing it',
            'Waking early from a nap or in the morning, alert and ready to go rather than groggy',
            'Generally content - the resistance is more "I\'m not ready" than "I\'m falling apart"',
          ],
        },
        {
          heading: 'Why they get confused so easily',
          paragraphs: [
            "Both can look like 'fighting sleep' from the outside, and both can involve crying at bedtime - which is exactly why the instinct to just push bedtime earlier doesn't always land. An overtired baby has flooded their system with stress hormones that make settling harder, not easier. An undertired baby simply hasn't built up enough sleep pressure yet to fall asleep easily.",
            "The clearest tell is usually what happens in the half hour before the meltdown: a wired, manic energy points to overtired; a chatty, calm alertness points to undertired.",
          ],
        },
        {
          heading: 'What to actually do about each',
          bullets: [
            'Overtired: move the next sleep earlier and shorten the awake window, keep the wind-down extra calm and low-stimulation',
            'Undertired: extend the awake window slightly, add some active, engaging time beforehand rather than winding down too early',
            "Either way, small adjustments (10-15 minutes) work better than big swings - age-appropriate awake windows are a good starting reference, not a rulebook",
          ],
        },
      ],
      closing: {
        heading: 'The trial-and-error part nobody mentions',
        paragraphs: [
          "This isn't something you diagnose once and solve forever - awake windows shift as babies grow, so what worked last month may need nudging again this month. Treat it as an ongoing, small experiment rather than a fixed formula.",
          "If bedtime is a fight, look at the 30 minutes before it rather than the clock. The clues are usually right there.",
        ],
      },
    },
  },
  {
    slug: 'the-six-week-check-what-to-expect',
    cover: 'c-wellbeing',
    label: 'Self & restoration',
    tag: 'Wellbeing',
    title: "The six-week check: what to expect (and what to actually ask about)",
    body: "It's ten minutes, mostly about the baby, and easy to walk out of having said 'fine' when you weren't. Here's how to use it properly.",
    readMinutes: 5,
    published: true,
    heroImage: '/Untitled design ash mila.png',
    heroImagePosition: 'center 30%',
    content: {
      hook: [
        "The six-week postpartum check is often the last dedicated appointment a new mum has for herself before the focus shifts entirely to the baby's schedule of visits. It's worth knowing what it's actually for, because it's easy to sit through it, say 'yeah, going okay' on autopilot, and leave having missed the point.",
        "This is meant to be about you. Here's how to make sure it actually is.",
      ],
      sections: [
        {
          heading: "What's usually covered",
          bullets: [
            'Physical recovery check - healing from birth, whether vaginal or caesarean, and any stitches or scar tissue',
            'A general check of blood pressure, weight, and any ongoing symptoms',
            'A conversation (sometimes brief) about mood and emotional wellbeing',
            'Contraception options, if and when that becomes relevant to you',
            "An opportunity to raise anything that's been bothering you physically since birth",
          ],
        },
        {
          heading: "Why it's easy to underuse this appointment",
          paragraphs: [
            "Six weeks in, most parents are running on interrupted sleep and have gotten very good at giving the socially expected answer to how are you. 'Fine' is a fast, low-friction response, and appointments often move quickly, which makes it tempting to default to it rather than actually pause and answer honestly.",
            "The check is only as useful as what you bring to it. A GP or obstetrician can only respond to what's raised in the room.",
          ],
        },
        {
          heading: 'Worth actually asking about',
          bullets: [
            'Any ongoing pain, numbness, or issues around a scar (perineal or caesarean) - these can take longer than six weeks to fully settle and are worth tracking',
            'Pelvic floor concerns - leaking, heaviness, or pain, which are common and treatable, not something to just live with',
            "Your mood, honestly - not just whether you cried recently, but whether you feel like yourself, whether anxiety feels manageable, whether you're finding any moments of enjoyment",
            "When it's reasonable to return to exercise, and what to ease back into first",
            "Anything about feeding, sleep-deprivation, or your own body that's been nagging at you since the birth",
          ],
        },
        {
          heading: 'A note on honesty in the room',
          paragraphs: [
            "If you write down your real answer before you walk in - not the polite one - you're far more likely to say it out loud when asked. It sounds simple, but it works, because the moment itself can be disorienting with a baby in the room and a list of the baby's own needs to get through first.",
          ],
        },
      ],
      closing: {
        heading: 'Before you go',
        paragraphs: [
          "This appointment exists because your recovery matters as its own thing, not just as a means to caring for the baby. Use the ten minutes for you - ask the question you've been putting off, describe the thing you've been minimising, and let someone whose job it is to help, actually help.",
          "If it doesn't feel like enough time, or the answer you get doesn't sit right, you're allowed to book a follow-up. This isn't a one-shot opportunity.",
        ],
      },
    },
  },
  {
    slug: 'mum-guilt-where-it-comes-from',
    cover: 'c-wellbeing',
    label: 'Self & restoration',
    tag: 'Wellbeing',
    title: "Mum guilt: where it actually comes from, and why it's lying to you",
    body: "That constant low hum of not doing enough, not being enough - even when, by any reasonable measure, you are. Here's what's actually driving it.",
    readMinutes: 6,
    published: true,
    heroImage: '/Untitled design 25.png',
    heroImagePosition: 'center 45%',
    content: {
      hook: [
        "You went back to work and felt guilty for leaving. You stayed home and felt guilty for not contributing financially. You put on the TV so you could shower and felt guilty about the screen time. You didn't put on the TV and felt guilty for being short-tempered by dinner.",
        "Notice the pattern: the guilt shows up regardless of the choice. That's the first clue it was never really about the choice at all.",
      ],
      sections: [
        {
          heading: "It's not actually a reaction to failure",
          paragraphs: [
            "Genuine guilt is meant to be a signal that you've done something wrong - it points you toward repair. Mum guilt behaves differently: it shows up in response to completely reasonable, often good decisions, which means it isn't functioning as an accurate moral compass. It's functioning as background noise.",
            "That noise has a source, and it's rarely internal. It's cultural - an enormous, largely unspoken standard of what a 'good mother' does, is available for, and sacrifices, absorbed over decades before you ever had a baby of your own.",
          ],
        },
        {
          heading: 'Where the standard actually comes from',
          bullets: [
            "Decades of media and advertising depicting an endlessly patient, always-present, self-sacrificing mother as the default 'good' version",
            'A comparison culture, amplified by social media, where you see everyone else\'s curated best moment against your own real, messy ones',
            'Generational scripts about what mothers are supposed to prioritise, often absorbed long before becoming a parent yourself',
            'The reality that most of this standard was never achievable by an actual human being with actual limits',
          ],
        },
        {
          heading: 'A useful test to run it through',
          paragraphs: [
            "Next time it shows up, ask: would I judge a friend this harshly for doing the exact same thing? The answer is almost always no. That gap - between the compassion you'd extend to someone else and the harshness you apply to yourself - is the guilt talking, not an accurate account of what happened.",
            "Another test: is there an alternative decision available that wouldn't have triggered guilt from some direction? Often there isn't, which tells you the guilt was never really evaluating the decision. It was just there, waiting for any decision to land on.",
          ],
        },
        {
          heading: 'What actually helps',
          bullets: [
            'Naming it out loud when it shows up - "this is mum guilt, not a real problem" - which puts a small amount of distance between you and the feeling',
            'Asking whether the standard you\'re measuring yourself against is one any human could actually meet',
            'Talking to other parents honestly - guilt tends to lose power the moment you realise how universal it is',
            "Redirecting the energy toward the version of good enough that's actually sustainable, rather than the version that exists only in theory",
          ],
        },
      ],
      closing: {
        heading: 'The truth underneath it',
        paragraphs: [
          "Mum guilt persists not because you're failing, but because the bar it's measuring you against was never realistic to begin with. It was built out of impossible expectations, and it shows up whether you meet them or not - which is the clearest evidence that it was never really about you.",
          "You're allowed to make a reasonable decision and feel fine about it. The guilt showing up anyway doesn't make the decision wrong. It just makes the guilt loud.",
        ],
      },
    },
  },
  {
    slug: 'the-baby-book-youll-actually-keep',
    cover: 'c-memories',
    label: 'Memory keeping',
    tag: 'Memories',
    title: "The baby book you'll actually keep updated (hint: it's not the beautiful one)",
    body: "The gorgeous linen-bound baby book gets three entries before it stalls in a drawer. Here's why the low-effort version is the one that survives the first year.",
    readMinutes: 5,
    published: true,
    heroImage: '/WhatsApp Image 2026-07-24 at 11.34.02 (1).jpeg',
    heroImagePosition: 'center 65%',
    content: {
      hook: [
        "Somewhere in most nurseries sits a beautiful baby book - hardcover, cream pages, a spot for 'baby's first haircut' - with exactly three entries in it, all from the first fortnight. After that, life happens, and the book quietly closes for good.",
        "This isn't a failure of intention. It's a mismatch between the format and how memory-keeping actually survives year one.",
      ],
      sections: [
        {
          heading: 'Why the beautiful version usually stalls',
          paragraphs: [
            "A physical baby book requires you to remember it exists, locate a pen, sit down without a baby in your arms, and write in complete, considered sentences - all at a moment when you have none of those things in abundance. It also demands you decide, in the moment, whether something is 'book-worthy,' which adds a layer of curation most exhausted parents don't have bandwidth for.",
            "The things that actually get captured in the first year are the ones that require the least friction between the moment happening and the moment it's recorded.",
          ],
        },
        {
          heading: 'What actually gets kept, in practice',
          bullets: [
            'A voice memo recorded in the 4 seconds after a first laugh, not written up later from memory',
            'A quick photo of the growth chart at the MCH visit, not a beautifully copied-out measurement',
            'A one-line note typed into your phone the moment something happens, expanded (or not) later',
            'A shared album with your partner where either of you can drop something in without narrating it',
          ],
        },
        {
          heading: 'A lower-effort system that actually works',
          paragraphs: [
            "Rather than one beautiful book, many parents find it easier to have one low-friction capture point - a single app or album - that takes almost no decision-making to use. Capture first, curate later, if you ever get around to it at all. A voice note or photo taken in the moment holds more of the actual memory than a tidy paragraph written three days after the fact anyway.",
            "If you do want a physical keepsake eventually, it's far easier to build one retrospectively from a year of quick captures than to have kept a polished diary in real time.",
          ],
        },
      ],
      closing: {
        heading: 'Permission to let the pretty book go',
        paragraphs: [
          "The book with three entries is not a record of you failing to document your baby's first year. It's a record of a format that was never going to survive contact with actual newborn life. The memories exist either way - they're just scattered across voice notes, camera rolls, and half-typed notes instead of one linen cover.",
          "That's not a lesser record. In a lot of ways, it's a truer one.",
        ],
      },
    },
  },
  {
    slug: 'things-youre-sure-youll-never-forget',
    cover: 'c-memories',
    label: 'Memory keeping',
    tag: 'Memories',
    title: "The things you're sure you'll never forget (but will)",
    body: "The smell of their head, the exact sound of their newborn cry, the weight of them asleep on your chest. You will forget more of it than you think - unless you catch it now.",
    readMinutes: 5,
    published: true,
    heroImage: '/WhatsApp Image 2026-07-24 at 11.10.06 (3).jpeg',
    heroImagePosition: 'center 30%',
    content: {
      hook: [
        "Right now, certain things feel unforgettable - the particular smell of the top of their head, the exact pitch of their newborn cry, how light they were the first time you held them. It feels impossible that any of it could fade.",
        "Most of it will fade anyway. Not because you didn't love it enough to hold onto it, but because memory doesn't work that way - and knowing that now is the only real chance you have to catch some of it before it goes.",
      ],
      sections: [
        {
          heading: 'Why even the vivid stuff fades',
          paragraphs: [
            "Memory isn't a recording - it's a reconstruction, rebuilt slightly differently each time you recall it, and it fades fastest for sensory details like smell, sound, and exact physical sensation, which is precisely the category most newborn memories fall into.",
            "This is why parents of older kids so often say I wish I'd written that down - not because they were careless, but because nobody warns you in the moment that the vividness you're feeling right now has an expiry date.",
          ],
        },
        {
          heading: 'What tends to go first',
          bullets: [
            'The exact sound of their newborn cry, which changes within weeks and is almost impossible to recall accurately later',
            'The specific weight and feel of them asleep on your chest at 2 weeks versus 2 months',
            'The little sounds before real words - the specific babble, the way they said a sibling\'s name wrong',
            'The chaos and texture of an ordinary Tuesday, which gets flattened into "it was a blur" rather than remembered in detail',
          ],
        },
        {
          heading: 'What actually holds up over time',
          bullets: [
            'A voice recording, which captures pitch and sound in a way memory simply cannot replicate',
            'A photo taken in a genuinely ordinary moment, not just the posed ones',
            'A quick note typed in the moment, in your own words, rather than reconstructed weeks later',
            'A specific, small detail rather than a general impression - "smelled like the lavender wash" beats "smelled amazing"',
          ],
        },
        {
          heading: 'The habit that makes the difference',
          paragraphs: [
            "You don't need a system, a schedule, or a beautiful process. You need a 10-second habit: when something strikes you as unforgettable, capture it right then, in whatever form is fastest - a voice memo, a photo, a one-line note. The feeling of certainty that you'll remember it is, ironically, the exact moment memory is least reliable.",
          ],
        },
      ],
      closing: {
        heading: 'A gentle nudge, not a guilt trip',
        paragraphs: [
          "This isn't about capturing everything - that's exhausting and beside the point. It's about catching the handful of things that matter most to you, in the 10 seconds when you still can, rather than trusting a feeling of certainty that won't last as long as you think.",
          "You won't remember all of it. Nobody does. But the bits you do catch now will be the ones you actually have later.",
        ],
      },
    },
  },
  {
    slug: 'tongue-tie-what-to-look-for',
    cover: 'c-newborn',
    label: 'The first six weeks',
    tag: 'Newborn',
    title: "Tongue tie: what to look for, and what actually happens next",
    body: "Painful feeds and a baby who can't seem to get a deep latch, no matter what you try. Here's what tongue tie actually is, and what the assessment and fix involve.",
    readMinutes: 6,
    published: true,
    heroImage: '/WhatsApp Image 2026-07-24 at 11.10.05 (2).jpeg',
    heroImagePosition: 'center 30%',
    content: {
      hook: [
        "Every feed hurts. Not a little tender - genuinely painful, toe-curling pain, and your nipples look worse each day rather than better. You've tried every latch position a lactation consultant showed you and something still feels stuck.",
        "This is one of the more common reasons feeding stays painful past the first fortnight, and it has a name, a straightforward assessment, and a fix that's simpler than most parents expect.",
      ],
      sections: [
        {
          heading: 'What tongue tie actually is',
          paragraphs: [
            "Tongue tie (ankyloglossia) happens when the thin strip of tissue under the tongue, the lingual frenulum, is shorter or tighter than usual, restricting how far the tongue can move. Because a deep, effective latch depends on the tongue extending well past the lower gum, a restricted tongue can make it hard for a baby to draw milk efficiently, however good their positioning is.",
            "It's present from birth and varies widely in severity - some cases barely affect feeding at all, while others make a comfortable latch nearly impossible no matter what you try.",
          ],
        },
        {
          heading: 'Signs worth getting checked',
          bullets: [
            'Persistent nipple pain or damage that doesn\'t improve with repositioning',
            "A clicking sound during feeds, or milk leaking from the corners of the baby's mouth",
            'A baby who tires quickly at the breast, feeds very frequently, or seems to fall asleep before finishing',
            "Slow weight gain despite frequent, seemingly effective feeds",
            "A tongue that looks heart-shaped when crying, or can't extend past the lower gum",
          ],
        },
        {
          heading: 'How it gets assessed',
          paragraphs: [
            "A lactation consultant, GP, or paediatrician can usually assess tongue mobility with a simple physical check alongside watching a full feed - the feed itself often tells them more than the anatomy alone, since some ties restrict feeding significantly and others barely at all.",
            "This is why two babies with a similar-looking tie can have very different feeding experiences, and why the decision to treat is based on function, not appearance.",
          ],
        },
        {
          heading: "What the release procedure actually involves",
          paragraphs: [
            "If a release is recommended, the procedure itself (a frenotomy) is typically very quick - often just seconds - using sterile scissors or a laser on the thin tissue, usually with no anaesthetic needed given how few nerve endings are in that area for young babies.",
            "Most babies can feed immediately afterward, and many parents report an improvement in latch comfort within the first few feeds, though it can take a little time and some stretching exercises for the tongue to build new movement patterns.",
          ],
        },
      ],
      closing: {
        heading: 'If something feels off',
        paragraphs: [
          "Painful feeding is common in the early days, but pain that isn't easing by two to three weeks, despite good positioning, is worth a proper assessment rather than something to push through indefinitely.",
          "Tongue tie is well understood, straightforward to check for, and - when it is the cause - one of the more fixable reasons feeding has been hard. It's worth ruling in or out early rather than assuming pain is just part of the deal.",
        ],
      },
    },
  },
  {
    slug: 'newborn-skin-whats-normal',
    cover: 'c-newborn',
    label: 'The first six weeks',
    tag: 'Newborn',
    title: "Newborn skin: the peeling, spots and rashes that are all completely normal",
    body: "Blotchy cheeks, tiny white bumps, skin that peels like they've been sunbathing. Newborn skin looks alarming and almost none of it is. Here's the field guide.",
    readMinutes: 5,
    published: true,
    heroImage: '/WhatsApp Image 2026-07-24 at 11.10.06 (1).jpeg',
    heroImagePosition: 'center 60%',
    content: {
      hook: [
        "Somewhere in the first week, you notice a rash across their cheeks, or tiny white dots across their nose, or skin peeling off their hands like they've just come back from a beach holiday - and you spiral slightly, because nothing in the birth prep class covered this.",
        "Newborn skin goes through an enormous amount of change in a very short time, and the vast majority of it is completely ordinary. Here's a quick guide to what's what.",
      ],
      sections: [
        {
          heading: 'The really common ones',
          bullets: [
            'Peeling skin, especially on the hands and feet - very common in the first 1-2 weeks as the outer layer sheds, more noticeable in babies born after their due date',
            "Milia - tiny white bumps across the nose, chin, or cheeks, caused by trapped skin flakes, which clear on their own within a few weeks without any treatment",
            "Erythema toxicum - blotchy red patches, sometimes with a small white or yellow centre, that come and go over the first week or two and are entirely harmless",
            "Baby acne - small red or white bumps, usually on the cheeks, appearing around 2-4 weeks as maternal hormones work their way out of the baby's system",
            "Cradle cap - flaky, sometimes yellowish patches on the scalp, which respond well to gentle brushing with a soft brush and a bit of baby-safe oil",
          ],
        },
        {
          heading: 'A little less common, still usually fine',
          bullets: [
            "Stork bites or salmon patches - pink marks on the eyelids, forehead, or nape of the neck, which fade over months to a couple of years",
            "Mongolian spots - flat, bluish-grey patches, most common on the lower back or buttocks, which fade over the first few years and are simply a variation in skin pigmentation",
            'Heat rash - small red bumps in skin folds or covered areas, usually resolving once the area is cooled and less bundled',
          ],
        },
        {
          heading: 'What actually warrants a call',
          bullets: [
            'A rash accompanied by fever, lethargy, or poor feeding',
            "Blistering, weeping, or skin that looks infected rather than just irritated",
            "Yellowing of the skin spreading beyond the face (worth reading alongside a jaundice check)",
            "Any rash you genuinely can't place, especially if it's spreading quickly or your baby seems unwell with it",
          ],
        },
      ],
      closing: {
        heading: 'The short version',
        paragraphs: [
          "Newborn skin is adjusting to life outside the womb, and most of what shows up in the first few weeks - peeling, spots, blotches - is a normal, temporary part of that adjustment, not a sign of a problem.",
          "If in doubt, a photo and a quick message to your MCH nurse or GP is a perfectly reasonable way to get peace of mind, no appointment required for most of it.",
        ],
      },
    },
  },
  {
    slug: 'oversupply-and-fast-let-down',
    cover: 'c-feeding',
    label: 'Feeding, decoded',
    tag: 'Feeding',
    title: "Oversupply and fast let-down: when there's too much milk, not too little",
    body: "A baby who chokes, splutters, and pulls off crying at every feed might not have a latch problem at all - they might be dealing with a flood, not a drought.",
    readMinutes: 6,
    published: true,
    heroImage: '/WhatsApp Image 2026-07-24 at 14.15.40.jpeg',
    heroImagePosition: 'center 50%',
    content: {
      hook: [
        "Most feeding advice assumes the problem is not enough milk. So when your baby is spluttering, gulping, pulling off mid-feed and crying, or feeding for two minutes and looking done, it's easy to assume something is wrong with your supply in the opposite direction you'd expect.",
        "Oversupply and a fast, forceful let-down are genuinely common and come with their own specific set of fixes - most of which are the opposite of what you'd do for low supply.",
      ],
      sections: [
        {
          heading: 'What it tends to look like',
          bullets: [
            'Choking, gulping, or coughing at the start of a feed as milk lets down forcefully',
            'A baby who pulls off crying repeatedly, especially early in a feed',
            'Green, frothy, or explosive nappies, sometimes alongside a fussy, gassy baby',
            "A baby who gains weight quickly and seems to prefer shorter, more frequent feeds",
            'Milk spraying or leaking heavily at let-down, sometimes from both sides',
          ],
        },
        {
          heading: 'Why it happens',
          paragraphs: [
            "Milk supply is largely driven by demand in the early weeks - frequent feeding and pumping signal the body to produce more. If feeds have been very frequent, or if pumping has been added on top of feeding to 'build supply' unnecessarily, the body can end up producing more than the baby needs at any one sitting, which combines with a strong let-down reflex to create a fast, overwhelming flow.",
            "It's not a flaw or an overreaction from your body - it's simply supply calibrated slightly ahead of demand, which is a much easier problem to adjust than the reverse.",
          ],
        },
        {
          heading: 'What actually helps',
          bullets: [
            'Feeding in a laid-back or reclined position, letting gravity work against the flow rather than with it',
            'Taking the baby off briefly at the start of a let-down and letting the initial spray subside into a cloth before relatching',
            'Offering one breast per feed (or per block of a few hours) rather than switching sides every time, so the second breast has time to settle',
            "Avoiding extra pumping 'just in case' - additional stimulation tends to reinforce the oversupply rather than resolve it",
            'Burping more frequently mid-feed, since a fast flow often means more air is swallowed along with the milk',
          ],
        },
        {
          heading: 'When to get support rather than adjusting solo',
          paragraphs: [
            "A lactation consultant can help distinguish oversupply from other causes of a fussy, gulping baby, and can guide a gradual reduction in supply safely, since dropping it too fast can risk blocked ducts or mastitis.",
            "This is a case where professional input is genuinely useful - the fixes are specific enough that guessing can take longer than it needs to.",
          ],
        },
      ],
      closing: {
        heading: 'The reassurance in this one',
        paragraphs: [
          "A baby who splutters and pulls off crying isn't rejecting you or the feed - they're dealing with more flow than they can comfortably manage in the moment, which is a solvable, well-understood problem, not a sign that feeding is failing.",
          "Small adjustments to position and pattern make a real difference here, often faster than most other feeding issues. This one tends to respond quickly once you know what you're actually looking at.",
        ],
      },
    },
  },
  {
    slug: 'bottle-refusal-why-it-happens',
    cover: 'c-feeding',
    label: 'Feeding, decoded',
    tag: 'Feeding',
    title: "Bottle refusal: why it happens, and how to work through it",
    body: "A baby who happily breastfeeds but screams the second a bottle appears is one of the more stressful feeding curveballs - especially with a return to work looming. Here's what usually helps.",
    readMinutes: 6,
    published: true,
    heroImage: '/WhatsApp Image 2026-07-24 at 14.05.24.jpeg',
    heroImagePosition: 'center 30%',
    content: {
      hook: [
        "You've done everything right - warmed the milk, tried a few different teats, timed it for when they're not overtired - and they still turn their head away, arch their back, or cry the moment the bottle touches their lips. Meanwhile the calendar has a return-to-work date circled, and the pressure is mounting.",
        "Bottle refusal is common, rarely permanent, and usually has an identifiable reason behind it once you know what to look for.",
      ],
      sections: [
        {
          heading: 'The usual culprits',
          bullets: [
            "Being offered the bottle by the breastfeeding parent - many babies simply refuse when the person they associate with breastfeeding is holding it, even if everything else is right",
            "Timing - trying it when a baby is already very hungry and frustrated, or not hungry at all, rather than in a calm, moderately-hungry window",
            "Teat flow that's mismatched to what they're used to - too fast can overwhelm, too slow can frustrate",
            "Temperature or taste differences, especially with expressed milk that's been frozen, or a switch to formula",
            "A general preference for the breast that's more about comfort and closeness than the mechanics of feeding",
          ],
        },
        {
          heading: 'What tends to help',
          bullets: [
            'Having someone other than the breastfeeding parent offer the bottle, ideally from another room, at least for the first several attempts',
            "Trying it during a calm window, not at the peak of hunger or overtiredness",
            "Experimenting with temperature, position (upright, semi-reclined), and teat shape rather than assuming it's one fixed problem",
            "Letting the baby explore the teat at their own pace rather than pushing it in - some babies do better holding and mouthing it first",
            'Trying a cup or spoon of expressed milk as an alternative if the bottle itself is the sticking point',
          ],
        },
        {
          heading: 'How much time to actually give it',
          paragraphs: [
            "If a return to work or a break away is approaching, starting the introduction 2-4 weeks ahead gives enough room for a few different approaches without last-minute panic. A single failed attempt doesn't mean it won't work - most babies who initially refuse do eventually take a bottle, though a small number hold out until someone other than mum is offering it out of genuine hunger.",
            "It's worth accepting that this can take longer than expected, and that's not a reflection of anything being done wrong.",
          ],
        },
      ],
      closing: {
        heading: "If it's still not budging",
        paragraphs: [
          "Persistent refusal, especially alongside reduced wet nappies or weight concerns, is worth raising with a GP, paediatrician or lactation consultant rather than continuing to troubleshoot alone - there's a difference between a baby working through a preference and a baby not getting enough intake.",
          "Most of the time, this resolves with a bit of patience, a change of who's holding the bottle, and a few different approaches tried without pressure. Babies are more adaptable than the panic of week one suggests.",
        ],
      },
    },
  },
  {
    slug: 'the-dummy-what-actually-helps',
    cover: 'c-sleep',
    label: 'Sleep, honestly',
    tag: 'Sleep',
    title: "The dummy: what actually helps, and when (if ever) to ditch it",
    body: "Contested at every playgroup, backed by genuine research, and eventually something you'll need an exit plan for. Here's the honest rundown.",
    readMinutes: 6,
    published: true,
    heroImage: '/WhatsApp Image 2026-07-24 at 14.09.32.jpeg',
    heroImagePosition: 'center 35%',
    content: {
      hook: [
        "Few small pieces of plastic generate as much unsolicited opinion as a dummy. Someone will tell you it ruins teeth, someone else will tell you it saved their sanity, and somewhere in there is what the actual evidence says - which is more reassuring, and more specific, than either extreme.",
        "Here's what's actually known about dummies: the genuine benefits, the real considerations, and a sane way to think about when to stop.",
      ],
      sections: [
        {
          heading: "What's actually in its favour",
          bullets: [
            "Research has linked dummy use during sleep with a reduced risk of SIDS, which is why sleep guidelines in many countries now recommend offering one at nap and bedtime once breastfeeding is well established",
            "It gives babies a self-soothing tool that doesn't require a full feed or a parent every time they need to settle",
            'It can genuinely reduce crying and support settling for many babies, particularly in the newborn stage',
          ],
        },
        {
          heading: 'The real considerations, not the myths',
          bullets: [
            "Introducing a dummy too early, before breastfeeding is well established (commonly cited as around 3-4 weeks), can interfere with latch and supply for some babies - timing matters more than the dummy itself",
            "Prolonged, all-day use well past infancy is associated with dental and speech development considerations, which is the actual basis for most dentist concerns, not early infant use",
            "A dummy that falls out repeatedly overnight can become its own sleep disruptor, since a baby who relies on it may wake fully needing it replaced",
          ],
        },
        {
          heading: 'A sane approach to using one',
          bullets: [
            'Wait until breastfeeding is comfortable and established, unless a health professional has advised otherwise for a specific reason',
            'Offer it at sleep times rather than as a constant, all-day soother, which limits dependence while keeping the safety benefit',
            "Don't reinsert it obsessively overnight for a baby who's stirring but not fully awake - give a moment to see if they resettle without it first",
          ],
        },
        {
          heading: 'When and how to actually stop',
          paragraphs: [
            "There's no universal deadline, but many parents aim to wind down dummy use somewhere between 6 months and 2 years, often timed around a milestone that gives a natural story - a house move, a birthday, a 'dummy fairy.'",
            "Gradual approaches (limiting it to sleep only, then to just falling asleep, then removing it once asleep) tend to go more smoothly than a sudden cold-turkey stop, though plenty of families find a clean break works fine too. There's no single right way - only what your particular child tolerates.",
          ],
        },
      ],
      closing: {
        heading: 'The permission slip',
        paragraphs: [
          "You don't owe anyone an explanation for using one, and you don't owe anyone an explanation for not. The evidence supports it as a genuinely useful tool with a sensible off-ramp later - not the moral question it sometimes gets treated as at playgroup.",
          "Use it if it helps. Lose it when it's time. Both of those calls are yours to make.",
        ],
      },
    },
  },
  {
    slug: 'nap-transitions-how-to-know',
    cover: 'c-sleep',
    label: 'Sleep, honestly',
    tag: 'Sleep',
    title: "Nap transitions: how to know when your baby's actually ready to drop one",
    body: "Fighting a nap that used to be easy doesn't always mean it's time to cut it - sometimes it means the opposite. Here's how to tell a transition from a rough patch.",
    readMinutes: 5,
    published: true,
    heroImage: '/WhatsApp Image 2026-07-24 at 13.44.58.jpeg',
    heroImagePosition: 'center 50%',
    content: {
      hook: [
        "For weeks, naps ran like clockwork. Then, seemingly overnight, bedtime for a nap becomes a battle, or a nap that used to run an hour drops to twenty minutes. The instinct is often to assume it's time to drop a nap altogether - but that's not always what's actually going on.",
        "Nap transitions are real, but they're also one of the most over-diagnosed changes in early sleep. Here's how to tell a genuine transition from a temporary rough patch.",
      ],
      sections: [
        {
          heading: 'The usual transition points',
          bullets: [
            "4 to 3 naps: often somewhere around 5-7 months",
            "3 to 2 naps: commonly between 6-9 months",
            "2 to 1 nap: typically 12-18 months, often the trickiest of the transitions",
            "1 nap to none: usually somewhere between 3-5 years, much later than most parents expect",
          ],
        },
        {
          heading: "Signs it's a genuine transition",
          bullets: [
            'Consistently fighting the same nap (usually the first, or the last) for more than a week or two, not just a rough couple of days',
            'Taking a long time to fall asleep at that nap despite clear tiredness earlier in the day',
            'That nap starting to push bedtime later and later, throwing off the whole day\'s rhythm',
            'The pattern holding steady across a week or more, rather than one-off exceptions around teething, illness, or travel',
          ],
        },
        {
          heading: "Signs it's probably not a transition (yet)",
          bullets: [
            'A rough patch coinciding with a cold, a growth spurt, teething, or a developmental leap - these all temporarily disrupt sleep without meaning anything has permanently changed',
            'Only one bad day here and there, rather than a sustained pattern',
            "A baby who's below the typical age range for that particular transition",
          ],
        },
        {
          heading: 'How to actually make the shift',
          paragraphs: [
            "When it is time, most transitions go more smoothly as a gradual shift rather than an abrupt cut - stretching the awake windows around the dropped nap slowly over 1-2 weeks, and expecting a temporarily crankier, more overtired baby while their body adjusts to the new rhythm.",
            "It's also worth expecting some back-and-forth - a few days of managing fine on the new pattern, then a day where the old nap count would clearly have helped. That's normal during the adjustment window, not a sign you got the timing wrong.",
          ],
        },
      ],
      closing: {
        heading: 'The most useful rule of thumb',
        paragraphs: [
          "If the pattern has held for more than two weeks and lines up roughly with the expected age range, it's probably a genuine transition. If it's a few rough days during a cold or a leap, it's probably just a rough patch - hold steady on the current nap count and it usually settles back.",
          "Either way, it passes. Nap schedules are one of the most fluid parts of the first few years, and needing to adjust them again next month doesn't mean anything went wrong this month.",
        ],
      },
    },
  },
  {
    slug: 'relationship-after-baby',
    cover: 'c-wellbeing',
    label: 'Self & restoration',
    tag: 'Wellbeing',
    title: "The relationship after baby: why it changes, and how to actually look after it",
    body: "You're both exhausted, both stretched thin, and somehow supposed to keep connecting as partners on top of everything else. Here's why that's harder than anyone warns you, and what genuinely helps.",
    readMinutes: 6,
    published: true,
    heroImage: '/Untitled design josh ash.png',
    heroImagePosition: 'center 40%',
    content: {
      hook: [
        "Somewhere between the feeds and the sleep deprivation and the sheer logistics of keeping a small human alive, you look up and realise you and your partner have barely had a real conversation that wasn't about the baby in weeks. That's not a sign your relationship is in trouble. It's an almost universal part of this particular season.",
        "Understanding why it happens makes it easier to protect the relationship without adding yet another thing to feel guilty about not doing enough of.",
      ],
      sections: [
        {
          heading: "Why it shifts so much, so fast",
          paragraphs: [
            "A new baby doesn't just add a person to the household - it adds an enormous amount of physical exhaustion, decision fatigue, and logistics, most of which fall unevenly and shift week to week. Research consistently shows relationship satisfaction dips for most couples in the first year after a baby, not because the relationship is weaker, but because the conditions around it are genuinely harder.",
            "Add to that the loss of spontaneous time together, disrupted sleep affecting patience and emotional regulation for both of you, and often diverging experiences of new parenthood (particularly around recovery, feeding, and identity), and the dip makes a lot of sense.",
          ],
        },
        {
          heading: 'The friction points worth naming early',
          bullets: [
            'An uneven mental load - one partner tracking appointments, supplies, and the baby\'s needs while the other assumes things are covered',
            "Different tolerances for exhaustion, which can look like one partner 'coping' better when they're simply hitting their limit later",
            "Resentment building quietly around small, repeated imbalances rather than one big blow-up",
            "Physical and emotional touch dropping off simultaneously, leaving both partners feeling less connected without either raising it",
          ],
        },
        {
          heading: 'What actually helps, in this exact season',
          bullets: [
            'A short, regular check-in - even five minutes - specifically about how you\'re both doing as a couple, separate from logistics about the baby',
            'Naming the invisible load out loud rather than expecting it to be noticed - most partners genuinely don\'t see what they\'re not tracking themselves',
            "Lowering the bar for connection - a cup of tea together while the baby naps counts, it doesn't need to be a date night",
            'Assuming good intent during this stretch - most conflict here comes from exhaustion and mismatched loads, not from anything deeper going wrong',
          ],
        },
        {
          heading: "When it's more than tiredness",
          paragraphs: [
            "A temporary dip in connection is common and expected. Ongoing contempt, persistent resentment, or a sense that one partner has fully checked out is worth addressing directly, and couples counselling in the first year postpartum is common and useful, not a last resort.",
          ],
        },
      ],
      closing: {
        heading: 'The reassurance in the data',
        paragraphs: [
          "Most couples report their relationship satisfaction recovering, often exceeding pre-baby levels, once the most physically demanding stretch eases - usually somewhere in the first two years. The dip is close to universal, not a sign of a specific problem with your particular relationship.",
          "Protecting the relationship in this season doesn't require date nights and grand gestures. It requires small, regular moments of actually seeing each other, even in five-minute increments, until there's more room for the rest.",
        ],
      },
    },
  },
  {
    slug: 'unsolicited-advice-how-to-handle-it',
    cover: 'c-wellbeing',
    label: 'Self & restoration',
    tag: 'Wellbeing',
    title: "Unsolicited advice: how to handle the opinions nobody asked for",
    body: "Everyone from the supermarket stranger to your own mother has a view on how you're doing this. Here's why it happens, and a few responses that actually work.",
    readMinutes: 5,
    published: true,
    heroImage: '/WhatsApp Image 2026-07-24 at 11.11.44 (1).jpeg',
    heroImagePosition: 'center 50%',
    content: {
      hook: [
        "You've been a parent for six days and already have opinions from a stranger in the supermarket queue about your baby's outfit, your mother-in-law about your feeding choice, and a well-meaning friend about your sleep routine - none of it requested, all of it delivered with total confidence.",
        "Unsolicited parenting advice is one of the most universally reported frustrations of new parenthood, and there's a reason it's so relentless - understanding that reason makes it a lot easier to let most of it go.",
      ],
      sections: [
        {
          heading: "Why it's so relentless",
          paragraphs: [
            "Parenting is one of the few areas where almost everyone has personal experience, which makes people feel qualified to weigh in even when circumstances, generations, and evidence have moved on considerably since their own experience.",
            "It's also often well-intentioned rather than critical - many people genuinely believe they're being helpful, or are recreating a moment of connection from their own early parenting days, even when the delivery lands as judgment.",
          ],
        },
        {
          heading: "The responses that actually work",
          bullets: [
            '"That\'s interesting, we\'re doing it this way for now" - acknowledges without inviting debate',
            '"I\'ll keep that in mind" - a genuinely useful closing line that ends the exchange without conflict',
            "A simple thank you, said warmly, which surprises people enough that they rarely push further",
            'Redirecting to the baby - "isn\'t she a good sleeper" - which shifts focus without addressing the advice at all',
          ],
        },
        {
          heading: 'When it comes from someone close to you',
          paragraphs: [
            "Advice from a parent, in-law, or close friend often carries more weight, precisely because the relationship matters and their opinion isn't easy to brush off with a one-liner. A direct, private conversation - \"I know you mean well, but I need to make these calls myself right now\" - tends to land better than deflecting in the moment.",
            "It's also worth remembering that agreeing to disagree is allowed. You don't need them to concede the advice was wrong. You just need them to stop repeating it.",
          ],
        },
        {
          heading: 'The filter worth applying',
          paragraphs: [
            "Not all advice is unsolicited nonsense - some of it is genuinely useful, especially from people who've been through very similar circumstances recently. The filter isn't who's speaking, it's whether it's relevant to your actual situation, your actual baby, and your actual values. Most of what triggers real frustration fails that filter immediately.",
          ],
        },
      ],
      closing: {
        heading: 'The bit worth holding onto',
        paragraphs: [
          "You are allowed to nod, say thanks, and do the complete opposite the second they're out of earshot. Politeness is not agreement, and a pleasant exchange in the supermarket doesn't obligate you to change a single thing about how you're raising your child.",
          "You know your baby better than the stranger in the queue. That's not arrogance. That's just true.",
        ],
      },
    },
  },
  {
    slug: 'writing-letters-to-your-child',
    cover: 'c-memories',
    label: 'Memory keeping',
    tag: 'Memories',
    title: "Writing letters to your child: a small habit with a big payoff later",
    body: "A few lines, written every so often, that turn into one of the most treasured things you'll ever hand them. Here's the low-effort version that actually gets done.",
    readMinutes: 5,
    published: true,
    heroImage: '/WhatsApp Image 2026-07-24 at 11.10.06 (2).jpeg',
    heroImagePosition: 'center 30%',
    content: {
      hook: [
        "Somewhere, in the future, your child will be old enough to read something you wrote about them as a baby - and there is almost nothing that lands harder, in the best way, than a parent's own words from a time they can't remember themselves.",
        "Writing letters to your child sounds like one more thing to add to an already full plate. Done in the lowest-effort way possible, it's actually one of the easiest memory-keeping habits there is.",
      ],
      sections: [
        {
          heading: "Why it matters more than it seems like it would",
          paragraphs: [
            "A letter captures something photos and milestone charts don't: what you were actually thinking and feeling at that exact moment, in your own voice, before hindsight smooths it over. Years later, that voice - unpolished, specific, present-tense - is often more moving to an adult child than any photo could be.",
            "It also becomes a record for you as much as for them - a way of remembering who you were as a new parent, not just who your baby was as a baby.",
          ],
        },
        {
          heading: 'The version that actually gets written',
          bullets: [
            "Skip the beautiful stationery and the pressure to write something profound - a few honest lines typed into your phone counts completely",
            'Write on any prompt that\'s easy to remember - a birthday, a hard day, a random Tuesday when something struck you',
            "Don't wait for something big to happen - some of the most treasured letters are about perfectly ordinary days",
            'One line is enough on the days you have nothing more. Consistency matters more than length',
          ],
        },
        {
          heading: 'What to actually write about, when you\'re stuck',
          bullets: [
            'What they\'re like right now - their laugh, their current obsession, the thing they do that only they do',
            'What\'s hard about this season, honestly, not just the highlight reel',
            "Something you hope for them, or something you're learning about yourself through them",
            "A specific moment from that day or week, described in detail rather than summarised",
          ],
        },
        {
          heading: 'Where to actually keep them',
          paragraphs: [
            "A shared note on your phone, a simple document, or a dedicated app all work equally well - the format matters far less than whether it's easy enough to actually use. The letters you never write because the system was too precious are worth nothing; the messy, imperfect ones you actually finish are worth everything.",
          ],
        },
      ],
      closing: {
        heading: 'The moment this is really for',
        paragraphs: [
          "This isn't really about the letters landing perfectly today. It's about a future moment - a birthday, a wedding, a hard day of their own - when your own words from this exact season become something they didn't know they needed.",
          "You don't need to write often, or well. You just need to write something, sometimes, in your own real voice. That's the whole thing.",
        ],
      },
    },
  },
  {
    slug: 'memories-on-the-hard-days',
    cover: 'c-memories',
    label: 'Memory keeping',
    tag: 'Memories',
    title: "Memories on the hard days: why the tough moments deserve capturing too",
    body: "It's easy to reach for the camera on the good days and put it away on the hard ones. Here's why the hard days are worth keeping a record of as well.",
    readMinutes: 5,
    published: true,
    heroImage: '/WhatsApp Image 2026-07-24 at 11.11.43 (1).jpeg',
    heroImagePosition: 'center 50%',
    content: {
      hook: [
        "The instinct on a genuinely hard day - the one where the baby won't settle, you haven't showered, and everything feels like too much - is to want the day over, not documented. Memory-keeping tends to happen on the good days, when there's something photogenic to capture, and quietly skip the rest.",
        "But the hard days are as much a part of the real story as the good ones, and there's a real case for capturing at least some of them too - not for anyone else, but for you.",
      ],
      sections: [
        {
          heading: 'Why the highlight-reel-only approach backfires later',
          paragraphs: [
            "If every kept memory is a good moment, the record you build ends up telling a slightly false story - one that, looking back later, can make early parenthood look easier than it actually was, and can make your own struggle at the time feel less valid in hindsight.",
            "Capturing some of the hard days, even briefly, creates a truer, more useful record - one that can genuinely help you (or a friend going through it, or even your child one day) understand how hard, and how survivable, that season really was.",
          ],
        },
        {
          heading: "What this doesn't mean",
          paragraphs: [
            "This isn't a suggestion to document every rough moment in detail, or to force reflection during a genuinely difficult day when all you need is to get through it. It's a gentle nudge to occasionally note the hard days too, in whatever low-effort way fits - not to dwell, but to keep the record honest.",
          ],
        },
        {
          heading: 'Low-effort ways to capture a hard day',
          bullets: [
            'A single line, typed later that night: "today was really hard because..." - no elaboration required',
            'A voice memo talking through the day as a form of processing, which doubles as a record',
            'A photo of the mess, the unwashed dishes, the exhausted 4pm slump - unglamorous, but true',
            "Simply noting the date and a word or two - 'hard day, teething' is enough to jog the full memory later",
          ],
        },
        {
          heading: 'What it gives you later',
          paragraphs: [
            "Looking back at a genuinely hard stretch, once it's passed, tends to bring a specific kind of relief - proof that you got through something real, not a vague sense that things were 'a bit tough.' That proof matters, especially in the moments down the track when you doubt whether you're managing as well as you actually are.",
          ],
        },
      ],
      closing: {
        heading: 'A fuller, truer record',
        paragraphs: [
          "The good days deserve capturing, and so do the hard ones - not in equal measure, and not with equal detail, but enough that the record you build reflects what this season actually was, not just its best moments.",
          "You don't need to feel anything profound about a hard day to jot it down. You just need thirty seconds and the honesty to say it was hard. That's the whole record, and it's worth having.",
        ],
      },
    },
  },
  {
    slug: 'newborn-sleep-schedule-week-by-week',
    cover: 'c-newborn',
    label: 'The first six weeks',
    tag: 'Newborn',
    title: "Newborn sleep schedule: what's normal week by week (and when it starts to settle)",
    body: "There's no strict newborn sleep schedule in the first weeks - just wide, normal ranges. Here's what an average newborn sleep pattern actually looks like, week by week.",
    readMinutes: 7,
    published: true,
    heroImage: '/Untitled design (18).png',
    heroImagePosition: 'center 40%',
    relatedTool: {
      label: 'full week-by-week sleep guide',
      description: 'Total sleep, wake windows and feeds for every stage from 1 to 12 weeks, plus an FAQ on the questions that come up most.',
      href: '/newborn-sleep-schedule',
    },
    content: {
      hook: [
        "Search 'newborn sleep schedule' and you'll find charts with tidy blocks of colour, implying your baby should be asleep from 7pm to 7am with two neat naps in between. Reality looks nothing like that in the early weeks, and comparing your baby to the chart is a fast way to feel like you're doing something wrong.",
        "Here's a more honest week-by-week guide to newborn sleep patterns - what's typical, what's a wide normal range, and roughly when a more predictable schedule actually starts to emerge.",
      ],
      sections: [
        {
          heading: 'Weeks 1-2: no schedule, and that\'s expected',
          paragraphs: [
            "Total sleep in the first fortnight is high - often 16-18 hours across 24 hours - but it comes in short, unpredictable bursts of 2-4 hours, day and night, with no meaningful difference between the two yet. Newborns haven't developed circadian rhythm, the internal body clock that eventually differentiates day from night sleep.",
            "There is no useful newborn sleep schedule to follow here. Feed-based sleep cycles, not clock time, are the only rhythm that matters right now.",
          ],
        },
        {
          heading: 'Weeks 3-6: the first hints of pattern',
          paragraphs: [
            "Total sleep stays similar, but stretches occasionally lengthen, particularly overnight, as babies' stomachs grow and feeds become more efficient. Some babies start to show a longer stretch of 4-5 hours somewhere in the night, though plenty don't yet - both are within normal range.",
            "This is also when the evening witching hour tends to peak, which can make early-night sleep look worse even as overnight sleep is quietly starting to improve.",
          ],
        },
        {
          heading: 'Around 8-12 weeks: circadian rhythm starts to kick in',
          paragraphs: [
            "This is usually the first point where a genuine day-night distinction starts to emerge, driven by melatonin production maturing. Naps may start to loosely cluster, and a longer overnight stretch (often 5-6 hours) becomes more common, though still highly variable baby to baby.",
            "This is a good stage to start light, flexible sleep-time cues - dimming lights in the evening, a simple wind-down routine - to support the rhythm that's beginning to develop, without expecting a rigid schedule yet.",
          ],
        },
        {
          heading: 'Rough total sleep guide by age',
          bullets: [
            'Newborn (0-3 months): around 14-17 hours across 24 hours, in unpredictable chunks',
            '3-6 months: around 12-15 hours, with naps starting to consolidate into a more visible pattern',
            'By 6 months: many babies are having 3 naps trending toward 2, with a longer overnight stretch becoming more typical',
          ],
        },
      ],
      closing: {
        heading: 'The most useful mindset shift',
        paragraphs: [
          "In the newborn stage, following your baby's cues - feed, brief awake window, sleep, repeat - will get you further than trying to force a schedule that their body isn't developmentally ready for yet. The predictable rhythm most sleep charts promise does come, usually somewhere in the 8-16 week range, just later and messier than the charts suggest.",
          "If sleep still feels chaotic at 6 or 8 weeks, that's not a sign anything's wrong. It's a sign your baby is exactly where most babies are at that age.",
          "Want the fuller breakdown - exact stats for every stage from 1 to 12 weeks, plus the questions that come up most? See the full guide below.",
        ],
      },
    },
  },
  {
    slug: 'how-to-swaddle-a-baby-safely',
    cover: 'c-newborn',
    label: 'The first six weeks',
    tag: 'Newborn',
    title: "How to swaddle a baby safely: a step-by-step guide",
    body: "Learning how to swaddle a baby properly can genuinely improve sleep - but done incorrectly, it carries real risks. Here's the safe method, step by step.",
    readMinutes: 6,
    published: true,
    heroImage: '/WhatsApp Image 2026-07-24 at 14.19.55.jpeg',
    heroImagePosition: 'center 40%',
    content: {
      hook: [
        "A good swaddle can be the difference between a baby who startles themselves awake every twenty minutes and one who sleeps a solid stretch. A bad one can be a genuine safety risk. The gap between the two often comes down to a few specific details most people are never taught properly.",
        "Here's how to swaddle a baby safely, step by step, along with the guidelines that actually matter.",
      ],
      sections: [
        {
          heading: 'Why swaddling helps',
          paragraphs: [
            "Swaddling recreates the snug containment of the womb and contains the Moro (startle) reflex, which otherwise regularly wakes young babies from sleep. Done correctly, it can meaningfully improve both settling and sleep duration in the first few months.",
          ],
        },
        {
          heading: 'The safe swaddle, step by step',
          bullets: [
            'Lay a lightweight, breathable swaddle blanket in a diamond shape, with the top corner folded down',
            'Place baby on their back, shoulders just below the folded edge',
            'Bring one arm down by their side (not across the chest) and wrap that side\'s fabric snugly across the body and tucked underneath',
            'Repeat with the other arm on the opposite side',
            'Fold the bottom point up and tuck it in, leaving room at the hips for legs to bend up and out - never straight and tightly bound',
            'Check that you can fit two to three fingers between the swaddle and baby\'s chest - snug, not restrictive',
          ],
        },
        {
          heading: 'The non-negotiable safety rules',
          bullets: [
            "Always place a swaddled baby on their back to sleep, every single time",
            "Hip room matters - a swaddle that forces straight, tightly bound legs increases the risk of hip dysplasia; look for 'hip-healthy' certified swaddle products if using a wearable version",
            "Stop swaddling the arms as soon as there are any signs of rolling, generally around 8-12 weeks but varies by baby - a baby who can roll but is swaddled arms-in is at risk of rolling onto their front and being unable to push up",
            "Never add loose blankets on top of a swaddle, and keep the room at a safe, moderate temperature to avoid overheating",
            "Check the swaddle isn't loosening and covering the face during sleep",
          ],
        },
        {
          heading: 'Signs it\'s time to transition out',
          paragraphs: [
            "The moment a baby shows any rolling attempt, even one-directional, it's time to stop arm swaddling and move to an arms-out option or a sleep bag, regardless of age. This is the single most important safety cut-off in the whole swaddling process.",
          ],
        },
      ],
      closing: {
        heading: 'The short version',
        paragraphs: [
          "A safe swaddle is snug around the chest, loose around the hips, always paired with back sleeping, and retired the moment rolling begins. Get those details right and it's one of the more genuinely useful early sleep tools available.",
          "If in doubt about technique, ask your midwife or MCH nurse to check your swaddle in person once - it's a five-minute conversation that's worth having.",
        ],
      },
    },
  },
  {
    slug: 'breastfeeding-latch-how-to-fix-a-painful-latch',
    cover: 'c-feeding',
    label: 'Feeding, decoded',
    tag: 'Feeding',
    title: "Breastfeeding latch: how to get a good latch (and fix a painful one)",
    body: "A good breastfeeding latch shouldn't hurt past the first few seconds. If it does, here's what a proper latch looks like and how to actually fix a bad one.",
    readMinutes: 6,
    published: true,
    heroImage: '/WhatsApp Image 2026-07-24 at 13.47.59.jpeg',
    heroImagePosition: 'center 40%',
    content: {
      hook: [
        "You've heard it a dozen times: 'if it hurts, the latch is wrong.' True, but not exactly useful when you're staring down a baby who seems attached fine and it still feels like broken glass every time they feed.",
        "A good breastfeeding latch has specific, checkable features - not just a vague feeling of rightness. Here's what to actually look for, and how to fix it when it's off.",
      ],
      sections: [
        {
          heading: 'What a good latch actually looks like',
          bullets: [
            'A wide open mouth before latching, not a small, tight one - aim for baby to take a large mouthful of breast, not just the nipple',
            'More of the areola visible above baby\'s top lip than below their bottom lip - the latch should be asymmetrical, aimed at the lower jaw',
            "Lips flanged outward, not tucked in or pursed",
            "Rhythmic, deep jaw movement that reaches the ear, with audible swallowing, not rapid shallow sucking only at the front of the mouth",
            "A nipple that comes out rounded after a feed, not flattened, creased, or blanched white",
          ],
        },
        {
          heading: 'The most common latch fix',
          paragraphs: [
            "If pain starts immediately and doesn't ease within the first 30-60 seconds, unlatch (a clean finger in the corner of the mouth breaks the seal) and try again rather than pushing through. Repeatedly feeding on a bad latch is what causes the damage that then makes every subsequent feed worse.",
            "Bring baby to the breast, not the breast to baby - a common error is leaning forward to post the nipple into baby's mouth, which usually produces a shallow, front-of-mouth latch. Instead, hold baby close with their nose level with the nipple, wait for a wide gape, and bring them onto the breast quickly, chin first.",
          ],
        },
        {
          heading: 'Positions worth trying if it\'s still not working',
          bullets: [
            'Laid-back (biological nurturing) position - reclining back with baby tummy-down on your chest, letting gravity and their own instincts help them find the breast',
            'Rugby/football hold - baby tucked under your arm at your side, useful after a caesarean or for smaller babies who need more head support',
            "Cross-cradle hold - supporting baby's head with the opposite hand to the feeding breast, which gives more precise control over positioning while learning",
          ],
        },
        {
          heading: 'When to get hands-on help',
          paragraphs: [
            "If pain persists past the first couple of weeks despite trying different positions, or if there's visible nipple damage, cracking, or bleeding, a lactation consultant can watch a full feed and spot what's actually happening - which is often something small and highly fixable that's very hard to diagnose on your own.",
            "Tongue tie is also worth ruling out if latch pain persists despite good positioning, since it's one of the more common underlying causes.",
          ],
        },
      ],
      closing: {
        heading: 'The reassurance worth holding onto',
        paragraphs: [
          "Some tenderness in the very first days, as your nipples adjust, is common. Ongoing, sharp, or worsening pain is not something you have to just push through - it's a specific, fixable problem in the vast majority of cases.",
          "A good latch is learnable for both of you. It rarely comes perfectly on the first try, and that's not a reflection of anything you're doing wrong.",
        ],
      },
    },
  },
  {
    slug: 'formula-feeding-guide-how-to-prepare-bottles-safely',
    cover: 'c-feeding',
    label: 'Feeding, decoded',
    tag: 'Feeding',
    title: "Formula feeding guide: how to choose a formula and prepare bottles safely",
    body: "Choosing a formula and getting bottle prep right shouldn't feel this complicated. A clear, judgment-free formula feeding guide for exhausted parents.",
    readMinutes: 6,
    published: true,
    heroImage: '/WhatsApp Image 2026-07-24 at 14.19.55 (1).jpeg',
    heroImagePosition: 'center 40%',
    content: {
      hook: [
        "The formula aisle alone is enough to induce decision paralysis - dozens of tins, each claiming to be closest to breastmilk, gentler, or better for some specific concern. Add in bottle prep instructions that seem stricter than a lab protocol, and it's easy to feel like you need a certification just to feed your baby.",
        "It's simpler than it looks. Here's a clear, practical formula feeding guide covering choosing a formula and preparing bottles safely.",
      ],
      sections: [
        {
          heading: 'Choosing a formula',
          paragraphs: [
            "In Australia, all standard infant formulas sold are regulated to meet the same core nutritional standards, meaning a basic first-stage formula from any major brand is a genuinely adequate, safe choice - the premium positioning of some products reflects marketing more than a meaningful nutritional gap.",
            "Specialised formulas (lactose-free, anti-reflux, hypoallergenic/hydrolysed for diagnosed allergy) exist for specific medical reasons and are worth discussing with a GP or paediatrician rather than choosing based on general anxiety - most babies do not need a specialised formula.",
          ],
        },
        {
          heading: 'How to prepare a bottle safely',
          bullets: [
            'Boil fresh tap water and let it cool to no less than 70°C before mixing - this temperature is specifically required to kill bacteria that can be present in formula powder',
            'Always add water to the bottle first, then the correct number of scoops of powder, levelled off (not packed or heaped) with the scoop provided',
            "Follow the exact ratio on the tin - never add extra scoops to 'make it stronger' or extra water to stretch it further, both of which are unsafe",
            "Cool the mixed bottle under cold running water or in an ice bath before feeding, and always test the temperature on your wrist",
            "Prepare bottles fresh for each feed where possible; if made in advance, refrigerate immediately and use within 24 hours",
          ],
        },
        {
          heading: 'Storage and hygiene basics',
          bullets: [
            'Sterilise bottles and teats until at least 12 months (boiling, steam, or cold-water sterilising solutions all work)',
            'Discard any formula left in the bottle after a feed rather than reheating or reusing it',
            "Keep an unopened tin in a cool, dry place, and use an opened tin within the timeframe stated on the packaging (commonly around 4 weeks)",
            "Never microwave a bottle - it heats unevenly and can create dangerous hot spots even when the outside feels fine",
          ],
        },
        {
          heading: 'A note on mixed and combination feeding',
          paragraphs: [
            "Formula and breastmilk can be combined in the same feeding journey without issue - what matters is that each is prepared, stored, and offered according to its own safety guidelines, not that you pick one exclusively.",
          ],
        },
      ],
      closing: {
        heading: 'The bit worth hearing',
        paragraphs: [
          "Fed is fed. A safely prepared bottle of formula supports a thriving baby just as well as any other feeding method, and the safety steps above are quick to build into habit within a few days.",
          "Once the routine clicks, formula prep takes minutes, not the anxiety-inducing process it can feel like on day one.",
        ],
      },
    },
  },
  {
    slug: 'baby-sleep-regressions-by-age',
    cover: 'c-sleep',
    label: 'Sleep, honestly',
    tag: 'Sleep',
    title: "Baby sleep regressions by age: the 4, 8, 12 and 18 month timeline",
    body: "Sleep regressions tend to cluster around predictable ages. Here's the full baby sleep regression timeline, what drives each one, and what actually helps.",
    readMinutes: 7,
    published: true,
    heroImage: '/Untitled design (20).png',
    heroImagePosition: 'center 40%',
    content: {
      hook: [
        "Just when a sleep pattern finally feels settled, it falls apart again - and if you've been through this before, you already suspect it's 'a regression,' even if you can't quite place why they keep happening on a rough schedule of their own.",
        "Sleep regressions aren't random. Most cluster around specific developmental ages, each driven by a different leap. Here's the full timeline.",
      ],
      sections: [
        {
          heading: 'The 4-month regression',
          paragraphs: [
            "Around 3-5 months, sleep architecture matures into adult-like cycles with lighter and deeper stages, causing more frequent brief wake-ups between cycles. This is considered a permanent shift rather than a passing phase - what improves is your baby's ability to link cycles back together, not the underlying pattern reversing.",
          ],
        },
        {
          heading: 'The 8-month regression',
          paragraphs: [
            "Around 8-10 months, major developmental leaps - crawling, pulling to stand, object permanence, and often separation anxiety - tend to disrupt sleep simultaneously. Babies at this age may practise new physical skills in the cot, and separation anxiety can make settling without a parent present genuinely harder for a stretch.",
            "This regression is often shorter-lived than the 4-month shift, commonly easing within 2-4 weeks as the new skills consolidate.",
          ],
        },
        {
          heading: 'The 12-month regression',
          paragraphs: [
            "Walking, language explosion, and often the transition toward one nap a day converge around this age. A nap transition attempted too early can look identical to a regression, so it's worth checking whether this is a temporary disruption or a genuine nap-count change (see our guide on nap transitions for the difference).",
          ],
        },
        {
          heading: 'The 18-month regression',
          paragraphs: [
            "Growing independence, stronger opinions, and the beginnings of testing boundaries (including at bedtime) show up around 18 months, alongside continued language development. This one often looks more behavioural - bedtime resistance, calling out, wanting a parent to stay - than the earlier regressions, which were more purely physiological.",
          ],
        },
        {
          heading: 'What helps across all of them',
          bullets: [
            'Keep the routine consistent even when sleep itself is messy - predictability is the anchor during a regression',
            'Expect a temporary step back and resist the urge to overhaul the whole approach in response to a few rough weeks',
            "Offer extra reassurance and connection during the day, which can ease clinginess and separation anxiety at bedtime",
            "Give it time before troubleshooting further - most regressions resolve within 2-6 weeks as the underlying developmental leap settles",
          ],
        },
      ],
      closing: {
        heading: 'The pattern worth remembering',
        paragraphs: [
          "Every regression on this timeline is a sign of development happening on schedule, not a sign that sleep is broken or that something needs fixing long-term. They're temporary responses to genuine leaps forward.",
          "Ride out the rough stretch with the routine intact, and sleep almost always finds its way back - often to a better place than before, once the new skill has settled in.",
        ],
      },
    },
  },
  {
    slug: 'how-to-get-baby-to-sleep-through-the-night',
    cover: 'c-sleep',
    label: 'Sleep, honestly',
    tag: 'Sleep',
    title: "How to get baby to sleep through the night (and what 'through the night' actually means)",
    body: "Before chasing a full night's sleep, it helps to know what's actually realistic at each age. Here's an honest breakdown of how to get baby to sleep through the night.",
    readMinutes: 6,
    published: true,
    heroImage: '/Untitled design 21.png',
    heroImagePosition: 'center 50%',
    content: {
      hook: [
        "'Sleeping through the night' is one of the most searched, most misunderstood phrases in early parenting - partly because it means something different at every age, and partly because the marketing version (12 hours, no waking) sets an expectation that isn't realistic for most babies for a long time.",
        "Here's a more honest look at how to actually get a baby to sleep through the night, and what's realistic to expect along the way.",
      ],
      sections: [
        {
          heading: "What 'sleeping through the night' actually means, clinically",
          paragraphs: [
            "In infant sleep research, 'sleeping through the night' is often defined as a stretch of 5-6 consecutive hours - not a full 11-12 hour night. Many babies reach this shorter definition well before they reach a true all-night stretch, which is why the phrase can be misleading when used loosely.",
            "A true, consistent full night without any waking often doesn't happen reliably until well into the second year for many children, and plenty of perfectly normal toddlers still wake occasionally beyond that.",
          ],
        },
        {
          heading: 'What actually supports longer stretches',
          bullets: [
            'A consistent bedtime routine that signals sleep is coming - the same few steps, in the same order, most nights',
            "Full feeds during the day and evening, so hunger is genuinely met before the longest sleep stretch begins",
            'A dark, cool, quiet sleep environment with white noise if helpful, supporting smoother transitions between sleep cycles',
            "Age-appropriate awake windows, since both overtired and undertired babies wake more, not less",
            "Some space to practise resettling independently once a baby is developmentally ready, rather than immediate intervention at every stir",
          ],
        },
        {
          heading: "What doesn't reliably speed it up",
          bullets: [
            "Starting solids early - research doesn't support that solid food improves overnight sleep before a baby is developmentally ready for it",
            "A 'better' formula or dream feed alone, without addressing routine and environment factors",
            "Keeping a baby awake longer than their tolerance in the hope they'll 'sleep better from exhaustion' - this usually backfires into more, not less, night waking",
          ],
        },
        {
          heading: 'When night waking is worth a closer look',
          paragraphs: [
            "Frequent waking alongside poor weight gain, snoring or laboured breathing, or a sudden dramatic change from an established pattern is worth raising with a GP or MCH nurse, since these can point to something specific worth checking, separate from typical developmental night waking.",
          ],
        },
      ],
      closing: {
        heading: 'The expectation worth resetting',
        paragraphs: [
          "If your baby is having a 5-6 hour stretch, that already meets the clinical bar for 'sleeping through the night' - even if it doesn't feel like it at 2am when the stretch ends and a feed is still needed after.",
          "Longer, more consistent nights tend to build gradually with routine, environment, and age - not overnight, and rarely on the timeline the ads suggest.",
        ],
      },
    },
  },
  {
    slug: 'postnatal-depression-symptoms-and-where-to-get-help',
    cover: 'c-wellbeing',
    label: 'Self & restoration',
    tag: 'Wellbeing',
    title: "Postnatal depression: symptoms, signs, and where to get help in Australia",
    body: "Postnatal depression affects around 1 in 5 Australian mums. Here are the real signs to look for, how it differs from the baby blues, and exactly where to get support.",
    readMinutes: 7,
    published: true,
    heroImage: '/WhatsApp Image 2026-07-24 at 11.11.44.jpeg',
    heroImagePosition: 'center 50%',
    content: {
      hook: [
        "The baby blues get talked about, briefly, in hospital pamphlets. What gets talked about far less is what happens if the low mood doesn't lift after a week or two - and how to tell the difference between an exhausting, hard stretch and something that needs proper support.",
        "Postnatal depression is common, treatable, and nothing to feel ashamed of. Here are the actual signs, how it differs from the baby blues, and where to get help in Australia.",
      ],
      sections: [
        {
          heading: 'Baby blues vs postnatal depression',
          paragraphs: [
            "The baby blues affect the majority of new mums, typically peaking around day 3-5 and resolving within roughly two weeks, driven by the sharp hormonal shift after birth. Expect some tearfulness, mood swings, and overwhelm during this window.",
            "Postnatal depression is different in duration and intensity - it persists beyond two weeks, tends to deepen rather than ease, and affects roughly 1 in 5 Australian mothers. It's a recognised medical condition, not a personal failing or a sign of not loving your baby enough.",
          ],
        },
        {
          heading: 'The signs worth taking seriously',
          bullets: [
            'Persistent low mood, sadness, or emptiness lasting most of the day, most days, for more than two weeks',
            'Loss of interest or pleasure in things that used to feel good, including time with the baby',
            'Overwhelming anxiety, irritability, or a sense of panic that doesn\'t ease',
            'Difficulty bonding with your baby, or feeling numb or disconnected from them',
            'Changes in appetite or sleep beyond what\'s explained by newborn demands',
            'Intrusive, unwanted thoughts, or thoughts of harming yourself or your baby - these need immediate support and are more common than most people realise, and treatable',
          ],
        },
        {
          heading: 'It can also affect partners',
          paragraphs: [
            "Postnatal depression and anxiety aren't limited to birthing mothers - partners can experience it too, often under-recognised because attention naturally focuses on the mother and baby. The same signs are worth watching for in a partner, and the same support pathways apply.",
          ],
        },
        {
          heading: 'Where to actually get help in Australia',
          bullets: [
            'PANDA (Perinatal Anxiety & Depression Australia) - National Helpline 1300 726 306, for both mums and partners',
            'Your GP - a mental health care plan can be arranged in a single appointment and provides subsidised access to psychologists',
            'Your Maternal Child Health nurse - trained to screen for postnatal depression and refer appropriately',
            'PANDA and Beyond Blue both offer online resources, and Beyond Blue\'s Support Line (1300 22 4636) is available 24/7',
            'In a crisis, or with thoughts of harming yourself or your baby, call 000 or Lifeline on 13 11 14 immediately',
          ],
        },
      ],
      closing: {
        heading: 'The thing worth saying plainly',
        paragraphs: [
          "Postnatal depression is not a reflection of how much you love your baby, how capable a parent you are, or how grateful you should feel. It's a medical condition with a genuinely high recovery rate once it's treated - and reaching out for that treatment is one of the strongest things you can do for yourself and your family.",
          "If any of this sounds familiar, please talk to someone today - your GP, your MCH nurse, or PANDA on 1300 726 306. You don't have to be in crisis to reach out, and you don't have to carry this alone.",
        ],
      },
    },
  },
  {
    slug: 'the-mental-load-in-parenting-what-it-is',
    cover: 'c-wellbeing',
    label: 'Self & restoration',
    tag: 'Wellbeing',
    title: "The mental load in parenting: what it actually is, and how to genuinely share it",
    body: "The mental load isn't about who does more chores - it's about who's doing the invisible thinking, remembering and managing behind every task. Here's how to name it and share it properly.",
    readMinutes: 6,
    published: true,
    heroImage: '/WhatsApp Image 2026-07-24 at 11.10.05.jpeg',
    heroImagePosition: 'center 20%',
    content: {
      hook: [
        "You didn't just book the appointment - you remembered it was due, tracked the right window for it, coordinated the calendar clash, and packed the bag for it. Your partner did the physical task of driving there. On paper, you 'shared' the appointment. In reality, one of you carried almost the entire thing.",
        "This is the mental load - and it's one of the most under-recognised sources of exhaustion and resentment in modern parenting. Here's what it actually is, and how to genuinely share it rather than just the visible tasks around it.",
      ],
      sections: [
        {
          heading: "What the mental load actually is",
          paragraphs: [
            "The mental load is the invisible cognitive labour of noticing something needs doing, remembering it, planning it, and tracking whether it got done - distinct from the physical labour of actually doing it. It includes anticipating needs before they become urgent (nappies running low, an appointment due, a school form to sign) and holding all of it in your head simultaneously, all the time.",
            "It's called invisible because it produces no obvious end result to point to - nobody sees the mental load being carried, only the tasks that eventually come out of it, which is exactly why it's so easy for one partner's contribution to go unnoticed.",
          ],
        },
        {
          heading: 'Why splitting tasks 50/50 doesn\'t fix it',
          paragraphs: [
            "A common but incomplete fix is dividing the physical task list evenly. This misses the point if one partner is still the one noticing, remembering, and assigning every task on that list - the physical labour becomes shared while the cognitive labour, which is often more exhausting, stays lopsided.",
            "Genuine sharing means one partner independently notices, plans, and executes an entire domain (say, all medical appointments, start to finish) without needing to be asked, reminded, or managed through it.",
          ],
        },
        {
          heading: 'How to actually redistribute it',
          bullets: [
            'Assign whole domains, not individual tasks - one partner fully owns "appointments," the other fully owns "meal planning," rather than splitting each list item down the middle',
            'Make the invisible visible - a shared list or tracker that both partners can see and update removes the need for one person to hold it all in their head and relay it verbally',
            "Resist the urge to double-check or redo a partner's version of a task - inconsistent standards are part of sharing the load, not a sign it was done wrong",
            "Revisit the split regularly, since work, energy, and needs shift - what worked at 3 months postpartum may need renegotiating at 9",
          ],
        },
      ],
      closing: {
        heading: 'The conversation worth having',
        paragraphs: [
          "Most resentment around the mental load doesn't come from a partner refusing to help - it comes from one person being asked to notice, remember, and manage a whole household's needs largely alone, while the other genuinely doesn't see how much that involves until it's named out loud.",
          "Naming it specifically - not 'you don't help enough' but 'I'm the only one tracking X, Y and Z, can you fully own one of these' - tends to shift things faster than any amount of quiet resentment ever could.",
        ],
      },
    },
  },
  {
    slug: 'baby-milestones-by-month-first-year-guide',
    cover: 'c-memories',
    label: 'Memory keeping',
    tag: 'Memories',
    title: "Baby milestones by month: a first year guide (and how to actually keep track)",
    body: "From the first smile to first steps, here's a realistic guide to baby milestones by month - plus a simple way to actually keep track without the pressure of a perfect baby book.",
    readMinutes: 7,
    published: true,
    heroImage: '/WhatsApp Image 2026-07-24 at 11.10.07.jpeg',
    heroImagePosition: 'center 40%',
    content: {
      hook: [
        "Somewhere between the sleep deprivation and the day-to-day of keeping a baby alive, the milestones themselves can blur together - was the first real laugh at 8 weeks or 10? Did rolling happen before or after the trip to your parents'?",
        "Here's a realistic guide to baby milestones by month across the first year, plus a simpler way to actually keep track of them as they happen, rather than trying to reconstruct them later from memory.",
      ],
      sections: [
        {
          heading: '0-3 months',
          bullets: [
            'Social smile (distinct from reflexive newborn smiles) - typically 6-8 weeks',
            'Lifting head briefly during tummy time - around 6-8 weeks, strengthening through this window',
            'Following an object or face with their eyes - around 6-10 weeks',
            'Cooing and early vocal sounds beyond crying - around 8-12 weeks',
          ],
        },
        {
          heading: '4-6 months',
          bullets: [
            'Rolling from tummy to back, then back to tummy - typically 4-6 months, though the order varies by baby',
            'Reaching for and grasping objects deliberately - around 4-5 months',
            'Laughing out loud - commonly 3-4 months',
            'Sitting with support, moving toward sitting unsupported by the end of this window',
          ],
        },
        {
          heading: '7-9 months',
          bullets: [
            'Sitting unsupported - typically 6-8 months',
            'Crawling (or an alternative like bottom-shuffling) - widely variable, commonly 7-10 months, and some babies skip crawling altogether',
            'Babbling with repeated syllables ("bababa", "dadada") - around 6-9 months',
            'Object permanence emerging - understanding that something still exists when out of sight, which is also what drives the separation anxiety common at this age',
          ],
        },
        {
          heading: '10-12 months',
          bullets: [
            'Pulling to stand and cruising along furniture - typically 9-12 months',
            'First unsupported steps - hugely variable, anywhere from 9-18 months is within normal range',
            'First recognisable word - commonly around 12 months, though understanding language comes much earlier than speaking it',
            'Waving, pointing, and other early gestures - around 9-12 months',
          ],
        },
        {
          heading: 'The most important thing to know about all of these',
          paragraphs: [
            "Every range above is exactly that - a wide, normal range, not a deadline. Milestones are also generally more useful viewed as a trend over time than a single date - a baby steadily progressing, even on the later end of every range, is usually doing just fine. Persistent concern is best raised with your MCH nurse or GP, who can look at the full picture rather than one milestone in isolation.",
          ],
        },
      ],
      closing: {
        heading: 'A simpler way to actually track them',
        paragraphs: [
          "Rather than a single beautiful baby book, most parents find it easier to log milestones the moment they happen - a quick note or photo, timestamped automatically - rather than trying to recall exact dates weeks or months later. The date matters less in the moment than simply capturing that it happened at all.",
          "You'll forget the exact week more often than you'd expect. A quick, low-effort note in the moment is worth more than a perfect memory you're relying on to hold it later.",
        ],
      },
    },
  },
  {
    slug: 'first-year-of-baby-photos-how-to-keep-up',
    cover: 'c-memories',
    label: 'Memory keeping',
    tag: 'Memories',
    title: "Baby's first year photos: how to actually keep up with it (without a fancy camera)",
    body: "You don't need a monthly milestone card, a professional shoot, or a perfectly curated album. Here's a realistic approach to baby's first year photos that actually survives contact with real life.",
    readMinutes: 5,
    published: true,
    heroImage: '/WhatsApp Image 2026-07-24 at 11.10.07 (2).jpeg',
    heroImagePosition: 'center 40%',
    content: {
      hook: [
        "The internet is full of beautifully styled 'baby's first year' photo templates - a milestone card each month, a co-ordinated outfit, a consistent backdrop. Most of them get attempted twice and abandoned by month three, not because you don't care, but because the format itself demands more time and energy than early parenthood has to give.",
        "Here's a more realistic approach to documenting baby's first year in photos - one that's actually sustainable with a phone, low energy, and no styling budget.",
      ],
      sections: [
        {
          heading: "Why the styled version usually falls apart",
          paragraphs: [
            "Monthly milestone photo templates require remembering the exact date, finding the prop or card, dressing baby in something specific, and taking the photo in decent light, all in the same short window - a lot of coordination for a task that's meant to be joyful, not another deadline.",
            "The photos that actually get taken, and actually get treasured later, tend to be the low-effort, in-the-moment ones - not the styled ones you had to plan for.",
          ],
        },
        {
          heading: 'A version that actually survives the year',
          bullets: [
            'Pick one simple, repeatable frame - the same chair, the same blanket, the same spot on the couch - so a rough monthly comparison is possible without extra effort',
            'Take the photo whenever you remember, not on a strict date - a "month four, roughly" photo is worth infinitely more than no photo at all',
            "Use your phone. Professional-quality isn't the point - a clear, well-lit phone photo captures the moment just as well",
            'Snap a few candid, ordinary shots regularly, not just posed ones - these often become the most treasured images later, more than any milestone card',
          ],
        },
        {
          heading: 'Keeping them organised without extra admin',
          bullets: [
            'A single dedicated album (shared with your partner) beats scattering photos across multiple apps and camera rolls',
            "Batch a quick sort every few weeks rather than trying to caption and organise every photo the day it's taken",
            'Let quantity be high and curation be low for now - editing down to favourites is a task for later, if you ever get to it, not a requirement for capturing the memory now',
          ],
        },
        {
          heading: 'If you want a proper keepsake later',
          paragraphs: [
            "A photo book or printed album is far easier to build after the fact from a large, messy pool of casual photos than it is to maintain in real time as a perfectly curated project. Capture generously now; curate later, if and when you have the time and energy for it.",
          ],
        },
      ],
      closing: {
        heading: 'The permission slip',
        paragraphs: [
          "You don't need the styled template, the matching outfits, or a photo every single month on the dot to have a beautiful record of your baby's first year. A phone, a repeatable habit, and a low bar for 'good enough' will get you there.",
          "The photos that end up mattering most are rarely the perfectly staged ones. They're the ordinary Tuesday ones you almost didn't bother taking.",
        ],
      },
    },
  },
  {
    slug: 'why-your-toddler-is-losing-it',
    cover: 'c-toddler',
    label: 'Toddler behaviour',
    tag: 'Toddler Behaviour & Emotions',
    title: "Why your toddler is losing it (and why that's actually normal)",
    body: "A full-body meltdown over putting shoes on isn't bad behaviour - it's a bad fit between a big feeling and a brain that can't yet manage it. Here's what's actually happening, and what helps.",
    readMinutes: 6,
    published: true,
    content: {
      hook: [
        "It's 5:47pm. You've asked your toddler to put their shoes on for the third time. This time, it's not a \"no\" - it's a full-body collapse onto the kitchen floor, complete with a sound you're fairly sure only toddlers and smoke alarms can make.",
        "If you've been there, you're not doing anything wrong. You're parenting a toddler.",
      ],
      sections: [
        {
          heading: "It's not bad behaviour. It's a bad fit.",
          paragraphs: [
            "Between about 1 and 4 years old, the part of the brain responsible for logic, patience and \"just calming down\" (the prefrontal cortex) is barely under construction. Meanwhile, the emotional part of the brain is fully online and running the show. Your toddler isn't choosing to be difficult. Their brain genuinely cannot regulate big feelings the way yours can.",
            "Add in limited language (they can feel far more than they can say), a fierce new drive for independence, and a world where almost every decision is made for them, and tantrums start to make a lot more sense. It's less \"manipulation\" and more \"system overload.\"",
          ],
        },
        {
          heading: "What's actually happening in a tantrum",
          bullets: [
            "The upstairs brain goes offline - this is the yelling, kicking, throwing stage. Logic doesn't work here; you cannot reason a toddler out of a meltdown any more than you could reason yourself out of a fire alarm going off in your ear",
            "The comedown - once the initial wave passes, they often become clingy, teary, or want a cuddle. This is when connection actually lands",
          ],
        },
        {
          heading: 'Skip, for now',
          bullets: [
            'Long explanations mid-meltdown ("we don\'t hit because...")',
            'Bargaining or bribing to stop the crying',
            'Matching their volume',
          ],
        },
        {
          heading: 'Try instead',
          bullets: [
            'Name it, briefly - "You\'re really mad you can\'t have another biscuit." One sentence. Save the discussion for later',
            'Stay boringly calm - your steadiness is the co-regulation their brain is borrowing until it can do it alone',
            'Offer safety, not solutions - sometimes just sitting nearby (not lecturing) is enough',
            'Save the debrief for after - once they\'re calm, a simple "that was a big feeling, hey" helps them build the vocabulary for next time',
          ],
        },
        {
          heading: 'The bit nobody tells you',
          paragraphs: [
            'Tantrums usually peak around age 2 to 3 and taper off as language and self-regulation develop, but "taper off" doesn\'t mean disappear overnight, and it doesn\'t mean you\'re failing if they\'re still happening at 4. Some kids are simply more intense feelers than others, and that\'s temperament, not a parenting report card.',
            "It's also worth saying: the parent's exhaustion in these moments is real and valid too. Managing a meltdown while mentally running through school pickup, what's for dinner, and whether you replied to that email is its own kind of load, and it's the kind that rarely gets talked about but is very real for the person holding it all together.",
          ],
        },
      ],
      closing: {
        heading: 'The takeaway',
        paragraphs: [
          "A tantrum isn't a discipline failure, yours or theirs. It's a small human with a big feeling and not yet enough tools to manage it. Your calm presence, more than any perfect script, is what teaches them that big emotions are survivable.",
        ],
      },
    },
  },
  {
    slug: 'real-mums-real-stories-sarah',
    cover: 'c-community',
    heroImage: '/Edited with Labbet App.jpg',
    heroImagePosition: 'center 50%',
    heroImageGrayscale: true,
    label: 'Real Mums, Real Stories',
    tag: 'Community',
    title: 'Real Mums, Real Stories: Sarah',
    body: "Model, content creator, coach and event host, and mum of two navigating two very different seasons at once. Sarah on miscarriage, self-talk, and turning a side hustle into her full-time gig.",
    readMinutes: 5,
    published: true,
    content: {
      hook: [
        "Meet Sarah Viliamu. She's a mum of two - her son is 5, her daughter is 7 months - with an incredibly supportive husband she's been with for over 13 years. Between her two children, Sarah went through two miscarriages, which she chose to share publicly, believing it's something that needs to be spoken about more often.",
        "She's also currently navigating two very different seasons of motherhood at once - one child in prep, the other all things baby life - while turning what was a side hustle into her full-time gig as a model, content creator, coach and event host, after being made redundant just before going on maternity leave in December.",
        "Here's what she had to say.",
      ],
      sections: [
        {
          heading: 'Describe motherhood in one sentence.',
          paragraphs: [
            "Motherhood is the hardest and most amazing experience all wrapped in one big beautiful hug.",
          ],
        },
        {
          heading: 'Your work is all about self-love and confidence. How has becoming a mum changed the way you speak to yourself?',
          paragraphs: [
            "In all honesty it's something I try to work on every day, the negative self talk can easily creep in but ultimately I try to remind myself that my children are watching and listening to how I speak to myself, and that not only do I deserve self compassion and kindness, but my children deserve to grow up in a household where that is modelled.",
          ],
        },
        {
          heading: 'What is something about motherhood that no one could have prepared you for?',
          paragraphs: [
            "Even though you know motherhood is 24/7, I don't think you quite conceptualise how literal the 24/7 is, and just how huge the extra mental load is.",
          ],
        },
        {
          heading: 'What does support look like for you in this season of life?',
          paragraphs: [
            "My husband is a huge support for me, especially as I'm breastfeeding - he does anything he can to reduce my mental load and make life that bit easier for me. Also asking for help when I need it, whether that's from family or a friend.",
          ],
        },
        {
          heading: "You've built a community around empowering women. Has becoming a mum changed what empowerment means to you?",
          paragraphs: [
            "I'd say if anything it's amplified my mission and messages of empowerment. Becoming a mum has solidified my why behind encouraging all people to step into their confidence and empowerment.",
          ],
        },
        {
          heading: 'If you could go back and give advice to yourself as a first-time mum, what would it be?',
          paragraphs: [
            "Your baby doesn't need a perfect mum, a happy mum is much more important.",
          ],
        },
        {
          heading: 'When life feels overwhelming, what helps you come back to yourself as Sarah - not just mum, business owner or partner?',
          paragraphs: [
            "I often use the words \"zoom out\" and find it helps take me out of the overwhelm and look at the big picture. Gratitude and journaling are also key practices in my life.",
          ],
        },
      ],
      closing: {
        heading: 'We see you, Sarah.',
        paragraphs: [
          "Thank you for sharing your story with us.",
          "Real Mums, Real Stories is a PAM Journal series celebrating the honest, unfiltered experiences of mums navigating this wild, beautiful season of life.",
        ],
      },
    },
  },
  {
    slug: 'real-mums-real-stories-tilly',
    cover: 'c-community',
    heroImage: '/IMG_0121.jpg',
    heroImagePosition: 'center 20%',
    heroImageGrayscale: true,
    label: 'Real Mums, Real Stories',
    tag: 'Community',
    title: 'Real Mums, Real Stories: Tilly',
    body: "Mum to six-month-old West, a surprise after being told she wouldn't have children. Tilly on the honest side of motherhood, letting go of perfect, and why the laundry never actually ends.",
    readMinutes: 5,
    published: true,
    content: {
      hook: [
        "Meet Tilly. She's a 26-year-old mum to a six-month-old boy, West - a surprise after being told she wouldn't have children due to 72 cysts on her ovaries. Motherhood came as a shock to her, and she's found it as hard as it is rewarding.",
        "Here's what she had to say.",
      ],
      sections: [
        {
          heading: 'Describe motherhood in one sentence.',
          paragraphs: [
            "Motherhood is equal parts exhausting and extraordinary.",
          ],
        },
        {
          heading: "What's one thing motherhood taught you about yourself?",
          paragraphs: [
            "Motherhood taught me to slow down. Living with ADHD, I was always onto the next thing, but my son has taught me to be present and appreciate the little moments.",
          ],
        },
        {
          heading: "You've always been refreshingly honest about motherhood. Why is it important to you to share the real side of parenting?",
          paragraphs: [
            "I think I share the honest side of motherhood because it's what I needed when I was in the thick of it. Those first six weeks with West were really hard, and when I looked online it felt like everyone else was loving every second while I was just trying to get through the day. I want other mums to know it's okay if it doesn't feel magical all the time. You can love your baby more than anything and still find motherhood incredibly hard. If sharing the reality helps even one mum feel less alone, then it's worth it.",
          ],
        },
        {
          heading: 'If you could give one piece of advice to a new mum, what would it be?',
          paragraphs: [
            "The days really are long, but the years are short. When you're in the middle of the sleepless nights and the hard days, it can feel like it's never going to end. But every stage passes so quickly, and before you know it, you'll find yourself missing the version of them you couldn't wait to grow out of. Hang in there. It does get easier, every new phase brings something even more rewarding, and one day you'll look back and wish you could hold that tiny version of them just one more time.",
          ],
        },
        {
          heading: 'Have you ever felt pressure to be a "perfect mum"? How do you navigate that?',
          paragraphs: [
            "Absolutely. I think social media made me feel like I had to have it all together. Then I realised every mum is finding it hard in some way. Some people are just more open about it than others. Once I understood that motherhood is challenging for everyone, I stopped chasing perfection and started focusing on just being the best mum I could be. That mindset has been so much healthier for me.",
          ],
        },
        {
          heading: 'If your child could thank you for one thing in the future, what would you hope it would be?',
          paragraphs: [
            "I hope one day he thanks me for working so hard to give him a life full of opportunities and experiences. He's only six months old and he's already been to three countries. I grew up travelling the world and living in different places, and those experiences shaped who I am. I hope I can give him that same gift. More than anything, I hope he looks back and knows that every late night, every sacrifice, and every hour I worked was because I wanted him to have a life full of adventure, perspective, and possibility.",
          ],
        },
        {
          heading: "What's one parenting task you find yourself constantly trying to stay on top of?",
          paragraphs: [
            "The washing, without a doubt. I swear I can never get to a point where the laundry basket is empty, the clothes are folded, and everything is actually put away at the same time. It feels like the second I finish one load, there's already another one waiting for me.",
          ],
        },
      ],
      closing: {
        heading: 'We see you, Tilly.',
        paragraphs: [
          "Thank you for sharing your story with us.",
          "Real Mums, Real Stories is a PAM Journal series celebrating the honest, unfiltered experiences of mums navigating this wild, beautiful season of life.",
        ],
      },
    },
  },
  {
    slug: 'real-mums-real-stories-taylor',
    cover: 'c-community',
    heroImage: '/8341ED89-3F0D-4D15-A985-81E74E9F9FA4.jpg',
    heroImagePosition: 'center 22%',
    heroImageGrayscale: true,
    label: 'Real Mums, Real Stories',
    tag: 'Community',
    title: 'Real Mums, Real Stories: Taylor',
    body: "First-time mum and consulting agency owner, on why motherhood didn't shrink her ambition - it gave it more meaning. Taylor on identity, instinct, and letting go of mum guilt.",
    readMinutes: 6,
    published: true,
    content: {
      hook: [
        "Meet Taylor. She's a first-time mum who's spent the past four years building a consulting agency - Type A, ambitious, and passionate about financial literacy, building wealth, and creating a life with real freedom and choice.",
        "Motherhood has been the biggest and best shift in her life so far - she's loving figuring out this new version of it, staying present with her baby boy while still building something she loves. Here's what she had to say.",
      ],
      sections: [
        {
          heading: "You've spent years building a business around independence and ambition. Did becoming a mum challenge your identity in ways you weren't expecting?",
          paragraphs: [
            "It's almost challenged me in the opposite way to what I expected. Becoming a mum has felt so right, and I've honestly never felt more like myself. I have a whole new sense of purpose, I love and appreciate my body in a completely different way after growing a life, and there's so much more meaning behind everything I do.",
            "I used to think motherhood and ambition would take away from each other, but I've found the opposite. Motherhood has given me even more purpose in my business, made me value operating efficiently and intentionally, and at the same time, I get to be this tiny person's entire world. I feel more me than ever.",
          ],
        },
        {
          heading: 'What has surprised you most about yourself since becoming a mum?',
          paragraphs: [
            "Probably how instinctual it all feels, and how deeply connected you are to your baby. You really do learn them in a way no one else can - what they need, what different cries mean, when something feels off. I've surprised myself with how much I trust that instinct and connection.",
          ],
        },
        {
          heading: "What's something about birth that nobody could have prepared you for?",
          paragraphs: [
            "How much the right support people matter. Birth is such a vulnerable experience, full of unknowns, and there's a point where you really have to surrender and lean on the people you love. I don't think anything could have prepared me for how much I would need and value having people around me who made me feel safe, supported and advocated for.",
          ],
        },
        {
          heading: 'Can you tell us about the day you met your baby? What do you remember most vividly?',
          paragraphs: [
            "After a 28-hour labour, my first thought was honestly \"thank f**k you're finally out\" hahaha. But the feeling of having your baby put on your chest for the first time is genuinely euphoric. In that moment, all the pain felt completely worth it. I would do it 100 times over just to experience that feeling again.",
          ],
        },
        {
          heading: 'Most Googled question at 2am?',
          paragraphs: [
            "Probably a ChatGPT question asking why a certain routine worked one day and he's fussy and crying the next lol.",
          ],
        },
        {
          heading: "For ambitious women who worry they'll lose themselves in motherhood, what would you say to them today?",
          paragraphs: [
            "You don't have to choose between being an incredible mum and still wanting more for yourself. I genuinely thought motherhood might make me less ambitious or take away parts of who I was, but it's done the opposite. I've never felt more like myself, more purposeful or more motivated to build a life I'm proud of. Motherhood doesn't have to make your world smaller - it can give everything you're building even more meaning.",
          ],
        },
        {
          heading: "Have you experienced mum guilt already? If so, what does that look like for you?",
          paragraphs: [
            "Honestly, no. I know that anything I do for myself allows me to pour into him even more. Taking care of myself, working, training or having time away doesn't take away from me being his mum - it allows me to show up as the best version of myself for him.",
          ],
        },
      ],
      closing: {
        heading: 'We see you, Taylor.',
        paragraphs: [
          "Thank you for sharing your story with us.",
          "Real Mums, Real Stories is a PAM Journal series celebrating the honest, unfiltered experiences of mums navigating this wild, beautiful season of life.",
        ],
      },
    },
  },
  {
    slug: 'reflux-vs-colic-whats-the-difference',
    cover: 'c-newborn',
    label: 'Reflux vs colic',
    tag: 'Newborn',
    title: 'Reflux or colic? How to tell the difference',
    body: "Both cause a lot of crying, and it's genuinely hard to tell them apart in the moment. Here's what actually separates reflux from colic - and what helps with each.",
    readMinutes: 6,
    published: true,
    content: {
      hook: [
        "Somewhere around week three or four, the crying ramps up, and every article you read seems to describe either colic or reflux - sometimes both, sometimes neither, always slightly differently. It's one of the most common questions in the newborn stage, and one of the hardest to self-diagnose.",
        "They're different things, they're managed differently, and there is a fairly reliable way to tell them apart - even if only a GP can properly confirm which one you're dealing with.",
      ],
      sections: [
        {
          heading: 'What colic actually is',
          paragraphs: [
            "Colic isn't a diagnosis so much as a description: intense, hard-to-settle crying in an otherwise healthy, well-fed baby, often described by the \"rule of threes\" - more than three hours a day, more than three days a week, for at least three weeks. It usually starts around two to three weeks and tends to peak around six weeks.",
          ],
          bullets: [
            'Crying often clusters in the late afternoon or evening',
            "Baby's body may look tense - fists clenched, legs pulled up, back arched",
            'Between episodes, baby feeds and settles normally',
            'No single proven cause - it usually resolves on its own by 3-4 months',
          ],
        },
        {
          heading: 'What reflux actually is',
          paragraphs: [
            "Reflux happens when stomach contents come back up the oesophagus, which can be uncomfortable enough to cause real distress - sometimes with visible spit-up, sometimes \"silent\" with no obvious mess at all.",
          ],
          bullets: [
            'Fussiness or crying during or shortly after feeds, not just in the evening',
            'Frequent spit-up, hiccups, or wet burps (though silent reflux shows none of this)',
            'Arching away from the bottle or breast mid-feed',
            'Discomfort lying flat, especially soon after eating',
            'Usually starts around 2-4 weeks and tends to ease by 12 months as the digestive system matures',
          ],
        },
        {
          heading: 'The clearest tell',
          paragraphs: [
            "Timing is the most useful clue. Colic crying tends to cluster at a predictable time of day regardless of feeding, while reflux crying tends to track with feeds - during, just after, or when laid flat. Neither is a home diagnosis, but this is usually the first question a GP or child health nurse will ask.",
          ],
        },
        {
          heading: 'What actually helps',
          bullets: [
            'For reflux: smaller, more frequent feeds; holding upright for 20-30 minutes after feeding; keeping burps unhurried mid-feed',
            "For colic: white noise, gentle motion, a warm bath, and - honestly - accepting that some evenings are just going to be loud",
            'For both: a change of scene (even five minutes on the balcony) can reset an unsettled baby, and you',
          ],
          paragraphs: [
            "See a GP or your Maternal and Child Health nurse if crying is inconsolable for long stretches, baby isn't gaining weight, there's forceful (projectile) vomiting, blood in vomit or nappies, or you're finding it hard to cope - that last one counts as a real reason on its own.",
          ],
        },
      ],
      closing: {
        heading: "You're not doing anything wrong",
        paragraphs: [
          "Both colic and reflux are common, both are exhausting, and neither is caused by anything you did or didn't do. The evenings that feel unmanageable now are genuinely temporary - most colic resolves by 4 months, most reflux by 12.",
          "If you're keeping track of feeds and settling patterns to describe to a GP, that record is useful - it's exactly the kind of detail that's easy to remember in the moment and impossible to recall accurately a week later.",
        ],
      },
    },
  },
  {
    slug: 'teething-signs-timeline-what-helps',
    cover: 'c-newborn',
    label: 'Teething',
    tag: 'Newborn',
    title: 'Teething: the real signs, the real timeline, and what actually helps',
    body: 'First teeth can arrive anywhere from 4 to 12 months, and the symptoms are more disputed than you\'d think. Here\'s what\'s genuinely teething, what isn\'t, and what actually helps.',
    readMinutes: 6,
    published: true,
    content: {
      hook: [
        "Teething gets blamed for almost everything in the second half of the first year - fevers, diarrhoea, sleep regressions, sudden clinginess. Some of that reputation is deserved. A lot of it isn't.",
        "Here's what teething actually causes, roughly when to expect it, and what helps versus what's just folklore.",
      ],
      sections: [
        {
          heading: 'The real timeline',
          bullets: [
            'Most babies get their first tooth between 6 and 10 months, though anywhere from 4 to 12 months is normal',
            'Bottom front teeth (central incisors) usually arrive first',
            'By around 12 months, most babies have 4-8 teeth',
            "The full set of 20 baby teeth typically isn't complete until closer to age 2-3",
          ],
          paragraphs: [
            "A baby with no teeth at 10 months and a baby with four teeth at 8 months are both completely normal - the range is wide, and it doesn't predict anything about later dental health.",
          ],
        },
        {
          heading: 'What teething actually causes',
          bullets: [
            'Drooling, and lots of it',
            'Gnawing and chewing on everything within reach',
            'Swollen, tender gums - sometimes with a visible bruised-looking bump before the tooth breaks through',
            'Mild irritability, particularly in the day or two before a tooth emerges',
            'A slightly raised temperature (under 38°C) - genuine fever is not a teething symptom',
          ],
        },
        {
          heading: "What it probably isn't causing",
          paragraphs: [
            "Despite the reputation, current paediatric guidance is that teething does not cause high fever, diarrhoea, vomiting, or a bad cough. Babies are teething for months at a time, and also catching ordinary illnesses at the same time - the two get blamed on each other constantly. If your baby has a temperature over 38°C or is genuinely unwell, treat it as an illness and see a GP, not as \"just teeth\".",
          ],
        },
        {
          heading: 'What actually helps',
          bullets: [
            'A chilled (not frozen) teething ring or washcloth to chew on',
            'Firm, gentle gum massage with a clean finger',
            "Age-appropriate pain relief (paracetamol or ibuprofen) if they're genuinely uncomfortable - check dosing with your pharmacist or GP",
            'Teething gels are generally not recommended by Australian guidelines - many contain ingredients not considered necessary or fully safe for infants',
          ],
        },
      ],
      closing: {
        heading: 'It passes tooth by tooth',
        paragraphs: [
          "Teething is genuinely one of the more drawn-out parts of the first two years, but it comes in waves - a rough few days around each new tooth, then a return to normal until the next one. It's not a constant state, even when it feels that way.",
          "If you're tracking symptoms to work out whether it's teeth or something else, the pattern (comes and goes, worse right before a tooth appears, no real fever) is the most useful clue you have.",
        ],
      },
    },
  },
  {
    slug: 'starting-daycare-separation-anxiety',
    cover: 'c-wellbeing',
    label: 'Starting child care',
    tag: 'Wellbeing',
    title: 'Starting daycare: the separation anxiety nobody warns you is yours too',
    body: "Everyone prepares you for how your baby might handle the first day of daycare. Almost nobody prepares you for how you'll handle it.",
    readMinutes: 6,
    published: true,
    content: {
      hook: [
        "There's a lot of advice about helping a baby settle into child care - and it's good advice. There's a lot less about the parent standing in the car park, listening to crying through a closed door, wondering if this is a terrible idea.",
        "Both halves of this are real, and both get easier faster than it feels like they will in week one.",
      ],
      sections: [
        {
          heading: 'Why your baby might struggle (and when they might not)',
          paragraphs: [
            "Separation anxiety is a genuine developmental stage, not a sign anything's wrong. Babies under about 6 months are often completely unbothered by new carers, because that stranger-awareness hasn't developed yet. It's babies starting care between roughly 8 and 18 months who tend to find it hardest - which, awkwardly, is exactly when most Australian parents are returning to work.",
          ],
          bullets: [
            'Clinginess or crying at drop-off, even if they were calm minutes before',
            'Settling within 10-20 minutes of you leaving is extremely common - educators see this daily',
            'A rough patch in week one that eases noticeably by week two or three',
          ],
        },
        {
          heading: 'What actually helps the transition',
          bullets: [
            'A few short settling visits before the real first day, if the centre offers them',
            "A consistent, calm goodbye - the same words, a hug, then go. Sneaking out feels kinder in the moment but tends to make the next drop-off harder",
            'A familiar comfort item from home, if the centre allows it',
            "Arriving with enough time that drop-off isn't rushed - rushed goodbyes are harder for everyone",
          ],
        },
        {
          heading: 'The part that catches parents off guard',
          paragraphs: [
            "Nobody quite prepares you for how it feels to hand your baby to someone else and walk away, especially the first few times. Guilt, relief, grief, and something close to jealousy can all show up in the same ten minutes, and that combination is completely normal, not a sign you've made the wrong call.",
            "It's also common to feel worse than your baby does. Most educators will tell you the same thing: crying usually stops within minutes of the parent being out of sight. The hard part is almost always harder for you than for them.",
          ],
        },
        {
          heading: "When it's worth flagging with the centre",
          paragraphs: [
            "A tough first week or two is expected. If your child is still deeply distressed at every drop-off after several weeks, isn't settling at all during the day, or seems different at home in a way that worries you, it's worth a proper conversation with your educators - they'll have seen the pattern before and can tell you whether it's within normal range.",
          ],
        },
      ],
      closing: {
        heading: "You're allowed to grieve this transition too",
        paragraphs: [
          "Starting child care is a genuine milestone, and like most milestones in this stage, it comes with something being gained and something being let go of. Feeling both at once isn't a contradiction.",
          "The car-park cry is real, it's common, and by pickup - most days - it's already forgotten by the person you were crying about.",
        ],
      },
    },
  },
  {
    slug: 'sibling-jealousy-preparing-your-toddler-for-a-new-baby',
    cover: 'c-wellbeing',
    label: 'Second time around',
    tag: 'Wellbeing',
    title: 'Second baby, first toddler: getting ready for sibling jealousy',
    body: "Sibling jealousy after a new baby arrives is close to universal, not a sign your toddler is struggling more than most. Here's what's normal, and what actually helps.",
    readMinutes: 6,
    published: true,
    content: {
      hook: [
        "Everyone prepares for a second baby's sleep, feeds, and admin. Fewer people prepare for the toddler who suddenly can't stand the sight of the baby - or, just as often, the toddler who seems fine for weeks and then falls apart out of nowhere.",
        "Both reactions are normal, and there's a fair bit that genuinely helps.",
      ],
      sections: [
        {
          heading: 'Why it happens',
          paragraphs: [
            "A new baby is, from a toddler's perspective, a permanent stranger who has moved in and is getting most of your attention. Research on sibling adjustment consistently finds that challenging behaviour and emotional regulation both get harder in the weeks after a new baby arrives, often peaking around the two-month mark - not the first week, which catches a lot of parents off guard.",
          ],
          bullets: [
            'Regression - toileting accidents, wanting a bottle or dummy again, baby talk',
            'Increased clinginess, or the opposite: sudden defiance and testing limits',
            '"Sending the baby back" comments - upsetting to hear, very normal to say',
            'A delayed reaction - some toddlers seem completely fine until weeks in',
          ],
        },
        {
          heading: 'Before the baby arrives',
          bullets: [
            "Involve them in the practical stuff - choosing an outfit, helping set up the room - so it feels like their event too",
            'Talk about specific changes honestly ("the baby will need a lot of feeding at first") rather than only the exciting parts',
            "If a room or routine is changing because of the baby, make that shift a few weeks early so it isn't tied directly to the baby's arrival in their mind",
          ],
        },
        {
          heading: 'In the early weeks',
          bullets: [
            "Give them a real job - passing nappies, choosing a toy for the baby, being your \"helper\" - rather than just asking them to be patient",
            'Protect small pockets of one-on-one time, even 10 undistracted minutes, especially right after a feed when you have a free hand',
            '"It\'s hard sharing Mum, isn\'t it" lands better than "be nice to your sister" - name the feeling without judgement',
            'Lower the bar everywhere else for a while - this is not the season for a big push on manners or the last stubborn nap',
          ],
        },
        {
          heading: 'When to expect it to ease',
          paragraphs: [
            "For most families, the sharpest edge softens within a couple of months, though it's rarely linear - a good fortnight followed by a rough week is normal, not a step backward. Genuine security in the parent relationship, not the toddler being naturally easygoing, is what predicts an easier adjustment - so the reassurance and one-on-one time matter more than getting the logistics perfect.",
          ],
        },
      ],
      closing: {
        heading: "It's not a competition they're going to lose",
        paragraphs: [
          "A toddler who's struggling with a new sibling isn't broken and isn't a bad omen for their future relationship - it's one of the most universal reactions in parenting, and one of the ones that improves fastest with a bit of deliberate attention now.",
          "The two of them being closest of friends in a year or two doesn't erase how hard this particular stretch can be. Both things are true at once.",
        ],
      },
    },
  },
  {
    slug: 'c-section-recovery-what-nobody-tells-you',
    cover: 'c-wellbeing',
    label: 'C-section recovery',
    tag: 'Wellbeing',
    title: 'C-section recovery: what nobody quite tells you',
    body: 'A caesarean is major abdominal surgery, recovered from while caring for a newborn - and the practical reality of that combination rarely gets spelled out in advance.',
    readMinutes: 7,
    published: true,
    content: {
      hook: [
        "A caesarean gets talked about as an alternative way to give birth, which is true, but it undersells what it actually is: major abdominal surgery, recovered from on almost no sleep while caring for a newborn. The physical reality of that combination deserves more airtime than it usually gets.",
        "Here's what recovery actually tends to look like, and what genuinely helps.",
      ],
      sections: [
        {
          heading: 'The first week',
          bullets: [
            "Getting in and out of bed, standing up straight, and laughing or coughing will all be genuinely painful at first - that's expected, not a sign of a complication",
            'The catheter usually comes out within a day; walking, even a short shuffle, is encouraged early to reduce clot risk',
            'Pain relief is there to be used properly, not endured through - staying ahead of the pain makes moving (and feeding) much easier',
            'Swelling, numbness, or odd tingling around the scar is common and usually settles over weeks to months',
          ],
        },
        {
          heading: "The 6-week mark isn't a finish line",
          paragraphs: [
            "Six weeks is roughly when the incision itself is healed and most activity restrictions lift - but full internal healing, including the abdominal muscles and the deeper layers under the scar, genuinely takes longer, often several months. Feeling wiped out or twinge-y well past six weeks doesn't mean something's wrong.",
          ],
          bullets: [
            "Avoid heavy lifting (more than baby's weight) and driving until cleared by your obstetrician, typically 4-6 weeks",
            'Scar numbness or tightness can persist for months and often continues to improve for up to a year or more',
            'Core and pelvic floor strength genuinely benefit from guided rehab, not just time',
          ],
        },
        {
          heading: "The pelvic floor question people don't expect",
          paragraphs: [
            "A common misconception is that a caesarean means no pelvic floor concerns - but pregnancy itself, not just labour, affects the pelvic floor, and abdominal surgery adds its own layer of muscle disruption. A women's health physiotherapist (Medicare rebates are available with a GP referral through a chronic disease management plan) can properly assess this rather than leaving it to guesswork.",
          ],
        },
        {
          heading: 'What actually helps week to week',
          bullets: [
            'A pillow held firmly against the incision when coughing, laughing, or standing up - it genuinely reduces the sting',
            "High-waisted, soft clothing that doesn't sit on the scar line",
            "Setting up a \"base camp\" - nappies, water, snacks, feeding supplies - so you're not repeatedly standing up in the first weeks",
            'Accepting help with anything that involves lifting or bending, longer than feels necessary',
          ],
        },
      ],
      closing: {
        heading: 'However your baby arrived, your body did something enormous',
        paragraphs: [
          "Caesarean recovery is frequently talked about like a technicality compared to vaginal birth, when it's genuinely major surgery layered on top of new parenthood. Giving yourself the same recovery expectations you'd give any other surgery - because that's what it is - isn't indulgent, it's accurate.",
          "If something feels wrong rather than just uncomfortable - increasing redness, fever, the wound opening, or pain that's getting worse rather than better - contact your GP or hospital promptly rather than waiting it out.",
        ],
      },
    },
  },
  {
    slug: 'baby-led-weaning-vs-purees-and-the-2026-allergy-guidelines',
    cover: 'c-feeding',
    label: 'Starting solids',
    tag: 'Feeding',
    title: "Baby-led weaning vs purées - and what the 2026 allergy guidelines actually say",
    body: 'Both approaches to starting solids work. The bigger update most parents have missed is Australia\'s 2026 guidance on introducing allergens early.',
    readMinutes: 7,
    published: true,
    content: {
      hook: [
        "The baby-led weaning versus purées debate gets a lot of airtime, as if choosing wrong could set your baby back somehow. It can't - both are well-supported ways to start solids. The genuinely important update is a quieter one: Australia's allergy guidelines around introducing common allergens changed, and a lot of parents are working from outdated advice.",
        "Here's both, in plain terms.",
      ],
      sections: [
        {
          heading: 'Baby-led weaning vs purées: the actual difference',
          paragraphs: [
            "Purées start with smooth, spoon-fed food and gradually add texture. Baby-led weaning skips purées and offers soft, graspable finger foods from the start, letting baby feed themselves. Most Australian guidance, including from child health services, doesn't favour one over the other - a combination of both is common and completely fine.",
          ],
          bullets: [
            'Purées: easier to control quantity, often less mess, useful if starting a little earlier in the readiness window',
            "Baby-led weaning: builds fine motor and chewing skills early, follows baby's own appetite cues, more mess",
            'Readiness matters more than method - sitting well with head control, reaching for food, and losing the tongue-thrust reflex, usually around 6 months',
          ],
        },
        {
          heading: 'The 2026 update most parents have missed',
          paragraphs: [
            "Australasian Society of Clinical Immunology and Allergy (ASCIA) guidelines now recommend not delaying the introduction of common allergenic foods past 12 months, and once a food has been tolerated, keeping it in the regular rotation - at least once a week - rather than a one-off taste.",
          ],
          bullets: [
            "The eight common allergens: egg, peanut, tree nuts, cow's milk, wheat, soy, sesame, and fish",
            'Start around 6 months, alongside other solids, not before 4 months',
            'Introduce one new allergen at a time, ideally earlier in the day, so you can watch for any reaction',
            "Once tolerated, keep offering it regularly - it's the ongoing exposure, not just the first taste, that matters for prevention",
          ],
        },
        {
          heading: 'How this fits either method',
          paragraphs: [
            "Allergen introduction slots naturally into both approaches - smooth peanut butter thinned into a purée, or spread thinly on toast fingers for baby-led weaning; well-cooked egg mashed in, or offered as a soft strip. The food matters more than the method.",
          ],
        },
        {
          heading: "If your baby's higher risk",
          paragraphs: [
            "Babies with severe eczema or an existing food allergy are considered higher risk for food allergy, and ASCIA recommends speaking with your GP or an allergy specialist before introducing peanut or egg, rather than starting at home first.",
          ],
        },
      ],
      closing: {
        heading: "There's no single \"right\" way to start",
        paragraphs: [
          "Purées, baby-led weaning, or a mix of both all lead to the same place eventually. The genuinely useful thing to get right isn't the method - it's not putting off the common allergens the way earlier advice used to recommend.",
          "If you're unsure where to start, your GP or Maternal and Child Health nurse can talk through your baby's specific readiness and any allergy risk factors before you dive in.",
        ],
      },
    },
  },
  {
    slug: 'postpartum-hair-loss-why-it-happens',
    cover: 'c-wellbeing',
    label: 'Postpartum hair loss',
    tag: 'Wellbeing',
    title: 'Postpartum hair loss: why it happens, and when it stops',
    body: "Somewhere around three or four months postpartum, a lot of mums start finding handfuls of hair in the shower drain. It's almost always normal - here's why.",
    readMinutes: 5,
    published: true,
    content: {
      hook: [
        "Nobody quite prepares you for the first time you pull a literal clump of hair out of the shower drain, months after the baby, when you assumed the big physical changes were behind you.",
        "It's extremely common, it has a name, and there's a fairly predictable timeline attached to it.",
      ],
      sections: [
        {
          heading: 'Why it happens',
          paragraphs: [
            "During pregnancy, rising hormones extend the growth phase of hair, so less falls out than usual - which is why a lot of mums notice thicker, fuller hair while pregnant. After birth, hormone levels drop sharply, and all that hair that was \"held onto\" enters the shedding phase at once. The medical term is telogen effluvium, and it affects up to 90% of new mums to some degree.",
          ],
          bullets: [
            'Usually starts around 2-4 months postpartum',
            'Peaks around 3-4 months',
            'Most mums see visible regrowth by 6-12 months, often with a fringe of shorter "baby hairs" growing back in first',
          ],
        },
        {
          heading: 'What actually helps',
          bullets: [
            "A gentle, volumising shampoo - it won't stop shedding, but can make hair feel less flat while it's happening",
            "A softer brush and looser styles reduce breakage on hair that's already more fragile",
            'Iron and vitamin levels are worth mentioning at a postpartum check if shedding feels unusually heavy - genuine deficiency can compound normal postpartum shedding',
            'A trim can make regrowth less noticeable in the short term, if the wispy new-growth "halo" is bothering you',
          ],
        },
        {
          heading: "When it's worth checking with a GP",
          paragraphs: [
            "Ordinary postpartum shedding tapers off within a year. If hair loss is still heavy well past 12 months, or you notice actual bald patches rather than general thinning, that's worth a GP conversation - it's less common, but other causes (thyroid changes are a frequent one postpartum) are worth ruling out.",
          ],
        },
      ],
      closing: {
        heading: 'It grows back - genuinely',
        paragraphs: [
          "This is one of the more dramatic-looking postpartum changes and also one of the most reliably temporary. The handfuls in the drain are hair your body held onto during pregnancy, all catching up at once - not hair you're losing for good.",
          "If it's happening around the same time as everything else in the fourth trimester, it can feel like one more thing - but out of everything on that list, this is one of the ones that fully resolves on its own.",
        ],
      },
    },
  },
  {
    slug: 'pelvic-floor-recovery-after-birth',
    cover: 'c-wellbeing',
    label: 'Pelvic floor recovery',
    tag: 'Wellbeing',
    title: 'Pelvic floor recovery after birth: what actually helps (vaginal birth or caesarean)',
    body: "Pregnancy itself affects the pelvic floor, not just labour - which means every mum's recovery is worth taking seriously, regardless of how baby arrived.",
    readMinutes: 6,
    published: true,
    content: {
      hook: [
        "Pelvic floor advice tends to get handed out as an afterthought - a pamphlet at the six-week check, a vague instruction to \"do your exercises\". It deserves more than that, for every mum, not only after a vaginal birth.",
        "Here's what's actually going on, and what genuinely helps.",
      ],
      sections: [
        {
          heading: "It's not just about labour",
          paragraphs: [
            "The pelvic floor is a sling of muscles supporting the bladder, bowel and uterus, and it's under real strain throughout pregnancy - not only during birth. That means caesarean birth reduces some risks but doesn't remove pelvic floor concerns entirely; nine months of pregnancy affects those muscles regardless of how the baby is born.",
          ],
          bullets: [
            'Leaking urine when coughing, sneezing, laughing, or exercising (stress incontinence)',
            'A heavy, dragging feeling, especially by the end of the day',
            'Reduced sensation or persistent lower back pain',
            'Some symptoms only show up months later, once regular activity resumes',
          ],
        },
        {
          heading: 'What early recovery actually involves',
          paragraphs: [
            "Very gentle pelvic floor engagement can usually start within the first days postpartum - not a hard \"squeeze and hold\" program, but reconnecting with the muscles. Getting the technique right matters more than doing a lot of repetitions incorrectly, which is where a lot of self-directed programs go wrong.",
          ],
          bullets: [
            'A referral to a women\'s health physiotherapist is available through a GP, often with a Medicare rebate under a chronic disease management plan',
            "A proper assessment can tell you whether your pelvic floor needs strengthening, needs to relax, or both - which is genuinely hard to judge yourself",
            'Most guidance recommends avoiding high-impact exercise (running, jumping) until cleared, typically from around 3 months, sometimes later',
          ],
        },
        {
          heading: 'Common misconceptions',
          bullets: [
            '"I had a caesarean so I don\'t need to worry about it" - pregnancy itself is the bigger factor, not just the birth method',
            '"Leaking a little is just normal after having a baby" - common, yes; something to just live with, no, it\'s very treatable',
            '"Kegels fix everything" - some people actually need to relax an overly tight pelvic floor, not strengthen it further, which is why a proper assessment matters more than generic advice',
          ],
        },
        {
          heading: 'When to get it checked',
          paragraphs: [
            "Any leaking, heaviness, or pain is worth raising at your six-week check rather than waiting to see if it resolves on its own - and if it wasn't raised then, it's not too late to ask for a referral later. This is genuinely common, genuinely treatable, and genuinely under-discussed.",
          ],
        },
      ],
      closing: {
        heading: "This one's easy to deprioritise - and worth not skipping",
        paragraphs: [
          "Between the baby's appointments and your own recovery, the pelvic floor is often the thing that quietly slides down the list. It's worth moving back up - not because something's necessarily wrong, but because a proper assessment early on tends to be far more effective than trying to fix a problem years down the track.",
          "If you're already tracking your own recovery milestones alongside baby's, this is one worth adding to the list.",
        ],
      },
    },
  },
]

export function getStoryBySlug(slug: string): Story | undefined {
  return stories.find((s) => s.slug === slug)
}
