export const busPackages = {
  bus24: {
    name: "24 Seater AC Bus",
    capacity: "24+1 Seater",
    description: "24 Guest, 1 Driver (24+1)",
    minCharge: 8000,
    packages: [
      {
        name: "Visakhapatnam City Tour",
        cost: 8000
      },
      {
        name: "1 Day Araku Tour",
        cost: 14000
      },
      {
        name: "1 Day Temple Tour",
        description: "Arasavelli, Srikurmam, Srimukhalingam, Rama Banam, Rama Thirdam",
        cost: 21500
      },
      {
        name: "1 Day Temple Trip",
        description: "Annavaram, Pitapuram, Thalupulamma Lova Temple, Simhachalam",
        cost: 22500
      },
      {
        name: "1 Day Lammasinghi Trip",
        cost: 14000
      },
      {
        name: "2 Days Lammasinghi Trip",
        cost: 22500
      },
      {
        name: "1 Day Vanjangi Trip",
        cost: 17000
      },
      {
        name: "2 Days Vanjangi Trip",
        cost: 20000
      }
    ],
    cityRates: {
      minimumHours: 10,
      minimumKm: 80,
      baseCost: 8000,
      extraHourCost: 800,
      extraKmCost: 42
    },
    outstation: {
      minimumKmPerDay: 300,
      perKmCost: 42
    },
    additionalCharges: {
      nightHalt: 3000,
      driverBeta: 600
    }
  },
  bus40: {
    name: "40 Seater AC Bus",
    capacity: "40+1 Seater",
    description: "40 Guest, 1 Driver (40+1)",
    minCharge: 11000,
    packages: [
      {
        name: "Visakhapatnam City Tour",
        cost: 11000
      },
      {
        name: "1 Day Araku Tour",
        cost: 18000
      },
      {
        name: "1 Day Temple Tour",
        description: "Arasavelli, Srikurmam, Srimukhalingam",
        cost: 26500
      },
      {
        name: "1 Day Temple Trip",
        description: "Annavaram, Pitapuram, Thalupulamma Lova Temple, Simhachalam",
        cost: 26500
      },
      {
        name: "1 Day Lammasinghi Trip",
        cost: 18000
      },
      {
        name: "2 Days Lammasinghi Trip",
        cost: 26000
      },
      {
        name: "1 Day Vanjangi Trip",
        cost: 17000
      },
      {
        name: "2 Days Vanjangi Trip",
        cost: 25000
      }
    ],
    cityRates: {
      minimumHours: 10,
      minimumKm: 80,
      baseCost: 11000,
      extraHourCost: 1100,
      extraKmCost: 60
    },
    outstation: {
      minimumKmPerDay: 300,
      perKmCost: 60
    },
    additionalCharges: {
      nightHalt: 3000,
      driverBeta: 1000
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
