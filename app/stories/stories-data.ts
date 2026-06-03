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
    slug: 'how-i-finally-put-down-the-invisible-to-do-list',
    cover: 'c-wellbeing',
    label: 'The mental load',
    tag: 'Wellbeing',
    title: 'How I finally put down the invisible to-do list',
    body: "One mum's story of sharing the load — and what changed when she stopped holding it all in her head.",
    readMinutes: 8,
    published: true,
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
    slug: 'building-our-family-our-way',
    cover: 'c-family',
    label: 'Two mums, one family',
    tag: 'Family',
    title: 'Building our family, our way',
    body: 'A heartfelt look at parenthood beyond the traditional mould — and why every family deserves to be seen.',
    readMinutes: 5,
    published: false,
  },
  {
    slug: 'the-return-to-work-juggle-made-gentler',
    cover: 'c-returning',
    label: 'Going back to work',
    tag: 'Returning',
    title: 'The return-to-work juggle, made gentler',
    body: 'Childcare, routines and the guilt nobody warns you about — plus the systems that actually helped.',
    readMinutes: 6,
    published: false,
  },
  {
    slug: 'everything-i-forgot-the-second-time',
    cover: 'c-siblings',
    label: 'Second time around',
    tag: 'Siblings',
    title: 'Everything I forgot the second time',
    body: "Turns out you don't remember a thing. How PAM became the brain a tired mum-of-two desperately needed.",
    readMinutes: 5,
    published: false,
  },
]

export function getStoryBySlug(slug: string): Story | undefined {
  return stories.find((s) => s.slug === slug)
}
