export const packages = [
  {
    id: 'vizag-city-tour',
    name: 'Vizag City Tour',
    duration: 'Full Day',
    groupSize: '4-8 persons',
    transportation: 'Tempo Traveller',
    price: 1999,
    description: 'Discover the charm of Vizag with our comprehensive city tour package. From beaches to historical sites, experience the best of the City of Destiny in one day.',
    highlights: [
      'RK Beach Visit',
      'Submarine Museum',
      'Kailasagiri Hill',
      'Buddhist Sites',
      'Local Cuisine'
    ],
    images: {
      main: '/images/packages/vizag-city-tour/main.jpg',
      gallery: [
        {
          url: '/images/packages/vizag-city-tour/rk-beach.jpg',
          title: 'RK Beach',
          description: 'Beautiful coastline with walking promenade and iconic landmarks'
        },
        {
          url: '/images/packages/vizag-city-tour/submarine-museum.jpg',
          title: 'Submarine Museum',
          description: 'Explore the historic INS Kurusura Submarine Museum'
        },
        {
          url: '/images/packages/vizag-city-tour/kailasagiri.jpg',
          title: 'Kailasagiri Hill',
          description: 'Panoramic views of the city and scenic cable car ride'
        },
        {
          url: '/images/packages/vizag-city-tour/buddhist-sites.jpg',
          title: 'Buddhist Sites',
          description: 'Ancient Buddhist monuments and cultural heritage'
        },
        {
          url: '/images/packages/vizag-city-tour/local-cuisine.jpg',
          title: 'Local Cuisine',
          description: 'Authentic Andhra cuisine and seafood specialties'
        },
        {
          url: '/images/packages/vizag-city-tour/tenneti-park.jpg',
          title: 'Tenneti Park',
          description: 'Scenic coastal park with sunset views'
        }
      ]
    },
    itinerary: [
      {
        day: 1,
        title: 'Vizag City Exploration',
        activities: [
          'Morning pickup from hotel (8:00 AM)',
          'Visit to RK Beach and Beach Road attractions',
          'Submarine Museum tour',
          'Lunch at a seaside restaurant',
          'Cable car ride to Kailasagiri Hill',
          'Visit to Rushikonda Beach',
          'Evening at Tenneti Park',
          'Drop off at hotel (7:00 PM)'
        ]
      }
    ],
    inclusions: {
      meals: true,
      accommodation: false,
      transportation: true,
      sightseeing: true,
      guide: true,
      activities: true
    },
    location: {
      name: 'Visakhapatnam',
      coordinates: {
        lat: 17.6868,
        lng: 83.2185
      },
      mapImage: '/images/packages/vizag-city-tour/location-map.jpg',
      landmarks: [
        'RK Beach',
        'Kailasagiri Hill',
        'Submarine Museum',
        'Rushikonda Beach',
        'Tenneti Park'
      ]
    },
    additionalInfo: {
      bestTimeToVisit: 'October to March',
      difficulty: 'Easy',
      thingsToCarry: [
        'Comfortable walking shoes',
        'Sun protection (hat, sunscreen)',
        'Camera',
        'Water bottle',
        'Light snacks'
      ],
      highlights: {
        beaches: ['RK Beach', 'Rushikonda Beach'],
        attractions: ['Submarine Museum', 'Kailasagiri Hill'],
        activities: ['Cable car ride', 'Beach walking', 'Photography']
      }
    }
  },
  {
    id: 'lambasingi-day-trip',
    name: 'Lambasingi Day Trip',
    duration: '1 Day',
    groupSize: '2 members',
    transportation: 'A/C 4 Seater Vehicle',
    price: 5998,
    rating: 4.0,
    description: 'Experience the enchanting beauty of Lambasingi, known as the "Kashmir of Andhra Pradesh". This comprehensive day trip takes you through misty viewpoints, strawberry plantations, and scenic waterfalls, offering a perfect blend of adventure and natural beauty.',
    highlights: [
      'Early morning start for the best views',
      'Visit to Lambasingi viewpoint',
      'Explore strawberry plantations',
      'Multiple waterfall visits',
      'Coffee plantation tour',
      'Tribal museum visit'
    ],
    images: {
      main: '/images/packages/lambasingi-day-trip/main.jpg',
      gallery: [
        {
          url: '/images/packages/lambasingi-day-trip/viewpoint.jpg',
          title: 'Lambasingi Viewpoint',
          description: 'Panoramic views of the misty valleys and hills'
        },
        {
          url: '/images/packages/lambasingi-day-trip/strawberry.jpg',
          title: 'Strawberry Plantation',
          description: 'Fresh strawberry picking experience'
        },
        {
          url: '/images/packages/lambasingi-day-trip/waterfalls.jpg',
          title: 'Kothapalli Waterfalls',
          description: 'Scenic waterfall amidst lush greenery'
        },
        {
          url: '/images/packages/lambasingi-day-trip/coffee.jpg',
          title: 'Coffee Plantation',
          description: 'Ananthagiri coffee plantation visit'
        },
        {
          url: '/images/packages/lambasingi-day-trip/tribal.jpg',
          title: 'Tribal Museum',
          description: 'Cultural heritage and tribal artifacts'
        },
        {
          url: '/images/packages/lambasingi-day-trip/caves.jpg',
          title: 'Borra Caves',
          description: 'Ancient limestone cave formations'
        }
      ]
    },
    itinerary: [
      {
        day: 1,
        title: 'Lambasingi Adventure Day',
        activities: [
          'Early morning start from Vizag (4:00 AM)',
          'Sunrise view at Lambasingi viewpoint',
          'Breakfast with local specialties',
          'Visit to apple and strawberry farms',
          'Trekking through coffee plantations',
          'Lunch at mountain view restaurant',
          'Visit to Kothapalli Waterfalls',
          'Evening return to Vizag (8:00 PM)'
        ]
      }
    ],
    inclusions: {
      meals: true,
      accommodation: false,
      transportation: true,
      sightseeing: true,
      guide: true,
      activities: true,
      details: {
        food: 'Breakfast included',
        transportation: '4 Seater A/C Vehicle',
        drinks: 'Water, tea, coffee provided',
        tickets: 'All entrance fees included',
        equipment: 'Basic outdoor gear and safety equipment'
      }
    },
    location: {
      name: 'Lambasingi',
      coordinates: {
        lat: 17.8687,
        lng: 82.5678
      },
      mapImage: '/images/packages/lambasingi-day-trip/location-map.jpg',
      landmarks: [
        'Lambasingi Viewpoint',
        'Kothapalli Waterfalls',
        'Chuprial Waterfalls',
        'Padmapuram Gardens',
        'Tribal Museum',
        'Borra Caves',
        'Galikonda Viewpoint',
        'Tyda Jungle Bells'
      ]
    },
    additionalInfo: {
      bestTimeToVisit: 'October to February (Winter season for best experience)',
      difficulty: 'Moderate',
      thingsToCarry: [
        'Warm clothing (temperature can be very low)',
        'Comfortable walking shoes',
        'Camera',
        'Water bottle',
        'Light snacks',
        'Rain protection (during monsoon)',
        'Basic medications'
      ],
      highlights: {
        viewpoints: [
          'Lambasingi Viewpoint',
          'Galikonda Viewpoint',
          'Damuku Viewpoint'
        ],
        activities: [
          'Strawberry picking',
          'Waterfall visits',
          'Cave exploration'
        ],
        attractions: [
          'Tribal Museum',
          'Coffee Plantations',
          'Padmapuram Gardens'
        ]
      }
    }
  },
  {
    id: 'vizag-araku-tourism',
    name: 'Vizag Araku Tourism',
    duration: '2 Days',
    groupSize: '2 members',
    transportation: 'A/C 4 Seater Vehicle',
    price: 9990,
    rating: 4.0,
    description: 'Experience the best of Vizag and Araku Valley with our premium tourism package. From scenic viewpoints to cultural experiences, this two-day journey offers the perfect blend of adventure, nature, and local culture.',
    highlights: [
      'Scenic drive through Tyda tunnels',
      'Borra caves exploration',
      'Coffee plantation visit',
      'Tribal museum tour',
      'Multiple viewpoint visits',
      'Waterfall experiences'
    ],
    images: {
      main: '/images/packages/vizag-araku-tourism/main.jpg',
      gallery: [
        {
          url: '/images/packages/vizag-araku-tourism/borra-caves.jpg',
          title: 'Borra Caves',
          description: 'Million-year-old limestone cave formations'
        },
        {
          url: '/images/packages/vizag-araku-tourism/coffee-plantation.jpg',
          title: 'Ananthagiri Coffee Plantation',
          description: 'Lush coffee estates with guided tours'
        },
        {
          url: '/images/packages/vizag-araku-tourism/tribal-museum.jpg',
          title: 'Tribal Museum',
          description: 'Rich cultural heritage of local tribes'
        },
        {
          url: '/images/packages/vizag-araku-tourism/chaparai.jpg',
          title: 'Chaparai Waterfalls',
          description: 'Scenic waterfall amidst valley'
        },
        {
          url: '/images/packages/vizag-araku-tourism/gardens.jpg',
          title: 'Padmapuram Gardens',
          description: 'Beautiful botanical gardens'
        },
        {
          url: '/images/packages/vizag-araku-tourism/viewpoint.jpg',
          title: 'Valley Viewpoints',
          description: 'Panoramic views of Araku Valley'
        }
      ]
    },
    itinerary: [
      {
        day: 1,
        title: 'Vizag to Araku Valley',
        activities: [
          'Pickup from Vizag city',
          'Visit Damuku View Point',
          'Explore Tyda Tunnels and Jungle Bells View Point',
          'Borra Caves exploration',
          'Optional: Katiki Water Falls visit',
          'Galikonda View Point',
          'Ananthagiri Coffee Plantation tour',
          'Sunakrametta Shooting Spot',
          'Check-in at Araku hotel',
          'Overnight stay in Araku'
        ]
      },
      {
        day: 2,
        title: 'Araku to Vizag',
        activities: [
          'Morning checkout from hotel',
          'Visit Chaparai Waterfalls',
          'Explore Padmapuram Gardens',
          'Tribal Museum tour',
          'Coffee House visit',
          'Return journey to Vizag',
          'Drop at Vizag Station/Airport'
        ]
      }
    ],
    inclusions: {
      meals: true,
      accommodation: true,
      transportation: true,
      sightseeing: true,
      guide: true,
      activities: true,
      details: {
        food: '1 Dinner, 1 Breakfast included',
        accommodation: '1 Night hotel stay in Araku',
        transportation: '4 Seater A/C Vehicle',
        drinks: 'Water provided',
        tickets: 'All entrance fees included',
        equipment: 'Basic outdoor gear and safety equipment'
      }
    },
    location: {
      name: 'Araku Valley',
      coordinates: {
        lat: 18.3273,
        lng: 82.8751
      },
      mapImage: '/images/packages/vizag-araku-tourism/location-map.jpg',
      landmarks: [
        'Borra Caves',
        'Ananthagiri Coffee Plantation',
        'Tribal Museum',
        'Chaparai Waterfalls',
        'Padmapuram Gardens',
        'Galikonda Viewpoint',
        'Tyda Jungle Bells',
        'Damuku Viewpoint'
      ]
    },
    additionalInfo: {
      bestTimeToVisit: 'September to March (Pleasant weather)',
      difficulty: 'Easy to Moderate',
      thingsToCarry: [
        'Comfortable walking shoes',
        'Light jacket or sweater',
        'Camera',
        'Water bottle',
        'Sun protection',
        'Basic medications',
        'Cash for additional expenses'
      ],
      highlights: {
        attractions: [
          'Borra Caves',
          'Tribal Museum',
          'Coffee Plantations'
        ],
        viewpoints: [
          'Galikonda Viewpoint',
          'Damuku Viewpoint',
          'Sunakrametta'
        ],
        nature: [
          'Chaparai Waterfalls',
          'Padmapuram Gardens',
          'Valley Views'
        ]
      }
    }
  },
  {
    id: 'vizag-araku-three-days',
    name: '2 Nights 3 Days Vizag, Araku',
    duration: '3 Days',
    groupSize: '2 members',
    transportation: 'A/C 4 Seater Vehicle',
    price: 17699,
    rating: 4.0,
    description: 'Experience the complete beauty of Vizag and Araku Valley with our comprehensive three-day package. From city attractions to mountain adventures, this tour covers the best of both worlds with comfortable stays and scenic drives.',
    highlights: [
      'Vizag city tour with beach visits',
      'Museum explorations',
      'Scenic mountain drives',
      'Cave adventures',
      'Coffee plantation tour',
      'Cultural experiences'
    ],
    images: {
      main: '/images/packages/vizag-araku-three-days/main.jpg',
      gallery: [
        {
          url: '/images/packages/vizag-araku-three-days/beaches.jpg',
          title: 'Vizag Beaches',
          description: 'Beautiful coastline including RK Beach and Rushikonda'
        },
        {
          url: '/images/packages/vizag-araku-three-days/museums.jpg',
          title: 'City Museums',
          description: 'Historical and cultural exhibitions'
        },
        {
          url: '/images/packages/vizag-araku-three-days/kailasagiri.jpg',
          title: 'Kailasagiri',
          description: 'Panoramic city views and Shiva statue'
        },
        {
          url: '/images/packages/vizag-araku-three-days/borra-caves.jpg',
          title: 'Borra Caves',
          description: 'Ancient limestone cave formations'
        },
        {
          url: '/images/packages/vizag-araku-three-days/coffee.jpg',
          title: 'Coffee Plantation',
          description: 'Ananthagiri coffee estates'
        },
        {
          url: '/images/packages/vizag-araku-three-days/tribal.jpg',
          title: 'Tribal Culture',
          description: 'Local tribal heritage and museum'
        }
      ]
    },
    itinerary: [
      {
        day: 1,
        title: 'Vizag Local Sightseeing',
        activities: [
          'Pickup from Vizag City',
          'Hotel check-in and fresh up',
          'Visit Bheemili Beach',
          'Explore Thotlakonda View point',
          'Tour Ramanaidu Studio',
          'Relax at Rushikonda Beach',
          'Visit Vishaka Museum',
          'Kali Matha Temple darshan',
          'Kailashgiri Shiva Statue visit',
          'Explore R.K Beach',
          'Tour Submarine Museum',
          'Visit Aircraft Museum',
          'Return to hotel for overnight stay'
        ]
      },
      {
        day: 2,
        title: 'Vizag to Araku Journey',
        activities: [
          'Hotel checkout after breakfast',
          'Drive to Araku Valley',
          'Visit Damuku View Point',
          'Explore Tyda Tunnels and Jungle Bells',
          'Tour Borra caves',
          'Optional: Katiki Water Falls visit',
          'Stop at Galikonda View Point',
          'Visit Ananthagiri Coffee Plantation',
          'Check-in at Araku resort',
          'Overnight stay in Araku'
        ]
      },
      {
        day: 3,
        title: 'Araku to Vizag Return',
        activities: [
          'Hotel checkout after breakfast',
          'Visit Coffee Plantations',
          'Explore Chaparai Water Falls',
          'Tour Padmapuram Gardens',
          'Visit Tribal Museum',
          'Stop at Coffee House',
          'Return journey to Vizag',
          'Drop at Vizag Railway Station'
        ]
      }
    ],
    inclusions: {
      meals: false,
      accommodation: true,
      transportation: true,
      sightseeing: true,
      guide: true,
      activities: true,
      details: {
        food: 'Meals not included',
        accommodation: '2 Nights hotel stay (1 in Vizag, 1 in Araku)',
        transportation: '4 Seater A/C Vehicle',
        drinks: 'Water provided',
        tickets: 'All entrance fees included',
        equipment: 'Basic outdoor gear and safety equipment'
      }
    },
    location: {
      name: 'Vizag & Araku Valley',
      coordinates: {
        lat: 17.6868,
        lng: 83.2185
      },
      mapImage: '/images/packages/vizag-araku-three-days/location-map.jpg',
      landmarks: [
        'RK Beach',
        'Kailasagiri',
        'Submarine Museum',
        'Borra Caves',
        'Tribal Museum',
        'Coffee Plantations',
        'Chaparai Waterfalls',
        'Tyda Jungle Bells'
      ]
    },
    additionalInfo: {
      bestTimeToVisit: 'October to March (Pleasant weather)',
      difficulty: 'Easy',
      thingsToCarry: [
        'Comfortable walking shoes',
        'Light clothes for day',
        'Light jacket for evening',
        'Camera',
        'Water bottle',
        'Sun protection',
        'Basic medications',
        'Cash for personal expenses'
      ],
      highlights: {
        cityAttractions: [
          'Beaches',
          'Museums',
          'Kailasagiri'
        ],
        valleyExperiences: [
          'Borra Caves',
          'Coffee Plantations',
          'Tribal Museum'
        ],
        viewpoints: [
          'Galikonda',
          'Damuku',
          'Tyda'
        ]
      }
    }
  },
  {
    id: 'vizag-araku-lambasingi-four-days',
    name: '3 Nights 4 Days Vizag, Araku, Lambasingi',
    duration: '4 Days',
    groupSize: '2 members',
    transportation: 'A/C 4 Seater Vehicle',
    price: 26666,
    rating: 4.0,
    description: 'Experience the ultimate exploration of Vizag region with this comprehensive four-day package. From coastal beauty to misty mountains, from ancient temples to sunrise points, this tour covers everything from Vizag city to the breathtaking Vanjangi viewpoint.',
    highlights: [
      'Temple visits and spiritual experiences',
      'Beach explorations and city views',
      'Hill station adventures',
      'Vanjangi sunrise point',
      'Coffee plantations',
      'Multiple waterfall visits',
      'Tribal culture exploration'
    ],
    images: {
      main: '/images/packages/vizag-araku-lambasingi-four-days/main.jpg',
      gallery: [
        {
          url: '/images/packages/vizag-araku-lambasingi-four-days/temples.jpg',
          title: 'Spiritual Temples',
          description: 'Ancient temples including Simhachalam and Kali Matha'
        },
        {
          url: '/images/packages/vizag-araku-lambasingi-four-days/beaches.jpg',
          title: 'Coastal Beauty',
          description: 'Pristine beaches from RK Beach to Yarada'
        },
        {
          url: '/images/packages/vizag-araku-lambasingi-four-days/lambasingi.jpg',
          title: 'Lambasingi Views',
          description: 'Misty viewpoints and strawberry plantations'
        },
        {
          url: '/images/packages/vizag-araku-lambasingi-four-days/araku.jpg',
          title: 'Araku Valley',
          description: 'Coffee plantations and tribal culture'
        },
        {
          url: '/images/packages/vizag-araku-lambasingi-four-days/waterfalls.jpg',
          title: 'Natural Waterfalls',
          description: 'Multiple waterfall experiences throughout the journey'
        },
        {
          url: '/images/packages/vizag-araku-lambasingi-four-days/tribal.jpg',
          title: 'Tribal Heritage',
          description: 'Rich cultural experiences and museum visits'
        }
      ]
    },
    itinerary: [
      {
        day: 1,
        title: 'Vizag Unexplored',
        activities: [
          'Morning arrival and hotel check-in',
          'Visit Simhachalam Temple',
          'Explore Yarada Beach',
          'Visit Light House',
          'Dolphin Hill Top View point',
          'Sagar Durga Temple visit',
          'City Central Park exploration',
          'Return to hotel for overnight stay'
        ]
      },
      {
        day: 2,
        title: 'Vizag Local Sightseeing',
        activities: [
          'Visit Bheemali Beach',
          'Explore Thotlakonda View point',
          'Tour Ramanaidu Studio',
          'Relax at Rushikonda Beach',
          'Visit Vishaka Museum',
          'Kali Matha Temple darshan',
          'Kailashgiri Shiva Statue visit',
          'Explore R.K Beach',
          'Tour Submarine Museum',
          'Visit Aircraft Museum',
          'Return to hotel'
        ]
      },
      {
        day: 3,
        title: 'Vizag to Lambasingi to Araku',
        activities: [
          'Early morning checkout (2 AM)',
          'Visit Lambasingi view point',
          'Explore Strawberry Plantation',
          'Visit Kottapalli Waterfalls',
          'Tour Padmapuram Gardens',
          'Visit Tribal Museum',
          'Stop at Coffee House',
          'Check-in at Araku hotel'
        ]
      },
      {
        day: 4,
        title: 'Araku to Vizag',
        activities: [
          'Breakfast and hotel checkout',
          'Visit Galikonda view point',
          'Tour Ananthagiri coffee plantation',
          'Explore Borra caves',
          'Optional: Katiki water falls visit',
          'Drive through Tyda Tunnels',
          'Stop at Tyda Jungle Bells View Point',
          'Visit Damuku view point',
          'Drop at Vizag Railway Station/Airport'
        ]
      }
    ],
    inclusions: {
      meals: true,
      accommodation: true,
      transportation: true,
      sightseeing: true,
      guide: true,
      activities: true,
      details: {
        food: 'Daily breakfast and dinner included',
        accommodation: '3 Nights hotel stay (2 in Vizag, 1 in Araku)',
        transportation: '4 Seater A/C Vehicle',
        drinks: 'Water provided',
        tickets: 'All entrance fees included',
        equipment: 'Basic outdoor gear and safety equipment'
      }
    },
    location: {
      name: 'Vizag, Araku & Lambasingi',
      coordinates: {
        lat: 17.6868,
        lng: 83.2185
      },
      mapImage: '/images/packages/vizag-araku-lambasingi-four-days/location-map.jpg',
      landmarks: [
        'Simhachalam Temple',
        'RK Beach',
        'Kailasagiri',
        'Lambasingi Viewpoint',
        'Borra Caves',
        'Tribal Museum',
        'Coffee Plantations',
        'Yarada Beach'
      ]
    },
    additionalInfo: {
      bestTimeToVisit: 'October to February (Best weather conditions)',
      difficulty: 'Easy to Moderate',
      thingsToCarry: [
        'Warm clothes for Lambasingi',
        'Comfortable walking shoes',
        'Camera',
        'Water bottle',
        'Sun protection',
        'Basic medications',
        'Cash for personal expenses',
        'Light jacket for evenings'
      ],
      highlights: {
        spiritual: [
          'Simhachalam Temple',
          'Kali Matha Temple',
          'Sagar Durga Temple'
        ],
        nature: [
          'Beaches',
          'Waterfalls',
          'Hill Stations'
        ],
        culture: [
          'Museums',
          'Tribal Heritage',
          'Coffee Plantations'
        ]
      }
    }
  },
  {
    id: 'vizag-araku-lambasingi-vanjangi-five-days',
    name: '4 Nights 5 Days Vizag, Araku, Lambasingi, Vanjangi',
    duration: '5 Days',
    groupSize: '2 members',
    transportation: 'A/C 4 Seater Vehicle',
    price: 34869,
    rating: 4.0,
    description: 'Experience the most comprehensive exploration of Vizag region with this ultimate five-day package. From coastal beauty to misty mountains, from ancient temples to sunrise points, this tour covers everything from Vizag city to the breathtaking Vanjangi viewpoint.',
    highlights: [
      'Temple and spiritual tours',
      'Beach explorations and city views',
      'Hill station adventures',
      'Vanjangi sunrise point',
      'Coffee plantations',
      'Multiple waterfall visits',
      'Tribal culture exploration'
    ],
    images: {
      main: '/images/packages/vizag-araku-lambasingi-vanjangi-five-days/main.jpg',
      gallery: [
        {
          url: '/images/packages/vizag-araku-lambasingi-vanjangi-five-days/temples.jpg',
          title: 'Sacred Temples',
          description: 'Ancient temples including Simhachalam and Kali Matha'
        },
        {
          url: '/images/packages/vizag-araku-lambasingi-vanjangi-five-days/beaches.jpg',
          title: 'Coastal Beauty',
          description: 'Pristine beaches from RK Beach to Yarada'
        },
        {
          url: '/images/packages/vizag-araku-lambasingi-vanjangi-five-days/lambasingi.jpg',
          title: 'Lambasingi Views',
          description: 'Misty viewpoints and strawberry plantations'
        },
        {
          url: '/images/packages/vizag-araku-lambasingi-vanjangi-five-days/vanjangi.jpg',
          title: 'Vanjangi Sunrise',
          description: 'Breathtaking sunrise views over the ocean of clouds'
        },
        {
          url: '/images/packages/vizag-araku-lambasingi-vanjangi-five-days/waterfalls.jpg',
          title: 'Natural Waterfalls',
          description: 'Multiple waterfall experiences throughout the journey'
        },
        {
          url: '/images/packages/vizag-araku-lambasingi-vanjangi-five-days/tribal.jpg',
          title: 'Tribal Heritage',
          description: 'Rich cultural experiences and museum visits'
        }
      ]
    },
    itinerary: [
      {
        day: 1,
        title: 'Vizag Unexplored',
        activities: [
          'Morning arrival and hotel check-in',
          'Visit Simhachalam Temple',
          'Explore Yarada Beach',
          'Visit Light House',
          'Dolphin Hill Top View point',
          'Sagar Durga Temple visit',
          'City Central Park exploration',
          'Return to hotel for overnight stay'
        ]
      },
      {
        day: 2,
        title: 'Vizag Local Sightseeing',
        activities: [
          'Visit Bheemali Beach',
          'Explore Thotlakonda View point',
          'Tour Ramanaidu Studio',
          'Relax at Rushikonda Beach',
          'Visit Vishaka Museum',
          'Kali Matha Temple darshan',
          'Kailashgiri Shiva Statue visit',
          'Explore R.K Beach',
          'Tour Submarine Museum',
          'Visit Aircraft Museum',
          'Return to hotel'
        ]
      },
      {
        day: 3,
        title: 'Vizag to Lambasingi to Araku',
        activities: [
          'Early morning checkout (2 AM)',
          'Visit Lambasingi view point',
          'Explore Strawberry Plantation',
          'Visit Kottapalli Waterfalls',
          'Tour Padmapuram Gardens',
          'Visit Tribal Museum',
          'Stop at Coffee House',
          'Check-in at Araku hotel'
        ]
      },
      {
        day: 4,
        title: 'Araku and Vanjangi Exploration',
        activities: [
          'Very early morning start (3 AM)',
          'Drive to Vanjangi viewpoint',
          'Witness spectacular sunrise',
          'Visit Chaparai Waterfalls',
          'Tour Padmapuram Gardens',
          'Explore Tribal Museum',
          'Visit Coffee House',
          'Return to Araku hotel'
        ]
      },
      {
        day: 5,
        title: 'Araku to Vizag',
        activities: [
          'Breakfast and hotel checkout',
          'Visit Galikonda view point',
          'Tour Ananthagiri coffee plantation',
          'Explore Borra caves',
          'Optional: Katiki water falls visit',
          'Drive through Tyda Tunnels',
          'Stop at Tyda Jungle Bells View Point',
          'Visit Damuku view point',
          'Drop at Vizag Railway Station/Airport'
        ]
      }
    ],
    inclusions: {
      meals: true,
      accommodation: true,
      transportation: true,
      sightseeing: true,
      guide: true,
      activities: true,
      details: {
        food: 'Daily breakfast and dinner included',
        accommodation: '4 Nights hotel stay (2 in Vizag, 2 in Araku)',
        transportation: '4 Seater A/C Vehicle',
        drinks: 'Water provided',
        tickets: 'All entrance fees included',
        equipment: 'Basic outdoor gear and safety equipment'
      }
    },
    location: {
      name: 'Vizag, Araku & Lambasingi',
      coordinates: {
        lat: 17.6868,
        lng: 83.2185
      },
      mapImage: '/images/packages/vizag-araku-lambasingi-vanjangi-five-days/location-map.jpg',
      landmarks: [
        'Simhachalam Temple',
        'RK Beach',
        'Lambasingi Viewpoint',
        'Vanjangi Sunrise Point',
        'Borra Caves',
        'Tribal Museum',
        'Coffee Plantations',
        'Chaparai Waterfalls'
      ]
    },
    additionalInfo: {
      bestTimeToVisit: 'October to February (Best weather and visibility)',
      difficulty: 'Moderate (Early morning starts)',
      thingsToCarry: [
        'Warm clothes for hill stations',
        'Comfortable walking shoes',
        'Camera for sunrise shots',
        'Water bottle',
        'Sun protection',
        'Basic medications',
        'Cash for personal expenses',
        'Light jacket for evenings',
        'Torch/Flashlight for early morning trips'
      ],
      highlights: {
        spiritual: [
          'Simhachalam Temple',
          'Kali Matha Temple',
          'Sagar Durga Temple'
        ],
        nature: [
          'Beaches',
          'Waterfalls',
          'Hill Stations',
          'Sunrise Points'
        ],
        culture: [
          'Museums',
          'Tribal Heritage',
          'Coffee Plantations'
        ],
        adventure: [
          'Early Morning Treks',
          'Cave Exploration',
          'Hill Station Visits'
        ]
      }
    }
  },
  {
    id: 'vizag-araku-lambasingi-vanjangi-six-days',
    name: '5 Nights 6 Days Vizag, Araku, Lambasingi, Vanjangi',
    duration: '6 Days',
    groupSize: '2 members',
    transportation: 'A/C 4 Seater Vehicle',
    price: 36099,
    rating: 4.0,
    description: 'Experience the most comprehensive exploration of Vizag region with this ultimate six-day package. From coastal beauty to misty mountains, from ancient temples to sunrise points, this tour covers everything from Vizag city to the breathtaking Vanjangi viewpoint.',
    highlights: [
      'Temple and spiritual tours',
      'Beach explorations and city views',
      'Hill station adventures',
      'Vanjangi sunrise point',
      'Coffee plantations',
      'Multiple waterfall visits',
      'Tribal culture exploration'
    ],
    images: {
      main: '/images/packages/vizag-araku-lambasingi-vanjangi-six-days/main.jpg',
      gallery: [
        {
          url: '/images/packages/vizag-araku-lambasingi-vanjangi-six-days/temples.jpg',
          title: 'Sacred Temples',
          description: 'Ancient temples including Simhachalam and Kali Matha'
        },
        {
          url: '/images/packages/vizag-araku-lambasingi-vanjangi-six-days/beaches.jpg',
          title: 'Coastal Beauty',
          description: 'Pristine beaches from RK Beach to Yarada'
        },
        {
          url: '/images/packages/vizag-araku-lambasingi-vanjangi-six-days/lambasingi.jpg',
          title: 'Lambasingi Views',
          description: 'Misty viewpoints and strawberry plantations'
        },
        {
          url: '/images/packages/vizag-araku-lambasingi-vanjangi-six-days/vanjangi.jpg',
          title: 'Vanjangi Sunrise',
          description: 'Breathtaking sunrise views over the ocean of clouds'
        },
        {
          url: '/images/packages/vizag-araku-lambasingi-vanjangi-six-days/waterfalls.jpg',
          title: 'Natural Waterfalls',
          description: 'Multiple waterfall experiences throughout the journey'
        },
        {
          url: '/images/packages/vizag-araku-lambasingi-vanjangi-six-days/tribal.jpg',
          title: 'Tribal Heritage',
          description: 'Rich cultural experiences and museum visits'
        }
      ]
    },
    itinerary: [
      {
        day: 1,
        title: 'Vizag Unexplored',
        activities: [
          'Morning arrival and hotel check-in',
          'Visit Simhachalam Temple',
          'Explore Yarada Beach',
          'Visit Light House',
          'Dolphin Hill Top View point',
          'Sagar Durga Temple visit',
          'City Central Park exploration',
          'Return to hotel for overnight stay'
        ]
      },
      {
        day: 2,
        title: 'Vizag Local Sightseeing',
        activities: [
          'Visit Bheemali Beach',
          'Explore Thotlakonda View point',
          'Tour Ramanaidu Studio',
          'Relax at Rushikonda Beach',
          'Visit Vishaka Museum',
          'Kali Matha Temple darshan',
          'Kailashgiri Shiva Statue visit',
          'Explore R.K Beach',
          'Tour Submarine Museum',
          'Visit Aircraft Museum',
          'Return to hotel'
        ]
      },
      {
        day: 3,
        title: 'Vizag to Lambasingi to Araku',
        activities: [
          'Early morning checkout (2 AM)',
          'Visit Lambasingi view point',
          'Explore Strawberry Plantation',
          'Visit Kottapalli Waterfalls',
          'Tour Padmapuram Gardens',
          'Visit Tribal Museum',
          'Stop at Coffee House',
          'Check-in at Araku hotel'
        ]
      },
      {
        day: 4,
        title: 'Araku and Vanjangi Exploration',
        activities: [
          'Very early morning start (3 AM)',
          'Drive to Vanjangi viewpoint',
          'Witness spectacular sunrise',
          'Visit Chaparai Waterfalls',
          'Tour Padmapuram Gardens',
          'Explore Tribal Museum',
          'Visit Coffee House',
          'Return to Araku hotel'
        ]
      },
      {
        day: 5,
        title: 'Araku to Vizag',
        activities: [
          'Breakfast and hotel checkout',
          'Visit Galikonda view point',
          'Tour Ananthagiri coffee plantation',
          'Explore Borra caves',
          'Optional: Katiki water falls visit',
          'Drive through Tyda Tunnels',
          'Stop at Tyda Jungle Bells View Point',
          'Visit Damuku view point',
          'Check-in at Vizag hotel'
        ]
      },
      {
        day: 6,
        title: 'Vizag Final Day',
        activities: [
          'Hotel checkout',
          'Visit Yarada Beach',
          'Explore Light House',
          'Visit Dolphin Hill Top View point',
          'Tour Sagar Durga Temple',
          'Explore City Central Park',
          'Transfer to Vizag Airport'
        ]
      }
    ],
    inclusions: {
      meals: true,
      accommodation: true,
      transportation: true,
      sightseeing: true,
      guide: true,
      activities: true,
      details: {
        food: 'Daily breakfast and dinner included',
        accommodation: '5 Nights hotel stay (2 in Vizag, 3 in Araku)',
        transportation: '4 Seater A/C Vehicle',
        drinks: 'Water provided',
        tickets: 'All entrance fees included',
        equipment: 'Basic outdoor gear and safety equipment'
      }
    },
    location: {
      name: 'Vizag, Araku, Lambasingi & Vanjangi',
      coordinates: {
        lat: 17.6868,
        lng: 83.2185
      },
      mapImage: '/images/packages/vizag-araku-lambasingi-vanjangi-six-days/location-map.jpg',
      landmarks: [
        'Simhachalam Temple',
        'RK Beach',
        'Lambasingi Viewpoint',
        'Vanjangi Sunrise Point',
        'Borra Caves',
        'Tribal Museum',
        'Coffee Plantations',
        'Chaparai Waterfalls'
      ]
    },
    additionalInfo: {
      bestTimeToVisit: 'October to February (Best weather and visibility)',
      difficulty: 'Moderate (Early morning starts)',
      thingsToCarry: [
        'Warm clothes for hill stations',
        'Comfortable walking shoes',
        'Camera for sunrise shots',
        'Water bottle',
        'Sun protection',
        'Basic medications',
        'Cash for personal expenses',
        'Light jacket for evenings',
        'Torch/Flashlight for early morning trips'
      ],
      highlights: {
        spiritual: [
          'Simhachalam Temple',
          'Kali Matha Temple',
          'Sagar Durga Temple'
        ],
        nature: [
          'Beaches',
          'Waterfalls',
          'Hill Stations',
          'Sunrise Points'
        ],
        culture: [
          'Museums',
          'Tribal Heritage',
          'Coffee Plantations'
        ],
        adventure: [
          'Early Morning Treks',
          'Cave Exploration',
          'Hill Station Visits'
        ]
      }
    }
  },
  {
    id: 'vizag-temples-araku-six-days',
    name: '5 Nights 6 Days Complete Vizag Region Tour',
    duration: '6 Days',
    groupSize: '2 members',
    transportation: '4 Seater A/C Car',
    price: 36099,
    rating: 4.0,
    description: 'The most complete exploration of Vizag region including sacred temples of Srikakulam and Vijayanagaram. Experience everything from ancient temples to modern museums, from misty hills to pristine beaches in this comprehensive six-day journey.',
    highlights: [
      'Sacred temple tours',
      'City attractions',
      'Hill station visits',
      'Train journey experience',
      'Multiple waterfall visits',
      'Tribal culture exploration',
      'Beach and lighthouse visits'
    ],
    images: {
      main: '/images/packages/vizag-temples-araku-six-days/main.jpg',
      gallery: [
        {
          url: '/images/packages/vizag-temples-araku-six-days/temples.jpg',
          title: 'Ancient Temples',
          description: 'Sacred temples of Srikakulam and Vijayanagaram'
        },
        {
          url: '/images/packages/vizag-temples-araku-six-days/city-attractions.jpg',
          title: 'City Attractions',
          description: 'Museums and modern landmarks of Vizag'
        },
        {
          url: '/images/packages/vizag-temples-araku-six-days/lambasingi.jpg',
          title: 'Lambasingi Views',
          description: 'Misty viewpoints and plantations'
        },
        {
          url: '/images/packages/vizag-temples-araku-six-days/araku.jpg',
          title: 'Araku Valley',
          description: 'Coffee plantations and tribal culture'
        },
        {
          url: '/images/packages/vizag-temples-araku-six-days/beaches.jpg',
          title: 'Coastal Beauty',
          description: 'Beautiful beaches and lighthouse'
        },
        {
          url: '/images/packages/vizag-temples-araku-six-days/waterfalls.jpg',
          title: 'Natural Waterfalls',
          description: 'Multiple waterfall experiences'
        }
      ]
    },
    itinerary: [
      {
        day: 1,
        title: 'Vizag Local Sightseeing',
        activities: [
          'Hotel check-in and fresh up',
          'Visit Simhachalam Temple',
          'Tour Ramanaidu Studio',
          'Relax at Rushikonda Beach',
          'Visit Vishaka Museum',
          'Explore Kailashgiri Shiva Statue',
          'Visit R.K Beach',
          'Tour Submarine Museum',
          'Visit Aircraft Museum',
          'Return to hotel'
        ]
      },
      {
        day: 2,
        title: 'Temple Tour (Srikakulam & Vijayanagaram)',
        activities: [
          'Visit Arasavilli Sun Temple in Srikakulam',
          'Explore Sri Kurmam Temple',
          'Drive to Vijayanagaram',
          'Visit Ramabanam Temple',
          'Explore Ramathirdham Temple',
          'Return to Vizag hotel'
        ]
      },
      {
        day: 3,
        title: 'Vizag to Araku by Train',
        activities: [
          'Hotel checkout',
          'Transfer to Vizag Railway Station',
          'Scenic train journey to Araku',
          'Hotel check-in at Araku',
          'Visit Padmapuram Gardens',
          'Explore Tribal Museum',
          'Visit Coffee House',
          'Return to hotel'
        ]
      },
      {
        day: 4,
        title: 'Lambasingi Day Trip from Araku',
        activities: [
          'Early morning start (2 AM)',
          'Drive to Lambasingi',
          'Visit Lambasingi View Point',
          'Explore Strawberry Plantation',
          'Visit Kothapalli Water Falls',
          'Explore Chaparai Water Falls',
          'Return to Araku hotel'
        ]
      },
      {
        day: 5,
        title: 'Araku to Vizag',
        activities: [
          'Hotel checkout',
          'Visit Ananthagiri Coffee Plantation',
          'Stop at Galikonda View Point',
          'Explore Borra caves',
          'Optional: Katiki water falls visit',
          'Drive through Tyda Tunnels',
          'Stop at Tyda Jungle Bells View Point',
          'Visit Damuku view point',
          'Check-in at Vizag hotel'
        ]
      },
      {
        day: 6,
        title: 'Vizag Final Day',
        activities: [
          'Hotel checkout',
          'Visit Yarada Beach',
          'Explore Light House',
          'Visit Dolphin Hill Top View point',
          'Tour Sagar Durga Temple',
          'Explore City Central Park',
          'Transfer to Vizag Airport'
        ]
      }
    ],
    inclusions: {
      meals: true,
      accommodation: true,
      transportation: true,
      sightseeing: true,
      guide: true,
      activities: true,
      details: {
        food: 'Daily breakfast and dinner included',
        accommodation: '5 Nights hotel stay (3 in Vizag, 2 in Araku)',
        transportation: '4 Seater A/C Car',
        drinks: 'Water provided',
        tickets: 'All entrance fees included',
        equipment: 'Basic outdoor gear and safety equipment'
      }
    },
    location: {
      name: 'Vizag, Srikakulam, Vijayanagaram, Araku & Lambasingi',
      coordinates: {
        lat: 17.6868,
        lng: 83.2185
      },
      mapImage: '/images/packages/vizag-temples-araku-six-days/location-map.jpg',
      landmarks: [
        'Arasavilli Sun Temple',
        'Sri Kurmam Temple',
        'Simhachalam Temple',
        'RK Beach',
        'Lambasingi Viewpoint',
        'Borra Caves',
        'Coffee Plantations',
        'Tribal Museum'
      ]
    },
    additionalInfo: {
      bestTimeToVisit: 'October to February (Pleasant weather)',
      difficulty: 'Moderate (Early morning starts, temple visits)',
      thingsToCarry: [
        'Traditional wear for temples',
        'Warm clothes for hill stations',
        'Comfortable walking shoes',
        'Camera',
        'Water bottle',
        'Sun protection',
        'Basic medications',
        'Cash for temple offerings',
        'Light jacket for evenings',
        'Torch/Flashlight for early morning trips'
      ],
      highlights: {
        spiritual: [
          'Arasavilli Sun Temple',
          'Sri Kurmam Temple',
          'Simhachalam Temple',
          'Ramabanam Temple'
        ],
        nature: [
          'Beaches',
          'Waterfalls',
          'Hill Stations',
          'Valley Views'
        ],
        culture: [
          'Museums',
          'Tribal Heritage',
          'Coffee Plantations',
          'Traditional Temples'
        ],
        adventure: [
          'Train Journey',
          'Early Morning Treks',
          'Cave Exploration'
        ]
      }
    }
  },
  {
    id: 'vanjangi-day-trip',
    name: 'Vanjangi Day Trip',
    duration: '1 Day',
    groupSize: '2-3 members',
    transportation: 'A/C 4 Seater Vehicle',
    price: 6300,
    rating: 4.0,
    description: 'Experience the breathtaking sunrise at Vanjangi, known as the Megha Samudram (Ocean of Clouds). This early morning adventure takes you through scenic routes, temple visits, and coffee plantations, making it a perfect day trip for nature lovers and photography enthusiasts.',
    highlights: [
      'Sunrise at Vanjangi viewpoint',
      'Temple visit',
      'Coffee plantation tour',
      'Scenic viewpoints',
      'Matsyagundam visit',
      'Early morning adventure'
    ],
    images: {
      main: '/images/packages/vanjangi-day-trip/main.jpg',
      gallery: [
        {
          url: '/images/packages/vanjangi-day-trip/sunrise.jpg',
          title: 'Vanjangi Sunrise',
          description: 'Breathtaking sunrise views over the ocean of clouds'
        },
        {
          url: '/images/packages/vanjangi-day-trip/temple.jpg',
          title: 'Modakondamma Temple',
          description: 'Sacred temple in Paderu'
        },
        {
          url: '/images/packages/vanjangi-day-trip/matsyagundam.jpg',
          title: 'Matsyagundam',
          description: 'Natural water body and scenic spot'
        },
        {
          url: '/images/packages/vanjangi-day-trip/viewpoint.jpg',
          title: 'Paderu Viewpoint',
          description: 'Panoramic views of the valley'
        },
        {
          url: '/images/packages/vanjangi-day-trip/coffee.jpg',
          title: 'Coffee Plantation',
          description: 'Local coffee estates and processing'
        },
        {
          url: '/images/packages/vanjangi-day-trip/landscape.jpg',
          title: 'Scenic Routes',
          description: 'Beautiful journey through the Eastern Ghats'
        }
      ]
    },
    itinerary: [
      {
        day: 1,
        title: 'Vanjangi Sunrise and Surroundings',
        activities: [
          'Early morning pickup from Vizag (2:00 AM)',
          'Drive to Vanjangi viewpoint',
          'Witness spectacular sunrise',
          'Visit Paderu Modakondamma Temple',
          'Explore Matsyagundam',
          'Stop at Paderu View Point',
          'Visit Coffee Plantation',
          'Drop at Vizag Railway Station'
        ]
      }
    ],
    inclusions: {
      meals: false,
      accommodation: false,
      transportation: true,
      sightseeing: true,
      guide: true,
      activities: true,
      details: {
        food: 'Meals not included',
        accommodation: 'No accommodation required',
        transportation: '4 Seater A/C Vehicle',
        drinks: 'Water provided',
        tickets: 'All entrance fees included',
        equipment: 'Basic outdoor gear and safety equipment'
      }
    },
    location: {
      name: 'Vanjangi & Paderu',
      coordinates: {
        lat: 18.0657,
        lng: 82.6731
      },
      mapImage: '/images/packages/vanjangi-day-trip/location-map.jpg',
      landmarks: [
        'Vanjangi Viewpoint',
        'Modakondamma Temple',
        'Matsyagundam',
        'Paderu Viewpoint',
        'Coffee Plantations'
      ]
    },
    additionalInfo: {
      bestTimeToVisit: 'October to February (Best visibility for sunrise)',
      difficulty: 'Easy to Moderate (Early morning start)',
      thingsToCarry: [
        'Warm clothes',
        'Comfortable walking shoes',
        'Camera',
        'Water bottle',
        'Light snacks',
        'Torch/Flashlight',
        'Rain protection (seasonal)',
        'Basic medications'
      ],
      highlights: {
        nature: [
          'Sunrise views',
          'Valley viewpoints',
          'Natural water bodies'
        ],
        spiritual: [
          'Modakondamma Temple'
        ],
        agriculture: [
          'Coffee plantations',
          'Local farming'
        ],
        photography: [
          'Sunrise shots',
          'Landscape photography',
          'Nature photography'
        ]
      }
    }
  },
  {
    id: 'vanjangi-lambasingi-two-days',
    name: '1 Night 2 Days Vanjangi & Lambasingi',
    duration: '2 Days',
    groupSize: '2 members',
    transportation: 'A/C 4 Seater Vehicle',
    price: 14959,
    rating: 4.0,
    description: 'Experience the magical sunrises and misty landscapes of both Vanjangi and Lambasingi in this comprehensive two-day package. From the Ocean of Clouds at Vanjangi to the strawberry plantations of Lambasingi, this tour covers the best hill stations of the Eastern Ghats.',
    highlights: [
      'Vanjangi sunrise viewpoint',
      'Lambasingi misty views',
      'Temple visit',
      'Strawberry plantation',
      'Waterfall experience',
      'Reservoir visit'
    ],
    images: {
      main: '/images/packages/vanjangi-lambasingi-two-days/main.jpg',
      gallery: [
        {
          url: '/images/packages/vanjangi-lambasingi-two-days/vanjangi-sunrise.jpg',
          title: 'Vanjangi Sunrise',
          description: 'Breathtaking sunrise over the ocean of clouds'
        },
        {
          url: '/images/packages/vanjangi-lambasingi-two-days/lambasingi-mist.jpg',
          title: 'Lambasingi Views',
          description: 'Misty morning views of Lambasingi'
        },
        {
          url: '/images/packages/vanjangi-lambasingi-two-days/temple.jpg',
          title: 'Modakondamma Temple',
          description: 'Sacred temple in Paderu'
        },
        {
          url: '/images/packages/vanjangi-lambasingi-two-days/strawberry.jpg',
          title: 'Strawberry Plantation',
          description: 'Fresh strawberry picking experience'
        },
        {
          url: '/images/packages/vanjangi-lambasingi-two-days/waterfall.jpg',
          title: 'Kottapalli Waterfalls',
          description: 'Scenic waterfall amidst nature'
        },
        {
          url: '/images/packages/vanjangi-lambasingi-two-days/reservoir.jpg',
          title: 'Tanjanghi Reservoir',
          description: 'Peaceful reservoir views'
        }
      ]
    },
    itinerary: [
      {
        day: 1,
        title: 'Vizag to Vanjangi to Lambasingi',
        activities: [
          'Early morning pickup from Vizag (2:00 AM)',
          'Drive to Vanjangi viewpoint',
          'Witness spectacular sunrise',
          'Visit Paderu Modakondamma Temple',
          'Explore Kottapalli Waterfalls',
          'Transfer to Lambasingi',
          'Hotel check-in and overnight stay'
        ]
      },
      {
        day: 2,
        title: 'Lambasingi Exploration and Return',
        activities: [
          'Early morning checkout (4:30 AM)',
          'Visit Lambasingi View Point',
          'Tour Strawberry Plantation',
          'Visit Tanjanghi Reservoir',
          'Return journey to Vizag',
          'Drop at preferred location (City/Bus Complex/Railway Station/Airport)'
        ]
      }
    ],
    inclusions: {
      meals: true,
      accommodation: true,
      transportation: true,
      sightseeing: true,
      guide: true,
      activities: true,
      details: {
        food: 'Breakfast and dinner included',
        accommodation: '1 Night stay in Lambasingi',
        transportation: '4 Seater A/C Vehicle',
        drinks: 'Water provided',
        tickets: 'All entrance fees included',
        equipment: 'Basic outdoor gear and safety equipment'
      }
    },
    location: {
      name: 'Vanjangi & Lambasingi',
      coordinates: {
        lat: 17.8691,
        lng: 82.5754
      },
      mapImage: '/images/packages/vanjangi-lambasingi-two-days/location-map.jpg',
      landmarks: [
        'Vanjangi Viewpoint',
        'Modakondamma Temple',
        'Kottapalli Waterfalls',
        'Lambasingi Viewpoint',
        'Strawberry Plantations',
        'Tanjanghi Reservoir'
      ]
    },
    additionalInfo: {
      bestTimeToVisit: 'October to February (Best weather and visibility)',
      difficulty: 'Moderate (Early morning starts)',
      thingsToCarry: [
        'Warm clothes',
        'Comfortable walking shoes',
        'Camera',
        'Water bottle',
        'Light snacks',
        'Torch/Flashlight',
        'Rain protection (seasonal)',
        'Basic medications',
        'Extra pair of clothes'
      ],
      highlights: {
        nature: [
          'Sunrise views',
          'Misty landscapes',
          'Waterfall',
          'Reservoir'
        ],
        spiritual: [
          'Modakondamma Temple'
        ],
        agriculture: [
          'Strawberry plantations',
          'Local farming'
        ],
        adventure: [
          'Early morning treks',
          'Nature walks',
          'Photography opportunities'
        ]
      }
    }
  },
  {
    id: 'jagdalpur-waterfalls-tour',
    name: 'Jagdalpur Tour Package',
    duration: '3 Days',
    groupSize: '2 members',
    transportation: 'A/C 4 Seater Vehicle',
    price: 30890,
    rating: 4.0,
    description: 'Experience the majestic Chitrakoot waterfalls, known as the Indian Niagara, along with other natural wonders of Jagdalpur. This comprehensive package includes visits to multiple waterfalls, ancient caves, temples, and a national park, making it perfect for nature lovers and adventure seekers.',
    highlights: [
      'Chitrakoot Waterfalls',
      'Duduma Waterfalls',
      'Tirathgarh Waterfalls',
      'Cave explorations',
      'Temple visits',
      'National Park tour'
    ],
    images: {
      main: '/images/packages/jagdalpur-waterfalls-tour/main.jpg',
      gallery: [
        {
          url: '/images/packages/jagdalpur-waterfalls-tour/chitrakoot.jpg',
          title: 'Chitrakoot Falls',
          description: 'The Indian Niagara - Majestic waterfalls'
        },
        {
          url: '/images/packages/jagdalpur-waterfalls-tour/duduma.jpg',
          title: 'Duduma Falls',
          description: 'Scenic waterfall amidst nature'
        },
        {
          url: '/images/packages/jagdalpur-waterfalls-tour/tirathgarh.jpg',
          title: 'Tirathgarh Falls',
          description: 'Beautiful cascading waterfalls'
        },
        {
          url: '/images/packages/jagdalpur-waterfalls-tour/caves.jpg',
          title: 'Ancient Caves',
          description: 'Kailash and Kotumsar cave systems'
        },
        {
          url: '/images/packages/jagdalpur-waterfalls-tour/temple.jpg',
          title: 'Sacred Temples',
          description: 'Ancient temples with rich history'
        },
        {
          url: '/images/packages/jagdalpur-waterfalls-tour/wildlife.jpg',
          title: 'National Park',
          description: 'Rich wildlife and natural beauty'
        }
      ]
    },
    itinerary: [
      {
        day: 1,
        title: 'Vizag to Jagdalpur',
        activities: [
          'Pickup from Vizag City',
          'Visit Duduma Waterfalls',
          'Explore Gupteswara Swamy Temple',
          'Drive to Jagdalpur',
          'Hotel check-in',
          'Overnight stay in Jagdalpur'
        ]
      },
      {
        day: 2,
        title: 'Jagdalpur Local Sightseeing',
        activities: [
          'Breakfast at hotel',
          'Start at 8:00 AM',
          'Visit Tirathgarh Water Falls',
          'Explore Kailash Caves',
          'Visit Kotumsar Caves',
          'National Park tour',
          'Return to hotel',
          'Overnight stay in Jagdalpur'
        ]
      },
      {
        day: 3,
        title: 'Jagdalpur to Vizag',
        activities: [
          'Early morning checkout (5:00 AM)',
          'Visit Chitrakot Waterfalls',
          'Explore Danteswari Matha Temple',
          'Return journey to Vizag',
          'Drop at preferred location (City/Bus Complex/Railway Station/Airport)'
        ]
      }
    ],
    inclusions: {
      meals: true,
      accommodation: true,
      transportation: true,
      sightseeing: true,
      guide: true,
      activities: true,
      details: {
        food: 'Daily breakfast and dinner included',
        accommodation: '2 Nights stay in Jagdalpur',
        transportation: '4 Seater A/C Vehicle',
        drinks: 'Water provided',
        tickets: 'All entrance fees included',
        equipment: 'Basic outdoor gear and safety equipment'
      }
    },
    location: {
      name: 'Jagdalpur',
      coordinates: {
        lat: 19.0747,
        lng: 82.0247
      },
      mapImage: '/images/packages/jagdalpur-waterfalls-tour/location-map.jpg',
      landmarks: [
        'Chitrakoot Falls',
        'Duduma Falls',
        'Tirathgarh Falls',
        'Kailash Caves',
        'Kotumsar Caves',
        'Danteswari Temple',
        'National Park'
      ]
    },
    additionalInfo: {
      bestTimeToVisit: 'October to March (Post monsoon for best waterfall views)',
      difficulty: 'Easy to Moderate',
      thingsToCarry: [
        'Comfortable walking shoes',
        'Change of clothes',
        'Camera',
        'Water bottle',
        'Sun protection',
        'Insect repellent',
        'Basic medications',
        'Light jacket',
        'Traditional wear for temples'
      ],
      highlights: {
        nature: [
          'Multiple waterfalls',
          'Cave systems',
          'National park',
          'Wildlife'
        ],
        spiritual: [
          'Gupteswara Temple',
          'Danteswari Temple'
        ],
        adventure: [
          'Cave exploration',
          'Waterfall visits',
          'Nature trails'
        ],
        photography: [
          'Waterfall photography',
          'Wildlife shots',
          'Cave formations'
        ]
      }
    }
  },
  {
    id: 'deomali-duduma-day-trip',
    name: 'Deomali & Duduma Day Trip',
    duration: '1 Day',
    groupSize: '2 members',
    transportation: '4 Seater Vehicle',
    price: 10869,
    rating: 4.0,
    description: 'Experience the thrill of visiting Odisha\'s highest peak Deomali and the majestic Duduma waterfalls in this action-packed day trip. Perfect for adventure seekers and nature lovers who want to explore these natural wonders in a single day.',
    highlights: [
      'Deomali Peak viewpoint',
      'Duduma Waterfalls',
      'Temple visit',
      'Scenic drive',
      'Photography spots'
    ],
    images: {
      main: '/images/packages/deomali-duduma-day-trip/main.jpg',
      gallery: [
        {
          url: '/images/packages/deomali-duduma-day-trip/deomali-peak.jpg',
          title: 'Deomali Peak',
          description: 'Highest peak in Odisha with panoramic views'
        },
        {
          url: '/images/packages/deomali-duduma-day-trip/duduma-falls.jpg',
          title: 'Duduma Falls',
          description: 'Majestic waterfall in its natural setting'
        },
        {
          url: '/images/packages/deomali-duduma-day-trip/temple.jpg',
          title: 'Gupteswara Temple',
          description: 'Ancient temple with spiritual significance'
        },
        {
          url: '/images/packages/deomali-duduma-day-trip/sunrise.jpg',
          title: 'Morning Views',
          description: 'Early morning scenic beauty'
        },
        {
          url: '/images/packages/deomali-duduma-day-trip/landscape.jpg',
          title: 'Natural Landscape',
          description: 'Beautiful Eastern Ghats scenery'
        },
        {
          url: '/images/packages/deomali-duduma-day-trip/adventure.jpg',
          title: 'Adventure Spots',
          description: 'Exciting locations for thrill seekers'
        }
      ]
    },
    itinerary: [
      {
        day: 1,
        title: 'Deomali Peak and Duduma Falls Adventure',
        activities: [
          'Night pickup from Vizag City (9:00 PM)',
          'Drive to Deomali',
          'Visit Deomali View Point',
          'Explore Gupteswara Swamy Temple',
          'Experience Duduma Waterfalls',
          'Return journey to Vizag',
          'Drop at Railway Station/Airport'
        ]
      }
    ],
    inclusions: {
      meals: false,
      accommodation: false,
      transportation: true,
      sightseeing: true,
      guide: true,
      activities: true,
      details: {
        food: 'Meals not included',
        accommodation: 'No accommodation (day trip)',
        transportation: '4 Seater Vehicle',
        drinks: 'Water provided',
        tickets: 'Entry tickets not included',
        equipment: 'Basic outdoor gear and safety equipment'
      }
    },
    location: {
      name: 'Deomali and Duduma',
      coordinates: {
        lat: 18.6746,
        lng: 82.5838
      },
      mapImage: '/images/packages/deomali-duduma-day-trip/location-map.jpg',
      landmarks: [
        'Deomali Peak',
        'Duduma Waterfalls',
        'Gupteswara Swamy Temple'
      ]
    },
    additionalInfo: {
      bestTimeToVisit: 'October to March (Post monsoon for best waterfall views)',
      difficulty: 'Moderate (Long journey)',
      thingsToCarry: [
        'Comfortable walking shoes',
        'Change of clothes',
        'Camera',
        'Personal snacks',
        'Sun protection',
        'Cash for entry tickets',
        'Basic medications',
        'Light jacket',
        'Valid ID proof'
      ],
      highlights: {
        nature: [
          'Highest peak in Odisha',
          'Majestic waterfall',
          'Scenic viewpoints'
        ],
        spiritual: [
          'Gupteswara Temple visit'
        ],
        adventure: [
          'Peak exploration',
          'Waterfall visit',
          'Nature trails'
        ],
        photography: [
          'Landscape photography',
          'Waterfall shots',
          'Sunrise views'
        ]
      }
    }
  },
  {
    id: 'maredumilli-two-days',
    name: 'Maredumilli Forest Adventure',
    duration: '2 Days',
    groupSize: '4 members',
    transportation: 'A/C 4 Seater Car',
    price: 12999,
    rating: 4.0,
    description: 'Explore the pristine forests of Maredumilli, known for its rich biodiversity, stunning waterfalls, and scenic beauty. This two-day package offers a perfect blend of adventure, nature, and relaxation in the Eastern Ghats.',
    highlights: [
      'Jalatarangini Waterfalls',
      'Sokuleru View Point',
      'Jungle trails',
      'River crossing',
      'Forest stay experience',
      'Local tribal culture'
    ],
    images: {
      main: '/images/packages/maredumilli-two-days/main.jpg',
      gallery: [
        {
          url: '/images/packages/maredumilli-two-days/waterfalls.jpg',
          title: 'Jalatarangini Falls',
          description: 'Pristine waterfalls in the forest'
        },
        {
          url: '/images/packages/maredumilli-two-days/viewpoint.jpg',
          title: 'Sokuleru Viewpoint',
          description: 'Panoramic views of the valley'
        },
        {
          url: '/images/packages/maredumilli-two-days/forest.jpg',
          title: 'Forest Trails',
          description: 'Dense forest pathways'
        },
        {
          url: '/images/packages/maredumilli-two-days/river.jpg',
          title: 'River Adventure',
          description: 'Scenic river crossings'
        },
        {
          url: '/images/packages/maredumilli-two-days/stay.jpg',
          title: 'Forest Stay',
          description: 'Comfortable accommodation in nature'
        },
        {
          url: '/images/packages/maredumilli-two-days/tribal.jpg',
          title: 'Tribal Culture',
          description: 'Local tribal lifestyle and crafts'
        }
      ]
    },
    itinerary: [
      {
        day: 1,
        title: 'Journey to Maredumilli and Forest Exploration',
        activities: [
          'Early morning departure from Vizag',
          'Scenic drive through the Eastern Ghats',
          'Visit Jalatarangini Waterfalls',
          'Nature walk in the forest',
          'Visit tribal village',
          'Evening at Sokuleru View Point',
          'Check-in at forest accommodation',
          'Dinner and overnight stay'
        ]
      },
      {
        day: 2,
        title: 'Adventure Activities and Return',
        activities: [
          'Early morning nature walk',
          'Breakfast at accommodation',
          'River crossing adventure',
          'Visit to coffee plantations',
          'Local sightseeing',
          'Lunch break',
          'Return journey to Vizag',
          'Drop at preferred location'
        ]
      }
    ],
    inclusions: {
      meals: true,
      accommodation: true,
      transportation: true,
      sightseeing: true,
      guide: true,
      activities: true,
      details: {
        food: '1 breakfast, 1 dinner included',
        accommodation: '1 night in forest accommodation',
        transportation: '4 Seater A/C Car',
        drinks: 'Water, tea, coffee provided',
        tickets: 'All entrance fees included',
        equipment: 'Basic outdoor gear and safety equipment'
      }
    },
    location: {
      name: 'Maredumilli',
      coordinates: {
        lat: 17.6290,
        lng: 81.7359
      },
      mapImage: '/images/packages/maredumilli-two-days/location-map.jpg',
      landmarks: [
        'Jalatarangini Waterfalls',
        'Sokuleru View Point',
        'Tribal Villages',
        'Coffee Plantations',
        'Forest Areas'
      ]
    },
    additionalInfo: {
      bestTimeToVisit: 'October to February (Pleasant weather and clear skies)',
      difficulty: 'Moderate (Some hiking required)',
      thingsToCarry: [
        'Comfortable trekking shoes',
        'Insect repellent',
        'Light warm clothes',
        'Rain protection',
        'Camera',
        'Water bottle',
        'Personal medications',
        'Torch/Flashlight',
        'Valid ID proof'
      ],
      highlights: {
        nature: [
          'Waterfalls',
          'Dense forests',
          'Scenic viewpoints',
          'River streams'
        ],
        culture: [
          'Tribal village visit',
          'Local customs',
          'Traditional crafts'
        ],
        adventure: [
          'Nature walks',
          'River crossing',
          'Forest trails'
        ],
        agriculture: [
          'Coffee plantations',
          'Local farming',
          'Forest products'
        ]
      }
    }
  },
  {
    id: 'araku-valley-day-trip',
    name: 'Araku Valley Day Trip',
    duration: '1 Day',
    groupSize: '2 members',
    transportation: 'A/C 4 Seater Vehicle',
    price: 4500,
    rating: 4.0,
    description: 'Experience the beauty of Araku Valley in this comprehensive day trip package. Perfect for both group and individual travelers, this tour covers all major attractions from scenic viewpoints to cultural spots, making it an ideal choice for a quick escape to the hills.',
    highlights: [
      'Scenic viewpoints',
      'Borra caves exploration',
      'Coffee plantations',
      'Tribal museum',
      'Tunnel drive',
      'Garden visit'
    ],
    images: {
      main: '/images/packages/araku-valley-day-trip/main.jpg',
      gallery: [
        {
          url: '/images/packages/araku-valley-day-trip/borra-caves.jpg',
          title: 'Borra Caves',
          description: 'Million-year-old limestone caves'
        },
        {
          url: '/images/packages/araku-valley-day-trip/coffee.jpg',
          title: 'Coffee Plantation',
          description: 'Ananthagiri coffee estates'
        },
        {
          url: '/images/packages/araku-valley-day-trip/tribal.jpg',
          title: 'Tribal Museum',
          description: 'Rich cultural heritage display'
        },
        {
          url: '/images/packages/araku-valley-day-trip/viewpoint.jpg',
          title: 'Scenic Views',
          description: 'Panoramic valley viewpoints'
        },
        {
          url: '/images/packages/araku-valley-day-trip/gardens.jpg',
          title: 'Padmapuram Gardens',
          description: 'Beautiful botanical gardens'
        },
        {
          url: '/images/packages/araku-valley-day-trip/tunnel.jpg',
          title: 'Tyda Tunnels',
          description: 'Historic railway tunnels'
        }
      ]
    },
    itinerary: [
      {
        day: 1,
        title: 'Araku Valley Exploration',
        activities: [
          'Pickup from Vizag City',
          'Visit Damuku View Point',
          'Drive through Tyda Tunnels',
          'Stop at Tyda Jungle Bells View Point',
          'Explore Borra caves',
          'Optional: Katiki Water Falls visit (at own expense)',
          'Stop at Galikonda View Point',
          'Visit Ananthagiri Coffee Plantation',
          'Photo stop at Sunakrmett Shooting Spot',
          'Tour Padmapuram Gardens',
          'Visit Tribal Museum',
          'Coffee House experience',
          'Drop at Vizag Station/Airport'
        ]
      }
    ],
    inclusions: {
      meals: false,
      accommodation: false,
      transportation: true,
      sightseeing: true,
      guide: true,
      activities: true,
      details: {
        food: 'Meals not included',
        accommodation: 'No accommodation (day trip)',
        transportation: '4 Seater A/C Vehicle',
        drinks: 'Water provided',
        tickets: 'Entry tickets not included',
        equipment: 'Basic outdoor gear and safety equipment'
      }
    },
    location: {
      name: 'Araku Valley',
      coordinates: {
        lat: 18.3273,
        lng: 82.8751
      },
      mapImage: '/images/packages/araku-valley-day-trip/location-map.jpg',
      landmarks: [
        'Borra Caves',
        'Tyda Tunnels',
        'Galikonda View Point',
        'Ananthagiri Coffee Plantation',
        'Padmapuram Gardens',
        'Tribal Museum'
      ]
    },
    additionalInfo: {
      bestTimeToVisit: 'October to March (Pleasant weather)',
      difficulty: 'Easy (Suitable for all age groups)',
      thingsToCarry: [
        'Comfortable walking shoes',
        'Camera',
        'Water bottle',
        'Sun protection',
        'Light jacket',
        'Cash for entry tickets',
        'Valid ID proof',
        'Personal medications',
        'Light snacks'
      ],
      highlights: {
        nature: [
          'Valley viewpoints',
          'Coffee plantations',
          'Natural caves',
          'Gardens'
        ],
        culture: [
          'Tribal museum',
          'Local coffee house',
          'Traditional crafts'
        ],
        adventure: [
          'Cave exploration',
          'Optional waterfall visit',
          'Scenic drives'
        ],
        photography: [
          'Panoramic views',
          'Cave formations',
          'Cultural shots'
        ]
      }
    }
  }
];
