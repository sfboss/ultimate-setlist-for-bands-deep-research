# Grateful Dead Song Collection Data

Full JSON data for Grateful Dead song collections.

```json
{
  "most_frequently_performed": {
    "top_20": [
      "Drums",
      "Space",
      "Playing in the Band",
      "Me and My Uncle",
      "Sugar Magnolia",
      "I Know You Rider",
      "China Cat Sunflower",
      "Not Fade Away",
      "The Other One",
      "Truckin'",
      "Jack Straw",
      "Good Lovin'",
      "Mexicali Blues",
      "New Minglewood Blues",
      "Tennessee Jed",
      "Promised Land",
      "Deal",
      "Around and Around",
      "Looks Like Rain", 
      "Bertha"
    ],
    "notable_lower_frequency_fan_favorites": [
      "Dark Star",
      "Eyes of the World",
      "Morning Dew",
      "Scarlet Begonias",
      "Fire on the Mountain",
      "Help on the Way",
      "Slipknot!",
      "Franklin's Tower"
    ]
  },
  "by_era": {
    "primal_dead_1965_1969": [
      "Dark Star",
      "St. Stephen",
      "The Eleven",
      "Viola Lee Blues",
      "Turn On Your Lovelight",
      "Good Morning, School Girl",
      "Caution (Do Not Stop on Tracks)",
      "Cryptical Envelopment",
      "The Other One",
      "New Potato Caboose",
      "China Cat Sunflower",
      "Beat It On Down The Line",
      "Hard to Handle",
      "Feedback",
      "And We Bid You Goodnight"
    ],
    "workingman_american_beauty_1970_1972": [
      "Uncle John's Band",
      "Casey Jones",
      "Friend of the Devil",
      "Sugar Magnolia",
      "Truckin'",
      "Ripple",
      "Box of Rain",
      "Brokedown Palace",
      "Dire Wolf",
      "Cumberland Blues",
      "Bertha",
      "Playing in the Band",
      "Wharf Rat",
      "Jack Straw",
      "Don't Ease Me In"
    ],
    "jazzy_exploratory_peak_1972_1974": [
      "Eyes of the World",
      "Weather Report Suite",
      "China Cat Sunflower",
      "I Know You Rider",
      "Playing in the Band",
      "Dark Star",
      "Here Comes Sunshine",
      "Row Jimmy",
      "They Love Each Other",
      "Stella Blue",
      "Mississippi Half-Step Uptown Toodeloo",
      "Let It Grow",
      "Ship of Fools"
    ],
    "post_hiatus_two_drummers_1976_1979": [
      "Terrapin Station",
      "Estimated Prophet",
      "Scarlet Begonias",
      "Fire on the Mountain",
      "Dancing in the Street",
      "Samson and Delilah",
      "Help on the Way",
      "Slipknot!",
      "Franklin's Tower",
      "The Music Never Stopped",
      "Lazy Lightning",
      "Supplication"
    ],
    "brent_mydland_era_1979_1990": [
      "Far From Me",
      "Easy to Love You",
      "Blow Away",
      "Just a Little Light",
      "Dear Mr. Fantasy",
      "Hey Pocky Way",
      "Touch of Grey",
      "Feel Like a Stranger",
      "Althea", 
      "Cassidy",
      "West L.A. Fadeaway",
      "Throwing Stones",
      "Hell in a Bucket"
    ],
    "final_era_1990_1995": [
      "Lazy River Road",
      "So Many Roads",
      "Corrina",
      "Liberty",
      "Days Between",
      "Eternity",
      "Childhood's End",
      "Way to Go Home",
      "Samba in the Rain",
      "Easy Answers"
    ]
  },
  "signature_sequences": {
    "china_cat_rider": {
      "songs": ["China Cat Sunflower", "I Know You Rider"],
      "details": {
        "first_paired": "1969-09-30",
        "performance_count": "over 500",
        "typical_placement": "second-set opener",
        "transition_features": "Often incorporated 'Feelin' Groovy' jam or 'Mind Left Body Jam'"
      }
    },
    "scarlet_fire": {
      "songs": ["Scarlet Begonias", "Fire on the Mountain"],
      "details": {
        "first_paired": "1977-03-18",
        "scarlet_count": "~317",
        "fire_count": "~254",
        "solo_fire_count": "~15",
        "typical_placement": "second-set highlight",
        "transition_features": "B Mixolydian jam ground for Garcia exploration"
      }
    },
    "help_slip_frank": {
      "songs": ["Help on the Way", "Slipknot!", "Franklin's Tower"],
      "details": {
        "debut": "1975",
        "help_count": "~111",
        "franklin_count": "~222",
        "performance_periods": "1975-1977, 1983-1985, 1989-1995",
        "notable_version": "8/13/75 (One from the Vault)"
      }
    }
  },
  "ultimate_setlist": {
    "first_set": [
      "Bertha",
      "Jack Straw",
      "Friend of the Devil",
      "Mexicali Blues",
      "Sugaree",
      "Me and My Uncle",
      "Tennessee Jed",
      "Looks Like Rain",
      "Brown-Eyed Women",
      "The Music Never Stopped"
    ],
    "second_set": [
      "China Cat Sunflower →",
      "I Know You Rider",
      "Estimated Prophet",
      "Eyes of the World →",
      "Drums →",
      "Space →",
      "The Other One →",
      "Wharf Rat →",
      "Sugar Magnolia"
    ],
    "encore": [
      "Ripple (Acoustic)",
      "One More Saturday Night"
    ]
  },
  "era_focused_alternatives": {
    "primal_dead_1968_1970": {
      "first_set": [
        "Good Morning, School Girl",
        "Beat It On Down the Line",
        "Hard to Handle",
        "Me and My Uncle",
        "Cryptical Envelopment →",
        "Drums →",
        "The Other One →",
        "Cryptical Envelopment",
        "New Potato Caboose",
        "Turn On Your Lovelight"
      ],
      "second_set": [
        "Dark Star →",
        "St. Stephen →",
        "The Eleven →",
        "Caution (Do Not Stop on Tracks) →",
        "Feedback →",
        "And We Bid You Goodnight"
      ]
    },
    "workingman_american_beauty_1970_1972": {
      "first_set_acoustic": [
        "Don't Ease Me In",
        "Friend of the Devil",
        "Dire Wolf",
        "Ripple",
        "Brokedown Palace",
        "Uncle John's Band"
      ],
      "second_set_electric": [
        "Casey Jones",
        "Truckin'",
        "Cumberland Blues",
        "Sugar Magnolia",
        "Bertha",
        "Playing in the Band",
        "Wharf Rat",
        "Not Fade Away →",
        "Goin' Down the Road Feeling Bad →",
        "Not Fade Away"
      ],
      "encore": [
        "Box of Rain"
      ]
    },
    "brent_era_1979_1990": {
      "first_set": [
        "Feel Like a Stranger",
        "Althea",
        "Cassidy",
        "Far From Me",
        "Me and My Uncle →",
        "Big River",
        "Ramble On Rose",
        "Blow Away",
        "Deal"
      ],
      "second_set": [
        "Scarlet Begonias →",
        "Fire on the Mountain",
        "Estimated Prophet →",
        "Eyes of the World →",
        "Drums →",
        "Space →",
        "Dear Mr. Fantasy →",
        "Hey Jude (Reprise)",
        "Throwing Stones →",
        "Not Fade Away"
      ],
      "encore": [
        "Touch of Grey",
        "Just a Little Light"
      ]
    }
  }
}

```
