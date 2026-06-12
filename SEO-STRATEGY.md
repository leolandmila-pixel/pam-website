# PAM — SEO + AEO Strategy

Working doc. Goal: rank for what mums/parents actually search for, AND get PAM cited when they ask an LLM "is there an app that…".

---

## 1. How to use this doc

1. Paste each cluster of seed keywords into SEMrush (Keyword Magic Tool → bulk).
2. Filter for Australia (geo: AU).
3. Export volume + difficulty (KD%) + intent into a sheet.
4. Prioritise: target everything with KD < 30 first; for KD 30–60, target only if volume > 200; ignore KD > 60 unless it's a strategic brand term.
5. Map winners back to existing or new pages (Section 4 below).

---

## 2. Seed keywords — by cluster

### A. Mental load / emotional (top-of-funnel blog)
- mental load mum
- mental load parenting
- mental load mother
- mental load motherhood
- mental load family
- invisible labour parenting
- invisible workload mum
- mum overwhelm
- mum burnout
- new mum overwhelm
- mental load partner
- how to share mental load
- how to explain mental load to husband
- emotional labour parenting
- cognitive load parenting
- mental load examples
- mental load symptoms
- am I doing too much as a mum

### B. New-baby practical (mid-funnel)
- newborn checklist
- newborn checklist australia
- first week with newborn
- first month with baby
- what to expect first weeks newborn
- newborn essentials
- newborn appointments schedule
- baby admin checklist
- new mum checklist
- new parent checklist
- bringing baby home checklist
- baby first year milestones
- baby development milestones tracker
- 3 month old milestones
- 6 month old milestones

### C. Australian-specific admin (low competition, high intent)
- mch visit schedule
- mch visit ages
- maternal child health visits victoria
- blue book appointments victoria
- blue book schedule nsw
- personal health record book qld
- immunisation schedule australia 2026
- baby immunisation schedule australia
- registering a birth victoria
- registering a birth nsw
- centrelink newborn upfront payment
- newborn supplement centrelink
- parental leave pay eligibility
- medicare newborn enrolment
- gp 6 week check baby

### D. Family organisation / shared tracking (commercial intent — closest to PAM's product)
- family organisation app
- family organiser app australia
- shared family calendar app
- best family planner app
- mum planner app
- parenting app for couples
- shared baby tracker app
- baby tracker app for partners
- family admin app
- family management app
- baby tracker app australia
- baby feed tracker
- baby sleep tracker app
- baby tracker for two parents
- co-parenting app
- family schedule app

### E. Competitor + comparison searches (write a comparison page for each)
- cozi alternative
- cozi vs
- tinybeans alternative
- huckleberry alternative
- glow baby alternative
- best baby tracker app australia
- best family app australia
- best mum app
- best app for new mums

### F. Memory / capturing (matches Memories tab)
- baby memory app
- baby keepsake app
- voice notes baby
- baby journal app
- baby milestones photo app
- baby first year journal
- digital baby book

### G. Long-tail question searches (high AEO value — see Section 3)
- is there an app for the mental load
- is there an app that reminds me of baby appointments
- app to track baby feeds and partner can see
- app where both parents can log baby info
- app that tells me what to do for newborn
- what app should I use for newborn
- best app for baby admin
- what app helps with parenting overwhelm
- can chatgpt help me organise being a mum
- how to stop forgetting things as a new mum

### H. PAM brand defensive (start ranking before someone else does)
- pam app
- pam parental admin manager
- parental admin manager
- pam mum app

---

## 3. AEO (Answer Engine Optimisation) strategy

When parents ask ChatGPT/Claude/Gemini/Perplexity:
- "Is there an app that helps me share the mental load with my husband?"
- "What's the best app for tracking my newborn in Australia?"
- "How do I remember everything as a new mum?"

…we want PAM to appear in the cited answer. LLMs pull from:
1. **Indexed web content with our brand named** (blogs, press, app store, review sites, Reddit).
2. **Schema-marked structured content** (FAQ schema, Product schema, Organization schema).
3. **High-authority parenting sites that mention PAM** (Mum Central, Kidspot, Babyology, Practical Parenting, etc.).

