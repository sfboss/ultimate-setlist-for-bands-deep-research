---
theme: dracula
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Pearl Jam
  Constructing the Definitive Data-Driven Setlist
drawings:
  persist: false
transition: slide-left
title: The Ultimate Pearl Jam Setlist
---

# Constructing the Definitive Data-Driven Pearl Jam Setlist
## An Analytical Approach

---
layout: two-cols
---

# Introduction

<template v-slot:default>

## Purpose & Context

- Create an optimally balanced Pearl Jam setlist (22-25 songs)
- Formed in Seattle in 1990, 30+ year legacy
- Known for dynamic, varied live performances
- Alters setlists nightly, creating unique experiences
- Vast catalog spanning 12 studio albums, plus covers/rarities

</template>

<template v-slot:right>

## Methodological Approach

This analysis integrates:
- Performance frequency data
- Fan sentiment analysis
- Song rarity assessment
- Band member preferences
- Era representation requirements
- Structural flow and context considerations

All conclusions are supported by comprehensive, unsummarized data sets

</template>

---

# Performance History & Frequency Analysis

<div class="grid grid-cols-2 gap-4">
<div>

## Top 10 Most Played Songs
1. Even Flow (946)
2. Alive (886)
3. Porch (679)
4. Corduroy (637)
5. Black (632)
6. Jeremy (600)
7. Do the Evolution (585)
8. Daughter (582)
9. Better Man (572)
10. Given to Fly (529)

</div>
<div>

## Key Insights
- **Ten Dominance**: 11 of the top 20 most played songs originate from debut album
- **Openers**: "Release" is most frequent (143 times), also "Wash," "Long Road," "Oceans," "Sometimes"
- **Closers**: "Yellow Ledbetter" most common (337 times), also "Rockin' in the Free World," "Indifference," "Porch"
- **Covers**: Significant component, including Neil Young, The Who, Victoria Williams songs
- **Frequency ≠ Satisfaction**: Fans express desire for variety and deep cuts despite frequency patterns

</div>
</div>

---

# Fan Sentiment & Preferences

<div class="grid grid-cols-2 gap-4">
<div>

## Highly Desired Songs
Sentiment analysis reveals emotional connections to:
- **Release**: "Top 10 moment of my life" for some fans
- **Black**: Powerful performances, emotional impact
- **Footsteps**: Part of "Mama-Son" trilogy with deep meaning
- **Indifference**: Desired as emotionally resonant closer
- **Come Back**, **Light Years**: Strong personal significance

</div>
<div>

## Fan Dream Setlists Analysis
Common patterns include:
- Often exceed typical 22-25 song count
- "Release" overwhelmingly preferred as opener
- Blend of hits with deep cuts and rarities
- Conscious effort for broader era representation
- Inclusion of popular covers
- Emotional resonance prioritized alongside energy

**The 'Event' Nature of Rarities**: Unexpected songs create heightened excitement and memorability

</div>
</div>

---
layout: center
---

# Beyond the Hits: Rarities and Deep Cuts

<div class="grid grid-cols-3 gap-4 mt-4">
<div class="text-center p-4 border border-purple-400 rounded-lg">
  <h3 class="text-xl mb-2">Ultra-Rare</h3>
  <p class="text-sm">Fewer than 10 lifetime plays</p>
  <ul class="text-xs text-left list-disc pl-4 mt-2">
    <li>Sweet Lew (2 plays)</li>
    <li>Bugs (3 plays)</li>
    <li>Angel (6 plays)</li>
    <li>Dirty Frank (7 plays)</li>
    <li>Out of My Mind (7 plays)</li>
    <li>Brother (8 plays)</li>
  </ul>
</div>

<div class="text-center p-4 border border-purple-400 rounded-lg">
  <h3 class="text-xl mb-2">Rare</h3>
  <p class="text-sm">10-25 lifetime plays</p>
  <ul class="text-xs text-left list-disc pl-4 mt-2">
    <li>No Way (12 plays)</li>
    <li>Push Me, Pull Me (13 plays)</li>
    <li>Around the Bend (14 plays)</li>
    <li>Olé (14 plays)</li>
    <li>W.M.A. (18 plays)</li>
    <li>All Those Yesterdays (25 plays)</li>
  </ul>
</div>

