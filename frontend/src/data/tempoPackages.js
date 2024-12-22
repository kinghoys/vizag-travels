export const tempoPackages = {
  tempo12: {
    name: "12 Seater Tempo Traveler",
    capacity: "12+1 Seater",
    description: "12 Guest, 1 Driver (12+1)",
    minCharge: 5200,
    packages: [
      {
        name: "Visakhapatnam City Tour",
        cost: 5200
      },
      {
        name: "1 Day Araku Tour",
        cost: 8500
      },
      {
        name: "1 Day Temple Tour",
        description: "Arasavelli, Srikurmam, Srimukhalingam, Rama Banam, Rama Thirdam",
        cost: 12050
      },
      {
        name: "1 Day Temple Trip",
        description: "Annavaram, Pitapuram, Thalupulamma Lova Temple, Anakapalli Nukambika Temple, Simhachalam",
        cost: 12050
      },
      {
        name: "1 Day Lammasinghi Trip",
        cost: 9000
      },
      {
        name: "2 Days Lammasinghi Trip",
        cost: 13000
      },
      {
        name: "1 Day Vanjangi Trip",
        cost: 8000
      },
      {
        name: "2 Days Vanjangi Trip",
        cost: 12000
      }
    ],
    cityRates: {
      minimumHours: 10,
      minimumKm: 80,
      baseCost: 5000,
      extraHourCost: 500,
      extraKmCost: 25
    },
    outstation: {
      minimumKmPerDay: 300,
      perKmCost: 25
    },
    additionalCharges: {
      nightHalt: 2000,
      driverBeta: 500
    }
  },
  tempo17: {
    name: "17 Seater AC Tempo Traveler",
    capacity: "17+1 Seater",
    description: "17 Guest, 1 Driver (17+1)",
    minCharge: 5999,
    packages: [
      {
        name: "Visakhapatnam City Tour",
        cost: 5999
      },
      {
        name: "1 Day Araku Tour",
        cost: 9999
      },
      {
        name: "1 Day Temple Tour",
        description: "Arasavelli, Srikurmam, Srimukhalingam, Rama Banam, Rama Thirdam",
        cost: 13200
      },
      {
        name: "1 Day Temple Trip",
        description: "Annavaram, Pitapuram, Thalupulamma Lova Temple, Anakapalli Nukambika Temple, Simhachalam",
        cost: 13200
      },
      {
        name: "1 Day Lammasinghi Trip",
        cost: 9000
      },
      {
        name: "2 Days Lammasinghi Trip",
        cost: 13000
      },
      {
        name: "1 Day Vanjangi Trip",
        cost: 8500
      },
      {
        name: "2 Days Vanjangi Trip",
        cost: 12500
      }
    ],
    cityRates: {
      minimumHours: 10,
      minimumKm: 80,
      baseCost: 6000,
      extraHourCost: 600,
      extraKmCost: 28
    },
    outstation: {
      minimumKmPerDay: 300,
      perKmCost: 28
    },
    additionalCharges: {
      nightHalt: 2000,
      driverBeta: 500
    }
  }
};

export const commonExclusions = [
  "Driver Beta",
  "Tolls and Parking",
  "Border Tax"
];

export const commonNotes = [
  "Border Tax, Tolls and Parking to be paid by Customer",
  "Night halt charges and driver beta are additional",
  "Minimum booking charges apply",
  "All rates are subject to change during peak seasons"
];