### What to do
- **Every blog post must answer one question directly in the first 60 words.** Then expand. LLMs grab the first paragraph.
- **Add FAQ schema** to every blog post and feature page (use `react-schemaorg` or hand-roll JSON-LD).
- **Write a "PAM vs…" comparison page** for each top competitor.
- **Pitch guest posts** to Mum Central, Kidspot, Babyology — even one mention each puts us in LLM training data.
- **Reddit + FB strategy:** seed mentions in r/AustralianParenting, r/BabyBumpsandBeyondAu, big AU mum FB groups (organic, not spammy — answer questions, reference PAM where genuinely useful).
- **App store listing optimisation** — the description should answer "what does this app do" in plain language matching the long-tail queries above.

### Target answer patterns (write content that sounds like the answer to these)
| Question pattern | Page we need |
|---|---|
| "Best [feature] app Australia" | `/blog/best-X-app-australia` listicle with PAM #1 |
| "App that does X" | `/features/X` with FAQ block answering it directly |
| "How do I [parenting problem]" | `/blog/how-to-X` with PAM positioned as the tool |
| "Is there an app for [problem]" | `/blog/best-app-for-X` |
| "What app should I use for [stage]" | `/blog/new-mum-app-guide`, `/blog/newborn-app-guide` |

---

## 4. Page / content mapping

### Existing pages → primary keyword target
| Page | Primary keyword | Secondary |
|---|---|---|
| `/` (Homepage) | family organisation app australia | parenting app, mum app australia |
| `/about` | (brand) | — |
| `/contact` | (brand) | — |
| `/stories/what-i-wish-someone-had-told-me-about-week-one` | first week with newborn | newborn checklist australia |
| `/stories/how-i-finally-put-down-the-invisible-to-do-list` | mental load mum | invisible labour parenting |
| `/stories/the-voice-note-ill-treasure-forever` | baby memory app | baby keepsake app |

### Priority new pages (write these next)
1. **`/features/mental-load`** — "PAM is the app that takes the mental load off"
2. **`/features/shared-tracking`** — both partners see everything
3. **`/features/newborn-checklist`** — pre-loaded AU checklist (MCH, immunisations, birth reg)
4. **`/blog/best-family-organisation-app-australia-2026`** — listicle, PAM #1
5. **`/blog/best-baby-tracker-app-for-couples`** — comparison
6. **`/blog/mch-visit-schedule-victoria-complete-guide`** — pure SEO play, AU-only competition
7. **`/blog/immunisation-schedule-australia-2026`** — same logic
8. **`/blog/newborn-checklist-australia`** — top-funnel grabber
9. **`/blog/sharing-the-mental-load-with-your-partner`** — emotional / shareable
10. **`/blog/centrelink-newborn-payment-guide`** — high-intent informational
11. **`/compare/pam-vs-cozi`**
12. **`/compare/pam-vs-tinybeans`**
13. **`/compare/pam-vs-huckleberry`**

### Blog calendar — first 20 (rough order, pick by SEMrush volume)
1. Best family organisation app Australia 2026
2. Newborn checklist Australia — your first 6 weeks
3. MCH visit schedule Victoria — what happens at each
4. Mental load — what it actually means and how to share it
5. How to register a baby's birth in [each state] — series
6. Best baby tracker app for couples
7. How to stop forgetting things as a new mum
8. Immunisation schedule Australia 2026
9. First month with a newborn — what to expect
10. PAM vs Cozi vs Tinybeans — which app is right for you
11. Centrelink newborn payments — what to claim and when
12. Sharing the load — a guide for partners
13. Baby milestones by month — 0 to 12
14. How to capture baby memories without losing your mind
15. The invisible to-do list of motherhood
16. What to bring to a 6-week GP check
17. Best apps for new parents in Australia
18. Setting up your shared family calendar — a guide
19. From mum to family CEO — admin systems that work
20. Why "just ask for help" doesn't fix the mental load

---

## 5. Technical SEO checklist for each page
- [ ] H1 contains primary keyword
- [ ] Meta title (≤60 chars) with primary keyword + brand
- [ ] Meta description (≤160 chars) answers the search question
- [ ] First paragraph (≤60 words) directly answers the query (AEO)
- [ ] FAQ schema JSON-LD block with 3–5 Q&As
- [ ] Internal links to 2+ related PAM pages
- [ ] One image with descriptive alt text
- [ ] OG image set (`/metadata.ts`)
- [ ] URL slug = primary keyword

---

## 6. Next step

1. Paste the seed list (sections A–H above) into SEMrush Keyword Magic Tool, AU geo.
2. Export to CSV.
3. Drop the CSV in this repo as `/keyword-research-raw.csv` — I'll prioritise from there.