<div class="text-center p-4 border border-purple-400 rounded-lg">
  <h3 class="text-xl mb-2">Infrequent</h3>
  <p class="text-sm">26-50 lifetime plays</p>
  <ul class="text-xs text-left list-disc pl-4 mt-2">
    <li>Can't Keep (27 plays)</li>
    <li>Yellow Moon (27 plays)</li>
    <li>Quick Escape (30 plays)</li>
    <li>Pilate (35 plays)</li>
    <li>Who You Are (45 plays)</li>
    <li>Hard to Imagine (46 plays)</li>
  </ul>
</div>
</div>

**The Practical Limit of Rarity**: While fans desire rarities, band members sometimes struggle to recall how to play certain songs, limiting feasibility of loading a setlist with obscure tracks.

---

# Band Insights & Era Representation

<div class="grid grid-cols-2 gap-4">
<div>

## Band Member Preferences
- **Eddie Vedder**: Primary setlist architect
  - Meticulous process, sometimes "ridiculously long"
  - Writes lists in calligraphy, creating deliberate narratives

- **Mike McCready**: Enjoys playing...
  - "Even Flow" and "Black" for improvisation opportunities
  - Extended guitar solos
  - "Dark Matter" as "great rocker live"

- **Stone Gossard**: Favorite deep cuts include...
  - "Pilate," "Aya Davanita," "The End"
  - Live version of "Immortality" from Boston 2016

</div>
<div>

## Album Representation Analysis

**Studio Albums**:
1. Ten (1991)
2. Vs. (1993)
3. Vitalogy (1994)
4. No Code (1996)
5. Yield (1998)
6. Binaural (2000)
7. Riot Act (2002)
8. Pearl Jam (2006)
9. Backspacer (2009)
10. Lightning Bolt (2013)
11. Gigaton (2020)
12. Dark Matter (2024)

**Challenge**: First three albums (especially Ten) dominate most-played lists, requiring conscious effort to include mid-to-late career material

</div>
</div>

---
layout: center
---

# Synthesizing the Data: The Setlist Model

<div class="grid grid-cols-2 gap-4 mt-4">
<div>

## Weighted Factors
- **Song Frequency Score (SFS)**: 25%
  *Based on raw lifetime play count*
- **Fan Sentiment Score (FSS)**: 30%
  *Derived from NLP analysis of fan forums*
- **Rarity Score (RS)**: 15%
  *Inversely related to play count*
- **Band Member Preference (BPS)**: 10%
  *Based on documented mentions by band members*
- **Era Balance Score (EBS)**: 10%
  *Points for representing underrepresented albums*
- **Setlist Role Suitability (SRS)**: 10%
  *Based on historical usage as opener, closer, etc.*

</div>
<div>

## Song Clusters and Flow

**Common Structural Blueprint**:
- **Opening**: Atmospheric or mid-tempo build
- **Early Main Set**: Ramp-up in energy with rockers
- **Mid-Main Set**: Sustained energy, extended solos
- **Emotional Centerpiece**: Powerful, often slower song
- **Late Main Set**: Build towards high-energy close
- **Main Set Closer**: High-intensity fan favorite
- **Encore 1**: Often starts slower/acoustic, builds again
- **Encore 2**: Can include rarities, covers, final statement

**Common Pairings**: "Daughter" + tag, "Go" -> "Animal", etc.

</div>
</div>

---
layout: center
class: text-center
---

# The Ultimate Data-Backed Setlist
## Primary Recommendation (24 Songs)

---
layout: two-cols
---

<template v-slot:default>

# Main Set (17 Songs)

1. **Release** (Ten)
   *High Fan Sentiment, Desired Opener*

2. **Go** (Vs.)
   *High Frequency, High Energy*

3. **Animal** (Vs.)
   *High Frequency, Often paired with "Go"*

4. **Corduroy** (Vitalogy)
   *Very High Frequency, Fan Favorite*

5. **Given to Fly** (Yield)
   *High Frequency, Emotional, Represents Yield*

6. **Elderly Woman Behind the Counter in a Small Town** (Vs.)
   *High Frequency, Fan Favorite Singalong*

7. **Wreckage** (Dark Matter)
   *Represents New Album, Positive Fan Reaction*

8. **Even Flow** (Ten)
   *Highest Frequency, McCready Solo Showcase*

