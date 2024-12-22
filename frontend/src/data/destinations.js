export const destinations = [
  {
    id: 'araku-valley',
    name: 'Araku Valley',
    reviews: 245,
    rating: 4.5,
    distance: '115 km from Vizag',
    description: 'Experience the scenic beauty of Eastern Ghats with coffee plantations and tribal culture.',
    detailedDescription: "Araku Valley is a stunning hill station nestled in the Eastern Ghats of Andhra Pradesh. Known for its breathtaking landscapes, coffee plantations, and rich tribal culture, this valley offers a perfect escape from city life. The journey to Araku itself is an experience, featuring one of India's most scenic train routes through tunnels and bridges.\n\nThe valley is home to various tribal communities who maintain their traditional way of life. The region's unique microclimate makes it perfect for coffee cultivation, and the Araku coffee has gained international recognition for its quality. Visitors can explore coffee plantations, learn about the coffee-making process, and even participate in coffee tasting sessions.\n\nThroughout the year, the valley maintains a pleasant climate, making it an ideal destination for nature lovers and adventure enthusiasts. The surrounding hills offer excellent opportunities for trekking, while the various waterfalls and viewpoints provide perfect spots for photography and relaxation.",
    images: [
      'https://source.unsplash.com/1600x900/?valley,mountains',
      'https://source.unsplash.com/1600x900/?plantation,coffee',
      'https://source.unsplash.com/1600x900/?tribal,culture',
      'https://source.unsplash.com/1600x900/?waterfall,nature',
      'https://source.unsplash.com/1600x900/?hills,sunset'
    ],
    highlights: [
      'Coffee Plantations',
      'Tribal Villages',
      'Scenic Train Journey',
      'Pleasant Climate',
      'Adventure Activities',
      'Waterfalls',
      'Organic Markets',
      'Cultural Experiences'
    ],
    bestTimeToVisit: 'October to March',
    weather: {
      summer: 'Moderate temperatures between 20°C to 34°C',
      winter: 'Cool climate with temperatures between 12°C to 25°C',
      monsoon: 'Heavy rainfall from July to September'
    },
    thingsToSee: [
      {
        name: 'Padmapuram Gardens',
        description: 'A beautiful botanical garden spread across 26 acres, featuring exotic flowers and plants.',
        timings: '9:00 AM to 5:00 PM',
        entryFee: '₹50 per person'
      },
      {
        name: 'Tribal Museum',
        description: 'Showcases the rich cultural heritage and lifestyle of local tribal communities.',
        timings: '10:00 AM to 6:00 PM',
        entryFee: '₹30 per person'
      },
      {
        name: 'Coffee Museum',
        description: 'Learn about coffee cultivation, processing, and the history of Araku coffee.',
        timings: '9:30 AM to 5:30 PM',
        entryFee: '₹40 per person'
      },
      {
        name: 'Chaparai Waterfalls',
        description: 'A picturesque waterfall perfect for picnics and photography.',
        timings: 'Open 24 hours',
        entryFee: 'Free'
      },
      {
        name: 'Ananthagiri Hills',
        description: 'Offers panoramic views of the valley and excellent trekking opportunities.',
        timings: 'Open 24 hours',
        entryFee: 'Free'
      }
    ],
    activities: [
      {
        name: 'Coffee Plantation Tour',
        description: 'Visit coffee plantations and learn about coffee cultivation, processing, and tasting.',
        duration: '2-3 hours',
        price: '₹500 per person',
        image: 'https://source.unsplash.com/1600x900/?coffee,plantation',
        includes: [
          'Guide',
          'Coffee tasting session',
          'Transportation within plantation',
          'Snacks'
        ]
      },
      {
        name: 'Tribal Village Visit',
        description: 'Experience the local tribal culture, traditional dances, and lifestyle.',
        duration: '4-5 hours',
        price: '₹800 per person',
        image: 'https://source.unsplash.com/1600x900/?tribal,village',
        includes: [
          'Local guide',
          'Traditional lunch',
          'Cultural performance',
          'Handicraft demonstration'
        ]
      },
      {
        name: 'Trekking',
        description: 'Trek through the scenic Eastern Ghats with experienced guides.',
        duration: '3-4 hours',
        price: '₹1000 per person',
        image: 'https://source.unsplash.com/1600x900/?trekking,adventure',
        includes: [
          'Professional guide',
          'Safety equipment',
          'Packed lunch',
          'First aid kit'
        ]
      }
    ],
    howToReach: {
      byAir: 'Nearest airport is Visakhapatnam International Airport (115 km). Taxis available from airport to Araku.',
      byTrain: 'Direct trains available from Visakhapatnam to Araku. The journey offers scenic views through 58 tunnels.',
      byRoad: 'Well-connected by road from Visakhapatnam. Regular buses and taxis available. The ghat road offers beautiful views.'
    },
    tips: [
      'Book train tickets in advance as they get filled quickly',
      'Carry warm clothes as evenings can be cool',
      'Best to visit waterfalls during monsoon or post-monsoon',
      'Try the local bamboo chicken, a tribal specialty',
      'Visit the organic market for local produce and spices'
    ]
  },
  {
    id: 'rk-beach',
    name: 'RK Beach',
    reviews: 320,
    rating: 4.3,
    distance: 'In the heart of Vizag',
    description: 'Iconic beach with submarine museum and stunning views of sunrise.',
    detailedDescription: "RK Beach, also known as Ramakrishna Beach, is one of Vizag's most popular attractions. This pristine beach offers spectacular views of sunrise over the Bay of Bengal and hosts several notable attractions including the famous submarine museum.\n\nThe beach is named after the Ramakrishna Mission ashram nearby. It's not just a beach but a complete entertainment zone with museums, parks, and various activities. The beach promenade is perfect for morning walks and evening strolls, offering a vibrant atmosphere with food stalls and street vendors.\n\nThe INS Kursura Submarine Museum, one of its kind in Asia, is a major highlight. The TU-142 Aircraft Museum nearby adds to the maritime attractions. The beach is well-maintained and offers various water sports activities for adventure enthusiasts.",
    images: [
      'https://source.unsplash.com/1600x900/?beach,sunrise',
      'https://source.unsplash.com/1600x900/?submarine,museum',
      'https://source.unsplash.com/1600x900/?beach,activities'
    ],
    highlights: [
      'Submarine Museum',
      'Sunrise Views',
      'Beach Activities',
      'Food Stalls',
      'Evening Walks',
      'Aircraft Museum',
      'War Memorial',
      'Water Sports'
    ],
    bestTimeToVisit: 'October to February',
    weather: {
      summer: 'Hot and humid with temperatures between 30°C to 38°C',
      winter: 'Pleasant with temperatures between 20°C to 28°C',
      monsoon: 'Moderate rainfall from July to September'
    },
    thingsToSee: [
      {
        name: 'INS Kursura Submarine Museum',
        description: 'First submarine museum of South Asia, showcasing naval history',
        timings: '10:00 AM to 8:00 PM',
        entryFee: '₹40 per person'
      },
      {
        name: 'TU 142 Aircraft Museum',
        description: 'Decommissioned aircraft converted into an interactive museum',
        timings: '10:00 AM to 8:00 PM',
        entryFee: '₹50 per person'
      },
      {
        name: 'Victory at Sea War Memorial',
        description: 'Memorial dedicated to sailors who lost their lives in 1971 war',
        timings: 'Open 24 hours',
        entryFee: 'Free'
      },
      {
        name: 'Visakha Museum',
        description: "Showcases city's history and maritime heritage",
        timings: '10:00 AM to 5:00 PM',
        entryFee: '₹20 per person'
      }
    ],
    activities: [
      {
        name: 'Water Sports',
        description: 'Enjoy jet skiing, banana boat rides, and speed boat rides',
        duration: '15-30 minutes per activity',
        price: '₹300-800 per person',
        image: 'https://source.unsplash.com/1600x900/?watersports',
        includes: [
          'Safety equipment',
          'Instructor',
          'Life jacket',
          'Basic training'
        ]
      },
      {
        name: 'Beach Photography',
        description: 'Capture stunning sunrise and beach views',
        duration: '1-2 hours',
        price: 'Free',
        image: 'https://source.unsplash.com/1600x900/?beach,photography',
        includes: [
          'Multiple photo spots',
          'Natural lighting',
          'Scenic backgrounds'
        ]
      },
      {
        name: 'Museum Tours',
        description: 'Guided tours of submarine and aircraft museums',
        duration: '2-3 hours',
        price: '₹100 per person',
        image: 'https://source.unsplash.com/1600x900/?museum,submarine',
        includes: [
          'Expert guide',
          'Museum entry tickets',
          'Historical information',
          'Photo opportunities'
        ]
      }
    ],
    howToReach: {
      byAir: 'Nearest airport is Visakhapatnam International Airport (16 km)',
      byTrain: 'Nearest railway station is Visakhapatnam Railway Station (2 km)',
      byRoad: 'Well connected by city buses and auto-rickshaws'
    },
    tips: [
      'Visit early morning for sunrise views',
      'Carry sunscreen and hat during daytime',
      'Book museum tickets online to avoid queues',
      'Best photos during golden hour',
      'Try local street food in the evening'
    ]
  },
  {
    id: 'borra-caves',
    name: 'Borra Caves',
    reviews: 180,
    distance: '90 km from Vizag',
    description: 'One of the largest caves in the Indian subcontinent, known for its stunning stalactite and stalagmite formations.',
    images: [
      'https://source.unsplash.com/1600x900/?cave,rocks',
      'https://source.unsplash.com/1600x900/?stalactite',
      'https://source.unsplash.com/1600x900/?caves,underground'
    ],
    highlights: [
      'Million-year-old Formations',
      'LED Lighting System',
      'Natural Skylight',
      'Underground Streams'
    ],
    bestTimeToVisit: 'October to March',
    thingsToSee: [
      'Limestone Formations',
      'Ancient Rock Art',
      'Underground River',
      'Natural Sculptures'
    ],
    activities: [
      {
        name: 'Guided Cave Tour',
        description: 'Explore the stunning cave formations with a guided tour',
        duration: '1-2 hours',
        price: '₹50 per person',
        image: 'https://source.unsplash.com/1600x900/?cave,tour'
      },
      {
        name: 'Underground Stream Visit',
        description: 'Visit the underground stream and explore the cave formations',
        duration: '1-2 hours',
        price: '₹20 per person',
        image: 'https://source.unsplash.com/1600x900/?underground,stream'
      },
      {
        name: 'Cave Temple Visit',
        description: 'Visit the ancient cave temple and explore its history',
        duration: '1-2 hours',
        price: 'Free',
        image: 'https://source.unsplash.com/1600x900/?cave,temple'
      }
    ],
    howToReach: {
      byTrain: 'Nearest railway station is Araku Railway Station (35 km)',
      byRoad: 'Drive through the scenic ghat roads. The journey takes about 2 hours from Visakhapatnam.',
      byBus: 'Regular APSRTC buses are available from Visakhapatnam to Borra Caves.'
    },
    essentialInfo: {
      bestTime: 'October to March for pleasant weather',
      duration: '2-3 hours',
      facilities: 'Restaurants, washrooms, parking available',
      food: 'Local tribal cuisine, South Indian food',
      tips: [
        'Book guided tour tickets in advance',
        'Carry warm clothes during winter',
        'Try local bamboo chicken',
        'Visit cave temple early morning'
      ]
    },
    coordinates: {
      lat: 18.2858,
      lng: 83.0387
    }
  },
  {
    id: 'kailasagiri',
    name: 'Kailasagiri',
    reviews: 275,
    rating: 4.4,
    distance: '10 km from city center',
    description: 'Hilltop park offering panoramic views of the city and giant Shiva-Parvati statue.',
    detailedDescription: "Kailasagiri is a picturesque hilltop park that offers breathtaking panoramic views of Vizag city and the Bay of Bengal. The park is famous for its massive Shiva-Parvati statue and is accessible by a scenic ropeway ride.\n\nSpread over 100 acres of lush green hills, Kailasagiri is not just about views - it's a complete family entertainment destination. The park features beautiful gardens, a toy train, multiple viewing points, and various recreational activities. The circular train journey around the hill is particularly popular among visitors.\n\nThe park gets its name from the 40-foot tall Shiva-Parvati statue that sits atop the hill. The location offers spectacular views of sunrise and sunset, making it a favorite spot for photographers and nature lovers.",
    images: [
      'https://source.unsplash.com/1600x900/?hillstation,park',
      'https://source.unsplash.com/1600x900/?ropeway,cable-car',
      'https://source.unsplash.com/1600x900/?city-view,sunset'
    ],
    highlights: [
      'Panoramic City Views',
      'Ropeway Ride',
      'Shiva-Parvati Statue',
      'Toy Train',
      'Floral Clock',
      'Children\'s Park',
      'Sunset Point',
      'Food Court'
    ],
    bestTimeToVisit: 'October to March',
    weather: {
      summer: 'Warm with temperatures between 25°C to 35°C',
      winter: 'Pleasant with temperatures between 18°C to 28°C',
      monsoon: 'Beautiful greenery with occasional rains'
    },
    thingsToSee: [
      {
        name: 'Shiva-Parvati Statue',
        description: '40-foot tall statue overlooking the city',
        timings: 'Open during park hours',
        entryFee: 'Included in park entry'
      },
      {
        name: 'Floral Clock',
        description: 'Unique timepiece made with flowering plants',
        timings: 'Open during park hours',
        entryFee: 'Included in park entry'
      },
      {
        name: 'Viewing Points',
        description: 'Multiple points offering city and sea views',
        timings: 'Best during sunrise and sunset',
        entryFee: 'Included in park entry'
      }
    ],
    activities: [
      {
        name: 'Ropeway Ride',
        description: 'Scenic cable car ride to the hilltop',
        duration: '15 minutes',
        price: '₹200 per person round trip',
        image: 'https://source.unsplash.com/1600x900/?ropeway',
        includes: [
          'Return journey',
          'Safety briefing',
          'Scenic views'
        ]
      },
      {
        name: 'Toy Train Ride',
        description: 'Circular train journey around the hill',
        duration: '30 minutes',
        price: '₹50 per person',
        image: 'https://source.unsplash.com/1600x900/?toy-train',
        includes: [
          'Guided tour',
          'Multiple stops',
          'Photo opportunities'
        ]
      }
    ],
    howToReach: {
      byAir: 'Nearest airport is Visakhapatnam International Airport (15 km)',
      byTrain: 'Nearest railway station is Visakhapatnam Railway Station (12 km)',
      byRoad: 'Regular buses and taxis available from city'
    },
    tips: [
      'Visit during sunset for best views',
      'Book ropeway tickets in advance during peak season',
      'Carry water and snacks',
      'Wear comfortable walking shoes',
      'Allow 2-3 hours for complete visit'
    ]
  },
  {
    id: 'yarada-beach',
    name: 'Yarada Beach',
    reviews: 150,
    distance: '15 km from Vizag',
    description: 'A pristine beach surrounded by hills on three sides, offering stunning views of the Bay of Bengal.',
    images: [
      'https://source.unsplash.com/1600x900/?beach,sunset',
      'https://source.unsplash.com/1600x900/?beach,hills',
      'https://source.unsplash.com/1600x900/?ocean,waves'
    ],
    highlights: [
      'Golden Sands',
      'Dolphin\'s Nose Lighthouse',
      'Scenic Drive',
      'Sunrise Views'
    ],
    bestTimeToVisit: 'November to February',
    thingsToSee: [
      'Lighthouse',
      'Beach Activities',
      'Sunset Point',
      'Local Fishing'
    ],
    activities: [
      {
        name: 'Beach Relaxation',
        description: 'Relax and unwind on the secluded beach',
        duration: '2-3 hours',
        price: 'Free',
        image: 'https://source.unsplash.com/1600x900/?beach,relaxation'
      },
      {
        name: 'Dolphin View Point Visit',
        description: 'Visit the dolphin view point and spot dolphins in their natural habitat',
        duration: '1-2 hours',
        price: 'Free',
        image: 'https://source.unsplash.com/1600x900/?dolphin,view'
      },
      {
        name: 'Scenic Drive',
        description: 'Take a scenic drive along the beach and enjoy the views',
        duration: '1-2 hours',
        price: 'Free',
        image: 'https://source.unsplash.com/1600x900/?scenic,drive'
      }
    ],
    howToReach: {
      byTrain: 'Nearest railway station is Visakhapatnam Railway Station (15 km)',
      byRoad: 'Drive through the scenic ghat roads. The journey takes about 30 minutes from Visakhapatnam.',
      byBus: 'Regular APSRTC buses are available from Visakhapatnam to Yarada Beach.'
    },
    essentialInfo: {
      bestTime: 'October to March for pleasant weather',
      duration: '2-3 hours',
      facilities: 'Restaurants, washrooms, parking available',
      food: 'Local seafood, South Indian food',
      tips: [
        'Book beach activities in advance',
        'Carry warm clothes during winter',
        'Try local seafood',
        'Visit during sunset for best views'
      ]
    },
    coordinates: {
      lat: 17.6568,
      lng: 83.2726
    }
  },
  {
    id: 'simhachalam-temple',
    name: 'Simhachalam Temple',
    reviews: 420,
    rating: 4.6,
    distance: '12 km from city center',
    description: 'Ancient temple dedicated to Lord Narasimha with unique architecture and spiritual significance.',
    detailedDescription: "Simhachalam Temple, dedicated to Lord Narasimha (half-lion and half-man avatar of Lord Vishnu), is one of the most important Vaishnavite temples in Andhra Pradesh. The temple is known for its exquisite architecture and religious significance.\n\nBuilt in the 11th century, the temple showcases a unique combination of Kalinga and Dravidian architectural styles. The temple is situated on a hill, offering peaceful surroundings and beautiful views. The main deity is covered with sandalwood paste throughout the year, except for one day during Akshaya Tritiya.\n\nThe temple complex includes several mandapams, gardens, and other shrines. The intricate stone carvings on the walls depict various mythological stories and are a testament to the architectural brilliance of ancient times.",
    images: [
      'https://source.unsplash.com/1600x900/?temple,architecture',
      'https://source.unsplash.com/1600x900/?hindu-temple',
      'https://source.unsplash.com/1600x900/?religious,spiritual'
    ],
    highlights: [
      'Ancient Architecture',
      'Religious Significance',
      'Stone Carvings',
      'Peaceful Atmosphere',
      'Hilltop Location',
      'Traditional Rituals',
      'Temple Gardens',
      'Prasadam Distribution'
    ],
    bestTimeToVisit: 'Year-round, especially during festivals',
    weather: {
      summer: 'Warm with temperatures between 28°C to 35°C',
      winter: 'Pleasant with temperatures between 20°C to 30°C',
      monsoon: 'Moderate rainfall with green surroundings'
    },
    thingsToSee: [
      {
        name: 'Main Temple',
        description: 'Ancient shrine with unique architecture',
        timings: '6:00 AM to 8:00 PM',
        entryFee: 'Free entry, special darshan tickets available'
      },
      {
        name: 'Stone Carvings',
        description: 'Intricate sculptures depicting mythology',
        timings: 'During temple hours',
        entryFee: 'Included in entry'
      },
      {
        name: 'Temple Gardens',
        description: 'Well-maintained gardens around temple',
        timings: 'During temple hours',
        entryFee: 'Free'
      }
    ],
    activities: [
      {
        name: 'Temple Darshan',
        description: 'Worship and view the deity',
        duration: '30-60 minutes',
        price: 'Free (Special darshan: ₹100)',
        image: 'https://source.unsplash.com/1600x900/?temple,worship',
        includes: [
          'Darshan',
          'Prasadam',
          'Basic puja items'
        ]
      },
      {
        name: 'Architecture Tour',
        description: 'Guided tour of temple architecture',
        duration: '1-2 hours',
        price: '₹200 per person',
        image: 'https://source.unsplash.com/1600x900/?temple,architecture',
        includes: [
          'Expert guide',
          'Historical information',
          'Photo opportunities'
        ]
      }
    ],
    howToReach: {
      byAir: 'Nearest airport is Visakhapatnam International Airport (20 km)',
      byTrain: 'Nearest railway station is Visakhapatnam Railway Station (15 km)',
      byRoad: 'Regular buses and taxis available from city'
    },
    tips: [
      'Visit early morning to avoid crowds',
      'Dress modestly as per temple norms',
      'Remove footwear before entering',
      'Photography may be restricted inside',
      'Plan visit during festivals for special celebrations'
    ]
  }
];
