export const taxiServices = [
  {
    id: 'vizag-araku',
    name: 'Taxi Service from Visakhapatnam to Araku',
    description: 'Comfortable taxi service from Vizag to Araku (6 AM to 8 PM) with minimum 300 KM limit. Kilometers and time counted from garage to garage.',
    vehicles: [
      {
        type: 'SWIFT DZIRE',
        basePrice: 4500,
        pricePerKm: 13,
        capacity: '4 Passengers',
        ac: true
      },
      {
        type: 'TOYOTA ETIOS',
        basePrice: 4700,
        pricePerKm: 14,
        capacity: '4 Passengers',
        ac: true
      },
      {
        type: 'TOYOTA INNOVA',
        basePrice: 6500,
        pricePerKm: 17,
        capacity: '7 Passengers',
        ac: true
      },
      {
        type: 'TOYOTA INNOVA CRISTA',
        basePrice: 7000,
        pricePerKm: 19,
        capacity: '7 Passengers',
        ac: true
      },
      {
        type: '12 SEATER TEMPO TRAVELLER',
        basePrice: 10000,
        pricePerKm: {
          ac: 26,
          nonAc: 24
        },
        capacity: '12 Passengers',
        ac: 'optional'
      },
      {
        type: '17 SEATER TEMPO TRAVELLER',
        basePrice: 11000,
        pricePerKm: {
          ac: 28,
          nonAc: 26
        },
        capacity: '17 Passengers',
        ac: 'optional'
      },
      {
        type: '24 SEATER BUS',
        basePrice: 18000,
        pricePerKm: {
          ac: 50,
          nonAc: 45
        },
        capacity: '24 Passengers',
        ac: 'optional'
      },
      {
        type: '40 SEATER BUS',
        basePrice: 22000,
        pricePerKm: {
          ac: 55,
          nonAc: 50
        },
        capacity: '40 Passengers',
        ac: 'optional'
      }
    ],
    inclusions: [
      'Tolls',
      'Parking',
      'Driver Beta'
    ],
    exclusions: [
      'Driver Food',
      'Additional Stops',
      'Waiting Charges',
      'Night Charges (8 PM - 6 AM)'
    ],
    features: [
      'Door-to-Door Service',
      'Professional Drivers',
      'GPS Tracking',
      'Clean & Sanitized',
      '24/7 Support'
    ],
    terms: [
      'Minimum 300 KM limit',
      'Extra charges for additional kilometers',
      'Kilometers counted from garage to garage',
      'Service hours: 6 AM to 8 PM',
      'Advance booking required'
    ],
    images: [
      'https://images.unsplash.com/photo-1623492701902-47dc207df5cf?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80'
    ]
  },
  {
    id: 'vizag-kakinada',
    name: 'Taxi Service from Visakhapatnam to Kakinada',
    description: 'Reliable taxi service from Vizag to Kakinada with minimum 12 Hours for minimum 400 KM limit. Kilometers and time counted from garage to garage.',
    vehicles: [
      {
        type: 'SWIFT DZIRE',
        basePrice: 6000,
        pricePerKm: 13,
        capacity: '4 Passengers',
        ac: true
      },
      {
        type: 'TOYOTA ETIOS',
        basePrice: 6500,
        pricePerKm: 14,
        capacity: '4 Passengers',
        ac: true
      },
      {
        type: 'TOYOTA INNOVA',
        basePrice: 7900,
        pricePerKm: 17,
        capacity: '7 Passengers',
        ac: true
      },
      {
        type: 'TOYOTA INNOVA CRISTA',
        basePrice: 8800,
        pricePerKm: 19,
        capacity: '7 Passengers',
        ac: true
      },
      {
        type: '12 SEATER TEMPO TRAVELLER',
        basePrice: 11800,
        pricePerKm: {
          ac: 26,
          nonAc: 24
        },
        capacity: '12 Passengers',
        ac: 'optional'
      },
      {
        type: '17 SEATER TEMPO TRAVELLER',
        basePrice: 12700,
        pricePerKm: {
          ac: 28,
          nonAc: 26
        },
        capacity: '17 Passengers',
        ac: 'optional'
      },
      {
        type: '24 SEATER BUS',
        basePrice: 22000,
        pricePerKm: {
          ac: 50,
          nonAc: 45
        },
        capacity: '24 Passengers',
        ac: 'optional'
      },
      {
        type: '40 SEATER BUS',
        basePrice: 26000,
        pricePerKm: {
          ac: 55,
          nonAc: 50
        },
        capacity: '40 Passengers',
        ac: 'optional'
      }
    ],
    inclusions: [
      'Tolls',
      'Parking',
      'Driver Beta'
    ],
    exclusions: [
      'Driver Food'
    ],
    features: [
      'Door-to-Door Service',
      'Professional Drivers',
      'GPS Tracking',
      'Clean & Sanitized',
      '24/7 Support',
      'Multiple Vehicle Options'
    ],
    terms: [
      'Minimum 12 Hours service',
      'Minimum 400 KM limit',
      'Extra charges for additional kilometers',
      'Kilometers counted from garage to garage',
      'Advance booking required'
    ],
    images: [
      'https://images.unsplash.com/photo-1623492701902-47dc207df5cf?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80'
    ]
  },
  {
    id: 'vizag-simhachalam',
    name: 'Taxi Service from Visakhapatnam to Simhachalam',
    description: 'Convenient taxi service from Vizag to Simhachalam with minimum 8 Hours for minimum 80 KM limit. Kilometers and time counted from garage to garage.',
    vehicles: [
      {
        type: 'SWIFT DZIRE',
        basePrice: 1800,
        pricePerKm: 13,
        extraHourRate: 180,
        capacity: '4 Passengers',
        ac: true
      },
      {
        type: 'TOYOTA ETIOS',
        basePrice: 2000,
        pricePerKm: 14,
        extraHourRate: 200,
        capacity: '4 Passengers',
        ac: true
      },
      {
        type: 'TOYOTA INNOVA',
        basePrice: 3500,
        pricePerKm: 17,
        extraHourRate: 350,
        capacity: '7 Passengers',
        ac: true
      },
      {
        type: 'TOYOTA INNOVA CRISTA',
        basePrice: 4500,
        pricePerKm: 19,
        extraHourRate: 450,
        capacity: '7 Passengers',
        ac: true
      },
      {
        type: '12 SEATER TEMPO TRAVELLER',
        basePrice: 5500,
        pricePerKm: {
          ac: 26,
          nonAc: 24
        },
        extraHourRate: 550,
        capacity: '12 Passengers',
        ac: 'optional'
      },
      {
        type: '17 SEATER TEMPO TRAVELLER',
        basePrice: 6000,
        pricePerKm: {
          ac: 28,
          nonAc: 26
        },
        extraHourRate: 600,
        capacity: '17 Passengers',
        ac: 'optional'
      },
      {
        type: '24 SEATER BUS',
        basePrice: 9000,
        pricePerKm: {
          ac: 50,
          nonAc: 45
        },
        extraHourRate: 900,
        capacity: '24 Passengers',
        ac: 'optional'
      },
      {
        type: '40 SEATER BUS',
        basePrice: 12000,
        pricePerKm: {
          ac: 55,
          nonAc: 50
        },
        extraHourRate: 1200,
        capacity: '40 Passengers',
        ac: 'optional'
      }
    ],
    inclusions: [
      'Tolls',
      'Parking'
    ],
    exclusions: [
      'Driver Food',
      'Driver Beta'
    ],
    features: [
      'Door-to-Door Service',
      'Professional Drivers',
      'GPS Tracking',
      'Clean & Sanitized',
      '24/7 Support',
      'Multiple Vehicle Options',
      'Extra Hour Flexibility'
    ],
    terms: [
      'Minimum 8 Hours service',
      'Minimum 80 KM limit',
      'Extra charges for additional kilometers',
      'Extra hour charges applicable',
      'Kilometers counted from garage to garage',
      'Advance booking required'
    ],
    images: [
      'https://images.unsplash.com/photo-1623492701902-47dc207df5cf?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80'
    ]
  },
  {
    id: 'vizag-vijayawada',
    name: 'Taxi Service from Visakhapatnam to Vijayawada',
    description: 'Long-distance taxi service from Vizag to Vijayawada with minimum 16 Hours for minimum 760 KM limit. Kilometers and time counted from garage to garage.',
    vehicles: [
      {
        type: 'SWIFT DZIRE',
        basePrice: 11600,
        pricePerKm: 13,
        capacity: '4 Passengers',
        ac: true
      },
      {
        type: 'TOYOTA ETIOS',
        basePrice: 12000,
        pricePerKm: 14,
        capacity: '4 Passengers',
        ac: true
      },
      {
        type: 'TOYOTA INNOVA',
        basePrice: 15600,
        pricePerKm: 17,
        capacity: '7 Passengers',
        ac: true
      },
      {
        type: 'TOYOTA INNOVA CRISTA',
        basePrice: 17200,
        pricePerKm: 19,
        capacity: '7 Passengers',
        ac: true
      },
      {
        type: '12 SEATER TEMPO TRAVELLER',
        basePrice: 22800,
        pricePerKm: {
          ac: 26,
          nonAc: 24
        },
        capacity: '12 Passengers',
        ac: 'optional'
      },
      {
        type: '17 SEATER TEMPO TRAVELLER',
        basePrice: 24400,
        pricePerKm: {
          ac: 28,
          nonAc: 26
        },
        capacity: '17 Passengers',
        ac: 'optional'
      },
      {
        type: '24 SEATER BUS',
        basePrice: 43000,
        pricePerKm: {
          ac: 50,
          nonAc: 45
        },
        capacity: '24 Passengers',
        ac: 'optional'
      },
      {
        type: '40 SEATER BUS',
        basePrice: 51500,
        pricePerKm: {
          ac: 55,
          nonAc: 50
        },
        capacity: '40 Passengers',
        ac: 'optional'
      }
    ],
    inclusions: [
      'Tolls',
      'Parking',
      'Driver Beta'
    ],
    exclusions: [
      'Driver Food'
    ],
    features: [
      'Door-to-Door Service',
      'Professional Drivers',
      'GPS Tracking',
      'Clean & Sanitized',
      '24/7 Support',
      'Multiple Vehicle Options',
      'Long Distance Comfort'
    ],
    terms: [
      'Minimum 16 Hours service',
      'Minimum 760 KM limit',
      'Extra charges for additional kilometers',
      'Kilometers counted from garage to garage',
      'Advance booking required',
      'Suitable for one-way and round trips'
    ],
    images: [
      'https://images.unsplash.com/photo-1623492701902-47dc207df5cf?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80'
    ]
  },
  {
    id: 'vizag-bhubaneswar',
    name: 'Taxi Service from Visakhapatnam to Bhubaneswar',
    description: 'Interstate taxi service from Vizag to Bhubaneswar with minimum 16 Hours for minimum 760 KM limit. Kilometers and time counted from garage to garage.',
    vehicles: [
      {
        type: 'SWIFT DZIRE',
        basePrice: 11800,
        pricePerKm: 13,
        capacity: '4 Passengers',
        ac: true
      },
      {
        type: 'TOYOTA ETIOS',
        basePrice: 12000,
        pricePerKm: 14,
        capacity: '4 Passengers',
        ac: true
      },
      {
        type: 'TOYOTA INNOVA',
        basePrice: 15600,
        pricePerKm: 17,
        capacity: '7 Passengers',
        ac: true
      },
      {
        type: 'TOYOTA INNOVA CRISTA',
        basePrice: 17200,
        pricePerKm: 19,
        capacity: '7 Passengers',
        ac: true
      },
      {
        type: '12 SEATER TEMPO TRAVELLER',
        basePrice: 22800,
        pricePerKm: {
          ac: 26,
          nonAc: 24
        },
        capacity: '12 Passengers',
        ac: 'optional'
      },
      {
        type: '17 SEATER TEMPO TRAVELLER',
        basePrice: 24400,
        pricePerKm: {
          ac: 28,
          nonAc: 26
        },
        capacity: '17 Passengers',
        ac: 'optional'
      },
      {
        type: '24 SEATER BUS',
        basePrice: 43000,
        pricePerKm: {
          ac: 50,
          nonAc: 45
        },
        capacity: '24 Passengers',
        ac: 'optional'
      },
      {
        type: '40 SEATER BUS',
        basePrice: 51500,
        pricePerKm: {
          ac: 55,
          nonAc: 50
        },
        capacity: '40 Passengers',
        ac: 'optional'
      }
    ],
    inclusions: [],
    exclusions: [
      'Tolls',
      'Parking',
      'Driver Beta',
      'Driver Food',
      'Orissa Border Tax'
    ],
    features: [
      'Door-to-Door Service',
      'Professional Drivers',
      'GPS Tracking',
      'Clean & Sanitized',
      '24/7 Support',
      'Multiple Vehicle Options',
      'Interstate Travel',
      'Long Distance Comfort'
    ],
    terms: [
      'Minimum 16 Hours service',
      'Minimum 760 KM limit',
      'Extra charges for additional kilometers',
      'Kilometers counted from garage to garage',
      'Advance booking required',
      'Interstate permit included',
      'Additional charges for Orissa border tax',
      'Suitable for one-way and round trips'
    ],
    images: [
      'https://images.unsplash.com/photo-1623492701902-47dc207df5cf?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80'
    ]
  },
  {
    id: 'vizag-annavaram',
    name: 'Taxi Service from Visakhapatnam to Annavaram',
    description: 'Comfortable taxi service from Vizag to Annavaram with minimum 12 Hours for minimum 300 KM limit. Kilometers and time counted from garage to garage.',
    vehicles: [
      {
        type: 'SWIFT DZIRE',
        basePrice: 4800,
        pricePerKm: 13,
        capacity: '4 Passengers',
        ac: true
      },
      {
        type: 'TOYOTA ETIOS',
        basePrice: 5000,
        pricePerKm: 14,
        capacity: '4 Passengers',
        ac: true
      },
      {
        type: 'TOYOTA INNOVA',
        basePrice: 6100,
        pricePerKm: 17,
        capacity: '7 Passengers',
        ac: true
      },
      {
        type: 'TOYOTA INNOVA CRISTA',
        basePrice: 7700,
        pricePerKm: 19,
        capacity: '7 Passengers',
        ac: true
      },
      {
        type: '12 SEATER TEMPO TRAVELLER',
        basePrice: 9000,
        pricePerKm: {
          ac: 26,
          nonAc: 24
        },
        capacity: '12 Passengers',
        ac: 'optional'
      },
      {
        type: '17 SEATER TEMPO TRAVELLER',
        basePrice: 9500,
        pricePerKm: {
          ac: 28,
          nonAc: 26
        },
        capacity: '17 Passengers',
        ac: 'optional'
      },
      {
        type: '24 SEATER BUS',
        basePrice: 17000,
        pricePerKm: {
          ac: 50,
          nonAc: 45
        },
        capacity: '24 Passengers',
        ac: 'optional'
      },
      {
        type: '40 SEATER BUS',
        basePrice: 20000,
        pricePerKm: {
          ac: 55,
          nonAc: 50
        },
        capacity: '40 Passengers',
        ac: 'optional'
      }
    ],
    inclusions: [
      'Tolls',
      'Parking',
      'Driver Beta'
    ],
    exclusions: [
      'Driver Food'
    ],
    features: [
      'Door-to-Door Service',
      'Professional Drivers',
      'GPS Tracking',
      'Clean & Sanitized',
      '24/7 Support',
      'Multiple Vehicle Options',
      'Perfect for Temple Visits',
      'Group Travel Options'
    ],
    terms: [
      'Minimum 12 Hours service',
      'Minimum 300 KM limit',
      'Extra charges for additional kilometers',
      'Kilometers counted from garage to garage',
      'Advance booking required',
      'Suitable for darshan visits',
      'Ideal for group pilgrimages'
    ],
    images: [
      'https://images.unsplash.com/photo-1623492701902-47dc207df5cf?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80'
    ]
  }
];