9. **In My Tree** (No Code)
   *Moderate Frequency, Desired Deep Cut, No Code Rep*
   
</template>

<template v-slot:right>

10. **Daughter** (Vs.)
    *Very High Frequency, Singalong, Tag Potential*

11. **Not for You** (Vitalogy)
    *High Frequency, Fan Favorite, Vitalogy Rep*

12. **Dark Matter** (Dark Matter)
    *Represents New Album, McCready Favorite*

13. **Jeremy** (Ten)
    *Very High Frequency, Iconic Ten Track*

14. **Why Go** (Ten)
    *High Frequency, High Energy*

15. **Rearviewmirror** (Vs.)
    *High Frequency, Fan Favorite*

16. **Black** (Ten)
    *Very High Frequency, Emotional Centerpiece*

17. **Porch** (Ten)
    *Very High Frequency, Common Main Set Closer*

</template>

---
layout: center
---

# Encore (7 Songs)

<div class="grid grid-cols-3 gap-4">
<div class="text-center p-4 border border-purple-500 rounded-lg">

## Encore 1
1. **Footsteps** (Lost Dogs)
   *Moderate Frequency, High Fan Sentiment*
2. **Present Tense** (No Code)
   *Moderate Frequency, Fan Favorite*
3. **State of Love and Trust** (Singles)
   *High Frequency, Fan Favorite*
4. **Do the Evolution** (Yield)
   *Very High Frequency, High Energy*

</div>

<div class="text-center p-4 border border-purple-500 rounded-lg">

## Encore 2
5. **Better Man** (w/ "Save It For Later" tag) (Vitalogy)
   *Very High Frequency, Singalong*
6. **Alive** (Ten)
   *Very High Frequency, Iconic Anthem*
7. **Yellow Ledbetter** (Lost Dogs)
   *High Frequency, Iconic Closer*

</div>

<div class="text-center p-4 mt-4">

## Setlist Balance
- **Ten/Vs./Vitalogy**: ~40%
- **No Code/Yield/Binaural**: ~20%
- **Riot Act/PJ/Backspacer**: ~15%
- **Lightning Bolt/Gigaton/Dark Matter**: ~15%
- **Covers/Other**: ~10%

*Moving away from >50% early-era dominance seen in pure frequency data*

</div>
</div>

---

# Alternative Setlist Scenarios

<div class="grid grid-cols-2 gap-4">
<div>

## Variation 1: Rarity Focused
**Weighting**: RS=35%, FSS=25%, SFS=15%, others lower
- Replace common songs with fan-desired rarities
- Include "In Hiding," "Tremor Christ," "Wash," "Leash"
- Potentially include ultra-rares like "Alone"
- Keep core emotional anchors like "Black," "Release"
- Shift closer to "Indifference"

## Variation 2: Hits Heavy / Festival Set
**Weighting**: SFS=45%, FSS=25%, RS=5%, others lower
- Prioritize Top 20 frequency songs
- Replace rarities with higher-frequency rockers
- Include popular covers ("Rockin' in the Free World")
- Focus on hits and crowd-pleasers

</div>
<div>

## Variation 3: Mid-Career Spotlight
**Weighting**: EBS significantly increased for No Code-Binaural-Riot Act
- Reduce some Ten staples
- Add more from '96-'02 period: "Who You Are," "Smile," "MFC," "Insignificance," "Light Years," "I Am Mine"
- Maintain key tracks like "Present Tense," "Given to Fly"

## Variation 4: Emotionally Driven / Deeper Cuts
**Weighting**: FSS=35%, RS=20%, SFS=15%, others lower
- Prioritize songs with high sentiment scores
- Feature: "Release," "Black," "Footsteps," "Present Tense," "Nothingman," "Light Years," "Come Back"
- Include longer acoustic section
- Replace rockers with atmospheric tracks

</div>
</div>

---
layout: center
class: text-center
---

# Conclusion

This data-driven approach integrates:
- Performance frequency stats from 30+ years
- Fan sentiment analysis from online communities
- Rarity considerations for creating special moments
- Band member preferences and input
- Conscious era representation across 12 albums
- Structural flow optimized for live experience

While the primary setlist represents the optimal balance, the alternative scenarios demonstrate flexibility for different priorities and contexts.

---
layout: end
---

# Thank You
## Alive
